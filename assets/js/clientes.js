const tableLista = document.querySelector('#tableListaProductos tbody');
consttblPendientes = document.querySelector('#tblPendientes');
let productosjson = [];
document.addEventListener('DOMContentLoaded', function() {
    if (tableLista) {
        getListaProductos();
    }
    //cargar datos pendientes con DataTables
    $('#tblPendientes').DataTable( {
        ajax: {
            url: base_url + 'clientes/listarPendientes',
            dataSrc: ''
        },
        columns: [
            { data: 'id_transaccion' },
            { data: 'monto' },
            { data: 'fecha' }
        ]
    } );
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
                //agregar productos para paypal
                let json = {
                    "name": producto.nombre,
                    "unit_amount": {
                        "currency_code": res.moneda,
                        "value": producto.precio
                    },
                    "quantity": producto.cantidad
                }
                productosjson.push(json);
            });
            tableLista.innerHTML = html;
            document.querySelector('#totalProducto').textContent = 'TOTAL A PAGAR: ' + res.moneda + ' ' + res.total;
            let conversion = (res.totalPaypal / 4754);
            botonPaypal(res.totalPaypal, res.moneda);
        }
    }
}

function botonPaypal(total, moneda) {
    paypal.Buttons({
        // Order is created on the server and the order id is returned
        createOrder() {
            return fetch("/my-server/create-paypal-order", {
                    method: "post",
                    // use the "body" param to optionally pass additional order information
                    // like product skus and quantities
                    body: JSON.stringify({
                        cart: [{
                            sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                            quantity: "YOUR_PRODUCT_QUANTITY",
                        }, ],
                    }),
                })
                .then((response) => response.json())
                .then((order) => order.id);
        },
        // Finalize the transaction on the server after payer approval
        onApprove(data) {
            return fetch("/my-server/capture-paypal-order", {
                    method: "post",
                    body: JSON.stringify({
                        orderID: data.orderID
                    })
                })
                .then((response) => response.json())
                .then((orderData) => {
                    // Successful capture! For dev/demo purposes:
                    console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    const transaction = orderData.purchase_units[0].payments.captures[0];
                    alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
                    // When ready to go live, remove the alert and show a success message within this page. For example:
                    // const element = document.getElementById('paypal-button-container');
                    // element.innerHTML = '<h3>Thank you for your payment!</h3>';
                    // Or go to another URL:  window.location.href = 'thank_you.html';
                });
        }
    }).render('#paypal-button-container');

}