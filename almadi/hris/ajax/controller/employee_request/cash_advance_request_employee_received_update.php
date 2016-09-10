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
@$employee_received_notes = $_POST['employee_received_notes'];

// @$xxx = $_POST['xxx'];

// =================================================================== \\

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - Employee Recevied
 * 4 - Closed
 * 5 - Declined
 */

$updateApproval = "UPDATE cash_advance_request_info SET
							notes_fd = '".$employee_received_notes."'
							WHERE tcode_vacation = '".$tcode."' ";
$updateApproval_data = mysql_query($updateApproval);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateHR_First;
	
// =========================== \\

echo json_encode($data);
?>