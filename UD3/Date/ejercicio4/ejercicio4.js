const fechaActual = new Date();

let opcion = parseInt(prompt("Escribe 1 si deseas la hora actual en formato 24h."
+"\nEscribe 2 si deseas la hora actual en formato 12h (AM/PM)."));

function formatoAMPM(date){
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12;
    minutos = minutos < 10 ? '0'+ minutos : minutos;
    let time = horas + ':' + minutos + ' ' + ampm;
    return time;
}

function formato24h(date){
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let tyme = hours + ':' + min + ':' + sec;
    return tyme;
}

switch(opcion){
    case 1:
        console.log("Hora actual (24h): " + formato24h(fechaActual));
        break;
    case 2:
        console.log("Hora actual (AM/PM): " + formatoAMPM(fechaActual));
        break;
    default:
        console.log("¡ERROR! Opción no válida.");
}

