jQuery(document).ready(function($){
	//move nav element position according to window width
	moveNavigation();
	$(window).on('resize', function(){
		(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
	});

	//mobile version - open/close navigation
	$('.fn-nav-trigger').on('click', function(event){
		event.preventDefault();
		if($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');
		
		$('header').toggleClass('nav-is-visible');
		$('.fn-main-nav').toggleClass('nav-is-visible');
		$('.fn-main-content').toggleClass('nav-is-visible');
	});

	//mobile version - go back to main navigation
	$('.go-back').on('click', function(event){
		event.preventDefault();
		$('.fn-main-nav').removeClass('moves-out');
	});

	//open sub-navigation
	$('.fn-subnav-trigger').on('click', function(event){
		event.preventDefault();
		$('.fn-main-nav').toggleClass('moves-out');
	});

	function moveNavigation(){
		var navigation = $('.fn-main-nav-wrapper');
  		var screenSize = checkWindowWidth();
        if ( screenSize ) {
        	//desktop screen - insert inside header element
			navigation.detach();
			navigation.insertBefore('.fn-nav-trigger');
		} else {
			//mobile screen - insert after .fn-main-content element
			navigation.detach();
			navigation.insertAfter('.fn-main-content');
		}
	}

	function checkWindowWidth() {
		var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
		return ( mq == 'mobile' ) ? false : true;
	}
});
