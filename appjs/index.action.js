$(document).ready(function() {
	
	// load menu
	$("#dv_menu").load("menu.inc.html");

	//	logout
	$("#logout").live("click",function(){
		$.ajax({
			type: "POST",
			url: "php/clearSession.php",
			dataType: "json",
			timeout: 2000,
			success: function(data){
				window.location = 'login.html';
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("Error : " + textStatus);
			},
			statusCode: {
				404: function(){
					alert("page not found");
				}	
			}
		});
	});
});