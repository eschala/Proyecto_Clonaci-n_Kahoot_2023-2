import { subContainer, subContainer_VF } from "./Variables_Kahoot copy";

const getElement = (className) => document.querySelector(className);

// Pregunta 1 y 2
const elements = {
  bodyElement: getElement(".body_Answer"),
  mainContainer: getElement(".mainContainer_Answer"),
  container: getElement(".container_1"),
  container2: getElement(".container_2"),
  container3: getElement(".container_3"),
  subContainer: getElement(".container_1__sub"),
  subContainer2_1: getElement(".container_2__sub_1"),
  subContainer2_2: getElement(".container_2__sub_2"),
  container_3__sub: getElement(".container_3__sub"),
  subContainer2_1_1: getElement(".container_2__sub_1__1"),
  subContainer2_1_2: getElement(".container_2__sub_1__2"),
  containerButtonSiguiente: getElement(".div_btn_Siguiente"),
  buttonSiguiente: getElement(".btn_Siguiente"),
  tituloSiguiente: getElement(".titulo_Siguiente"),
  timerElement: getElement(".timer"),
  numeradorRespuestas: getElement(".numAnswer"),
  textRespuesta: getElement(".Answer"),
  buttonRespuesta1: getElement(".Answer_1"),
  buttonRespuesta2: getElement(".Answer_2"),
  buttonRespuesta3: getElement(".Answer_3"),
  buttonRespuesta4: getElement(".Answer_4"),
};

// Falso Verdadero 3 y 4
const elementsVF = {
  bodyElement_VF: getElement(".body_Answer_VF"),
  mainContainer_VF: getElement(".mainContainer_Answer_VF"),
  container_VF: getElement(".container_1_VF"),
  container2_VF: getElement(".container_2_VF"),
  container3_VF: getElement(".container_3_VF"),
  subContainer_VF: getElement(".container_1__sub_VF"),
  subContainer2_1_VF: getElement(".container_2__sub_1_VF"),
  subContainer2_2_VF: getElement(".container_2__sub_2_VF"),
  container_3__sub_VF: getElement(".container_3__sub_VF"),
  subContainer2_1_1_VF: getElement(".container_2__sub_1__1_VF"),
  subContainer2_1_2_VF: getElement(".container_2__sub_1__2_VF"),
  containerButtonSiguiente_VF: getElement(".div_btn_Siguiente_VF"),
  buttonSiguiente_VF: getElement(".btn_Siguiente_VF"),
  tituloSiguiente_VF: getElement(".titulo_Siguiente_VF"),
  timerElement_VF: getElement(".timer_VF"),
  numeradorRespuestas_VF: getElement(".numAnswer_VF"),
  textRespuesta_VF: getElement(".Answer_VF"),
  buttonRespuesta1_VF: getElement(".Answer_V"),
  buttonRespuesta2_VF: getElement(".Answer_F"),
};

export { elements, elementsVF };

