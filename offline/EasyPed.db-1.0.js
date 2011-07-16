$(document).ready(function(){

	// database definition - 6Mb
	var db = window.openDatabase("EasyPed", "1.0", "EasyPed - Database", 6*1024*1024);

	// create tables if does not exist
	db.transaction(function(tx) {
		// TODO: remover esta linha
		tx.executeSql('DROP TABLE usuario', [], onSuccess, onError);
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY, usuario TEXT, senha TEXT)', [], onSuccess, onError);
		//tx.executeSql('CREATE TABLE IF NOT EXISTS produtos(id INTEGER PRIMARY KEY, course_id INTEGER, hole_num INTEGER, num_strokes INTEGER, email TEXT)', []);

		// insert defult users
		tx.executeSql('INSERT INTO usuario (id, usuario, senha) VALUES (1, "Admin", "1234")', [], onSuccess, onError);
		tx.executeSql('INSERT INTO usuario (id, usuario, senha) VALUES (2, "Reinaldo", "1425")', [], onSuccess, onError);
		tx.executeSql('INSERT INTO usuario (id, usuario, senha) VALUES (3, "Borba", "1010")', [], onSuccess, onError);
		//tx.executeSql('INSERT INTO todo(todo, added_on) VALUES (?,?)', [todoText, addedOn], onSuccess, onError)		
	});

	onError = function(tx, e) {
		alert('Something unexpected happened: ' + e.message );
	}

	onSuccess = function(tx, r) {
		$('#status').html('> ' + r.message);
	}
	
	if(db) {
		$("#status").html("EasyPed Database Created");
	}

	/*
	function populateLogin() {
       db.transaction(function(tx) {
          tx.executeSql('INSERT INTO usuario (id, usuario, senha) VALUES (1, "Admin", "1234")', []);
          tx.executeSql('INSERT INTO usuario (id, usuario, senha) VALUES (2, "Reinaldo", "1234")', []);
          tx.executeSql('INSERT INTO usuario (id, usuario, senha) VALUES (3, "Borba", "1234")', []);
          tx.executeSql('INSERT INTO usuario (id, usuario, senha) VALUES (3, "Jabulani", "1234")', []);
       });
	}
	*/
});