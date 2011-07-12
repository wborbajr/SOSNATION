var searchMotorista = {
	init : function(){
		$('#cmd_search_assist').live('click',function(){
			// values to send to backend
			var dataString = 'action=search'+
			'&nome='	+ $('#nome').val();
			
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
							content += '<td>'+data[x].id+'</td>';
							content += '<td>'+data[x].nome+'</td>';
							content += '</tr>';
						}
					}
					
					$("#dv_result").html(content);
				}
				,
				error: function(XMLHttpRequest, ajaxOptions, thrownError){
					alert(XMLHttpRequest.status);
					alert(thrownError);
					alert(ajaxOptions + " [ " + thrownError + "] ");
				}
			});

		});
	}
};

var newMotorista = {
	init : function(){
		$("#cmd_new_assist").live("click",function(){
			$("#content").load("assistencia.html");
		});
	}
};

// onLoad()
$(document).ready(function() {
	newMotorista.init();
	
	searchMotorista.init();
});