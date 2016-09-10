<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

//Username and Date HR First is updated
$DeclineBy = $_SESSION['login_user'];
$DeclineCreated = $Default_Date_Settings;

//This is for the vacation request hr first declined
if($_GET['request'] == 'vacation_request'){
	
	@$tcode = $_POST['tcode'];
	@$hr_first_decline_notes = $_POST['hr_first_decline_notes'];
	@$date_created = $_POST['date_created'];
	
	$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '".$tcode."' ";
	$vacation_data = mysql_query($vacation);
	$vacation_created_date = mysql_result($vacation_data,0,"date_created");
	
	$elapsed_days = elapsed_days($vacation_created_date);
	@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR
	
	//Update the request
	$declineVR = "UPDATE vacation_request_info SET
						decline_by = '".$DeclineBy."',
						decline_date = '".$DeclineCreated."',
						decline_elapsed_days = '".$elapsedDays."',		
						decline_notes = '".$hr_first_decline_notes."'
						WHERE tcode_vacation = '".$tcode."' ";
	$declineVR_data = mysql_query($declineVR);
	
	$data['success'] = true;
	$data['message'] = 'Success! Request declined.';
}// end
//This is for the vacation request hr first declined

// =========================== \\


// =========================== \\

echo json_encode($data);
?>