<?php
include_once("../../../inc/config.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($pid){
	
	$project = "SELECT id, company_id FROM project_info WHERE id = '".$pid."' ";
	$project_data = mysql_query($project);
	$company_id = mysql_result($project_data,0,"company_id");
	
	//Get the Name of the company
	$company = "SELECT * FROM company_info WHERE id = '$company_id'";
	$company_data = mysql_query($company);
	$company_name = mysql_result($company_data,0,"company_name");
	
	return array('company_name' => $company_name);
	
}// end

$result = search($_POST['project_id']);
echo json_encode($result);
?>