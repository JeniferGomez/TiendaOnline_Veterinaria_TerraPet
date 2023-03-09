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
}

?>