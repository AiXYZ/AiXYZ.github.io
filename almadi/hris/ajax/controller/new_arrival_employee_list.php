<?php
ob_start();
session_start();

include_once '../../../inc/config.php';
include_once '../../../inc/functions.php';

//echo $_SESSION['type_department'];

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

$table = 'employee_details';

// Table's primary key
$primaryKey = 'id';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
		array( 'db' => '`ed`.`id_number`',  'dt' => 0, 'field' => 'id_number' ),
		array( 'db' => '`ed`.`fullname`',  'dt' => 1, 'field' => 'fullname' ),
		array( 'db' => '`projinfo`.`p_name`',  'dt' => 2, 'field' => 'p_name' ),
		array( 'db' => '`posinfo`.`position_english`',  'dt' => 3, 'field' => 'position_english' ),
		
		
		// These fields are not shown
		// for new arrival tool tip
		array( 'db' => '`ed`.`na_money_transfer`',  'dt' => 4, 'field' => 'na_money_transfer' ),
		array( 'db' => '`ed`.`contract_g_date_employed`',  'dt' => 5, 'field' => 'contract_g_date_employed' ),
		array( 'db' => '`ed`.`visa_number`',  'dt' => 6, 'field' => 'visa_number' ),
		array( 'db' => '`ed`.`passport_number`',  'dt' => 7, 'field' => 'passport_number' ),
		array( 'db' => '`ed`.`id_picture`',  'dt' => 8, 'field' => 'id_picture' ),
		array( 'db' => '`ed`.`na_medical_check_up`',  'dt' => 9, 'field' => 'na_medical_check_up' ),
		array( 'db' => '`ed`.`medical_issuance_number`',  'dt' => 10, 'field' => 'medical_issuance_number' ),
		array( 'db' => '`ed`.`na_reporting_date`',  'dt' => 11, 'field' => 'na_reporting_date' ),
		array( 'db' => '`ed`.`na_work_permit`',  'dt' => 12, 'field' => 'na_work_permit' ),
		array( 'db' => '`ed`.`iqama_number`',  'dt' => 13, 'field' => 'iqama_number' ),
		array( 'db' => '`ed`.`atm_number`',  'dt' => 14, 'field' => 'atm_number' ),
		array( 'db' => '`ed`.`gosi_emp_number`',  'dt' => 15, 'field' => 'gosi_emp_number' ),
		array( 'db' => '`ed`.`na_certificate`',  'dt' => 16, 'field' => 'na_certificate' ),
		array( 'db' => '`ed`.`na_dl_country`',  'dt' => 17, 'field' => 'na_dl_country' ),
		array( 'db' => '`ed`.`drivers_license_number`',  'dt' => 18, 'field' => 'drivers_license_number' ),
		array( 'db' => '`ed`.`na_translated_dl`',  'dt' => 19, 'field' => 'na_translated_dl' ),
		);

// SQL server connection information
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

//require( '../../en/ssp.class.php' );
require( '../../en/ssp.customized.class.php' );

// 1 - Labor
if($_GET['employee_type'] == 'labor'){
	$joinQuery = "FROM `employee_details` AS `ed` JOIN `project_info` AS `projinfo` ON (`ed`.`project_id` = `projinfo`.`id`) JOIN `position_info` AS `posinfo` ON (`ed`.`position_id` = `posinfo`.`id`) ";
	$extraWhere = "isNULL(`ed`.`required_status_arrival`) AND `ed`.`position_id` IN (SELECT id FROM position_info WHERE position_type = 1 ORDER BY id ASC) ";
}

// 2 - Drivers
if($_GET['employee_type'] == 'drivers'){
	$joinQuery = "FROM `employee_details` AS `ed` JOIN `project_info` AS `projinfo` ON (`ed`.`project_id` = `projinfo`.`id`) JOIN `position_info` AS `posinfo` ON (`ed`.`position_id` = `posinfo`.`id`) ";
	$extraWhere = "isNULL(`ed`.`required_status_arrival`) AND `ed`.`position_id` IN (SELECT id FROM position_info WHERE position_type = 2 ORDER BY id ASC) ";
}

// 3 - Engineers
if($_GET['employee_type'] == 'engineers'){
	$joinQuery = "FROM `employee_details` AS `ed` JOIN `project_info` AS `projinfo` ON (`ed`.`project_id` = `projinfo`.`id`) JOIN `position_info` AS `posinfo` ON (`ed`.`position_id` = `posinfo`.`id`) ";
	$extraWhere = "isNULL(`ed`.`required_status_arrival`) AND `ed`.`position_id` IN (SELECT id FROM position_info WHERE position_type = 3 ORDER BY id ASC) ";
}

// 4 - Others
if($_GET['employee_type'] == 'others'){
	$joinQuery = "FROM `employee_details` AS `ed` JOIN `project_info` AS `projinfo` ON (`ed`.`project_id` = `projinfo`.`id`) JOIN `position_info` AS `posinfo` ON (`ed`.`position_id` = `posinfo`.`id`) ";
	$extraWhere = "isNULL(`ed`.`required_status_arrival`) AND `ed`.`position_id` IN (SELECT id FROM position_info WHERE position_type = 4 ORDER BY id ASC) ";
}

//$joinQuery = "FROM `reporting_date_info` AS `rdi` JOIN `employee_status` AS `es` ON (`ed`.`employment_status` = `es`.`id`) JOIN `nationality_info` AS `ni` ON (`ed`.`nationality_id` = `ni`.`id`) JOIN `position_info` AS `posinfo` ON (`ed`.`position_id` = `posinfo`.`id`) JOIN `project_info` AS `projinfo` ON (`ed`.`project_id` = `projinfo`.`id`) ";
//$extraWhere = "`ed`.`project_id` IN ($projects)";

echo json_encode(
		SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery, $extraWhere )
		//SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery )
		//SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
		);
?>