
let paisesOceania = ["Australia", "Fiji", "Kiribati", "Islas Cook", 
"Islas Marshall", "Islas Salomón", "Micronesia", "Nauru", "Niue",
"Nueva Zelanda", "Palaos", "Papúa Nueva Guinea", "Samoa", "Tonga",
"Tuvalu", "Vanuatu"];



//Muestra el nº de elementos del array:
console.log(" -Nº de países en Oceanía: ");

function numPaises(){
    console.log(paisesOceania.length);
}
numPaises();
console.log("\n\n\n");




//Muestra todos los países:
console.log(" -Países de Oceanía ordenados alfabéticamente: ");

function mostrarPaises(){
    let size = paisesOceania.length;
    for(let i=0; i<size; i++ ){
        console.log(paisesOceania[i])
    }
}
mostrarPaises();
console.log("\n\n\n");




//Muestra todos los países en sentido inverso SIN MODIFICAR EL ARRAY
console.log(" -Países de oceanía ordenados a la inversa:");

function inversa(){
    let ultimo = paisesOceania.length-1;
    for(let i=ultimo; i>=0; i--){
        console.log(paisesOceania[i]);
    }
}
inversa();
console.log("\n\n\n");




//Añade un país al comienzo del array:
console.log(" -Añado un país al principio. Resultado:");

function addFirst(pais){
    paisesOceania.unshift(pais);
    
}
addFirst("Polinesia Francesa");
mostrarPaises();
console.log("\n\n\n");




//Añade un país al final del array:
console.log(" -Añado un país al final. Resultado:");

function addLast(pais){
    paisesOceania.push(pais);
   
}
addLast("Guam");
mostrarPaises();
console.log("\n\n\n");




//Elimina un elemento al comienzo del array e indica cual fue:

function delFirst(arr){
    console.log(" -Elimino el primer país, que es: " + arr.shift() + ". Resultado: ");
}
delFirst(paisesOceania);
mostrarPaises();
console.log("\n\n\n");




//Elimina un elemento al final del array e indica cual fue:

function delLast(arr){
console.log(" -Elimino el último país, que es: " + arr.pop() + ". Resultado:");
}
delLast(paisesOceania);
mostrarPaises();
console.log("\n\n\n");




//Muestra el elemento que se encuentre en la posición que indique el usuario:

let ind = prompt("Ingrese la posición que desea: ");

function findCountry(index){
    let pais = paisesOceania.at(index);
    console.log(" -El país en la posición "+ index + " es: " + pais);
}
findCountry(ind);
console.log("\n\n\n");




//Muestra la posición en la que se encuentre un elemento indicado por el usuario:

let elemento = prompt("Ingrese el país del que desea saber su posición: ");

function findPosition(element){
    let posicion = paisesOceania.indexOf(element);
        if (posicion == -1){
            console.log("¡ERROR! El país no se encuentra en la lista, asegúrese de escribirlo correctamente.")
        }else{
            console.log(" -El país "+ element + " se encuentra en la posición " + posicion);
        }
}
findPosition(elemento);
console.log("\n\n\n");




//Muestra los elementos que se encuentran entre dos posiciones indicadas por el usuario:
let p1 = prompt("Ingresa la primera posición: ");
let p2 = prompt("Ingresa la segunda posición: ");

function between(pos1, pos2){
    if(pos1>=pos2){
        console.log("¡ERROR! Inténtelo de nuevo.");
    }else{
        let entreDos = paisesOceania.slice(pos1, pos2);
        console.log(" -Países entre la posición "+ pos1 + " y "+ pos2 + ": " + entreDos);
    }
}
between(p1,p2);
console.log("\n\n\n");
