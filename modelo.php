<?php
require_once "conexion.php";


class tablaDAO{

function obtenerTabla(){
$connection = connection();
$sql ="select * from empleados_bien_pagos2";
$respuesta = $connection->query($sql);
$tabla = $respuesta->fetch_all(MYSQLI_ASSOC);

return $tabla;



}





}