{
    const titulo_H1_2 = document.querySelector(".tittle_2");
    const input_Btn_2 = document.querySelector(".button_Enviar_2");
    
    const alertAdvice = document.querySelector(".advice");
    
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
      titulo_H1_2.innerHTML = answer1.getPregunta();
      button_T.innerHTML = answer1.getOpcionV();
      button_F.innerHTML = answer1.getOpcionF();

    };
    
    const validarRespuesta_VF = (opcionElegida) => {
      const respuestaSeleccionada = opcionElegida.innerHTML;
      const respuestaCorrecta = answer3.getOpcionV();
    
      if (respuestaSeleccionada === respuestaCorrecta) {
        alertAdvice.innerHTML="¡Respuesta correcta! "+respuestaCorrecta;
    
      } else {
        alertAdvice.innerHTML="Respuesta incorrecta. Inténtalo de nuevo.";
    
      }
    };
    
    input_Btn_2.addEventListener("click", mostrarInfoQuiz_VF);
    
    button_T.addEventListener("click", () => validarRespuesta_VF(button_T));
    button_F.addEventListener("click", () => validarRespuesta_VF(button_F));

    }