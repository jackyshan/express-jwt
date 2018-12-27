var response = require('./response')
var common = require('./common')

module.exports = function(req, res, next){
    var token = req.body.token || req.query.token || req.headers['token']
    if (token){
        common.verifytoken(token).then((data)=>{
            if(data){
                req.decoded=data
                next()
            }
            else{
                res.send(response.out("无效的token,请重新登录"))
            }
        })
    }
    else{
        res.send(response.err("没有传token,请先登录"))
    }
}