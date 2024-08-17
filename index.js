
  $(document).ready(function(){
    $('#taskname').on('keydown', function(event) {
      if (event.keyCode === 13) { 
        event.preventDefault();
        if($("#taskname").val().length !=0 && $("#taskname").val().length <=30){
          var task=$("#tasks").html();
          var tasklist='<div class="lists"><p class="nameoftask">' +$("#taskname").val()+'</p><button class="complete" data-dismiss="alert">&#10003;</button><button  class="edit" data-dismiss="alert">&#9998;</button><button class="close-btn" data-dismiss="alert">&#x2715;</button></div>'
          
          var audiaadd = document.getElementById('addtaskaudio');
          audiaadd.play();
          $("#tasks").html(tasklist+task);
          $("#taskname").val("")
      }

    else if($("#taskname").val().length >30){
      $("#error").html("enter shortlength task not para").css("display","block")
      $("#taskname").val("")
    }   
      else{
        $("#error").css("display","block")
      }
      }
  });
  
    $("#add").click(function(){
        if($("#taskname").val().length !=0 && $("#taskname").val().length <=30){
            var task=$("#tasks").html();
            var tasklist='<div class="lists"><p class="nameoftask">' +$("#taskname").val()+'</p><button class="complete" data-dismiss="alert">&#10003;</button><button  class="edit" data-dismiss="alert">&#9998;</button><button class="close-btn" data-dismiss="alert">&#x2715;</button></div>'
            
            
            $("#tasks").html(tasklist+task);
            $("#taskname").val("")
          
            var audiaadd = document.getElementById('addtaskaudio');
            audiaadd.play();
        }

      else if($("#taskname").val().length >30){
        // alert("this is to-do list please enter task length 30 not paragraph")
        $("#error").html("enter shortlength task not para").css("display","block")
        $("#taskname").val("")
      }   
        else{
          //  alert("enter a task");
          $("#error").css("display","block")
        }
    });

    $(document).on("click", ".close-btn", function(){
        $(this).parent().remove();
        var audiaadd = document.getElementById('close');
        audiaadd.play();
    });

    $(document).on("click", ".edit", function(){
      var audiaadd = document.getElementById('edit');
      audiaadd.play();
      let y = $(this).siblings("p").text();
    $("#taskname").val(y);
    $(this).parent().remove();
    });
})
$(document).on('click', '.complete', function() {  
  if (!$(this).siblings("p").hasClass("completetask")) {  
      $(this).siblings("p").addClass("completetask");  
      $(this).parent().hide(2000)
      var audiaadd = document.getElementById('complete');
      audiaadd.play();
  } else {  
      $(this).siblings("p").removeClass("completetask");  
  }
});
