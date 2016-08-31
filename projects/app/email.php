<?php

session_start(); 

	$name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["text"];
    $subject = $_POST["subject"];
    $EmailTo = "mrcausevic@gmail.com";
    $EmailFrom = "contact@zahnhofer.at";
    
    // prepare email body text
	$Body = "";
	$Body .= "Name: ";
	$Body .= $name;
	$Body .= "\n";
	$Body .= "Email: ";
	$Body .= $email;
	$Body .= "\n";
	$Body .= "Message: ";
	$Body .= $message;
	$Body .= "\n";
	
	
	// send email
	$success = mail($EmailTo, $subject, $Body, "From:".$EmailFrom);
	unset ($EmailTo);
	// redirect to success page
	
	if ($success){
   		$_SESSION['msg'] = '<p>Poslao</p>';
   		
	}else{
        $_SESSION['msg'] = '<p>GreskAAAAAA</p>';
	}

?>
