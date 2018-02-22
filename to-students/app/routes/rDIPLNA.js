module.exports = function(serverApp){
	
	serverApp.get('/disciplina',function(req,res){
		serverApp.app.controllers.cDIPLNA.disciplina(serverApp, req, res);
	});

	serverApp.get('/disciplina/cadastro', function(req,res){
		serverApp.app.controllers.cDIPLNA.disciplina_cadastro(serverApp,req,res);
	});

	serverApp.post('/disciplina/cadastro', function(req,res){
		serverApp.app.controllers.cDIPLNA.disciplina_cadastro_salvar(serverApp,req,res);
	});

	serverApp.get('/disciplina/detalhes', function(req,res){
		serverApp.app.controllers.cDIPLNA.disciplina_detalhes(serverApp,req,res);
	});

	serverApp.post('/disciplina/detalhes', function(req,res){
		serverApp.app.controllers.cDIPLNA.disciplina_detalhes_atualizar(serverApp,req,res);
	});

	serverApp.post('/disciplina/delete', function(req,res){
		serverApp.app.controllers.cDIPLNA.disciplina_delete(serverApp,req,res);
	});
}