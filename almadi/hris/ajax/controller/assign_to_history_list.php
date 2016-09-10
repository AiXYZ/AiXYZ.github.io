<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$requestID = $_GET['rid'];

$sql = mysql_query("SELECT id, tcode, assigned_to, assigned_by, assigned_date, assign_comment, file_attachment FROM general_request_assigned WHERE tcode = '".$requestID."' ORDER BY id ASC");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		
		// Attachment for Request
		@$request_file_path = $row['file_attachment'];
		@$request_file_path_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
		@$request_file_path_filename = $request_file_path_explode[0];
		
		// Assign to
		$assignTo_Name = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$row['assigned_to']."' ";
		$assignTo_Name_data = mysql_query($assignTo_Name);
		$assignToName = mysql_result($assignTo_Name_data,0,"fullname");
		
		// Assign by
		$assignBy_Name = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$row['assigned_by']."' ";
		$assignBy_Name_data = mysql_query($assignBy_Name);
		$assignByName = mysql_result($assignBy_Name_data,0,"fullname");
		
		$data[] = array(
				'id' => $row['id'],
				'assigned_to' => $row['assigned_to'].' - '.$assignToName,
				'assigned_by' => $row['assigned_by'].' - '.$assignByName,
				'assigned_date' => $row['assigned_date'],
				'assigned_file_path' => $request_file_path,
				'assigned_file_name' => $request_file_path_filename,
				'assign_comment' => $row['assign_comment']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if

?>