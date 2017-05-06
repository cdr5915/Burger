var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var handlebars - require("handlebars");
var routes = require(".controllers/burgers_controller.js")

var app = express();
var port = process.env.PORT || 8080;


app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use(methodOverride("_method"));

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view enginge", "handlebars");
