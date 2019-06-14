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
        } else {
            echo 'API ERROR: Wrong request';
        }
    } else {
        echo 'API ERROR: Wrong method';
    }
?>
