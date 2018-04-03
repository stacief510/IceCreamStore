var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CookieSchema = new Schema({
	flavor: String,
	allergies: String,
	size: String
});

var Cookie = mongoose.model('Cookie', CookieSchema);
module.exports= Cookie;