var saveAtendente = {
	init : function(){
	
		$('#cmd_salvar').live("click",function(){
			
			// values to send to backend
			var dataString = 'action=save'+
				'&nome='	+ $('#nome').val()+
				'&id=' + $('#id').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/atendente.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.status == 0) {
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

var back = {
	init : function(){
		$('#cmd_back').live('click',function(){
			$("#content").load("atendente-pesq.html", function(response, status, xhr) {
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
	
	back.init();

	saveAtendente.init();
});