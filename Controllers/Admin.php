<?php
class Admin extends Controller
{
    public function __construct()
    {
        parent::__construct();
        session_start();
    }
    public function index()
    {
        $data['title'] = 'Acceso al sistema';
        $this->views->getView('admin', "login", $data);
    }
    public function validar()
    {
        if (isset($_POST['email']) && isset($_POST['clave'])) {
            if (empty($_POST['email']) || empty($_POST['clave'])) {
                $mensaje = array('msg' => 'Todos los campos son requeridos', 'icono' => 'warning');
            } else {
                $data = $this->model->getUsuario($_POST['email']);
                if (empty($data)) {
                    $mensaje = array('msg' => 'El correo no existe', 'icono' => 'warning');
                } else {
                    if (password_verify($_POST['clave'], $data['clave'])) {
                        $_SESSION['email'] = $data['correo'];
                        $mensaje = array('msg' => 'Datos correctos', 'icono' => 'success');
                    } else {
                        $mensaje = array('msg' => 'Contraseña incorrecta', 'icono' => 'warning');
                    }
                }
            }
        } else {
            $mensaje = array('msg' => 'Error desconocido', 'icono' => 'error');
        }
        echo json_encode($mensaje, JSON_UNESCAPED_UNICODE);
        
        die();
    }

    public function home()
    {
        $data['title'] = 'Panel Administrativo';
        $data['pedientes'] = $this->model->getTotales(1);
        $data['procesos'] = $this->model->getTotales(2);
        $data['finalizados'] = $this->model->getTotales(3);
        $data['productos'] = $this->model->getProductos();
        $this->views->getView('admin/administracion', "index", $data);
    }

    public function salir()
    {
        session_destroy();
        header('Location: ' . BASE_URL);
    }

    public function productosMinimos()
    {
        $data = $this->model->productosMinimos();
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        die();
    }
}
