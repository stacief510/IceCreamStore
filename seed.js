var db = require('./models');

var iceCreamFlavors = [
{
	flavor: "Vanilla", 
	allergies: "dairy",
},

{
	flavor: "Chocolate",
	allergies: "dairy"
	 
},

{
	flavor: "Chocolate Chip",
	allergies: "dairy"
	
},

{
	flavor: "Cookie Dough",
	allergies: "dairy, egg"
	
},

{
	flavor: "Strawberry",
	allergies: "dairy, egg"
	 
},

{
	flavor: "Pistachio",
	allergies: "dairy, nuts"
	 
},

];

db.IceCream.remove({}, function(err, icecreams){
	db.IceCream.create(iceCreamFlavors, function(err, icecream){
		if(err){
			console.log(err);
		}

	console.log("ice cream flavors", icecream);
	console.log("created", icecream.length, "ice creams");
	process.exit();

	});
});
