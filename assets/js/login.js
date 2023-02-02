const btnRegister = document.querySelector('#btnRegister');
const btnLogin = document.querySelector('#btnLogin');
const frmLogin = document.querySelector('#frmLogin');
const frmRegister = document.querySelector('#frmRegister');
document.addEventListener('DOMContentLoaded', function() {
    btnRegister.addEventListener('click', function() {
        frmLogin.classList.add('d-none');
        frmRegister.classList.remove('d-none');
    })
    btnLogin.addEventListener('click', function() {
        frmRegister.classList.add('d-none');
        frmLogin.classList.remove('d-none');
    })
});