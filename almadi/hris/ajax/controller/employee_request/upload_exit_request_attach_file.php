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
if($_GET['path'] == 'er_hr_first'){
	$rename = 'er_hr_first_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'vr_request_file_initial';
	$request = 'TRUE';
}
// HR First

/* -----------------------------------------------------------------------------  */

// FD
if($_GET['path'] == 'er_fd'){
	$rename = 'er_fd_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'fd_file_path';
	$request = 'TRUE';
}
// FD

/* -----------------------------------------------------------------------------  */

// HR Final
if($_GET['path'] == 'er_hr_final'){
	$rename = 'er_hr_final_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'file_hr_final';
	$request = 'TRUE';
}
// HR Final

/* -----------------------------------------------------------------------------  */

// Visa
if($_GET['path'] == 'er_visa'){
	$rename = 'er_visa_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'files_path';
	$visa = 'TRUE';
}
// Visa

/* -----------------------------------------------------------------------------  */

// Ticket
if($_GET['path'] == 'er_ticket'){
	$rename = 'er_ticket_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'files_path_ticket';
	$ticket = 'TRUE';
}
// Ticket

/* -----------------------------------------------------------------------------  */

// Clearance
if($_GET['path'] == 'er_clearance'){
	$rename = 'er_clearance_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'files_path_clearance';
	$clearance = 'TRUE';
}//end if
// Clearance

// Muqeem
if($_GET['path'] == 'er_muqeem_outside_ksa'){
	$rename = 'er_muqeem_outside_ksa_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'files_path_closed';
	$muqeem_outside_ksa = 'TRUE';
}//end if

if($_GET['path'] == 'er_muqeem_iqama_received'){
	$rename = 'er_muqeem_iqama_received_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'files_path_iqama';
	$muqeem_iqama_received = 'TRUE';
}//end if
// Muqeem

/* -----------------------------------------------------------------------------  */

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Request TAB
if(@$request == 'TRUE'){
	// Update Images
	$uploadFile = "UPDATE exit_request_info SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode_vacation = '".$_GET['tcode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Visa
if(@$visa == 'TRUE'){
	$updateVisa = "UPDATE process_visa SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."' ";
	$updateVisa_data = mysql_query($updateVisa);
}// end visa

// Ticket
if(@$ticket == 'TRUE'){
	$updateTicket = "UPDATE process_ticket SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."' ";
	$updateTicket_data = mysql_query($updateTicket);
}// end ticket

// Clearance
if(@$clearance == 'TRUE'){
	$updateClearance = "UPDATE process_clearance SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."' ";
	$updateClearance_data = mysql_query($updateClearance);
}// end clearance

// Closed/Muqeem Outside KSA
if(@$muqeem_outside_ksa == 'TRUE'){
	$updateOutsideKSA = "UPDATE process_close SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."' ";
	$updateOutsideKSA_data = mysql_query($updateOutsideKSA);
}// end clearance

// Closed/Muqeem Iqama Received
if(@$muqeem_iqama_received == 'TRUE'){
	$updateIqamaReceived = "UPDATE process_close SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."' ";
	$updateIqamaReceived_data = mysql_query($updateIqamaReceived);
}// end clearance

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>