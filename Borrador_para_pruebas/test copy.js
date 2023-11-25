
const titulo_H1 = document.querySelector(".tittle");
const input_Btn = document.querySelector(".button_Enviar");

const alertAdvice = document.querySelector(".advice");

const button_1 = document.querySelector(".btn_1");
const button_2 = document.querySelector(".btn_2");
const button_3 = document.querySelector(".btn_3");
const button_4 = document.querySelector(".btn_4");

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

const pregunta_Quiz = "2+2";
const opcion_Quiz = "6";
const opcion_Quiz2 = "7";
const opcion_Quiz3 = "2";
const opcion_Correcta = "4";

const answer1 = new Quiz(
  pregunta_Quiz,
  opcion_Correcta,
  opcion_Quiz,
  opcion_Quiz2,
  opcion_Quiz3
);

const mostrarInfoQuiz = () => {
  titulo_H1.innerHTML = answer1.getPregunta();
  button_1.innerHTML = answer1.getOpcionC();
  button_2.innerHTML = answer1.getOpcionI();
  button_3.innerHTML = answer1.getOpcionI2();
  button_4.innerHTML = answer1.getOpcionI3();
};

const validarRespuesta = (opcionElegida) => {
  const respuestaSeleccionada = opcionElegida.innerHTML;
  const respuestaCorrecta = answer1.getOpcionC();

  if (respuestaSeleccionada === respuestaCorrecta) {
    alert("¡Respuesta correcta!");
  } else {
    alert("Respuesta incorrecta. Inténtalo de nuevo.");
  }
};

input_Btn.addEventListener("click", mostrarInfoQuiz);

button_1.addEventListener("click", () => validarRespuesta(button_1));
button_2.addEventListener("click", () => validarRespuesta(button_2));
button_3.addEventListener("click", () => validarRespuesta(button_3));
button_4.addEventListener("click", () => validarRespuesta(button_4));
