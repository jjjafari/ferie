var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
 
var routes = require("./routes/routes.js")(app);
 
var server = app.listen(8080, function () {
    console.log("Listening on port %s...", server.address().port);
});