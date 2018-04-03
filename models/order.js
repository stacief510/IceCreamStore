var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IceCream = require('./icecream.js');
var Cookie = require('./cookie.js');

var OrderSchema = new Schema ({
	name: String,
	cookie:[Cookie.schema],
	icecream: [IceCream.schema]
});

var Order = mongoose.model('Order', OrderSchema);

module.exports= Order;