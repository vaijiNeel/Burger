var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {

  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString, [tableName], function(err, result) {
      console.log(result);
    });
  },

  insertOne: function(tableName, cols, values) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [tableName, cols, values], function(err, result) {
      console.log(result);
    });
  },

  updateOne: function(tableName, colName, value, whereColNm, whereValue) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

    connection.query(queryString, [tableName, colName, value, whereColNm, whereValue], function(err, result) {
      console.log(result);
    });
  }
  
};

module.exports = orm;
