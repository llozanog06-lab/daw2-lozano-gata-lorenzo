"use strict"
const prompt = require("prompt-sync")();
const equipo = new Map();

function alistar(equipo){
    let nombre;
    let numero;

    do{
        nombre = prompt("Introduce el nombre del jugador: ");
        if (nombre.trim() !== ""){
            numero = Number(prompt("Introduce el numero: "));
            equipo.set(numero, nombre);
        }
    }while (nombre !== null && nombre.trim() !== "");
}


function mostrar(equipo){
    let consulta;
    do{
        consulta = Number(prompt("Introduce el número del jugador que deseas consultar: "));
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