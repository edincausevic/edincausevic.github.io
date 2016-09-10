<?php

// save input values
$email = $_POST['var1'];
$url = $_POST['var2'];
$msg = $_POST['var3'];

// setup email info
$to      = "wersastudio@gmail.com";
$subject = 'Deggesting Content';
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