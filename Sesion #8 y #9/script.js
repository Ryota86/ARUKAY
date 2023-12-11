// ==========================
//        CANVAS 1
// ==========================

// #region CANVAS 1

var canvas1 = document.getElementById("canvas1");
var paper1 = canvas1.getContext("2d");

var imagen1 = new Image();
imagen1.src = "https://vehicle-images.dealerinspire.com/stock-images/chrome/55b767c73ea8c2919e8151d15a92fbb1.png";
imagen1.addEventListener("load", draw1);

//Posicion Imagen 1
var ImageX = 380;
var ImageY = 300;

function draw1() {
    paper1.drawImage(imagen1, 40, 10, ImageX, ImageY);
}

var linear1 = paper1.createLinearGradient(0, 0, 0, 500);
linear1.addColorStop(0, "#CCFF99");
linear1.addColorStop(0.5, "#3399CC");

paper1.fillStyle = linear1;
paper1.fillRect(0, 0, 450, 300);


// #endregion



// ==========================
//        CANVAS 2
// ==========================

// #region CANVAS 2


var canvas2 = document.getElementById("canvas2");
var paper2 = canvas2.getContext("2d");

var imagen2 = new Image();
imagen2.src = "https://media-assets.mazda.eu/image/upload/c_fill,w_768,h_384,q_auto,f_auto/mazdaes/globalassets/cars/2023-mazda-mx-5-rf/clearcuts/mme_mx5_ng9feaa_46v_7-8.png?rnd=49581c";
imagen2.addEventListener("load", draw2);

//Posicion Imagen 2
var ImageX2 = 450;
var ImageY2 = 300;

function draw2() {
    paper2.drawImage(imagen2, 0, 0, ImageX2, ImageY2);
}

var Radial1 = paper2.createRadialGradient(235, 150, 90, 235, 150, 300);
Radial1.addColorStop(0, "#D858B3");
Radial1.addColorStop(0.5, "#66D2AB");

paper2.fillStyle = Radial1;
paper2.fillRect(0, 0, 450, 300);


// #endregion



// ==========================
//        CANVAS 3
// ==========================

// #region CANVAS 3

var canvas3 = document.getElementById("canvas3");
var paper3 = canvas3.getContext("2d");

var imagen3 = new Image();
imagen3.src = "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/liuUwSLJ0WQQX9AvXoQnIU10k0cTZJ2AyGllR_cU98yQpn0_YssSBCq9OiOvY2LDyFb2LM7UeHZvOdgNbldHWvJayTRLzSawyYgtBfPgRq02OR4SWgbNNCC4jqho9yMAQ09y5Bm_OYdKoevWW7BWS1ymlCImi3OkslaMxWsZ42sHPAcdH-MWtihqjtfFDZMq/cc_2023AUC170041_01_640_0EPA.png";
imagen3.addEventListener("load", draw3);

var Radial2 = paper3.createRadialGradient(235, 150, 90, 235, 150, 250);
Radial2.addColorStop(0.5 , "#DF3F08");
Radial2.addColorStop(0, "#D3AC10"); 

paper3.fillStyle = Radial2;
paper3.fillRect(0, 0, 450, 300);

//Posicion Imagen 1
var ImageX3 = 450;
var ImageY3 = 150;

//Tamaño
var ImageWidth3 = 300;
var ImageHeight3 = 150;

//movimiento
var x = 30; 
var interval = setInterval(move, x);


//Funcion movimiento
function move(){
  ImageX3 = ImageX3 - 5
  if (ImageX == -250){
    ImageX = 250;
  }
  //Borrador
  paper3.clearRect(-250, 0, canvas3.width, canvas3.height);
  //Dibujar
  paper3.drawImage(Imagen3, ImageX3, ImageY3, ImageWidth3, ImageHeight3);
  
}

//




// #endregion



// ==========================
//        CANVAS 4
// ==========================

// #region CANVAS 4

var canvas4 = document.getElementById("canvas4");
var paper4 = canvas4.getContext("2d");

var imagen4 = new Image();
imagen4.src = "https://www.electrifying.com/files/NFeDtk7gtILNVgt4/AudietronGT.png";
imagen4.addEventListener("load", draw4);

//Posicion Imagen 4
var ImageX4 = 450;
var ImageY4 = 300;

function draw4() {
    paper4.drawImage(imagen4, 0, 0, ImageX4, ImageY4);
}

var linear2 = paper4.createLinearGradient(0, 250, 200, 500)
linear2.addColorStop(0.5, "#FFC300");
linear2.addColorStop(0, "#3D4C8E");

paper4.fillStyle = linear2;
paper4.fillRect(0, 0, 450, 300);

// #endregion

// ==========================
//        CANVAS 5
// ==========================

// #region CANVAS 5

var canvas5 = document.getElementById("canvas5");
var paper5 = canvas5.getContext("2d");

drawLines("red", 225, 150, 380, 120);
drawLines("blue", 205, 100, 100, 200);
drawLines("red", 100, 100, 300, 300);
drawLines("blue", 300, 100, 100, 300);

drawCircle("Green", 225, 150, 100);
drawCircle("violet", 225, 150, 50);
drawCircle("cyan", 225, 150, 150)

drawLines("Red", 100, 200, 100, 300)

function drawLines(color, initialX, initialY, finalX, finalY){
    paper5.beginPath();
    paper5.strokeStyle = color;
    paper5.moveTo(initialX, initialY);
    paper5.lineTo(finalX, finalY);
    paper5.stroke();
    paper5.closePath();
}

function drawCircle(color, centerX, centerY, radius){
    paper5.beginPath();
    paper5.strokeStyle = color;
    paper5.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    paper5.stroke();
    paper5.closePath();
}


// #endregion