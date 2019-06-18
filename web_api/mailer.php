<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
function sendEmailFunc($firstName, $lastName, $sender, $subject, $body) {
    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = 2;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host       = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'user@example.com';                     // SMTP username
        $mail->Password   = 'secret';                               // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom($sender, 'Website User');
        $mail->addAddress('info@mintrexo.net', 'Mintrexo Webdesign');     // Add a recipient
        $mail->addReplyTo('info@example.com', 'Information');

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Mintrexo contact form: '.$subject;
        $mail->Body    = 'User: '.$firstName.' '.$lastName.'<br>'.$body;
        $mail->AltBody = 'User: '.$firstName.' '.$lastName.'
        '.$body;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
