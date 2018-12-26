var config = require('./config')
var jwt = require('jsonwebtoken')

module.exports = {
    signtoken:function(obj){
        return jwt.sign(obj, config.jwtsecret)
    },
    verifytoken:function(token){
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
}