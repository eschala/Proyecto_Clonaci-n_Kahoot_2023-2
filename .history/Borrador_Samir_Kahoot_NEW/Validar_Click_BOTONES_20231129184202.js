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
import { ValidarTiempo } from "./Temporizador_Respuestas.js";

const funcionValidarBotones = () => {
    var contar_CLICK_Funcion = 0;

    /* buttonSiguiente;
        buttonSiguiente_VF;
        
        buttonRespuesta1;
        buttonRespuesta2;
        buttonRespuesta3;
        buttonRespuesta4;
        buttonRespuesta1_VF;
        buttonRespuesta2_VF; */
    var click = 0;

    const click_Respuesta_C = () => {


    };

    const click_Respuesta_1 = () => {

    };
    const click_Respuesta_2 = () => {

    };
    const click_Respuesta_3 = () => {

    };

    const stylesTimeOUT = () => {

    };

    const stylesBoton_1 = () => {

    };
    const stylesBoton_2 = () => {

    };
    const stylesBoton_3 = () => {

    };
    const stylesBoton_4 = () => {


    };



    const styleOpacityON = () => {
        buttonRespuesta1.style.opacity = "50%";
        buttonRespuesta2.style.opacity = "50%";
        buttonRespuesta3.style.opacity = "50%";
        buttonRespuesta4.style.opacity = "50%";

    }

    styleOpacityON()
    const styleOpacityOFF = () => {

        buttonRespuesta1.style.opacity = "";
        buttonRespuesta2.style.opacity = "";
        buttonRespuesta3.style.opacity = "";
        buttonRespuesta4.style.opacity = "";


    }

    styleOpacityOFF()
    const styleBackgroundCOLORON = () => {
        buttonRespuesta1.style.backgroundColor = "red";
        buttonRespuesta2.style.backgroundColor = "red";
        buttonRespuesta3.style.backgroundColor = "red";
        buttonRespuesta4.style.backgroundColor = "red";
    }

    styleBackgroundCOLORON()
    const styleBackgroundCOLOROFF = () => {
        buttonRespuesta1.style.backgroundColor = "";
        buttonRespuesta2.style.backgroundColor = "";
        buttonRespuesta3.style.backgroundColor = "";
        buttonRespuesta4.style.backgroundColor = "";
    }

    styleBackgroundCOLOROFF()




    buttonRespuesta1.addEventListener("click", click_Respuesta_C);

    buttonRespuesta2.addEventListener("click", click_Respuesta_1);
    buttonRespuesta3.addEventListener("click", click_Respuesta_2);
    buttonRespuesta4.addEventListener("click", click_Respuesta_3);

    const click_Respuesta_V = () => {
        buttonRespuesta1_VF.style.backgroundColor = "green";
    };

    const click_Respuesta_F = () => {
        buttonRespuesta2_VF.style.backgroundColor = "red";
    };

    buttonRespuesta1_VF.addEventListener("click", click_Respuesta_V);
    buttonRespuesta2_VF.addEventListener("click", click_Respuesta_F);
};

export { funcionValidarBotones };
