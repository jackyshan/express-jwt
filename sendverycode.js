var sendmail = require('./sendmail')
var sendphone = require('./sendphone')

module.exports = {
    mail:function(mail, verycode) {
        return sendmail(mail, "西红柿APP的验证码","您的验证码是"+verycode)
    },
    phone:function(phone, verycode){
        return sendphone(phone, "您的验证码是"+verycode)
    }
}