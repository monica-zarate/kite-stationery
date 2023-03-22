<?php

// products class to be added here

include_once 'address.php';

class Product {

    // Keep the connection instance in the object
    // This will get passed in the constructor and set there
    private $conn;

    // Note using stron typing here, not specifically a requirement
    // Not a bad idea to use the same name as the fields in the DB
    // Use '?' if the value can be null
    public int $id;
    public string $name;
    public string $description;
    public float $price;
    public string $image;
    public string $category;
    public string $brand;

    // Constructor will create the instance and set the connection
    public function __construct($db){
        // The DB connection will be established in the controller
        $this->conn = $db;
    }

    // CRUD Methods: These should be public
    // Read Method will get products, currently no filters
    public function read(){

        // Create our select all query
        $stmt = $this->conn->prepare("
            SELECT id, name, description, price, image, category, brand 
            FROM products
        ");

        try {
            // This will return to the point of call, IE the controller
            $stmt->execute();
            return $stmt;
            
        } catch(PDOException $e) {
            // Print out the error, normally you'd want to handle it gracefully
            print("Your fail message: " . $e->getMessage());
            return false;
        }
    }


    // Helper / utility methods: These are likely private

}


?>