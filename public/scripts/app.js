$(document).ready(function() {
console.log('Ready to eat Ice Cream');

$.ajax({
	method: 'GET',
	url: '/api/icecreams',
	success: handleSuccess,
	error: handleError
})

$.ajax({
	method: 'GET',
	url: '/api/cookies',
	success: handleSuccess,
	error: handleError
})

});

function handleSuccess(allMyIcecreams, allMyCookies){
	renderInput(allMyIcecreams, allMyCookies);
}

function handleError(err){
	console.log(err);
}

function renderInput(allMyIcecreams, allMyCookies){

	// <option value = "chocochip">${stuffToAppend}</option
	$('.form').append(
			`	<legend>Place Your Order</legend>
				<!-- option -->
				  <div class="form-group">
		             <label class="col-md-4 control-label" for="name">Name</label>
		              <div class="col-md-4">
		              <input id="name" name="name" type="text" placeholder="Your Name" class="form-control input-md" required>
		              </div>
		            </div>

				<div class="dropdown">
				  <select class="pickIceCream">

				  </select>
				</div>

				<!-- option -->
				<div class="dropdown">
				  <select class="pickCookie">
				   
				   </select>
				  </div>
				</div>`)
				allMyIcecreams.forEach(iceCream => {
				$('.pickIceCream').append(`<option>${iceCream.flavor}</option>`);
				});
				allMyCookies.forEach(function(cookie){
				$('.pickCookie').append(`<option>${cookie.flavor}</option>`);
				  });

			}
