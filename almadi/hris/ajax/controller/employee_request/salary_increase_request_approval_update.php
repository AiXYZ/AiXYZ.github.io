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
@$salary_history_id = $_POST['salary_history_id'];
@$basic_salary = $_POST['basic_salary'];
@$allowance = $_POST['allowance'];
@$total_salary = $_POST['total_salary'];
@$effectivity_date = $_POST['effectivity_date'];
@$approval_notes  = $_POST['approval_notes'];

// @$xxx = $_POST['xxx'];

// =================================================================== \\

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - HR Final
 * 4 - Closed
 * 5 - Declined
 */

$updateApproval = "UPDATE salary_increase_request_info SET hr_second_notes = '".$approval_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateApproval_data = mysql_query($updateApproval);

// This will update the last salary
$updateSalary = "UPDATE salary_history SET basic_salary = '".$basic_salary."', other_allowance = '".$allowance."', total_salary = '".$total_salary."', effectivity_date	= '".$effectivity_date."' WHERE id = '".$salary_history_id."' ";
$updateSalary_data = mysql_query($updateSalary);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateSalary;
	
// =========================== \\

echo json_encode($data);
?>