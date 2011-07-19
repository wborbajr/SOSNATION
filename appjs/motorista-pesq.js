var searchMotorista = {
	init : function(){
		$('#cmd_search').live('click',function(){
			// values to send to backend
			var dataString = 'action=search'+
			'&nome='	+ $('#search').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/motorista.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.length >= 1){
						var content = '';
						for(x=0; x<data.length; x++){
							content += '<tr class="even">';
							content += '<td><a href="motorista.html?'+data[x].id+'" target="frame_content">Detalhe</a></td>';							
							content += '<td>'+data[x].id+'</td>';
							content += '<td>'+data[x].nome+'</td>';
							content += '<td>'+data[x].cpf+'</td>';
							content += '<td>'+data[x].percent.replace('.',',')+'</td>';
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
var newMotorista = {
	init : function(){
		$("#cmd_new").live("click",function(){
			$("#content").load("motorista.html", function(response, status, xhr) {
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

	//newMotorista.init();
	
	searchMotorista.init();
});