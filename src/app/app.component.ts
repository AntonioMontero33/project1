import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
}

//#region  variables
//console.log('Bienvenido a Type');
// let nombre = 'Arturo';
// let ahorros: number | string = 500;
// ahorros = 1000;
// console.log(ahorros);
// ahorros = 'Hola'
// console.log(ahorros);


//let jaja = []; //los arreglos se declaran con sus elementos ademas puedes
              // utilizar los : string[] | number[] como en las variables
//#endregion


//#region Interface
// interface Estudiante {
//   nombre: string,
//   apellidos: string,

// }

// let alumno:Estudiante = {
//   nombre: 'Juan',
//   apellidos: 'garcia'
// };

// console.log(alumno)
//#endregion

function mostrar(valor: any){
  console.log(valor);
}

//#region functions
// function sumar(a:any, b:any){
//   return a + b;
// }
// const sumarF = (a:any, b:any) => {
//   return a + b;
// }

// let resultado = sumar('pe', 'rez');
// mostrar(resultado);
// mostrar(sumarF(1,4))
//#endregion


//#region Interfaces
//  interface Cliente {
//    nombre: string,
//    apellido: string,
//    cuenta: Cuenta,
//    movimiento:(valor: number) => void
//  }

// interface Cuenta {
//   agencia: string,
//   saldo: number
// }

// let agente01: Cliente = {
//   nombre: 'Juan',
//   apellido: 'Garcia',
//   cuenta: {
//     agencia: 'Interlank',
//     saldo: 12
//   },
//   movimiento(valor: number) {
//     this.cuenta.saldo += valor;
//   }

// }

// agente01.movimiento(12);
// console.table(agente01);
//#endregion

function hola(){
  console.log("gola")
}