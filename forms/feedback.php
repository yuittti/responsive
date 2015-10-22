<?php
include "/../forms/validate.php";

	if (isset($_POST['fio'])){
		$fio=$_POST['fio'];
	}

	if (isset($_POST['email'])){
		$email=$_POST['email'];
	}

	if (isset($_POST['phone'])){
		$phone=$_POST['phone'];
	}

	if (isset($_POST['message'])){
		$message=$_POST['message'];
	}

	$fio = $valid->validateName($fio);
	$email = $valid->validateEmail($email);
	$phone = $valid->validatePhone($phone);
	$message = $valid->validateMessage($message);

	if (!$fio || !$email || !$phone || $message==-1) {
		echo "Не удалось отправить сообщение!\nВозможно вы некорректно заполнили форму.";
	} else {
		include "/../forms/db-connect.php";

		$ip=$_SERVER['REMOTE_ADDR'];
		$mysqli->query("INSERT INTO mod_feedback (fio, email, phone, descr, dt, ip)
						VALUES ('$fio', '$email', '$phone', '$message', NOW(), '$ip')");

		if ($mysqli->sqlstate!="00000") {
			echo "Не удалось сохранить сообщение.\nПопробуйте еще раз!";
		} else {
			$mailMessage = "Новое сообщение с сайта:\n"."ФИО: ".$fio."\nEmail: ".$email.
							"\nТелефон: ".$phone."\nСообщение: ".$message."\nIP: ".$ip;
			mail("ihor@seotm.com", "Новое сообщение на сайте", $mailMessage);
			echo $fio.", ваше сообщение успешно отправлено!\nМы ответим на него в ближайшее время!\nСпасибо!";
		}
	}

?>