var express = require('express');
var app = express();
var logger = require('morgan');
var PORT = 3001;

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Listening on PORT:' + PORT);
});
