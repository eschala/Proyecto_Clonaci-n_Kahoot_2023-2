
class Planetas {
    constructor(name, size, color, gravity) {
      this.name = name;
      this.size = size;
      this.color = color;
      this.gravity = gravity;
    }
    info() {
      return (`Hola soy el planeta ${this.name}, mi tamaño es ${this.size} de diámetro, mi color es ${this.color}
           y tengo ${this.gravity} de gravedad.`);
    }
  }
  
  const tierra = new Planetas(  "Tierra",  "aproximadamente 12,742 kilómetros",  "Principalmente azul y verde debido a los océanos y la vegetación",  "9.81 m/s²");
  
  const marte = new Planetas("Marte", "aproximadamente 6,779 kilómetros", "Marrón o Rojo debido a la presencia de óxido de hierro en la superficie", "3.71 m/s²");
  
  const venus = new Planetas("Venus", "aproximadamente 12,104 kilómetros", "Amarillo y naranja debido a densas nubes", "8.87 m/s²");
  
  const jupiter = new Planetas("Jupiter", "El más grande del sistema solar, aproximadamente 139,822 kilómetros", "Mayormente naranja y blanco con bandas de nubes", "24.79 m/s²");
  
  const mercurio = new Planetas("Mercurio", "aproximadamente 4,880 kilómetros", "Grisáceo", "3.7 m/s²");
  
  const saturno = new Planetas("Saturno", "aproximadamente 116,464 kilómetros", "Amarillo y dorado con anillos espectaculares", "10.44 m/s²");
  
  const luna = new Planetas("Luna, la verdad... no soy un planeta, soy una estrella", "aproximadamente 3,474 kilómetros", "en su mayoría es grisácea debido a la presencia de rocas y polvo lunar.", "1.625 m/s²");
  
  const pluton = new Planetas("Pluton, la verdad... soy un planeta enano", "aproximadamente 2,377 kilómetros", "tonos que van desde amarillo claro hasta marrón debido a la presencia de nitrógeno y metano en su atmósfera y la superficie congelada", "0.063 m/s²");
  
  const urano = new Planetas("Urano", "aproximadamente 50,724 kilómetros", "Azul verdoso debido a la presencia de metano en su atmósfera", "8.69 m/s²");
  
  const neptuno = new Planetas("Neptuno", "aproximadamente 49,244 kilómetros", "Azul profundo debido a la presencia de metano en su atmósfera", "11.15 m/s²");
  
  
  
    const removeImg = document.querySelector(".container_1__section_3");
    const removeText = document.querySelector(".container_1__section_2");
  
  const mostrarInfo = () => {
  
  
    if (
      removeImg.style.display !== "block" ||
      removeText.style.display !== "block"
    ) {
      removeImg.style.display = "block";
      removeText.style.display = "block";
    } 
  };
  
  const validarPlaneta = () => {
    mostrarInfo();
    alert("Validando...");
  
    const text_name_USER = document.querySelector(".text__name");
  const paragraphResult = document.querySelector(".Resultado");
  const img_Planet = document.querySelector(".planet");
  
  
  
  
    if (text_name_USER.value === "Tierra" || text_name_USER.value === "tierra") {
      paragraphResult.innerHTML = tierra.info();
      /* Tierra */
      img_Planet.src =
        "https://static.nationalgeographic.es/files/styles/image_3200/public/940.jpg?w=1900&h=1427";
    } else if (
      text_name_USER.value === "Marte" ||
      text_name_USER.value === "marte"
    ) {
      paragraphResult.innerHTML = marte.info();
      /* Marte */
      img_Planet.src =
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/09/Marte-planeta-rojo.jpg?fit=1200%2C676&quality=50&strip=all&ssl=1";
    } else if (
      text_name_USER.value === "Venus" ||
      text_name_USER.value === "venus"
    ) {
      paragraphResult.innerHTML = venus.info();
      /* Venus */
      img_Planet.src =
        "https://www.ngenespanol.com/wp-content/uploads/2023/06/venus-asi-es-el-planeta-mas-calido-del-sistema-solar.jpg";
    } else if (
      text_name_USER.value === "Jupiter" ||
      text_name_USER.value === "jupiter"
    ) {
      paragraphResult.innerHTML = jupiter.info();
      /* Jupiter */
      img_Planet.src =
        "https://media.es.wired.com/photos/63e2988dbc755c9a2a93f5dd/3:2/w_6480,h_4320,c_limit/Jupiter.jpg";
    } else if (
      text_name_USER.value === "Mercurio" ||
      text_name_USER.value === "mercurio"
    ) {
      paragraphResult.innerHTML = mercurio.info();
      /* Mercurio */
      img_Planet.src =
        "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTFFRKg1XEC7kNu58XVZi9vPh6F9ii0FhevCdEAUKyMEtSdx4HLLLNBMacXXX0Y0gLv";
    } else if (
      text_name_USER.value === "Saturno" ||
      text_name_USER.value === "saturno"
    ) {
      paragraphResult.innerHTML = saturno.info();
      /* Saturno */
      img_Planet.src =
        "https://www.ngenespanol.com/wp-content/uploads/2023/06/saturno-asi-es-el-planeta-menos-denso-del-sistema-solar.jpg";
    } else if (
      text_name_USER.value === "Luna" ||
      text_name_USER.value === "luna"
    ) {
      paragraphResult.innerHTML = luna.info();
      /* Luna */
      img_Planet.src =
        "https://fotografias.lasexta.com/clipping/cmsimages01/2015/11/30/51C9C74F-99E2-4CE4-847B-B8D4B97A922E/98.jpg?crop=800,450,x0,y41&width=1900&height=1069&optimize=high&format=webply";
    } 
    else if (    text_name_USER.value === "Pluton" ||    text_name_USER.value === "pluton"  ) 
    {    paragraphResult.innerHTML = pluton.info();
      /* Pluton */
      img_Planet.src =
        "https://cnnespanol.cnn.com/wp-content/uploads/2019/08/190823094900-03-pluto-not-a-planet-super-tease.jpg?quality=100&strip=info";
    } 
    else if (    text_name_USER.value === "Urano" ||    text_name_USER.value === "urano"  ) 
    {    paragraphResult.innerHTML = urano.info();
      /* Pluton */
      img_Planet.src =
        "https://img.freepik.com/foto-gratis/esfera-abstracta-brilla-liquido-submarino-azul-generado-ia_188544-22051.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697673600&semt=ais";
    } 
    else if (    text_name_USER.value === "Neptuno" ||    text_name_USER.value === "neptuno"  ) 
    {    paragraphResult.innerHTML = neptuno.info();
      /* Pluton */
      img_Planet.src =
        "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT9RN79wn9Nw-Bt_dn2TjGwLmVo7kxccffCzGa6e1onKI_QyOinDXZ-MMqL_McsRcR1";
    } 
    
    
    
    
    
    
    else {
      alert("Ese planeta no existe o no esta en la base de datos");
      removeImg.style.display = "none";
      removeText.style.display = "none";
      document.querySelector(".text__name").value="";
  
  
    }
  };
  
  