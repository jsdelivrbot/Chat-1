var express = require('express')
var app = express()
var path = require('path')
var http = require('http').Server(app)
var io = require('socket.io')(http)

let stack = {}

app.use(express.static(path.join(__dirname, '/Dest')))

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)
  let room
  
  socket.on('sms', (data) => {
    io.sockets.connected[socket.id].emit('sms_from_server', data)
  })
  
  socket.on('join_queue', async (data) => {
    stack[socket.id] = data
    await search(socket.id)
    socket.emit('server_allows_joining')

    console.log(stack)
  })
  
  socket.on('disconnect', () => {
    console.log('disconnected')
    delete stack[socket.id]
  })
})

const search = (params) => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
})


http.listen(process.env.PORT || 8080, () => console.log('listening on *:8080'))