var connection = require("./connection.js");

console.log("got into orm js");

// Object Relational Mapper (ORM)

var orm = {

  // selectAll: function(tableName) {
  //   var queryString = "SELECT * FROM ?? ";
  //   connection.query(queryString, [tableName], function(err, result) {
  //     console.log("inside orm.js:", result);
  //   });
  // },
  selectAll: function() {
    var queryString = "SELECT * FROM burgers ";
    connection.query(queryString, function(err, result) {
      console.log("inside orm.js err:", err);
      console.log("inside orm.js:", result);
    });
  },
  insertOne: function(tableName, cols, values) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [tableName, cols, values], function(err, result) {
      console.log("inside orm.js:", result);
    });
  },

  updateOne: function(tableName, colName, value, whereColNm, whereValue) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query(queryString, [tableName, colName, value, whereColNm, whereValue], function(err, result) {
      console.log("inside orm.js:", result);
    });
  }
  
};

module.exports = orm;
