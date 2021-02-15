// // ****************************************** 
// // 	Author: Creatix Developers				*
// // 	Email: creatixdevelopers@gmail.com  	*
// // 	Last Updated: 15-02-2021 				*
// // ******************************************

$(window).on('load', function(){
	var loading = document.getElementById('loading');
	var img = document.getElementById('cutLogo');

	var imgWidth = img.clientWidth;
	var imgHeight = img.clientHeight;

	$(loading).css("height", ""+0.109 * imgHeight+"px");
	$(loading).css("margin-left", ""+0.095 * imgWidth+"px");
	var maxWidth = 0.273*imgWidth;
	var increment = 0.005*imgWidth;

	var width = 0;
	var loadTimer = window.setInterval(load, 50);
	function load() {
		loading.style.width = ''+width+'px';
		width+=increment;
		if (width>maxWidth){
			window.clearInterval(loadTimer);
			window.clearInterval(danceTimer);
			loadSite();
		}
	}
	var danceSteps = ["┏( ・o･ )┛", "━( ・o･ )━", "┗( ・o･ )┓", "━( ・o･ )━"]
	var currentStep = 0;
	var danceTimer = window.setInterval(dance, 300);
	function dance() {
		document.getElementById("dance").innerHTML = danceSteps[(currentStep+1)%danceSteps.length]
		currentStep++;
	}
});

// When loading from cache...

// $(window).bind("pageshow", function(event) {
//     loadSite();
// });

if (!!window.performance && window.performance.navigation.type === 2) {
   loadSite();
 } else {
   console.log("no cache");
 }

function loadSite(){
	$("#preloader").fadeOut(1000, function() { $(this).remove(); });
	$("#site").fadeIn(1000).css("display", "block");

	function isTouchDevice() {
		return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
	}
			
	$(document).ready(function() {
		console.log(this.vanillaTilt);

		// destroy tilt if touch device 
		if (isTouchDevice()) {
			$("[data-tilt]").each(function() {this.vanillaTilt.destroy()});
		}

		shuffleLetters(document.getElementById("first"), {fps:10});
		shuffleLetters(document.getElementById("second"), {fps:10});
		shuffleLetters(document.getElementById("third"), {fps:10});

		// Particles.js initialization
		var isPhone = screen.width > 700;
		var number_of_particles = isPhone ? 150: 80;
		var speed = screen.width > isPhone ? 1: 1;
		particles = new particlesJS('particles-js', {
			canvas: {
				color_hex_bg: '#15414e',
				opacity: 1
			},
			particles: {
			    color_hex: '#fff',
				opacity: 1,
				size: 2.5,
				size_random: true,
				nb: number_of_particles,
				anim: {
					speed: speed,
				},
				move: {
					enable: true,
				},
			},
			retina_detect: true,
		});


		// Sparticles.js initialization
		let $el = $("#portfolio_background");
		var mySparticles = new Sparticles($el[0], { 
			count:isPhone ? 250 : 100,
			shape:"triangle", 
			style:"both", 
			minSize:1, 
			maxSize:10, 
			direction:120, 
			speed:0, 
			parallax:20, 
			drift:4, 
			color:"white" 
		});
		$(document).ready(function() {
		  setTimeout(function() {
		    	$("#portfolio").css("position", "absolute");
		    	var content = $("#portfolio");
		    	mySparticles.setCanvasSize(content.width(), content.height());
		  }, 1000);
		});


		// Vivus animation options and objects
		var animationOptions = {
			type: 'oneByOne',
			duration: 40,
			animTimimgFunction: Vivus.EASE
		}

		new Vivus('websiteSVG', animationOptions, function(animation) {
			setTimeout(function() {
				animation.play(animation.getStatus() === 'end' ? -1 : 1);
			}, 1000)
		});
		new Vivus('eCommerceSVG', animationOptions, function(animation) {
			setTimeout(function() {
				animation.play(animation.getStatus() === 'end' ? -1 : 1);
			}, 1000)
		});
		new Vivus('virtualEventsSVG', animationOptions, function(animation) {
			setTimeout(function() {
				animation.play(animation.getStatus() === 'end' ? -1 : 1);
			}, 1000)
		});
		new Vivus('solutionsSVG', animationOptions, function(animation) {
			setTimeout(function() {
				animation.play(animation.getStatus() === 'end' ? -1 : 1);
			}, 1000)
		});


		//Clientile Carousel
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    items: 3,
		    dots: false,
		    autoplay: true,
		    autoplayTimeout:2000,
	    	autoplayHoverPause:true,
		    navText:["<div class='navShape'><img class='interactive' src='assets/arrow-left.svg'></div>",
		    		 "<div class='navShape'><img class='interactive' src='assets/arrow-right.svg'></div>"],
		    responsive:{
		        0:{
		        	margin:10,
		            items:1
		        },
		        600:{
		        	margin:10,
		            items:1
		        },
		        1000:{
		        	margin:10,
		            items:3
		        }
		    }
		});
	});
}