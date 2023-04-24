<?php
class AdminModel extends Query{

    public function __construct()
    {
        parent::__construct();
    }
    //traer las categorias y produsctos de la base de datos
    public function getUsuario($correo)
    {
        $sql = "SELECT * FROM usuarios WHERE correo = '$correo'";
        return $this -> select($sql);
    }
    public function getTotales($estado)
    {
        $sql = "SELECT COUNT(*) AS total FROM pedidos WHERE proceso = $estado";
        return $this -> select($sql);
    }
    public function getProductos()
    {
        $sql = "SELECT COUNT(*) AS total FROM productos WHERE estado = 1";
        return $this -> select($sql);
    }
}

?>