# Burger

## App Overview:
  This is a Full Stack application written using Node JS, HTML, CSS, Javascript, JQuery, and express, express-handlebars, mySQL, body-parser, ORM packages, in a MVC model (Models, Views, Controllers). The app is deployed in Heroku too - https://sheltered-headland-58066.herokuapp.com/
  
  The user can add a burger to devour by entering the name in the textarea and clicking submit button. The data is inserted into mysql table, and also its listed on the webpage, on the left side with a button called Devour It. When the user clicks the devour it button the status of the burger is changed in database and the burger is moved to the right side on the webpage where devoured burgers are listed. 

## Folders/Files structure:
* Server.js - holds all the required model loads (express, express-handlebars, body-parser, routes), and app listener.
* db/schema.sql - holds the mysql db schema
* db/seeds.sql - holds the initial insert dataset for the db table
* controllers/burgers_controllers.js - All the routes are listed mapping its corresponding model to get result back from mysql query. Then the result is rendered in handlebars
* models/burger.js - holds the methods mapping routes to ORM sql query methods
* config/connection.js - This file has the details to mysql db, to create connection, and it exports the module connection.
* config/orm.js - All the mysql queries are listed as objects with callback function to return the query result back to the caller. 
* views/layouts/main.handlebars - main html page where other handlebars will render its content
* views/index.handlebars - html content for the application - headers, images, burgers listed that are ready to devour with a button for each, a textarea and a button to submit new burger. Handlebars logic to display undevoured burgers on the left and devoured burgers on the right
* public/assets/css/style.css - css styles
* public/assets/js/devour.js - JQuery code to handle submit button event, and devour it button event. 
** When the Submit button is clicked to add a new burger, an AJAX call is triggered and the mapped route in burgers_controllers.js is invoked, which in turn invokes the mapped method in model/burger.js, and in turn it invokes the mapped method in orm.js. The ORM method executes the insert query with the data passed (new burger name). Then the callback function returns back the success/fail status back to model and then in turn back to controller, which then responds with a json object. Once the success criteria for the AJAX call is complete, the page reloads, and the new burger is listed on the left side of the webpage with a Devour It button.
** When the Devour It button is clicked, a AJAX call is triggered with the unique id of the burger that was clicked, and the route is mapped in the controller, which invokes the corresponding method in model and in turn the orm method. The update method in orm is executed and the status is returned in callback function. The model in turn returns the recieved status back to the controller, which in turn returns a json object. Once success criteria is complete in AJAX call, the page is reloaded, and the devoured burger is listed on the right side of the webpage.
* other files - package.json, .gitignore

## Contributor:
* Vaiji Neelakandan
