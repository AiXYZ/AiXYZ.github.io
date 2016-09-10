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
@$muqeem_leaving_date_g = $_POST['muqeem_leaving_date_g'];
@$muqeem_leaving_date_h = $_POST['muqeem_leaving_date_h'];
@$muqeem_notes = $_POST['muqeem_notes'];
// @$ = $_POST['xxx'];

//Username and Date HR First is updated
$clearanceUpdateBy = $_SESSION['login_user'];
$clearanceUpdateCreated = $Default_Date_Settings;

$Update = "SELECT tcode, date_created FROM process_clearance WHERE tcode = '".$tcode."' ";
$Update_data = mysql_query($Update);
$MuqeemCreated_date = mysql_result($Update_data,0,"date_created");

$elapsed_days = elapsed_days($MuqeemCreated_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Clearance updated up to the Current Date it was update by the HR

$insertMuqeem = "INSERT INTO process_close
							(
							tcode,
							gregorian_out_of_ksa_date,
							hijiri_out_of_ksa_date,
							close_notes,
							created_by,
							date_created,
							elapsed_days
							)
						  VALUES
							(
							'".$tcode."',
							'".$muqeem_leaving_date_g."',
							'".$muqeem_leaving_date_h."',
							'".$muqeem_notes."',
							'".$clearanceUpdateBy."',
							'".$clearanceUpdateCreated."',
							'".$elapsedDays."'		
							)";
$insertMuqeem_data = mysql_query($insertMuqeem);

// This will insert data to REQUEST CLOSED
$insertRequestClosed = "INSERT INTO request_closed(tcode, type_of_request)VALUES('".$tcode."', '1')";
$insertRequestClosed_data = mysql_query($insertRequestClosed);

// Update the request
$updateRequest = "UPDATE vacation_request_info SET request_status = 8 WHERE tcode_vacation = '".$tcode."' ";
$updateRequest_data = mysql_query($updateRequest);

$data['success'] = true;
$data['message'] = 'Success! Processing Muqeem.';
// $data['message'] = $insertMuqeem;

echo json_encode($data);
?>