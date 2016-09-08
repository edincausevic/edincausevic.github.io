<?php

    // save input values
    $title = $_POST['title'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    
    // setup email info
    $to      = "causevicedinbih@gmail.com";
    $subject = $title;
    $txt     = $msg;
    $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    // send email
    $send = mail($to,$subject,$txt,$headers);
    
    // check if email is send or not
    if ( $send ) {
        echo 'success';
    }else {
        echo 'error';
    }
?>