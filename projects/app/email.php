<?php

// save input values
$name = $_POST['name'];
$email = $_POST['email'];
$sub = $_POST['subject'];
$msg = $_POST['text'];

// setup email info
$to      = "wersastudio@gmail.com";
$subject = $sub;
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
