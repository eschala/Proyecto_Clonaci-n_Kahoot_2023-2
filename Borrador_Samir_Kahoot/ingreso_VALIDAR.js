  const redirigirA_Quiz = () => {

    location.href='AnswerDefault_Kahoot_SAMIR.html';
  };


function ingresarJuego() {
  const pinInput = document.getElementById("pinInput").value;

  if (pinInput) {
    alert("Ingresando al juego con PIN: " + pinInput);
    
    setTimeout(redirigirA_Quiz, 3000);
    // Puedes redirigir a la siguiente página, realizar verificaciones, etc.
  } else {
    alert("Por favor, ingresa un PIN válido.");
  }

  

}
