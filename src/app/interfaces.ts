export interface Producto {
    idProducto: string,
    nomProducto: string,
    precio: number,
    stock: boolean,
    tipoProducto: string,
    cantAlmacen: number,
    codAlmacen: string
}

export interface Almacen {
    idAlmacen: string,
    deposito: Producto[],
    numProductos: number

}

export function AgregarAAlmacen(producto: Producto, cantidad:number, almacen: Almacen){
    if (almacen.deposito.indexOf(producto) == -1) {
        almacen.deposito.push(producto);
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
    let idx = a1.deposito.indexOf(producto); 
    delete a1.deposito[idx];
    a2.deposito.push(producto);
    a1.numProductos -= 1;
    a2.numProductos += 1;
    console.log('Producto Movido es' + producto.idProducto)
    MostrarProductoEnAlmacen(a1);
    MostrarProductoEnAlmacen(a2);
}

export function MostrarProductoEnAlmacen(producto: Producto | Almacen){
    console.table(producto);
}