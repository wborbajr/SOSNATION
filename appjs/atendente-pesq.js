var searchAtendente = {
	init : function(){
		$('#cmd_search_atendente').live('click',function(){
			// values to send to backend
			var dataString = 'action=search'+
			'&nome='	+ $('#search').val();
			
			// save
			$.ajax({
				type: "POST",
				url: "php/atendente.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					if(data.length >= 1){
						var content = '';
						for(x=0; x<data.length; x++){
							content += '<tr class="even">';
							content += '<td><a href="'+data[x].id+'">Detalhe</a></td>';							
							content += '<td>'+data[x].id+'</td>';
							content += '<td>'+data[x].nome+'</td>';
							content += '</tr>';
						}
					}
					
					$("#result_atendente").html(content);
				}
				,
				error: function(XMLHttpRequest, ajaxOptions, thrownError){
					alert(XMLHttpRequest.status);
					alert(thrownError);
					alert(ajaxOptions + " [ " + thrownError + "] ");
				}
			});

		});
	}
};

var newAtendente = {
	init : function(){
		$("#cmd_new_atendente").live("click",function(){
			$("#content").load("atendente.html", function(response, status, xhr) {
			  if (status == "error") {
			    var msg = "Sorry but there was an error: ";
			    alert(msg + xhr.status + " " + xhr.statusText);
			  }
			 });
		});
	}
};

var findByCode = {
	init : function(){
		$('#tb_search tr').live('click',function(){
			// values to send to backend
			var id = $(this).find("a").attr("href");
			var dataString = 'action=find'+'&id=' + id;
			
			// save
			$.ajax({
				type: "POST",
				url: "php/atendente.php",
				dataType: "json",
				data: dataString,				
				timeout: 2000,
				success: function(data){
					
					$("#content").load("atendente.html", function(response, status, xhr) {
					  if (status == "error") {
					    var msg = "Sorry but there was an error: ";
					    alert(msg + xhr.status + " " + xhr.statusText);
					  } else if (status == "success") {
					  	 $('#id').val(data[0].id);
						 $('#nome').val(data[0].nome);
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

	findByCode.init();

	newAtendente.init();
	
	searchAtendente.init();
});