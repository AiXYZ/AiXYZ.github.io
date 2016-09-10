<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

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
// if($_FILES['SelectedFile']['error'] > 0){
// 	outputJSON('An error ocurred when uploading.');
// }

// if(!getimagesize($_FILES['SelectedFile']['tmp_name'])){
// 	outputJSON('Please ensure you are uploading an image.');
// }

// Check if the file exists
// if(file_exists('upload/' . $_FILES['SelectedFile']['name'])){
// 	outputJSON('File with that name already exists.');
// }

$unique_code = date("YmdHis");

// ============================= \\

//This is for the VISA
if($_GET['path'] == 'vr_visa'){
	$rename = 'vr_visa_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'file_path';
	
	// Update File
	$updateFile = "UPDATE process_visa SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."'";
	$updateFile_data = mysql_query($updateFile);
}//end if
//This is for the VISA

// ============================= \\

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>