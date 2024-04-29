
/*
Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y
mostrar un mensaje en el contenedor "intentos" similar a: "Intento de Envíos del formulario: X". Es
decir cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y
mostrar su contenido en el div antes mencionado. Nota: para poder actualizar el contenido de un
contenedor o div la propiedad que tenemos que modificar para ese objeto es innerHTML.
*/



/*
Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya
escrito en esos campos se convertirá a mayúsculas. Realizar una función que valide los
campos de texto NOMBRE y APELLIDOS. Si se produce algún error mostrar el mensaje en
el contenedor "errores" y poner el foco en los campos correspondientes.
*/
//Accedo a la propiedad value de nombre y apellidos y le asigno su contenido
//actual convertido a mayúsculas con el método toUpperCase()
const convertirMayusculas = () => {
    document.getElementById("nombre").value=document.getElementById("nombre").value.toUpperCase();
    document.getElementById("apellidos").value=document.getElementById("apellidos").value.toUpperCase();
}

let patronNombreApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

const validarNombre = () => {
    let nombre = document.getElementById("nombre");

    if(!nombre.value){
        errores("Nombre obligatorio.");
        nombre.focus();
    }else if (!patronNombreApellido.exec(nombre.value)){
        errores("Nombre inválido.");
        nombre.focus();

    }
}

const validarApellido = () => {
    let apellidos = document.getElementById("apellidos");

    if(!apellidos.value){
        errores("Apellidos obligatorios.");
        apellidos.focus();
    }else if (!patronNombreApellido.exec(apellidos.value)){
        errores("Apellido inválido.");
        apellidos.focus();

    }

}



/*
Validar la EDAD que contenga solamente valores numéricos y que esté en el rango de 0 a
105. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco
en el campo EDAD.
*/
let patronEdad =/^[0-9]+$/;

const validarEdad = () => {
    let edad = document.getElementById("edad");

    if(!edad.value){
        errores("Edad obligatoria.");
        edad.focus();
    }else if(!patronEdad.exec(edad.value)){
        errores("Edad inválida. Sólo números.");
        edad.focus();
    }else if(edad.value<0 || edad.value>105){
        errores("Edad inválida.");
        edad.focus();
    }
}



/*
Validar el NIF. Utilizar una expresión regular que permita solamente 8 números un guión y
una letra. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el
foco en el campo NIF. No es necesario validar que la letra sea correcta. Explicar las partes de
la expresión regular mediante comentarios.
*/
let patronDni = /^[0-9]{8}[A-Z]$/i;

const validarDni = () => {
    let dni = document.getElementById("nif");

    if(!dni.value){
        errores("DNI obligatorio.");
        dni.focus();
    }else if (!(dni.value).match(patronDni)){
        errores("DNI inválido. Formato incorrecto.");
        dni.focus();
    }
}



/*
Validar el E-MAIL. Utilizar una expresión regular que nos permita comprobar que el e-mail
sigue un formato correcto. Si se produce algún error mostrar el mensaje en el contenedor
"errores" y poner el foco en el campo E-MAIL. Explicar las partes de la expresión regular
mediante comentarios.
*/
let patronEmail = /\S+@\S+\.\S+/;
// \S es un caracter distinto de espacio en blanco
//+ es uno o más
//Seguido de un @
//Seguido de otro \S+ (uno o más caracteres distintos de espacio en blanco)
//Seguido de un punto .
//Seguido de \S+

const validarEmail = () => {
    let email = document.getElementById("email");
    if(!email.value){
        errores("Email obligatorio.");
        email.focus();
    }else if(!(email.value).match(patronEmail)){
        errores("Formato de email NO válido.");
        email.focus();
    }
}



/*
Validar que se haya seleccionado alguna de las PROVINCIAS. Si se produce algún error
mostrar el mensaje en el contenedor "errores" y poner el foco en el campo PROVINCIA.
*/
const validarProvincia = () => {
    let provincia = document.getElementById("provincia");
    if(provincia.value === "0"){
        errores("Obligatorio seleccionar una provincia.")
        provincia.focus();
}
}




/*
Validar el campo FECHA utilizando una expresión regular. Debe cumplir alguno de los
siguientes formatos: dd/mm/aaaa o dd-mm-aaaa. No se pide validar que sea una fecha de
calendario correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores"
y poner el foco en el campo FECHA. Explicar las partes de la expresión regular mediante
comentarios.
*/ 
let patronFecha = /^\d{2}[-/]\d{2}[-/]\d{4}$/;

const validarFecha = () => {
    let fecha = document.getElementById("fecha");
    if(!fecha.value){
        errores("Fecha oligatoria");
        fecha.focus();
    }else if (!(fecha.value).match(patronFecha)){
        errores("Formato de fecha NO válido.");
        fecha.focus();
    }
}




/*
Validar el campo TELEFONO utilizando una expresión regular. Debe permitir 9 dígitos
obligatorios. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner
el foco en el campo TELEFONO. Explicar las partes de la expresión regular mediante
comentarios
*/

let patronTlf = /^\d{9}$/;

const validarTlf = () => {
    let tlf = document.getElementById("telefono");
    if(!tlf.value){
        errores("Teléfono obligatorio.");
        tlf.focus();
    }else if(!(tlf.value).match(patronTlf)){
        errores("El número de teléfono no es válido.");
        tlf.focus();
    }
}



/*
Validar el campo HORA utilizando una expresión regular. Debe seguir el patrón de hh:mm.
No es necesario validar que sea una hora correcta. Si se produce algún error mostrar el
mensaje en el contenedor "errores" y poner el foco en el campo HORA. Explicar las partes de
la expresión regular mediante comentarios.
*/

let patronHora = /^(\d{2}):(\d{2})$/;

const validarHora = () => {
    let hora = document.getElementById("hora");
    if(!hora.value){
        errores("Hora obligatoria.");
        hora.focus();
    }else if(!(hora.value).match(patronHora)){
        errores("El formato de hora NO es válido");
        hora.focus();
    }
}


//Función que muestra mensaje de error:
function errores (mensaje){
    const errors = document.getElementById("errores");
    if(errors){
        errors.innerHTML = mensaje;
    }else{
        return false;
    }
}

/*
document.getElementById("formulario").addEventListener("submit", function (event)){
    this.event.preventDefault();
    if(!errores()){
        let confirmacion = confirm("¿Desea enviar este formulario?");
        if(confirmacion){
            this.submit();
        }
    }
}*/