var saveMotorista = {
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
				url: "php/motorista.php",
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

//var back = {
//	init : function(){
//		$('#cmd_back').live('click',function(){
//			$("#content").load("motorista-pesq.html", function(response, status, xhr) {
//			  if (status == "error") {
//			    var msg = "Sorry but there was an error: ";
//			    alert(msg + xhr.status + " " + xhr.statusText);
//			  }
//			 });
//		});
//	}
//};

var findByCode = {
	init : function(){
		$('#tb_search tr').live('click',function(){
			// values to send to backend
			var id = $(this).find("a").attr("href");
			var dataString = 'action=find'+'&id=' + id;
			
			// save
			$.ajax({
				type: "POST",
				url: "php/motorista.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					
					$("#content").load("motorista.html", function(response, status, xhr) {
					  if (status == "error") {
					    var msg = "Sorry but there was an error: ";
					    alert(msg + xhr.status + " " + xhr.statusText);
					  } else if (status == "success") {
					  	 $('#id').val(data[0].id);
						 $('#nome').val(data[0].nome);
						 $('#cpf').val(data[0].cpf);
					  }
					 });
				},
				error: function(XMLHttpRequest, ajaxOptions, thrownError){
					alert(XMLHttpRequest.status);
					alert(thrownError);
					alert(ajaxOptions + " [ " + thrownError + "] ");
				}
			});
			return false;
		});
	}
};


// onLoad()
$(document).ready(function() {

	var idx = document.URL.indexOf('?');
	if (idx != -1) {
		var param = document.URL.substring(idx+1,document.URL.length).split('&');
	
		var dataString = 'action=find'+'&id=' + param;
		
		// save
		$.ajax({
			type: "POST",
			url: "php/motorista.php",
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
	
	//back.init();

	saveMotorista	.init();
	
	findByCode.init();
	
});