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

@$previous_salary = $_POST['previous_salary'];
@$previous_cash_advance = $_POST['previous_cash_advance'];
@$previous_petty_cash = $_POST['previous_petty_cash'];
@$previous_entry_visa = $_POST['previous_entry_visa'];
@$previous_medical_insurance = $_POST['previous_medical_insurance'];
@$previous_iqama = $_POST['previous_iqama'];

@$hr_first_notes = $_POST['hr_first_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, date_created FROM request_personnel_transfer_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - FD
 * 3 - HR Final
 * 4 - Approval
 * 5 - Closed
 * 6 - Declined
 * 
 */
$updateHRFirst = "UPDATE request_personnel_transfer_info SET
							notes_hr = '".$hr_first_notes."',
							hr_update_by = '".$hrUpdateBy."',
							hr_update_created = '".$hrUpdateCreated."',
							hr_update_days = '".$elapsedDays."',
							previous_total_salary = '".$previous_salary."',
							previous_cash_advance = '".$previous_cash_advance."',
							previous_petty_cash = '".$previous_petty_cash."',
							previous_entry_visa = '".$previous_entry_visa."',
							previous_medical_insurance = '".$previous_medical_insurance."',
							previous_iqama = '".$previous_iqama."',
							request_status = 2
							WHERE tcode_vacation = '".$tcode."' ";
$updateHRFirst_data = mysql_query($updateHRFirst);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
// $data['message'] = $updateHRFirst;

echo json_encode($data);
?>