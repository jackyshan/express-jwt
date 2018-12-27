var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('./config')

mongoose.connect(config.mongolink, { autoIndex: false, useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, '数据库connection error:'));


var User = mongoose.model('User', new Schema({ 
    username: String, 
    password: String
}))
// 返回一个mongo用户库实例
module.exports = {
    user: User
};
