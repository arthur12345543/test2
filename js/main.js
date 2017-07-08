$(function(){
	$(document).ready(function(){
		$('.slider').slick({
			dots: false,
			infinite: true,
			fade: true,
			arrows: false,
			autoplay: true,
			speed: 500,
  			autoplaySpeed: 3500,
			pauseOnFocus: false,
			pauseOnHover: false,
			cssEase: 'linear',
			slickPlay: true
		});
		$('.carousel').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: false,
			arrows: false,
			cssEase: 'linear'
		});
		$('#contact_form').validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				message: "required"
			}
		});
		$('#pressme').validate({
			rules: {
				zip: "required"
			}
		});
	});
});