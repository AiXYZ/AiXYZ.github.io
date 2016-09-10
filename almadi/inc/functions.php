<?php
	/*****************************************************************************
	* User-Defined Functions by Genesis B. Lista                                 *
	******************************************************************************/
	function db_connect() 
	{
		if(!$conn = mysql_connect(DB_HOST, DB_USER, DB_PASS)) 
		{
    		if(DB_DEBUG)
			{
		      print "Cannot connect to DB_HOST as DB_USER<br>";
		      print mysql_error();
		    } 
		    else 
			{
		       print "<h2>Database error encountered</h2>";
		    }
		    if(DB_DIE_ON_FAIL)
			{
		      print "<p>This script cannot continue, terminating...";
		      exit();
	    	}
		}

		if(!mysql_select_db(DB_NAME))
		{
		    if(DB_DEBUG)
			{
				print "Cannot select database DB_NAME<br>";
				print mysql_error();
			}
		    else
			{
				print "<h2>Database error encountered</h2>";
			}
			if(DB_DIE_ON_FAIL)
			{
				print "<p>This script cannot continue, terminating...";
				exit();
		    }
		  }
		return;
	}

	function db_query($query)
	{
		if(! $qid = mysql_query($query))
		{
			if(DB_DEBUG)
			{
				print "Cannot do query ," .  htmlspecialchars($query) . "<br>";
				print mysql_error();
			}
			if(DB_DIE_ON_FAIL)
			{
				print "<p>This script cannot continue, terminating...";
				exit();
			}
		}
		return $qid;
	}

	function db_fetch_array($qid)
	{
		return @mysql_fetch_array($qid);
	}
	
	function db_num_rows($result)
	{
		return @mysql_num_rows($result);
	}

function getIp(){

        $ip = $_SERVER['REMOTE_ADDR'];     
        if($ip){
            if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
                $ip = $_SERVER['HTTP_CLIENT_IP'];
            } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
            }
            return $ip;
        }
        // There might not be any data
        return false;
    }

// Function to compute the elapsed day between the Created date and the Current date

function elapsed_days($date_created){

	$split_date_space = explode(" ",$date_created);

	$year_time_split = $split_date_space[0]; // Separate the Date and Time -> 29/03/2016 12:01:00

	$split_date_slash = explode("/",$year_time_split); // Separate the DD/MM/YYYY -> 29/03/2016

	$day = $split_date_slash[0];
	@$month = $split_date_slash[1];
	@$year = $split_date_slash[2];

	// ============================= \\

	// This is for the Running Elapsed days of the request
	$format_date = $year."-".$month."-".$day;

	$now = time(); // or your date as well
	$created_date = strtotime($format_date);
	$datediff = $now - $created_date;
	$days_between = floor($datediff/(60*60*24));
	// This is for the Running Elapsed days of the request

	return array( 'days_between' => $days_between);
}// end function

// Function to compute the elapsed day between the Created date and the Current date

// ================================================== \\

// This is for the Length of service from the Contract Date to the Current Date Request is created

function length_of_service($date_created){

	$split_date_slash = explode("/",$date_created); // Separate the DD/MM/YYYY -> 29/03/2016

	@$day = $split_date_slash[0];
	@$month = $split_date_slash[1];
	@$year = $split_date_slash[2];

	// ============================= \\

	@$currentDate = date("Y/m/d");
	@$newFormat = $year."/".$month."/".$day;

	@$diff = abs(strtotime($currentDate) - strtotime($newFormat));
	@$years = floor($diff / (365*60*60*24));
	@$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
	@$days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));
	$length_of_service = $years." year(s) ".$months." month(s) ".abs($days)." day(s) ";

	return array( 'length_of_service' => $length_of_service);

}// end function

// This is for the Length of service from the Contract Date to the Current Date Request is created

// ================================================== \\

// This is for the Contract Summary

function contract_summary($date, $year_contract){

	$split_date_slash = explode("/",$date); // Separate the DD/MM/YYYY -> 29/03/2016

	@$day = $split_date_slash[0];
	@$month = $split_date_slash[1];
	@$year = $split_date_slash[2];

	// 		// ============================= \\

	@$currentDate = date("Y/m/d");
	@$newFormat = $year."/".$month."/".$day;

	@$diff = abs(strtotime($currentDate) - strtotime($newFormat));

	@$years = floor($diff / (365*60*60*24));
	@$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));

	$monthsServed =  (($years*12)+$months) - ($year_contract*12);

	if($monthsServed < 0){
		$Text = " still have to stay for ".abs($monthsServed)." months.";
	}else {
		$Text = " already finish ".$monthsServed." month(s).";
	}

	$contract_summary = "Contract is ".($year_contract*12)." months, already served ".(($year_contract*12)+$months)." month(s), ".$Text;

	return array('contract_summary' => $contract_summary);

}// end function

// This is for the Contract Summary

// ================================================== \\



// ================================================== \\

/* Get the root file name */
function separateFilePathOnMultipleFolders($path){
	@$File_Path = explode("/",$path);
	@$FileName = end($File_Path);

	return $FileName;
}//End separateFilePathOnPersonalVIew

// ================================================== \\

// This will get the name of the current logged in employee using the Employee ID
function employeeID($eid){

	db_connect();
	mysql_query("SET NAMES utf8");
	mysql_query("set character set utf8");
	$employee = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$eid."'";
	$employee_data = mysql_query($employee);
	@$employeeName = mysql_result($employee_data,0,"fullname");

	return $employeeName;
}

// ================================================== \\

/* Default timezone */
date_default_timezone_set('Asia/Riyadh');

/* Default time for all */
$Default_Date_Settings = date("d/m/Y H:i:s");

// ================================================== \\

function getProjects($employeeID){

	db_connect();

	$projects = "SELECT * FROM system_accounts WHERE employee_id = '".$employeeID."'";
	$projects_data = mysql_query($projects);
	$projects_list = mysql_result($projects_data,0,"project_assignments");

	$projects_array = explode("|",$projects_list);

	$projects_array1 = str_replace("|",",",$projects_list,$project_counter);

	for($x=1;$x<$project_counter;$x++){
		//$projectList =	$projects_array[$x];
		$projects_array[$x];

		@$pList .= ",".$projects_array[$x];
	}

	return $projects_array[0]."".$pList;

}

// ================================================== \\

function getDeptAccess($employeeID){
	db_connect();

	$hraccess = "SELECT * FROM system_accounts WHERE employee_id = '".$employeeID."'";
	$hraccess_data = mysql_query($hraccess);
	$hraccess_department = mysql_result($hraccess_data,0,"department");
	$hraccess_apps = mysql_result($hraccess_data,0,"apps");

	return array("department"=>$hraccess_department, "applications"=>$hraccess_apps);
}

// ================================================== \\

// Get the Request Privileges
/*
 * 1 - Add
 * 2 - Update
 * 3 - Delete
 */
function getRequestAccess($employeeID){
	db_connect();
	
	$request_access = "SELECT * FROM system_accounts WHERE employee_id = '".$employeeID."'";
	$request_access_data = mysql_query($request_access);
	$request_access_list = mysql_result($request_access_data,0,"request_privileges");
	
	$request_access_array = explode("|",$request_access_list);
	
	$request_access_array1 = str_replace("|",",",$request_access_list,$request_access_counter);
	
	for($x=1;$x<$request_access_counter;$x++){
		//$projectList =	$projects_array[$x];
		$request_access_array[$x];
	
		@$pList .= ",".$request_access_array[$x];
	}
	
	return @$request_access_array[0]."".@$pList;
}

// ================================================== \\

//transaction code
$transactionCode = date("YmdHis") .'' . rand(1000, 9999);

?>
