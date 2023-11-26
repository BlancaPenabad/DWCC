
let newWindow;

//Función para abir una ventana nueva con las propiedades y el HTML que pide el ejercicio:
function abrir(){
    newWindow = window.open("","","width=300 ,height=400 , menubar=no, toolbar=no");
    if (newWindow){
        newWindow.document.write(`<h3>Ejemplo de ventana nueva</h3> 
        <p>URL: ${window.location.href}
        </p> <p>Protocolo: ${window.location.protocol}</p> 
        <p>Navegador: ${navigator.userAgent}</p> 
        <p>Java: ${navigator.javaEnabled ? "Si" : "No"}</p>`);
        newWindow.focus();
    }
}

//Función para cerrar la página nueva desde la original:
function cerrar(){
    if(newWindow){
        newWindow.close();
        checkCierre();
    }else{
        checkCierre()
    }
}

//Función para confirmar el permiso del usuario para abrir una nueva ventana. 
//Si el usuario acepta, se ejecuta la función abrir()
function confirmar(){
    let respuesta = window.confirm("¿Deseas abrir otra ventana?");
    if (respuesta == true){
        abrir();
    } else{
        newWindow = window.alert("Operación cancelada.");
    }
}

//Función para alertar de que la ventana nueva ha sido cerrada.
function checkCierre(){
    if(newWindow.closed){
        newWindow = window.alert("ERROR. La ventana se ha cerrado.");
    }
}

//Para que la nueva ventana siempre esté visible, utilizo el método focus() en todas las funciones siguientes:

//Función que redimensiona la ventana a 500x500 píxeles
function redimensionar(){
    newWindow.resizeTo(500,500);
    newWindow.focus();
}

//Función que aumenta el tamaño de la ventana 50x50 píxeles
function aumentar(){
    newWindow.resizeBy(50,50);
    newWindow.focus();

}

//Función que desplaza la ventana a las coordenadas 500 y 100
function desplazar(){
    newWindow.moveTo(500,100);
    newWindow.focus();

}