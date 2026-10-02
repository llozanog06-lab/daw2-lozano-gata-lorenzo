"use strict";
export class Cuenta {
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