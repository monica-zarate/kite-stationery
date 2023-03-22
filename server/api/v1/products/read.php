<?php

// the read action (controller) for products will go here

// Required headers
// This will allow requests from any domain
header("Access-Control-Allow-Origin: *");

// Set the type to be json
header("Content-Type: application/json; charseet=UTF-8");

// Include DB Class and Product Class – the later is the model
include_once '../config/database.php';
include_once '../objects/product.php';

// Instantiate the database and get a connection
$database = new Database();
$db = $database->getConnection();

// Init the Product object (IE the model)
// Excecute the statement
$location = new Product($db);
$stmt = $location->read();

// Check the row count
$num = $stmt->rowCount();

if ($num > 0) {
    // Prepare the result
    // This array will be stringified and returned
    $product_arr = array();

    // Add the count to the root
    $product_arr['count'] = $num;

    // Here we'll loop and add the records
    $product_arr['products'] = array();

    // Associative array will return the row with all fields
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        // Here we can use extract, to pull all the keys from rows as variables
        extract($row);

        $product_item = array(
            'id' => $id,
            'name' => $name,
            'description' => $description,
            'price' => $price,
            'image' => $image,
            'category' => $category,
            'brand' => $brand
        );

        // Push the current item onto the products
        array_push($product_arr['products'], $product_item);

    }

    // Set the response
    http_response_code(200);

    // Return product_arr stringified (ie as JSON)
    echo json_encode($product_arr);

} else {
    // No records found
    // Set the response
    http_response_code(404);

    echo json_encode(
        array("message" => "No products found")
    );
}

?>