<?php

class Category {

    // Setting the connection variable as private, so it cannot be accessed outside of this class
    private $conn;

    // Implemented the same variables types as they were set up on the database
    public int $category_id;
    public string $category_name;
    public string $category_icon;

    // The constructor sets the database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // CRUD Methods: These should be public
    // Read Method will get the categories
    public function read(){

        // query that will return all categories records
        $stmt = $this->conn->prepare("
            SELECT category_id, category_name, category_icon 
            FROM categories
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