var express = require('express'),
    app = express(),
    path = require('path'),
    http = require('http').Server(app),
    io = require('socket.io')(http)
    
var stack = {}, 
    connected_users = {}, 
    mutex = false
    
/*--------------------------------------------------------------------------------------------------*/

app.use(express.static(path.join(__dirname, '/Dest')))

io.on('connection', (socket) => {
  console.log('connected:', socket.id)
  
  socket.on('sms', (data) => {
    io.sockets.connected[connected_users[socket.id]].emit('sms_from_server', data)
  })
  
  socket.on('join_queue', async (data) => {
    console.log('User joining the queue', stack)

    stack[socket.id] = { id: socket.id, ...data }
    
    if(!mutex) {
      mutex = true
      await connect()
      mutex = false
    }
  })
  
  socket.on('disconnect', () => {
    delete stack[socket.id]  
    delete connected_users[socket.id]
    delete connected_users[connected_users[socket.id]]
    
    io.sockets.connected[connected_users[socket.id]].emit('server_allows_joining')
  })
})

const connect = () => new Promise((resolve, reject) => {
  let array = []
  
  for(key in stack) {
    array.push(key)
  }
  
  connected_users[array[0]] = array[1]
  connected_users[array[1]] = array[0]
  
  delete stack[array[0]]
  delete stack[array[1]]
  
  io.sockets.connected[array[0]].emit('server_allows_joining')
  io.sockets.connected[array[1]].emit('server_allows_joining')
})

http.listen(process.env.PORT || 8080, () => console.log('listening on *:8080'))