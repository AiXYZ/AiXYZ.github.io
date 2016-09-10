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
$table = 'request_personnel_transfer_info';

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
		array( 'db' => '`ed`.`position`', 'dt' => 4, 'field' => 'position' ),
		array( 'db' => '`ed`.`project_name`', 'dt' => 5, 'field' => 'project_name' ),
		array( 'db' => '`pi`.`p_name`', 'dt' => 6, 'field' => 'p_name' ),
		
		// This values are not shown on the tables
		array( 'db' => '`ed`.`contract_g_date_employed`', 'dt' => 7, 'field' => 'contract_g_date_employed' ),
		array( 'db' => '`rpti`.`tcode_vacation`', 'dt' => 8, 'field' => 'tcode_vacation' ),
		array( 'db' => '`rpti`.`transferred_request_status`', 'dt' => 9, 'field' => 'transferred_request_status' ),
		array( 'db' => '`ed`.`required_fields_one`', 'dt' => 10, 'field' => 'required_fields_one' ),
		array( 'db' => '`ed`.`required_fields_two`', 'dt' => 11, 'field' => 'required_fields_two' )
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
 * 4 - Approval
 * 5 - Closed
 * 6 - Declined
 * 
 */

// require( 'ssp.class.php' );
//require('ssp.customized.class.php' );
require( '../../../en/ssp.customized.class.php' );

// HR First
if($_GET['request_type'] == 'transfer_hr_first'){
	$joinQuery = "FROM `request_personnel_transfer_info` AS `rpti` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `rpti`.`employee_id_details`) JOIN `project_info` AS `pi` ON (`pi`.`id` = `rpti`.`transfer_to`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `rpti`.`request_status` = 1 AND `ed`.`project_id` IN ($projects)";
}// end if

// FD
if($_GET['request_type'] == 'transfer_fd'){
	$joinQuery = "FROM `request_personnel_transfer_info` AS `rpti` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `rpti`.`employee_id_details`) JOIN `project_info` AS `pi` ON (`pi`.`id` = `rpti`.`transfer_to`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `rpti`.`request_status` = 2 AND `ed`.`project_id` IN ($projects)";
}// end if

// HR Final
if($_GET['request_type'] == 'transfer_hr_final'){
	$joinQuery = "FROM `request_personnel_transfer_info` AS `rpti` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `rpti`.`employee_id_details`) JOIN `project_info` AS `pi` ON (`pi`.`id` = `rpti`.`transfer_to`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `rpti`.`request_status` = 3 AND `ed`.`project_id` IN ($projects)";
}// end if

// Approval
if($_GET['request_type'] == 'transfer_approval'){
	$joinQuery = "FROM `request_personnel_transfer_info` AS `rpti` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `rpti`.`employee_id_details`) JOIN `project_info` AS `pi` ON (`pi`.`id` = `rpti`.`transfer_to`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `rpti`.`request_status` = 4 AND `ed`.`project_id` IN ($projects)";
}// end if

// Closed
if($_GET['request_type'] == 'transfer_closed'){
	$joinQuery = "FROM `request_personnel_transfer_info` AS `rpti` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `rpti`.`employee_id_details`) JOIN `project_info` AS `pi` ON (`pi`.`id` = `rpti`.`transfer_to`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `rpti`.`request_status` = 5 AND `ed`.`project_id` IN ($projects)";
}// end if

// Declined
if($_GET['request_type'] == 'transfer_declined'){
	$joinQuery = "FROM `request_personnel_transfer_info` AS `rpti` JOIN `employee_details` AS `ed` ON (`ed`.`id_number` = `rpti`.`employee_id_details`) JOIN `project_info` AS `pi` ON (`pi`.`id` = `rpti`.`transfer_to`)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `rpti`.`request_status` = 6 AND `ed`.`project_id` IN ($projects)";
}// end if

echo json_encode(
	SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery, $extraWhere )
	//SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery )
);