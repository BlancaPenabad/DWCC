function isPrime(n:number):void{
    if(n==0 || n ==1 || n==4){
        return console.log("No es primo");
    }

    for(let x = 2; x < n / 2 ; x++){
        if(n% x == 0)
        return console.log("No es primo");

    }
    return console.log("Es primo.");
}

let numero:number | null = parseInt(prompt("Escribe un número:"));
isPrime(numero);