const saludo = ()=>{
const nombre = prompt ('Ingrese nombre');
if(nombre != ""){
alert (`Bienvenido ${nombre}`)
}else {
    alert('No ingresaste tu nombre')
    
}
}

saludo()



const elegirPrenda = (a, b)=>{
    let productoElegido =prompt('Ingrese el nombre sin mayusculas ni tilde de la prenda a comprar: \n  Camiseta \n  Pantalón \n  Gorra \n  Mochila')
    while(productoElegido != ""){
    switch (productoElegido) {
        case 'camiseta':
            alert ('Camiseta: $24000')
            break;
        case 'pantalon':
            alert ('Pantalón: $10000')
            break;
        case 'gorra':
            alert ('Gorra: $5000')
            break;
        case 'mochila':
            alert ('Mochila: $18000')
            break;
        default:
            alert ('Producto invalido')
            break;
    }
    break
}
}
elegirPrenda ()

const confirmacion = () =>{
    prompt('Si desea terminar con su compra presione enter o dele a aceptar')
    alert('Compra finalizada, retirar en sucursal')
}

confirmacion()


