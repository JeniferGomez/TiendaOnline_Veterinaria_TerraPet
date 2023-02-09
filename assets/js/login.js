const btnRegister = document.querySelector('#btnRegister');
const btnLogin = document.querySelector('#btnLogin');
const frmLogin = document.querySelector('#frmLogin');
const frmRegister = document.querySelector('#frmRegister');
const registrarse = document.querySelector('#registrarse');
const login = document.querySelector('#login');

const nombreRegistro = document.querySelector('#nombreRegistro');
const claveRegistro = document.querySelector('#claveRegistro');
const correoRegistro = document.querySelector('#correoRegistro');

const correoLogin = document.querySelector('#correoLogin');
const claveLogin = document.querySelector('#claveLogin');


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
            if (nombreRegistro.value == '' || correoRegistro.value == '' || claveRegistro.value == '') {
                Swal.fire('Aviso', 'Todos los campos son requeridos', 'warning');
            } else {
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
                                enviarCorreo(correoRegistro.value, res.token);
                            }, 2000);
                        }
                    }
                }
            }


        })
        //login directo
    login.addEventListener('click', function() {
        if (correoLogin.value == '' || claveLogin.value == '') {
            Swal.fire('Aviso', 'Todos los campos son requeridos', 'warning');
        } else {
            let formData = new FormData();
            formData.append('correoLogin', correoLogin.value);
            formData.append('claveLogin', claveLogin.value);
            ////////////
            const url = base_url + 'clientes/loginDirecto';
            const http = new XMLHttpRequest();
            http.open('POST', url, true);
            http.send(formData);
            http.onreadystatechange = function() {
                console.log(this.responseText);
                //if (this.readyState == 4 && this.status == 200) {
                //const res = JSON.parse(this.responseText);
                //Swal.fire('Aviso', res.msg, res.icono);
                //if (res.icono == 'success') {

                //  }
                //}
            }
        }


    })
});

function enviarCorreo(correo, token) {
    let formData = new FormData();
    formData.append('token', token);
    formData.append('correo', correo);
    const url = base_url + 'clientes/enviarCorreo';
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
                }, 4000);
            }
        }
    }
}