<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

$empID = $_GET['eid'];

$sql = mysql_query("SELECT id, emp_id_number, basic_salary, other_allowance, total_salary, effectivity_date FROM salary_history WHERE emp_id_number = '".$empID."' ORDER BY id ASC");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		$data[] = array(
				'id' => $row['id'],
				'emp_id_number' => $row['emp_id_number'],
				'basic_salary' => number_format($row['basic_salary'], 0),
				'other_allowance' => number_format($row['other_allowance'], 0),
				'total_salary' => number_format($row['total_salary'], 0),
				'effectivity_date' => $row['effectivity_date']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if

?>