var mysql = require('mysql');

function createDBConnection(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'adm',
		password: '224422',
		database : 'tostudents'
	});
}

module.exports = function(){
	return createDBConnection;
}