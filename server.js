var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http)
    
var stack = {}, 
    connected_users = {}, 
    mutex = false
    
http.listen(process.env.PORT || 8080, () => console.log('listening on *:8080'))
    
/*--------------------------------------------------------------------------------------------------*/

app.use(express.static(path.join(__dirname, '/Dest')))

io.on('connection', (socket) => {
  console.log('connected:', socket.id)
  
  socket.on('sms', (data) => {
    io.sockets.connected[connected_users[socket.id]].emit('sms_from_server', data)
  })
  
  socket.on('join_queue', async (data) => {
    if(connected_users[socket.id] !== undefined) {
      io.sockets.connected[connected_users[socket.id]].emit('server_allows_joining')
      io.sockets.connected[socket.id].emit('server_allows_joining')
      delete connected_users[connected_users[socket.id]]
      delete connected_users[socket.id]
    }
    
    stack[socket.id] = { id: socket.id, ...data }
    console.log('User joining the queue', stack)
    
    if(!mutex && Object.keys(stack).length > 1) {
      mutex = true
      await connect()
      mutex = false
    } 
  })
  
  socket.on('disconnect', () => {
    if(io.sockets.connected[connected_users[socket.id]] !== undefined){
      io.sockets.connected[connected_users[socket.id]].emit('server_allows_joining')
      delete connected_users[connected_users[socket.id]]
      delete connected_users[socket.id]
    } else {
      delete stack[socket.id]  
    }
  })
})

const connect = () => new Promise((resolve, reject) => {
  let array = [], first, second
  
  for(key in stack) {
    array.push(key)
  }
  
  for(let i = 0; i < array.length; i++) {
    console.log(array)
    
    first = stack[array[i]]
    
    for(let j = i + 1; j < array.length; j++) {
      second = stack[array[j]]
      
      if(
        first.m_a >= second.s_a[0] && first.m_a <= second.s_a[1] && first.m_g === second.s_g &&
        second.m_a >= first.s_a[0] && second.m_a <= first.s_a[1] && second.m_g === first.s_g 
      ) {
        connected_users[array[i]] = array[j]
        connected_users[array[j]] = array[i]
        
        io.sockets.connected[array[i]].emit('server_allows_joining')
        io.sockets.connected[array[j]].emit('server_allows_joining')
        
        array.splice(i, 1)
        array.splice(j - 1, 1)
        
        delete stack[array[i]]
        delete stack[array[j]]
      }
    }
  }
  
  resolve()
})