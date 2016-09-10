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
@$edit_hr_final_notes = $_POST['hr_final_in_visa_notes'];

//Username and Date HR First is updated
// $hrUpdateBy = $_SESSION['login_user'];
// $hrUpdateCreated = $Default_Date_Settings;

// $elapsed_days = elapsed_days($date_created);
// @$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

$updateHRFinal = "UPDATE vacation_request_info SET notes_hr_final = '".$edit_hr_final_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateHRFinal_data = mysql_query($updateHRFinal);

$data['success'] = true;
$data['message'] = 'Success! HR Final details updated.';
//$data['message'] = $updateHRFinal;

echo json_encode($data);
?>