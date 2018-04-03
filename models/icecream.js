var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IceCreamSchema = new Schema({
	flavor: String,
	allergies: String,
	scoopNum: Number
});



var IceCream = mongoose.model('IceCream', IceCreamSchema);

module.exports = IceCream;