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
			'data_FromV' => $msg,
			'status_FromV' => $status
	)));
}


$unique_code = date("YmdHis");

/* -----------------------------------------------------------------------------  */

// HR
if($_GET['path'] == 'FromV_hr'){
	$rename = 'FromV_hr_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/from_vacation_request/';
	$data_path = '../upload/request_file/from_vacation_request/'.$rename;
	$column_name = 'hr_update_file';
	$request_hr = 'TRUE';
}
// HR

/* -----------------------------------------------------------------------------  */

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Request TAB - HR
if(@$request_hr == 'TRUE'){
	// Update file
	$uploadFile = "UPDATE reporting_date_info SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE trans_code = '".$_GET['tcode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>