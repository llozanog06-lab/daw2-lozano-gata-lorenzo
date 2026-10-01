"use strict"
const prompt = require("prompt-sync")();
let acumulador;
let memoria;

//FUNCIÓN MENÚ QUE CONTIENE EL PROGRAMA Y EL SWITCH
function menu (acumulador, memoria){
    acumulador = 0;
    console.log("Bienvenido a la calculadora JS");
    console.log("Para salir del programa introduzca S");
    let respuestaUsuario;
    do{
        respuestaUsuario = prompt("Introduzca la operacion que quiere realizar: ");
        console.log("Valor actual de la pantalla: ", acumulador)
        //SWITCH CON LAS SENTENCIAS CORRESPONDIENTES
        switch (respuestaUsuario){
        case "S":
            console.log("Fin del programa muchas gracias");
            break;
        case "+":
            console.log("Usted acaba de seleccionar la suma:");
            let a = Number(prompt("Introduce el valor a sumar con la pantalla: "));
            acumulador = (suma(acumulador, a));
            console.log("Nuevo valor de la pantalla: ", acumulador);
            break;
        case "-":
            console.log("Usted acaba de seleccionar la resta: ");
            let b = Number(prompt("Introduce el valor a restar con la pantalla: "));
            acumulador = (resta(acumulador, b));
            console.log("Nuevo valor de la pantalla: ", acumulador);
            break;
        case "*":
            console.log("Usted acaba de seleccionar multiplicación: ");
            let c = Number(prompt("Introduce el valor a multiplicar con la pantalla: "));
            acumulador = (multi(acumulador, c));
            console.log("Nuevo valor de la pantalla: ", acumulador);
            break;
        case "/":
            console.log("Usted acaba de seleccionar la división: ");
            let d = Number(prompt("Seleccione el valor con el que desea dividir con la pantalla: "));
            acumulador = (div(acumulador, d));
            console.log("Nuevo valor de la pantalla: ", acumulador);
            break;
        case "%":
            console.log("Usted acaba de seleccionar el tanto por ciento: ");
            let e = Number(prompt("Seleccione el valor para aplicar el tanto por ciento: "));
            acumulador = (porCiento(acumulador, e));
            console.log("Nuevo valor de la pantalla: ", acumulador);
            break;
        case "^":
            console.log("Usted ha seleccionado la función de elevar: ");
            let f = Number(prompt("Seleccione el valor con el que se va a elevar: "));
            acumulador = (elevar(acumulador, f));
            console.log("Nuevo valor de la pantalla: ", acumulador);
            break;
        case "f":
            console.log("Usted ha seleccionado la función factorial: ");
            acumulador = (fact(acumulador));
            console.log("Nuevo valor de la pantalla: ", acumulador);
            break;
        case "M":
            console.log("Usted ha seleccionado la opción de guardar el resultado en la memoria: ");
            memoria = acumulador;
            console.log("El valor se ha guardado en la memoria con éxito");
            break;
        case "R":
            console.log("Usted ha seleccionado la función de cargar el valor de la memoria: ");
            acumulador = memoria;
            console.log("El valor se ha cargado con exito.");
            console.log("Nuevo valor de la pantalla: ", acumulador);
            break;
        case "0":
            console.log("Usted ha seleccionado poner a cero tanto la pantalla como la memoria: ");
            acumulador = 0;
            memoria = 0;
            console.log("Valor restablecido correctamente");
            console.log("Nuevo valor de la pantalla: ", acumulador);

        default:
            console.log("Por favor seleccione una de las opciones disponibles: ");
            break;
        }
    }while (respuestaUsuario !== "S");
    
}
//BLOQUE DE FUNCIONES QUE NECESITA EL PROGRAMA PARA EJECUTARSE
function main(){
    menu(acumulador, memoria);
}

function suma (acumulador, a){
    return parseFloat(acumulador + a);
}

function resta (acumulador, b){
    return parseFloat(acumulador - b);
}

function multi (acumulador, c){
    return parseFloat(acumulador * c);
}

function div (acumulador, d){
    return parseFloat(acumulador / d);
}

function porCiento(acumulador, e){
    acumulador = (acumulador * e)/ 100;
    return parseFloat(acumulador);
}

function elevar(acumulador, f){
    return parseFloat(acumulador ** f);
}

function fact(acumulador){
    let resultado = 1;
    for (let i = 1; i <= acumulador; i++){
        resultado *= i;
    }
    acumulador = resultado;
    return parseFloat(acumulador);
}
main();