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

if($_GET['task'] == 'update_clearance'){
	@$tcode = $_POST['tcode'];
	@$exit_notes_clearance= $_POST['exit_notes_clearance'];

// 	@$xxx= $_POST['xx'];
	
	$updateClearance = "UPDATE process_clearance SET clearance_process_notes = '".$exit_notes_clearance."' WHERE tcode = '".$tcode."'";
	$updateClearance_data = mysql_query($updateClearance);
	
	$data['success'] = true;
	$data['message'] = 'Success! Edit saved.';
// 	$data['message'] = $updateClearance;
	
}//end if

// =========================== \\

echo json_encode($data);
?>