const container_E=document.querySelector(".container");
const sectionContainer_E=document.querySelector(".sectionContainer");
const sub_Container_2_E=document.querySelector(".sub_Container_2");
const btn_1_E=document.querySelector(".btn_1");
const btn_2_E=document.querySelector(".btn_2");
const h2_E=document.querySelector(".aviso");
const tituloClass_E=document.querySelector(".tituloClass");

/* const container_element=".container";
const sectionContainer_element=".sectionContainer";
const sub_Container_2_element=".sub_Container_2";
const btn_1_element=".btn_1";
const btn_2_element=".btn_2";
const h2_element=".aviso";
const tituloClass_element=".tituloClass";

container_element=document.querySelector(container_element);
sectionContainer_element=document.querySelector(sectionContainer_element);
sub_Container_2_element=document.querySelector(sub_Container_2_element);
btn_1_element=document.querySelector(btn_1_element);
btn_2_element=document.querySelector(btn_2_element);
h2_element=document.querySelector(h2_element);
tituloClass_element=document.querySelector(tituloClass_element);
 */ 
   var contar_S=0;
   var contar_R=5;
var segundos =0;

var contar_2=0;
const intervalo=1000;



var funcionPrueba=()=>{
    contar_R--;

    tituloClass_E.innerHTML=contar_R+ "s";

    if(contar_R==segundos){
        clearInterval(timeRunning);
        contar_R=5;
        activateTime();
        contar_2++;
        h2_E.innerHTML=contar_2+"min";

    }
}

const activateTime=()=>{
timeRunning = setInterval(funcionPrueba,intervalo);
}
const activateTimeOUT=()=>{
tiempoFuera = setTimeout(funcionPrueba,intervalo*segundos);
}
activateTime();


const pregunta_E=document.querySelector(".Pregunta_S");
const aviso_E=document.querySelector(".aviso_S");



const preguntas_String = [
    "¿Cuál es el meme conocido como 'Distracted Boyfriend'?",
    "¿Qué animal es el protagonista del meme 'Surprised Pikachu'?",
    "¿Quién es el protagonista del meme 'Hide the Pain Harold'?"
  ];
  
  const respuesta_String = [
    [ "B) Un hombre mirando su teléfono mientras su novia lo abraza."],
    ["A) Un gato."],
    [ "B) Un actor famoso."]
  ];
  
  const respuesta_Correcta_String = [
    "A) Un hombre mirando a una chica mientras su novia lo observa molesta.", 
    "B) Un Pokémon.", 
    "A) Un modelo de stock photography."];