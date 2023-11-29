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

import {
  preguntasQuiz,
  quizElment,
} from "./Respuestas_Kahoot.js";

const ValidarTiempo = () => {
  //Inicio

  const intervaloSegundo = 1000;

  /* 
  const timerElement = document.querySelector(".timer");
  const numeradorRespuestas = document.querySelector(".numAnswer");
  const textRespuesta = document.querySelector(".Answer");

  const timerElement_VF = document.querySelector(".timer_VF");
  const numeradorRespuestas_VF = document.querySelector(".numAnswer_VF");
  const textRespuesta_VF = document.querySelector(".Answer_VF");


    mainContainer.style.display = "block";
  mainContainer_VF.style.display = "none";
  
  */
  
  let clicks = 0;
  let timerSet;

  var duracionPregunta=10;
var count = duracionPregunta;

  const activarTiempo = () => {
    // element_botones_1.innerHTML="Reiniciar";
    clearInterval(timerSet);
    timerSet = setInterval(contarSegundos, intervaloSegundo);
};

/*   var contarSegundos = () => {
    count++;
    timerElement.innerHTML = count + "s";

    if (
      mainContainer_VF.style.display !== "none" ||
      mainContainer_VF.style.display === "block" ||
      mainContainer_VF.style.display === "flex"
    ) {
      clearInterval(timerSet);
      timerElement_VF.innerHTML = count + "s";
      activarTiempo();
    }
  }; */
  const contarSegundos = () => {
    count--;
    timerElement.innerHTML = count + "s";
    timerElement_VF.innerHTML = count + "s";

    if (count <= 0) {
        activarTiempo();
        buttonSiguiente.disabled = false;
        buttonSiguiente_VF.disabled = false;
    } else {
        buttonSiguiente.disabled = true;
        buttonSiguiente_VF.disabled = true;
    }

    if (count == duracionPregunta) {
        buttonSiguiente.style.display = "none";
        buttonSiguiente_VF.style.display = "none";
    } else {
        buttonSiguiente.style.display = "block";
        buttonSiguiente_VF.style.display = "block";
    }
    if(count<0){
        timerElement.innerHTML=0+"s";
        timerElement_VF.innerHTML=0+"s";
    }else{
        timerElement.innerHTML = count + "s";
        timerElement_VF.innerHTML = count + "s";

    }
};

const contarCLICKS = () => {
    clicks++;
/*     textRespuesta.innerHTML = clicks + " clicks";
    textRespuesta_VF.innerHTML = clicks + " clicks"; */
/*     textRespuesta.innerHTML = clicks + "";
    textRespuesta_VF.innerHTML = clicks + ""; */
};

const reiniciarContador = () => {
    clearInterval(timerSet);
    count = duracionPregunta;
    timerElement.innerHTML = count + "s";
    timerElement_VF.innerHTML = count + "s";

    if (count == 10) {
        buttonSiguiente.style.display = "none";
        buttonSiguiente_VF.style.display = "none";
    } else {
        buttonSiguiente.style.display = "block";
        buttonSiguiente_VF.style.display = "block";
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
    buttonSiguiente.innerHTML="Iniciar";
    buttonSiguiente_VF.innerHTML="Iniciar";
};

// element_botones_1.addEventListener("click", reiniciarContador);
buttonSiguiente.addEventListener("click", contarCLICKS,);
buttonSiguiente.addEventListener("click", reiniciarContador);
buttonSiguiente_VF.addEventListener("click", contarCLICKS,);
buttonSiguiente_VF.addEventListener("click", reiniciarContador);
// element_botones_2.addEventListener("click", detenerContador);

activarTiempo();

  // FIN
};

export { ValidarTiempo };
