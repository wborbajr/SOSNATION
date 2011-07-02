$(document).ready(function() {

	$("#usuario").focus();
	
	$("#cmd_login").click(function(){
		$("#cmd_login").val("Validando");
		
		var usuario = $("#usuario").val();
		var senha 	= $("#senha").val();
		var dataString = 'usuario='+ usuario + '&senha=' + senha;
		
		$.ajax({
			type: "POST",
			url: "php/login.action.php",
			dataType: "json",
			data: dataString,
			timeout: 2000,
			success: function(data){
				if(data.status == "000") {
					window.location = 'index.html';
				}else if(data.status == "101"){
					$("#messageBox").removeClass().addClass("messageboxerror").html(data.message).fadeIn(2000).fadeOut(4000);
				
				
//					$("#msgbox").html(data.message);
//					$("#msgbox").fadeIn(400, function(){
//						setTimeout(function(){
//							$("#msgbox").fadeOut(300,function(){
//								$("#msgbox").remove();	
//							});
//						},2500);
//					});

//					$("<div>").attr("id","message").html( data.message ).css({
//						"position": "absolute",
//						"top": "300px",
//						"left": "1000px",
//						"display": "none"
//					}).addClass( data.success ? "ajax-success" : "ajax-error" ).appendTo("body").fadeIn().delay( 2500 ).fadeOut();
				}
				$("#cmd_login").val("Entrar");
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				alert("Error : " + textStatus);
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