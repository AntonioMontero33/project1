import { Component } from '@angular/core';
import { Producto, Almacen, MostrarAlmacen, AgregarAAlmacen } from './interfaces';



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

let producto1: Producto = new Producto("p0001","shampoo Boob", 12.3, true, "CuidadoPersonal", 10, "a0001");
let producto3: Producto = new Producto('p0003','Shampoo Bunnny',10.5,true,'CuidadoPersonal',10,'');
let producto2: Producto = new Producto('p0002','Shampoo Bunnny',10.5,true,'CuidadoPersonal',12,'a0001')
  


let almacen1: Almacen = {
  idAlmacen: 'a0001',
  deposito: [producto1.idProducto],
  numProductos: 2
}

let almacen2: Almacen = {
  idAlmacen: 'a0002',
  deposito: [],
  numProductos: 0
}



AgregarAAlmacen(producto3, 8, almacen1);

//modificarCantProductos(producto3, 3);
producto1.MostrarProducto();
MostrarAlmacen(almacen1);

//MoverProducto(almacen1, almacen2, producto1)
