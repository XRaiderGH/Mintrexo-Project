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
        $mail->SMTPDebug = 0;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host       = 'mail.mintrexo.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'social@mintrexo.com';                     // SMTP username
        $mail->Password   = 'WY76J)A9q=04';                               // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom($sender);
        $mail->addAddress('info@mintrexo.com', 'Mintrexo Webdesign');     // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Mintrexo contact form: '.$subject;
        $mail->Body    = mailBody($firstName,$lastName,$body);
        $mail->AltBody = 'User: '.$firstName.' '.$lastName.'
        '.$body;

        $mail->send();
        echo json_encode("Message sent");
    } catch (Exception $e) {
        echo json_encode("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
}

function mailBody($firstName,$lastName,$body) {
    ob_start();
    ?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Mintrexo contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body style="margin: 0; padding: 0;">
        <h2>User: <?php echo $firstName . ' ' . $lastName; ?></h2>
        <p><strong>Message:</strong> <?php echo $body; ?></p>

    </body>
    </html>
    <?php
    return (ob_get_clean());
}
