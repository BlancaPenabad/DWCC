
//Los métodos siguientes validan una contraseña. 
//En el caso de no devolver nada por consola, significa que la contraseña es válida.


//Función que controla la longitud de la contraseña
function longitud(pass){
    let long = pass.length;
    if(long < 8){
        return console.log("Mínimo 8 caracteres.");
    }else if(long > 16){
        return console.log("Máximo 16 caracteres.");
    }else{
        return true;
    }
}


//Función que verifica que la contraseña contiene alguna mayúscula
function mayus(pass){
    if(/[A-Z]/.test(pass) == true){
        return true;
    }else{
        return console.log("La contraseña debe incluír alguna mayúscula.");
    }
}


//Función que verifica que la contraseña contiene alguna minúscula
function minus(pass){
    if(/[a-z]/.test(pass) == true){
        return true;
    }else{
        return console.log("La contraseña debe incluír alguna minúscula.");
    }
}


//Función que verifica que la contraseña contiene algún dígito
function tieneNum(pass){
    if(/\d/.test(pass) == true){
        return true;
    }else{
        return console.log("La contraseña debe incluír algún número.");
    }
}


//Función que verifica que la contraseña contiene algún caracter especial
function especial(pass){
    let carEsp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(carEsp.test(pass) == true){
        return true;
    }else{
        return console.log("La contraseña debe contener al menos un caracter especial.")
    }
}



let password = prompt("Por favor, introduzca una contraseña: ");


//El método siguiente funciona bien pero por algún motivo provoca que se repitan algunos return, por ese motivo lo dejo comentado.
/*
function valid(pass){
    if(longitud(pass) == true && mayus(pass) == true && minus(pass) == true && tieneNum(pass) == true && especial(pass) == true){
        return console.log("Su contraseña es válida.")
    }else{
        return console.log("Contraseña inválida:");
     }
    }
    valid(password);
*/

longitud(password);
mayus(password);
minus(password);
tieneNum(password);
especial(password);



