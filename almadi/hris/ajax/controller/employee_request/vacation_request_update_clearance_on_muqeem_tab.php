<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$tcode = $_POST['tcode'];
@$muqeem_benefit = $_POST['muqeem_benefit'];
@$muqeem_ticket = $_POST['muqeem_ticket'];
@$muqeem_notes = $_POST['muqeem_notes'];
// @$ = $_POST['xxx'];

$clearance = "UPDATE process_clearance SET
					benefit = '".$muqeem_benefit."',
					ticket = '".$muqeem_ticket."',
					clearance_process_notes = '".$muqeem_notes."'
				   WHERE tcode = '".$tcode."' ";
$clearance_data = mysql_query($clearance);

$data['success'] = true;
$data['message'] = 'Success! Clearance details updated.';
// $data['message'] = $clearance;

echo json_encode($data);
?>