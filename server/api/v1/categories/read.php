<?php

// Required headers
// This will allow requests from any domain
header("Access-Control-Allow-Origin: *");

// Set the type to be json
header("Content-Type: application/json; charseet=UTF-8");

// DB Class and Category Class
include_once '../config/database.php';
include_once '../objects/category.php';

// Instantiate a new object of the Database Class, request the connection and assign it to the $db variable
$database = new Database();
$db = $database->getConnection();

// Instantiate a new Category object passing the $db connections as a parameter, read the data and assign it to the $stmt variable
$location = new Category($db);
$stmt = $location->read();

// Check the category records row count
$rowNum = $stmt->rowCount();


if ($rowNum > 0) {
    
    // If we get at least one result back, we create the category_arr variable
    $category_arr = array();

    // Pass the number of rows as the 'count' key
    $category_arr['count'] = $rowNum;

    // We define the categories as an array
    $category_arr['categories'] = array();

    // An associative array will return the row of data per category record
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        // We use the extract method to get all the keys from the data rows as variables
        extract($row);

        // Creating a category_item per category row on the database
        $category_item = array(
            'category_id' => $category_id,
            'category_name' => $category_name,
            'category_icon' => $category_icon
        );

        // Push the current item onto the categories array
        array_push($category_arr['categories'], $category_item);

    }

    // Set the response
    http_response_code(200);

    // We return the stringified category_arr using the json_encode method
    echo json_encode($category_arr);

} else {
    // No records found
    // Set the response
    http_response_code(404);

    echo json_encode(
        array("message" => "No categories found")
    );
}

?>