var canvas1 = document.getElementById("canvas1");
var paper1 = canvas1.getContext("2d");

var imagen1 = new Image();
imagen1.src = "https://setlist.me/wp-content/uploads/2018/04/KIDD-KEO-1.jpg";
imagen1.addEventListener("load", drawCentered);

function drawCentered() {
    var x = (canvas1.width - imagen1.width) / 2; // Calcular coordenada x centrada
    var y = (canvas1.height - imagen1.height) / 2; // Calcular coordenada y centrada
    paper1.drawImage(imagen1, x, y);
}

var canvas2 = document.getElementById("canvas2");
var paper2 = canvas2.getContext("2d");

var imagen2 = new Image();
imagen2.src = "https://d500.epimg.net/cincodias/imagenes/2019/06/04/lifestyle/1559679036_977776_1559679371_noticia_normal.jpg";
imagen2.addEventListener("load", drawTop);

function drawTop() {
    var x = 0;
    var y = 0;
    paper2.drawImage(imagen2, x, y);
}

