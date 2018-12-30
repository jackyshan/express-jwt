//app
var express = require('express')
var app = express()

//body-parser
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

//mongodb
require('./mongoconn')

//api
var api = require('./api')
api(app)

//error
var err = require('./error')
err(app)

//listen
app.listen(3000, () => {
    console.log('app listening on port 3000')
})