<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, X-Requested-With, Accept');

$servername = "localhost";
$username = "user";
$password = "lak8shmi@19";
$dbname = "db_footwear_app";
$port = 443;
// $conn = new mysqli($servername, $username, $password, $dbname,$port);
// $conn = new mysqli($servername, $username, $password);
$conn = new mysqli($servername, $username, $password,$dbname) or die("Connect failed: %s\n". $conn -> error);

?>

