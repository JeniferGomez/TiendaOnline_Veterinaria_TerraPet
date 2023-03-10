const frm = document.querySelector('#formulario');
const email = document.querySelector('#email');
const clave = document.querySelector('#clave');

document.addEventListener('DOMContentLoaded', function() {
    frm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (email.value.trim() === '' || clave.value.trim() === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Aviso',
                text: 'Todos los campos son requeridos',
                confirmButtonText: 'OK'
            });
        } else {
            let data = new FormData(this);
            const url = base_url + 'admin/validar';
            const http = new XMLHttpRequest();
            http.open('POST', url, true);
            http.send(data);
            http.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                    const res = JSON.parse(this.responseText);
                    if (res.icono == 'success') {
                        setTimeout(() => {
                            window.location = base_url + 'admin/home';
                        }, 2000);
                    }
                    alert(res.msg, res.icono);
                }
            }
        }
    })
});

$.ajax({
    url: 'Admin.php',
    type: 'POST',
    data: { email: email, clave: clave },
    dataType: 'json',
    success: function(respuesta) {
        if (respuesta.icono == 'success') {
            Swal.fire({
                icon: respuesta.icono,
                title: respuesta.msg,
                showConfirmButton: false,
                timer: 1500
            }).then((result) => {
                window.location.href = 'home.php';
            });
        } else {
            Swal.fire({
                icon: respuesta.icono,
                title: respuesta.msg
            });
        }
    }
});