



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


var mX, mY;

$(document).mousemove(function(e){
	mX = e.clientX;
	mY = e.clientY;
	$("#pointer")
			.css({
			"top":mY,
			"left":mX
		})

})



$(".cPointer").hover(function(){
	console.log(mX)
	$("<img id='pointer'>")
		.attr("src",$(this).data("pointer"))
		.appendTo("body")
		.css({
			"top":mY,
			"left":mX
		})
}, function(){
	$("#pointer").remove()
})