<?php

include('db_connection.php');

$sql = "SELECT * FROM places ORDER BY id DESC";
$result = $conn->query($sql);

$places = array();
while($row = $result->fetch_assoc()) {
    $places[] = $row;
}

echo json_encode($places);

$conn->close();
?>
