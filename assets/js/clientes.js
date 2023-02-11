const tableLista = document.querySelector('#tableListaProductos tbody');
document.addEventListener('DOMContentLoaded', function() {
    if (tableLista) {
        getListaProductos();
    }


});

function getListaProductos() {
    const url = base_url + 'principal/listaProductos';
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.send(JSON.stringify(listaCarrito));
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let html = '';
            res.productos.forEach(producto => {
                html += `<tr>
                <td>
                <img class="img-thumbnail rounded-circle" src="${producto.imagen}" alt="" width="100">
                </td>
                <td>${producto.nombre}</td>
                <td><span class="badge bg-success">${res.moneda + ' ' + producto.precio}</span></td>
                <td><span class="badge bg-primary">${ producto.cantidad}</span></td>
                <td>${producto.subTotal}</td>
            </tr>`;
            });
            tableLista.innerHTML = html;
            document.querySelector('#totalProducto').textContent = 'TOTAL A PAGAR: ' + res.moneda + ' ' + res.total;
            let conversion = (res.totalPaypal / 4754);
            botonPaypal(res.totalPaypal);
        }
    }
}

function botonPaypal(total) {

    paypal.Buttons({
        // Sets up the transaction when a payment button is clicked
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: total // Can also reference a variable or function
                    }
                }]
            });
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
            return actions.order.capture().then(function(orderData) {
                registrarPedido(orderData);

            });
        }
    }).render('#paypal-button-container');
}

function registrarPedido(datos) {
    const url = base_url + 'clientes/registrarPedido';
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.send(JSON.stringify(listaCarrito));
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);

        }
    }
}