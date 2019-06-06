<?php
function displayBlogposts() {
    $obj = (object) [
        'titel' => 'Blogpost 1',
        'beschrijving' => 'Leuke blogpost',
        'image_url' => 'https://google.com'
    ];
    return json_encode($obj);
}
?>