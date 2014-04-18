$(document).ready(function(){
	$('#logo').click(function() {
				window.location.href = "home.html";
			});
	$( "#imgPrincipal" ).mouseover(
			function () {
				
				$('#wrapperHome').css('background', 'url(\'css/images/fondo1.jpg\')');
				$('#wrapperHome').css('background-size', 'cover');
				
				$('#inicio').css('background', 'url(\'css/images/b_inicio_onhover.png\')');
				$('#terapia').css('background', 'url(\'css/images/b_terapia_onhover.png\')');
				$('#orientacion').css('background', 'url(\'css/images/b_OV_onhover.png\')');
				$('#contacto').css('background', 'url(\'css/images/b_contacto_onhover.png\')');

			}).mouseout(function () {
				
				$('#wrapperHome').css('background', 'url(\'css/images/fondo2.jpg\')');
				$('#wrapperHome').css('background-size', 'cover');
				
				$('#inicio').css('background', 'url(\'css/images/b_inicio.png\')');
				$('#terapia').css('background', 'url(\'css/images/b_terapia.png\')');
				$('#orientacion').css('background', 'url(\'css/images/b_OV.png\')');
				$('#contacto').css('background', 'url(\'css/images/b_contacto.png\')');
			});
});