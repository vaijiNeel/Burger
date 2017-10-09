var orm = require("../config/orm.js");
console.log("got into model js");

var burger = {

	//get all burgers
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			// console.log("burger.js:", res)
			cb(res);
		});
	},

	//insert burger
	insertOne: function(cols, vals) {
		orm.insertOne("burgers", cols, vals, function(res) {
			// cb(res);
		});
	},

	//update burger
	updateOne: function(condition) {
		console.log("inside burger js update id:", condition);
		orm.updateOne("burgers", condition, function(res) {
			// cb(res);
		});
	}
}

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
