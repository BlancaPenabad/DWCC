var paisesOceania = ["Australia", "Fiji", "Kiribati", "Islas Cook",
    "Islas Marshall", "Islas Salomón", "Micronesia", "Nauru", "Niue",
    "Nueva Zelanda", "Palaos", "Papúa Nueva Guinea", "Samoa", "Tonga",
    "Tuvalu", "Vanuatu"];




//Muestra el nº de elementos del array:
console.log(" -Nº de países en Oceanía: ");

function numPaises(paises) {
    console.log(paises.length);
}
numPaises(paisesOceania);
console.log("\n\n\n");





//Muestra todos los países:
console.log(" -Países de Oceanía ordenados alfabéticamente: ");

function mostrarPaises(paises) {
    var size = paises.length;
    for (var i = 0; i < size; i++) {
        console.log(paises[i]);
    }
}
mostrarPaises(paisesOceania);
console.log("\n\n\n");




//Muestra todos los países en sentido inverso SIN MODIFICAR EL ARRAY
console.log(" -Países de oceanía ordenados a la inversa:");

function inversa(paises) {
    var ultimo = paises.length - 1;
    for (var i = ultimo; i >= 0; i--) {
        console.log(paises[i]);
    }
}
inversa(paisesOceania);
console.log("\n\n\n");




//Añade un país al comienzo del array:
console.log(" -Añado un país al principio. Resultado:");

function addFirst(pais) {
    paisesOceania.unshift(pais);
}
addFirst("Polinesia Francesa");
mostrarPaises(paisesOceania);
console.log("\n\n\n");




//Añade un país al final del array:
console.log(" -Añado un país al final. Resultado:");
function addLast(pais) {
    paisesOceania.push(pais);
}
addLast("Guam");
mostrarPaises(paisesOceania);
console.log("\n\n\n");




//Elimina un elemento al comienzo del array e indica cual fue:
function delFirst(arr) {
    console.log(" -Elimino el primer país, que es: " + arr.shift() + ". Resultado: ");
}
delFirst(paisesOceania);
mostrarPaises(paisesOceania);
console.log("\n\n\n");




//Elimina un elemento al final del array e indica cual fue:
function delLast(arr) {
    console.log(" -Elimino el último país, que es: " + arr.pop() + ". Resultado:");
}
delLast(paisesOceania);
mostrarPaises(paisesOceania);
console.log("\n\n\n");




//Muestra el elemento que se encuentre en la posición que indique el usuario:
var ind = parseInt(prompt("Ingrese la posición que desea: "));
function findCountry(index, arr) {
    var pais = arr.at(index);
    console.log(" -El país en la posición " + index + " es: " + pais);
}
findCountry(ind, paisesOceania);
console.log("\n\n\n");




//Muestra la posición en la que se encuentre un elemento indicado por el usuario:
var elemento = prompt("Ingrese el país del que desea saber su posición: ");
function findPosition(element, arr) {
    var posicion = arr.indexOf(element);
    if (posicion == -1) {
        console.log("¡ERROR! El país no se encuentra en la lista, asegúrese de escribirlo correctamente.");
    }
    else {
        console.log(" -El país " + element + " se encuentra en la posición " + posicion);
    }
}
findPosition(elemento, paisesOceania);
console.log("\n\n\n");




//Muestra los elementos que se encuentran entre dos posiciones indicadas por el usuario:
var p1 = parseInt(prompt("Ingresa la primera posición: "));
var p2 = parseInt(prompt("Ingresa la segunda posición: "));
function between(pos1, pos2, arr) {
    if (pos1 >= pos2) {
        console.log("¡ERROR! Inténtelo de nuevo.");
    }
    else {
        var entreDos = arr.slice(pos1, pos2);
        console.log(" -Países entre la posición " + pos1 + " y " + pos2 + ": " + entreDos);
    }
}
between(p1, p2, paisesOceania);
console.log("\n\n\n");
