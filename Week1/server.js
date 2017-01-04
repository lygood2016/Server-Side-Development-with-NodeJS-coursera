var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var hostname = "localhost";
var port = 3000;

var dishRouter = require("./dishRouter");

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dishes', dishRouter);

// error handlers
// development error handler


app.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ":" + port);
})