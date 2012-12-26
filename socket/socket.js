module.exports = function(app, sessionStore) {
	var server = require('http').createServer(app)
  	, io = require('socket.io').listen(server)
		, parseCookie = require('connect').utils.parseCookie
		, Session = require('connect').middleware.session.Session

	io.set('authorization', function (data, accept) {
		if (data.headers.cookie)
		{ data.cookie = parseCookie(data.headers.cookie)
			data.sessionID = data.cookie['connect.sid']
			data.sessionStore = sessionStore;
			sessionStore.get
				( data.sessionID
				, function (err, session){
						if (err || !session) {
							accept('Error', false);
						} else {
							data.session = new Session(data, session);
							accept(null, true);
						}
					}
				)
			return accept(null, true);
		} else
			return accept('No cookie transmitted.', false)
	})

	return 	{ io : io
					, server : server
					}
}
