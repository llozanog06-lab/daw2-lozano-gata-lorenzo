"use strict"
const prompt = require("prompt-sync")();
const miLista = [];

function anhadir (miLista){
    let respuestaUser;
    do{
        respuestaUser = prompt("Introduce el elemento que quieres añadir a la lista: ");
        miLista.push(respuestaUser);
    }while(respuestaUser !== null && respuestaUser.trim() !== "");
    return miLista;
}

function mostrar(miLista){
   console.log("A continuación se muestran todos los elementos ordenados por orden alfabético: ");
   miLista.sort(); 
   miLista.forEach(elemento =>{
    console.log(elemento);
   })
   console.log("Fin del programa, grácias por usar");
}

function main(){
    anhadir(miLista);
    mostrar(miLista);
}

main();