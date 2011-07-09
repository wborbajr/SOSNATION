$(document).ready(function(){

	// database definition - 6Mb
	var db = window.openDatabase("EasyPed", "1.0", "EasyPed - Database", 6*1024*1024);

	onError = function(tx, e) {
		alert('Something unexpected happened: ' + e.message );
	}

	onSuccess = function(tx, rs) {
        
		if(rs.rows.length == 1) {
			e = $('#status');
			e.html("");

	//        for(var i=0; i < rs.rows.length; i++) {
	//          r = rs.rows.item(i);
	//          e.html(e.html() + 'Usuario: ' + r['usuario']);
	//        }

			e.html(e.html() + 'Olá: ' + rs.rows.item(0).usuario);

			$('#status').html('> ' + r.message);
		}
		
	}

	$("#cmd_login").click(function(){
		db.transaction(function(tx){
			password = $('#userid').val();
			tx.executeSql('SELECT * FROM usuario WHERE senha = ?', [password], onSuccess, onError);
		});
	});
});