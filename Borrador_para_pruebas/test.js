const titulo_H1 = document.querySelector(".tittle");
const input_Btn = document.querySelector(".button_Enviar");

const alertAdvice = document.querySelector(".advice");

const button_1 = document.querySelector(".btn_1");
const button_2 = document.querySelector(".btn_2");
const button_3 = document.querySelector(".btn_3");
const button_4 = document.querySelector(".btn_4");

class quiz4 {
  constructor(pregunta, opcionC, opcionI, opcionI2, opcionI3) {
    this.pregunta = pregunta;
    this.opcionC = opcionC;
    this.opcionI = opcionI;
    this.opcionI2 = opcionI2;
    this.opcionI3 = opcionI3;
  }
  infoQ() {
    return `la pregunta es ${this.pregunta} La correcta es: ${this.opcionC} Falsa: ${this.opcionI} Falsa: ${this.opcionI2} Falsa: ${this.opcionI3}`;
  }
  pregunta_(){return(this.pregunta)}
  opcionC_(){return(this.opcionC)}
  opcionI_(){return(this.opcionI)}
  opcionI2_(){return(this.opcionI2)}
  opcionI3_(){return(this.opcionI3)}
}
/* 
pregunta_Quiz = prompt("Pregunta");
opcion_Quiz = prompt("Opcion incorrecta");
opcion_Correcta = prompt("Opcion Correcta");
 */
/* 
const pregunta_Quiz = prompt("pregunta");
const opcion_Quiz = prompt("Mala");
const opcion_Quiz2 = prompt("Mala 2");
const opcion_Quiz3 = prompt("Mala 3");
const opcion_Correcta = prompt("Buena");
 */

const pregunta_Quiz = "2+2";
const opcion_Quiz = "6";
const opcion_Quiz2 = "7";
const opcion_Quiz3 = "2";
const opcion_Correcta = "4";


const answer1 = new quiz4(
  pregunta_Quiz,
  opcion_Correcta,
  opcion_Quiz,
  opcion_Quiz2,
  opcion_Quiz3
);
const mostrarInfoQuiz = () => {
  titulo_H1.innerHTML = answer1.pregunta_();
  button_1.innerHTML=answer1.opcionC_();
  button_2.innerHTML=answer1.opcionI_();
  button_3.innerHTML=answer1.opcionI2_();
  button_4.innerHTML=answer1.opcionI3_();


};
input_Btn.addEventListener("click", mostrarInfoQuiz);

button_1.addEventListener("click", validarOpcion1);
button_2.addEventListener("click", validarOpcion2);
button_3.addEventListener("click", validarOpcion3);
button_4.addEventListener("click", validarOpcion4);



const validarOpcion1=()=>{
alert();
}
const validarOpcion2=()=>{
    
}
const validarOpcion3=()=>{
    
}
const validarOpcion4=()=>{
    
}

const validarPregunta=()=>{

}
