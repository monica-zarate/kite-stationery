<?php

// Database class with getConnection method to be added here

class Database{

    // Connection params and object members
    private $host = "localhost";
    private $username = "root";
    private $password = "root";
    private $db_name = "kite-stationery";

    // Connection to DB, this will be public
    public $conn;

    // Get the DB connection, this will be called by a given controller

    public function getConnection(){

        // In case a connection exists, we'll nulify it
        $this->conn = null;

        try {
            // create the connection object using the credentials above
        $this->conn = new PDO("mysql:host=$this->host;dbname=$this->db_name", $this->username, $this->password);                

        // set client character set
        $this->conn->exec("SET NAMES utf8");

        // this will allow the connections to throw errors as exceptions (they are caught below)
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            // if the try block throws and error or exception it will run to here
            echo "Error: " . $e->getMessage();
        }

        return $this->conn;
    }
}

?>