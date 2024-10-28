<?php

require_once "modelo.php";
$funcion = $_GET["funcion"];

switch ($funcion) { // Le asignamos una funcion a cada posible variable de "funcion"
    case "obtener":
        obtenerTabla();
        break;   
}



function obtenerTabla() { //Funcion para obtener un producto
    $respuesta = (new tablaDAO())->obtenerTabla();
    echo json_encode($respuesta);
    
    
}
