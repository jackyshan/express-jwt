var response = require('./response')

module.exports =  function(app){
    app.use(function(req,res,next){
        if(req.method == 'GET'){
            res.send(response.err('错误的请求方式'))
        }
        else{
            next()
        }
    })
    
    app.use(function(req, res){
        res.status(404)
        res.send(response.err('路径错误'))
    })

    app.use(function(req, res){
        res.status(500)
        res.send(response.err('系统错误'))
    })
}