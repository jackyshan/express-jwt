var response = require('./response')
var model = require('./model')
var User = model.user

module.exports = function(app) {
    app.post('/api/register', (req, res)=>{
        if (req.body.username && req.body.password) {
            //是否存在
            User.findOne

            //存储
            new User({
                username:req.body.username,
                password:req.body.password
            }).save(function(err){
                if(err){
                    //返回
                    res.send(response.err("注册失败"))
                }

                //返回
                res.send(response.succ("注册成功", {token:""}))
            })
        }
        else {
            res.send(response.err("用户名或密码不能为空"))
        }
    })
}