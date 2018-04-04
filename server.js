var express = require('express')
var app = express()
var path = require('path')
var http = require('http').Server(app)
var io = require('socket.io')(http)

let stack = {}, connected_users = {}

app.use(express.static(path.join(__dirname, '/Dest')))

io.on('connection', (socket) => {
  console.log('connected:', socket.id)
  
  socket.on('sms', (data) => {
    io.sockets.connected[connected_users[socket.id]].emit('sms_from_server', data)
  })
  
  socket.on('join_queue', async (data) => {
    stack[socket.id] = {id: socket.id, ...data}
    console.log('User joining the queue', stack)
  })
  
  socket.on('disconnect', () => {
    delete stack[socket.id]
    
    io.sockets.connected[connected_users[socket.id]].emit('server_allows_joining')
    
    delete connected_users[socket.id]
    delete connected_users[socket.id]
    
  })
})

const connect = () => {
  setInterval(() => {
    if(Object.keys(stack).length === 2){
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
    }
    
  }, 1000)
}

http.listen(process.env.PORT || 8080, () => console.log('listening on *:8080'))
connect()