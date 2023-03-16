<?php include_once 'Views/template/header-admin.php'; ?>
<div id="layoutSidenav_content">
    <div class="container-fluid px-4">
        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover" style="width: 100">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Foto</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="<?php BASE_URL . 'assets/DataTables/datatables.min.js'; ?>"></script>
<script src="<?php BASE_URL . 'assets/js/clientes.js'; ?>"></script>
<?php include_once 'Views/template/footer-admin.php'; ?>
</body>

</html>