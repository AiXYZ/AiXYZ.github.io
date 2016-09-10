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

// Vacation Request HR First
if($_GET['path'] == 'vr_hr_first'){
	$rename = 'vr_hr_first_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'vr_request_file_initial';
	$request = 'TRUE';
}
// Vacation Request HR First

// Vacation Request FD
if($_GET['path'] == 'vr_fd'){
	$rename = 'vr_fd_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'fd_file_path';
	$request = 'TRUE';
}// end

// =================== \\

// This will upload the attached file on FD Edit HR First
if($_GET['path'] == 'vr_fd_edit'){
	$rename = 'vr_hr_first_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'vr_request_file_initial';
	$request = 'TRUE';
}// end

// Vacation Request FD

// =================== \\

// Vacation Request Decline HR First
if($_GET['path'] == 'vr_hr_first_decline'){
	$rename = 'vr_hr_first_decline_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'decline_file_path';
	$request = 'TRUE';
}// end
// Vacation Request Decline HR First

// =================== \\

if($_GET['path'] == 'vr_hr_final_fd'){
	$rename = 'vr_fd_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'fd_file_path';
	$request = 'TRUE';
}//end if

// =================== \\

if($_GET['path'] == 'vr_hrfinal'){
	$rename = 'vr_hrfinal_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'file_hr_final';
	$request = 'TRUE';
}//end if

// =================== \\

if($_GET['path'] == 'vr_visa'){
	$rename = 'vr_visa_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'files_path';
	$visa = 'TRUE';
}//end if

// ============================= \\

if($_GET['path'] == 'vr_ticket'){
	$rename = 'vr_ticket_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'files_path_ticket';
	$ticket = 'TRUE';
}//end if

// ============================= \\

if($_GET['path'] == 'vr_clearance'){
	$rename = 'vr_clearance_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'files_path_clearance';
	$clearance = 'TRUE';
}//end if

// ============================= \\

if($_GET['path'] == 'vr_muqeem_outside_ksa'){
	$rename = 'vr_muqeem_outside_ksa_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'files_path_closed';
	$muqeem_outside_ksa = 'TRUE';
}//end if

// ============================= \\

// if($_GET['path'] == 'vr_muqeem_iqama_received'){
// 	$rename = 'vr_muqeem_iqama_received_'.$unique_code.'_';
// 	$photo_path = '../../../upload/request_file/vacation_request/';
// 	$data_path = '../upload/request_file/vacation_request/'.$rename;
// 	$column_name = 'files_path_iqama';
	
// 	$muqeem_iqama_received = 'TRUE';
// }//end if

if($_GET['path'] == 'vr_clearance_iqama_received'){
	$rename = 'vr_clearance_iqama_received_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'files_path_iqama';

	$clearance_iqama_received = 'TRUE';
}//end if


// ============================= \\

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

// Request TAB
if(@$request == 'TRUE'){
	// Update Images
	$updatePhoto = "UPDATE vacation_request_info SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode_vacation = '".$_GET['tcode']."'";
	$updatePhoto_data = mysql_query($updatePhoto);
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
	$updateMuqeemKSA = "UPDATE process_close SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."' ";
	$updateMuqeemKSA_data = mysql_query($updateMuqeemKSA);
}// end clearance

// Closed/Muqeem Iqama Received
// if(@$muqeem_iqama_received == 'TRUE'){
// 	$updateClearance = "UPDATE process_close SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."' ";
// 	$updateClearance_data = mysql_query($updateClearance);
// }// end clearance

if(@$clearance_iqama_received == 'TRUE'){
	$updateClearanceIqama = "UPDATE process_clearance SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE tcode = '".$_GET['tcode']."' ";
	$updateClearanceIqama_data = mysql_query($updateClearanceIqama);
}// end clearance


// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>