function ingresarJuego() {
  const pinInput = document.getElementById('pinInput').value;

  if (pinInput) {
    alert('Ingresando al juego con PIN: ' + pinInput);
    // Puedes redirigir a la siguiente página, realizar verificaciones, etc.
  } else {
    alert('Por favor, ingresa un PIN válido.');
  }
}

class quiz_4_Answers {
  /* pregunta de 4 opciones */
  constructor(
    pregunta,
    opcion_Correcta,
    opcion_Incorrecta,
    opcion_Incorrecta_2,
    opcion_Incorrecta_3
  ) {
    this.pregunta = pregunta;
    this.opcion_Correcta = opcion_Correcta;
    this.opcion_Incorrecta = opcion_Incorrecta;
    this.opcion_Incorrecta_2 = opcion_Incorrecta_2;
    this.opcion_Incorrecta_3 = opcion_Incorrecta_3;
  }
  info() {
    return (`${this.pregunta} - ${this.opcion_Correcta} - ${this.opcion_Incorrecta} - ${this.opcion_Incorrecta_2} - ${this.opcion_Incorrecta_3}`);
  }
}

class quiz_True_False {
  /* pregunta de Falso y verdadero */
  constructor(pregunta, opcion_Verdadera, opcion_Falsa) {
    this.pregunta = pregunta;
    this.opcion_Verdadera = opcion_Verdadera;
    this.opcion_Falsa = opcion_Falsa;
  }
  info() {
    return (`${this.pregunta} - ${this.opcion_Verdadera} - ${this.opcion_Falsa}`);
  }
}
/* const answer_1=A;
  const answer_2=B;
  const answer_3=C;
  const answer_4=D; */

const answer = [answer_1, answer_2, answer_3, answer_4];
const answer_1 = new quiz_4_Answers(
  "2+2",
  "4",
  "opcion_Incorrecta",
  "opcion_Incorrecta_2",
  "opcion_Incorrecta_3"
);
const answer_2 = new quiz_4_Answers(
  "2+6",
  "8",
  "opcion_Incorrecta",
  "opcion_Incorrecta_2",
  "opcion_Incorrecta_3"
);
const answer_3 = new quiz_True_False("10+5 es 16?", false, true);
const answer_4 = new quiz_True_False("10+6 es 16?", true, false);

const mostrarINFORMACION = () => {
  alert("probando 1");

    alert(answer_1.info);
};

const mostrarA = () => {
  alert("probando xD 2");
};

const container_TEST = document.querySelector(".Answer_1");
const container_TEST2 = document.querySelector(".Answer_2");

container_TEST.addEventListener("click", mostrarA);
container_TEST2.addEventListener("click", mostrarINFORMACION);

/* export { mostrarA, mostrarINFORMACION }; */
