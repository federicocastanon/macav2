function validar() {
	//var emailToVal = 'federico.gonzalezc@gmail.com';
	var emailToVal = 'macarena.martin@outlook.com';
	var nombre = $('#nombre').val();
	var mail = $('#mail').val();
	var comoll = $('#comoll').val();
	var consulta = $('#consulta').val();
	var html = nombre + ' que llegó por ' + comoll + 'pregunta: ' + consulta;
	$.post("sendemail.php", {
		emailTo : emailToVal,
		emailFrom : mail,
		asunto : 'consulta de ' + nombre,
		cuerpo : html
	}, function(data) {

		if(data == 'enviado') {
			$("#titContacto").before('<div id="muchasGracias"></div><p>Su consulta fue enviada, te responderé a la brevedad</p>');

		} else {
			$("#titContacto").before('<h1 class="error">Atención!</h1><p class="error">Ocurrió un error y su consulta no fue enviada! Por favor intentá nuevamente o escribime un correo a macarena.martin@outlook.com</p>');
		}

	});
}
$(document).ready(function(){
	$('#logo').click(function() {
				window.location.href = "home.html";
			});
});