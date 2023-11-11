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
let tuEdad:number | null= parseInt(prompt("Escribe tu edad:"));
switch(true){
    case(tuEdad>=0 && tuEdad<=12):
        console.log("Neno");
        break;
    case(tuEdad>=13 && tuEdad<=18):
        console.log("Adolescente");
        break;
    case(tuEdad>=19 && tuEdad<=30):
        console.log("Xoven");
        break;
    case(tuEdad>=31 && tuEdad<=64):
        console.log("Adulto");
        break;
    case(tuEdad>=65 && tuEdad<=100):
        console.log("Xubilado");
        break;
    default:
        console.log("Valor incorrecto, por favor introduce un número del 0 al 100.");

}