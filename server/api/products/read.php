<?php

// Required headers
// This will allow requests from any domain
header("Access-Control-Allow-Origin: *");

// Set the type to be json
header("Content-Type: application/json; charseet=UTF-8");

// DB Class and Product Class
include_once '../config/database.php';
include_once '../objects/product.php';

// Instantiate a new object of the Database Class, request the connection and assign it to the $db variable
$database = new Database();
$db = $database->getConnection();

// Instantiate a new Product object passing the $db connections as a parameter, read the data and assign it to the $stmt variable
$location = new Product($db);

// Sanitize the query params
$search_terms = (object)filter_input_array(INPUT_GET, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

$stmt = $location->read($search_terms);

// Check the product records row count
$rowNum = $stmt->rowCount();


if ($rowNum > 0) {
    
    // If we get at least one result back, we create the product_arr variable
    $product_arr = array();

    // Pass the number of rows as the 'count' key
    $product_arr['count'] = $rowNum;

    // We define the products as an array
    $product_arr['products'] = array();

    // An associative array will return the row of data per product record
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        // We use the extract method to get all the keys from the data rows as variables
        extract($row);

        // Creating a product_item per product row on the database
        $product_item = array(
            'id' => $id,
            'name' => $name,
            'description' => $description,
            'price' => $price,
            'image' => $image,
            'category_id' => $category_id,
            'category_name' => $category_name,
            'brand_id' => $brand_id,
            'brand_name' => $brand_name
        );

        // Push the current item onto the products array
        array_push($product_arr['products'], $product_item);

    }

    // Set the response
    http_response_code(200);

    // We return the stringified product_arr using the json_encode method
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