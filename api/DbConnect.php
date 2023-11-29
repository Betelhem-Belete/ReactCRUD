<?php
class DbConnect{
    private $server = 'localhost';
    private $dbname = 'reactcrud_php';
    private $user = 'root';
    private $pass = '';

    public function connect(){
        try{
            $conn = new PDO('mysql: host = ' . $this->server . ': dbname = ' . $this->dbname . ': user = ' . $this->user . ': pass = ' . $this->pass)
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)
            return $conn;
        } catch ()
    }
}