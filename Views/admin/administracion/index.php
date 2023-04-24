<?php include_once 'Views/template/header-admin.php'; ?>
<div id="layoutSidenav_content">
    <div class="container-fluid px-4">
        <h1 class="mt-4">Dashboard</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Dashboard</li>
        </ol>
        <div class="row">
            <div class="col-xl-3 col-md-6">
                <div class="card bg-primary text-white mb-4">
                    <div class="card-body">Pedidos Pendientes</div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <h4 class="small text-white text-info"><?php echo $data['pedientes']['total'] ?></h4>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card bg-warning text-white mb-4">
                    <div class="card-body">Pedidos en Proceso</div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <h4 class="small text-white stretched-link"><?php echo $data['procesos']['total'] ?></h4>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card bg-success text-white mb-4">
                    <div class="card-body">Pedidos Finalizados</div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <h4 class="small text-white stretched-link"><?php echo $data['finalizados']['total'] ?></h4>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card bg-danger text-white mb-4">
                    <div class="card-body">Total Productos</div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <h4 class="small text-white stretched-link"><?php echo $data['productos']['total']; ?></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-chart-area me-1"></i>
                        Productos con stock mínimo
                    </div>
                    <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-chart-bar me-1"></i>
                        Pedidos
                    </div>
                    <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                </div>
            </div>
        </div>
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-chart-area me-1"></i>
                Productos mas vendidos
            </div>
            <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
        </div>
    </div>

    <?php include_once 'Views/template/footer-admin.php'; ?>

    </body>

    </html>