var populateAtendente = {
	init : function(){
	
		var dataString = 'action=getall';
	
		// populate atendente
		$.ajax({
			type: "POST",
			url: "php/atendente.php",
			dataType: "json",
			data: dataString,				
			timeout: 2000,
			success: function(data){
				var content = '<select id="atendente">';
				content += '<option value="">Selecione</option>';
				if(data.length >= 1){
					for(x=0; x<data.length; x++){
						content += '<option value="'+data[x].id+'">'+data[x].nome+'</option>';
					}
				}
				content += '</select>';
				
				$("#dv_atendente").html(content);
			}
//			,
//			error: function(XMLHttpRequest, ajaxOptions, thrownError){
//				alert(XMLHttpRequest.status);
//				alert(thrownError);
//				alert(ajaxOptions + " [ " + thrownError + "] ");
//			}
		});
	}
};

var populateAssistence = {
	init : function(){
	
		var dataString = 'action=getall';
	
		// populate assistence
		$.ajax({
			type: "POST",
			url: "php/assistencia.php",
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
			}
//			,
//			error: function(XMLHttpRequest, ajaxOptions, thrownError){
//				alert(XMLHttpRequest.status);
//				alert(thrownError);
//				alert(ajaxOptions + " [ " + thrownError + "] ");
//			}
		});
	}
};

var populateDriver = {
	init : function(){
	
		var dataString = 'action=getall';
	
		// populate driver
		$.ajax({
			type: "POST",
			url: "php/motorista.php",
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
			}
//			,
//			error: function(XMLHttpRequest, ajaxOptions, thrownError){
//				alert(XMLHttpRequest.status);
//				alert(thrownError);
//				alert(ajaxOptions + " [ " + thrownError + "] ");
//			}
		});
	}
};

var saveChamado = {
	init : function(){
	
		$('#cmd_salvar').live("click",function(){
		
			// Validate required fields
			if($('#aceito').val().length == 0) {
				alert('ACEITE deve ser preenchido');
				return false;
			}

			if($('#assistencia').val().length == 0) {
				alert('ASSISTÊNCIA deve ser preenchido');
				return false;
			}

			if($('#motorista').val().length == 0) {
				alert('MOTORISTA deve ser preenchido');
				return false;
			}

			if($('#atendente').val().length == 0) {
				alert('ATENDENTE deve ser preenchido');
				return false;
			}

			// values to send to backend
			var dataString = 'action=save'+
			'&cliente='			+	$('#cliente').val()+
			'&fone='				+	$('#fone').val()+
			'&veiculo=' 		+	$('#veiculo').val()+
			'&cor='   			+	$('#cor').val()+
			'&placa=' 			+	$('#placa').val()+
			'&local='   		+	$('#local').val()+
			'&destino=' 		+	$('#destino').val()+
			'&valor='   		+ 	$('#valor').val().replace(',','.')+
			'&kminicial=' 		+	$('#kminicial').val()+
			'&kmfinal='  		+ 	$('#kmfinal').val()+
			'&pedagio=' 		+ 	$('#pedagio').val().replace(',','.')+
			'&chklist='   		+ 	$('#chklist').val()+
			'&assistencia='	+ 	$('#assistencia').val()+
			'&nrpedido=' 		+ 	$('#nrpedido').val()+
			'&hacionamento=' 	+ 	$('#hacionamento').val()+
			'&hconclusao='   	+ 	$('#hconclusao').val()+
			'&folha=' 			+ 	$('#folha').val()+
			'&servico='   		+ 	$('#servico').val()+
			'&motorista=' 		+ 	$('#motorista').val()+
			'&frota='   		+ 	$('#frota').val()+
			'&atendente='   	+ 	$('#atendente').val()+
			'&observacao=' 	+ 	$('#observacao').val()+
			'&aceito=' 			+ 	$('#aceito').val()+
			'&hpassado=' 		+ 	$('#hpassado').val()+
			'&notafiscal=' 	+ 	$('#notafiscal').val()+
			'&previsao=' 		+ 	$('#previsao').val()+
			'&id=' 				+  $('#id').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/chamado.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.status == 0) {
						$("#messageBox").removeClass().addClass("messageboxerror").html('Gravado com sucesso.').fadeIn(2000).fadeOut(4000);
					}else{
						$("#messageBox").removeClass().addClass("messageboxerror").html('ERRO ao gravar.').fadeIn(2000).fadeOut(4000);
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
/*
var novoChamado = {
	init : function(){
		$('#cmd_new').live('click',function(){
			$('#content').load('chamado.html', function(response, status, xhr) {
			  if (status == "error") {
			    var msg = "Sorry but there was an error: ";
			    alert(msg + xhr.status + " " + xhr.statusText);
			  }
			 });
		});
	}
};

var back = {
	init : function(){
		$('#cmd_back').live('click',function(){
			$("#content").load("chamado-pesq.html", function(response, status, xhr) {
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
	var idx = document.URL.indexOf('?');
	
	/*** populate combos ***/
	populateAssistence.init();
	populateDriver.init();
	populateAtendente.init();
	
	if (idx >= 0) {
		var param = document.URL.substring(idx+1,document.URL.length).split('&');
	
		var dataString = 'action=find'+'&id=' + param;
		
		// save
		$.ajax({
			type: "POST",
			url: "php/chamado.php",
			dataType: "json",
			data: dataString,				
			timeout: 2000,
			success: function(data){
				$('#id').val(data[0].id);
				$('#cliente').val(data[0].cliente);
				$('#fone').val(data[0].fone);
				$('#veiculo').val(data[0].veiculo);
				$('#cor').val(data[0].cor);
				$('#placa').val(data[0].placa);
				$('#local').val(data[0].local);
				$('#destino').val(data[0].destino);
				$('#valor').val(data[0].valor.replace('.',','));
				$('#kminicial').val(data[0].kminicial);
				$('#kmfinal').val(data[0].kmfinal);
				$('#pedagio').val(data[0].pedagio.replace('.',','));
				$('#chklist').val(data[0].chklist);
				$('#assistencia').val(data[0].assistencia);
				$('#nrpedido').val(data[0].nrpedido);
				$('#hacionamento').val(data[0].hacionamento);
				$('#hconclusao').val(data[0].hconclusao);
				$('#folha').val(data[0].folha);
				$('#servico').val(data[0].servico);
				$('#motorista').val(data[0].motorista);
				$('#frota').val(data[0].frota);
				$('#atendente').val(data[0].atendente);
				$('#observacao').val(data[0].observacao);
				$('#aceito').val(data[0].dtaceito);
				$('#notafiscal').val(data[0].notafiscal);
				$('#hpassado').val(data[0].hpassado);
				$('#previsao').val(data[0].previsao);
				
				$('select.assistencia option:selected').val(data[0].assistencia);
				$('#motorista').val(data[0].motorista);
				$('#atendente').val(data[0].atendente);
			}
		});
	}

	// Format fields
	$("#aceito").mask("99/99/9999");
	$("#placa").mask("aaa-9999");
	$("#hacionamento").mask("99:99");
	$("#hpassado").mask("99:99");
	$("#previsao").mask("99:99");
	$("#hacionamento").mask("99:99");
	$("#fone").mask("9999-9999");
	
	// Money format
	$('#valor').priceFormat({
		prefix: '',
		centsSeparator: ',',
		thousandsSeparator: '.'
	});	
	$('#pedagio').priceFormat({
		prefix: '',
		centsSeparator: ',',
		thousandsSeparator: '.'
	});

	//novoChamado.init();

	//back.init();
	
	saveChamado.init();
	
});