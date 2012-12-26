module.exports = function Config(debug) {
  var config =
    { dev :
      { orign : 'http://0.0.0.0:8000'
      , port :8000
      , sessionSecret : '50m35ecr3t'
      , mongo :
        { url : 'mongodb://localhost/my_database'
        }
      , google :
        { analyticsAccount : ''
        }
      }
    , prod :
      { orign : 'http://SOMEAPP.herokuapp.com'
      , port : process.env.PORT
      , sessionSecret : '50m35ecr3t'
      , mongo :
        { url : process.env.MONGOHQ_URL
        }
      , google :
        { analyticsAccount : ''
        }
      }
    }
  return config[(debug)?'dev':'prod']
}