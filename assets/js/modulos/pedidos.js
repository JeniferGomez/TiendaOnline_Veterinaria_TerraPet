let tblPendientes;
$(document).ready(function () {
  $.ajax({
    url: "Pedidos/listarPedidos",
    dataType: "json",
    success: function (data) {
      tblPendientes =
        "<table><thead><tr><th>Id Transacción</th><th>Monto</th><th>Fecha</th><th>Correo</th><th>Nombre</th><th>Apellido</th><th>Dirección</th><th>Acción</th></tr></thead><tbody>";
      data.forEach(function (item) {
        tblPendientes += `<tr><td>${item.id_transaccion}</td><td>${item.monto}</td><td>${item.fecha}</td><td>${item.email}</td><td>${item.nombre}</td><td>${item.apellido}</td><td>${item.direccion}</td><td>${item.accion}</td></tr>`;
      });
      tblPendientes +=
        "</tbody><tfoot><tr><td colspan='5'>Total de Categorias: " +
        data.length +
        "</td></tr></tfoot></table>";
      $("#table-container").html(tblPendientes);
    },
  });
});

let tblFinalizado;
$(document).ready(function () {
  $.ajax({
    url: "Pedidos/listarFinalizados",
    dataType: "json",
    success: function (data) {
      tblFinalizado =
        "<table><thead><tr><th>Id Transacción</th><th>Monto</th><th>Fecha</th><th>Correo</th><th>Nombre</th><th>Apellido</th><th>Dirección</th><th>Acción</th></tr></thead><tbody>";
      data.forEach(function (item) {
        tblFinalizado += `<tr><td>${item.id_transaccion}</td><td>${item.monto}</td><td>${item.fecha}</td><td>${item.email}</td><td>${item.nombre}</td><td>${item.apellido}</td><td>${item.direccion}</td><td>${item.accion}</td></tr>`;
      });
      tblFinalizado +=
        "</tbody><tfoot><tr><td colspan='5'>Total de Categorias: " +
        data.length +
        "</td></tr></tfoot></table>";
      $("#table-finalizado").html(tblFinalizado);
    },
  });
});

let tblProceso;
$(document).ready(function () {
  $.ajax({
    url: "Pedidos/listarProceso",
    dataType: "json",
    success: function (data) {
      tblProceso =
        "<table><thead><tr><th>Id Transacción</th><th>Monto</th><th>Fecha</th><th>Correo</th><th>Nombre</th><th>Apellido</th><th>Dirección</th><th>Acción</th></tr></thead><tbody>";
      data.forEach(function (item) {
        tblProceso += `<tr><td>${item.id_transaccion}</td><td>${item.monto}</td><td>${item.fecha}</td><td>${item.email}</td><td>${item.nombre}</td><td>${item.apellido}</td><td>${item.direccion}</td><td>${item.accion}</td></tr>`;
      });
      tblProceso +=
        "</tbody><tfoot><tr><td colspan='5'>Total de Categorias: " +
        data.length +
        "</td></tr></tfoot></table>";
      $("#table-proceso").html(tblProceso);
    },
  });
});

const myModal = new bootstrap.Modal(document.getElementById("modalPedidos"));

document.addEventListener("DOMContentLoaded", function () {
  //submit productos

});

function alertas(msg, icono) {
  Swal.fire("Aviso!", msg.toUpperCase(), icono);
}

function cambiarProceso(idPedido, proceso) {
  Swal.fire({
    title: "Aviso?",
    text: "Estas seguro de cambiar el estado?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Cambiar!",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "pedidos/update/" + idPedido + "/" + proceso;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          if (res.icono == "success") {
            frm.reset();
            tblPendientes.ajax.reload();
            Swal.fire("Éxito", res.msg, "success").then(() => {
              setTimeout(function () {
                location.reload();
              }, 3000);
            });
          } else {
            alertas(res.msg, res.icono);
          }
        }
      };
    }
  });
}

function verPedido(idPedido) {
  const url = base_url + "clientes/verPedido/" + idPedido;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const res = JSON.parse(this.responseText);
      let html = '';
      res.productos.forEach(row => {
        let subTotal = parseFloat(row.precio) * parseInt(row.cantidad);
        html += `<tr>
        <td>${row.producto}</td>
        <td><span class="badge bg-warning">${res.moneda + ' ' + row.precio}</span></td>
        <td>${row.cantidad}</td>
        <td>${subTotal.toFixed(2)}</td>
        </tr>`;
      });
      document.querySelector('#tablePedidos tbody').innerHTML = html;
      myModal.show();
    }
  };

}
