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
			'data_cr' => $msg,
			'status_cr' => $status
	)));
}


$unique_code = date("YmdHis");

/* -----------------------------------------------------------------------------  */

// HR
if($_GET['path'] == 'cc_hr'){
	$rename = 'cr_hr_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/career_request/';
	$data_path = '../upload/request_file/career_request/'.$rename;
	$column_name = 'first_file';
	$request_hr = 'TRUE';
}
// HR

// HR for declined
if($_GET['path'] == 'cc_hr_declined'){
	$rename = 'cr_hr_declined_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/career_request/';
	$data_path = '../upload/request_file/career_request/'.$rename;
	$column_name = 'declined_file';
	$request_hr_declined = 'TRUE';
}
// HR for declined


/* -----------------------------------------------------------------------------  */

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Request TAB - HR
if(@$request_hr == 'TRUE'){
	// Update file
	$uploadFile = "UPDATE career_info SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode_vacation = '".$_GET['tcode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Request TAB - HR declined
if(@$request_hr_declined == 'TRUE'){
	// Update file
	$uploadFile = "UPDATE career_info SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode_vacation = '".$_GET['tcode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>