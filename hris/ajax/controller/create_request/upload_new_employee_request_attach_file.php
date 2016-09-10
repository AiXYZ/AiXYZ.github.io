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
			'data_vr' => $msg,
			'status_vr' => $status
	)));
}


$unique_code = date("YmdHis");

// new employee
if($_GET['requestType'] == 'newEmployee'){
	$rename = 'new_employee_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/new_employee_request/';
	$data_path = '../upload/request_file/new_employee_request/'.$rename;
	$column_name = 'emp_file_path';
	$table_name = 'reporting_date_info';
	$tcode = 'trans_code';
	$request_type = 'TRUE';
}

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

if(@$request_type == 'TRUE'){
	// Update file
	$uploadFile = "UPDATE ".$table_name." SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' , request_status = '1' WHERE ".$tcode." = '".$_GET['transactionCode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>