const iniciarIntentos = () => {
  setCookie("intentos", "0");
};

const intentos = () => {
  let numIntentos = getCookie("intentos");
  numIntentos++;
  setCookie("intentos", numIntentos);
  document.getElementById("intentos").innerHTML =
    "Número de intentos:" + numIntentos;
};

<<<<<<< HEAD
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
=======
>>>>>>> 7b60f602854b85455430e87113bbfd879d78f37b
const convertirMayusculas = () => {
  document.getElementById("nombre").value = document
    .getElementById("nombre")
    .value.toUpperCase();
  document.getElementById("apellidos").value = document
    .getElementById("apellidos")
    .value.toUpperCase();
};

const validarNombre = () => {
  ocultarAviso();
  convertirMayusculas();
  let nombre = document.getElementById("nombre");

  if (!nombre.value) {
    errores("Nombre obligatorio.");
    return false;
  } else if (!patronNombreApellido.exec(nombre.value)) {
    errores("Nombre inválido.");
    return false;
  }

  return true;
};

const validarApellido = () => {
  ocultarAviso();
  convertirMayusculas();
  let apellidos = document.getElementById("apellidos");

  if (!apellidos.value) {
    errores("Apellidos obligatorios.");
    return false;
  } else if (!patronNombreApellido.exec(apellidos.value)) {
    errores("Apellido inválido.");
    return false;
  }

  return true;
};

const validarEdad = () => {
  ocultarAviso();
  let edad = document.getElementById("edad");

  if (!edad.value) {
    errores("Edad obligatoria.");
    return false;
  } else if (!patronEdad.exec(edad.value)) {
    errores("Edad inválida. Sólo números.");
    return false;
  } else if (edad.value < 0 || edad.value > 105) {
    errores("Edad inválida.");
    return false;
  }

  return true;
};

const validarDni = () => {
  ocultarAviso();
  let dni = document.getElementById("nif");

  if (!dni.value) {
    errores("DNI obligatorio.");
    return false;
  } else if (!dni.value.match(patronDni)) {
    errores("DNI inválido. Formato incorrecto.");
    return false;
  } else if (!validarLetraDni(dni.value)) {
    errores("DNI inválido. La letra no coincide.");
    return false;
  }

  return true;
};

const validarLetraDni = (dni) => {
  let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let numero = dni.substring(0, 8);
  let letra = dni.substring(8).toUpperCase();
  let resto = numero % 23;

  return letra === letras.charAt(resto);
};

const validarEmail = () => {
  ocultarAviso();
  let email = document.getElementById("email");
  if (!email.value) {
    errores("Email obligatorio.");
    return false;
  } else if (!email.value.match(patronEmail)) {
    errores("Formato de email NO válido.");
    return false;
  }

  return true;
};

const validarProvincia = () => {
  ocultarAviso();
  let provincia = document.getElementById("provincia");
  if (provincia.value === "0") {
    errores("Obligatorio seleccionar una provincia.");
    return false;
  }

  return true;
};

const validarFecha = () => {
  ocultarAviso();
  let fecha = document.getElementById("fecha");
  if (!fecha.value) {
    errores("Fecha oligatoria");
    return false;
  } else if (!fecha.value.match(patronFecha)) {
    errores("Formato de fecha NO válido.");
    return false;
  }

  return true;
};

const validarTlf = () => {
  ocultarAviso();
  let tlf = document.getElementById("telefono");
  if (!tlf.value) {
    errores("Teléfono obligatorio.");
    return false;
  } else if (!tlf.value.match(patronTlf)) {
    errores("El número de teléfono no es válido.");
    return false;
  }

  return true;
};

const validarHora = () => {
  ocultarAviso();
  let hora = document.getElementById("hora");
  if (!hora.value) {
    errores("Hora obligatoria.");
    return false;
  } else if (!hora.value.match(patronHora)) {
    errores("El formato de hora NO es válido");
    return false;
  }

  return true;
};

//Función que muestra mensaje de error:
function errores(mensaje) {
  const errors = document.getElementById("errores");
  if (errors) {
    errors.innerHTML = mensaje;
    mostrarAviso();
  } else {
    return false;
  }
}

const validar = () => {
  intentos();
  event.preventDefault();
  ocultarAviso();
  if (
    validarNombre() &&
    validarApellido() &&
    validarEdad() &&
    validarDni() &&
    validarTlf() &&
    validarEmail() &&
    validarHora() &&
    validarFecha() &&
    validarProvincia()
  ) {
    if (confirm("¿Estás seguro de enviar los datos?")) {
      document.getElementById("formulario").submit();
    }
  }
};
