
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


function handleError(err){
	console.log(err);
}

