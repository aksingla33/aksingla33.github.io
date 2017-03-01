$(document).ready(function() {
  $(window).on('resize', function() {
    if($(window).height() > 800) {
        $('#index-cover').addClass('parallax1200');
        $('#index-cover').removeClass('parallax400');
    }
    if($(window).height() < 800) {
	$('#index-cover').addClass('parallax400');
        $('#index-cover').removeClass('parallax1200');
    }
  });
});
