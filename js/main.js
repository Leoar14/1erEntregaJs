const saludo = ()=>{
    const nombre = prompt ("Ingrese nombre");
    if(nombre != ""){
    alert (`Bienvenido ${nombre}`)
    }else {
        alert("No ingresaste tu nombre")
    }
    }
saludo()

const productos = [
    {
        id: 1,
        nombre: 'Camiseta de Argentina',
        precio: 24000,
        descripcion: 'Camiseta original de Argentina para adultos',
        imagen: './img/camiseta.jpg',
        categoria: 'Indumentaria',
        unidades: 10
    },
    {
        id: 2,
        nombre: 'Conjunto Invierno',
        precio: 32000,
        descripcion: 'Conjunto abrigado adultos',
        imagen: './img/conjunto-largo.jpg',
        categoria: 'Indumentaria',
        unidades: 8
    },
    {
        id: 3,
        nombre: 'Botinero',
        precio: 13000,
        descripcion: 'Botinero mediano',
        imagen: './img/botinero.jpg',
        categoria: 'Artículo',
        unidades: 4
    },
    {
        id: 4,
        nombre: 'Pantalón',
        precio: 10000,
        descripcion: 'Pantalon titular de Argentina',
        imagen: './img/pantalon.jpg',
        categoria: 'Indumentaria',
        unidades: 5
    },
    {
        id: 5,
        nombre: 'Mochila',
        precio: 18000,
        descripcion: 'Mochila AFA informal',
        imagen: './img/mochila.jpg',
        categoria: 'Artículo',
        unidades: 15
    },
    {
        id: 6,
        nombre: 'Gorra',
        precio: 5000,
        descripcion: 'Gorras todo los talles',
        imagen: './img/gorra.jpg',
        categoria: 'Artículo',
        unidades: 20
    },
]

const contenedorProductos = document.getElementById('contenedor-productos');
const carritoTexto = document.getElementById('carrito');
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const nuevaCantidadCarrito = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    carritoTexto.innerHTML = `Carrito(${nuevaCantidadCarrito})`;
const agregarTarjetaDeProducto = producto => {const tarjetaProducto = document.createElement('div');
    tarjetaProducto.className = ' shadow p-3 mb-5 bg-body-tertiary rounded';
    tarjetaProducto.innerHTML = `
        <div id="producto-${producto.id}" class="tarjeta ">
            <img src="${producto.imagen}" class="tarjeta__img">
            <div class="tarjeta cuerpo">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <p>Categoria: ${producto.categoria}</p> 

                <p  class="tarjeta__precio">$ ${producto.precio}</p>
                <p>stock: ${producto.unidades}</p>
                <button class="btn btn-warning">Agregar al carrito</button>
            </div>
        </div>`;
    contenedorProductos.append(tarjetaProducto);
    document.querySelector(`#producto-${producto.id} button`).addEventListener('click',() => {
        const productoEnElCarrito = carrito.find((productoCarrito) => productoCarrito.id === producto.id);
        const cantidad = (productoEnElCarrito?.cantidad || 0) + 1
        if (productoEnElCarrito) {productoEnElCarrito.cantidad = cantidad;
        } else {carrito.push({...producto,cantidad});
        }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    const nuevaCantidadCarrito = carrito.reduce((acc, { cantidad }) => acc + cantidad, 0);
    carritoTexto.innerHTML = `Carrito(${nuevaCantidadCarrito})`;
    });
}
productos.forEach((producto => {agregarTarjetaDeProducto(producto);}));
document.getElementById('select-categoria').addEventListener('input',
    (e) => {const categoriaAFiltrar = e.target.value;   
        const productosFiltrados = categoriaAFiltrar ?productos.filter((producto) => producto.categoria === categoriaAFiltrar) :productos;
        document.querySelectorAll('.col').forEach(child => child.remove());
        productosFiltrados.forEach(producto => {
        agregarTarjetaDeProducto(producto);
        });
    }
);