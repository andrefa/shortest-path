(function(){

	var bodyParser = require('body-parser');
	var express = require('express');
	var logger = require('morgan');
	var path = require('path');

	var mapRoutes = require('./routes/map');

	var app = express();

	app.set('views', path.join(__dirname, 'public'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static(path.join(__dirname, 'public')));

	app.use('/rest/map', mapRoutes);

	module.exports = app;

})()