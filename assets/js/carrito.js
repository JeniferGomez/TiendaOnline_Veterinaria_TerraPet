const btnAddDeseo = document.querySelectorAll('.btnAddDeseo');
const btnAddcarrito = document.querySelectorAll('.btnAddcarrito');
const btnDeseo = document.querySelector('#btnCantidadDeseo');
const btnCarrito = document.querySelector('#btnCantidadCarrito');
let listaDeseo, listaCarrito;
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('listaDeseo') != null) {
        listaDeseo = JSON.parse(localStorage.getItem('listaDeseo'));
    }
    if (localStorage.getItem('listaCarrito') != null) {
        listaCarrito = JSON.parse(localStorage.getItem('listaCarrito'));
    }
    for (let i = 0; i < btnAddDeseo.length; i++) {
        btnAddDeseo[i].addEventListener('click', function() {
            let idProducto = btnAddDeseo[i].getAttribute('prod');
            agregarDeseo(idProducto);
        })
    }
    for (let i = 0; i < btnAddcarrito.length; i++) {
        btnAddcarrito[i].addEventListener('click', function() {
            let idProducto = btnAddcarrito[i].getAttribute("prod");
            agregarCarrito(idProducto, 1);
        })
    }
    cantidadDeseo();
    cantidadCarrito();
})

function agregarDeseo(idProducto) {
    if (localStorage.getItem('listaDeseo') == null) {
        listaDeseo = [];
    } else {
        let listasExiste = JSON.parse(localStorage.getItem('listaDeseo'));
        for (let i = 0; i < listasExiste.length; i++) {
            if (listasExiste[i]['idProducto'] == idProducto) {
                Swal.fire(
                    'Aviso',
                    'El producto ya esta en tu lista de deseos',
                    'warning'
                )
                return;
            }
        }
        listaDeseo.concat(localStorage.getItem('listaDeseo'));
    }
    listaDeseo.push({
        "idProducto": idProducto,
        "cantidad": 1
    })
    localStorage.setItem('listaDeseo', JSON.stringify(listaDeseo));
    Swal.fire(
        'Aviso',
        'Producto agregado a la lista de deseos',
        'success'
    )
    cantidadDeseo();
}

function cantidadDeseo() {
    let listas = JSON.parse(localStorage.getItem('listaDeseo'));
    if (listas != null) {
        btnDeseo.textContent = listas.length;
    } else {
        btnDeseo.textContent = 0;
    }

}

//agregar productos al carrito
function agregarCarrito(idProducto, cantidad) {
    if (localStorage.getItem('listaCarrito') == null) {
        listaCarrito = [];
    } else {
        let listasExiste = JSON.parse(localStorage.getItem('listaCarrito'));
        for (let i = 0; i < listasExiste.length; i++) {
            if (listasExiste[i]['idProducto'] == idProducto) {
                Swal.fire(
                    'Aviso',
                    'El producto ya esta agregado',
                    'warning'
                )
                return;
            }
        }
        listaCarrito.concat(localStorage.getItem('listaCarrito'));
    }
    listaCarrito.push({
        "idProducto": idProducto,
        "cantidad": cantidad
    })
    localStorage.setItem('listaCarrito', JSON.stringify(listaCarrito));
    Swal.fire(
        'Aviso',
        'Producto agregado al carrito',
        'success'
    )
    cantidadCarrito();
}

function cantidadCarrito() {
    let listas = JSON.parse(localStorage.getItem('listaCarrito'));
    if (listas != null) {
        btnCarrito.textContent = listas.length;
    } else {
        btnCarrito.textContent = 0;
    }
}