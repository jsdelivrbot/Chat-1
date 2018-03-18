var express = require('express')
var app = express()
var path = require('path')
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, '/Dest')))

io.on('connection', function(socket){
  console.log('a user connected')
  socket.emit('sms_from_server', 'hey dude')
  
  socket.on('sms', function (data) {
    socket.broadcast.emit('sms_from_server', data)
  })
  
  socket.on('join_queue', function (data) {
    socket.emit('server_allows_joining')
  })
  
})

http.listen(process.env.PORT || 8080, function(){
  console.log('listening on *:8080')
})