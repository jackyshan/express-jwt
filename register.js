var response = require('./response')
var model = require('./model')
var User = model.user
var express = require('express')
var route = express.Router()
var common = require('./common')

route.post('/register', (req, res) => {
    var username = req.body.username
    var password = req.body.password

    //是否合法的参数
    if (username == null || username.trim() == '' || password == null || password.trim() == '') {
        res.send(response.err("用户名或密码不能为空"))
        return
    }

    //是否存在用户
    User.findOne({ username: username }).then((data) => {
        console.log(data)
        return new Promise((resolve, reject)=>{
            if (data) {
                res.send(response.err("用户已注册过"))
                reject()
            }
            else {
                resolve()
            }
        })
    }).then(() => {
        //存储
        return new User({
            username: username,
            password: common.md5(password)
        }).save()
    }).then((data) => {
        console.log(data)
        if (data) {
            //返回
            res.send(response.succ("注册成功"))
            return
        }
        
        //返回
        res.send(response.err("注册失败"))
    }).catch((err)=>{
        //异常
        if (err) {
            console.log(err)
        }
    })

})

module.exports = route