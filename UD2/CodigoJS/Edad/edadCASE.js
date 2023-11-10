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
let edad;
edad= parseInt(prompt("Escribe tu edad:"));
switch(true){
    case(edad>=0 && edad<=12):
        console.log("Neno");
        break;
    case(edad>=13 && edad<=18):
        console.log("Adolescente");
        break;
    case(edad>=19 && edad<=30):
        console.log("Xoven");
        break;
    case(edad>=31 && edad<=64):
        console.log("Adulto");
        break;
    case(edad>=65 && edad<=100):
        console.log("Xubilado");
        break;
    default:
        console.log("Valor incorrecto, por favor introduce un número del 0 al 100.");

}
