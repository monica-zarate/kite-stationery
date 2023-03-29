<?php

class Category {

    // Setting the connection variable as private, so it cannot be accessed outside of this class
    private $conn;

    // Implemented the same variables types as they were set up on the database
    public int $id;
    public string $name;
    public string $icon;

    // The constructor sets the database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // CRUD Methods: These should be public
    // Read Method will get the brands
    public function read(){

        // query that will return all brands records
        $stmt = $this->conn->prepare("
            SELECT id, name, icon 
            FROM brands
        ");

        try {
            // execute the prepared statement and return it
            $stmt->execute();
            return $stmt;
            
        } catch(PDOException $e) {
            // Print out the errors or exceptions
            print("Error: " . $e->getMessage());
            return false;
        }
    }
}


?>