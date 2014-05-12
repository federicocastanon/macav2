<?
    $nombre = $_POST['nombre'];
	$resultado = $_POST['resultado'];
 
        // Si entramos es que todo se ha realizado correctamente
 
        $link = mysql_connect("mysql6.000webhost.com","a1070217_fede","fede0909");
        mysql_select_db("a1070217_fede",$link);
 
        // Con esta sentencia SQL insertaremos los datos en la base de datos
        mysql_query("INSERT INTO resultados (`id` ,
`nombre` ,
`result`)
        VALUES (null,'$nombre','$resultado')",$link);
 
        // Ahora comprobaremos que todo ha ido correctamente
        $my_error = mysql_error($link);
 
        if(!empty($my_error)) { 
            echo "Ha habido un error al insertar los valores. $my_error";             
        } else { 
            echo "Los datos han sido introducidos satisfactoriamente";           
        }
 
    
 
?>