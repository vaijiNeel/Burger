var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

//get all
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    console.log(data);
    res.render("index", {burger: data} );
  });
});

//insert
router.post("/newBurger", function(req, res) {
	console.log(req.body);
	buger.insertOne(function(result) {
		res.json({ id: result.insertId });
	});
});

//update
router.put("/api/burger/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);
	buger.updateOne({burger_name: req.body.burger}, condition, function(result) {
    if (result.changedRows == 0) {
    	// If no rows were changed, then the ID must not exist, so 404
    	return res.status(404).end();
    } else {
    	res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;