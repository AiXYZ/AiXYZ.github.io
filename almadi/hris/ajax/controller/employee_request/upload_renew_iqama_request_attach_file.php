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
if($_GET['path'] == 'renew_iqama_hr_first'){
	$rename = 'hr_first_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/renew_iqama_request/';
	$data_path = '../upload/request_file/renew_iqama_request/'.$rename;
	$column_name = 'new_attach_file';
	$request = 'TRUE';
}
// HR First

// Employee Details
// if($_GET['path'] == 'renew_iqama_employee_details'){
// 	$rename = 'hr_first_'.$unique_code.'_';
// 	$photo_path = '../../../upload/request_file/renew_iqama_request/';
// 	$data_path = '../upload/request_file/renew_iqama_request/'.$rename;
// 	$column_name = 'new_attach_file';
// 	$request = 'TRUE';
// }
// Employee Details

/* -----------------------------------------------------------------------------  */

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Request TAB
if(@$request == 'TRUE'){
	// Update Images
	$uploadFile = "UPDATE renew_iqama_request_history SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE ri_tcode = '".$_GET['tcode']."'";
	$uploadFile_data = mysql_query($uploadFile);
	
	// Get the employee id
	$employee = "SELECT tcode, emp_id_number FROM renew_iqama_info WHERE tcode = '".$_GET['tcode']."' ";
	$employee_data = mysql_query($employee);
	$employee_id = mysql_result($employee_data,0,"emp_id_number");
	
	// Update employee details
	$updateEmployeeDetails = "UPDATE employee_details SET iqama_image = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE id_number = '".$employee_id."' ";
	$updateEmployeeDetails_data = mysql_query($updateEmployeeDetails);
	
}// end if

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>