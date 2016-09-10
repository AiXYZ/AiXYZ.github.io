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

if($_GET['task'] == 'update_hr_first'){
	@$tcode = $_POST['tcode'];
	@$hrfirst_notes = $_POST['edit_hr_first_notes'];
	
	$updateHR_First = "UPDATE exit_request_info SET notes_hr = '".$hrfirst_notes."' WHERE tcode_vacation = '".$tcode."'";
	$updateHR_First_data = mysql_query($updateHR_First);
	
	$data['success'] = true;
	$data['message'] = 'Success! Edit saved.';
// 	$data['message'] = $updateHR_First;
	
}//end if

// =========================== \\

echo json_encode($data);
?>