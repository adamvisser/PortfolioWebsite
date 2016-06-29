function setupHome(){
	setupSmoothScroll();
	seutpSideMenu();
}

function seutpSideMenu(){
	$('.ui.sidebar').sidebar({
		dimPage          : false,
		transition       : 'scale down',
		mobileTransition : 'uncover'
	}).sidebar('attach events', '.menu .item');
	$('#menu').sticky({
		context: '.pusher'
	});
}

function setupSmoothScroll(){
	//smooth scrolling stuff
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

}






