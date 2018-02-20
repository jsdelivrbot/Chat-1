var express = require('express')
var app = express()
var path = require('path')
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, '/Dest/Tet_a_tet')))

io.on('connection', function(socket){
  console.log('a user connected')
  socket.emit('news', 'hey dude')
  
  socket.on('sms', function (data) {
    socket.broadcast.emit('sms_from_server', data);
  })
  
})

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000')
})