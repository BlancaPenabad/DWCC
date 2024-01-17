class Disco {
    //Creación clase Disco y sus atributos:
    nombre;
    grupoCantante;
    anoPublicacion;
    tipoMusica;
    prestado;

    
    constructor(nombre,grupoCantante,anoPublicacion,tipoMusica,prestado){ //Constructor del objeto.
        this.nombre = nombre;
        this.grupoCantante = grupoCantante;
        this.anoPublicacion = anoPublicacion;
        this.tipoMusica = tipoMusica;
        this.prestado = prestado;
    }

    cargarDisco(nombre,grupoCantante,anoPublicacion,tipoMusica,prestado){ //Método que permite crear un nuevo disco
        this.nombre = nombre;
        this.grupoCantante = grupoCantante;
        this.anoPublicacion = anoPublicacion;
        this.tipoMusica = tipoMusica;
        this.prestado = prestado;
    }

     mostrarDatosDisco(){ //Método que muestra los datos (atributos) de un disco.
        return `
        -Nombre disco: ${this.nombre}\n 
        -Grupo:  ${this.grupoCantante}\n 
        -Año de publicación:  ${this.anoPublicacion}\n 
        -Género:  ${this.tipoMusica}\n 
        -Prestado:  ${this.prestado}\n`;
    }
}

console.log("Datos del disco 1:");

let disco1 = new Disco("Born to Die", "Lana del Rey", 2012, "Indie pop", false); //Creo un objeto Disco mediante el constructor.
console.log(disco1.mostrarDatosDisco()); //Ejecuto el método que muestra los datos del disco que acabo de crear.

console.log("\n\n");

let disco2 = new Disco();
disco2.cargarDisco("Arde el cielo", "Maná", 2008, "Rock", true); //Cargo los datos del disco2 mediante el método cargarDisco.
let disco3 = new Disco ("Real Hasta la Muerte", "Anuel AA", 2018, "Trap", false);
let disco4 = new Disco ("Por tu ausencia", "Manzanita", 1999, "Flamenco", true);
let disco5 = new Disco ("Love Deluxe", "Sade", 1992, "Jazz", true);
let disco6 = new Disco ("The Last Don", "Don Omar", 2003, "Reggaeton", false);


let discos = []; //Creo el array de objetos Disco y los añado todos con push.
discos.push(disco1);
discos.push(disco2);
discos.push(disco3);
discos.push(disco4);
discos.push(disco5);
discos.push(disco6);



console.log("Discos guardados:");

discos.forEach((disco => { //Recorro el array de discos y muestro sus nombres y autores
    console.log("-",disco.nombre, " de ", disco.grupoCantante)
}))