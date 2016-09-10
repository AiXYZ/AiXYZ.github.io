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

@$salary_id = $_POST['salary_id'];

// @$xxx = $_POST['xxx'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

$deleteSalaryHistory = "DELETE FROM salary_history WHERE id = '".$salary_id."' ";
$deleteSalaryHistory_data = mysql_query($deleteSalaryHistory);

$data['success'] = true;
$data['message'] = 'Success! Data deleted.';
// $data['message'] = $deleteSalaryHistory;
	
// =========================== \\

echo json_encode($data);
?>