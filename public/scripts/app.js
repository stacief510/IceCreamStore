
$(document).ready(function() {
console.log('Ready to eat Ice Cream');

		$.ajax({
			method: 'GET',
			url: '/api/orders',
			success: getOrderSuccess,
			error: handleError
		});


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
		})


$('#form').on("submit", function(event){
	event.preventDefault();
	var formData = $(this).serialize();
	console.log(formData)
	this.reset();

			$.ajax({
				method: 'POST',
				url: '/api/orders',
				data: formData,
				success: postSuccess,
				error: handleError
			})
	})

$('#placedOrders').on("click", ".delete", function(event){

		console.log($(this).attr('data-mongo-id'));
		$.ajax({
			      method:'DELETE',
			      url:'/api/orders/' + $(this).attr('data-mongo-id'), 
			      success : (data) => {
			      	$(this).remove();
			      },
			      error : handleError
			    })
});

});


function handleError(err){
	console.log(err);
}

function handleSuccess(allMyIcecreams){

allMyIcecreams.forEach(function(icecreams){
$('.pickIceCream').append(`<option>${icecreams.flavor}</option>`);
});


}

function handleSucc(allMyCookies){

allMyCookies.forEach(function(cookies){
$(".pickCookie").append(`<option>${cookies.flavor}</option>`)
});

}
function postSuccess(newOrder){

	$('#placedOrders').append(`<div class = "delete" data-mongo-id = ${newOrder._id}>${newOrder.name} ordered a ${newOrder.cookie.flavor} 
		cookie sandwich with ${newOrder.icecream.flavor} ice cream! <button>Delete</button></div>`)

} 

function getOrderSuccess(getAllOrders){
	getAllOrders.forEach(function(order){
		$('#placedOrders').append(`<div class= "delete" data-mongo-id = ${order._id}>${order.name} ordered a ${order.cookie.flavor}
			cookie sandwich with ${order.icecream.flavor} ice cream! <button>Delete</button></div>`);
	});
}





