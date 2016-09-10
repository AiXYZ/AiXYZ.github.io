<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

db_connect();

mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// Output JSON
function outputJSON($msg, $status = 'error'){
	header('Content-Type: application/json');
	die(json_encode(array(
			'data_fv' => $msg,
			'status_fv' => $status
	)));
}

$unique_code = date("YmdHis");

/* -----------------------------------------------------------------------------  */

$rename = 'assign_to_'.$unique_code.'_';
$photo_path = '../../../upload/request_file/general_request/';
$data_path = '../upload/request_file/general_request/'.$rename;
$column_name = 'file_attachment';

/* -----------------------------------------------------------------------------  */

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

$uploadFile = "UPDATE general_request_assigned SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE id = '".$_GET['aid']."'";
$uploadFile_data = mysql_query($uploadFile);

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>