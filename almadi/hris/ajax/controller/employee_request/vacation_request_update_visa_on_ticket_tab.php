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
@$visa_number = $_POST['visa_number'];
@$visa_number_of_day = $_POST['visa_number_of_day'];
@$visa_exit_before_g = $_POST['visa_exit_before_g'];
@$visa_exit_before_h = $_POST['visa_exit_before_h'];
@$visa_return_g = $_POST['visa_return_g'];
@$visa_return_h = $_POST['visa_return_h'];
@$visa_notes = $_POST['visa_notes'];
// @$ = $_POST['xxx'];

// // //Username and Date HR First is updated
// // $hrUpdateBy = $_SESSION['login_user'];
// // $hrUpdateCreated = $Default_Date_Settings;

// // $elapsed_days = elapsed_days($date_created);
// // @$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

$visa = "UPDATE process_visa SET
			visa_number = '".$visa_number."',
			number_of_days = '".$visa_number_of_day."',
			gregorian_date = '".$visa_exit_before_g."',
			hijiri_date = '".$visa_exit_before_h."',
			gregorian_return_date = '".$visa_return_g."',
			hijiri_return_date = '".$visa_return_h."',
			note_visa = '".$visa_notes."'
			WHERE tcode = '".$tcode."' ";
$visa_data = mysql_query($visa);

$data['success'] = true;
$data['message'] = 'Success! Visa details updated.';
// $data['message'] = $visa;

echo json_encode($data);
?>