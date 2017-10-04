var express = require("express");
var exphbs = require("express-handlebars");
var bodyparser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
