<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

$sql = mysql_query("SELECT id, agency_name FROM agency ORDER BY agency_name ASC");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		$data[] = array(
				'id' => $row['id'],
				'agency_name' => $row['agency_name']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if

?>