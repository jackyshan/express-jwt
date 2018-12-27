var config = require('./config')
var jwt = require('jsonwebtoken')
var md5 = require('md5')

var signtoken = function(obj){
    return jwt.sign(obj, config.jwtsecret)
}

var verifytoken = function(token){
    return new Promise((resolve, reject)=>{
        jwt.verify(token, config.jwtsecret, function(err,decoded){
            if(err){
                resolve(null)
            }
            else {
                resolve(decoded)
            }
        })
    })
}

var cmd5 = function(str){
    return md5(str+config.md5secret)
}

module.exports = {
    signtoken:signtoken,
    verifytoken:verifytoken,
    md5:cmd5
}