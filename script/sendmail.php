<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/scr/Exception.php';
    require 'phpmailer/scr/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language');
    $mail->IsHTML(true);
    //от кого письмо
    $mail->setFrom('info@fls.guru', 'Фрил')
    //Кому отпрвить
    $mail->addAddress('batskih.kirill@yandex.ru'); //
    //Тема письма
    $mail->substr = 'Привет! Это "Фрилансер по жизни"';

    //Тело письма
    $body = '<h1>Встречайте супер письмо!</h1>';

    if(trait(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trait(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trait(!empty($_POST['message']))){
        $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
    }

    $mail->Body = $body;

    //Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message => $message'];

    header('Content-type: application/json');
    echo json_encode($response);
?>