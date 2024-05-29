/**
 * convierte un valor ingresado por el usuario en metros, pies, yardas o pulgadas
 * @method ConvertirUnidades
 * @param {string} nombre = Id del elemento en el HTML
 * @param {number} valor = valor ingresado por el usuario
 */


ConvetirUnidades = (id, valor) => {
    let valmetro, valpie, valpulgada, valyada;
    if (isNaN(valor)) {
        alert("El valor ingresado no es un numero");
        valmetro = "";
        valpie = "";
        valpulgada = "";
        valyada = "";
    }
    if (id === "metro") {
        valmetro = valor;
        valpulgada = valor * 39.3701;
        valpie = valor * 3.28084;
        valyada = valor * 1.09361;
    } else if (id === "pulgada") {
        valpulgada = valor;
        valmetro = valor / 0.0254;
        valpie = valor / 0.0833;
        valyada = valor / 36;
    } else if (id === "pie") {
        valpie = valor;
        valpulgada = valor / 0.3048;
        valmetro = valor * 12;
        valyada = valor / 3;

    } else if (id === "yarda") {
        valyada = valor;
        valpulgada = valor / 0.9144;
        valpie = valor * 3;
        valmetro = valor * 36;
    }
    document.getElementById("metro").value = Math.round(valmetro * 100) / 100;
    document.getElementById("pulgada").value = Math.round(valpulgada * 100) / 100;
    document.getElementById("pie").value = valpie.toFixed(2);
    document.getElementById("yarda").value = valyada.toFixed(2);

}

/**
 * convierte un valor en grados ingresado por el usuario en radines
 * @method convertirGR
 * @param {string} nombre = Id del elemento en el HTML
 * @param {number} valor = valor ingresado por el usuario
 */
function convertirGR(id) {
    if (id === "grados") {
        let grat = document.getElementById("grados").value;
        let rad = grat * Math.PI / 180;
        document.getElementById("radianes").value = rad;

    } else if (id === "radianes") {
        let rad = document.getElementById("radianes").value;
        let grat = rad * 180 / Math.PI;
        document.getElementById("grados").value = rad;

    }
}

/**
 * mostrar o ocultar un div
 * @method mostrarocultar
 * @param id {string}  = Id del elemento en el HTML

 */

let mostrarocultar = (valorMO) => {
    if (valorMO === "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';

    } else if (valorMO === "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}
/**
 * permite sumar dos numeros ingresados por el usuario
 * @method suma
 */
let suma = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].value = num1 + num2;
}
/**
 * permite restar dos numeros ingresados por el usuario
 * @method resta
 */
let resta = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].value = num1 - num2;
}
/**
 * permite multiplicar dos numeros ingresados por el usuario
 * @method prod
 */
let prod = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].value = num1 * num2;
}
/**
 * permite dividir dos numeros ingresados por el usuario
 * @method div
 */
let div = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].value = num1 / num2;
}
/**
 * permite concatenar una distancia y una unidad en la url antes de cargar la nueva pagina
 * @method pasarpagina
 */
let pasarpagina = () => {
    let cant, unid, urlcomp;
    cant = document.getElementById("distancia").value;
    unid = document.getElementsByName("unidades")[0].value;

    console.log(cant);
    console.log(unid);

    urlcomp = "segundaweb.html#" + cant + "#" + unid;
    window.open(urlcomp);
}
/**
 * permite tomar los valores de distancia y unidad en la url y escribirlos en el input
 * @method cargarvalores
 */
let cargarvalores = () => {
    let cantidad, unidad, urlcompleta;
    urlcompleta = window.location.href;
    console.log(urlcompleta);
    urlcompleta = urlcompleta.split("#");
    console.log(urlcompleta);
    cantidad = urlcompleta[1];
    unidad = urlcompleta[2];
    document.getElementById("dist").value = cantidad + "" + unidad;

}

/**
 * permite dbujar circulo y cuadrado
 * @method dibujarcircua
 */

function dibujarcircua() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(margen, yMax - 40 - margen, 40, 40);
    ctx.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = " #8b4c99";
    ctx.fill()
}

/**
 *funcion global true or false
 */
var bandera;

/**
 * permite dibujar lapiz
 * @method dibujar
 */

function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

/**
 * permite limpiar canvas
 * @method LimpiarCanvas
 */

function LimpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

/**
 * permite dibujar una imagen
 * @method dibujarimagen
 */

function dibujarimagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src = "images/auto.png";
    canvas.width = canvas.width;

    img.onload = function () {
        ctx.drawImage(img, posX, posY);
    }
}