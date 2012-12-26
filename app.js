var DEBUG = process.env.NODE_ENV != 'production';

// Dependencies.
var config = require('./config')(DEBUG)
  , express = require('express')
  , app = express()
  , mongoose = require('mongoose')

// Globals
var globals =
  { DEBUG : DEBUG
  , app : app
  , config : config
  , console : console
  , util : require('util')
  , mongoose : mongoose
  , db : mongoose.createConnection(config.mongo.url)
  , schema : {}
  , models : {}
  , sessionStore : new express.session.MemoryStore()
  }

globals.db.on('error', console.error.bind(console, 'connection error:'));
globals.db.once('open', function () {
  console.log(globals.util.format('db connected: %s:%s', globals.db.host, globals.db.port ))
});

app.configure(function(){
  app.set('views',__dirname + '/views')
  app.set('view engine', 'jade')
  app.set('view options', { layout: false })
  app.use(express.methodOverride())
  app.use(express.static(__dirname + '/client'))
  app.use(require('stylus').middleware({ src:'client' }))
  app.use(express.bodyParser());
  app.use(express.cookieParser())
  app.use(express.session({store: globals.sessionStore, secret: config.sessionSecret}))
  app.use(app.router)
})

// Boot
require('./boot')(globals)

if (!module.parent) {
  var port = process.env.PORT || config.port
  globals.server.listen(port)
  console.log('app running on port %d', port)
}





