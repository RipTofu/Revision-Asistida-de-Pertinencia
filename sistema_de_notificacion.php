<?php
phpinfo();
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "lol";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $selectedOption = $_POST["radial-button"];
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'RevisionAsistidaDePertinencia@gmail.com';
    $mail->Password = 'Revasis9371T';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('RevisionAsistidaDePertinencia@gmail.com', 'Medico Contralor');
    $mail->addAddress('tasorek470@bixolabs.com', 'Recipient');
    $mail->Subject = 'Selected Option';
    $mail->Body = 'Selected Option: ' . $selectedOption;

    try {
        $mail->send();
        header("Location: thank_you.html");
        exit();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>