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

/*
 * This is for the General request
 * 1 - gr_who_assign
 * 2 - gr_assigned_to
 * 
 */

function search($employeeid){
	
	$request = "SELECT request_features FROM system_accounts WHERE employee_id = '".$employeeid."' ";
	$request_data = mysql_query($request);
	$request_features = mysql_result($request_data,0,"request_features");
	
	/* -------------------------------------------------------------------------------------------------------------------- */
	
	/* General features */	
	$array_feature = explode("|", $request_features);
	
	// Who can assign
	if(in_array('1', $array_feature)){
		$gr_who_assign = 'True';
	}else {
		$gr_who_assign = 'False';
	}
	
	// Assign to employee
	if(in_array('2', $array_feature)){
		$gr_assign_to = 'True';
	}else {
		$gr_assign_to = 'False';
	}
	
	/* -------------------------------------------------------------------------------------------------------------------- */
	
	return array(
			
			// General features
			'gr_who_assign' => $gr_who_assign,
			'gr_assign_to' => $gr_assign_to,
			
			'test_result' => $request
			
	); // end array
	
}// end function
	
// =================================================================== \\

$result = search($_SESSION['login_user']);
echo json_encode($result);
?>