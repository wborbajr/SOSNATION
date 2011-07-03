$(window).load(function() {

});

$(document).ready(function() {
	$.ajax({
		type: "POST",
		url: "php/validateSession.php",
		dataType: "json",
		timeout: 2000,
		success: function(data){
			if(data.status == "999"){
				window.location = 'login.html';
			}
		}
//		,
//		error: function(XMLHttpRequest, textStatus, errorThrown){
//			alert("Error : " + textStatus);
//		},
//		statusCode: {
//			404: function(){
//				alert("page not found");
//			}	
//		}
//	});
});