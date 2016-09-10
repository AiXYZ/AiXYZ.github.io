<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$empid = $_POST['empid'];

$checkContract = "SELECT id_number, contract_g_date_employed FROM employee_details WHERE id_number = '".$empid."' ";
$checkContract_data = mysql_query($checkContract);
$checkContract_Date = mysql_result($checkContract_data,0,"contract_g_date_employed");



if($checkContract_Date > 1){
	//$data['success'] = true;
	//$data['message'] = 'Success! Edit saved.';
	//$data['message'] = 'With contract';
}else {
	$data['success'] = true;
	//$data['message'] = 'Success! Edit saved.';
	$data['message'] = 'Error! Invalid Contract date.';
}

// =========================== \\

echo json_encode($data);
?>