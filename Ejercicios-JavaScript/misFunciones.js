/**
 * convierte un valor ingresado por el usuario en metros, pies, yardas o pulgadas
 * @method ConvertirUnidades
 * @param {string} nombre = Id del elemento en el HTML
 * @param {number} valor = valor ingresado por el usuario
 */


ConvetirUnidades = (id, valor) => {
    let valmetro, valpie, valpulgada, valyada;
    if (isNaN(valor)){
        alert("El valor ingresado no es un numero");
        valmetro="";
        valpie="";
        valpulgada= "";
        valyada = "";
    }
    if (id === "metro"){
        valmetro = valor;
        valpulgada = valor*39.3701;
       valpie = valor*3.28084;
        valyada = valor* 1.09361;
    } else if (id === "pulgada") {
        valpulgada = valor;
        valmetro = valor/0.0254;
        valpie = valor/0.0833;
        valyada = valor/36;
    } else if ( id === "pie") {
        valpie = valor;
       valpulgada = valor/0.3048;
        valmetro = valor*12;
        valyada = valor/3;

    } else    if (id === "yarda"){
        valyada = valor ;
        valpulgada = valor/0.9144;
       valpie = valor*3;
       valmetro = valor*36;
    }
    document.getElementById("metro").value= valmetro;
    document.getElementById("pulgada").value= valpulgada;
    document.getElementById("pie").value = valpie;
    document.getElementById("yarda").value= valyada;

}


function convertirGR(id) {
    if (id==="grados") {
        let grat = document.getElementById("grados").value;
        let rad = grat*Math.PI/180;
        document.getElementById("radianes").value = rad;

    } else if (id ==="radianes") {
        let rad = document.getElementById("radianes").value;
        let grat = rad*180/Math.PI;
        document.getElementById("grados").value = rad;

    }
}

let mostrarocultar = (valorMO) => {
    if (valorMO==="val_mostrar"){
        document.getElementById("divMO").style.display = 'block' ;

    } else if (valorMO==="val_ocultar") {
        document.getElementById("divMO").style.display = 'none' ;
    }
}