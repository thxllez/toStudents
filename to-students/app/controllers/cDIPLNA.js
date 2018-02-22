module.exports.disciplina = function(serverApp, req, res){

		var con = serverApp.config.connectionFactory;
		var connection = con();
		var vDIPLNADAOAux = serverApp.app.models.DIPLNADAO;
		var vDIPLNADAO = new vDIPLNADAOAux(connection);

		vDIPLNADAO.getDIPLNA('','1',function(err,results){
			if(!err){
				res.render('DIPLNA/display_DIPLNA', {jDIPLNA: results});
			}else{
				console.log('rDIPLNA: getDIPLNA - ERROR');
				res.render('ERROR/erro');
			}
		});

		connection.end();

}

module.exports.disciplina_cadastro = function(serverApp,req,res){
	res.render('DIPLNA/cad_DIPLNA', {jValidation : {}, jCadDIPLNA : {}});
}

module.exports.disciplina_cadastro_salvar = function(serverApp,req,res){

		var connection = serverApp.config.connectionFactory();
		var vDIPLNADAOAux = serverApp.app.models.DIPLNADAO;
		var vDIPLNADAO = new vDIPLNADAOAux(connection);

		var bodyDIPLNA = req.body;

		req.assert('ds_diplna','O campo "Disciplina" é obrigatório!').notEmpty();
		req.assert('nm_prof', 'O campo "Professor" é obrigatório!').notEmpty();
		var validationErrors = req.validationErrors();
		
		if(validationErrors){
			res.render('DIPLNA/cad_DIPLNA', {jValidation : validationErrors, jCadDIPLNA : bodyDIPLNA});
			return;
		}

		vDIPLNADAO.saveDIPLNA(bodyDIPLNA,'1', function(err,results){
			res.redirect('/disciplina');
		});
}

module.exports.disciplina_detalhes = function(serverApp,req,res){
	var con = serverApp.config.connectionFactory;
	var connection = con();
	var vDIPLNADAOAux = serverApp.app.models.DIPLNADAO;
	var vDIPLNADAO = new vDIPLNADAOAux(connection);

	var parameters = req.query;
	vDIPLNADAO.getDIPLNA(parameters.cd_diplna,'1',function(err,results){
		if(!err){
			res.render('DIPLNA/dtls_DIPLNA',{jDIPLNA : results, jValidation : {}});
		}
	});
}

module.exports.disciplina_detalhes_atualizar = function(serverApp,req,res){
	var con = serverApp.config.connectionFactory;
	var connection = con();
	var vDIPLNADAOAux = serverApp.app.models.DIPLNADAO;
	var vDIPLNADAO = new vDIPLNADAOAux(connection);

	var bodyDIPLNA = req.body;
	var parameters = req.query;

	req.assert('ds_diplna','O campo "Disciplina" é obrigatório!').notEmpty();
	req.assert('nm_prof', 'O campo "Professor" é obrigatório!').notEmpty();
	var validationErrors = req.validationErrors();

	console.log(bodyDIPLNA);
	console.log(validationErrors);

	if(validationErrors){
		res.render('DIPLNA/dtls_DIPLNA', {jValidation : validationErrors, jDIPLNA : bodyDIPLNA});
		return;
	}

	vDIPLNADAO.updateDIPLNA(bodyDIPLNA,parameters.cd_diplna,'1', function(err,results){
		res.redirect('/disciplina/detalhes?cd_diplna='+parameters.cd_diplna);
	});
}

module.exports.disciplina_delete = function(serverApp,req,res){
	var con = serverApp.config.connectionFactory;
	var connection = con();
	var vDIPLNADAOAux = serverApp.app.models.DIPLNADAO;
	var vDIPLNADAO = new vDIPLNADAOAux(connection);

	var parameters = req.query;

	vDIPLNADAO.deleteDIPLNA(parameters.cd_diplna, parameters.cd_aluno, function(err,results){
		res.redirect('/disciplina');
	});

}