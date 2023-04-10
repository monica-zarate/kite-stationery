<?php

class Product {

    // Setting the connection variable as private, so it cannot be accessed outside of this class
    private $conn;

    // Implemented the same variables types as they were set up on the database
    public int $id;
    public string $name;
    public string $description;
    public float $price;
    public string $image;
    public string $category_name;
    public string $brand_name;

    // The constructor sets the database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // CRUD Methods: These should be public
    // Read Method will get products
    public function read($search_query){

        // form the JSON data into a WHERE clause for the query
        $where_block = $this->evalWhereBlock($search_query);
        
        // query that will return all product records
        $stmt = $this->conn->prepare("
            SELECT products.id, products.name, products.description, products.price, products.image, products.category_id, categories.category_name, products.brand_id, brands.brand_name
            FROM products 
            INNER JOIN categories ON categories.category_id = products.category_id
            INNER JOIN brands ON brands.brand_id = products.brand_id
            $where_block
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

    // Utility methods
    function evalWhereBlock($search_terms){

        // Check if the property exists
        if(property_exists($search_terms, "id")){
            $id_filter = htmlspecialchars(strip_tags($search_terms->id));
        }
        // Sanitize and handle empty (missing filters)
        $id_filter = (!empty($id_filter)) ? "products.id='$id_filter'" : "products.id LIKE '%'";

        // Check if the property exists
        if(property_exists($search_terms, "name")){
            $name_filter = htmlspecialchars(strip_tags($search_terms->name));
        }
        // Sanitize and handle empty (missing filters)
        $name_filter = (!empty($name_filter)) ? "products.name='$name_filter'" : "products.name LIKE '%'";

        // Check if the property exists
        if(property_exists($search_terms, "category_id")){
            $category_id_filter = htmlspecialchars(strip_tags($search_terms->category_id)); 
        }

        // Sanitize and handle empty (missing filters)
        $category_id_filter = (!empty($category_id_filter)) ? "categories.category_id='$category_id_filter'" : "categories.category_id LIKE '%'";

        // Check if the property exists
        if(property_exists($search_terms, "brand_id")){
            $brand_id_filter = htmlspecialchars(strip_tags($search_terms->brand_id)); 
        }

        // Sanitize and handle empty (missing filters)
        $brand_id_filter = (!empty($brand_id_filter)) ? "brands.brand_id='$brand_id_filter'" : "brands.brand_id LIKE '%'";

        return "WHERE $id_filter AND $name_filter AND $category_id_filter AND $brand_id_filter";
        }
}


?>