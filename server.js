var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http)
    
var stack = {}, 
    connected_users = {}, 
    mutex = false,
    queue = false
    
http.listen(process.env.PORT || 8080, () => console.log('listening on *:8080'))
    
/*--------------------------------------------------------------------------------------------------*/

app.use(express.static(path.join(__dirname, '/Dest')))

io.on('connection', (socket) => {  
  socket.on('sms', (data) => {
    if(connected_users[socket.id] !== undefined) {
      Alert()
      io.sockets.connected[connected_users[socket.id]].emit('sms_from_server', data)
    }
  })
  
  socket.on('join_queue', (data) => {
    if(connected_users[socket.id] !== undefined) {
      io.sockets.connected[connected_users[socket.id]].emit('sending_control')
      delete connected_users[connected_users[socket.id]]
      delete connected_users[socket.id]
    }
    
    stack[socket.id] = { id: socket.id, ...data }
    
    if(Object.keys(stack).length > 1) {
      if(mutex) {
        queue = true
      } else {
        mutex = true
        connect()
      }
    } 
    Alert()
  })
  
  socket.on('disconnect', () => {
    if(io.sockets.connected[connected_users[socket.id]] !== undefined) {
      io.sockets.connected[connected_users[socket.id]].emit('sending_control')
      delete connected_users[connected_users[socket.id]]
      delete connected_users[socket.id]
    } else {
      delete stack[socket.id]  
    }
    Alert()
  })
})

const connect = async () => {
  let array = [], first, second
  
  for(key in stack) {
    array.push(key)
  }
  
  for(let i = 0; i < array.length; i++) {
    first = stack[array[i]]
    
    for(let j = i + 1; j < array.length; j++) {
      second = stack[array[j]]
      
      if(
        first.m_a >= second.s_a[0] && first.m_a <= second.s_a[1] && first.m_g === second.s_g &&
        second.m_a >= first.s_a[0] && second.m_a <= first.s_a[1] && second.m_g === first.s_g 
      ) {
        connected_users[array[i]] = array[j]
        connected_users[array[j]] = array[i]
        
        await io.sockets.connected[array[i]].emit('sending_control')
        await io.sockets.connected[array[j]].emit('sending_control')
        
        delete stack[array[i]]
        delete stack[array[j]]
        
        array.splice(i, 1)
        array.splice(j - 1, 1)
      }
    }
  }
  
  if(queue) {
    queue = false
    connect()
  } else {
    mutex = false
  }
}

const Alert = () => {
  console.log('Stack:', stack, '\nConnected users:', connected_users)
}