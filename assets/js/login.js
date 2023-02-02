const btnRegister = document.querySelector('#btnRegister');
const btnLogin = document.querySelector('#btnLogin');
const frmLogin = document.querySelector('#frmLogin');
const frmRegister = document.querySelector('#frmRegister');
const registrarse = document.querySelector('#registrarse');

const nombreRegistro = document.querySelector('#nombreRegistro');
const claveRegistro = document.querySelector('#claveRegistro');
const correoRegistro = document.querySelector('#correoRegistro');

document.addEventListener('DOMContentLoaded', function() {
    btnRegister.addEventListener('click', function() {
        frmLogin.classList.add('d-none');
        frmRegister.classList.remove('d-none');
    })
    btnLogin.addEventListener('click', function() {
            frmRegister.classList.add('d-none');
            frmLogin.classList.remove('d-none');
        })
        //registro
    registrarse.addEventListener('click', function() {
        let formData = new FormData();
        formData.append('nombre', nombreRegistro.value);
        formData.append('clave', claveRegistro.value);
        formData.append('correo', correoRegistro.value);
        ////////////
        const url = base_url + 'clientes/registroDirecto';
        const http = new XMLHttpRequest();
        http.open('POST', url, true);
        http.send(formData);
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                Swal.fire('Aviso', res.msg, res.icono);
                if (res.icono == 'success') {
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }
        }

    })
});