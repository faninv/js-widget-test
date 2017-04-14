<?php 

//echo Hi;

if(!isset($_GET['callback'])){
	echo "ERROR: you must pass a callback parameter";
} else {
	//header("Content-Type: application/json");
    echo $_GET['callback'] . '(' . '{"class": "widget-default", "title": "some_title", "description": "some_description", "image": "/some/url.jpg", "avatars": "/some/url.png", "bullets": ""}' . ')';

}


?>
