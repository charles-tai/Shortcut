var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

var requestHandler = function(req, res) {
  res.sendfile('index.html');
};

app.get('/', requestHandler);

module.exports = app;