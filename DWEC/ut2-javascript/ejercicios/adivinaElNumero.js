const prompt = require("prompt-sync")();
const INTENTOS = 10;
const NUMMAX = 10;
let NUMEROELEGIDO = null;
let fin = false;

function elegir (){
    NUMEROELEGIDO = Math.floor(Math.random() * NUMMAX) + 1;
}

function comprobar (NUMEROELEGIDO, INTENTOS, fin){
    while (fin == false){
        if (INTENTOS == 0){
            console.log("Te has quedado sin intentos");
            fin = true;
        }else{
            let resupuesta = prompt("Adivina el numero: ");
            numeroAdivinado = Number(resupuesta);
            if (numeroAdivinado > NUMEROELEGIDO){
                console.log("El numero es mas pequeño");
                INTENTOS = INTENTOS - 1;
            } else if (numeroAdivinado < NUMEROELEGIDO){
                console.log("El numero es mas grande");
                INTENTOS = INTENTOS - 1;
            }else{
                console.log("HAS ACERTADO");
                console.log("Número de intentos restantes: " + INTENTOS);
                fin = true;
            }
        }
    }
}

function main (){
    elegir();
    comprobar(NUMEROELEGIDO, INTENTOS, fin);
}

main();