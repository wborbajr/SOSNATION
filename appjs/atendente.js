var saveAtendente = {
	init : function(){
	
		$('#cmd_salvar').live("click",function(){
			
			// values to send to backend
			var dataString = 'action=save'+
				'&nome='	+ $('#nome').val()+
				'&cpf='	+ $('#cpf').val()+
				'&id=' 	+ $('#id').val();
				
			// save
			$.ajax({
				type: "POST",
				url: "php/atendente.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.status == 0) {
						$("#messageBox").removeClass().addClass("messageboxerror").html('Gravado com sucesso.').fadeIn(2000).fadeOut(4000);
					}else{
						$("#messageBox").removeClass().addClass("messageboxerror").html(data.msg).fadeIn(2000).fadeOut(4000);
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

var deleteAtendente = {
	init : function(){
	
		$('#cmd_delete').live("click",function(){
			
			// values to send to backend
			var dataString = 'action=delete'+
				'&nome='	+ $('#nome').val()+
				'&cpf='	+ $('#cpf').val()+
				'&id=' 	+ $('#id').val();
				
				
			// save
			$.ajax({
				type: "POST",
				url: "php/atendente.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.status == 0) {
						$("#messageBox").removeClass().addClass("messageboxerror").html('REMOVIDO com sucesso.').fadeIn(2000).fadeOut(4000);
					}else if(data.status == 300){
						$("#messageBox").removeClass().addClass("messageboxerror").html('ATENDENTE não pode ser removido, pois já esta em uso.').fadeIn(2000).fadeOut(4000);
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

//var back = {
//	init : function(){
//		$('#cmd_back').live('click',function(){
//			$("#content").load("atendente-pesq.html", function(response, status, xhr) {
//			  if (status == "error") {
//			    var msg = "Sorry but there was an error: ";
//			    alert(msg + xhr.status + " " + xhr.statusText);
//			  }
//			 });
//		});
//	}
//};

// onLoad()
$(document).ready(function() {

	var idx = document.URL.indexOf('?');
	
	if (idx >= 0) {
		var param = document.URL.substring(idx+1,document.URL.length).split('&');
	
		var dataString = 'action=find'+'&id=' + param;
		
		// save
		$.ajax({
			type: "POST",
			url: "php/atendente.php",
			dataType: "json",
			data: dataString,				
			timeout: 2000,
			success: function(data){
			  	 $('#id').val(data[0].id);
				 $('#nome').val(data[0].nome);
				 $('#cpf').val(data[0].cpf);
			}
		});
	}

	// Format fields
	$('#cpf').mask('999.999.999-99');
	
	//back.init();

	saveAtendente.init();
	
	deleteAtendente.init();
	
	findByCode.init();
	
});