const Alert = require('./alert.js')

module.exports = (io, socket, stack, connected_users) => {
  if(io.sockets.connected[connected_users[socket.id]] !== undefined) {
    io.sockets.connected[connected_users[socket.id]].emit('sending_control')
    delete connected_users[connected_users[socket.id]]
    delete connected_users[socket.id]
  } else {
    delete stack[socket.id]  
  }
  
  Alert(stack, connected_users)
}