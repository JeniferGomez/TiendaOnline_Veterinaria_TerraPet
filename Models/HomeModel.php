<?php
class HomeModel extends Query{

    public function __construct()
    {
        parent::__construct();
    }
    //traer las categorias y produsctos de la base de datos
    public function getCategorias()
    {
        $sql = "SELECT * FROM categorias";
        return $this -> selectAll($sql);
    }
    public function getNuevoProductos()
    {
        $sql = "SELECT * FROM productos ORDER BY id DESC LIMIT 12";
        return $this -> selectAll($sql);
    }
}

?>