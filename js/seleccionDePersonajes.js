function toystory(){
	instrucciones = [];
	$("body").css("background", "url(images/toystory/fondo_toystory.jpg)");
	$('body').css('background-size', 'cover');
  	$('body').css('background-repeat', 'no-repeat');
	$(".objetivo").attr("src", "images/toystory/toy_story.jpg");
	$("#1").attr("src", "images/toystory/10.jpg");
	$("#2").attr("src", "images/toystory/20.jpg");
	$("#3").attr("src", "images/toystory/30.jpg");
	$("#4").attr("src", "images/toystory/40.jpg");
	$("#5").attr("src", "images/toystory/50.jpg");
	$("#6").attr("src", "images/toystory/60.jpg");
	$("#7").attr("src", "images/toystory/70.jpg");
	$("#8").attr("src", "images/toystory/80.jpg");
	$("#9").attr("src", "images/toystory/90.jpg");
	$("body").change(iniciar());
}

$("#toys_story").click(function(){
	toystory();
});

function maradona(){
	instrucciones = [];
	$("body").css("background", "url(images/diegote/fondo_maradona.jpg)");
	$('body').css('background-size', 'cover');
  	$('body').css('background-repeat', 'no-repeat');
	$(".objetivo").attr("src", "images/diegote/maradona.jpg");
	$("#1").attr("src", "images/diegote/10.jpg");
	$("#2").attr("src", "images/diegote/20.jpg");
	$("#3").attr("src", "images/diegote/30.jpg");
	$("#4").attr("src", "images/diegote/40.jpg");
	$("#5").attr("src", "images/diegote/50.jpg");
	$("#6").attr("src", "images/diegote/60.jpg");
	$("#7").attr("src", "images/diegote/70.jpg");
	$("#8").attr("src", "images/diegote/80.jpg");
	$("#9").attr("src", "images/diegote/90.jpg");
	$("body").change(iniciar());
}

$("#diego").click(function(){
	maradona();
});