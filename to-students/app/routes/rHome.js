module.exports = function(serverApp){
	
	serverApp.get('/home', function(req,res){
		serverApp.app.controllers.cHOME.home(serverApp,req,res);
	});

}