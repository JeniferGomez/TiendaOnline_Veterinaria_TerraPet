let tblProductos;
$(document).ready(function () {
  $.ajax({
    url: "Productos/listar",
    dataType: "json",
    success: function (data) {
      tblProductos =
        "<table><thead><tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Imagen</th><th>Acción</th></tr></thead><tbody>";
      data.forEach(function (item) {
        tblProductos += `<tr><td>${item.id}</td><td>${item.nombre}</td><td>${item.precio}</td><td>${item.cantidad}</td><td>${item.imagen}</td><td>${item.accion}</td></tr>`;
      });
      tblProductos +=
        "</tbody><tfoot><tr><td colspan='5'>Total de Productos: " +
        data.length +
        "</td></tr></tfoot></table>";
      $("#table-container").html(tblProductos);
    },
  });
});

const frm = document.querySelector("#frmRegistro");
const btnAccion = document.querySelector('#btnAccion');
var firstTabEl = document.querySelector('#myTab li:last-child button')
var firstTab = new bootstrap.Tab(firstTabEl)

document.addEventListener("DOMContentLoaded", function () {
  //submit productos
  frm.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(this);
    const url = base_url + "Productos/registrar";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(data);
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        const res = JSON.parse(this.responseText);
        if (res.icono == "success") {
          Swal.fire("Éxito", res.msg, "success").then(() => {
            tblProductos.ajax.reload();
            setTimeout(function () {
              location.reload();
            }, 3000);
          });
          document.querySelector('#imagen').value = '';
        } else {
          alertas(res.msg, res.icono);
        }
      }
    };
  });
});

function alertas(msg, icono) {
  Swal.fire("Aviso!", msg.toUpperCase(), icono);
}

function eliminarPro(idPro) {
  Swal.fire({
    title: "Aviso?",
    text: "Estas seguro de eliminar el registro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "productos/eliminarPro/" + idPro;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          if (res.icono == "success") {
            frm.reset();
            tblProductos.ajax.reload();
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

function editPro(idPro) {
  const url = base_url + "productos/editPro/" + idPro;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const res = JSON.parse(this.responseText);
      document.querySelector('#id').value = res.id;
      document.querySelector('#nombre').value = res.nombre;
      document.querySelector('#precio').value = res.precio;
      document.querySelector('#cantidad').value = res.cantidad;
      document.querySelector('#categoria').value = res.id_categoria;
      document.querySelector('#descripcion').value = res.descripcion;
      document.querySelector('#imagen_actual').value = res.imagen;
      btnAccion.textContent = 'Actualizar';
      firstTab.show();
    }
  }
}
