let tblUsuario;
$(document).ready(function () {
  $.ajax({
    url: "Usuarios/listar",
    dataType: "json",
    success: function (data) {
      tblUsuario =
        "<table><thead><tr><th>ID</th><th>Nombres</th><th>Apellidos</th><th>Correo</th><th>Perfil</th><th>Acción</th></tr></thead><tbody>";
      data.forEach(function (item) {
        tblUsuario += `<tr><td>${item.id}</td><td>${item.nombres}</td><td>${item.apellidos}</td><td>${item.correo}</td><td>${item.perfil}</td><td>${item.accion}</td></tr>`;
      });
      tblUsuario +=
        "</tbody><tfoot><tr><td colspan='5'>Total de Usuarios: " +
        data.length +
        "</td></tr></tfoot></table>";
      $("#table-container").html(tblUsuario);
    },
  });
});

const nuevo = document.querySelector("#nuevo_registro");
const myModal = new bootstrap.Modal(document.getElementById("nuevoModal"));
const frm = document.querySelector("#frmRegistro");

document.addEventListener("DOMContentLoaded", function () {
  //levantar modal
  nuevo.addEventListener("click", function () {
    titleModal.textContent = "Nuevo usuario";
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
            tblUsuario.ajax.reload();
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
            tblUsuario.ajax.reload();
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
