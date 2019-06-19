<?php
header("Access-Control-Allow-Origin: *");
include ('display.php');
    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        if($_GET['request']=='getBlogposts') {
            echo (displayBlogposts());
        } elseif($_GET['request']=='getPortfolio') {
            echo (displayPortfolio());
        } elseif($_GET['request']=='getArticles' && !empty($_GET['article'])) {
            echo (displayArticles($_GET['article']));
        } elseif($_GET['request']=='sendEmail'){
            sendEmail($_GET['firstName'],$_GET['lastName'],$_GET['email'],$_GET['subject'],$_GET['message']);
        } else {
            echo json_encode('API ERROR: Wrong request');
        }
    } else {
        echo json_encode('API ERROR: Wrong method');
    }
?>
