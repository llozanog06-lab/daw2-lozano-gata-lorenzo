"use strict";
const prompt = require("prompt-sync")();
let acumulador;
const suma = function(numero, acumulador){
    console.log("HA SELECCIONADO USTED SUMAR");
    return acumulador + numero;
}
const resta = function(numero, acumulador){
    console.log("HA SELECCIONADO USTED RESTAR");
    return acumulador - numero;
}
const multiplicacion = function(numero, acumulador){
    console.log("HA SELECCIONADO USTED LA MULTIPLICACIÓN");
    return acumulador * numero;
}
const division = function(numero, acumulador){
    console.log("HA SELECCIONADO USTED LA DIVISIÓN");
    return parseFloat(acumulador / numero);
}
const mapaFunciones = new Map();
mapaFunciones.set("+", suma);
mapaFunciones.set("-", resta);
mapaFunciones.set("*", multiplicacion);
mapaFunciones.set("/", division);

function menu (acumulador, mapaFunciones){
    acumulador = 0;
    console.log("¡BIENVENIDO A LA CALCULADORA 2.0!");
    console.log("Valor actual de la pantalla: ", acumulador);
    let respuestaUsuario;
    let respuestaUsuarioParseada;
    do{
        respuestaUsuario = prompt("¿Que accion desea usted realizar?: ");
        respuestaUsuarioParseada = respuestaUsuario.trim();
        if (mapaFunciones.has(respuestaUsuarioParseada)){
            const operacion = mapaFunciones.get(respuestaUsuarioParseada);
            let numero = Number(prompt("Introduce el numero con el que deseas operar: "));
            acumulador = operacion(numero, acumulador)

            console.log("Nuevo valor de la pantalla: ", acumulador);
        }

    }while (respuestaUsuario !== "S");

}



function main(){
    menu(acumulador, mapaFunciones);
}

main();