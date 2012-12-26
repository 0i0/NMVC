NMVC - Node MVC Boilerplate /w MongoDB on Heroku
========

## Requirments
* [NodeJS](http://github.com/ry/node)
* [NPM](http://github.com/isaacs/npm)
* [Heroku toolbelt](https://toolbelt.heroku.com/)
* [MongoDB](http://www.mongodb.org/)

## Getting Started
    git clone git://github.com/0i0/BaseNode.git APPNAME
    cd APPNAME
    npm install
    
## Running Localy
    node app.js
Visit [http://localhost:8000](http://localhost:8000)

## Creating Heroku App

    heroku apps:create APPNAME
    heroku config:add NODE_ENV=production

## Adding MongoHQ
    heroku addons:add mongohq:small

## Deploy
    git push heroku master