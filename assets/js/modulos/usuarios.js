$(document).ready(function () {
  $.ajax({
    url: "Usuarios/listar",
    dataType: "json",
    success: function (data) {
      var table =
        "<table><thead><tr><th>ID</th><th>Nombres</th><th>Apellidos</th><th>Correo</th><th>Perfil</th></tr></thead><tbody>";
      data.forEach(function (item) {
        table += `<tr><td>${item.id}</td><td>${item.nombres}</td><td>${item.apellidos}</td><td>${item.correo}</td><td>${item.perfil}</td></tr>`;
      });
      table +=
        "</tbody><tfoot><tr><td colspan='5'>Total de Usuarios: " +
        data.length +
        "</td></tr></tfoot></table>";
      $("#table-container").html(table);
    },
  });
});

const nuevo = document.querySelector("#nuevo_registro");
const myModal = new bootstrap.Modal(document.getElementById('nuevoModal'))

document.addEventListener("DOMContentLoaded", function () {
  //levantar modal
  nuevo.addEventListener("click", function () {
    myModal.show();
  });
});
