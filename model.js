var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = mongoose.model('User', new Schema({ 
    username: String, 
    password: String
}))

// 返回一个mongo用户库实例
module.exports = {
    user: User
};
