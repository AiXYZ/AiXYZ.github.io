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
$table = 'bank_request_info';

// Table's primary key
//$primaryKey = 'id';
$primaryKey = 'tcode_vacation';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes

$columns = array(
		array( 'db' => '`ed`.`id_number`',  'dt' => 0, 'field' => 'id_number' ),
		array( 'db' => '`ed`.`fullname`',  'dt' => 1, 'field' => 'fullname' ),
		array( 'db' => '`ed`.`nationality`', 'dt' => 2, 'field' => 'nationality' ),
		array( 'db' => '`ed`.`iqama_number`',  'dt' => 3, 'field' => 'iqama_number'),
		array( 'db' => '`ed`.`project_name`', 'dt' => 4, 'field' => 'project_name' ),
		array( 'db' => '`ed`.`position`', 'dt' => 5, 'field' => 'position' ),
		
		// This values are not shown on the tables
		array( 'db' => '`ed`.`contract_g_date_employed`', 'dt' => 6, 'field' => 'contract_g_date_employed' ),
		array( 'db' => '`bri`.`tcode_vacation`', 'dt' => 7, 'field' => 'tcode_vacation' ),
		array( 'db' => '`ed`.`required_fields_one`', 'dt' => 8, 'field' => 'required_fields_one' ),
		array( 'db' => '`ed`.`required_fields_two`', 'dt' => 9, 'field' => 'required_fields_two' )
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
 * 2 - Send to bank
 * 3 - Received from bank
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 */

// require( 'ssp.class.php' );
//require('ssp.customized.class.php' );
require( '../../../en/ssp.customized.class.php' );

// HR First
if($_GET['request_type'] == 'bank_hr_first'){
	$joinQuery = "FROM `bank_request_info` AS `bri` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `bri`.`employee_id_details`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `bri`.`request_status` = 1 AND `ed`.`project_id` IN ($projects)";
}// end if

// Send to bank
if($_GET['request_type'] == 'bank_send_to_bank'){
	$joinQuery = "FROM `bank_request_info` AS `bri` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `bri`.`employee_id_details`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `bri`.`request_status` = 2 AND `ed`.`project_id` IN ($projects)";
}// end if

// Received from bank
if($_GET['request_type'] == 'bank_received_from_bank'){
	$joinQuery = "FROM `bank_request_info` AS `bri` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `bri`.`employee_id_details`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `bri`.`request_status` = 3 AND `ed`.`project_id` IN ($projects)";
}// end if

// Send to site
if($_GET['request_type'] == 'bank_send_to_site'){
	$joinQuery = "FROM `bank_request_info` AS `bri` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `bri`.`employee_id_details`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `bri`.`request_status` = 4 AND `ed`.`project_id` IN ($projects)";
}// end if

// Closed
if($_GET['request_type'] == 'bank_closed'){
	$joinQuery = "FROM `bank_request_info` AS `bri` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `bri`.`employee_id_details`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `bri`.`request_status` = 5 AND `ed`.`project_id` IN ($projects)";
}// end if

// Declined
if($_GET['request_type'] == 'bank_declined'){
	$joinQuery = "FROM `bank_request_info` AS `bri` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `bri`.`employee_id_details`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `bri`.`request_status` = 6 AND `ed`.`project_id` IN ($projects)";
}// end if

echo json_encode(
	SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery, $extraWhere )
	//SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery )
);