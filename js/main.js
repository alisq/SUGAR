



$(".link").click(function(){
	var pageContents;


  $("body")
     .remove("#modal, #modal-border");

     $.ajax({
     	dataType:"json",
     	url:"http://sugarcontemporary.com/pagedata/"+$(this).data("href"),
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
			

     	}, 
     	error: function() { 
     		e = {"nodes":[{"node":{"context_title":"Pickle Politics","title":"FUTURE","body":"<p><em>Pickle Politics<\/em> presents the inaugural exhibition at SUGAR by artist collective Slavs and Tatars. For this context Slavs and Tatars activate a body of work that connects to the potency and power of fermentation as transformative markers of politics and culture.&nbsp;&nbsp;<\/p>\n<p>This exhibition seeks to connect to diverse and surprising publics in its different forms of engagement including: visual iconography that shift across cultures, the presence of various languages and the opportunity to consume other life as microbiomes in shared culinary experience.&nbsp;<\/p>\n<p>Slavs and Tatars represent something critical of our current times as Russia and the Middle East hang in the balance of planetary attention \u2013a cosmo-political attention that continues to shape, reflect and drive forward ideologies of the East and the West. Slavs and Tatars\u2019 practice has been devoted to an area east of the former Berlin Wall and west of the Great Wall of China known as Eurasia. Eurasia is a place where we would like to start asking questions; a place that we and many members of the art community and residents of the city belong.<\/p>\n<p>The city is changing; its public spaces, manifestations and attitudes have an opportunity to transform. Pickle Politics is a project about fermentation, about the forming of culture a new, through engaged transformation, conversation and inclusion of other forms of life.&nbsp;<\/p>\n<p>\"Whether microbes or mitochondria dwelling furtively on the skin or non-native agents living within us: bacteria comprise one kilogram of the average human body. Pickle Politics looks to the practices and symbolism of fermentation, constructing a political argument using notions of the rotten, the spoiled, and the soured.\" - Slavs and Tatars&nbsp;<\/p>\n<p>Exhibition Runs October 17 2019 - January 31 2020<br \/>\nOpening Reception: October 17, 18:30 - 22:00<br \/>\nRemarks at 7:15pm&nbsp;<br \/>\nLecture performance by Slavs &amp; Tatars at 19:30 - 20:20 Transliterative Tease&nbsp;<\/p>\n<p>Friday October 18<br \/>\nLecture performance by Slavs &amp; Tatars<br \/>\n17:00 Molla Nasreddin: Embrace Your Antithesis&nbsp;<br \/>\n18:30 Red Black Thread<br \/>\n20:00 Al isnad&nbsp;<\/p>\n<p>Saturday October 19&nbsp;<br \/>\n12:00 I utter other&nbsp;<br \/>\n1:00-2:00 Lunch (provided at SUGAR)&nbsp;<br \/>\n2:00 Reverse Joy&nbsp;<br \/>\n3:30 79.89.09 (persian)&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p><img alt=\"\" class=\"inline-image\" height=\"460\" src=\"http:\/\/sugarcontemporary.com\/sites\/default\/files\/image2.png\" width=\"602\" \/><\/p>\n<p><strong>Transliterative Tease&nbsp;<\/strong><br \/>\nThrough the lens of phonetic, semantic, and theological slippage, Transliterative Tease explores the potential for transliteration\u2013the conversion of scripts\u2013as a strategy equally of resistance and research into notions such as identity politics, colonialism, and faith. The lecture- performance focuses on the Turkic languages of the former Soviet Union, as well as the eastern and western frontiers of the Turkic sphere, namely Anatolia and Xinjiang\/Uighuristan. Lenin believed that the revolution of the east begins with the Latinization of the alphabets of all Muslims of the USSR. The march of alphabets has always accompanied that of empires\u2013Arabic with the rise of Islam, Latin with that of Roman Caholicism, and Cyrillic with the Orthodox Church and subsequently communism. The lecture attempts not to emancipate peoples or nations but rather the sounds rolling off our tongues.&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p><img alt=\"\" class=\"inline-image\" height=\"419\" src=\"http:\/\/sugarcontemporary.com\/sites\/default\/files\/image4.png\" width=\"599\" \/><\/p>\n<p><strong>Molla Nasreddin: Embrace Your Antithesis&nbsp;<\/strong><br \/>\nArguably the most important periodical of the Muslim world in the 20th century, Molla Nasreddin was a legendary Azerbaijani periodical, featuring illustrations reminiscent of a Daumier of the Caucasus. Molla Nasreddin was read by an audience that stretched from Morocco to India, and addressed issues such as gender equality, education, colonialism, and Islam\u2019s integration of modernity \u2013 all of which remain as relevant and pressing today as when the magazine was first published a century ago. Molla Nasreddin: Embrace Your Antithesis includes a discussion of the book\u2019s historical context, a case study of the complexity otherwise known as the Caucasus, the figure of the antimodern, and the issue of self-censorship a century ago and today.<\/p>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p><img alt=\"\" class=\"inline-image\" height=\"902\" src=\"http:\/\/sugarcontemporary.com\/sites\/default\/files\/image1.png\" width=\"1642\" \/><\/p>\n<p><strong>Red Black Thread<\/strong><br \/>\nRed Black Thread addresses the construction of race, namely blackness, from the perspective of Russia, the Soviet Union, and communism. Due to the slave trade in the Americas and European imperialism, blackness is often construed through an Atlanticist perspective and in Anglophone and Francophone bodies of knowledge. From imperial Russia\u2019s involvement in Africa to the Soviet instrumentalization of \u2018the Negro question\u2019 in the United States, Red-Black Thread challenges this Atlanticist understanding of blackness and race, through an unlikely constellation of ideas including orientalism [and] multiculturalism.<\/p>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p><img alt=\"\" class=\"inline-image\" height=\"496\" src=\"http:\/\/sugarcontemporary.com\/sites\/default\/files\/image6.png\" width=\"659\" \/><\/p>\n<p><strong>Al-Isnad or Chains We Can Believe&nbsp;<\/strong><br \/>\nIn Al-Isnad or Chains We Can Believe In tells the story of mysticism within modernity, namely through the unlikely perspective of a Dan Flavin commissions for a Sufi mosque in downtown New York in the early 1980s, via the Dia Art Foundation. From Khlebnikov and the Russian Futurists to Charles de Foucauld and le renouveau catholique, the lecture attempts a definition of criticality through hospitality and the sacred, linguistic and syncretic, respectively.<\/p>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p><img alt=\"\" class=\"inline-image\" height=\"481\" src=\"http:\/\/sugarcontemporary.com\/sites\/default\/files\/image3.png\" width=\"649\" \/><\/p>\n<p><strong>I utter other<\/strong><br \/>\nWhat does it mean for one east to look to and at another one? Can the romanticized romanticize? From Poles in the service of the Tsar to Persian Presbyterians, I Utter Other looks at the curious case of Slavic Orientalism in the Russian Empire and early USSR. Slavic Orientalism offers a crucial counterpoint if not antecedent to the received wisdom of Saidian Orientalism. Despite the radical transition from Tsarism to Bolshevism, the study of the East in the East complicates notions of identity politics and knowledge in the service of power, offering a coherent post-colonial critique some 60 years avant la lettre.&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p><img alt=\"\" class=\"inline-image\" height=\"470\" src=\"http:\/\/sugarcontemporary.com\/sites\/default\/files\/image8.png\" width=\"527\" \/><br \/>\n<strong>79.89.09 (persain)&nbsp;<\/strong><br \/>\n79.89.09 looks at issues as disparate as the monobrow, modernity, and the Beach Boys in understanding the importance of these two moments for the greater Middle East today. The lecture acted as the opening salvo to Slavs and Tatars\u2019 second cycle of work, Friendship of Nations: Polish Shi\u2019ite Showbiz, an investigation of the unlikely points of convergence in the economic, cultural, and political histories of Poland and Iran, respectively. From the 17th century \u0301s Sarmatism to the 21st century reform movement in Iran, the advent of the 24 hour news cycle to the role of crafts as citizen diplomacy, 79.89.09 presents a lateral look at the two countries in their quest for self determination.&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p>&nbsp;<\/p>\n<p><img alt=\"\" class=\"inline-image\" height=\"486\" src=\"http:\/\/sugarcontemporary.com\/sites\/default\/files\/image7.png\" width=\"649\" \/><br \/>\n<strong>Reverse Joy<\/strong><br \/>\nReverse Joy (lecture-performance) looks at Muharram, the yearly Shi\u2019a commemoration of Hossein as a perpetual protest movement for its radical reconsideration of history and justice. Inserting oneself, flesh and faith, into events that transpired 13 centuries ago; the collapse of traditional understandings of time; the reversal of roles of men and women; and joy through mourning all demand an equally elastic and muscular understanding of the sacred and the profane that is the down payment towards any meaningful social change. So we turn to the Shi\u2019a ritual of Muharram not necessarily to better understand Islam or the Middle East per se, but rather to better grasp our own understandings of modernity, history, and time. Reverse Joy looks at the complex constellation of Muharram, as a counterpart to Carnival, which over the course of 13 centuries has taken on a near cosmic significance, beyond regional rivalries, and possibly beyond the faith itself to impact notions of identity, mysticism, protest, and resistance in the world at large.&nbsp;<\/p>\n<p>&nbsp;<\/p>\n\n","Nid":"79"}}]}
     				
     	}
     })


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