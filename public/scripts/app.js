
$(document).ready(function() {
console.log('Ready to eat Ice Cream');

var iceCreamRendered = false;
var cookieRendered = false;

$.ajax({
	method: 'GET',
	url: '/api/icecreams',
	success: handleSuccess,
	error: handleError
});

$.ajax({
	method: 'GET',
	url: '/api/cookies',
	success: handleSucc,
	error: handleError
});

$('#form').on("submit", function(event){
	event.preventDefault();
	var formData = $(this).serialize();
	console.log(formData)
	//this.reset();

	$.ajax({
		method: 'POST',
		url: '/api/orders',
		data: formData,
		success: postSuccess,
		error: handleError
	});

});


$.ajax({
	method: 'GET',
	url: '/api/orders',
	success: getOrderSuccess,
	error: handleError
});



}); //end of doc ready, dont delete


function handleSuccess(allMyIcecreams){

allMyIcecreams.forEach(function(icecreams){
$('.pickIceCream').append(`<option>${icecreams.flavor}</option>`);

});

}

function handleSucc(allMyCookies){

allMyCookies.forEach(function(cookies){
$(".pickCookie").append(`<option>${cookies.flavor}</option>`)
})
}

function postSuccess(newOrder){
	//alert(`Success! Order placed: ${formData.icecream.flavor} ice cream with ${formData.cookie.flavor} cookies`);
	$('#placedOrders').append(`<li>${newOrder.name} ordered a ${newOrder.cookie.flavor} cookie sandwich with ${newOrder.icecream.flavor} ice cream!</li> 
				<button data.id="${newOrder._id}" name="submitButton" class="btn ">Delete</button>
				<button data.id="${newOrder._id}" name="submitButton" class="btn ">Edit</button>`);
} 

function handleError(err){
	console.log(err);
}
function getOrderSuccess(getAllOrders){
	getAllOrders.forEach(function(orderInfo){
			$('#placedOrders').append(`<li>${orderInfo.name} ordered a ${orderInfo.cookie.flavor} cookie sandwich with ${orderInfo.icecream.flavor} ice cream!</li> 
				<button data.id="${orderInfo._id}" name="submitButton" class="btn">Delete</button>
				<button data.id="${orderInfo._id}" name="submitButton" class="btn">Edit</button>`);
	})

}
