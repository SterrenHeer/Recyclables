<?php

require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'ggkp.11@mail.ru';
$mail->Password = 'evUWkq33SMdbb6eAb7qt';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('ggkp.11@mail.ru');
$mail->addAddress('sterrenheer@gmail.com');
$mail->isHTML(true);

// $token = "7243538546:AAGpadMB8B0_mSnr4tqpXVuOc4ggBsM-PC0";
// $chat_id = "-4226805402";

$theme = ($_POST['theme']);
$name = ($_POST['name']);
$surname = ($_POST['surname']);
$patronymic = ($_POST['patronymic']);
$phone = ($_POST['phone']);
$address = ($_POST['address']);
$weight = ($_POST['weight']);
$type = ($_POST['type']);
$email = ($_POST['email']);
$message = ($_POST['message']);

$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_content = $_POST['utm_content'];
$utm_term = $_POST['utm_term'];

$arr = [];

if(isset($theme) && $theme !== '')
    $arr['Тема:'] = $theme;
if(isset($surname) && $urname !== '')
    $arr['Фамилия:'] = $surname;
if(isset($name) && $name !== '')
    $arr['Имя:'] = $name;
if(isset($patronymic) && $patronymic !== '')
    $arr['Отчество:'] = $patronymic;
if(isset($phone) && $phone !== '')
    $arr['Телефон:'] = $phone;
if(isset($email) && $email !== '')
    $arr['E-mail:'] = $email;
if(isset($message) && $message !== '')
    $arr['Сообщение:'] = $message;
if(isset($address) && $address !== '')
    $arr['Адрес:'] = $address;
if(isset($weight) && $weight !== '')
    $arr['Приблизительный вес:'] = $weight;
if(isset($type) && $type !== '')
    $arr['Вид вторсырья:'] = $type;

if(isset($utm_source) && $utm_source !== '')
    $arr['utm_source:'] = $utm_source;
if(isset($utm_medium) && $utm_medium !== '')
    $arr['utm_medium:'] = $utm_medium;
if(isset($utm_campaign) && $utm_campaign !== '')
    $arr['utm_campaign:'] = $utm_campaign;
if(isset($utm_content) && $utm_content !== '')
    $arr['utm_content:'] = $utm_content;
if(isset($utm_term) && $utm_term !== '')
    $arr['utm_term:'] = $utm_term;

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."<br>";
};

$mail->Subject = $theme;
$mail->Body = $txt;
                  
$mail->AltBody = '';

// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$mail->send()
?>
