var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://test:123456@localhost:27017/test', { autoIndex: false });

var User = mongoose.model('User', new Schema({ 
    username: String, 
    password: String
}))
// 返回一个mongo用户库实例
module.exports = {
    user: User
};
