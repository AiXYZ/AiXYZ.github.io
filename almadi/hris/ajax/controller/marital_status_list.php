<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

$sql = mysql_query("SELECT id, marriage_status FROM marital_status ORDER BY marriage_status ASC");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		$data[] = array(
				'id' => $row['id'],
				'marriage_status' => $row['marriage_status']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if

?>