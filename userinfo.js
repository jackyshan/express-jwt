var response = require('./response')
var express = require('express')
var route = express.Router()
var authtoken = require('./authtoken')

route.post('/getUserInfo', authtoken, function(req, res){
    res.send(req.decoded)
})

module.exports = route