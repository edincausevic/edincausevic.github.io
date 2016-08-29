<?PHP

$myEmailAddress = "causevicedinbih@gmail.com";

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$text = $_POST["text"];
$header = "from: $name <$email>";

mail($myEmailAddress, $subject, $text, $header);

?>