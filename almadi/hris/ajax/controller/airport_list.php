<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

$sql = mysql_query("SELECT id, airport_code, airport_name FROM airport_list");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		$data[] = array(
				'id' => $row['id'],
				'airport_code' => $row['airport_code'],
				'airport_name' => $row['airport_name']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if

?>