const frm = document.querySelector('#formulario');
const email = document.getElementById('email');
const clave = document.getElementById('clave');

document.addEventListener('DOMContentLoaded', function() {
    frm.addEventListener('submit', function(e) {
        e.preventDefault();
        // if (email.value == '' || clave.value == '') {
        //     Swal.fire({
        //         icon: 'warning',
        //         title: 'Aviso',
        //         text: 'Todos los campos son requeridos',
        //         confirmButtonText: 'OK'
        //     });
        // } else {
        let data = new FormData(this);
        const url = base_url + 'admin/validar';
        const http = new XMLHttpRequest();
        http.open('POST', url, true);
        http.send(data);
        http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                    //const res = JSON.parse(this.responseText);
                }
            }
            //}
    })
});

function enviarFormulario() {
    // Verificar si los campos requeridos están llenos
    if (email.value.trim() === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Aviso',
            text: 'Por favor, ingrese su correo electrónico',
            confirmButtonText: 'OK'
        });
        email.focus();
        return false;
    }
    if (clave.value.trim() === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Aviso',
            text: 'Por favor, ingrese su contraseña',
            confirmButtonText: 'OK'
        });
        clave.focus();
        return false;
    }

    // Enviar el formulario
    document.getElementById('formulario').submit();
}