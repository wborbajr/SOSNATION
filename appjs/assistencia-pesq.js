var searchAssistencia = {
	init : function(){
		$('#cmd_search').live('click',function(){
			// values to send to backend
			var dataString = 'action=search'+
			'&nome='	+ $('#search').val();
			
			// search
			$.ajax({
				type: "POST",
				url: "php/assistencia.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.length >= 1){
						var content = '';
						for(x=0; x<data.length; x++){
							content += '<tr class="even">';
							content += '<td><a href="assistencia.html?'+data[x].id+'" target="frame_content">Detalhe</a></td>';							
							content += '<td>'+data[x].id+'</td>';
							content += '<td>'+data[x].nome+'</td>';
							content += '</tr>';
						}
					}
					
					$("#result").html(content);
				}
			});
		});
	}
};

/*
var newAssistencia = {
	init : function(){
		$("#cmd_new").live("click",function(){
			$("#content").load("assistencia.html", function(response, status, xhr) {
			  if (status == "error") {
			    var msg = "Sorry but there was an error: ";
			    alert(msg + xhr.status + " " + xhr.statusText);
			  }
			 });
		});
	}
};
*/

// onLoad()
$(document).ready(function() {

	//newAssistencia.init();
	
	searchAssistencia.init();
});