"use strict";
const prompt = require("prompt-sync")();
let propietario;
let saldoCuenta;
//Declaración de la clase cuenta
class Cuenta {
  constructor(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;
  }

  get titularCuenta() {
    return this.titular;
  }

  get cantidadCuenta() {
    return this.cantidad;
  }

  ingresar(dineroIngresado) {
    if(dineroIngresado < 0 || dineroIngresado === null){
        console.log("No se ha podido realizar el ingreso del dinero.");
    }else{
        this.cantidad = this.cantidad + dineroIngresado;
        console.log("Saldo actual: ", this.cantidad);
    }
  }

  retirar(dineroRetirado) {
    if (this.cantidad < dineroRetirado){
        this.cantidad = 0;
        console.log("Saldo actual: ", this.cantidad);
    }else{
        this.cantidad = this.cantidad - dineroRetirado;
        console.log("Saldo actual: ", this.cantidad);
    }
  }
}


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


