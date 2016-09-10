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
@$salary_increase_hr_first_notes = $_POST['salary_increase_hr_first_notes'];

// @$xxx = $_POST['xxx'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, date_created FROM salary_increase_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - HR Final
 * 4 - Closed
 * 5 - Declined
 */

$updateHR_First = "UPDATE salary_increase_request_info SET
							hr_first_notes = '".$salary_increase_hr_first_notes."',
									
							hr_first_update_by = '".$hrUpdateBy."',
							hr_first_update_date = '".$hrUpdateCreated."',
							hr_first_days = '".$elapsedDays."',
									
							request_status = 2
							WHERE tcode_vacation = '".$tcode."' ";

$updateHR_First_data = mysql_query($updateHR_First);

$data['success'] = true;
$data['message'] = 'Success! Data saved.';
// $data['message'] = $updateHR_First;
	
// =========================== \\

echo json_encode($data);
?>