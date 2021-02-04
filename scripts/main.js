// ****************************************** 
// 	Author: Creatix Developers				*
// 	Email: creatixdevelopers@gmail.com  	*
// 	Last Updated: 02-05-2021 				*
// ******************************************

// Magnet Scripts
let mm = new MagnetMouse({
  magnet: {
    element: '.magnet',
    distance: 2,
  },
  inCallback: function (data) {
    data['elem']['node'].style.color='#fdd137';
  },
  outCallback: function (data) {
    data['elem']['node'].style.color='white';
  },
});

mm.init();

$(document).on('mousemove', function(e){
    $('.follow').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

function isTouchDevice() {
	return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
		
$(document).ready(function() {

	// destroy tilt is 
	if (isTouchDevice()) {
		$("[data-tilt]").each(function() {this.vanillaTilt.destroy()});
	}

	// Particles.js initialization
	var number_of_particles = screen.width > 700 ? 200: 80;
	var speed = screen.width > 700 ? 2: 1;
	particlesJS('particles-js', {
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
			}
		},
		retina_detect: true,
	});

	// Sparticles.js initialization
	let $el = $("#portfolio_background");
	let mySparticles = new Sparticles($el[0], { 
		count:500, 
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

	// modal initialization
	$(".categoryModalButton").animatedModal({
        animatedIn:'lightSpeedIn',
        animatedOut:'bounceOutDown',
        color:'#000',
    });

	// Sparticles.js in modal
    let $el2 = $("#modal_background");
	let mySparticles2 = new Sparticles($el2[0], { 
		count:500, 
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
	    	$("#modal_content").css("position", "absolute");
	  }, 1000);
	});
    
    //close modal on ESC
    jQuery(document).keyup(function(ev){
		if(ev.keyCode == 27) {
		    $('#btn-close-modal').click();
		}
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