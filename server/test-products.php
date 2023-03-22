<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>

<link rel="stylesheet" href="./css/common.css">

</head>
<body>

<h1>Test Products Table</h1>

<ul>
    <li>Uses PHP Data Object (PDO) to make the data connection</li>
    <li>Since PDO can throw errors (halts code) and exceptions (might still proceed), we can put our Db code in a try block with a catch to follow </li>        
    <li>In this case we catch specifically any PDOException and write the error message.
    <li>We create a connection object using PDO, passing the host, db name, username and password (you might have to change the last two)</li>
    <li>For attributes we set ATTR_ERRMODE and ERRMODE_EXCEPTION.  PDO will handle errors pretty effectively so you don't always need a catch but in this case for the connection it will reveal issues such as bad password. </li>
    <li>PDO can return a number of different ways, here we just use an associative array.  IE an array where we can use the keys instead of just the indecies</li>    
</ul>


<div style="margin-bottom:25px;">Go <a href="index.html">BACK</a> to first page.</div>
    
<?php

    echo "<table class='table-data'>";
    echo "<tr><th>Id</th><th>Name</th><th>Description</th><th>Price</th><th>Image</th><th>Category</th><th>Brand</th></tr>";

    $host = "localhost";
    $username = "root";
    $password = "root";
    $db_name = "kite-stationery";

    try {
        // create the connection object using the credentials above
        $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);                

        // set client character set
        $conn->exec("SET NAMES utf8");

        // this will allow the connections to throw errors as exceptions (they are caught below)
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // the sql statement to execute
        $stmt = $conn->prepare("
            SELECT id, name, description, price, image, category, brand 
            FROM products
        ");        
        
        $stmt->execute();

        // this gets an associative array (ie the keys can be used as well as the indicies)
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
            echo "<tr>";

            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['description'] . "</td>";
            echo "<td>" . $row['price'] . "</td>";
            echo "<td>" . $row['image'] . "</td>";
            echo "<td>" . $row['category'] . "</td>";
            echo "<td>" . $row['brand'] . "</td>";

            echo "</tr>";            
        }

    } 
    catch(PDOException $e) {
        // if the try block throws and error or exception it will run to here
        echo "Error: " . $e->getMessage();
    }
    
    $conn = null;
    echo "</table>";

   
?>

</body>
</html>