

document.addEventListener("DOMContentLoaded", function() {
    const zonaDibujo = document.getElementById("zonadibujo");
    const paleta = document.getElementById("paleta");
    const pincel = document.getElementById("pincel");

    let color ="";
    let pintando = false;


    paleta.addEventListener("click", function(event) {
        const colorElegido = event.target.classList[0];
        
        if(colorElegido && colorElegido.startsWith("color")) {

            const colorAnterior = document.querySelector(".seleccionado");

            if(colorAnterior){
                colorAnterior.classList.remove("seleccionado");
            }

            color = colorElegido;
            event.target.classList.add("seleccionado");
        }
    });


    function activacionPincel(){
        pintando = !pintando;

        pincel.textContent = pintando ? "PINCEL ACTIVADO" : "PINCEL DESACTIVADO";
    }


    function getColor(colour){
        switch (colour){
            case "color1":
                return "#FF0";
                break;
            case "color2":
                return "#0F0";
                break;
            case "color3":
                return "#000";
                break;
            case "color4":
                return "#F00";
                break;
            case "color5":
                return "#06C";
                break;
            default:
                return "";
        }
    }

    function pintarCelda(celda){
        if(pintando){
            celda.style.backgroundColor = color === "color6" ? "#FFF" : getColor(color);
        }
    }

    const divTablero = document.createElement("div");
    divTablero.id = "contenedor-tablero";
    divTablero.classList.add("divTablero");


    divTablero.style.border = "3px solid black";
    divTablero.style.display = "inline-block";
    divTablero.style.padding = "2px";


    const tablero = document.createElement("div");
    tablero.classList.add("tableroDibujo");

    tablero.style.display = "grid";
    tablero.style.gridTemplateColumns = "repeat(30, 10px)";
    tablero.style.gridTemplateRows = "repeat(30, 10px)";


    for(let i = 0; i<30; i++){
        for(let j = 0; j<30; j++){
            const celda = document.createElement("div");
            celda.classList.add("celda");
            celda.style.width = "10px";
            celda.style.heigth = "10px";
            celda.style.border = "1px solid #ccc";
            tablero.appendChild(celda);

        }
    }

    

    tablero.addEventListener("click", function(event){
        let celdaElegida = event.target.closest('.celda');
        if (!celdaElegida){
            return;
        }
        activacionPincel();
        pintarCelda(celdaElegida);
    });

    tablero.addEventListener("mouseover", function(event){
        let celdaElegida = event.target.closest('.celda');
        if(!celdaElegida){
            return;
        }
        pintarCelda(celdaElegida);
    });

    divTablero.appendChild(tablero);

    zonaDibujo.appendChild(divTablero);

})


