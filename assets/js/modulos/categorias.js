let tblCategorias;
$(document).ready(function () {
  $.ajax({
    url: "Categorias/listar",
    dataType: "json",
    success: function (data) {
      tblCategorias =
        "<table><thead><tr><th>ID</th><th>Nombres</th><th>Imagen</th><th>Acción</th></tr></thead><tbody>";
      data.forEach(function (item) {
        tblCategorias += `<tr><td>${item.id}</td><td>${item.nombre}</td><td>${item.imagen}</td><td>${item.accion}</td></tr>`;
      });
      tblCategorias +=
        "</tbody><tfoot><tr><td colspan='5'>Total de Categorias: " +
        data.length +
        "</td></tr></tfoot></table>";
      $("#table-container").html(tblCategorias);
    },
  });
});

const nuevo = document.querySelector("#nuevo_registro");
const myModal = new bootstrap.Modal(document.getElementById("nuevoModal"));
const frm = document.querySelector("#frmRegistro");
const btnAccion = document.querySelector('#btnAccion');

document.addEventListener("DOMContentLoaded", function () {
  //levantar modal
  nuevo.addEventListener("click", function () {
    document.querySelector('#id').value = '';
    titleModal.textContent = "Nuevo usuario";
    btnAccion.textContent = 'Registrar';
    frm.reset();
    document.querySelector('#clave').removeAttribute('readonly');
    myModal.show();
  });
  //submit usuarios
  frm.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = new FormData(this);
    const url = base_url + "usuarios/registrar";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(data);
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        const res = JSON.parse(this.responseText);
        if (res.icono == "success") {
          myModal.hide();
          Swal.fire("Éxito", res.msg, "success").then(() => {
            tblCategorias.ajax.reload();
            setTimeout(function () {
              location.reload();
            }, 3000);
          });
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

function eliminarUser(idUser) {
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
      const url = base_url + "usuarios/delete/" + idUser;
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          if (res.icono == "success") {
            tblCategorias.ajax.reload();
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

function editUser(idUser) {
  const url = base_url + "usuarios/edit/" + idUser;
  const http = new XMLHttpRequest();
  http.open("GET", url, true);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const res = JSON.parse(this.responseText);
      document.querySelector('#id').value = res.id;
      document.querySelector('#nombre').value = res.nombres;
      document.querySelector('#apellido').value = res.apellidos;
      document.querySelector('#correo').value = res.correo;
      document.querySelector('#clave').setAttribute('readonly', 'readonly');
      btnAccion.textContent = 'Actualizar';
      titleModal.textContent = "Modificar usuario";
      myModal.show();
      //$('#nuevoModal').modal('show');
    }
  }
}
