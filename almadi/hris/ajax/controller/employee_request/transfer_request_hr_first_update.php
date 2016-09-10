<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// =========================== \\

// This is to update notes and attached file

if($_GET['task'] == 'update_hr_first'){
	@$tcode = $_POST['tcode'];
	@$hrfirst_notes = $_POST['edit_hr_first_notes'];
	
	$updateHR_First = "UPDATE request_personnel_transfer_info SET notes_hr = '".$hrfirst_notes."' WHERE tcode_vacation = '".$tcode."'";
	$updateHR_First_data = mysql_query($updateHR_First);
	
	$data['success'] = true;
	$data['message'] = 'Success! Edit saved.';
// 	$data['message'] = $updateHR_First;
	
}//end if

// =========================== \\

echo json_encode($data);
?>