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

@$tcode = $_POST['tcode'];
@$total_remaining_salary = str_replace(',','',$_POST['total_remaining_salary']);
@$outstanding_balance = str_replace(',','',$_POST['outstanding_balance']);
@$amount_last_advance = str_replace(',','',$_POST['amount_last_advance']);
@$date_last_advance = $_POST['date_last_advance'];
@$deduction_method = $_POST['deduction_method'];
@$cash_advance_notes = $_POST['hr_notes'];

// @$xxx = $_POST['xxx'];

// =================================================================== \\

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - Employee Recevied
 * 4 - Closed
 * 5 - Declined
 */

$updateHR_First = "UPDATE cash_advance_request_info SET
							credit_salary = '".$total_remaining_salary."',
							credit = '".$outstanding_balance."',
							last_advance_amount = '".$amount_last_advance."',
							last_advance_date = '".$date_last_advance."',		
							payment_method = '".$deduction_method."',		
							
							notes_hr = '".$cash_advance_notes."'
									
							WHERE tcode_vacation = '".$tcode."' ";

$updateHR_First_data = mysql_query($updateHR_First);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateHR_First;
	
// =========================== \\

echo json_encode($data);
?>