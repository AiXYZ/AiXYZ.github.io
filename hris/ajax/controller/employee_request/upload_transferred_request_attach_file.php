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

/* -----------------------------------------------------------------------------  */

// HR First
if($_GET['path'] == 'transferred_hr_first'){
	
	// This is for the hr first
	$rename = 'hr_first_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/transferred_request/';
	$data_path = '../upload/request_file/transferred_request/'.$rename;
	$column_name = 'hr_update_file';
	$request = 'TRUE';
	
}
// HR First

/* -----------------------------------------------------------------------------  */

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Request TAB
if(@$request == 'TRUE'){
	// Update Images
	$uploadFile = "UPDATE reporting_date_info SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE trans_code = '".$_GET['tcode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>