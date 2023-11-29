const element_counterScreen = document.querySelector(".counterScreen");
        const element_counterScreen_2 = document.querySelector(".counterScreen_2");
        const element_botones_1 = document.querySelector(".botones_1");
        const element_botones_2 = document.querySelector(".botones_2");

        let count = 10;
        let clicks = 0;
        let timerSet;

        element_counterScreen.innerHTML = count + "s";

        const activarTiempo = () => {
            element_botones_1.innerHTML="Reiniciar";
            clearInterval(timerSet);
            timerSet = setInterval(contarSegundos, 1000);
        };

        const contarSegundos = () => {
            count--;
            element_counterScreen.innerHTML = count + "s";

            if (count <= 0) {
                activarTiempo();
                element_botones_1.disabled = false;
            } else {
                element_botones_1.disabled = true;
            }

            if (count == 10) {
                element_botones_1.style.display = "none";
            } else {
                element_botones_1.style.display = "block";
            }
            if(count<0){
                element_counterScreen.innerHTML=0+"s";
            }else{
                element_counterScreen.innerHTML = count + "s";

            }
        };

        const contarCLICKS = () => {
            clicks++;
            element_counterScreen_2.innerHTML = clicks + " clicks";
        };

        const reiniciarContador = () => {
            clearInterval(timerSet);
            count = 10;
            element_counterScreen.innerHTML = count + "s";

            if (count == 10) {
                element_botones_1.style.display = "none";
            } else {
                element_botones_1.style.display = "block";
            }

            activarTiempo();
        };

        const detenerContador = () => {
            clearInterval(timerSet);
            element_counterScreen.innerHTML = "Tiempo detenido";
            element_botones_1.style.display = "block";
            element_botones_1.disabled = false;
            element_botones_1.innerHTML="Iniciar";
        };

        element_botones_1.addEventListener("click", reiniciarContador);
        element_botones_1.addEventListener("click", contarCLICKS);
        element_botones_2.addEventListener("click", detenerContador);

        activarTiempo();