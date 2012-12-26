var Events = module.exports = function (io) {

  // Session KeepAlive
  io.sockets.on('connection', function(socket){
    var hs = socket.handshake;

    socket.join(hs.sessionID);
    socket.join('public');

    var intervalID = setInterval(function () {
      hs.session.reload(function () {
        hs.session.touch().save();
      });
    }, 60 * 1000);
  })

}



    