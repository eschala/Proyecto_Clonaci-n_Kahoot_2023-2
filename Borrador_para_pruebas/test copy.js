const contenedor1_Show=document.querySelector(".container");
const contenedor2_Show=document.querySelector(".container_2");

/* contenedor2_Show.style.display="none"; */

{/* 4 Respuestas */
const titulo_H1 = document.querySelector(".tittle");
const input_Btn = document.querySelector(".button_Enviar");

const input_Btn_NEXT = document.querySelector(".siguiente");





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
    alertAdvice.innerHTML="¡Respuesta correcta! "+respuestaCorrecta;

  } else {
    alertAdvice.innerHTML="Respuesta incorrecta. Inténtalo de nuevo.";

  }
};

input_Btn.addEventListener("click", mostrarInfoQuiz);



button_1.addEventListener("click", () => validarRespuesta(button_1));
button_2.addEventListener("click", () => validarRespuesta(button_2));
button_3.addEventListener("click", () => validarRespuesta(button_3));
button_4.addEventListener("click", () => validarRespuesta(button_4));



const nextQuestion=()=>{

  alert("Siguiente");
  contenedor1_Show.style.display = "none";


}

input_Btn_NEXT.addEventListener("click", nextQuestion);

 /* Verdadero o Falso */
  const titulo_H1_2 = document.querySelector(".tittle_2");
  const input_Btn_2 = document.querySelector(".button_Enviar_2");
  

  
  const button_T = document.querySelector(".btn_True");
  const button_F = document.querySelector(".btn_False");

  
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
  
  const pregunta_QuizVF = "2+2 es 4?";
  const opcion_V = "Verdadero";
  const opcion_F = "Falso";

  const answer3 = new Quiz_VF(
    pregunta_QuizVF,
    opcion_V,
    opcion_F
  );
  
  const mostrarInfoQuiz_VF = () => {
    titulo_H1_2.innerHTML = answer3.getPregunta();
    button_T.innerHTML = answer3.getOpcionV();
    button_F.innerHTML = answer3.getOpcionF();

  };
  
  const validarRespuesta_VF = (opcionElegida) => {
    const respuestaSeleccionada_VF = opcionElegida.innerHTML;
    const respuestaCorrecta_VF = answer3.getOpcionV();
  
    if (respuestaSeleccionada_VF === respuestaCorrecta_VF) {
      alertAdvice.innerHTML="¡Respuesta correcta! "+respuestaCorrecta_VF;
  
    } else {
      alertAdvice.innerHTML="Respuesta incorrecta. Inténtalo de nuevo.";
  
    }
  };
  
  input_Btn_2.addEventListener("click", mostrarInfoQuiz_VF);
  
  button_T.addEventListener("click", () => validarRespuesta_VF(button_T));
  button_F.addEventListener("click", () => validarRespuesta_VF(button_F));

  }