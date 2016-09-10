<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// This is to update the attached file to null
// if($_GET['task'] == 'attach_file'){
// 	@$tcode = $_POST['tcode_hrfirst_file'];
// 	// Remove the attache file on HR First
	
// 	$removeFile = "UPDATE vacation_request_info SET vr_request_file_initial = NULL WHERE tcode_vacation = '".$tcode."'";
// 	$removeFile_data = mysql_query($removeFile);
	
// 	$data['success'] = true;
// 	$data['message'] = 'Success!';
	
// }// end if -> attach file

// =========================== \\

// This is to update notes and attached file

if($_GET['task'] == 'update_ticket'){
	@$tcode = $_POST['tcode'];
	@$exit_from_ticket_clearance = $_POST['exit_from_ticket_clearance'];
	@$exit_to_ticket_clearance = $_POST['exit_to_ticket_clearance'];
	@$exit_departure_date_clearance = $_POST['exit_departure_date_clearance'];
	@$exit_class_clearance = $_POST['exit_class_clearance'];
	@$exit_price_clearance = $_POST['exit_price_clearance'];
	@$exit_number_clearance = $_POST['exit_number_clearance'];
	@$exit_airline_clearance = $_POST['exit_airline_clearance'];
	@$exit_notes_clearance = $_POST['exit_notes_clearance'];

// 	@$xxx= $_POST['xx'];
	
	$updateTicket = "UPDATE process_ticket SET ticket_from = '".$exit_from_ticket_clearance."', ticket_to = '".$exit_to_ticket_clearance."', departure_date = '".$exit_departure_date_clearance."', ticket_class = '".$exit_class_clearance."', ticket_price = '".$exit_price_clearance."', ticket_number = '".$exit_number_clearance."', name_airlines = '".$exit_airline_clearance."', note_ticket = '".$exit_notes_clearance."' WHERE tcode = '".$tcode."'";
	$updateTicket_data = mysql_query($updateTicket);
	
	$data['success'] = true;
	$data['message'] = 'Success! Edit saved.';
// 	$data['message'] = $updateVisa;
	
}//end if

// =========================== \\

echo json_encode($data);
?>