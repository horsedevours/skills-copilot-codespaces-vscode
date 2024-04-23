// Create web server
// http://expressjs.com/en/starter/hello-world.html
var express = require('express');
var app = express();
var fs = require('fs');

// Set up the server
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Use the comments.js file
app.get('/comments', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(fs.readFileSync('comments.json'));
});

// Start the server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});