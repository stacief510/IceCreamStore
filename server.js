var express = require('express');
var app = express();
var bodyParser = require('body-parser');	

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function(req, res){
	res.sendFile('views/index.html', {root: __dirname});
	console.log('Eat Ice Cream');

});

app.listen(3000);