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
			'data_vr' => $msg,
			'status_vr' => $status
	)));
}


$unique_code = date("YmdHis");

/* -----------------------------------------------------------------------------  */

// vacation request
if($_GET['requestType'] == 'vacation'){
	$rename = 'vacation_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/vacation_request/';
	$data_path = '../upload/request_file/vacation_request/'.$rename;
	$column_name = 'vr_request_file';
	$table_name = 'vacation_request_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// exit request
if($_GET['requestType'] == 'exit'){
	$rename = 'exit_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/exit_request/';
	$data_path = '../upload/request_file/exit_request/'.$rename;
	$column_name = 'vr_request_file';
	$table_name = 'exit_request_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// transfer request
if($_GET['requestType'] == 'transfer'){
	$rename = 'transfer_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/transfer_request/';
	$data_path = '../upload/request_file/transfer_request/'.$rename;
	$column_name = 'file_path_request';
	$table_name = 'request_personnel_transfer_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// bank request
if($_GET['requestType'] == 'bank'){
	$rename = 'bank_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/bank_request/';
	$data_path = '../upload/request_file/bank_request/'.$rename;
	$column_name = 'file_path';
	$table_name = 'bank_request_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// cash advance request
if($_GET['requestType'] == 'cash_advance'){
	$rename = 'cash_advance_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/cash_advance_request/';
	$data_path = '../upload/request_file/cash_advance_request/'.$rename;
	$column_name = 'file_path_request';
	$table_name = 'cash_advance_request_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// salary increase request
if($_GET['requestType'] == 'salary_increase'){
	$rename = 'salary_increase_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/salary_increase_request/';
	$data_path = '../upload/request_file/salary_increase_request/'.$rename;
	$column_name = 'request_file_path';
	$table_name = 'salary_increase_request_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// general request
if($_GET['requestType'] == 'general'){
	$rename = 'general_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/general_request/';
	$data_path = '../upload/request_file/general_request/'.$rename;
	$column_name = 'file_path';
	$table_name = 'general_request_info';
	$tcode = 'transaction_code';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// health insurance request
if($_GET['requestType'] == 'health_insurance'){
	$rename = 'health_insurance_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/health_insurance_request/';
	$data_path = '../upload/request_file/health_insurance_request/'.$rename;
	$column_name = 'health_file';
	$table_name = 'health_insurance_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// new employee
if($_GET['requestType'] == 'newEmployee'){
	$rename = 'new_employee_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/new_employee_request/';
	$data_path = '../upload/request_file/new_employee_request/'.$rename;
	$column_name = 'emp_file_path';
	$table_name = 'reporting_date_info';
	$tcode = 'trans_code';
	$request_type = 'TRUE';
}
/* -----------------------------------------------------------------------------  */

// from vacation
if($_GET['requestType'] == 'from_vacation_pdf'){
	$rename = 'from_vacation_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/from_vacation_request/';
	$data_path = '../upload/request_file/from_vacation_request/'.$rename;
	$column_name = 'emp_file_path';
	$table_name = 'reporting_date_info';
	$tcode = 'trans_code';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// transferred
if($_GET['requestType'] == 'transferred_pdf'){
	$rename = 'transferred_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/transferred_request/';
	$data_path = '../upload/request_file/transferred_request/'.$rename;
	$column_name = 'emp_file_path';
	$table_name = 'reporting_date_info';
	$tcode = 'trans_code';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// re-new iqama
if($_GET['requestType'] == 'reNewIqama'){
	$rename = 're-new-iqama'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/renew_iqama_request/';
	$data_path = '../upload/request_file/renew_iqama_request/'.$rename;
	$column_name = 'iqama_file_path';
	$table_name = 'renew_iqama_info';
	$tcode = 'tcode';
	$request_type = 'TRUE';
}
/* -----------------------------------------------------------------------------  */

// extend / re-entry
if($_GET['requestType'] == 'extend_reentry'){
	$rename = 'extend_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/extend_request/';
	$data_path = '../upload/request_file/extend_request/'.$rename;
	$column_name = 'resignation_file';
	$table_name = 'extend_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// family visit
if($_GET['requestType'] == 'family_visit'){
	$rename = 'family_visit_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/family_request/';
	$data_path = '../upload/request_file/family_request/'.$rename;
	$column_name = 'family_file';
	$table_name = 'family_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// change career
if($_GET['requestType'] == 'career'){
	$rename = 'career_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/career_request/';
	$data_path = '../upload/request_file/career_request/'.$rename;
	$column_name = 'career_file';
	$table_name = 'career_info';
	$tcode = 'tcode_vacation';
	$request_type = 'TRUE';
}
/* -----------------------------------------------------------------------------  */

// floating
if($_GET['requestType'] == 'floating'){
	$rename = 'floating_request_'.$unique_code.'_';
	$photo_path = '../../../upload/request_file/floating_request/';
	$data_path = '../upload/request_file/floating_request/'.$rename;
	$column_name = 'emp_file_path';
	$table_name = 'floating_personnel_info';
	$tcode = 'trans_code';
	$request_type = 'TRUE';
}

/* -----------------------------------------------------------------------------  */

// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], $photo_path . $rename.$_FILES['SelectedFile']['name'])){
	outputJSON('Error uploading file - check destination is writeable.');
}

if(@$request_type == 'TRUE'){
	// Update file
	$uploadFile = "UPDATE ".$table_name." SET ".$column_name." = '".$data_path.$_FILES['SelectedFile']['name']."' WHERE ".$tcode." = '".$_GET['transactionCode']."'";
	$uploadFile_data = mysql_query($uploadFile);
}// end if

// Success!
outputJSON('File uploaded successfully to "' . $photo_path . $_FILES['SelectedFile']['name'] . '".', 'success');
?>