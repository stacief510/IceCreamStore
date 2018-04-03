var db = require('../models');

function index(req, res){

db.IceCream.find({}, function(err, icecream){
	if(err){
		res.send(err);
	}
	res.json(icecream);
})

}

module.exports = {
	index: index
}