/*
Crea un programa que pida ao usuario que introduza unha idade e amose a seguinte mensaxe en
función do número introducido:
• 0-12: neno
• 13-18: adolescente
• 19-30: xoven
• 31-64: adulto
• 65-100: xubilado
Controla os casos de erro tamén.
*/
function age(e) {
    if (e >= 0 && e <= 12) {
        return console.log("Neno");
    }
    else if (e >= 13 && e <= 18) {
        return console.log("Adolescente");
    }
    else if (e >= 19 && e <= 30) {
        return console.log("Xoven");
    }
    else if (e >= 31 && e <= 64) {
        return console.log("Adulto");
    }
    else if (e >= 65 && e <= 100) {
        return console.log("Xubilado");
    }
    else {
        return console.log("Número incorrecto, por favor introduce un número del 0 al 100.");
    }
}
var years = parseInt(prompt("Escribe tu edad:"));
age(years);
