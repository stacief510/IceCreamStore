var db = require('../models');
function index(req, res){

db.Cookie.find({}, function(err, cookie){
	if(err){
		res.send(err);
	}
	res.json(cookie);
})

}

module.exports = {
	index: index 
}