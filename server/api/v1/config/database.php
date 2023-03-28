<?php

class Database{

    // Database connection details are kept private so they cannot be accessed outside of this class
    private $host = "localhost";
    private $username = "root";
    private $password = "root";
    private $db_name = "kite-stationery";

    // The connection variable is initiated
    public $conn;

    // Create the database connection method:
    public function getConnection(){

        // Reset the connection, in case there's an active one
        $this->conn = null;

        // We create a new instance of the PDO Class by passing the access credentials to establish the database connection
        try {
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->db_name", $this->username, $this->password);
            $this->conn->exec("SET NAMES utf8");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            // Print out errors or exceptions
            echo "Error: " . $e->getMessage();
        }
        return $this->conn;
    }
}

?>