let fechaActual = new Date();
let finCurso = new Date ('06/30/2024');

let diferenciaTiempo:number =   finCurso.getTime() - fechaActual.getTime();

let diferenciaDias:number = Math.ceil((diferenciaTiempo / (1000 * 3600 *24)));
console.log(" Hoy: " + fechaActual.toLocaleDateString()
    + "\n Fin de curso: " + finCurso.toLocaleDateString()
    + "\n Días restantes:" + diferenciaDias);