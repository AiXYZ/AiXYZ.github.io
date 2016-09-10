<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$tcode = $_POST['tcode'];													// tcode
@$ticket_from = $_POST['ticket_from'];									// ticket_from
@$ticket_to = $_POST['ticket_to'];										// ticket_to
@$departure_date = $_POST['departure_date'];						// departure_date
@$return_date = $_POST['return_date'];									// return_date
@$class_ticket = $_POST['class_ticket'];								// ticket_class
@$price_ticket = $_POST['price_ticket'];									// ticket_price
@$number_ticket = $_POST['number_ticket'];							// ticket_number
@$airline_name = $_POST['airline_name'];								// name_airlines
@$return_date_ticket = $_POST['return_date_ticket'];				// ticket_return_date
@$ticket_notes = $_POST['ticket_notes'];								// note_ticket
// @$ = $_POST['xxx'];


//Username and Date HR First is updated
$ticketUpdateBy = $_SESSION['login_user'];
$ticketUpdateCreated = $Default_Date_Settings;

$Update = "SELECT tcode, date_created FROM process_visa WHERE tcode = '".$tcode."' ";
$Update_data = mysql_query($Update);
$VisaCreated_date = mysql_result($Update_data,0,"date_created");

$elapsed_days = elapsed_days($VisaCreated_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the FD updated up to the Current Date it was update by the HR

$insertTicket = "INSERT INTO process_ticket
					(
					tcode,
					ticket_from,
					ticket_to,
					departure_date,
					return_date,
					ticket_class,
					ticket_price,
					ticket_number,
					name_airlines,
					ticket_return_date,
					note_ticket,
					elapsed_days,
					created_by,
					date_created
					)
					VALUES
					(
					'".$tcode."',
					'".$ticket_from."',
					'".$ticket_to."',
					'".$departure_date."',
					'".$return_date."',
					'".$class_ticket."',
					'".$price_ticket."',
					'".$number_ticket."',
					'".$airline_name."',
					'".$return_date_ticket."',		
					'".$ticket_notes."',		
					'".$elapsedDays."',
					'".$ticketUpdateBy."',
					'".$ticketUpdateCreated."'
					)";
$insertTicket_data = mysql_query($insertTicket);

// Update the vacation request for REQUEST_STATUS
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
$update = "UPDATE vacation_request_info SET request_status = 6 WHERE tcode_vacation = '".$tcode."' ";
$update_data = mysql_query($update);

$data['success'] = true;
$data['message'] = 'Success! Processing Ticket.';
//$data['message'] = $insertTicket;

echo json_encode($data);
?>