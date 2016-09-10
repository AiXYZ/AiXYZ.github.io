<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

$sql = mysql_query("SELECT id, religion_name FROM religion ORDER BY religion_name ASC");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		$data[] = array(
				'id' => $row['id'],
				'religion_name' => $row['religion_name']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if

?>