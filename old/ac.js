
$(document).ready(function(){
	// variable
	var $active = $("#profile");	
	var	$activePanel;
 

	$("#about").click(function() {
		$active.css({"display": "none"});
		$active = $("#profile");
		$("#profile").fadeIn(2000);
	});

	$("#proj").click(function() {
		$active.css({"display": "none"});
		$active = $("#project");
		$("#project").fadeIn(2000);
	});

	$("#likes").click(function() {
		$active.css({"display": "none"});
		$active = $("#interest");
		$("#interest").fadeIn(2000);
	});

	$("#contactme").click(function() {
		$active.css({"display": "none"});
		$active = $("#contact");
		$("#contact").fadeIn(2000);
	});



	$("#about").mouseenter(function(){
		$("#about").fadeTo("slow",1.0);
	}).mouseleave(function(){
		$("#about").fadeTo("slow",0.4);
	});

	$("#proj").mouseenter(function(){
		$("#proj").fadeTo("slow",1.0);
	}).mouseleave(function(){
		$("#proj").fadeTo("slow",0.4);
	});	

	$("#likes").mouseenter(function(){
		$("#likes").fadeTo("slow",1.0);
	}).mouseleave(function(){
		$("#likes").fadeTo("slow",0.4);
	});

	$("#contactme").mouseenter(function(){
		$("#contactme").fadeTo("slow",1.0);
	}).mouseleave(function(){
		$("#contactme").fadeTo("slow",0.4);
	});
	
	$("#flip-games").click(function(){
		$("#games-panel").slideToggle();
		$("#affiliations-panel").hide();
		$("#sports-panel").hide();
	});  

	$("#flip-sports").click(function(){
		$("#sports-panel").slideToggle();
		$("#affiliations-panel").hide();
		$("#games-panel").hide();
	});

	$("#flip-affiliations").click(function(){
		$("#affiliations-panel").slideToggle();
		$("#sports-panel").hide();
		$("#games-panel").hide();
	});
});