$(document).ready(function() {

	$("#usuario").focus();

	$("#cmd_login").click(function(){
		$("#cmd_login").val("Validando");
		
		var usuario = $("#usuario").val();
		var senha 	= $("#senha").val();
		var dataString = 'usuario='+ usuario + '&senha=' + senha;
		
		// alert(dataString);
		
		$.ajax({
			type: "POST",
			url: "php/login.action.php",
			dataType: "json",
			data: dataString,
			timeout: 2000,
			success: function(data){
				alert("S " + data.status);
				if(data.status == 101) {
					alert("Error validating user...\n\n" + data.msg);
				}
				$("#cmd_login").val("Entrar");
			},
			error: function(data){
				alert("E : " + data);
				alert("Error validating user...\n\n" + data.status);
				alert(inputs.join("&"));
			},
			statusCode: {
				404: function(){
					alert("page not found");
				}	
			}
		});
		
		
		/*
$("#msgbox").removeClass().addClass('messagebox').text('Validando....').fadeIn(1000);
$("#msgbox").fadeTo(200,0.1,function(){
			$(this).html('Logging in.....').addClass('messageboxok').fadeTo(900,1,function(){
				document.location='secure.php';
			});
		});
  } else {
     $("#msgbox").fadeTo(200,0.1,function(){
        $(this).html('Your login detail sucks...').addClass('messageboxerror').fadeTo(900,1);
     });
  }
		*/
	});

});