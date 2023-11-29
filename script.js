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

// Contador
let tiempoRestante = 10; // en segundos
const contadorElemento = document.getElementById('countdown');

function actualizarContador() {
  contadorElemento.textContent = tiempoRestante;
  if (tiempoRestante === 0) {
    // Aquí puedes agregar la lógica para manejar la respuesta después del tiempo límite
    console.log('Tiempo agotado. ¡No se ha recibido respuesta!');
    // También puedes llamar a una función que maneje la siguiente pregunta, etc.
  } else {
    tiempoRestante--;
    setTimeout(actualizarContador, 1000); // Actualizar cada segundo
  }
}

// Llamamos a la función para iniciar el contador cuando la página se carga
window.onload = function () {
  actualizarContador();
};

// Después de la función actualizarContador, agrega lo siguiente:

function mostrarTablaPuntajes() {
  // Ocultar el contador
  document.querySelector('.countdown-container').style.display = 'none';

  // Mostrar la tabla de puntajes
  document.getElementById('score-container').style.display = 'block';

  // Llenar la tabla con los puntajes
  llenarTablaPuntajes();
}

// Llamamos a la función para mostrar la tabla cuando el contador llegue a cero
setTimeout(mostrarTablaPuntajes, tiempoRestante * 1000);
