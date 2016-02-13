var express 	= require('express'),
	bodyParser 	= require('body-parser'),
	routes 		= require('./app/routes/routes.js'),
	app 		= express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js started on port ' + port);
});
