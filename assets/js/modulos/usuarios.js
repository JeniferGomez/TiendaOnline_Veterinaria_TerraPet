document.addEventListener('DOMContentLoaded', function() {
    const table = new simpleDatatables.DataTable("#tblUsuarios", {
        columns: [
            { select: 0 },
            { select: 1 },
            { select: 2 },
            { select: 3 },
            { select: 4 }
        ],
        data: {
            type: "ajax",
            url: "<?php echo BASE_URL; ?>Controllers/Usuarios/listar",
            headers: {
                "Content-Type": "application/json"
            }
        }
    });
});
