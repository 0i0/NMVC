define(
  ['jquery'
  ,'underscore'
  ,'backbone'

  ,'text!views/app.html'
  ]
, function
  ($
  , _
  , Backbone
  , AppMarkup
  ){
    var App = Backbone.View.extend(
      { alter:1
      , appTemplate : _.template(AppMarkup)
      , initialize : function(){

        }
      , events : {

        }
      , render : function(){
          this.$el.html(this.appTemplate({}))
          this.bindUI()
          this.bindActions()
          return this
        }
      , bindUI : function(){
          this.elements =
            { sendBtn : this.$('#send')
            }
        }

      , bindActions : function(){
          this.elements.sendBtn.on('click',function(e){
            this.trigger('send.click')
          },this)
        }
      }
    )
    return App
  }
)
