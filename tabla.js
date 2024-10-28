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

// Almacena la tabla globalmente
let tablaGlobal = [];

// Cargar los datos al cargar la ventana
window.onload = async () => {
    tablaGlobal = await new tablaDAO().obtenerTabla();
};

// Función para mostrar la tabla
function mostrarTabla(tabla) {
    console.log("Catálogo recibido:", tabla);
    if (tabla.length === 0) {
        console.log("No se han recibido Empleados.");
        return; // Salir si no hay datos
    }

    let tbodyElement = document.querySelector("#contenedor_mostrar");
    tbodyElement.innerHTML = ""; // Limpiar el contenedor antes de mostrar

    tabla.forEach((empleado) => {
        console.log(empleado); 
        tbodyElement.innerHTML += `
            <div class="empleados">
                <h3>ID:</h3>
                <p>${empleado.id}</p>
                <h3>Nombre:</h3>
                <p>${empleado.name}</p>
                <h3>Edad:</h3>
                <p>${empleado.age}</p>
                <h3>Salario:</h3>
                <p>${empleado.salary}</p>
            </div>
        `;
    });
}



// Añadir el evento click al botón
document.getElementById("mostrarTablaBtn").addEventListener("click", () => {
    mostrarTabla(tablaGlobal);
});
