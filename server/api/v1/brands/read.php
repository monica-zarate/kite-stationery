<?php

// Required headers
// This will allow requests from any domain
header("Access-Control-Allow-Origin: *");

// Set the type to be json
header("Content-Type: application/json; charseet=UTF-8");

// DB Class and Brand Class
include_once '../config/database.php';
include_once '../objects/brand.php';

// Instantiate a new object of the Database Class, request the connection and assign it to the $db variable
$database = new Database();
$db = $database->getConnection();

// Instantiate a new Category object passing the $db connections as a parameter, read the data and assign it to the $stmt variable
$location = new Category($db);
$stmt = $location->read();

// Check the brands records row count
$rowNum = $stmt->rowCount();


if ($rowNum > 0) {
    
    // If we get at least one result back, we create the brand_arr variable
    $brand_arr = array();

    // Pass the number of rows as the 'count' key
    $brand_arr['count'] = $rowNum;

    // We define the brands as an array
    $brand_arr['brands'] = array();

    // An associative array will return the row of data per product record
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        // We use the extract method to get all the keys from the data rows as variables
        extract($row);

        // Creating a brand_item per brand row on the database
        $brand_item = array(
            'brand_id' => $brand_id,
            'brand_name' => $brand_name,
            'brand_icon' => $brand_icon
        );

        // Push the current item onto the brands array
        array_push($brand_arr['brands'], $brand_item);

    }

    // Set the response
    http_response_code(200);

    // We return the stringified brand_arr using the json_encode method
    echo json_encode($brand_arr);

} else {
    // No records found
    // Set the response
    http_response_code(404);

    echo json_encode(
        array("message" => "No brands found")
    );
}

?>