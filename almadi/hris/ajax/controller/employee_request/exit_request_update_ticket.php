<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$tcode = $_POST['tcode'];
@$exit_from_ticket = $_POST['exit_from_ticket'];
@$exit_to_ticket = $_POST['exit_to_ticket'];
@$exit_departure_date_ticket = $_POST['exit_departure_date_ticket'];
@$exit_class_ticket = $_POST['exit_class_ticket'];
@$exit_price_ticket = $_POST['exit_price_ticket'];
@$exit_ticket_number = $_POST['exit_ticket_number'];
@$exit_airline_name = $_POST['exit_airline_name'];
@$exit_ticket_notes = $_POST['exit_ticket_notes'];
// @$xx = $_POST['xx'];

// =================================================================== \\

//Username and Date HR First is updated
$ticketUpdateBy = $_SESSION['login_user'];
$ticketUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode, date_created FROM process_visa WHERE tcode = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - FD
 * 3 - HR Final
 * 4 - Visa
 * 5 - Ticket
 * 6 - Clearance
 * 7 - Muqeem
 * 8 - Closed
 * 9 - Declined
 */

$insertTicket = "INSERT INTO process_ticket
					(
					tcode,
					ticket_from,
					ticket_to,
					departure_date,
					ticket_class,
					ticket_price,
					ticket_number,
					name_airlines,
					note_ticket,
					elapsed_days,
					created_by,
					date_created
					)
					VALUES
					('".$tcode."',
					'".$exit_from_ticket."',
					'".$exit_to_ticket."',
					'".$exit_departure_date_ticket."',
					'".$exit_class_ticket."',
					'".$exit_price_ticket."',
					'".$exit_ticket_number."',
					'".$exit_airline_name."',
					'".$exit_ticket_notes."',
					'".$elapsedDays."',
					'".$ticketUpdateBy."',
					'".$ticketUpdateCreated."')";
$insertTicket_data = mysql_query($insertTicket);

// Update the exit_request_info -> request_status
$updateRequestStatus = "UPDATE exit_request_info SET request_status = 6 WHERE tcode_vacation = '".$tcode."' ";
$updateRequestStatus_data = mysql_query($updateRequestStatus);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
// $data['message'] = $insertTicket;

echo json_encode($data);
?>