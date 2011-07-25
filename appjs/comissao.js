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

var calculate = {
	init : function(){
	
		$('#cmd_calc').live("click",function(){
		
			var dataString = 'action=calc'+
			'&motorista='	+	$('#motorista').val()+
			'&dtini='		+	$('#dtini').val()+
			'&dtfin=' 		+	$('#dtfin').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/comissao.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data) {
					var returnSize = data.length;
					
					var sumvalor = 0;
					var sumcomis = 0;
					
					if(returnSize >= 1) {
						var content = '';
						for(x=0; x<returnSize; x++){
						
//							var dtval = parseFloat(data[x].valor);
							var dttot = parseFloat(data[x].total);
						
//							sumvalor += dtval;
							sumcomis += dttot;
							
							content += '<tr class="even">';
							content += '<td>'+data[x].dtaceito+'</td>';
							content += '<td>'+data[x].veiculo+'</td>';
							content += '<td>'+data[x].placa+'</td>';
							content += '<td>'+dttot+'</td>';
							content += '</tr>';
							
						}
					}
					
					$("#result").html(content);
//					$("#sum_valor").html(sumvalor);
					$("#sum_comis").html(sumcomis);
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

function FormatCurrency(valor) {
	alert(valor.length);
	if(valor.length != 1) {
		var point = valor.indexOf('.');
		var tam = valor.length;

		if (point == -1) { // Não tem ponto decimal
			valor = valor + ",00";
		}else { // Tem ponto decimal verifica se necessita colocar zero no final
			if (tam - point < 3) {
				valor = valor + "0";
			}
		}
	}else{
		valor = valor + ",00";
	}

	return valor;
}


var printcomis = {
	init : function(){
		$('#cmd_print').live("click",function(){
			window.print();
		});
	}

};

// onLoad()
$(document).ready(function() {
	/*** populate combos ***/
	populateDriver.init();

	// Format fields
	$("#dtini").mask("99/99/9999");
	$("#dtfin").mask("99/99/9999");
	
	calculate.init();
	
	printcomis.init();
	
});