
function iniciar(){
    var boton = document.getElementById("enviar");
    boton.addEventListener("click", enviar);
}

function enviar(){
    var oracion = document.getElementById("oracion").value;
    oracion.trim();
    console.log("ORACION: "+oracion);
    dividirCadena(oracion, " ");
    oracionInversa(oracion, " ");
    ordenarOracion(oracion, " ");
}
function dividirCadena(oracion, separador){
 var array = oracion.split(separador);
   document.write('<p>La oracion original es: "' + oracion + '"');
   document.write("<br>La primera palabra es: " + array[0]);
   document.write("<br>La ultima palabra es: " + array[array.length - 1]);

}

function oracionInversa(oracion, separador){
    var array = oracion.split(separador);
    document.write("<br>La oracion inversa es: ");
    for (var i=array.length-1; i >= 0; i--) {
        document.write(array[i] + " ");
     }
}

function ordenarOracion(oracion, separador){
    var array = oracion.split(separador);
    array.sort();
    document.write("<br>La oracion ordenada de la A a la Z es: ");
    for (var i=0; i < array.length; i++) {
        document.write(array[i] + " ");
    }
    array.reverse();
    document.write("<br>La oracion ordenada de la Z a la A es: ");
    for (var i=0; i < array.length; i++) {
        document.write(array[i] + " ");
    }
}

window.addEventListener("load", iniciar);