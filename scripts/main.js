// // ****************************************** 
// // 	Author: Creatix Developers				*
// // 	Email: creatixdevelopers@gmail.com  	*
// // 	Last Updated: 02-09-2021 				*
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

// Magnet Scripts
// let mm = new MagnetMouse({
//   magnet: {
//     element: '.magnet',
//     distance: 2,
//   },
  // inCallback: function (data) {
  //   data['elem']['node'].style.color='#fdd137';
  // },
  // outCallback: function (data) {
  //   data['elem']['node'].style.color='white';
  // },
// });
// mm.init();

function loadSite(){
	$("#preloader").fadeOut(1000, function() { $(this).remove(); });
	$("#site").fadeIn(1000).css("display", "block");

	function isTouchDevice() {
		return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
	}

	console.log(isTouchDevice());
			
	$(document).ready(function() {
		// destroy tilt is 
		if (isTouchDevice()) {
			$("[data-tilt]").each(function() {this.vanillaTilt.destroy()});
		}

		shuffleLetters(document.getElementById("first"), {fps:10});
		shuffleLetters(document.getElementById("second"), {fps:10});
		shuffleLetters(document.getElementById("third"), {fps:10});

		// Particles.js initialization
		var number_of_particles = screen.width > 700 ? 150: 80;
		var speed = screen.width > 700 ? 1: 1;
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
		let mySparticles = new Sparticles($el[0], { 
			count:250,
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

		// Sparticles.js in modal
	    let $el2 = $("#modal_background");
	    mySparticles2 = null;

		function setModalSparticles() {
			if (mySparticles2) {
				mySparticles2.setCanvasSize($('#modal_content').width(), $('#modal_content').height());
				mySparticles2.start();
				mySparticles2.resetSparticles();
				return;
			}
			mySparticles2 = new Sparticles($el2[0], { 
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

			
			setTimeout(function() {
				$("#modal_content").css("position", "absolute");
			}, 500);
		}

		$(".portfolioModalButton").on('click', function() {
			mySparticles.stop();
			var content_name = $(this).attr('name');

			if(content_name === 'websites') {
				$('#websitesContent').css('display', 'block');
			} else if(content_name === 'eCommerce') {
				$('#eCommerceContent').css('display', 'block');
			} else if(content_name === 'virtualEvents') {
				$('#virtualEventsContent').css('display', 'block');
			} else if(content_name === 'solutions') {
				$('#solutionsContent').css('display', 'block');
			}

			setModalSparticles();
		})

		$("#btn-close-modal").on('click', function() {
			mySparticles2.stop();
			$(".category_content").each(function() {
				$(this).css('display', 'none');
			});
			mySparticles.start();
		})

		//websiteModalButton initialization
		$(".portfolioModalButton").animatedModal({
	        animatedIn:'lightSpeedIn',
	        animatedOut:'bounceOutDown',
	        color:'#000',
		});
		
	    
	    //close modal on ESC
	    jQuery(document).keyup(function(ev){
			if(ev.keyCode == 27) {
			    $('#btn-close-modal').click();
			}
			mySparticles.start();
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