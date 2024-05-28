// Código de validaciones del formulario
let patronNombre = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{1,20}$/;
let patronApellido= /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{1,40}$/;
let patronCorreo = /^[\w._%+-]+@[\w._%+-]+\.(com|net|es|gal|org)$/;
let patronUsuario =/^[\w]{1,20}$/;
let patronClave =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let patronTelefono =/\d{9}$/;


/*A continuación se realizan todas las validaciones de los datos.
Los datos erróneos generarán un aviso por consola.*/
function validarNombre(nombre){
    if(!patronNombre.test(nombre)){
        console.log("¡Sólo caracteres alfabéticos!");
        return false;
    }
    return true;
}

function validarApellidos(apellidos){
    if(!patronApellido.test(apellidos)){
        console.log("¡Sólo caracteres alfabéticos!");
        return false;
    }
    return true;
}

function validarCorreo(correo){
    if(!patronCorreo.test(correo)){
        console.log("Formato de email incorrecto. Sólo caracteres alfanuméricos antes y después del símbolo @ y terminar en .com|.net|.es|.gal|.org.");
        return false;
    }
    return true;
}

function validarUsuario(usuario){
    if(!patronUsuario.test(usuario)){
        console.log("¡Sólo letras y números!");
        return false;
    }
    return true;
}

function validarClave(clave){
    if(!patronClave.test(clave)){
        console.log("La clave debe contener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        return false;
    }
    return true;
}

function validarTelefono(tlf){
    if(!patronTelefono.test(tlf)){
        console.log("Longitud máxima 9 números.");
        return false;
    }
    return true;
}

//Método para validar el formulario entero:
function validarFormulario(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let telefono = document.getElementById("telefono").value;

    if(
        validarNombre(nombre) && validarApellidos(apellidos) && validarCorreo(correo) &&
        validarUsuario(usuario) && validarClave(clave) && validarTelefono(telefono)
    ){
        return true;
    }
    return false;
}



// Envio de datos con XMLHttpRequest
function sendData(){
    let peticion = new XMLHttpRequest(); //Creo el objeto XMLHttpRequest
    let data = new FormData(document.getElementById("formulario")); //Creo el objeto FormData donde almaceno todos los datos del formulario

    peticion.open("POST", "php/registrar.php", true); //Creo la petición asíncrona.
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    peticion.onreadystatechange = function(){
        if(peticion.readyState === XMLHttpRequest.DONE){
            if(peticion.status === 200){ //Si el estado de la petición es OK... ejecuta todo lo de abajo:
                document.getElementById("info-respuesta").style.display = "block";
                document.getElementById("respuesta-servidor").innerHTML = peticion.responseText;
            }else{
                alert("No se han podido envíar los datos.");
            }
        }
    };

    //A continuación envío los datos:
    peticion.send(
        "nombre=" + data.get("nombre") + "&" +
        "apellidos=" + data.get("apellidos") + "&" +
        "telefono=" + data.get("telefono") + "&" +
        "correo=" + data.get("correo") + "&" +
        "usuario=" + data.get("usuario") + "&" +
        "clave=" + data.get("clave")
    );
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("formulario").addEventListener("submit", function(event){
        event.preventDefault();
        if(validarFormulario()){
            sendData();
        }else{
            alert("Ha ocurrido un error. Formulario incorrecto.");
        }
    });
});