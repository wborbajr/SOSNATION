<?php

require_once ("include/debug.inc.php");
include ("include/PDOConnectionFactory.class.php");

echo "1";

$conn = PDOConnectionFactory::getConnection();
$sql	= "SELECT * FROM login";
$stmt	= $conn->query($sql);

echo "STMT: " . $stmt;

// foreach($stmt as $row) {
// 	echo $row['senha'];
// }

// if (class_exists('PDO')) {
// 	echo "done";
// }else {
// 	echo "none";
// }

?>