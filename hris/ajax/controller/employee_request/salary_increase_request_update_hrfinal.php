<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// =================================================================== \\

@$tcode = $_POST['tcode'];
@$hrfinal_notes = $_POST['hrfinal_notes'];


// =================================================================== \\

//Username and Date HR First is updated
$hrfinalUpdateBy = $_SESSION['login_user'];
$hrfinalUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, hr_second_update_date FROM salary_increase_request_info  WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"hr_second_update_date");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - HR Final
 * 4 - Closed
 * 5 - Declined
 */

// This will update the request
$updateHRFinal = "UPDATE salary_increase_request_info SET hr_third_update_by = '".$hrfinalUpdateBy."', hr_third_update_date = '".$hrfinalUpdateCreated."', hr_third_days = '".$elapsedDays."', hr_third_notes = '".$hrfinal_notes."', request_status = 4 WHERE tcode_vacation = '".$tcode."' ";
$updateHRFinal_data = mysql_query($updateHRFinal);

$data['success'] = true;
$data['message'] = 'Success! Approval saved.';
// $data['message'] = $updateHRFinal;
	
// =========================== \\

echo json_encode($data);
?>