var searchChamado = {
	init : function(){
		$('#cmd_search_chamado').live('click',function(){
			// values to send to backend
			var dataString = 'action=search'+
			'&nrpedido='	+ $('#nrpedido').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/chamado.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.length >= 1){
						var content = '';
						for(x=0; x<data.length; x++){
							content += '<tr class="even">';
							content += '<td>'+data[x].nrpedido+'</td>';
							content += '<td>'+data[x].assistencia+'</td>';
							content += '<td>'+data[x].data+'</td>';
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

var newChamado = {
	init : function(){
		$("#cmd_new_chamado").live("click",function(){
			$("#content").load("chamado.html", function(response, status, xhr) {
			  if (status == "error") {
			    var msg = "Sorry but there was an error: ";
			    alert(msg + xhr.status + " " + xhr.statusText);
			  }
			 });
		});
	}
};

// onLoad()
$(document).ready(function() {
	newChamado.init();
	
	searchChamado.init();
});