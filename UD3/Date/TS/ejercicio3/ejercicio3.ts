const fechaActual = new Date();
const formato = {weekday:'long', year:'numeric', month:'long', day:'numeric'};

let opcion:string | null = parseInt(prompt("Escribe 1 si deseas fecha en formato corto."
+"\nEscribe 2 si deseas la fecha en formato largo."
+"\nEscribe 3 si deseas la fecha en inglés."));

switch(opcion){
    case 1:
        console.log("Fecha actual (corta): " + fechaActual.toLocaleDateString());
        break;
    case 2:
        console.log("Fecha actual (larga): " + fechaActual.toLocaleDateString('locale',formato));
        break;
    case 3:
        console.log("Today's date: " + fechaActual.toLocaleDateString('en-US',formato));
        break;
    default:
        console.log("¡ERROR! Opción no válida.");
}