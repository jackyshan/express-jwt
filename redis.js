var config = require('./config')
var redis = require('redis')
var client = redis.createClient(6379, config.redislink)

var setkv = function setkv(key,value,expire){
    return new Promise((resolve)=>{
        client.set(key,value, 'EX', expire, function(err,reply){
            if(err){
                resolve(null)
            }
            else{
                resolve(reply)
            }
        })
    })
}

var getkey = function getkey(key) {
    return new Promise((resolve) => {

        client.get(key, function (err, reply) {
            if(err){
                resolve(null)
            }
            else {
                resolve(reply)
            }
        })
    })
}

module.exports = {
    setkv:setkv,
    getkey:getkey
}