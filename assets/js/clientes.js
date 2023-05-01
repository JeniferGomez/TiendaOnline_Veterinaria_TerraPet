const nuevo = document.querySelector("#modal");
const procesar = document.querySelector("#procesar");
const tableLista = document.querySelector("#tableListaProductos tbody");
const tblPendientes = document.querySelector("#tblPendientes");
let productosjson = [];
let tblCalificacion;
var idPedido = document.getElementById("id_pedido").value.trim();
var nombre = document.getElementById("nombre").value.trim();
var correo = document.getElementById("correo").value.trim();
var celular = document.getElementById("celular").value.trim();
var cedula = document.getElementById("telefono").value.trim();
var direccion = document.getElementById("direccion").value.trim();

document.addEventListener("DOMContentLoaded", function () {
  if (tableLista) {
    getListaProductos();
  }
  //cargar datos pendientes con DataTables
  $("#tblPendientes").DataTable({
    ajax: {
      url: base_url + "clientes/listarPendientes",
      dataSrc: "",
    },
    columns: [
      { data: "id_transaccion" },
      { data: "monto" },
      { data: "fecha" },
      { data: "accion" },
    ],
    language,
  });

  tblCalificacion = $("#tblProductos").DataTable({
    ajax: {
      url: base_url + "clientes/listarProductos",
      dataSrc: "",
    },
    columns: [
      { data: "id_producto" },
      { data: "producto" },
      { data: "precio" },
      { data: "cantidad" },
      { data: "calificacion" },
    ],
    language,
  });

  nuevo.addEventListener("click", function () {
    var ultimoID = localStorage.getItem("ultimoID") || 0;
    var nuevoID = Math.floor(Math.random() * 1000000000) + 1;
    nuevoID = "CLITPS" + nuevoID.toString();
    localStorage.setItem("ultimoID", nuevoID);

    var idPedido = document.getElementById("id_pedido");
    idPedido.value = nuevoID;

    myModal.show();
  });

  
});

function getListaProductos() {
  const url = base_url + "principal/listaProductos";
  const http = new XMLHttpRequest();
  http.open("POST", url, true);
  http.send(JSON.stringify(listaCarrito));
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      let html = "";
      res.productos.forEach((producto) => {
        html += `<tr>
                <td>
                <img class="img-thumbnail rounded-circle" src="${
                  producto.imagen
                }" alt="" width="100">
                </td>
                <td>${producto.nombre}</td>
                <td><span class="badge bg-success">${
                  res.moneda + " " + producto.precio
                }</span></td>
                <td><span class="badge bg-primary">${
                  producto.cantidad
                }</span></td>
                <td>${producto.subTotal}</td>
            </tr>`;
        //agregar productos para paypal
        let json = {
          name: producto.nombre,
          unit_amount: {
            currency_code: res.moneda,
            value: producto.precio,
          },
          quantity: producto.cantidad,
        };
        productosjson.push(json);
      });
      tableLista.innerHTML = html;
      document.querySelector("#totalProducto").textContent =
        "TOTAL A PAGAR: " + res.moneda + " " + res.total;
      document.querySelector("#totalPagar").textContent =
        "TOTAL A PAGAR: " + res.moneda + " " + res.total;
      let conversion = res.totalPaypal / 4754;
      botonPaypal(res.totalPaypal, res.moneda);
    }
  };
}

function botonPaypal(total, moneda) {
  paypal
    .Buttons({
      // Order is created on the server and the order id is returned
      createOrder() {
        return fetch("/my-server/create-paypal-order", {
          method: "post",
          // use the "body" param to optionally pass additional order information
          // like product skus and quantities
          body: JSON.stringify({
            cart: [
              {
                sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                quantity: "YOUR_PRODUCT_QUANTITY",
              },
            ],
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
            orderID: data.orderID,
          }),
        })
          .then((response) => response.json())
          .then((orderData) => {
            // Successful capture! For dev/demo purposes:
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
            );
            const transaction =
              orderData.purchase_units[0].payments.captures[0];
            alert(
              `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
            );
            // When ready to go live, remove the alert and show a success message within this page. For example:
            // const element = document.getElementById('paypal-button-container');
            // element.innerHTML = '<h3>Thank you for your payment!</h3>';
            // Or go to another URL:  window.location.href = 'thank_you.html';
          });
      },
    })
    .render("#paypal-button-container");
}

function verPedido(idPedido) {
  const mPedido = new bootstrap.Modal(document.getElementById("modalPedido"));
  const url = base_url + "clientes/verPedido/" + idPedido;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.responseText);
      let html = "";
      res.productos.forEach((row) => {
        let subTotal = parseFloat(row.precio) * parseInt(row.cantidad);
        html += `<tr>
                <td>${row.producto}</td>
                <td><span class="badge bg-success">${
                  res.moneda + " " + row.precio
                }</span></td>
                <td><span class="badge bg-primary">${row.cantidad}</span></td>
                <td>${subTotal.toFixed(2)}</td>
            </tr>`;
      });
      document.querySelector("#tablePedidos tbody").innerHTML = html;
      mPedido.show();
    }
  };
}

function agregarCalificacion(id_producto, cantidad) {
  const url = base_url + "clientes/agregarCalificacion";
  const http = new XMLHttpRequest();
  http.open("POST", url, true);
  http.send(
    JSON.stringify({
      id_producto: id_producto,
      cantidad: cantidad,
    })
  );
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const res = JSON.parse(this.responseText);
      Swal.fire("Aviso", res.msg, res.icono);
      if (res.icono == "success") {
        tblCalificacion.ajax.reload();
      }
    }
  };
}

function validarFormulario() {
  // Obtenemos los valores de los campos
  var idPedido = document.getElementById("id_pedido").value.trim();
  var nombre = document.getElementById("nombre").value.trim();
  var correo = document.getElementById("correo").value.trim();
  var celular = document.getElementById("celular").value.trim();
  var cedula = document.getElementById("telefono").value.trim();
  var direccion = document.getElementById("direccion").value.trim();

  // Validamos que ningún campo esté vacío
  if (
    idPedido === "" ||
    nombre === "" ||
    correo === "" ||
    celular === "" ||
    cedula === "" ||
    direccion === ""
  ) {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  // Validamos que el nombre sea un string
  if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
    return false;
  }

  // Validamos que el correo tenga el formato correcto
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
    alert("Por favor, ingrese un correo válido.");
    return false;
  }

  // Validamos que el celular tenga 10 dígitos exactos
  if (!/^\d{10}$/.test(celular)) {
    alert("Por favor, ingrese un número de celular válido (10 dígitos).");
    return false;
  }

  // Validamos que la cedula tenga de 5 a 10 dígitos
  if (!/^\d{5,10}$/.test(cedula)) {
    alert("Por favor, ingrese un número de cédula válido (de 5 a 10 dígitos).");
    return false;
  }

  // Si todo está correcto, retornamos verdadero
  return true;
}
