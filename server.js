//app
var express = require('express')
var app = express()

//body-parser
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

//api
var api = require('./api')
api(app)

//listen
app.listen(3000, () => {
    console.log('app listening on port 3000')
})