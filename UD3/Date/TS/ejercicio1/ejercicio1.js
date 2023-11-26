var fechaActual = new Date();
var finCurso = new Date('06/30/2024');
var diferenciaTiempo = finCurso.getTime() - fechaActual.getTime();
var diferenciaDias = Math.ceil((diferenciaTiempo / (1000 * 3600 * 24)));
console.log(" Hoy: " + fechaActual.toLocaleDateString()
    + "\n Fin de curso: " + finCurso.toLocaleDateString()
    + "\n Días restantes:" + diferenciaDias);
