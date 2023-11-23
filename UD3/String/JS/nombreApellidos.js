
let nombreApellidos = prompt("Por favor, introduzca su nombre y apellidos: ");


//Función que cuenta caracteres:
function contar(name){
    console.log("Ha introducido "+ name.length +" caracteres.") ;
}
contar(nombreApellidos);


//Función que cuenta caracteres SIN espacios:
function contarSin(name){
    console.log("Su nombre tiene un total de "+ name.replace(/\s/g, "").length+" caracteres.") ;
}
contarSin(nombreApellidos);


//Función que pasa a minúsculas:
function minus(name){
    console.log("Su nombre en minúsculas: "+ name.toLowerCase()) ;

}
minus(nombreApellidos);

//Función que pasa a mayúsculas:
function mayus(name){
    console.log("Su nombre en mayúsculas: "+ name.toUpperCase()) ;

}
mayus(nombreApellidos);

//Función que secciona el nombre y devuelve "nombre, apellido1 y apellido2.":
function seccionar(name){
    let miArray = name.split(" ");
    console.log(miArray[0] + ", "+miArray[1] + " y "+ miArray[2] + ".");
}
seccionar(nombreApellidos);

//Función que crea un nombre de usuario:
function propuesta(name){
    let miArray = name.split(" ");
    let apIni = miArray[1].slice(0,1);
    let apInii = miArray[2].slice(0,1);
    console.log("Su nombre de usuario es: "+miArray[0].toLowerCase()+apIni+apInii);
}
propuesta(nombreApellidos);