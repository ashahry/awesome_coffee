$( document ).ready(function() {

	$('.menu').click(function(e) {          //When menu is clicked
		$('.main-nav').slideToggle(300);  //SlideToggle the menu
		e.preventDefault();     
	});

	//slide show
	$(".slideshow > div").hide();     //Hide all picture divs first
	$(".slideshow").last().addClass('last');
	$('.slideshow').each(function(){	//loop through each slide show
		var slideshow = $(this);
		slideshow.find("div:first").show();     
		setInterval(function() {
			var elem = $(slideshow).find('div:first');
			elem.hide()	//hide the first slide
			.next()							//go to the next slide
			.fadeIn(900)       //fade in the slide
			.stop(true,true)	
			.end()							//end any animation
			.appendTo(elem.parent());   //append it to the class slideshow so it is the first slide
		}, 6000);
	});

});


