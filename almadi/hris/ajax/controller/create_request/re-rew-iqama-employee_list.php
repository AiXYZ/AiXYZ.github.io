<?php
ob_start();
session_start();

include_once '../../../../inc/config.php';
include_once '../../../../inc/functions.php';

// This is for the ALLOWED Employee to be display
@$projects = getProjects($_SESSION["login_user"]);
// This is for the ALLOWED Employee to be display

//list of employee id for renew iqama start
function getIqamaList(){
	$list_iqama = "SELECT id_number, iqama_g_date FROM employee_details WHERE iqama_g_date IS NOT NULL AND length(iqama_g_date) > 0 AND employment_status = 1";
	$list_iqama_data = mysql_query($list_iqama);
	$list_iqama_rows = mysql_num_rows($list_iqama_data);
	$list_iqama_ctr = 0;
	
	while($list_iqama_ctr < $list_iqama_rows){
			
		$emp_id_number = mysql_result($list_iqama_data,$list_iqama_ctr,"id_number");
		$gregorian_date = mysql_result($list_iqama_data,$list_iqama_ctr,"iqama_g_date");
			
		@$currentDate = date("Y/m/d");
		$day_result = floor((strtotime($currentDate) - strtotime($gregorian_date))/86400);
		$D_Result = str_replace("-","",$day_result);
			
		//Check if the employee have request already
		$iqama_renew_request = mysql_query("SELECT COUNT(*) AS total_iqama_renew FROM renew_iqama_info WHERE emp_id_number = '$emp_id_number' AND iqama_status = '1'") or exit(mysql_error());
		$row = mysql_fetch_object($iqama_renew_request);
		$Number_of_iqama_renew = $row->total_iqama_renew;
		if($Number_of_iqama_renew > 0){
			$alreadyRequested = "yes";
		}else {
			$alreadyRequested = "no";
		}
		
		if($day_result <= 0 && $day_result > -70 && $alreadyRequested == 'no'){
			//echo $emp_id_number ."-". $D_Result ."<br>";
			@$empIdList .= $emp_id_number.",";
		}
		
		$list_iqama_ctr++;
	}
	
	return $empId_array[0]."".$empIdList;
	
}

@$iqamaEmpId = getIqamaList();
@$iqamaEmpIdFlist = rtrim($iqamaEmpId, ",");
//list of employee id for renew iqama end

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

//$table = 'renew_iqama_info';
$table = 'employee_details';

// Table's primary key
//$primaryKey = 'tcode';
$primaryKey = 'id_number';

// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
		array( 'db' => '`ud`.`id_number`',  'dt' => 0, 'field' => 'id_number' ),
		array( 'db' => '`ud`.`fullname`',  'dt' => 1, 'field' => 'fullname' ),
		array( 'db' => '`ud`.`iqama_g_date`', 'dt' => 2, 'field' => 'iqama_g_date' )
		//array( 'db' => '`ud`.`employment_status`',  'dt' => 3, 'field' => 'employment_status')
		//array( 'db' => '`ud`.`iqama_g_date`', 'dt' => 4, 'field' => 'iqama_g_date' )
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

// require( 'ssp.class.php' );
require( '../../../en/ssp.customized.class.php' );


$joinQuery = "FROM `employee_details` AS `ud`";
$extraWhere = "`ud`.`employment_status` = 1 AND `ud`.`project_id` IN ($projects) AND `ud`.`id_number` IN ($iqamaEmpIdFlist)";

/*
$joinQuery = "FROM `renew_iqama_info` AS `u` JOIN `employee_details` AS `ud` ON (`ud`.`id_number` = `u`.`emp_id_number`)";
$extraWhere = "`ud`.`employment_status` = 1 AND `u`.`iqama_status` = 2 AND `ud`.`project_id` IN ($projects) AND `ud`.`id_number` IN ($iqamaEmpIdFlist) AND `ud`.`id_number` NOT IN ($iqamaEmpIdFlistS1)";
*/

echo json_encode(
	SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns, $joinQuery, $extraWhere )
);

?>