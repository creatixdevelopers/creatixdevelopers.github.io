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
		
$(document).ready(function() { 

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
	let mySparticles = new Sparticles($el[0], { count:500, shape:"triangle", style:"both", minSize:1, maxSize:10, direction:120, speed:0, parallax:20, drift:4, color:"white" });
	$(document).ready(function() {
	  setTimeout(function() {
	    	$("#portfolio").css("position", "absolute");
	  }, 1000);
	});

	let $el2 = $("#modal_background");
	let mySparticles2 = new Sparticles($el2[0], { count:500, shape:"random", style:"stroke", minSize:1, maxSize:10, direction:-50, speed:1.9, parallax:5, "color":["#fdd137","#ffffff"] });
	$(document).ready(function() {
	  setTimeout(function() {
	    	$("#modal_content").css("position", "absolute");
	  }, 1000);
	});
});