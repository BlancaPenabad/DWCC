/*
Tendo en conta que cando desprazamos 1 bit á dereita facemos a división enteira por 2 e cando o
desprazamos á esquerda estamos multiplicando por 2, imprime tamén o resultado das seguintes
operacións empregando desprazamento de bits. Podes mesturar operadores de asignación e tamén
operadores propios de bit a bit.
*/
console.log("DIVISIONES Y MULTIPLICACIONES CON DESPLAZAMIENTO DE BITS:");
var A = 125 >> 3;
var B = 40 << 2;
var C = 25 >> 1;
var D = 10 << 4;
console.log("125/8 = " + A);
console.log("40x4 = " + B);
console.log("25/2 = " + C);
console.log("10x16 = " + D);
