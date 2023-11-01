// ==========================
//        CANVAS 1
// ==========================

// #region CANVAS 1


var canvas1 = document.getElementById("canvas1");
var paper1 = canvas1.getContext("2d");

//Imagen 1
var Image1 = new Image();
Image1.src = "https://www.pngplay.com/wp-content/uploads/13/BMW-M3-2019-No-Background.png";

//Imagen 2
var Image2 = new Image();
Image2.src = "https://img.freepik.com/fotos-premium/vista-cerca-calle-aislada-sobre-fondo-blanco_9083-6464.jpg";

//Botones
var Button1 = document.getElementById("Button1");
Button1.addEventListener("click", VelocityUp)

var Button2 = document.getElementById("Button2");
Button2.addEventListener("click", VelocityReset)

var Button3 = document.getElementById("Button3");
Button3.addEventListener("click", VelocityDown)

//Posicion Imagen 1
var ImageX = 500;
var ImageY = 250;

//Posicion Imagen 2
var ImagenX = 0;
var ImagenY = 70;

//Tamaño
var ImageWidth = 300;
var ImageHeight = 150;

//movimiento
var x = 30; 
var interval = setInterval(move, x);


//Funcion movimiento
function move(){
  ImageX = ImageX - 5
  if (ImageX == -250){
    ImageX = 250;
  }
  //Borrador
  paper1.clearRect(-250, 0, canvas1.width, canvas1.height);
  //Dibujar
  paper1.drawImage(Image2, ImagenX, ImagenY, );
  paper1.drawImage(Image1, ImageX, ImageY, ImageWidth, ImageHeight);
  
}

//Funcion Botones
function VelocityUp(){
  clearInterval(interval);
  x = x - 5;
  interval = setInterval(move, x);
}

function VelocityDown(){
  clearInterval(interval);
  x = x + 5;
  if (x >= 30) {  
    x = 30;
  }
  interval = setInterval(move, x);
}

function VelocityReset(){
  clearInterval(interval);
  x = 30;
  interval = setInterval(move, x);
}

// #endregion



// ==========================
//        CANVAS 2
// ==========================

// #region CANVAS 2


var canvas2 = document.getElementById("canvas2");
var paper2 = canvas2.getContext("2d");

var imagen3 = new Image();
imagen3.src = "https://static.wixstatic.com/media/f425f6_8ecb376aa7014f199465ea6002172ab5.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f425f6_8ecb376aa7014f199465ea6002172ab5.png";

var imagen4 = new Image();
imagen4.src = "https://lajauladelangel.com.co/parquefabricato/wp-content/uploads/2021/11/galeria-canchas-fabricato-1-768x410.jpg";

//Posicion Imagen 3
var ImageX1 = 210;
var ImageY1 = 400;

//Posicion Imagen 4
var ImagenX1 = 0;
var ImagenY1 = 0;

//Tamaño Imagen 3
var ImageWidth3 = 70;
var ImageHeight3 = 70;

//Tamaño Imagen 4
var ImageWidth4 = 500;
var ImageHeight4 = 500;

imagen3.onload = function() {
  paper2.drawImage(imagen3, ImageX1, ImageY1, ImageWidth3, ImageHeight3);
  paper2.drawImage(imagen4, ImagenX1, ImagenY1, ImageWidth4, ImageHeight4);
};

//Funcion movimiento
function move1() {
    ImageY1 = ImageY1 - 5;
    
    //Borrador
    paper2.clearRect(0, 0, canvas2.width, canvas2.height);
    
    //Dibujar
    paper2.drawImage(imagen4, ImagenX1, ImagenY1, ImageWidth4, ImageHeight4);
    paper2.drawImage(imagen3, ImageX1, ImageY1, ImageWidth3, ImageHeight3);

    // Si el balon alcanza su posición final
    if (ImageY1 <= 150) {
        // Detener el movimiento y devolver el balon a su posición inicial despues de 0.5 segundos
        clearInterval(interval1);
        setTimeout(function() {
            ImageY1 = 400;
            drawInitialPosition();
        }, 500);
    }
}

// Dibujar
function drawInitialPosition() {
    paper2.clearRect(0, 0, canvas2.width, canvas2.height);
    paper2.drawImage(imagen4, ImagenX1, ImagenY1, ImageWidth4, ImageHeight4);
    paper2.drawImage(imagen3, ImageX1, ImageY1, ImageWidth3, ImageHeight3);
}

// Boton para iniciar la animación
document.getElementById("shootButton").addEventListener("click", function() {
    interval1 = setInterval(move1, 25);
});

// #endregion



// ==========================
//        CANVAS 3
// ==========================

// #region CANVAS 3

var canvas3 = document.getElementById("canvas3");
var paper3 = canvas3.getContext("2d");

var imagen5 = new Image();
imagen5.src = "https://cnnespanol.cnn.com/wp-content/uploads/2021/04/201109112923-moon-surface-stock-full-169.jpg?quality=100&strip=info";

var imagen6 = new Image();
imagen6.src = "https://open3dmodel.com/wp-content/uploads/2022/11/Apollo-Lunar-module-and-ALSEP.png";

//Posicion Imagen 5
var ImagenX2 = 0;
var ImagenY2 = 0;

//Posicion Imagen 6
var ImageX2 = 210;
var ImageY2 = 400;

//Tamaño Imagen 5
var ImageWidth5 = 500;
var ImageHeight5 = 500;

//Tamaño Imagen 6
var ImageWidth6 = 70;
var ImageHeight6 = 70;

imagen5.onload = function() {
  paper3.drawImage(imagen5, ImagenX2, ImagenY2, canvas3.width, canvas3.height);
  paper3.drawImage(imagen6, ImageX2, ImageY2, ImageWidth6, ImageHeight6);
};

// Velocidad inicial
var velocityY3 = 5;
// Intervalo
var interval3;

// Función de movimiento
function move3() {
    ImageY2 -= velocityY3;
    
    paper3.clearRect(0, 0, canvas3.width, canvas3.height);
    paper3.drawImage(imagen5, ImagenX2, ImagenY2, canvas3.width, canvas3.height);
    paper3.drawImage(imagen6, ImageX2, ImageY2, ImageWidth6, ImageHeight6);

    if (ImageY2 <= -ImageHeight6) {
        clearInterval(interval3);
        setTimeout(function() {
          ImageY2 = 400;
          paper3.clearRect(0, 0, canvas3.width, canvas3.height);
          paper3.drawImage(imagen5, ImagenX2, ImagenY2, canvas3.width, canvas3.height);
          paper3.drawImage(imagen6, ImageX2, ImageY2, ImageWidth6, ImageHeight6);
        }, 1000);
    }
}

// Botones de control de velocidad
var VelocityUp1 = document.getElementById("Button1.1");
VelocityUp1.addEventListener("click", function() {
    velocityY3 += 1;
});

var VelocityDown1 = document.getElementById("Button3.1");
VelocityDown1.addEventListener("click", function() {
    velocityY3 -= 1;
    if (velocityY3 <= 0) {
        velocityY3 = 1;
    }
});

var VelocityReset1 = document.getElementById("Button2.1");
VelocityReset1.addEventListener("click", function() {
    velocityY3 = 5;
});

// Boton para iniciar la animación
var shootButton3 = document.getElementById("Button4.1");
shootButton3.addEventListener("click", function() {
    if (interval3) {
        clearInterval(interval3);
    }
    interval3 = setInterval(move3, 30);
});



// #endregion


