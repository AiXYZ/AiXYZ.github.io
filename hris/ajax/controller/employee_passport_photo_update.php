<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$empid = $_POST['employee_id'];

if($_GET['path'] == 'passport'){
	$updatePassport = "UPDATE employee_details SET passport_photo = '../upload/passport/passport-placeholder.jpg' WHERE id_number = '".$empid."' ";	
}

if($_GET['path'] == 'iqama'){
	$updatePassport = "UPDATE employee_details SET iqama_image = '../upload/iqama/iqama-placeholder.jpg' WHERE id_number = '".$empid."' ";
}

if($_GET['path'] == 'dl'){
	$updatePassport = "UPDATE employee_details SET license_image = '../upload/iqama/dl-placeholder.jpg' WHERE id_number = '".$empid."' ";
}

if($_GET['path'] == 'visa'){
	$updatePassport = "UPDATE employee_details SET passport_visa_photo = '../upload/visa/visa-placeholder.jpg' WHERE id_number = '".$empid."' ";
}

if($_GET['path'] == 'stamp_visa'){
	$updatePassport = "UPDATE employee_details SET passport_stamp_visa_photo = '../upload/stamp-visa/stamp-visa-placeholder.jpg' WHERE id_number = '".$empid."' ";	
}

if($_GET['path'] == 'id'){
	$updatePassport = "UPDATE employee_details SET company_id_photo = '../upload/id/id-card-placeholder.jpg' WHERE id_number = '".$empid."' ";
}

if($_GET['path'] == 'employee'){
	$updatePassport = "UPDATE employee_details SET id_picture = '../upload/emoloyee-picture/profile-picture-placeholder.jpg' WHERE id_number = '".$empid."' ";
}

$updatePassport_data = mysql_query($updatePassport);
// echo json_encode($data);
?>