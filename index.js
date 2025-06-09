var express = require('express');
var mysql = require('mysql');
var app = express();


app.get('/', function(req, res) {
  res.send('Hello South Afrian Economic and Allied Worker Union'); 
});

// Create a MySQL connection
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});