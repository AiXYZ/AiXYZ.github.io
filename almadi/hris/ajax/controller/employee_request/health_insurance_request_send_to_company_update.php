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
@$send_to_company_notes = $_POST['send_to_company_notes'];

// =================================================================== \\

/*
 * 1 - HR First
 * 2 - Send to company
 * 3 - Received from company
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 */

$updateSendToCompany = "UPDATE health_insurance_info SET second_notes = '".$send_to_company_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateSendToCompany_data = mysql_query($updateSendToCompany);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateSendToCompany;
	
// =========================== \\

echo json_encode($data);
?>