const saludo = ()=>{
    const nombre = prompt ('Ingrese nombre');
    if(nombre != ""){
    alert (`Bienvenido ${nombre}`)
    }else {
        alert('No ingresaste tu nombre')
        
    }
    }
saludo()
    
    
    
    // const elegirPrenda = (a, b)=>{
    //     let productoElegido =prompt('Ingrese el nombre sin mayusculas ni tilde de la prenda a comprar: \n  Camiseta \n  Pantalón \n  Gorra \n  Mochila')
    //     while(productoElegido != ""){
    //     switch (productoElegido) {
    //         case 'camiseta':
    //             alert ('Camiseta: $24000')
    //             break;
    //         case 'pantalon':
    //             alert ('Pantalón: $10000')
    //             break;
    //         case 'gorra':
    //             alert ('Gorra: $5000')
    //             break;
    //         case 'mochila':
    //             alert ('Mochila: $18000')
    //             break;
    //         default:
    //             alert ('Producto invalido')
    //             break;
    //     }
    //     break
    // }
    // }
    // elegirPrenda ()
    
    // const confirmacion = () =>{
    //     prompt('Si desea terminar con su compra presione enter o dele a aceptar')
    //     alert('Compra finalizada, retirar en sucursal')
    // }
    
    // confirmacion()
    



    
// const elegirPrenda = (a, b)=>{

const carritoDeCompras = [];
const carritoFinal = [];

let productoElegido =prompt('Ingrese el nombre sin mayusculas ni tilde de la prenda a consultar: \n  Camiseta \n  Pantalón \n  Gorra \n  Mochila')
let precio = 0;    

while(productoElegido != ""){
    if(productoElegido == "camiseta" || "pantalon" || "gorra" || "mochila"){
        switch(productoElegido) {
            case 'camiseta':
                alert ('Camiseta: $24000')
                precio = 24000
                break;
            case 'pantalon':
                alert ('Pantalón: $10000')
                precio = 10000
                break;
            case 'gorra':
                alert ('Gorra: $5000')
                precio = 5000
                break;
            case 'mochila':
                alert ('Mochila: $18000')
                precio = 18000
                break;
            default:
                alert ('Producto invalido')
                break;
            }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar"));
        
        carritoDeCompras.push([productoElegido,  precio,  unidades]);

        alert (carritoDeCompras)
        break;
    } else {
        alert("No tenemos ese producto ahora mismo")
    }
}
while(productoElegido != ""){
    if(productoElegido == "camiseta" || "pantalon" || "gorra" || "mochila"){
        switch(productoElegido) {
            case 'camiseta':
                alert ('Camiseta: $24000')
                precio = 24000
                break;
            case 'pantalon':
                alert ('Pantalón: $10000')
                precio = 10000
                break;
            case 'gorra':
                alert ('Gorra: $5000')
                precio = 5000
                break;
            case 'mochila':
                alert ('Mochila: $18000')
                precio = 18000
                break;
            default:
                alert ('Producto invalido')
                break;
            }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar"));
        
        carritoDeCompras.push([productoElegido,  precio,  unidades]);

        alert (carritoDeCompras)
        break;
    } else {
        alert("No tenemos ese producto ahora mismo")
    }
}

let seleccionDeProductos = prompt("En caso de no querer seguir comprando, escriba NO")
do {
productoElegido
}while(seleccionDeProductos == "NO"){
    alert("gracias por su compra. Tenga un buen dia")
    carritoDeCompras.forEach((carritoFinal) => {
        alert(`productoEegido: "${carritoFinal.productoElegido}", unidades: "${carritoFinal.unidades}",total a pagar por producto "${carritoFinal.unidades * carritoFinal.precio}"`)
        })
        }
// Mostramos la cantidad de elementos ingresados.
alert('La lista tiene ' + carritoDeCompras.length + ' productos.');
// Mostramos todos los elementos unos abajo de otro.
alert('La lista tiene:\n' + carritoDeCompras.join('\n'));
