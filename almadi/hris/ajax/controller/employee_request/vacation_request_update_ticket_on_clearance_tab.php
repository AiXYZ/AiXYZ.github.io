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
@$ticket_from = $_POST['ticket_from'];
@$ticket_to = $_POST['ticket_to'];
@$departure_date = $_POST['departure_date'];
@$return_date = $_POST['return_date'];
@$ticket_class = $_POST['ticket_class'];
@$ticket_price = $_POST['ticket_price'];
@$ticket_number = $_POST['ticket_number'];
@$ticket_airline = $_POST['ticket_airline'];
@$ticket_return_date = $_POST['ticket_return_date'];
@$ticket_notes = $_POST['ticket_notes'];
// @$ = $_POST['xxx'];

$ticket = "UPDATE process_ticket SET
				ticket_from = '".$ticket_from."',
				ticket_to = '".$ticket_to."',
				departure_date = '".$departure_date."',
				return_date = '".$return_date."',
				ticket_class = '".$ticket_class."',
				ticket_price = '".$ticket_price."',
				ticket_number = '".$ticket_number."',
				name_airlines = '".$ticket_airline."',
				ticket_return_date = '".$ticket_return_date."',
				note_ticket = '".$ticket_notes."'
			  WHERE tcode = '".$tcode."' ";
$ticket_data = mysql_query($ticket);

$data['success'] = true;
$data['message'] = 'Success! Ticket details updated.';
// $data['message'] = $ticket;

echo json_encode($data);
?>