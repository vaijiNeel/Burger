var connection = require("./connection.js");
console.log("got into orm js");

// Object Relational Mapper (ORM)
var orm = {

  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString, [tableName], function(err, result) {
      // console.log("inside orm.js selectAll:", result);
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  insertOne: function(tableName, cols, values, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableName, cols, values], function(err, result) {
      if (err) {
        throw err;
      }
      console.log("inside orm.js insertOne:", result);
      cb(result);
    });
  },

  updateOne: function(tableName, whereValue, cb) {
    var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
    connection.query(queryString, [tableName, whereValue], function(err, result) {
      if (err) {
        throw err;
      }
      console.log("inside orm.js updateOne:", result);
      cb(result);
    });
  } 
};

module.exports = orm;
