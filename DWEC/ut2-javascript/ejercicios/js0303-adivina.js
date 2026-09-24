"use strict";
//Declaración de variables iniciales
const prompt = require("prompt-sync")();
const TAMANIOSET = 10;
const NUMMAX = 20;
const VECESREPETIDAS = 5;
let numAciertos = 0;
let miSetNumeros = new Set();
let misAciertos = new Set();

function elegir() {  //función que selecciona el set de números que se utiliza en el ejercicio
    while (miSetNumeros.size < TAMANIOSET) {
        let numeroElegido = Math.floor(Math.random() * NUMMAX) + 1;
        miSetNumeros.add(numeroElegido);
    }
}

function comprobar(miSetNumeros, misAciertos, numAciertos, VECESREPETIDAS) { //función que comprueba el numero de aciertos y los numeros acertados

    for (let i = 0; i < VECESREPETIDAS; i++) {

        let respuesta = prompt("Introduce un número: ");
        let numeroAdivinado = Number(respuesta);

        if (miSetNumeros.has(numeroAdivinado)) { //Sentencia if que suma el número de aciertos e introduce el numero en el set de aciertos
            numAciertos++;
            console.log("¡Acertaste!");
            misAciertos.add(numeroAdivinado);
        } else {
            console.log("Fallaste");
        }
    }
    console.log("Número de aciertos: " + numAciertos);
    console.log("Tus números acertados son: ");
    misAciertos.forEach(acierto =>{ //forEach que sirve para mostrar uno por uno los números acertados
        console.log(acierto);
    })
}

function main() {
    elegir();
    console.log("Set generado: ", miSetNumeros); //Solo para comprobar el set que se ha generado
    comprobar(miSetNumeros, misAciertos, numAciertos, VECESREPETIDAS);
}

main();