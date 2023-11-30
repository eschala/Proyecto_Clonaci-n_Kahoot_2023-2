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

const div_Answer_1_Elment = document.querySelector(".div_Answer_1");
const div_Answer_2_Elment = document.querySelector(".div_Answer_2");
const div_Answer_3_Elment = document.querySelector(".div_Answer_3");
const div_Answer_4_Elment = document.querySelector(".div_Answer_3");

const div_Answer_1_V_E = document.querySelector(".div_Answer_1_V");
const div_Answer_2_F_E = document.querySelector(".div_Answer_2_F");


const ValidarTiempo = () => {
  //Inicio

  titulo_Siguiente_H.innerHTML = "Iniciar";
  titulo_Siguiente_H2.innerHTML = "Iniciar";

  const intervaloSegundo = 1000;


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

    location.href = '/Kahoot_Files_Beta_ADL/Kahoot_Puntaje.html';
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
      buttonRespuesta1_VF.style.opacity = "100%";
      buttonRespuesta2_VF.style.opacity = "50%";
      buttonRespuesta1.style.opacity = "100%";
      buttonRespuesta2.style.opacity = "50%";
      buttonRespuesta3.style.opacity = "50%";
      buttonRespuesta4.style.opacity = "50%";
      resetTimerPosicion();
    } else {
      mostrarTimerPosicion();
    }
  };

  const sectionStartContainer = document.querySelector(".container_2__sub_3");
  sectionStartContainer.style.display = "block";

  var randomN = 0;
  var randomN2 = 0;
  var randomN3 = 0;
  var randomN4 = 0;





  const contarCLICKS = () => {
    titulo_Siguiente_H.innerHTML = "Siguiente";
    titulo_Siguiente_H2.innerHTML = "Siguiente";
    sectionStartContainer.style.display = "none";

    randomN = (Math.random()) * 10;
    randomN = Math.round(randomN);

    randomN2 = (Math.random()) * 7;
    randomN2 = Math.round(randomN2);

    randomN4 = (Math.random()) * 5;
    randomN3 = Math.round(randomN3);

    randomN4 = (Math.random()) * 10;
    randomN4 = Math.round(randomN4);

    div_Answer_1_Elment.style.order = randomN;
    div_Answer_2_Elment.style.order = randomN2;
    div_Answer_3_Elment.style.order = randomN3;
    div_Answer_4_Elment.style.order = randomN4;

    div_Answer_1_V_E.style.order = randomN2;
    div_Answer_2_F_E.style.order = randomN4;

    if (clicks == 0) {
      desactivarBotonSiguiente();
    }
    clicks++;
    if (clicks > 4) {

      redirigir_QuizKahoot();
    }


    buttonRespuesta1.style.opacity = "100%";
    buttonRespuesta2.style.opacity = "100%";
    buttonRespuesta3.style.opacity = "100%";
    buttonRespuesta4.style.opacity = "100%";
    buttonRespuesta1_VF.style.opacity = "100%";
    buttonRespuesta2_VF.style.opacity = "100%";

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
