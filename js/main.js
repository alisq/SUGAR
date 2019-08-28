


$(window).load(function(){
	if (window.location.hash !="null") {

		loadContent(window.location.hash.replace("#!",""))
	}
})


$(".link").click(function(){
	
	loadContent($(this).data("href"))

});     

$(document).on("click","#close",function(){
    $("#modal, #modal-border").remove();
    window.location.hash = "";
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


function loadContent(section) {
	var pageContents;
  	$("body").remove("#modal, #modal-border");
     window.location.hash = "#!"+section;
     $.ajax({
     	dataType:"json",
     	url:"http://sugarcontemporary.com/pagedata/"+section,
     	success:function(e) {
     		console.log(e);
     		pageContents = "<h3>"+e.nodes[0].node.context_title+"</h3>";
     		pageContents += "<div class='module-content'>"+e.nodes[0].node.body+"</div>";
     		console.log(pageContents)

			  $("<div id='modal'></div>")
			      .append("<div id='close'>&times;</div>")
			      .append(pageContents)
			      .appendTo("body");

			        $("<div id='modal-border'></div>")
			      .appendTo("body");
			

     	}
     })
}