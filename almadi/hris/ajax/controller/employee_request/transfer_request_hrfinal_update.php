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
@$hrfinal_notes = $_POST['edit_hrfinal_notes'];

$updateHRFinal = "UPDATE request_personnel_transfer_info SET hr_final_notes = '".$hrfinal_notes."' WHERE tcode_vacation = '".$tcode."'";
$updateHRFinal_data = mysql_query($updateHRFinal);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateHRFinal;
	
// =========================== \\

echo json_encode($data);
?>