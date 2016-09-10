<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$tcodeID = $_POST['tcode_id'];

$updateRequest = "UPDATE reporting_date_info SET request_status = 1 WHERE trans_code = '".$tcodeID."' ";
$updateRequest_data = mysql_query($updateRequest); 

$data['success'] = true;
$data['message'] = $tcodeID;
// $data['message'] = 'Update from vacation request';

echo json_encode($data);
?>