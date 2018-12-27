var response = require('./response')
var express = require('express')
var route = express.Router()
var sendverycode = require('./sendverycode')
var common = require('./common')
var config = require('./config')
var expire = config.codeexpire
var redis = require('./redis')

route.post('/verycode', function (req, res) {
    //生成6位验证码
    var vcode = Math.ceil(Math.random() * (1000000 - 100000) + 100000)
    console.log(vcode)

    if (req.body.type == 1) {//邮件
        var mail = req.body.mail
        if (common.ismail(mail) == false) {
            res.send(response.err('请输入正确的邮件地址'))
            return
        }

        verify(mail)
    }
    else {//手机
        var phone = req.body.phone
        if (common.isphone(phone) == false) {
            res.send(response.err("请输入正确的手机号"))
            return
        }
        
        verify(phone)
    }

    function verify(key){

        redis.getkey(key).then((data)=>{
            if (data) {
                res.send(response.err('验证码已发送' + expire + '秒后再重新请求'))
                return
            }

            res.send(response.succ("验证码已发送"))
            if (common.ismail(key)){
                return sendverycode.mail(key, vcode)
            }
            else{
                return sendverycode.phone(key, vcode)
            }
        }).then((data) => {
            if (data) {
                console.log('验证码发送成功')
                redis.setkv(key,vcode,expire).then((data)=>{
                    console.log('验证码保存redis成功'+expire+'秒后超时')
                })
            }
            else {
                console.log('验证码发送失败')
            }
        })
    }
})

module.exports = route