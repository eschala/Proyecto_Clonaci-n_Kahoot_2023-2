// Obtener el elemento <h1> en el que se mostrará el tiempo
var titulo = document.querySelector("h1");
var titulo2 = document.querySelector(".tittle_AAA2");

const rt_A = document.querySelector(".respuesta_A");
const rt_B = document.querySelector(".respuesta_B");
const btn_Siguiente = document.querySelector(".next");

rt_A.style.width = "80px";
rt_B.style.width = "80px";
btn_Siguiente.style.width = "80px";

// Definir la duración del temporizador en segundos (20 segundos)
var duracion = 8;

// Variable para almacenar el tiempo transcurrido
var tiempoTranscurrido = 0;

// Variable para almacenar el número de reinicios
var reinicios = 0;

// Función para actualizar el tiempo transcurrido y mostrarlo en el título

titulo.innerHTML = "dos mas dos es:...";
function actualizarTiempo() {
  tiempoTranscurrido++;
  var tiempoRestante = duracion - tiempoTranscurrido;
  titulo2.textContent = tiempoRestante;

  if (tiempoTranscurrido==0) {
    validarOpciones();


  }
  else if(tiempoTranscurrido<=0){
    
    clearInterval(temporizador);
  }
}
const validarOpciones = () => {
    click_A();
    click_B();

};
  const click_A = () => {

      rt_A.style.backgroundColor = "green";

  };

  const click_B = () => {

      rt_B.style.backgroundColor = "red";

  };

rt_A.addEventListener("click", click_A);
rt_B.addEventListener("click", click_B);

// Iniciar el temporizador para actualizar el tiempo cada segundo
var temporizador = setInterval(actualizarTiempo, 1000);
