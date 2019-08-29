



	if (window.location.hash !=null) {

		let f = window.location.hash.replace("#!","")
		let pages = ["current", "past", "future"];
		if (pages.includes(f)) {
			loadContent(f)	
		}

		
	}



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



$(document).on("mouseenter",".cPointer",function(){
	console.log(mX)
	$("<img id='pointer'>")
		.attr("src",$(this).data("pointer"))
		.appendTo("body")
		.css({
			"top":mY,
			"left":mX
		})
});

$(document).on("mouseleave",".cPointer",function(){
	
	$("#pointer").remove();
});


// $(document).on("scroll",function(){
// 	console.log("scrolling");
// })

function loadContent(section) {
	var pageContents;
  	$("body").remove("#modal, #modal-border");
     window.location.hash = "#!"+section;
     $.ajax({
     	dataType:"json",
     	url:"http://sugarcontemporary.com/pagedata/"+section,
     	success:function(e) {     		
     		pageContents = "<div class='modal-content'>"+e.nodes[0].node.body+"</div>";

			  $("<div id='modal'></div>")
			      .append("<div id='close'>&times;</div>")
			      .append(pageContents)
			      .appendTo("body");

			      //   $("<div id='modal-border'></div>")
			      // .appendTo("body");
			$(".inline-image").each(function(){
				//r = (Math.floor(Math.random()*20-10));
				//console.log(r)
				// $(this).css("transform","rotate("+r+"deg)")
			})


     	}
     })
}