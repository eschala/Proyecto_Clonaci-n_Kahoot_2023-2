// Aquí suponemos que tienes un array de objetos con los puntajes
const puntajes = [
    { nombre: 'Jugador 1', puntos: 1200 },
    { nombre: 'Jugador 2', puntos: 900 },
    { nombre: 'Jugador 3', puntos: 1500 },
    // Puedes agregar más jugadores y puntajes según tus necesidades
];

  // Función para llenar la tabla con los puntajes
  function llenarTablaPuntajes() {
    const tabla = document.getElementById('score-table');

    // Agregar encabezados
    const encabezados = ['Nombre', 'Puntos'];
    const encabezadosRow = tabla.createTHead().insertRow();
    encabezados.forEach((encabezado) => {
    const th = document.createElement('th');
    th.textContent = encabezado;
    encabezadosRow.appendChild(th);
    });

    // Agregar filas de datos
    const cuerpoTabla = tabla.createTBody();
    puntajes.forEach((jugador) => {
    const fila = cuerpoTabla.insertRow();
    const celdaNombre = fila.insertCell(0);
    const celdaPuntos = fila.insertCell(1);

    celdaNombre.textContent = jugador.nombre;
    celdaPuntos.textContent = jugador.puntos;
    });
}

  // Llamar a la función al cargar la página
window.onload = llenarTablaPuntajes;
