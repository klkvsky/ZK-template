<?php

	$server = $_SERVER['HTTP_HOST'];
	if (isset($_POST['phone2'])) {$phone2 = $_POST['phone2'];}
	if (empty($phone2))
	{
		echo "I can not send!";
		exit;
	}

	$floor  = 'None';
	if(isset($_POST['floor']) && is_array($_POST['floor']) && count($_POST['floor']) > 0){
			$floor = implode(', ', $_POST['floor']);
	}	

	$rooms  = 'None';
	if(isset($_POST['rooms']) && is_array($_POST['rooms']) && count($_POST['rooms']) > 0){
			$rooms = implode(', ', $_POST['rooms']);
	}	

	$balcony  = 'None';
	if(isset($_POST['balcony']) && is_array($_POST['balcony']) && count($_POST['balcony']) > 0){
			$balcony = implode(', ', $_POST['balcony']);
	}	

	$repair  = 'None';
	if(isset($_POST['repair']) && is_array($_POST['repair']) && count($_POST['repair']) > 0){
			$repair = implode(', ', $_POST['repair']);
	}


	$price  = 'None';
	if(isset($_POST['price']) && is_array($_POST['price']) && count($_POST['price']) > 0){
			$price = implode(', ', $_POST['price']);
	}	

	$time  = 'None';
	if(isset($_POST['time']) && is_array($_POST['time']) && count($_POST['time']) > 0){
			$time = implode(', ', $_POST['time']);
	}	


	$typeof  = 'None';
	if(isset($_POST['typeof']) && is_array($_POST['typeof']) && count($_POST['typeof']) > 0){
			$typeof = implode(', ', $_POST['typeof']);
	}	
	
	
	
	$success_url = 'index.html?succes'; 

	
	$mail_header = "MIME-Version: 1.0\r\n";
	$mail_header.= "Content-type: text/html; charset=UTF-8\r\n";
	$mail_header.= "From: Тема <informer@$server>\r\n";
	$mail_header.= "Reply-to: Reply to Name <reply@$server>\r\n";
	
	$to = "lid@sochi.estate"; //заменить почту на свою
	$subject = "Заявка с сайта: $server";
	
				$message = "
				<strong>Телефон:</strong> $phone2<br><br> 
				<strong>Этаж:</strong> $floor<br><br>
				<strong>Комнат:</strong> $rooms<br><br>
				<strong>Балкон:</strong> $balcony<br><br>
				<strong>Ремонт:</strong> $repair<br><br>
				<strong>Цена:</strong> $price<br><br>
				<strong>Когда вас записать на просмотр?:</strong> $time<br><br>
				<strong>Вид оплаты:</strong> $typeof<br><br>

				
	<br><strong>Время письма:</strong> ".date("d.m.Y H:i:s")."";
	if (mail($to,$subject,$message,$mail_header))
	header('Location: '. 'thanks.html');
	else echo 'Oshibka otpravki - otklyuchena funkciya (php mail). Obratites v podderzhku xostinga';


		?>