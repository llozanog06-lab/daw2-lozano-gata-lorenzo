"use strict";

const prompt = require("prompt-sync")();
const TAMANIOSET = 10;
const NUMMAX = 20;
const VECESREPETIDAS = 5;
let numAciertos = 0;
let miSetNumeros = new Set();
let misAciertos = new Set();

function elegir() {
    while (miSetNumeros.size < TAMANIOSET) {
        let numeroElegido = Math.floor(Math.random() * NUMMAX) + 1;
        miSetNumeros.add(numeroElegido);
    }
}

function comprobar(miSetNumeros, misAciertos, numAciertos, VECESREPETIDAS) {

    for (let i = 0; i < VECESREPETIDAS; i++) {

        let respuesta = prompt("Introduce un número: ");
        let numeroAdivinado = Number(respuesta);

        if (miSetNumeros.has(numeroAdivinado)) {
            numAciertos++;
            console.log("¡Acertaste!");
            misAciertos.add(numeroAdivinado);
        } else {
            console.log("Fallaste");
        }
    }
    console.log("Número de aciertos: " + numAciertos);
    console.log("Tus números acertados son: ");
    misAciertos.forEach(acierto =>{
        console.log(acierto);
    })
}

function main() {
    elegir();
    console.log("Set generado: ", miSetNumeros);
    comprobar(miSetNumeros, misAciertos, numAciertos, VECESREPETIDAS);
}

main();