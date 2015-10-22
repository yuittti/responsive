<?php

mysqli_report(MYSQLI_REPORT_STRICT);

try {
    $mysqli = new mysqli("localhost", "root", "", "site1") ;
} catch (Exception $e) {
	echo "Не удалось соединиться с сервером.\nПопробуйте еще раз!";
    exit;
}

?>