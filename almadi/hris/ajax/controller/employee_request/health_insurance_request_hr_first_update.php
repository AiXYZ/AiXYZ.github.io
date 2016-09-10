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
@$hr_first_notes = $_POST['hr_first_notes'];

// =================================================================== \\

/*
 * 1 - HR First
 * 2 - Send to company
 * 3 - Received from company
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 */

$updateHR_First = "UPDATE health_insurance_info SET first_notes = '".$hr_first_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateHR_First_data = mysql_query($updateHR_First);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateHR_First;
	
// =========================== \\

echo json_encode($data);
?>