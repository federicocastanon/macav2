var nombre;
var emailFromVal;
var edadVal;
var sexoVal;
$(document).ready(function(){

	$('#logo').click(function() {
				window.location.href = "home.html";
	});

	$("#empezarTest").click(function(){
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		$(".error").hide();
		
		nombre = $("#nombre").val();
		if(nombre == '') {
			$("#nombre").after('<br/><span class="error">No olvides ingresar tu nombre</span>');
			hasError = true;
		}
		
		emailFromVal = $("#emailFrom").val();
		if(emailFromVal == '') {
			$("#emailFrom").after('<br/><span class="error">No olvides ingresar tu email</span>');
			hasError = true;
		} else if(!emailReg.test(emailFromVal)) {	
			$("#emailFrom").after('<br/><span class="error">Es importante que ingreses una direccion de correo v&aacute;lida para recibir los resultados</span>');
			hasError = true;
		}
		var regex = /[0-9]|\./;
		edadVal = $("#edad").val();
		if(edadVal == '' || !regex.test(edadVal)) {
			$("#edad").after('<br/><span class="error">No olvides poner tu edad expresada como un n&uacute;mero!</span>');
			hasError = true;
		}
		
		sexoVal = $("#sexo").val();
		if(sexoVal == '' || sexoVal == '0') {
			$("#sexo").after('<<br/>span class="error">Seleccione uno por favor.</span>');
			hasError = true;
		}
		
		if(hasError == false) {
			$("#sendEmail").hide();
			$("#cuestionario").show();
		}
		return false;
		
	});
	$("#finalizar").click(function(){					   				   
				
		
	});						   
});