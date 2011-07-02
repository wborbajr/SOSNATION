$("input#login").click(function(){
  /* just to be sure.. remove any changes from previous submit */                 
  $("input#username").removeClass("err"); 
  $("input#password").removeClass("err"); 
  $("span#loginErrMsg").empty();
  
  var username = $("input#username").val();
  var password = $("input#password").val();        
  
  if( username != "" && password != "") {                
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "login.php",
      data: "username="+ username +"&password="+password,
      success: function(json){
        if( json.success == "true" ) {
          $("form#frmLogin").remove(); /* remove the login form */
          $("div#userCP").load("userMiniCP.php"); /* display userMiniCp */ 
        } else {
          if(json.error == "1") {
             $("input#username").addClass("err"); // username is wrong
             $("span#loginErrMsg").append("Wrong user name");
          } else if(json.error == "2") {
            $("input#password").addClass("err"); // password is wrong
            $("span#loginErrMsg").append("Wrong password");
          } else if(json.error == "3") {
            $("input#username").addClass("err"); // user inactive
            $("input#password").addClass("err"); // user inactive
            $("span#loginErrMsg").append("User inactive");
          }
        }
      }, <------------
    });
  } else { // one or both of the inputs are empty
    $("span#loginErrMsg").append("Fill in both inputs..");
  }
})  
