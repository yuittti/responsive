<?php 

class Validate {

	public function validateEmail($email){
		if (!empty($email)){
			$email = $this->clean($email);
			if (strlen($email)<=100 && filter_var($email, FILTER_VALIDATE_EMAIL)) {
				if (preg_match("~^.+@.+\..+$~i", $email)) {
					return $email;
				}
			}
		} 
		return false;
	}

	public function validateName($name){
		if (!empty($name)){
			$name = $this->clean($name);
			if (strlen($name)<=100) {
				if (preg_match("~[а-яёa-z ]+~i", $name)) {
					return $name;
				}
			}
		} 
		return false;
	}

	public function validatePhone($phone){
		if (!empty($phone)){
			$phone = $this->clean($phone);
			if (strlen($phone)<=20) {
				if (preg_match("~^(\+380)\(\d{2}\)\d{3}\-\d{2}\-\d{2}$~", $phone)) {
					return $phone;
				}
			}
		} 
		return false;
	}

	public function validateMessage($message){
		$message = $this->clean($message);
		if (strlen($message)<=1000) {
				return $message;
			}
		return -1;
	}

	private function clean($value = ""){
		$value = strip_tags($value);
		$value = trim($value);
		$value = stripcslashes($value);
		$value = htmlspecialchars($value);
		return $value;
	}
}

$valid = new Validate();

?>