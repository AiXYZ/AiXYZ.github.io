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
@$assign_to = $_POST['assign_to'];
@$assign_to_notes = $_POST['assign_to_notes'];

// =================================================================== \\

// Update the general request info
$updateGeneralRequest = "UPDATE general_request_info SET assigned_to = '".$assign_to."', request_status = 2 WHERE transaction_code = '".$tcode."' ";
$updateGeneralRequest_data = mysql_query($updateGeneralRequest);

// Insert on general request assigned
$insertGeneralRequest_Assign = "INSERT INTO
												general_request_assigned
												(tcode,
												assigned_to,
												assigned_by,
												assigned_date,
												assign_comment)
												VALUES
												('".$tcode."',
												'".$assign_to."',
												'".$assignedBy."',
												'".$assignedCreated."',
												'".$assign_to_notes."')";
$insertGeneralRequest_Assign_data = mysql_query($insertGeneralRequest_Assign);

$data['success'] = true;
$data['message'] = 'Success! Assign saved.';
// $data['message'] = $insertGeneralRequest_Assign;
	
// =========================== \\

echo json_encode($data);
?>