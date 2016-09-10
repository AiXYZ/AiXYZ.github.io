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

if($_GET['task'] == 'update_visa'){
	@$tcode = $_POST['tcode'];
	@$exit_visa_number= $_POST['exit_visa_number'];
	@$exit_visa_before_this_date_g= $_POST['exit_visa_before_this_date_g'];
	@$exit_visa_before_this_date_h= $_POST['exit_visa_before_this_date_h'];
	@$exit_visa_notes= $_POST['exit_visa_notes'];
	
	$updateVisa = "UPDATE process_visa SET visa_number = '".$exit_visa_number."', gregorian_date = '".$exit_visa_before_this_date_g."', hijiri_date = '".$exit_visa_before_this_date_h."', note_visa = '".$exit_visa_notes."' WHERE tcode = '".$tcode."'";
	$updateVisa_data = mysql_query($updateVisa);
	
	$data['success'] = true;
	$data['message'] = 'Success! Edit saved.';
// 	$data['message'] = $updateVisa;
	
}//end if

// =========================== \\

echo json_encode($data);
?>