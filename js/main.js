const saludo = ()=>{
    const nombre = prompt ("Ingrese nombre");
    if(nombre != ""){
    alert (`Bienvenido ${nombre}`)
    }else {
        alert("No ingresaste tu nombre")
    }
    }
saludo()

function showProps(obj) {
    let result = ``;

    for (let i in obj) {
      // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
        if (obj.hasOwnProperty(i)) {
            result += `\n${i}:\n\tprecio por unidad: $${obj[i]["precio_x_unidad"]}.\n\tcantidad: ${obj[i]["unidades"]}.\n\tsubtotal: $${obj[i]["subtotal"]}\n\n`;
        }
    }
    return result;
}

let carritoDeCompras = {};
let carritoFinal = [];
let productos = {
    "camiseta": {
        "precio": 24000,
        "cantidad": 10
    },
    "pantalon": {
        "precio": 10000,
        "cantidad": 10
    },
    "gorra": {
        "precio": 5000,
        "cantidad": 100
    },
    "mochila": {
        "precio": 18000,
        "cantidad": 5
    }
};
let keys = Object.keys(productos);


let total = 0;

const elegirProducto = () => {

    let unidades = 0;
    let subtotal = 0;

    do{
        productoElegido = prompt("Ingrese el nombre sin mayusculas ni tilde de la prenda a consultar: \n"+
                            `\t camiseta => precio: $${productos["camiseta"]["precio"]} => cantidad disp.: ${productos["camiseta"]["cantidad"]} \n`+
                            `\t pantalon => precio: $$productost["pantalon"]["precio"]} => cantidad disp.: ${productos["pantalon"]["cantidad"]} \n`+
                            `\t gorra => precio: $${productos["gorra"]["precio"]} => cantidad disp.: ${productos["gorra"]["cantidad"]} \n`+
                            `\t mochila => precio: $${productos["mochila"]["precio"]} => cantidad disp.: ${productos["mochila"]["cantidad"]} \n`+
                            "\t Ingrese NO, si no desea comprar nada");
        if(keys.includes(productoElegido) || productoElegido === "NO"){
            do{
                unidades = parseInt(prompt("¿Cuantas unidades quiere lleconst?\n"+
                `\t ${productoElegido} => precio: $${productos[productoElegido]["precio"]} => cantidad disp.: ${productos[productoElegido]["cantidad"]} \n`));
                if(unidades < 0 || unidades > productos[productoElegido]["cantidad"]) {
                    alert(`Debe ingresar un Numero mayor a 0 y menor o igual a ${productos[productoElegido]["cantidad"]}`)
                }
            }while(unidades < 0 || unidades > productos[productoElegido]["cantidad"])
            subtotal = productos[productoElegido]["precio"] * unidades
                    carritoDeCompras[productoElegido] = {
                        "precio_x_unidad": productos[productoElegido]["precio"],
                        "unidades": unidades,
                        "subtotal": subtotal
                    };
                    // Falta restar las unidades al stock
                    result =showProps(carritoDeCompras)
                    alert ("Su carrito hasta el momento es: \n"+`\t* ${result}`)
                    productoElegido = prompt("Desea seguir comprando?: \n"+
                                        `\t* SI \n`+
                                        `\t* NO \n`)
        } else {
            alert(`No tenemos este producto: ${productoElegido}`)
        }
    }while(productoElegido != "NO")

    if (productoElegido == "NO" && Object.entries(carritoDeCompras).length === 0){
        alert("gracias por su visita. Que tenga un buen dia")
    }

    if (Object.entries(carritoDeCompras).length != 0){
        for (const product in carritoDeCompras) {
            total += carritoDeCompras[product]["subtotal"]
        }
        alert(`Total a Pagar: $${total}`);
    }
}

elegirProducto()