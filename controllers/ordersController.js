var db = require('../models');

function index(req, res) {
    db.Order.find({}, function(err, order) {
        if (err) {
            res.send(err);
        }
        res.json(order);
    })

}

function create(req, res) {
    db.IceCream.findOne({ flavor: req.body.icecream }, function(err, foundIcecream) {
        db.Cookie.findOne({ flavor: req.body.cookie }, function(err, foundCookie) {
            db.Order.create({ name: req.body.name, cookie: foundCookie, icecream: foundIcecream }, function(err, order) {
                if (err) {
                    console.log(err);
                }
                res.json(order);
            });
        });
    });

}

function destroy(req, res) {


    db.Order.findByIdAndRemove(req.params.id, function(err, orderFound) {
        if (err) {
            console.log(err);
        }
        res.json(orderFound);
    });

}


function update(req, res) {
    console.log(1111, req.body)
    db.IceCream.findOne({flavor: req.body.icecream},function(err, foundIcecream){
        db.Cookie.findOne({flavor: req.body.cookie}, function(err, foundCookie){
            db.Order.findByIdAndUpdate(req.params.id, {cookie: foundCookie, icecream: foundIcecream}, {new: true}, function(err, updateOrder) {
                    if (err) {
                        console.log(err);
                    }
                        res.json(updateOrder);
                    });
                });
        });
    }


module.exports = {
    index: index,
    create: create,
    destroy: destroy,
    update: update
}