<?php

$mailTo = $_POST['emailTo'];
$mailFrom = $_POST['emailFrom'];
$asunto= $_POST['asunto'];
$cuerpo = $_POST['cuerpo'];
$headers = "From: " . $mailFrom . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

			
mail($mailTo, $asunto, $cuerpo, $headers);
?>
