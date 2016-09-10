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
$table = 'floating_personnel_info';

// Table's primary key
//$primaryKey = 'id';
$primaryKey = 'trans_code';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes

$columns = array(
		array( 'db' => '`ud`.`id_number`',  'dt' => 0, 'field' => 'id_number' ),
		array( 'db' => '`ud`.`fullname`',  'dt' => 1, 'field' => 'fullname' ),
		array( 'db' => '`ud`.`nationality`', 'dt' => 2, 'field' => 'nationality' ),
		array( 'db' => '`ud`.`iqama_number`',  'dt' => 3, 'field' => 'iqama_number'),
		array( 'db' => '`ud`.`project_name`', 'dt' => 4, 'field' => 'project_name' ),
		array( 'db' => '`ud`.`position`', 'dt' => 5, 'field' => 'position' ),
		
		// This values are not shown on the tables
		array( 'db' => '`ud`.`contract_g_date_employed`', 'dt' => 6, 'field' => 'contract_g_date_employed' ),
		array( 'db' => '`u`.`trans_code`', 'dt' => 7, 'field' => 'trans_code' ),
		array( 'db' => '`ud`.`required_fields_one`', 'dt' => 8, 'field' => 'required_fields_one' ),
		array( 'db' => '`ud`.`required_fields_two`', 'dt' => 9, 'field' => 'required_fields_two' )
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

// require( 'ssp.class.php' );
//require('ssp.customized.class.php' );
require( '../../../en/ssp.customized.class.php' );

// HR received
if($_GET['request_type'] == 'fr_hr_received'){
	$joinQuery = "FROM `floating_personnel_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`emp_id_number`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 1 AND `ud`.`project_id` IN ($projects)";
}// end if

// hr closing
if($_GET['request_type'] == 'fr_hr_closing'){
	$joinQuery = "FROM `floating_personnel_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`emp_id_number`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 2 AND `ud`.`project_id` IN ($projects)";
}// end if

// closed
if($_GET['request_type'] == 'fr_closed'){
	$joinQuery = "FROM `floating_personnel_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`emp_id_number`)";
	$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`request_status` = 3 AND `ud`.`project_id` IN ($projects)";
}// end if

echo json_encode(
	SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery, $extraWhere )
	//SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery )
);