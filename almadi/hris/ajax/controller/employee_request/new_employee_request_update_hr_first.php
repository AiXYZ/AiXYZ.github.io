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
@$hr_first_notes = $_POST['hr_first_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT trans_code, date_created FROM reporting_date_info WHERE trans_code = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Closed
 */

// Update new employee request 
$updateNewEmployee = "UPDATE reporting_date_info SET
								hr_update_by = '".$hrUpdateBy."',
								hr_update_created = '".$hrUpdateCreated."',
								hr_update_days = '".$elapsedDays."',
								hr_update_notes = '".$hr_first_notes."',
								request_status = 2,
								hr_final_update_by = '".$hrUpdateBy."',
								hr_final_update_created = '".$hrUpdateCreated."',
								hr_final_update_days = '".$elapsedDays."',
								hr_final_update_notes = '".$hr_first_notes."'
								WHERE trans_code = '".$tcode."' ";
$updateNewEmployee_data = mysql_query($updateNewEmployee);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateNewEmployee;
	
// =========================== \\

echo json_encode($data);
?>