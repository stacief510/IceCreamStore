var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');	

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.sendFile('views/index.html', {root: __dirname});

});

app.get('/api', controllers.api.index);
app.get('/api/icecreams', controllers.icecream.index);
app.get('/api/cookies', controllers.cookie.index);
app.get('/api/orders', controllers.order.index);
app.get('/api/orders/:orderInfo_id', controllers.order.destroy);
app.post('/api/orders', controllers.order.create);


app.listen(3000);