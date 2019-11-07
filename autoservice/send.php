<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$quest = $_REQUEST['quest'];
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html;charset=utf-8 \r\n";

$message = "<p>Новый вопрос</p>
<p><strong>Имя:</strong> $name</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Вопрос:</strong> $quest</p>";

mail( "activityorlov@yandex.ru", "Сообщение с сайта",
    $message, $headers );
  header( "Location: http://ваш сайт/thankyou.html" );
?>
