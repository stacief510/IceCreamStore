
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
	//this.reset();

			$.ajax({
				method: 'POST',
				url: '/api/orders',
				data: formData,
				success: postSuccess,
				error: handleError
			})
	})

$('#placeOrders').on("click", function(event){

		$(event.target.parentElement).remove()

		$.ajax({
			      method:'DELETE',
			      url:'/api/orders/' + $("#delete").attr('data-mongo-id'),
			      success : function(data){
			      	console.log("success");
			      }
			      error : handleError
			    })

	
	});
//dt
});



			// $.ajax({
			//       method:'DELETE',
			//       url:'/api/orders/' + $("#delete").attr('data-mongo-id'),
			//       success : function(data){
			//       	console.log("success");
			//       }
			//       error : handleError
			//     })

	

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
	$('#placeOrders').append(`<div>${newOrder.name} Ordered a ${newOrder.cookie.flavor} 
		cookie sandwich with ${newOrder.icecream.flavor} ice cream!</li>`)
} 

function getOrderSuccess(getAllOrders){
	getAllOrders.forEach(function(order){
		$('#placeOrders').append(`<div>${order.name}<button>Delete</button></div>`);
	});
}





