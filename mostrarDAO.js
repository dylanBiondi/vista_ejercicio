




class tablaDAO {



    async obtenerTabla() {
        let url = "http://localhost/vista_ejercicio/controlador.php?funcion=obtener";

        let respuesta = await fetch(url);
        let tabla = await respuesta.json();
        console.log(tabla);
        return tabla;

    }


}

export default tablaDAO;



