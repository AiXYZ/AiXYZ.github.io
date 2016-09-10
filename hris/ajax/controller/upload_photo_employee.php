<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// Output JSON
function outputJSON($msg, $status = 'error'){
	header('Content-Type: application/json');
	die(json_encode(array(
			'data' => $msg,
			'status' => $status
	)));
}

// Check for errors
if($_FILES['SelectedFile']['error'] > 0){
	outputJSON('An error ocurred when uploading.');
}

if(!getimagesize($_FILES['SelectedFile']['tmp_name'])){
	outputJSON('Please ensure you are uploading an image.');
}

// Check filetype
// if($_FILES['SelectedFile']['type'] != 'image/png'){
// 	outputJSON('Unsupported filetype uploaded.');
// }

// Check filesize
// if($_FILES['SelectedFile']['size'] > 500000){
// 	outputJSON('File uploaded exceeds maximum upload size.');
// }

// Check if the file exists
if(file_exists('upload/' . $_FILES['SelectedFile']['name'])){
	outputJSON('File with that name already exists.');
}

// Check the PATH

// Passport
if($_GET['path'] == 'passport'){
	$photo_path = '../../upload/passport/';
	$data_path = '../upload/passport/';
	$column_name = 'passport_photo';
}

// Iqama
if($_GET['path'] == 'iqama'){
	$photo_path = '../../upload/iqama/';
	$data_path = '../upload/iqama/';
	$column_name = 'iqama_image';
}

// DL
if($_GET['path'] == 'dl'){
	$photo_path = '../../upload/dl/';
	$data_path = '../upload/dl/';
	$column_name = 'license_image';
}

// Visa
if($_GET['path'] == 'visa'){
	$photo_path = '../../upload/visa/';
	$data_path = '../upload/visa/';
	$column_name = 'passport_visa_photo';
}

// Stamp Visa
if($_GET['path'] == 'stampvisa'){
	$photo_path = '../../upload/stamp-visa/';
	$data_path = '../upload/stamp-visa/';
	$column_name = 'passport_stamp_visa_photo';
}

// ID
if($_GET['path'] == 'id'){
	$photo_path = '../../upload/id/';
	$data_path = '../upload/id/';
	$column_name = 'company_id_photo';
}

// Employee picture
if($_GET['path'] == 'employee'){
	$photo_path = '../../upload/emoloyee-picture/';
	$data_path = '../upload/emoloyee-picture/';
	$column_name = 'id_picture';
}

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Update Images
$updatePassportPhoto = "UPDATE employee_details SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE id_number = '".$_GET['eid']."'";
$updatePassportPhoto_data = mysql_query($updatePassportPhoto);

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>