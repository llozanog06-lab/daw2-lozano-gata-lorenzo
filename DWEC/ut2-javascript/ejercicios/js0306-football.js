"use strict"
const prompt = require("prompt-sync")();
const equipo = new Map();

function alistar(equipo){  //función para alistar los jugadores con sus números al mapa
    let nombre;
    let numero;

    do{ //do-while para introducir los datos
        nombre = prompt("Introduce el nombre del jugador (cadena en blanco para finalizar): ");
        if (nombre.trim() !== ""){
            numero = Number(prompt("Introduce el numero: "));
            equipo.set(numero, nombre);
        }
    }while (nombre !== null && nombre.trim() !== "");
}


function mostrar(equipo){ //función que sirve para mostrar el equipo segun el número elegido
    let consulta;
    do{
        consulta = Number(prompt("Introduce el número del jugador que deseas consultar (introduce 0 para terminar): "));
        if (consulta !== 0 ){
            if (equipo.has(consulta)){
                console.log(`El jugador con el número ${consulta}, es ${equipo.get(consulta)}`);
            }else{
                console.log(`No se ha encontrado ningun jugador con el número ${consulta}.`);
            }
        }
    }while (consulta !== 0);
    console.log("Fin del programa, grácias por usar.");
}


function main(){
    alistar(equipo);
    mostrar(equipo);
}

main();