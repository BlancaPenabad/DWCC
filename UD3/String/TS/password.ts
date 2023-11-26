

function long(pass:string):void | boolean{
    let long = pass.length;
    if(long < 8){
        return console.log("Mínimo 8 caracteres.");
    }else if(long > 16){
        return console.log("Máximo 16 caracteres.");
    }else{
        return true;
    }
}


function mayusc(pass:string):void | boolean{
    if(/[A-Z]/.test(pass) == true){
        return true;
    }else{
        return console.log("La contraseña debe incluír alguna mayúscula.");
    }
}


function minusc(pass:string):void | boolean{
    if(/[a-z]/.test(pass) == true){
        return true;
    }else{
        return console.log("La contraseña debe incluír alguna minúscula.");
    }
}


function hasNum(pass:string):void | boolean{
    if(/\d/.test(pass) == true){
        return true;
    }else{
        return console.log("La contraseña debe incluír algún número.");
    }
}


function special(pass:string):void | boolean{
    let carEsp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(carEsp.test(pass) == true){
        return true;
    }else{
        return console.log("La contraseña debe contener al menos un caracter especial.")
    }
}



let passwd:string | null = prompt("Por favor, introduzca una contraseña: ");
long(passwd);
mayusc(passwd);
minusc(passwd);
hasNum(passwd);
special(passwd);