var populateAssistence = {
	init : function(){
		// populate assistence
		$.ajax({
			type: "POST",
			url: "php/assistencia.action.php",
			dataType: "json",
			timeout: 2000,
			success: function(data){
				var content = '<select>';
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
		// populate driver
		$.ajax({
			type: "POST",
			url: "php/motorista.action.php",
			dataType: "json",
			timeout: 2000,
			success: function(data){
				var content = '<select>';
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
		// save
		$.ajax({
			type: "POST",
			url: "php/motorista.action.php",
			dataType: "json",
			timeout: 2000,
			success: function(data){
				var content = '<select>';
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