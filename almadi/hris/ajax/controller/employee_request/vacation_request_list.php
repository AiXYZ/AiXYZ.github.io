<?php
ob_start();
session_start();

include_once '../../../../inc/config.php';
include_once '../../../../inc/functions.php';

// This is for the ALLOWED Employee to be display
@$projects = getProjects($_SESSION["login_user"]);
// This is for the ALLOWED Employee to be display
/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simply to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */

// DB table to use
//$table = 'user';
$table = 'vacation_request_info';

// Table's primary key
//$primaryKey = 'id';
$primaryKey = 'tcode_vacation';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes

$columns = array(
		array( 'db' => '`u`.`expected_departure_to_date`',  'dt' => 0, 'field' => 'expected_departure_to_date' ),
		array( 'db' => '`u`.`type_of_leave`',  'dt' => 1, 'field' => 'type_of_leave' ),
		array( 'db' => '`ud`.`id_number`',  'dt' => 2, 'field' => 'id_number' ),
		array( 'db' => '`ud`.`fullname`',  'dt' => 3, 'field' => 'fullname' ),
		array( 'db' => '`ud`.`nationality`', 'dt' => 4, 'field' => 'nationality' ),
		array( 'db' => '`ud`.`iqama_number`',  'dt' => 5, 'field' => 'iqama_number'),
		array( 'db' => '`ud`.`project_name`', 'dt' => 6, 'field' => 'project_name' ),
		array( 'db' => '`ud`.`position`', 'dt' => 7, 'field' => 'position' ),
		array( 'db' => '`u`.`replacement_requirements`', 'dt' => 8, 'field' => 'replacement_requirements' ),
		
		// This values are not shown on the tables
		array( 'db' => '`ud`.`contract_g_date_employed`', 'dt' => 9, 'field' => 'contract_g_date_employed' ),
		array( 'db' => '`u`.`tcode_vacation`', 'dt' => 10, 'field' => 'tcode_vacation' ),
		array( 'db' => '`ud`.`required_fields_one`', 'dt' => 11, 'field' => 'required_fields_one' ),
		array( 'db' => '`ud`.`required_fields_two`', 'dt' => 12, 'field' => 'required_fields_two' )
);

$sql_details = array(
		'user' => DB_USER,
		'pass' => DB_PASS,
		'db'   => DB_NAME,
		'host' => DB_HOST
);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */

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

// require( 'ssp.class.php' );
//require('ssp.customized.class.php' );
require( '../../../en/ssp.customized.class.php' );

// HR First
if($_GET['request_type'] == 'vr_hr_first'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 1 AND `ud`.`project_id` IN ($projects)";
}// end if

// FD
if($_GET['request_type'] == 'vr_fd'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 2 AND `ud`.`project_id` IN ($projects)";
}// end if

// HR Final
if($_GET['request_type'] == 'vr_hr_final'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 3 AND `ud`.`project_id` IN ($projects)";
}// end if

// Visa
if($_GET['request_type'] == 'vr_visa'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 4 AND `ud`.`project_id` IN ($projects)";
}// end if

// Ticket
if($_GET['request_type'] == 'vr_ticket'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 5 AND `ud`.`project_id` IN ($projects)";
}// end if

// Clearance
if($_GET['request_type'] == 'vr_clearance'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 6 AND `ud`.`project_id` IN ($projects)";
}// end if

// Muqeem
if($_GET['request_type'] == 'vr_muqeem'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 7 AND `ud`.`project_id` IN ($projects)";
}// end if

// Closed
if($_GET['request_type'] == 'vr_closed'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 8 AND `ud`.`project_id` IN ($projects)";
}// end if

// Declined
if($_GET['request_type'] == 'vr_declined'){
	$joinQuery = "FROM `vacation_request_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`employee_id_details`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 9 AND `ud`.`project_id` IN ($projects)";
}// end if

echo json_encode(
	SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery, $extraWhere )
	//SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery )
);