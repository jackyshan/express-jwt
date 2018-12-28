var isthinkpad=false
var mail = {
    host: 'smtp.163.com',
    user: 'bugsformyapps@163.com', // generated ethereal user
    pass: 'E54kcpgp75tD1', // generated ethereal password
    from: '"Fred Foo" <bugsformyapps@163.com>', // sender address
    to: '1393210619@qq.com,', // list of receivers
}

module.exports = {
    codeexpire:180,//秒
    jwtsecret:"jjjjjj",
    md5secret:"jkkks934(EIURLOE(W)WF<{fs;f{{",
    mongolink:isthinkpad?'mongodb://test:123456@192.168.99.100:27017/test':'mongodb://test:123456@localhost:27017/test',
    redislink:isthinkpad?'192.168.99.100':'localhost',
    mail:mail,
}