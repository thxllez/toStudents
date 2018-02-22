function DIPLNADAO(connection){
	this._connection = connection;
}

DIPLNADAO.prototype.getDIPLNA = function(cd_diplna,cd_aluno,callback){
	var query = 'SELECT * FROM DIPLNA ';
	var queryWhere = '';

	if(cd_diplna != ''){
		if(queryWhere.length > 0){
			queryWhere += ' AND';
		}
		queryWhere += ' CD_DIPLNA = '+cd_diplna;
	}
	if(cd_aluno != ''){
		if(queryWhere.length > 0){
			queryWhere += ' AND';
		}
		queryWhere += ' CD_ALUNO = '+cd_aluno;
	}

	if(queryWhere.length > 0){
		query += ' WHERE' + queryWhere;
	}
	console.log(query);
	this._connection.query(query, callback);
}

DIPLNADAO.prototype.saveDIPLNA = function(bodyDIPLNA, cd_aluno, callback){
	var query = "INSERT INTO DIPLNA (DS_DIPLNA, NM_PROF, DS_PROF_EMAIL, CD_ALUNO, ID_STATUS) VALUES ('"+bodyDIPLNA.ds_diplna+"','"+bodyDIPLNA.nm_prof+"','"+bodyDIPLNA.ds_prof_email+"',"+cd_aluno+",'E')";
	
	this._connection.query(query,callback);
}

DIPLNADAO.prototype.updateDIPLNA = function(bodyDIPLNA, cd_diplna, cd_aluno, callback){
	var query = "UPDATE DIPLNA SET DS_DIPLNA = '"+bodyDIPLNA.ds_diplna+"', NM_PROF = '"+bodyDIPLNA.nm_prof+"', DS_PROF_EMAIL = '"+bodyDIPLNA.ds_prof_email+"', ID_STATUS = '"+bodyDIPLNA.id_status+"' WHERE CD_DIPLNA = "+cd_diplna+" AND CD_ALUNO = "+cd_aluno;
	this._connection.query(query,callback);
}

DIPLNADAO.prototype.deleteDIPLNA = function(cd_diplna, cd_aluno, callback){
	var query = "DELETE FROM DIPLNA WHERE CD_DIPLNA = "+cd_diplna+" AND CD_ALUNO = "+cd_aluno;
	this._connection.query(query,callback);
}


module.exports = function(){
	return DIPLNADAO;
}