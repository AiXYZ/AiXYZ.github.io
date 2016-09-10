<?php
ob_start();
session_start();

include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

$errors = array();
$data = array();

if(empty($_POST['username']))
	$errors['username'] = 'Username is required.';

if(empty($_POST['password']))
	$errors['password'] = 'Password is required.';

if(!empty($errors)){
	//Empty Username or Password
	$data['success'] = false;
	$data['errors'] = $errors;
	$data['message'] = 'Username or Password is empty!';
}else {
	db_connect();
	mysql_query("SET NAMES utf8");
	mysql_query("set character set utf8");
	
	@$username = mysql_real_escape_string($_POST['username']);
	@$password = mysql_real_escape_string($_POST['password']);
	
	$loginCheck = "SELECT employee_id, username, password, apps FROM system_accounts WHERE username = '".$username."' AND password = '".$password."'";
	$loginCheck_data = mysql_query($loginCheck);
	$loginCheck_rows = mysql_num_rows($loginCheck_data);
	@$loginID = mysql_result($loginCheck_data,0,"employee_id");
	
	// SGC app start
	@$app_list = mysql_result($loginCheck_data,0,"apps");
	
	//app HRIS = 1
	//app OMS = 2
	//app VMS = 3
	
	if($loginCheck_rows > 0){
		// Store the username on the session
		$_SESSION['login_user'] = $loginID;
		
		$data['success'] = true;
		$data['message'] = $app_list;
	}else {
		$data['success'] = false;
		$data['message'] = 'Invalid Username or Password!';
	}

// 	$data['success'] = true;
// 	$data['message'] = $loginCheck_rows;

}// end if else



echo json_encode($data);
?>