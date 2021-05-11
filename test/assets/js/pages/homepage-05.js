(function ($) {

	//Popup video
	$('#play-video').click(function (e) {
		e.preventDefault();

		var video_link = $(this).data('video');
		video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

		$('.work-video').append(video_link).fadeIn(200);
	});

	$('.close-video').click(function (e) {
		e.preventDefault();

		$('.work-video').fadeOut(200, function () {
			$('iframe', this).remove();
		});

	});

	//Screenshots
	$('.screens').owlCarousel({
		center: true,
		items: 2,
		loop: true,
		margin: 10,
		responsive: {
			768: {
				items: 3
			}
		}
	});

	//Our Team
	$('.owl-team').owlCarousel({
		stagePadding: 10,
		margin: 30,
		nav: false,
		dots: true,
		//loop: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 2
			},
			979: {
				items: 3
			},
			1199: {
				items: 4
			}
		}
	})

	//Counter
	$('.total-dl').counterUp({
		delay: 20,
		time: 2000
	});

})(jQuery);