/* Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte:
• Indicar se un número é primo ou non. A entrada de datos podes facela como queiras
(prompt, fixa,...)
 */

function esPrimo(n){
    if(n==0 || n ==1 || n==4){
        return console.log("No es primo");
    }

    for(let x = 2; x < n / 2 ; x++){
        if(n% x == 0)
        return console.log("No es primo");

    }
    return console.log("Es primo.");
}

let num = parseInt(prompt("Escribe un número:"));
esPrimo(num);