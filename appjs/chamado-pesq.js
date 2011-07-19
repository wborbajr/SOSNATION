var searchChamado = {
	init : function(){
		$('#cmd_search').live('click',function(){
			// values to send to backend
			var dataString = 'action=search'+
			'&nrpedido='	+ $('#nrpedido').val();
			
			// search
			$.ajax({
				type: "POST",
				url: "php/chamado.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					var returnSize = data.length;
					if(returnSize >= 1){
						var content = '';
						for(x=0; x<returnSize; x++){
							content += '<tr class="even">';
							content += '<td><a href="chamado.html?'+data[x].id+'" target="frame_content">Detalhe</a></td>';							
							content += '<td>'+data[x].id+'</td>';
							content += '<td>'+data[x].nrpedido+'</td>';
							content += '<td>'+data[x].nome+'</td>';
							content += '<td>'+data[x].dtaceito+'</td>';
							content += '</tr>';
						}
					}
					
					$("#result").html(content);
				}
//				,
//				error: function(XMLHttpRequest, ajaxOptions, thrownError){
//					alert(XMLHttpRequest.status);
//					alert(thrownError);
//					alert(ajaxOptions + " [ " + thrownError + "] ");
//				}
			});

		});
	}
};

/*
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
*/

// onLoad()
$(document).ready(function() {
	//newChamado.init();
	
	searchChamado.init();
});