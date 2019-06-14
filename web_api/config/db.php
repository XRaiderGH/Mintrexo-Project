<?php
$dsn = 'mysql:dbname=mintrexo_main;host=127.0.0.1';
$user = 'mintrexo_root';
$password = ',tI_BUeLUF}2';
try {
    $database = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>