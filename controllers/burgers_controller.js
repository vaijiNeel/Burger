var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

console.log("got into controller");

//get all
router.get("/", function(req, res) {
  // console.log("req from burger controller file:", req);
  burger.selectAll(function(data) {
    // console.log("data from burger controller file:", data);
    res.render("index", {burgerObj: data} );
  });
});

//insert
router.post("/api/newBurger", function(req, res) {
	console.log(req.body);
	burger.insertOne(["burger_name"],[req.body.burger_name],function(result) {
		res.json({ id: result.insertId });
	});
});

//update
router.put("/api/devourIt/:id", function(req, res) {
	console.log("put route:", req.params.id);
	burger.updateOne(req.params.id, function(result) {
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