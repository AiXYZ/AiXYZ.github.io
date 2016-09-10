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
$assignedBy = $_SESSION['login_user'];
$assignedCreated = $Default_Date_Settings;

// =================================================================== \\

@$tcode = $_POST['tcode'];
@$assign_from_notes = $_POST['assign_from_notes'];

// Get the CREATED DATE
$created = "SELECT transaction_code, hr_update_date FROM general_request_info WHERE transaction_code = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"hr_update_date");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the Assigned to

// =================================================================== \\

// Update the general request info
$updateGeneralRequest = "UPDATE general_request_info SET hr_update_by_second = '".$assignedBy."', hr_update_date_second = '".$assignedCreated."', hr_update_days_second = '".$elapsedDays."', hr_update_note_second = '".$assign_from_notes."', request_status = 3 WHERE transaction_code = '".$tcode."' ";
$updateGeneralRequest_data = mysql_query($updateGeneralRequest);

// Update general request assigned
// Initial and Final status = Closed
$updateGeneralRequestAssigned = "UPDATE general_request_assigned SET initial_status = 'Closed', final_status = 'Closed' WHERE tcode = '".$tcode."' ";
$updateGeneralRequestAssigned_data = mysql_query($updateGeneralRequestAssigned);

$data['success'] = true;
$data['message'] = 'Success! Assign saved.';
// $data['message'] = $updateGeneralRequestAssigned;
	
// =========================== \\

echo json_encode($data);
?>