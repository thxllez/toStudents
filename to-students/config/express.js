var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var consign = require('consign');

module.exports = function (){
	var serverApp = express();
	serverApp.set('view engine','ejs');
	serverApp.set('views','./app/views');

	serverApp.use(express.static('./app/public'));
	serverApp.use(bodyParser.urlencoded({extended: true}));
	serverApp.use(expressValidator());

	consign().include('app/routes').then('config/connectionFactory.js').then('app/models').then('app/controllers').into(serverApp);

	return serverApp;
}