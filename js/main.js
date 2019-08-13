



$(".link").click(function(){

  $("body")
     .remove("#modal, #modal-border");

  $("<div id='modal'></div>")
      .append("<div id='close'>&times;</div>")
      .appendTo("body");

        $("<div id='modal-border'></div>")
      .appendTo("body");
});

$(document).on("click","#close",function(){
    $("#modal, #modal-border").remove();
})