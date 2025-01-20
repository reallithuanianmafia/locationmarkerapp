<?php
include('db_connection.php');

$name = $_POST['name'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];

$sql = "INSERT INTO places (name, lat, lng) VALUES ('$name', '$lat', '$lng')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
