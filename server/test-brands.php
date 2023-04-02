<!DOCTYPE html>
<html>
<head>
<title>Kite Stationery Brands</title>

<link rel="stylesheet" href="./css/common.css">

</head>
<body>

<h1>Kite Stationery Brands</h1>

<div style="margin-bottom:25px;">Go <a href="index.html">BACK</a> to Home Page.</div>
    
<?php

    echo "<table class='table-data'>";
    echo "<tr><th>Id</th><th>Name</th><th>Icon</th></tr>";

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
            SELECT brand_id, brand_name, brand_icon 
            FROM brands
        ");        
        
        $stmt->execute();

        // We are are creating a row of data in associative array for, and we are using the echo statement to print out the information in the browser, to test if we are getting the data as expected
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
            echo "<tr>";

            echo "<td>" . $row['brand_id'] . "</td>";
            echo "<td>" . $row['brand_name'] . "</td>";
            echo "<td><img src=\"" . $row['brand_icon'] . "\"/></td>";

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