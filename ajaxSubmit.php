<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "From:". $email . "\r\n";
$header .= "X-Mailer: PHP /" . phpversion(). "\r\n";
$header .= "MIME Version: 1.0 \r\n";
$header .= "Content Type: text/plain";

$comment = "This message has been sent by " . $name . "\r\n";
$comment .= "Email is: " .$email. "\r\n";
$comment .= 'His message is: '.$message. "\r\n";

$for = "mushhrath@gmail.com";
$subject = "Contact From Website";

mail($subject, utf8_decode($comment), $header);

echo json_encode(array(
        'Message' => sprintf("your message has been sent %s", $name);
    ));
?>
