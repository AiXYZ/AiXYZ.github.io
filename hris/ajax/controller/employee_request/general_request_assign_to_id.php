<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($tcodeid){
	
	$request = "SELECT id, tcode FROM general_request_assigned WHERE tcode = '".$tcodeid."' ORDER BY id DESC LIMIT 1 ";
	$request_data = mysql_query($request);
	$request_id = mysql_result($request_data,0,"id");
	
	return array(
			
			'assigned_to_id' => $request_id,
			'test_result' => $request
			
	); // end array
	
}// end function

$result = search($_POST['tcode_id']);
echo json_encode($result);
?>