<!DOCTYPE html>
<html>
<head>
<title>Kite Stationery Products</title>

<link rel="stylesheet" href="./css/common.css">

</head>
<body>

<h1>Kite Stationery Products</h1>

<div style="margin-bottom:25px;">Go <a href="index.html">BACK</a> to Home Page.</div>
    
<?php

    echo "<table class='table-data'>";
    echo "<tr><th>Id</th><th>Name</th><th>Description</th><th>Price</th><th>Image</th><th>Category Id</th><th>Category Name</th><th>Brand Id</th><th>Brand Name</th></tr>";

    $host = "localhost";
    $username = "root";
    $password = "root";
    $db_name = "kite-stationery";

    try {
        // We are establishing the connection with the database using the PDO object
        $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);                

        $conn->exec("SET NAMES utf8");

        // With the setAttribute method, we are asking the connection to the DB to throw errors as exceptions
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Create the SQL statement and execute it
        $stmt = $conn->prepare("
            SELECT products.id, products.name, products.description, products.price, products.image, products.category_id, categories.category_name, products.brand_id, brands.brand_name
            FROM products 
            INNER JOIN categories ON categories.category_id = products.category_id
            INNER JOIN brands ON brands.brand_id = products.brand_id
        ");        
        
        $stmt->execute();

        // We are are creating a row of data in associative array for, and we are using the echo statement to print out the information in the browser, to test if we are getting the data as expected
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
            echo "<tr>";

            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['description'] . "</td>";
            echo "<td>" . $row['price'] . "</td>";
            echo "<td><img src=\"" . $row['image'] . "\"/></td>";
            echo "<td>" . $row['category_id'] . "</td>";
            echo "<td>" . $row['category_name'] . "</td>";
            echo "<td>" . $row['brand_id'] . "</td>";
            echo "<td>" . $row['brand_name'] . "</td>";

            echo "</tr>";            
        }

    } 
    catch(PDOException $e) {
        // Print out errors or exceptions
        echo "Error: " . $e->getMessage();
    }
    
    $conn = null;
    
    // Print out the table with the data
    echo "</table>";
   
?>

</body>
</html>