<?php
include 'config/db.php';
include 'mailer.php';

function displayBlogposts() {
    return json_encode(getBlogposts());
}

function getBlogposts() {
    global $database;
    $sql = "SELECT * FROM blogposts";
    $sth = $database->prepare($sql);
    $sth->execute();

    $obj = (object) [
        'blog' => $sth->fetchAll(PDO::FETCH_ASSOC)
    ];
    return ($obj);
}

function displayPortfolio() {
    return json_encode(getPortfolio());
}

function getPortfolio() {
    global $database;
    $sql = "SELECT * FROM portfolio";
    $sth = $database->prepare($sql);
    $sth->execute();

    $obj = (object) [
        'portfolioItem' => $sth->fetchAll(PDO::FETCH_ASSOC)
    ];
    return ($obj);
}

function displayArticles($text) {
    return json_encode(getArticles($text));
}

function getArticles($text) {
    global $database;
    $text = htmlspecialchars($text);
    $get_article = $database->prepare("SELECT * FROM blogposts WHERE titel LIKE concat('%' :titel, '%')");
    $get_article->execute(array('titel' => $text));
    $obj = (object) [
        'blogpostItem' => $get_article->fetchAll(PDO::FETCH_ASSOC)
    ];
    return $obj;
}

function sendEmail($firstName, $lastName, $sender, $subject, $text) {
    sendEmailFunc($firstName, $lastName, $sender, $subject, $text);
}
?>