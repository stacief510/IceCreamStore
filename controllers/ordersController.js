var db = require('../models');

function index(req, res){

db.Order.find({}, function(err, order){
	if(err){
		res.send(err);
	}
	res.json(order);
})

}

function create(req, res){
db.IceCream.findOne({flavor:req.body.icecream}, function(err, foundIcecream){
	db.Cookie.findOne({flavor: req.body.cookie}, function(err, foundCookie){
		console.log(foundIcecream);
		console.log(foundCookie);
		console.log(req.body);
		db.Order.create({name: req.body.name, cookie: foundCookie, icecream: foundIcecream }, function(err, order){
			if(err){
				console.log(err);
			}
			res.json(order);
		})
	})
})

}

function destroy(req, res){

}

function update(req, res){

}


module.exports = {
	index: index,
	create: create,
	destroy: destroy,
	update: update
}