var populateAssistence = {
	init : function(){
	
		var dataString = 'action=getall';
	
		// populate assistence
		$.ajax({
			type: "POST",
			url: "php/assistencia.action.php",
			dataType: "json",
			data: dataString,				
			timeout: 2000,
			success: function(data){
				var content = '<select id="assistencia">';
				content += '<option value="">Selecione</option>';
				if(data.length >= 1){
					for(x=0; x<data.length; x++){
						content += '<option value="'+data[x].id+'">'+data[x].nome+'</option>';
					}
				}
				content += '</select>';
				
				$("#dv_assistencia").html(content);
			},
			error: function(XMLHttpRequest, ajaxOptions, thrownError){
				alert(XMLHttpRequest.status);
				alert(thrownError);
				alert(ajaxOptions + " [ " + thrownError + "] ");
			}
		});
	}
};

var populateDriver = {
	init : function(){
	
		var dataString = 'action=getall';
	
		// populate driver
		$.ajax({
			type: "POST",
			url: "php/motorista.action.php",
			dataType: "json",
			data: dataString,				
			timeout: 2000,
			success: function(data){
				var content = '<select id="motorista">';
				content += '<option value="">Selecione</option>';
				if(data.length >= 1){
					for(x=0; x<data.length; x++){
						content += '<option value="'+data[x].id+'">'+data[x].nome+'</option>';
					}
				}
				content += '</select>';
				
				$("#dv_motorista").html(content);
			},
			error: function(XMLHttpRequest, ajaxOptions, thrownError){
				alert(XMLHttpRequest.status);
				alert(thrownError);
				alert(ajaxOptions + " [ " + thrownError + "] ");
			}
		});
	}
};

var saveChamado = {
	init : function(){
	
		$('#cmd_salvar').live("click",function(){
			
			// values to send to backend
			var dataString = 'action=save'+
			'&cliente='			+	$('#cliente').val()+
			'&fone='				+	$('#fone').val()+
			'&veiculo=' 		+	$('#veiculo').val()+
			'&cor='   			+	$('#cor').val()+
			'&placa=' 			+	$('#placa').val()+
			'&local='   		+	$('#local').val()+
			'&destino=' 		+	$('#destino').val()+
			'&valor='   		+ 	$('#valor').val()+
			'&kminicial=' 		+	$('#kminicial').val()+
			'&kmfinal='  		+ 	$('#kmfinal').val()+
			'&pedagio=' 		+ 	$('#pedagio').val()+
			'&chklist='   		+ 	$('#chklist').val()+
			'&assistencia='	+ 	$('#assistencia').val()+
			'&nrpedido=' 		+ 	$('#nrpedido').val()+
			'&hacionamento='  + 	$('#hacionamento').val()+
			'&hconclusao='   	+ 	$('#hconclusao').val()+
			'&folha=' 			+ 	$('#folha').val()+
			'&servico='   		+ 	$('#servico').val()+
			'&motorista=' 		+ 	$('#motorista').val()+
			'&frota='   		+ 	$('#frota').val()+
			'&atendente='   	+ 	$('#atendente').val()+
			'&observacao=' 	+ 	$('#observacao').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/chamado.action.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.status == "000") {
						alert('Gravado com sucesso');
					}else{
						alert('Erro ao gravar');
					}
				},
				error: function(XMLHttpRequest, ajaxOptions, thrownError){
					alert(XMLHttpRequest.status);
					alert(thrownError);
					alert(ajaxOptions + " [ " + thrownError + "] ");
				}
			});
			
		});
		
	}
};

// format currency value
var currencyFormat = {
	init : function(){
		$("#total").formatCurrency({
		  decimalSymbol: ',',
		  digitGroupSymbol: '.',
		  dropDecimals: false,
		  groupDigits: true,
		  symbol: 'R$ '
		});
	}
};

// onLoad()
$(document).ready(function() {
	populateAssistence.init();
	
	populateDriver.init();
	
	saveChamado.init();
});