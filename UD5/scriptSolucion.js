let fallos = "";

const limpiar = () => {

}

const validar = () => {
    validarNombre();
    validarApellido(); 
    validarEdad(); 
    validarDni(); 
    validarTlf(); 
    validarEmail(); 
    validarHora(); 
    validarFecha(); 
    validarProvincia();
}

// OnBlur

const convertirMayusculas = () => {
    document.getElementById("nombre").value=document.getElementById("nombre").value.toUpperCase();
    document.getElementById("apellidos").value=document.getElementById("apellidos").value.toUpperCase();
}

// Validaciones

const validarNombre = () => {
    convertirMayusculas();
    let patronNombreApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let nombre = document.getElementById("nombre");

    if(!nombre.value){
        errores("Nombre obligatorio.");
        fallos = "Nombre obligatorio.";
        nombre.focus();
    }else if (!patronNombreApellido.exec(nombre.value)){
        errores("Nombre inválido.");
        fallos = "Nombre obligatorio.";
        nombre.focus();

    }
}

const validarApellido = () => {
    let patronNombreApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let apellidos = document.getElementById("apellidos");

    if(!apellidos.value){
        errores("Apellidos obligatorios.");
        fallos = "Apellidos obligatorios.";
        apellidos.focus();
    }else if (!patronNombreApellido.exec(apellidos.value)){
        errores("Apellido inválido.");
        fallos = "Apellidos obligatorios.";
        apellidos.focus();

    }
}

const validarEdad = () => {
    let patronEdad =/^[0-9]+$/;
    let edad = document.getElementById("edad");

    if(!edad.value){
        errores("Edad obligatoria.");
        fallos = "Edad obligatoria.";
        edad.focus();
    }else if(!patronEdad.exec(edad.value)){
        errores("Edad inválida. Sólo números.");
        fallos = "Edad obligatoria.";
        edad.focus();
    }else if(edad.value<0 || edad.value>105){
        errores("Edad inválida.");
        fallos = "Edad obligatoria.";
        edad.focus();
    }
}

const validarDni = () => {
    let patronDni = /^[0-9]{8}[A-Z]$/i;
    let dni = document.getElementById("nif");

    if(!dni.value){
        errores("DNI obligatorio.");
        fallos = "DNI obligatorio.";
        dni.focus();
    }else if (!(dni.value).match(patronDni)){
        errores("DNI inválido. Formato incorrecto.");
        fallos = "DNI obligatorio.";
        dni.focus();
    }
}

const validarEmail = () => {
    let patronEmail = /\S+@\S+\.\S+/;
    let email = document.getElementById("email");
    if(!email.value){
        errores("Email obligatorio.");
        fallos = "Email obligatorio.";
        email.focus();
    }else if(!(email.value).match(patronEmail)){
        errores("Formato de email NO válido.");
        fallos = "Formato de email NO válido.";
        email.focus();
    }
}

const validarProvincia = () => {
    let provincia = document.getElementById("provincia");
    if(provincia.value === "0"){
        errores("Obligatorio seleccionar una provincia.")
        fallos = "Obligatorio seleccionar una provincia.";
        provincia.focus();
    }
}

const validarFecha = () => {
    let patronFecha = /^\d{2}[-/]\d{2}[-/]\d{4}$/;
    let fecha = document.getElementById("fecha");
    if(!fecha.value){
        errores("Fecha oligatoria");
        fallos = "Fecha oligatoria";
        fecha.focus();
    }else if (!(fecha.value).match(patronFecha)){
        errores("Formato de fecha NO válido.");
        fallos = "Fecha oligatoria";
        fecha.focus();
    }
}

const validarTlf = () => {
    let patronTlf = /^\d{9}$/;
    let tlf = document.getElementById("telefono");
    if(!tlf.value){
        errores("Teléfono obligatorio.");
        fallos = "Teléfono obligatorio.";
        tlf.focus();
    }else if(!(tlf.value).match(patronTlf)){
        errores("El número de teléfono no es válido.");
        fallos = "Teléfono obligatorio.";
        tlf.focus();
    }
}

const validarHora = () => {
    let patronHora = /^(\d{2}):(\d{2})$/;
    let hora = document.getElementById("hora");
    if(!hora.value){
        errores("Hora obligatoria.");
        fallos = "Hora obligatoria.";
        hora.focus();
    }else if(!(hora.value).match(patronHora)){
        errores("El formato de hora NO es válido");
        fallos = "El formato de hora NO es válido";
        hora.focus();
    }
}


//Función que muestra mensaje de error:
function errores (mensaje){    
    document.getElementById("formulario").addEventListener("submit", function (event){
        event.preventDefault();
        console.log(fallos);
        if(fallos === ""){
            let confirmacion = confirm("¿Desea enviar este formulario?");
            if(confirmacion){
                this.submit();
            }
        }
    });

    const errors = document.getElementById("errores");
    if(errors){
        errors.innerHTML = mensaje;
    }else{
        return false;
    }
}