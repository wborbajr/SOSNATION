$(document).ready(function() {
	
/*
	$("#driver").live("click",function(){
		$("#content").load("motorista-pesq.html", function(response, status, xhr) {
		  if (status == "error") {
		    var msg = "Sorry but there was an error: ";
		    alert(msg + xhr.status + " " + xhr.statusText);
		  }
		 });
	});
	
	$("#atendente").live("click",function(){
		$("#content").load("atendente-pesq.html", function(response, status, xhr) {
		  if (status == "error") {
		    var msg = "Sorry but there was an error: ";
		    alert(msg + xhr.status + " " + xhr.statusText);
		  }
		 });
	});
	
	$("#assistence").live("click",function(){
		$("#content").load("assistencia-pesq.html", function(response, status, xhr) {
		  if (status == "error") {
		    var msg = "Sorry but there was an error: ";
		    alert(msg + xhr.status + " " + xhr.statusText);
		  }
		 });
	});
*/
	$("#call").live("click",function(){
		$('#frame_content').attr('src','chamado-pesq.html');
//		$("#content").load("chamado-pesq.html", function(response, status, xhr) {
//		  if (status == "error") {
//		    var msg = "Sorry but there was an error: ";
//		    alert(msg + xhr.status + " " + xhr.statusText);
//		  }
//		 });
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