var express = require('express');
var app = require('express')();
var http = require('http').Server(app);

app.use('/', express.static('public'));


app.set('port',(process.env.PORT || 3000))
http.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});
