$(document).ready(function() {

	$("#usuario").focus();
	
	$("#cmd_login").click(function(){
		$("#cmd_login").val("Validando");
		
		var usuario = $("#usuario").val();
		var senha 	= $("#senha").val();
		var dataString = 'usuario='+ usuario + '&senha=' + senha;
		
		$.ajax({
			type: "POST",
			url: "php/login.action.php",
			dataType: "json",
			data: dataString,
			timeout: 2000,
			success: function(data){
				if(data.status == "000") {
					window.location = 'index.html';
				}else if(data.status == "101"){
					$("#messageBox").removeClass().addClass("messageboxerror").html(data.message).fadeIn(2000).fadeOut(4000);
				}
				$("#cmd_login").val("Entrar");
			}
//			,
//			error: function(XMLHttpRequest, textStatus, errorThrown){
//				alert(textStatus + " [ " + errorThrown + "] ");
//			},
//			statusCode: {
//				404: function(){
//					alert("page not found");
//				}	
//			}
		});
	});
});