
$(document).ready(function() {
console.log('Ready to eat Ice Cream');

var iceCreamRendered = false;
var cookieRendered = false;

$.ajax({
	method: 'GET',
	url: '/api/icecreams',
	success: handleSuccess,
	error: handleError
})

$.ajax({
	method: 'GET',
	url: '/api/cookies',
	success: handleSucc,
	error: handleError
})

$('.form').on("submit", function(event){
	event.preventDefault();
	var formData = $(this).serialize();
	console.log(formData);
	this.reset();

	$.ajax({
		method: 'POST',
		url: '/api/orders',
		data: formData,
		success: postSuccess,
		error: handleError
	})
})

});

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

function postSuccess(allData){

	console.log("order created!", allData);

}

function handleError(err){
	console.log(err);
}

