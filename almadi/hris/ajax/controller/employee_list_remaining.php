<?php
include_once '../../../inc/config.php';
include_once '../../../inc/functions.php';

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");


//Total Number of Employees
$totalEmployees = mysql_query("SELECT COUNT(*) AS total_employees FROM personal_info") or exit(mysql_error());
$rowtotalEmployees = mysql_fetch_object($totalEmployees);
$TotalEmployees = $rowtotalEmployees->total_employees;

$employeeList = "SELECT id_number FROM personal_info LIMIT 50, $TotalEmployees";
$employeeList_data = mysql_query($employeeList);
$employeeList_rows = mysql_num_rows($employeeList_data);
$employeeList_ctr = 0;
while ($employeeList_ctr < $employeeList_rows) {
	
	$emp_id = mysql_result($employeeList_data,$employeeList_ctr,"id_number");
	
	// Employee Info
	$pInfo = "SELECT id_number, first_name, nationality FROM personal_info WHERE id_number = '".$emp_id."'   ";
	$pInfo_data = mysql_query($pInfo);
	@$empName = mysql_result($pInfo_data,0,"first_name");
	@$nationalityID = mysql_result($pInfo_data,0,"nationality");
	
	// Iqama Info
	$iqamaInfo = "SELECT emp_id_number, iqama_number FROM iqama_info WHERE emp_id_number = '".$emp_id."'   ";
	$iqamaInfo_data = mysql_query($iqamaInfo);
	@$iqamaNumber = mysql_result($iqamaInfo_data,0,"iqama_number");
	
	// Contract Info
	$contractInfo = "SELECT emp_id_number, project_name, status, position FROM contract_info WHERE emp_id_number = '".$emp_id."'  ";
	$contractInfo_data = mysql_query($contractInfo);
	@$projectID = mysql_result($contractInfo_data,0,"project_name");
	@$status = mysql_result($contractInfo_data,0,"status");
	@$positionID = mysql_result($contractInfo_data,0,"position");
	
	// Project Name
	$projectInfo = "SELECT id, project_name FROM project_info WHERE id = '".$projectID."'  ";
	$projectInfo_data = mysql_query($projectInfo);
	@$projectName = mysql_result($projectInfo_data,0,"project_name");
	
	// Nationaity Info
	$nationality = "SELECT id, nationality FROM nationality_info WHERE id = '".$nationalityID."' ";
	$nationality_data = mysql_query($nationality);
	@$nationalityName = mysql_result($nationality_data,0,"nationality");
	
	// Position Info
	$position = "SELECT id, position_name FROM position_info WHERE id = '".$positionID."'  ";
	$position_data = mysql_query($position);
	@$positionName = mysql_result($position_data,0,"position_name");
	
	$output[] = array($emp_id,$empName,$iqamaNumber,$projectName,$nationalityName,$status,$positionName);
	
	$employeeList_ctr++;
}

echo json_encode($output);

?>