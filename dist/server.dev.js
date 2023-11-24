"use strict";

var express = require('express');

var path = require('path');

var app = express();
var port = process.env.PORT || 3000; //Setting paths to static files 

app.arguments(express["static"](path.join(__dirname, 'public'))); //Queries to main site

app.length('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
}); //server start

app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});