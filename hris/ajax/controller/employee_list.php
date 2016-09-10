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
$primaryKey = 'id_number';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
// 		array( 'db' => 'id_number', 'dt' => 0 ),
// 		array( 'db' => 'fullname', 'dt' => 1 ),
// 		array( 'db' => 'iqama_number', 'dt' => 2 ),
// 		array( 'db' => 'project_name', 'dt' => 3 ),
// 		array( 'db' => 'nationality', 'dt' => 4 ),
// 		array( 'db' => 'employment_status', 'dt' => 5 ),
// 		array( 'db' => 'position', 'dt' => 6 )

		array( 'db' => '`ed`.`id_number`',  'dt' => 0, 'field' => 'id_number' ),
		array( 'db' => '`ed`.`fullname`',  'dt' => 1, 'field' => 'fullname' ),
		array( 'db' => '`ed`.`iqama_number`',  'dt' => 2, 'field' => 'iqama_number' ),
		//array( 'db' => '`ed`.`project_name`',  'dt' => 3, 'field' => 'project_name' ),
		array( 'db' => '`projinfo`.`p_name`',  'dt' => 3, 'field' => 'p_name' ),
		//array( 'db' => '`ed`.`nationality`', 'dt' => 4, 'field' => 'nationality' ),
		//array( 'db' => '`ed`.`nationality_id`', 'dt' => 4, 'field' => 'nationality_id' ),
		array( 'db' => '`ni`.`nationality_english`', 'dt' => 4, 'field' => 'nationality_english' ),
		//array( 'db' => '`ed`.`employment_status`',  'dt' => 5, 'field' => 'employment_status'),
		array( 'db' => '`es`.`status_english`',  'dt' => 5, 'field' => 'status_english'),
		//array( 'db' => '`ed`.`position`', 'dt' => 6, 'field' => 'position' )
		array( 'db' => '`posinfo`.`position_english`', 'dt' => 6, 'field' => 'position_english' )
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

// List for non-hr
if($_SESSION['type_department'] == 3){
	$joinQuery = "FROM `employee_details` AS `ed` JOIN `employee_status` AS `es` ON (`ed`.`employment_status` = `es`.`id`)";
	//$extraWhere = "`ed`.`employment_status` = 'Active' AND `ed`.`project_id` IN ($projects)";
	$extraWhere = "`ed`.`employment_status` = 1 AND `ed`.`project_id` IN ($projects)";
}else {
	$joinQuery = "FROM `employee_details` AS `ed` JOIN `employee_status` AS `es` ON (`ed`.`employment_status` = `es`.`id`) JOIN `nationality_info` AS `ni` ON (`ed`.`nationality_id` = `ni`.`id`) JOIN `position_info` AS `posinfo` ON (`ed`.`position_id` = `posinfo`.`id`) JOIN `project_info` AS `projinfo` ON (`ed`.`project_id` = `projinfo`.`id`) ";
	$extraWhere = "`ed`.`project_id` IN ($projects)";
}



echo json_encode(
		SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery, $extraWhere )
		//SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
		);
?>