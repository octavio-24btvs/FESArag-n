$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() + $(this).height() == $(document).height()){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
});