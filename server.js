var express = require('express')
var app = express()
var path = require('path')
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, '/Dest/Tet_a_tet')))

io.on('connection', function(socket){
  console.log('a user connected')
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})