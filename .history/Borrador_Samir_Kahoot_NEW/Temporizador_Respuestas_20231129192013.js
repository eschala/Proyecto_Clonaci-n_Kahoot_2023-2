import {
  bodyElement,
  mainContainer,
  container,
  container2,
  container3,
  subContainer,
  subContainer2_1,
  subContainer2_2,
  container_3__sub,
  subContainer2_1_1,
  subContainer2_1_2,
  containerButtonSiguiente,
  buttonSiguiente,
  tituloSiguiente,
  timerElement,
  numeradorRespuestas,
  textRespuesta,
  buttonRespuesta1,
  buttonRespuesta2,
  buttonRespuesta3,
  buttonRespuesta4,
  bodyElement_VF,
  mainContainer_VF,
  container_VF,
  container2_VF,
  container3_VF,
  subContainer_VF,
  subContainer2_1_VF,
  subContainer2_2_VF,
  container_3__sub_VF,
  subContainer2_1_1_VF,
  subContainer2_1_2_VF,
  containerButtonSiguiente_VF,
  buttonSiguiente_VF,
  tituloSiguiente_VF,
  timerElement_VF,
  numeradorRespuestas_VF,
  textRespuesta_VF,
  buttonRespuesta1_VF,
  buttonRespuesta2_VF,
} from "./Variables_Kahoot copy.js";

import { preguntasQuiz, quizElment } from "./Respuestas_Kahoot.js";
const titulo_Siguiente_H = document.querySelector(".titulo_Siguiente");
const titulo_Siguiente_H2 = document.querySelector(".titulo_Siguiente_2");

const ValidarTiempo = () => {
  //Inicio

  titulo_Siguiente_H.innerHTML="Iniciar";
  titulo_Siguiente_H2.innerHTML="Iniciar";

  const intervaloSegundo = 1000;

  /* 
  const timerElement = document.querySelector(".timer");  const timerElement_VF = document.querySelector(".timer_VF");
  const numeradorRespuestas = document.querySelector(".numAnswer");  const numeradorRespuestas_VF = document.querySelector(".numAnswer_VF");
  const textRespuesta = document.querySelector(".Answer");  const textRespuesta_VF = document.querySelector(".Answer_VF");
  
  */
  let clicks = 0;
  let timerSet;

  var duracionPregunta = 3;
  var count = duracionPregunta;

  const mostrarBotonSiguiente = () => {
    buttonSiguiente.style.display = "block";
    buttonSiguiente_VF.style.display = "block";
  };
  const ocultarBotonSiguiente = () => {
    buttonSiguiente.style.display = "none";
    buttonSiguiente_VF.style.display = "none";
  };
  const desactivarBotonSiguiente = () => {
    buttonSiguiente.disabled = true;
    buttonSiguiente_VF.disabled = true;
  };
  const activarBotonSiguiente = () => {
    buttonSiguiente.disabled = false;
    buttonSiguiente_VF.disabled = false;
  };
  const resetTimerPosicion = () => {
    timerElement.innerHTML = 0 + "s";
    timerElement_VF.innerHTML = 0 + "s";
  };
  const mostrarTimerPosicion = () => {
    timerElement.innerHTML = count + "s";
    timerElement_VF.innerHTML = count + "s";
  };


  const redirigir_QuizKahoot = () => {

    location.href='answers_Puntaje.html';
  };


  const activarTiempo = () => {
    // element_botones_1.innerHTML="Reiniciar";
    clearInterval(timerSet);
    timerSet = setInterval(contarSegundos, intervaloSegundo);
  };

  const contarSegundos = () => {
    ocultarBotonSiguiente();
    count--;
    mostrarTimerPosicion();

    if (count <= 0) {
      buttonRespuesta1.style.opacity = "50%";
      buttonRespuesta1.style.opacity = "50%";
      buttonRespuesta1.style.opacity = "50%";
      ocultarBotonSiguiente();
      activarTiempo();
      activarBotonSiguiente();

  
    } else {
      desactivarBotonSiguiente();
    }

    if (count == duracionPregunta) {
      ocultarBotonSiguiente();
    } else {
      mostrarBotonSiguiente();
    }
    if (count < 0) {
      resetTimerPosicion();
    } else {
      mostrarTimerPosicion();
    }
  };

const sectionStartContainer=document.querySelector(".container_2__sub_3");
sectionStartContainer.style.display="block";



const contarCLICKS = () => {
  titulo_Siguiente_H.innerHTML="Siguiente";
  titulo_Siguiente_H2.innerHTML="Siguiente";
  sectionStartContainer.style.display="none";




    if (clicks == 0) {
      desactivarBotonSiguiente();
    }
    clicks++;
      if(clicks>4){

        redirigir_QuizKahoot();
      }



  };

  const reiniciarContador = () => {
    clearInterval(timerSet);
    count = duracionPregunta;
    mostrarTimerPosicion();

    if (count == duracionPregunta) {
      ocultarBotonSiguiente();
    } else {
      mostrarBotonSiguiente();
    }

    activarTiempo();
  };

  const detenerContador = () => {
    clearInterval(timerSet);
    textRespuesta.innerHTML = "Tiempo detenido";
    textRespuesta_VF.innerHTML = "Tiempo detenido";
    buttonSiguiente.style.display = "block";
    buttonSiguiente_VF.style.display = "block";
    buttonSiguiente.disabled = false;
    buttonSiguiente_VF.disabled = false;
    buttonSiguiente.innerHTML = "Iniciar";
    buttonSiguiente_VF.innerHTML = "Iniciar";
  };

 
  buttonSiguiente.addEventListener("click", contarCLICKS);
  buttonSiguiente.addEventListener("click", reiniciarContador);
  buttonSiguiente_VF.addEventListener("click", contarCLICKS);
  buttonSiguiente_VF.addEventListener("click", reiniciarContador);


  activarTiempo();

  // FIN
};

export { ValidarTiempo };
