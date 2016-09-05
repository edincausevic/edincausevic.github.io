<?php

    $title = $_POST['title'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    
    $to      = "causevicedinbih@gmail.com";
    $subject = $title;
    $txt     = $msg;
    $headers = "From: -webmaster@example.com" . "\r\n" .
    "CC: somebodyelse@example.com";

    mail($to,$subject,$txt,$headers);

?>