var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var requestHandler = function(req, res) {
  res.sendfile('public/views/index.html');
};

app.get('/', requestHandler);

app.get('/create', function(req,res) {
  res.sendfile('public/views/partials/create.html')
});

app.post('/create', function(req,res) {
  console.log(req.body);
  // console.log(req.body.password);

})

module.exports = app;