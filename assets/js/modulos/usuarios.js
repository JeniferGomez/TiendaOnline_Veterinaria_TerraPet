const tableListaUsuarios = document.querySelector('#tblUsuarios tbody');

//ver usuarios
const myModal = new bootstrap.Modal(document.getElementById('myModal'))

let listaUsuarios;
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('listaUsuarios') != null) {
      listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    }
})

//ver lista
function getListaUsuarios() {
    const url = base_url + 'Usuarios/listar';
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.send(JSON.stringify(listaUsuarios));
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            let html = '';
            res.productos.forEach(producto => {
                html += `<tr>
                <td>${usuarios.id}</td>
                <td>${usuarios.nombres}</td>
                <td>${usuarios.apellidos}</td>
                <td>${usuarios.correo}</td>
                <td>${usuarios.perfil}</td>
            </tr>`;
            });
            tableListaUsuarios.innerHTML = html;
        }
    }
}
