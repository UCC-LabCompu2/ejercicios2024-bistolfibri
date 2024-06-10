// noinspection SillyAssignmentJS

/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id // id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor //El valor de los inputs de metros, pulgadas, pies y yardas
 */
function cambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    } else if (id === "metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09362 * valor;
    } else if (id === "pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_pie.value = 0.08333 * valor;
        document.lasUnidades.unid_yarda.value = 0.02777 * valor;
    } else if (id === "pie") {
        document.lasUnidades.unid_metro.value = 0.3048 * valor;
        document.lasUnidades.unid_pulgada.value = 12 * valor;
        document.lasUnidades.unid_yarda.value = 0.33333 * valor;
    } else if (id === "yarda") {
        document.lasUnidades.unid_metro.value = 0.9144 * valor;
        document.lasUnidades.unid_pie.value = 3 * valor;
        document.lasUnidades.unid_pulgada.value = 36 * valor;
    }
}


/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas con otro tipo de función
 * @method cambiarUnidades
 * @param {string} id //id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor //El valor de los inputs de metros, pulgadas, pies y yardas
 */
convertirUnidades = (id, valor) => {
    let met, pul, pie, yar;
    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        met = valor * 0.0254;
        pul = valor;
        pie = valor * 0.83333;
        yar = valor * 0.0277778;
    } else if (id === "pie") {
        met = valor * 0.3048;
        pul = valor * 12;
        pie = valor;
        yar = valor * 0.333333;
    } else if (id === "yarda") {
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
        yar = valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met * 100) / 100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul * 100) / 100;
    document.lasUnidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasUnidades.unid_yarda.value = Math.round(yar * 100) / 100;
}

function convertirGR(id) {
    let grad, rad;
    if (id === "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id === "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}


/**
 * Mostrar o ocultar un div
 * @method mostrarOcultar
 */
let mostrarOcultar = (valorMO) => {
    if (valorMO === "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO === "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}
let sumar = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}
let restar = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}
let multiplicar = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}


let division = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
}
function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

/**
 * Dibujar círculo y cuadrado dentro de un canvas
 * @method dibujarCirculoCuadrado
 */
function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(margen, yMax-40-margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "rgba(244,140,71,0.99)";
    ctx.fill();
}

/**
 * Dibuja una línea en la posición que determina el usuario con el mouse
 * @method cargarlisteners
 */
function cargarlisteners() {
    document.getElementById("lienzo").addEventListener("mousemove", dibujar);
}

let bandera;

/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 */
function dibujar(event) {
    const canvas = document.getElementById("lienzo");
    const ctx = canvas.getContext("2d");

    let posx = event.clientX;
    let posy = event.clientY;
    console.log(posx, posy);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };
    ctx.fillStyle = "rgba(76,175,80,0.99)";
    if (bandera) {
        ctx.fillRect(posx, posy, 5, 5);
    }
}

/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 */
function limpiarCanvas() {
    const canvas = document.getElementById("lienzo");
    canvas.width = canvas.width;
}

/**
 * Dibuja una línea en la posición que determina el usuario con el mouse
 * @method dibujarCuadriculado
 */
function dibujarCuadriculado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const alturamaxima = canvas.height;
    const anchomaximo = canvas.width;
    const paso = 20;
    // horizontales
    for (let i = paso; i < alturamaxima;) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchomaximo, i);
        ctx.strokeStyle = "#585555";
        ctx.stroke();
        ctx.closePath();
        i = i + paso;
    }
    // verticales
    for (let i = paso; i < anchomaximo;) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturamaxima);
        ctx.strokeStyle = "#585555";
        ctx.stroke();
        ctx.closePath();
        i = i + paso;
    }
    ctx.strokeStyle = "#a24cdf";
    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturamaxima / 2);
    ctx.lineTo(anchomaximo, alturamaxima / 2);
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchomaximo / 2, 0);
    ctx.lineTo(anchomaximo / 2, alturamaxima);
    ctx.stroke();
    ctx.closePath();

    //Escribir en el eje X
    let numX = -20;
    ctx.font = "10pt Verdana";
    ctx.fillStyle = "#ff0000";
    for (let i = 0; i < anchomaximo;) {
        ctx.fillText(string(numX), i, alturamaxima / 2);
        i += paso;
        numX++;
    }
    let numY = -15;
    ctx.font = "10pt Verdana";
    ctx.fillStyle = "#ff0000";
    for (let i = 0; i < anchomaximo;) {
        ctx.fillText (string(numY), i, alturamaxima / 2);
        i += paso;
        numX++;
    }
}

function dibujarImagen(posX, posY) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);

    canvas.width = canvas.width;

    const img = new Image();
    img.src = "images/auto.png";

    if (posX < 0 || posY < 0) {
        mostrarDialog();
    } else if (posX > canvas.width || posY > canvas.height) {
        mostrarDialog();
    }
    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }
}

function mostrarDialog() {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

function cerrarDialog() {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

x = 0;
dx = 2; // Cantidad de píxeles que se mueve el elemento

function animarAuto() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "images/auto.png";
    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }

    x += dx;
    if (x > canvas.width) {
        x = 0;
    }
}

let intervalId;
function comenzarAnimacion(){
    intervalId = setInterval(animarAuto,15);
    setTimeout(detenerAuto, 6000);
}

function detenerAuto(){
    clearInterval(intervalId);
}

let animarID;
function animarAutoNuevo(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "images/auto.png";
    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
        animarID = requestAnimationFrame(animarAutoNuevo);
    }
    x += dx;
    if (x > canvas.width) {
        x = 0;
    }
}

function animarNuevo(){
    setTimeout(cancelarNuevaAnimacion,6000);
    requestAnimationFrame(animarAutoNuevo);
}

function cancelarNuevaAnimacion() {
    cancelAnimationFrame(animarID);
}