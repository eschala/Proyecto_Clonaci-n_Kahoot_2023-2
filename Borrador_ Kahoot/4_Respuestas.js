

  export const checkAnswer = correctOption => {
    // Boton correcto
    const quizButtons = document.querySelectorAll('.btn_Answer');
  
    // Desactivar los demás botones
    quizButtons.forEach(button => (button.disabled = true));
  
    // Cambiar el color del botón correcto
    const correctButton = document.querySelector(`.btn_Answer:nth-child(${correctOption})`);
    correctButton.style.backgroundColor = '#2ecc71'; // Verde
  
    // Borrar los botones incorrectos
    const incorrectButtons = document.querySelectorAll(`.btn_Answer:not(:nth-child(${correctOption}))`);
    incorrectButtons.forEach(button => button.classList.add('fade'));
    };


  