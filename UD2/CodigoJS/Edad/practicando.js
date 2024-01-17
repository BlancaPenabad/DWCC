

function averiguaEdad(e){
    if(e<18){
        console.log("Menor de edad.");
    }else if(e>=18 && e<65){
        console.log("Mayor de edad.");
    }else if(e>=65 && e<100){
        console.log("Jubilado.");
    }else if(e>=100){
        console.log("Centenario.");
    }else{
        console.log("Valor inválido.")
    }
}

console.log("\n\n\n");
edad = parseInt(prompt("Ingrese su edad: "));
averiguaEdad(edad);

let fruta =  prompt("Manzana, banana o piña... ¿qué prefieres?");
let frutaLower = (fruta.toLowerCase());
switch(frutaLower){
    case("manzana"):
        console.log("Manzanita");
        break;
    
    case("banana"):
    console.log("Bananas en pijamas");
    break;

    case("piña"):
    console.log("Piña pa la niña");
    break;

    default:
        console.log("¡Valor incorrecto!");
        
}