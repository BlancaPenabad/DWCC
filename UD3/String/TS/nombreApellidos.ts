let nombreApellido:string | null = prompt("Por favor, introduzca su nombre y apellidos: ");


//Función que cuenta caracteres:
function count(name:string):void{
     console.log("Ha introducido "+ name.length +" caracteres.") ;
}
count(nombreApellido);


//Función que cuenta caracteres SIN espacios:
function countSin(name:string):void{
    console.log("Su nombre tiene un total de "+ name.replace(/\s/g, "").length+" caracteres.") ;
}
countSin(nombreApellido);


//Función que pasa a minúsculas:
function minusc(name:string):void{
    console.log("Su nombre en minúsculas: "+ name.toLowerCase()) ;

}
minusc(nombreApellido);

//Función que pasa a mayúsculas:
function mayusc(name:string):void{
    console.log("Su nombre en mayúsculas: "+ name.toUpperCase()) ;

}
mayusc(nombreApellido);

//Función que secciona el nombre y devuelve "nombre, apellido1 y apellido2.":
function section(name:string):void{
    let miArray: string[] = name.split(" ");
    console.log(miArray[0] + ", "+miArray[1] + " y "+ miArray[2] + ".");
}
section(nombreApellido);

//Función que crea un nombre de usuario:
function prop(name:string):void{
    let miArray: string[] = name.split(" ");
    let apIni = miArray[1].slice(0,1);
    let apInii = miArray[2].slice(0,1);
    console.log("Su nombre de usuario es: "+miArray[0].toLowerCase()+apIni+apInii);
}
prop(nombreApellido);