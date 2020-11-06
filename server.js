var express = require("express");

const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Timeout
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}


app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost: + ${PORT}`);
});
