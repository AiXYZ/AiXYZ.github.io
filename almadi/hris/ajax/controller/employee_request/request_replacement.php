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
// $DeclineBy = $_SESSION['login_user'];
// $DeclineCreated = $Default_Date_Settings;

/* ------------------------------------------------------- */

if($_GET['request'] == 'vacation_request'){
	
	@$tcode = $_POST['tcode'];
	@$replacement_id = $_POST['replacement_id'];
	
	//Update the request
	$updateReplacement = "UPDATE vacation_request_info SET employee_id_replacement = '".$replacement_id."', fullName_replacement = NULL, project_name_replacement = NULL, job_title_replacement = NULL  WHERE tcode_vacation = '".$tcode."' ";
	$updateReplacement_data = mysql_query($updateReplacement);
	
	$data['success'] = true;
	$data['message'] = 'Success! Assigned replacement is saved.';
	//$data['message'] = $updateReplacement;
	
}// end

/* ------------------------------------------------------- */

// This is for the exit request
if($_GET['request'] == 'exit_request'){

	@$tcode = $_POST['tcode'];
	@$replacement_id = $_POST['replacement_id'];

	//Update the request
	$updateReplacement = "UPDATE exit_request_info SET employee_id_replacement = '".$replacement_id."', fullName_replacement = NULL, project_name_replacement = NULL, job_title_replacement = NULL  WHERE tcode_vacation = '".$tcode."' ";
	$updateReplacement_data = mysql_query($updateReplacement);

	$data['success'] = true;
	$data['message'] = 'Success! Assigned replacement is saved.';
// 	$data['message'] = $updateReplacement;

}// end	

/* ------------------------------------------------------- */

echo json_encode($data);
?>