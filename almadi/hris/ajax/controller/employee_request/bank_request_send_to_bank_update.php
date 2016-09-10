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
@$received_from_bank_notes = $_POST['received_from_bank_notes'];

// =================================================================== \\

/*
 * 1 - HR First
 * 2 - Send to bank
 * 3 - Received from bank
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 */

$updateReceivedFromBank = "UPDATE bank_request_info SET received_note = '".$received_from_bank_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateFD_data = mysql_query($updateReceivedFromBank);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateReceivedFromBank;
	
// =========================== \\

echo json_encode($data);
?>