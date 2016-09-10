<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$tcode = $_POST['tcode'];
@$transfer_request_hrfinal_notes = $_POST['transfer_request_hrfinal_notes'];

// //Username and Date HR First is updated
$hrfinalUpdateBy = $_SESSION['login_user'];
$hrfinalUpdateCreated = $Default_Date_Settings;

// // Get the CREATED DATE
$created = "SELECT tcode_vacation, fd_update_created FROM request_personnel_transfer_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"fd_update_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - FD
 * 3 - HR Final
 * 4 - Approval
 * 5 - Closed
 * 6 - Declined
 */

$updateHRFinal = "UPDATE request_personnel_transfer_info SET
					hr_final_update_by = '".$hrfinalUpdateBy."',
					hr_final_update_created = '".$hrfinalUpdateCreated."',		
					hr_final_days = '".$elapsedDays."',		
					hr_final_notes = '".$transfer_request_hrfinal_notes."',
					request_status = 4
					WHERE tcode_vacation = '".$tcode."'";
$updateHRFinal_data = mysql_query($updateHRFinal);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
// $data['message'] = $updateHRFinal;

echo json_encode($data);
?>