require.config(
  { paths:
    { jquery: '/libs/jquery/jquery-min'
    , underscore: '/libs/underscore/underscore'
    , backbone: '/libs/backbone/backbone'
    , text: '/libs/require/text'
    }
  ,waitSeconds:15
  }
)

require(
  [ 'underscore'
  , 'backbone'
  , 'views/app'
  ]
  , function(_, Backbone, App){
      $(function(){
        var app = new App()
        window.app = app;
        $('#app-wrapper').append(app.render().$el)
      })
    }
)


