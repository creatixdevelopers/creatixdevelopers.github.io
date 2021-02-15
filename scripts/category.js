// // ****************************************** 
// // 	Author: Creatix Developers				*
// // 	Email: creatixdevelopers@gmail.com  	*
// // 	Last Updated: 13-02-2021 				*
// // ******************************************

$(document).ready(function() { 
	shuffleLetters(document.getElementsByClassName("section_title")[0]);

	// Sparticles.js initialization
	let $el = $("#category_background");
	mySparticles = new Sparticles($el[0], { 
		count:250, 
		shape:"random", 
		style:"stroke", 
		minSize:1, 
		maxSize:10, 
		direction:-50, 
		speed:1.9, 
		parallax:5, 
		"color":["#fdd137","#ffffff"] 
	});
	$(document).ready(function() {
	  setTimeout(function() {
	    	$("#category_content").css("position", "absolute");
	  }, 500);
	});

	$("#btn-close-category").on('click', function() {
		window.history.back();
	});
})