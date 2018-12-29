
var config = require('./config')
var mongoose = require('mongoose');

mongoose.connect(config.mongolink, { autoIndex: false, useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, '数据库connection error:'));