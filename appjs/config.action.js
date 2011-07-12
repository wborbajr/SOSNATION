$(document).ready(function() {
	
	$.ajax({
		type: "POST",
		url: "php/systemConfig.php",
		dataType: "json",
		timeout: 2000,
		success: function(data){
			$(this).attr("title", data[0].title + data[0].version);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert("Error : " + errorThrown);
		},
		statusCode: {
			404: function(){
				alert("page not found");
			}	
		}
	});
	
	
});