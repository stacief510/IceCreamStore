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
console.log('888888888', req.body);
db.Order.create(req.body, function(err, order){
	if(err){
		res.status(500).send(err);
	}
	res.json(order);
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