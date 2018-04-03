var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/IceCreamStore');

module.exports.Cookie = require('./cookie.js');
module.exports.IceCream = require('./icecream.js');
module.exports.Order= require('./order.js');