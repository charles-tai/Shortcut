var app = require('./server-config.js');

var port = process.env.PORT || 4568;

app.listen(port, function() {
  console.log('Server now listening on port ' + port);
});

