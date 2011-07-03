$(document).ready(function() {
	
	// load menu
	//$("#dv_status").load("menu.inc.html");

	//	menu
	$("#driver").live("click",function(){
		$("#content").load("motorista.inc.html");
	});
	
	$("#assistence").live("click",function(){
		$("#content").load("assistencia.inc.html");
	});

	$("#call").live("click",function(){
		$("#content").load("chamado.inc.html");
	});

	//	logout
	$("#logout").live("click",function(){
		$.ajax({
			type: "POST",
			url: "php/clearSession.php",
			dataType: "json",
			timeout: 2000,
			success: function(data){
				window.location = 'login.html';
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