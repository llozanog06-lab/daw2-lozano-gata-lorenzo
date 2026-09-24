"use strict"
const prompt = require("prompt-sync")();
const miLista = [];

function anhadir (miLista){ //función que sirve para añadir los productos al array
    let respuestaUser;
    do{ //Do-while para poder introducir los datos hasta que el usuario añada una cadena en blanco
        respuestaUser = prompt("Introduce el elemento que quieres añadir a la lista (cadena en blanco para finalizar): ");
        miLista.push(respuestaUser);
    }while(respuestaUser !== null && respuestaUser.trim() !== "");
    return miLista;
}

function mostrar(miLista){ //función que ordena la lista y la muestra
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