<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

$sql = mysql_query("SELECT id, ticket_class FROM ticket_class");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		$data[] = array(
				'id' => $row['id'],
				'ticket_class' => $row['ticket_class']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if

?>