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
@$total_remaining_salary = $_POST['total_remaining_salary'];
@$outstanding_balance = $_POST['outstanding_balance'];
@$amount_last_advance = $_POST['amount_last_advance'];
@$date_last_advance = $_POST['date_last_advance'];
@$deduction_method = $_POST['deduction_method'];
@$cash_advance_notes = $_POST['cash_advance_notes'];
// @$xxx = $_POST['xxx'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, date_created FROM cash_advance_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - Employee received
 * 4 - Closed
 * 5 - Declined
 */

$updateHR_First = "UPDATE cash_advance_request_info SET
							credit_salary = '".$total_remaining_salary."',
							credit = '".$outstanding_balance."',
							last_advance_amount = '".$amount_last_advance."',
							last_advance_date = '".$date_last_advance."',		
							payment_method = '".$deduction_method."',		
							
							notes_hr = '".$cash_advance_notes."',
									
							hr_update_by = '".$hrUpdateBy."',
							hr_update_created = '".$hrUpdateCreated."',
							hr_update_days = '".$elapsedDays."',
									
							request_status = 2
							WHERE tcode_vacation = '".$tcode."' ";

$updateHR_First_data = mysql_query($updateHR_First);

$data['success'] = true;
$data['message'] = 'Success! Data saved.';
// $data['message'] = $updateHR_First;
	
// =========================== \\

echo json_encode($data);
?>