"use strict";
import { Cuenta } from "./cuenta.mjs";
import promptSync from 'prompt-sync';
const prompt = promptSync();
let propietario;
let saldoCuenta;

function crearCuenta (propietario, saldoCuenta){
    propietario = prompt("Introduce el nombre del propietario de la cuenta (obligatorio): ");
    if (propietario === null || propietario.trim() === ""){
        console.log("ERROR, la cuenta debe de tener un titular.");
    }else{
        saldoCuenta = parseFloat(prompt("Introduce el saldo de la cuenta: "))
            if(saldoCuenta === null || saldoCuenta < 0){
                saldoCuenta = 0;
            }
        let cuenta = new Cuenta(propietario, saldoCuenta);
        probarCuenta(cuenta);
    }

}

function probarCuenta (cuenta){
    cuenta.ingresar(10);
    cuenta.retirar(50);
    cuenta.ingresar(15);
    cuenta.retirar(100);
}


function main(){
    crearCuenta(propietario, saldoCuenta);
}


main();