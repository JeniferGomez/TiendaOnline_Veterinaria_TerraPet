<?php
class UsuariosModel extends Query{

    public function __construct()
    {
        parent::__construct();
    }
    public function getUsuarios()
    {
        $sql = "SELECT id, nombres, apellidos, correo, perfil FROM usuarios";
        return $this -> selectAll($sql);
    }
}

?>