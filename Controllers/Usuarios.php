<?php
class Usuarios extends Controller
{
    public function __construct()
    {
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
        $data = $this->model->getUsuarios(1);
        header('Content-Type: application/json');
        for ($i = 0; $i < count($data); $i++) {
            $data[$i]['accion'] = '                <div class="d-flex">
            <button class="btn btn-primary" type="button"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger" type="button" onclick="eliminarUser(' . $data[$i]['id'] . ')"><i class="fas fa-trash"></i></button>
        </div>';
        }
        echo json_encode($data);
        die();
    }

    public function registrar()
    {
        if (isset($_POST['nombre'])) {
            if (empty($_POST['nombre']) || empty($_POST['apellido']) || empty($_POST['correo']) || empty($_POST['clave'])) {
                $mensaje = array('msg' => 'Todos los campos son requeridos', 'icono' => 'warning');
            } else {
                $nombre = $_POST['nombre'];
                $apellido = $_POST['apellido'];
                $correo = $_POST['correo'];
                $clave = $_POST['clave'];
                $hash = password_hash($clave, PASSWORD_DEFAULT);
                $result = $this->model->verificarCorreo($correo);
                if (empty($result)) {
                    $data = $this->model->registrar($nombre, $apellido, $correo, $hash);
                    if ($data > 0) {
                        $mensaje = array('msg' => 'Usuario registrado', 'icono' => 'success');
                        header('Content-Type: application/json');
                        echo json_encode($mensaje);
                        die();
                    } else {
                        $mensaje = array('msg' => 'Error al registrar', 'icono' => 'error');
                    }
                } else {
                    $mensaje = array('msg' => 'El correo ya esta registrado', 'icono' => 'warning');
                }
                echo json_encode($mensaje);
            }
        }
        die();
    }
    //eliminar usuario
    public function delete($idUser)
    {
        if (is_numeric($idUser)) {
            $data = $this->model->eliminar($idUser);
            if ($data == 1) {
                $mensaje = array('msg' => 'Usuario dado de baja', 'icono' => 'success');
                header('Content-Type: application/json');
                echo json_encode($mensaje);
                die();
            } else {
                $mensaje = array('msg' => 'Error al eliminar', 'icono' => 'error');
            }
        } else {
            $mensaje = array('msg' => 'Error desconocido', 'icono' => 'error');
        }
        echo json_encode($mensaje);
        die();
    }
}
