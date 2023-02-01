<?php
class Clientes extends Controller
{
    public function __construct() {
        parent::__construct();
        session_start();
    }
    public function index()
    {
        $data['title'] = 'Tu perfil';
        $this->views->getView('principal', "perfil", $data);
    }
    
}