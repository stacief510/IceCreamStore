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

var cookieType = [
 {
 	flavor: "Chocolate Chip",
 	allergies: "gluten, eggs, dairy"
 },

 {
 	flavor: "Snickerdoodle",
 	allergies: "gluten, eggs, dairy"
 },

 {
 	flavor: "Double Chocolate Chip", 
 	allergies: "gluten, eggs, dairy"
 },

 {
 	flavor: "Oatmeal Raisin",
 	allergies: "gluten, eggs, dairy"
 }

];

db.Cookie.remove({}, function(err, cookie){
	db.Cookie.create(cookieType, function(err, cookies){
		if(err){
			console.log("cookie ", err);
		}

	console.log("cookies", cookies);
	console.log("created", cookies.length, "cookies");

	})

})

db.Order.remove({}, function(err, order){

db.IceCream.remove({}, function(err, icecreams){
	db.IceCream.create(iceCreamFlavors, function(err, icecream){
		if(err){
			console.log("ice cream", err);
		}

	console.log("ice cream flavors", icecream);
	console.log("created", icecream.length, "ice creams");
	process.exit();

	});
});
});
