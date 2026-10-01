"use strict"
let arrayNumeros = [];
const MAXIMO = 100;
const TAMANIOARRAY = 10;
let numero;
let numeroMaximo;
let numeroMinimo;
let media;
let sumado;

function crearArray(MAXIMO, TAMANIOARRAY, arrayNumeros, numero, numeroMaximo, numeroMinimo, media, sumado){
    sumado = 0;
    numeroMaximo = 1;
    numeroMinimo = 100;
    media = 0;
    do{
        numero = Math.floor(Math.random() * MAXIMO) + 1;
        arrayNumeros.push(numero);
    }while (arrayNumeros.length !== TAMANIOARRAY);
    
    arrayNumeros.forEach(numero=>{
        sumado = sumado + numero;
        if (numero > numeroMaximo){
            numeroMaximo = numero;
        }else if(numero < numeroMinimo){
            numeroMinimo = numero;
        }
    });

    media = parseFloat(sumado / TAMANIOARRAY);


    console.log("Numero maximo: ", numeroMaximo);
    console.log("Numero minimo: ", numeroMinimo);
    console.log("Media: ", media);

    mostrarArray(arrayNumeros);
}

function mostrarArray (arrayNumeros){
    arrayNumeros.forEach(numero =>{
        console.log(numero);
    })
}



function main(){
    crearArray(MAXIMO, TAMANIOARRAY, arrayNumeros, numero, numeroMaximo, numeroMinimo, media, sumado);
}

main();