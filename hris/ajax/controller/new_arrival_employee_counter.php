<?php
ob_start();
session_start();

include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

function search(){
	
	db_connect();
	
	// Labors
	$others = "SELECT * FROM employee_details WHERE position_id IN (SELECT id FROM position_info WHERE position_type = 1 ORDER BY id ASC) AND isNULL(required_status_arrival)";
	$others_data = mysql_query($others);
	$others_rows = mysql_num_rows($others_data);
	$others_counter = 0;
	$others_total = 0;
	while ($others_counter < $others_rows)
	{
		@$others_total++;
		
		$others_counter++;
	}
	
	// Drivers
	
	// Engineers
	
	// Others
	
	return array(
			'others_total' => '('.$others_total.')'
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>