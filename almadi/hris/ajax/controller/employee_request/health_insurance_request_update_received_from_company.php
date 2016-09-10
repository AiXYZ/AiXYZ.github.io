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
@$received_from_company_notes = $_POST['received_from_company_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$receivedfromcompanyUpdateBy = $_SESSION['login_user'];
$receivedfromcompanyUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, second_created FROM health_insurance_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"second_created");

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

$updateReceivedCompany = "UPDATE health_insurance_info SET third_notes = '".$received_from_company_notes."', third_update_by	 = '".$receivedfromcompanyUpdateBy."', third_created = '".$receivedfromcompanyUpdateCreated."', third_update_days = '".$elapsedDays."', request_status = 4 WHERE tcode_vacation = '".$tcode."' ";
$updateReceivedCompany_data = mysql_query($updateReceivedCompany);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateReceivedCompany;
	
// =========================== \\

echo json_encode($data);
?>