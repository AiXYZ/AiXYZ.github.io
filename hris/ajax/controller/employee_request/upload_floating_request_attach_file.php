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
			'data_fr' => $msg,
			'status_fr' => $status
	)));
}


$unique_code = date("YmdHis");

/* -----------------------------------------------------------------------------  */

// HR received
if($_GET['path'] == 'fr_hr_received'){
	$rename = 'fr_hr_received_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/floating_request/';
	$data_path = '../upload/request_file/floating_request/'.$rename;
	$column_name = 'hr_update_file';
	$request_hr_received = 'TRUE';
}
// HR received

/* -----------------------------------------------------------------------------  */

// HR closing
if($_GET['path'] == 'fr_hr_closing'){
	$rename = 'fr_hr_closing_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/floating_request/';
	$data_path = '../upload/request_file/floating_request/'.$rename;
	$column_name = 'hr_final_file';
	$request_hr_closing = 'TRUE';
}
// HR closing

/* -----------------------------------------------------------------------------  */

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Request TAB - HR received
if(@$request_hr_received == 'TRUE'){
	// Update file
	$uploadFile = "UPDATE floating_personnel_info SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE trans_code = '".$_GET['tcode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Request TAB - HR received
if(@$request_hr_closing == 'TRUE'){
	// Update file
	$uploadFile = "UPDATE floating_personnel_info SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE trans_code = '".$_GET['tcode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>