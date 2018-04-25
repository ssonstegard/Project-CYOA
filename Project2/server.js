var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);

require("./routes/html-routes.js")(app);

app.listen(PORT, function(){
    console.log("on port: " + PORT);
})