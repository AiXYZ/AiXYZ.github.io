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
@$hr_notes = $_POST['hr_notes'];

// @$xxx = $_POST['xxx'];

// =================================================================== \\

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - HR Final
 * 4 - Closed
 * 5 - Declined
 */

$updateHR_First = "UPDATE salary_increase_request_info SET hr_first_notes = '".$hr_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateHR_First_data = mysql_query($updateHR_First);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateHR_First;
	
// =========================== \\

echo json_encode($data);
?>