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
@$new_iqama_number = $_POST['new_iqama_number'];
@$new_expiry_date_g = $_POST['new_expiry_date_g'];
@$new_expiry_date_h = $_POST['new_expiry_date_h'];
@$new_place_of_issue = $_POST['new_place_of_issue'];
@$new_number_of_copies = $_POST['new_number_of_copies'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode, send_date, emp_id_number FROM renew_iqama_info WHERE tcode = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"send_date");
$emp_id_number = mysql_result($created_data,0,"emp_id_number");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

// Old iqama details
$oldIqama = "SELECT id_number, iqama_number, iqama_g_date, iqama_h_date, place_issued, copy_issue, iqama_image  FROM employee_details WHERE id_number = '".$emp_id_number."' ";
$oldIqama_data = mysql_query($oldIqama);
$oldIqama_number = mysql_result($oldIqama_data,0,"iqama_number");
$oldIqama_greg_date = mysql_result($oldIqama_data,0,"iqama_g_date");
$oldIqama_hiji_date = mysql_result($oldIqama_data,0,"iqama_h_date");
$oldIqama_place = mysql_result($oldIqama_data,0,"place_issued");
$oldIqama_copy = mysql_result($oldIqama_data,0,"copy_issue");
$oldIqama_attach = mysql_result($oldIqama_data,0,"iqama_image");

/*
 * 1 - HR First
 * 2 - Closed
 */

// Update renew iqama info to closed
$updateRenew = "UPDATE renew_iqama_info SET iqama_status = 2, total_number_of_days = '".$elapsedDays."' WHERE tcode = '".$tcode."' ";
$updateRenew_data = mysql_query($updateRenew);

// Insert renew iqama history
$insertHistory = "INSERT INTO renew_iqama_request_history
						(ri_tcode,
						old_iqama_number,
						old_expiry_date_g,
						old_expiry_date_h,
						old_place_of_issue,
						old_number_of_copy,
						old_attach_file,
						new_iqama_number,
						new_expiry_date_g,
						new_expiry_date_h,
						new_place_of_issue,
						new_number_of_copy,
						update_by,
						update_created,
						update_days)
						VALUES
						('".$tcode."',
						'".$oldIqama_number."',
						'".$oldIqama_greg_date."',
						'".$oldIqama_hiji_date."',
						'".$oldIqama_place."',
						'".$oldIqama_copy."',
						'".$oldIqama_attach."',
						'".$new_iqama_number."',
						'".$new_expiry_date_g."',
						'".$new_expiry_date_h."',
						'".$new_place_of_issue."',
						'".$new_number_of_copies."',
						'".$hrUpdateBy."',
						'".$hrUpdateCreated."',
						'".$elapsedDays."')";
$insertHistory_data = mysql_query($insertHistory);

// Update the Iqama details on employee details
$updateEmployee = "UPDATE employee_details SET iqama_number = '".$new_iqama_number."', iqama_g_date = '".$new_expiry_date_g."', iqama_h_date = '".$new_expiry_date_h."', copy_issue = '".$new_number_of_copies."', place_issued = '".$new_place_of_issue."' WHERE id_number = '".$emp_id_number."' ";
$updateEmployee_data = mysql_query($updateEmployee);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $insertHistory;
	
// =========================== \\

echo json_encode($data);
?>