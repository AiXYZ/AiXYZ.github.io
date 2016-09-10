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

@$empid = $_POST['empid'];
@$salary_basic = $_POST['salary_basic'];
@$salary_other_allowance = $_POST['salary_other_allowance'];
@$salary_total = $_POST['salary_total'];
@$salary_effectivity_date = $_POST['salary_effectivity_date'];

// @$xxx = $_POST['xxx'];

// =================================================================== \\

//Username and Date HR First is updated
$UpdateBy = $_SESSION['login_user'];
$UpdateCreated = $Default_Date_Settings;

$addSalaryHistory = "INSERT INTO salary_history(
							emp_id_number,
							basic_salary,
							other_allowance,
							total_salary,
							effectivity_date,
							date_updated,
							updated_by
							)VALUES(
							'".$empid."',
							'".$salary_basic."',
							'".$salary_other_allowance."',
							'".$salary_total."',
							'".$salary_effectivity_date."',
							'".$UpdateCreated."',
							'".$UpdateBy."'
							) ";
$addSalaryHistory_data = mysql_query($addSalaryHistory);

// This will update the employee details 
// Basic salary, Other allowance, Total salary
$updateSalary = "UPDATE employee_details SET basic_salary = '".$salary_basic."', other_allowance = '".$salary_other_allowance."', total_salary = '".$salary_total."' WHERE id_number = '".$empid."' ";
$updateSalary_data = mysql_query($updateSalary);

$data['success'] = true;
$data['message'] = 'Success! Data inserted.';
// $data['message'] = $addSalaryHistory;
	
// =========================== \\

echo json_encode($data);
?>