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
@$send_to_company_notes = $_POST['send_to_company_notes'];

// // // =================================================================== \\

// //Username and Date HR First is updated
$sendtocompanyUpdateBy = $_SESSION['login_user'];
$sendtocompanyUpdateCreated = $Default_Date_Settings;

// // Get the CREATED DATE
$created = "SELECT tcode_vacation, first_created FROM health_insurance_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"first_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Send to company
 * 3 - Received from company
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 */

$updateSendToCompany = "UPDATE health_insurance_info SET second_notes = '".$send_to_company_notes."', second_update_by = '".$sendtocompanyUpdateBy."', second_created = '".$sendtocompanyUpdateCreated."', second_update_days = '".$elapsedDays."', request_status = 3 WHERE tcode_vacation = '".$tcode."' ";
$updateSendToCompany_data = mysql_query($updateSendToCompany);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateSendToBank;
	
// =========================== \\

echo json_encode($data);
?>