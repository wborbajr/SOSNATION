var saveMotorista = {
	init : function(){
	
		$('#cmd_salvar').live("click",function(){
			
			// values to send to backend
			var dataString = 'action=save'+
			'&nome='	+ $('#nome').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/motorista.php",
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


var back = {
	init : function(){
		$('#cmd_back').live('click',function(){
			$("#content").load("motorista-pesq.html");
		});
	}
};


// onLoad()
$(document).ready(function() {
	
	back.init();

	saveMotorista	.init();
});