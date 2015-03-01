$(document).ready(function() {
	$('#logo').click(function() {
		window.location.href = "home.html";
	});

	var altura = $(window).height() * 0.75;
	$("#imgPrincipal").height(altura);
	$("#imgPrincipal").width(altura);

	$("#imgPrincipal").mouseover(function() {

		$('#wrapperHome').css('background', 'url(\'css/images/fondo1.jpg\')');
		$('#wrapperHome').css('background-size', 'cover');

		$('.itemNavegacion').css('color', '#FFFFFF');
		$('.itemNavegacion').hover(function() {
			$(this).css('color', '#662D8F');
			$(this).css('text-decoration', '#underline');

		}, function(){
			$(this).css('color', '#FFFFFF');
			$(this).css('text-decoration', '#none');
		});
		

	}).mouseout(function() {

		$('#wrapperHome').css('background', 'url(\'css/images/fondo2.jpg\')');
		$('#wrapperHome').css('background-size', 'cover');

		$('.itemNavegacion').css('color', '#444444');
		$('.itemNavegacion').hover(function() {
			$(this).css('color', '#662D8F');
			$(this).css('text-decoration', '#underline');

		}, function(){
			$(this).css('color', '#444444');
			$(this).css('text-decoration', '#none');
		});
	});
	$("#imgPrincipal").click(function() {
		window.location.href = "terapia.html";
	});
}); 