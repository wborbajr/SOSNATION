var saveAssistencia = {
	init : function(){
	
		$('#cmd_salvar').live("click",function(){
			
			// values to send to backend
			var dataString = 'action=save'+
			'&nome='	+ $('#nome').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/assistencia.action.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.status == "000") {
						alert('Gravado com sucesso');
					}else{
						alert('Erro ao gravar');
					}
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

var searchAssistencia = {
	init : function(){
		$('#cmd_search_assist').live('click',function(){
			// values to send to backend
			var dataString = 'action=search'+
			'&nome='	+ $('#nome').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/assistencia.action.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					var content = '<tr class="even">';
					if(data.length >= 1){
						for(x=0; x<data.length; x++){
							content += '<td>'+data[x].id+'</td>';
							content += '<td>'+data[x].nome+'</td>';
						}
					}
					content += '</tr>';
					
					$("#dv_result").html(content);
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

// onLoad()
$(document).ready(function() {
	saveAssistencia.init();
});