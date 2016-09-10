<?php

    // save input values
    $title = $_POST['var1'];
    $email = $_POST['var2'];
    $msg = $_POST['var3'];
    
    // setup email info
    $to      = "wersastudio@gmail.com";
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