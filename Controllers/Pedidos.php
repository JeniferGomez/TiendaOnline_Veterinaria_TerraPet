<?php
class Pedidos extends Controller
{
    public function __construct()
    {
        parent::__construct();
        session_start();
    }
    public function index()
    {
        $data['title'] = 'Pedidos';
        $this->views->getView('admin/pedidos', "index", $data);
    }
    public function listarPedidos()
    {
        $data = $this->model->getPedidos(1);
        header('Content-Type: application/json');
        for ($i = 0; $i < count($data); $i++) {
            $data[$i]['accion'] = '<div class="d-flex">
            <button class="btn btn-success" type="button" onclick="verPedido(' . $data[$i]['id'] . ')"><i class="fas fa-eye"></i></button>
            <button class="btn btn-info" type="button" onclick="cambiarProceso(' . $data[$i]['id'] . ', 2)"><i class="fas fa-check-circle"></i></button>
        </div>';
        }
        echo json_encode($data);
        die();
    }

    public function listarProceso()
    {
        $data = $this->model->getPedidos(2);
        header('Content-Type: application/json');
        for ($i = 0; $i < count($data); $i++) {
            $data[$i]['accion'] = '<div class="d-flex">
            <button class="btn btn-success" type="button" onclick="verPedido(' . $data[$i]['id'] . ')"><i class="fas fa-eye"></i></button>
            <button class="btn btn-info" type="button" onclick="cambiarProceso(' . $data[$i]['id'] . ', 3)"><i class="fas fa-check-circle"></i></button>
        </div>';
        }
        echo json_encode($data);
        die();
    }

    public function listarFinalizados()
    {
        $data = $this->model->getPedidos(3);
        header('Content-Type: application/json');
        for ($i = 0; $i < count($data); $i++) {
            $data[$i]['accion'] = '<div class="d-flex">
            <button class="btn btn-success" type="button" onclick="verPedido(' . $data[$i]['id'] . ')"><i class="fas fa-eye"></i></button>
        </div>';
        }
        echo json_encode($data);
        die();
    }

    public function update($datos)
    {
        $array = explode(',', $datos);
        $idPedido = $array[0];
        $proceso = $array[1];
        if (is_numeric($idPedido)) {
            $data = $this->model->actualizarEstado($proceso, $idPedido);
            if ($data == 1) {
                $mensaje = array('msg' => 'Pedido actualizado', 'icono' => 'success');
                header('Content-Type: application/json');
                echo json_encode($mensaje);
                die();
            } else {
                $mensaje = array('msg' => 'Error al actualizar', 'icono' => 'error');
            }
            echo json_encode($mensaje);
        }
        die();
    }
}