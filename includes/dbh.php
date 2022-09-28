<?php
$servername = "gator3410.hostgator.com";
$username = "boyarone_db";
$password = "@vs!^9W%pa~+";
$dbName = $username;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbName);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>