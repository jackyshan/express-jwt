var response = require('./response')
var model = require('./model')
var User = model.user
var register = require('./register')
var login = require('./login')
var userinfo = require('./userinfo')
var verycode = require('./verycode')

var api = '/api'
module.exports = function (app) {
    app.use(api, register)
    app.use(api, login)
    app.use(api, userinfo)
    app.use(api, verycode)
}