<?php
class Usuarios extends Controller
{
    public function __construct() {
        parent::__construct();
        session_start();
    }
    public function index()
    {
        $data['title'] = 'Usuarios';
        $this->views->getView('admin/usuarios', "index", $data);
    }
    public function listar()
    {
        $data = $this->model->getUsuarios();
        header('Content-Type: application/json');
        echo json_encode($data);
        die();
    }
    public function registrar()
    {
        if (isset($_POST['nombre'])) {
            if (empty($_POST['nombre']) || empty($_POST['apellido']) || empty($_POST['correo']) || empty($_POST['clave'])) {
                $mensaje = array('msg' => 'Todos los campos son requeridos', 'icono' => 'warning');
            }else {
                $nombre = $_POST['nombre'];
                $apellido = $_POST['apellido'];
                $correo = $_POST['correo'];
                $clave = $_POST['clave'];
                $hash = password_hash($clave, PASSWORD_DEFAULT);
                $data = $this->model->registrar($nombre, $apellido, $correo, $hash);
                if ($data > 0) {
                    $mensaje = array('msg' => 'Usuario registrado', 'icono' => 'success');
                } else {
                    $mensaje = array('msg' => 'Error al registrar', 'icono' => 'error');
                }
            }
            echo json_encode($mensaje);
        }

        die();
    }
}
?>