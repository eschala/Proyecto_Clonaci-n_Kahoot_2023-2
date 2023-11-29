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

const quizElment = () => {
  // cambiar interfaz de pregunta a Quiz de 4 respeustas

  mainContainer.style.display = "block";
  mainContainer_VF.style.display = "none";
};
const quizElmentVF = () => {
  // cambiar interfaz de pregunta a Verdadero y falso

  mainContainer.style.display = "none";
  mainContainer_VF.style.display = "block";
};

const preguntasQuiz = () => {
  //Inicio
  /* alert("probando"); */

  // Para el titulo subContainer
  // respuestas 1 buttonRespuestas
  // respuestas 2 buttonRespuestas
  // respuestas 3 buttonRespuestas
  // respuestas 4 buttonRespuestas

  class Quiz {
    constructor(pregunta, opcionC, opcionI, opcionI2, opcionI3) {
      this.pregunta = pregunta;
      this.opcionC = opcionC;
      this.opcionI = opcionI;
      this.opcionI2 = opcionI2;
      this.opcionI3 = opcionI3;
    }
    infoQ() {
      return `La pregunta es ${this.pregunta}. La correcta es: ${this.opcionC}. Falsa: ${this.opcionI}. Falsa: ${this.opcionI2}. Falsa: ${this.opcionI3}`;
    }
    getPregunta() {
      return this.pregunta;
    }
    getOpcionC() {
      return this.opcionC;
    }
    getOpcionI() {
      return this.opcionI;
    }
    getOpcionI2() {
      return this.opcionI2;
    }
    getOpcionI3() {
      return this.opcionI3;
    }
  }
  class Quiz_VF {
    constructor(preguntaVF, opcionV, opcionF) {
      this.preguntaVF = preguntaVF;
      this.opcionV = opcionV;
      this.opcionF = opcionF;
    }
    infoQ() {
      return `La pregunta es ${this.preguntaVF}. La correcta es: ${this.opcionV}. Falsa: ${this.opcionF}`;
    }
    getPregunta() {
      return this.preguntaVF;
    }
    getOpcionV() {
      return this.opcionV;
    }
    getOpcionF() {
      return this.opcionF;
    }
  }
  let preguntaRandom = "El nombre del profesor es: ...";
  let respuesta_1 = "Maicol Yordan";
  let respuesta_2 = "Michael Jeffrey Jhordan";
  let respuesta_3 = "Dennis Keith Rodman";
  let respuesta_C = "Jhordan Moreno";

  const pregunta_Quiz = ["2+2", preguntaRandom];
  const opcion_Quiz = ["6", respuesta_1];
  const opcion_Quiz2 = ["7", respuesta_2];
  const opcion_Quiz3 = ["2aaaaaaaaaaaaa", respuesta_3];
  const opcion_Correcta = ["4", respuesta_C];

  const pregunta_QuizVF = ["2+2 es 4?", "JavaScript es con P de perro?"];
  const opcion_V = ["Verdadero", "Falso"];
  const opcion_F = ["Falso", "Verdadero"];

  // pregunta 1
  const answer1 = new Quiz(
    pregunta_Quiz[0],
    opcion_Correcta[0],
    opcion_Quiz[0],
    opcion_Quiz2[0],
    opcion_Quiz3[0]
  );
  // Pregunta 2
  const answer2 = new Quiz(
    pregunta_Quiz[1],
    opcion_Correcta[1],
    opcion_Quiz[1],
    opcion_Quiz2[1],
    opcion_Quiz3[1]
  );
  var posicionPregunta;
  const mostrarInfoQuiz = () => {
    subContainer.innerHTML = answer1.getPregunta();
    buttonRespuesta1.innerHTML = answer1.getOpcionC();
    buttonRespuesta2.innerHTML = answer1.getOpcionI();
    buttonRespuesta3.innerHTML = answer1.getOpcionI2();
    buttonRespuesta4.innerHTML = answer1.getOpcionI3();
  };
  const siguienteQuiz = () => {
    subContainer.innerHTML = answer2.getPregunta();
    buttonRespuesta1.innerHTML = answer2.getOpcionC();
    buttonRespuesta2.innerHTML = answer2.getOpcionI();
    buttonRespuesta3.innerHTML = answer2.getOpcionI2();
    buttonRespuesta4.innerHTML = answer2.getOpcionI3();
  };
  mostrarInfoQuiz();
  // Pregunta 3
  const answer3 = new Quiz_VF(pregunta_QuizVF[0], opcion_V[0], opcion_F[0]);
  // Pregunta 4
  const answer4 = new Quiz_VF(pregunta_QuizVF[1], opcion_V[1], opcion_F[1]);
  var posicionPreguntaVF;
  const mostrarInfoQuiz_VF = () => {
    subContainer_VF.innerHTML = answer3.getPregunta();
    buttonRespuesta1_VF.innerHTML = answer3.getOpcionV();
    buttonRespuesta2_VF.innerHTML = answer3.getOpcionF();
  };
  const siguienteQuizVF = () => {
    subContainer_VF.innerHTML = answer4.getPregunta();
    buttonRespuesta1_VF.innerHTML = answer4.getOpcionV();
    buttonRespuesta2_VF.innerHTML = answer4.getOpcionF();
  };
  mostrarInfoQuiz_VF();

  var contarSiguiente = 1;
  var savedCounted = 0;

  // textRespuesta_VF.innerHTML = "" + contarSiguiente;
  // textRespuesta.innerHTML = "" + contarSiguiente;
  const siguienteFunction = () => {
    savedCounted = contarSiguiente;
    numeradorRespuestas.innerHTML = contarSiguiente;

    if (contarSiguiente > 2) {
      numeradorRespuestas_VF.innerHTML = contarSiguiente;
      if (contarSiguiente > 4) {
        // alert("Ya exediste las rondas");
      }

      quizElmentVF();
    }

    if (contarSiguiente <= 1) {
      mostrarInfoQuiz();
      // alert("ronda " + 1);
    }
    if (contarSiguiente == 2) {
      siguienteQuiz();
    }
    if (contarSiguiente == 3) {
      mostrarInfoQuiz_VF();
      // alert("ronda " + 2);
    }
    if (contarSiguiente == 4) {
      siguienteQuizVF();
    }

    contarSiguiente++;
  };

  buttonSiguiente.addEventListener("click", siguienteFunction);

  buttonSiguiente_VF.addEventListener("click", siguienteFunction);
}; //Fin

export { preguntasQuiz, quizElment };
