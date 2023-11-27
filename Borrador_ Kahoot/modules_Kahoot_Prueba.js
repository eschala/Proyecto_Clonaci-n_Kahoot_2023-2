import { mostrarINFORMACION,mostrarA } from "./Respuestas.js";

const container_TEST = document.querySelector(".Answer_1");
const container_TEST2 = document.querySelector(".Answer_2");

container_TEST.addEventListener("click",mostrarA);
container_TEST2.addEventListener("click",mostrarINFORMACION);


import { checkAnswer } from "./4_Respuestas.js"