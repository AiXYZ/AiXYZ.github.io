<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// This is to update notes and attached file

@$tcode = $_POST['tcode'];
@$fd_notes = $_POST['edit_fd_notes'];

$updateFD = "UPDATE request_personnel_transfer_info SET notes_fd = '".$fd_notes."' WHERE tcode_vacation = '".$tcode."'";
$updateFD_data = mysql_query($updateFD);

$data['success'] = true;
$data['message'] = 'Success! uploaded';
// $data['message'] = $updateFD;
	
// =========================== \\

echo json_encode($data);
?>