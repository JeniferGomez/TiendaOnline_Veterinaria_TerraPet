const frm = document.querySelector('#formulario');
document.addEventListener('DOMContentLoaded', function() {
    frm.addEventListener('submit', function(e) {
        e.preventDefault();
    })
});