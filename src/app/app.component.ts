import { Component } from '@angular/core';
import { Producto, Almacen, AgregarAAlmacen, modificarCantProductos, MostrarProductoEnAlmacen, MoverProducto } from './interfaces';



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

let producto1: Producto = {
  idProducto: 'p0001',
  nomProducto: 'Shampoo BoB Esponja',
  precio: 12.5,
  stock: true,
  tipoProducto: 'CuidadoPersonal',
  cantAlmacen: 10,
  codAlmacen: 'a0001'
};

let producto2: Producto = {
  idProducto: 'p0002',
  nomProducto: 'Shampoo Bunnny',
  precio: 10.5,
  stock: true,
  tipoProducto: 'CuidadoPersonal',
  cantAlmacen: 12,
  codAlmacen: 'a0001'
};

let producto3: Producto = {
  idProducto: 'p0002',
  nomProducto: 'Shampoo Bunnny',
  precio: 10.5,
  stock: true,
  tipoProducto: 'CuidadoPersonal',
  cantAlmacen: 10,
  codAlmacen: ''
};

let almacen1: Almacen = {
  idAlmacen: 'a0001',
  deposito: [producto1, producto2],
  numProductos: 2
}

let almacen2: Almacen = {
  idAlmacen: 'a0002',
  deposito: [],
  numProductos: 0
}



//AgregarAAlmacen(producto3, 8, almacen1);

//modificarCantProductos(producto3, 3);

//MostrarProductoEnAlmacen(producto1);

MoverProducto(almacen1, almacen2, producto1)
