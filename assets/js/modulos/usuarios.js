$(document).ready(function() {
    var table = $('#usuariosTable').DataTable( {
      "ajax": "usuarios/listar",
      "columns": [
        { "data": "id" },
        { "data": "nombres" },
        { "data": "apellidos" },
        { "data": "correo" },
        { "data": "perfil" }
      ]
    } );
  });
  