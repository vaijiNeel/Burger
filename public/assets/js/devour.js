$(function() {
	//submit button event
	$(".newBurger").on("click", function(event) {
		// Make sure to preventDefault on a submit event.
    	event.preventDefault();
    	console.log("inside devour js new burger post api");

    	var newBgr = {
    		burger_name: $("#nwBgrNm").val().trim()
    	};

    	// Send the POST request.
	    $.ajax("/api/newBurger", {
	      type: "POST",
	      data: newBgr
	    }).then(function() {
	        console.log("created new burger");
	        // Reload the page to get the updated list
	        location.reload(true);
	    }).catch(function() {
	    	console.error("failed somewhere");
	    });
	});

	//devour it
	$(".devourIt").on("click", function(event) {
		// Make sure to preventDefault on a submit event.
    	event.preventDefault();
    	console.log("inside devour js devour it put api", $(this).data);
    	var id = $(this).data("id");
    	console.log("id from devour js:", id);
	    var devourItBgr = {
	      devoured: true
	    };

	    // Send the PUT request.
	    $.ajax("/api/devourIt/" + id, {
	      type: "PUT",
	      data: devourItBgr
	    }).then(function() {
	        console.log("updated devoured to true ");
	        // Reload the page to get the updated list
	        location.reload(true);
	    }).catch(function() {
	    	console.error("failed somewhere");
	    });
	});
});