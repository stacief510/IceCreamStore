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


    $('#form').on("submit", function(event) {
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

    $('#placedOrders').on("click", "#delete", function(event) {
        console.log($(this).parent().attr('data-mongo-id'));
        $.ajax({
            method: 'DELETE',
            url: '/api/orders/' + $(this).parent().attr('data-mongo-id'),
            success: (data) => {
                $(this).parent().remove();
            },
            error: handleError
        })
    });

$('#placedOrders').on("submit", '#editOrder', function(event){
    $('#edit').removeClass('hidden');
    event.preventDefault();
    var formData = $(this).serialize();
    
    $.ajax({
        method: 'PUT',
        url: '/api/orders/' + $(this).parent().attr('data-mongo-id'),
        data: formData,
        success: (updatedOrder) => { 
            $('.span1').html(`<span>${updatedOrder.cookie.flavor}</span>`);
            $('.span2').html(`<span>${updatedOrder.icecream.flavor}</span>`);
           
            $('#editOrder').remove(); 
        },
        error: handleError
    });

});

 $('#placedOrders').on("click", "#edit", function(event) {
    $('#edit').addClass('hidden');
            $.ajax({
            method: 'GET',
            url: '/api/icecreams' ,
            success: (allIceCreams) => {
                $.ajax({
                    method: 'GET',
                    url: '/api/cookies' ,
                    success: (allCookies) => {
                        console.log('i clicked the edit button')
                        console.log(allCookies, allIceCreams);
                        // console.log(allCookies);
                        $(this).parent().append(`<form id="editOrder"><select name="icecream" id = "icecream"></select><select name="cookie" id = "cookies"></select><button id ='save'>Submit</button></form>`);
                        allCookies.forEach(function(cookie) {
                             $("#cookies").append(`<option>${cookie.flavor}</option>`)
                        });
                        allIceCreams.forEach(function(icecreams) {
                            $('#icecream').append(`<option>${icecreams.flavor}</option>`);
                        });
                    },
                    error: handleError
                });
            },
            error: handleError
    });


	 	// var cookieFlavor= $(this).siblings('.span1').text();
	 	// var icecreamFlavor= $(this).siblings('.span2').text();

     // 	$(this).siblings('.span1').html(`<input class="editCookieflavor" value="${cookieFlavor}"></input>`);
    	// $(this).siblings('.span2').html(`<input class="editICflavor" value="${icecreamFlavor}"></input>`);

     
    });
});//doc ready ending


function handleError(err) {
    console.log(err);
}

function handleSuccess(allMyIcecreams) {
    allMyIcecreams.forEach(function(icecreams) {
        $('.pickIceCream').append(`<option>${icecreams.flavor}</option>`);
    });


}

function handleSucc(allMyCookies) {
    allMyCookies.forEach(function(cookies) {
        $(".pickCookie").append(`<option>${cookies.flavor}</option>`)
    });

}

function postSuccess(newOrder) {
    $('#placedOrders').append(`<div class = "appendedOrder" data-mongo-id = ${newOrder._id}>${newOrder.name} ordered a <span class="span1">${newOrder.cookie.flavor}</span> 
cookie sandwich with <span class="span2">${newOrder.icecream.flavor}</span> ice cream! <button id="delete">Delete</button><button id='edit'>Edit</button></div>`)

}

function getOrderSuccess(getAllOrders) {
    console.log(getAllOrders);
    getAllOrders.forEach(function(order) {
        $('#placedOrders').append(`<div class= "appendedOrder" data-mongo-id = ${order._id}>${order.name} ordered a <span class="span1">${order.cookie.flavor}</span>
cookie sandwich with <span class="span2">${order.icecream.flavor}</span> ice cream! <button id="delete">Delete</button><button id='edit'>Edit</button></div>`);
    });
}