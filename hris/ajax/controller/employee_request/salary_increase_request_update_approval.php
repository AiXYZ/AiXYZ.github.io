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
@$basic_salary = $_POST['basic_salary'];
@$allowance = $_POST['allowance'];
@$total_salary = $_POST['total_salary'];
@$effectivity_date = $_POST['effectivity_date'];
@$approval_notes = $_POST['approval_notes'];


// =================================================================== \\

//Username and Date HR First is updated
$approvalUpdateBy = $_SESSION['login_user'];
$approvalUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE and Employee ID
$created = "SELECT tcode_vacation, hr_first_update_date, emp_id_number FROM salary_increase_request_info  WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"hr_first_update_date");
$employee_id = mysql_result($created_data,0,"emp_id_number");

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
$updateApproval = "UPDATE salary_increase_request_info SET hr_second_update_by = '".$approvalUpdateBy."', hr_second_update_date = '".$approvalUpdateCreated."', hr_second_days = '".$elapsedDays."', hr_second_notes = '".$approval_notes."', request_status = 3 WHERE tcode_vacation = '".$tcode."' ";
$updateApproval_data = mysql_query($updateApproval);

// This will insert the salary increase in the salary history
$salaryHistory = "INSERT INTO salary_history
							(emp_id_number,
							basic_salary,
							other_allowance,
							total_salary,
							effectivity_date,
							date_updated,
							updated_by)
							VALUES
							('".$employee_id."',
							'".$basic_salary."',
							'".$allowance."',
							'".$total_salary."',
							'".$effectivity_date."',
							'".$approvalUpdateCreated."',
							'".$approvalUpdateBy."')";
$salaryHistory_data = mysql_query($salaryHistory);

$data['success'] = true;
$data['message'] = 'Success! Approval saved.';
// $data['message'] = $salaryHistory;
	
// =========================== \\

echo json_encode($data);
?>