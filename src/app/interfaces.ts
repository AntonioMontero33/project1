export class Producto {
    public idProducto: string;
    public nomProducto: string;
    public precio: number;
    public stock: boolean;
    public tipoProducto: string;
    public cantAlmacen: number;
    public codAlmacen: string;

    constructor(idProducto: string, nomProducto: string, precio: number, stock:boolean, tipoProducto:string, cantAlmacen:number, codAlmacen:string){
        this.idProducto = idProducto;
        this.nomProducto = nomProducto;
        this.precio = precio;
        this.stock = stock;
        this.tipoProducto = tipoProducto;
        this.cantAlmacen = cantAlmacen;
        this.codAlmacen = codAlmacen
    }
    

    public MostrarProducto(){
        console.log('ID               : ', this.idProducto);
        console.log('Nombre           : ', this.nomProducto);
        console.log('Precio           : ', this.precio);
        console.log('Stock            : ', this.stock);
        console.log('Tipo             : ', this.tipoProducto);
        console.log('Cantidad Almacen : ', this.cantAlmacen);
        console.log('Codigo Producto  : ', this.codAlmacen);
      }
}


export interface Almacen {
    idAlmacen: string,
    deposito: string[],
    numProductos: number

}

 export function AgregarAAlmacen(producto: Producto, cantidad:number, almacen: Almacen){
     if (almacen.deposito.indexOf(producto.idProducto) == -1) {
         almacen.deposito.push(producto.idProducto);
         almacen.numProductos += 1;
         console.log('Producto Agregado correctamente a '+ almacen.idAlmacen);
         producto.cantAlmacen = cantidad;
         producto.codAlmacen = almacen.idAlmacen;
         console.table(producto);
     } else {
         console.log('El producto ya estaba agregado');
         console.log(almacen.deposito);
     }
 }

export function modificarCantProductos(producto: Producto, cantidad: number){
     producto.cantAlmacen = cantidad;
     console.log('Cantidad Modificada del producto' + producto.idProducto);
    
}

 export function MoverProducto(a1: Almacen, a2: Almacen, producto: Producto){
     let idx = a1.deposito.indexOf(producto.idProducto); 
     delete a1.deposito[idx];
     a2.deposito.push(producto.idProducto);
     a1.numProductos -= 1;
     a2.numProductos += 1;
     console.log('Producto Movido es' + producto.idProducto)
     MostrarAlmacen(a1);
     MostrarAlmacen(a2);
 }

export function MostrarAlmacen(almacen: Almacen){
    console.table(almacen);
 }