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
@$send_to_site_notes = $_POST['send_to_site_notes'];

// =================================================================== \\

/*
 * 1 - HR First
 * 2 - Send to company
 * 3 - Received from company
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 */

$updateSendToSite = "UPDATE health_insurance_info SET third_notes = '".$send_to_site_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateSendToSite_data = mysql_query($updateSendToSite);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateSendToSite;
	
// =========================== \\

echo json_encode($data);
?>