<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// This is to update the attached file to null
// if($_GET['task'] == 'attach_file'){
// 	@$tcode = $_POST['tcode_hrfirst_file'];
// 	// Remove the attache file on HR First
	
// 	$removeFile = "UPDATE vacation_request_info SET vr_request_file_initial = NULL WHERE tcode_vacation = '".$tcode."'";
// 	$removeFile_data = mysql_query($removeFile);
	
// 	$data['success'] = true;
// 	$data['message'] = 'Success!';
	
// }// end if -> attach file

// =========================== \\

// This is to update notes and attached file

if($_GET['task'] == 'update_fd'){
	@$tcode = $_POST['tcode'];
	@$edit_hr_final_total_deduction = $_POST['edit_hr_final_total_deduction'];
	@$edit_hr_final_credit = $_POST['edit_hr_final_credit'];
	@$edit_hr_final_notes = $_POST['edit_hr_final_notes'];
	
	$updateHR_Final = "UPDATE exit_request_info SET total_deductions = '".$edit_hr_final_total_deduction."', credit_fd = '".$edit_hr_final_credit."', notes_fd = '".$edit_hr_final_notes."' WHERE tcode_vacation = '".$tcode."'";
	$updateHR_Final_data = mysql_query($updateHR_Final);
	
	$data['success'] = true;
	$data['message'] = 'Success! Edit saved.';
// 	$data['message'] = $updateHR_Final;
	
}//end if

// =========================== \\

echo json_encode($data);
?>