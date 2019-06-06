<?php
include ('display_blogposts.php');
    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        if($_GET['request']=='getBlogposts') {
            echo (displayBlogposts());
        } else {
            echo 'API ERROR: Wrong request';
        }
    } else {
        echo 'API ERROR: Wrong method';
    }
?>
