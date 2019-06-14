<?php
include 'config/db.php';

function displayBlogposts() {
    return json_encode(getBlogposts());
}

function getBlogposts() {
    global $database;
    $sql = "SELECT * FROM blogposts";
    $sth = $database->prepare($sql);
    $sth->execute();
    return ($sth->fetchAll(PDO::FETCH_ASSOC));
}

?>