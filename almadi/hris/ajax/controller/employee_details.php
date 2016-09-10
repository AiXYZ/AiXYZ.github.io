<?php
include_once("../../../inc/config.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($empid){
	
	//This is for the Personal information
	$personalInfo = "SELECT * FROM employee_details WHERE id_number = '$empid' ";
	$personalInfo_data = mysql_query($personalInfo);
	
	@$employee_id = mysql_real_escape_string(mysql_result($personalInfo_data,0,"id_number"));
	@$employee_name = mysql_real_escape_string(mysql_result($personalInfo_data,0,"fullname"));
	@$employee_g_birth_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"g_birth_date"));
	
	@$employee_h_birth_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"h_birth_date"));
	@$employee_age = mysql_real_escape_string(mysql_result($personalInfo_data,0,"age"));
	@$employee_gender = mysql_real_escape_string(mysql_result($personalInfo_data,0,"gender"));
	
	// Gender -> $employee_gender
	$gender = "SELECT * FROM gender WHERE id = '".$employee_gender."' ";
	$gender_data = mysql_query($gender);
	@$gender_name = mysql_result($gender_data,0,"gender_name");
	
	@$employee_nationality_id = mysql_real_escape_string(mysql_result($personalInfo_data,0,"nationality_id"));
	@$employee_nationality = mysql_real_escape_string(mysql_result($personalInfo_data,0,"nationality"));
	@$employee_religion = mysql_real_escape_string(mysql_result($personalInfo_data,0,"religion"));
	
	// Religion -> $employee_religion
	$religion = "SELECT * FROM religion WHERE id = '".$employee_religion."' ";
	$religion_data = mysql_query($religion);
	@$religion_name = mysql_result($religion_data,0,"religion_name");
	
	@$employee_marital_status = mysql_real_escape_string(mysql_result($personalInfo_data,0,"marital_status"));
	
	// Marital Status -> $employee_marital_status
	$mstatus = "SELECT * FROM marital_status WHERE id = '".$employee_marital_status."' ";
	$mstatus_data = mysql_query($mstatus);
	@$mstatus_name = mysql_result($mstatus_data,0,"marriage_status");
	
	@$employee_phone_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"phone_number"));
	@$employee_drivers_license_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"drivers_license_number"));
	@$employee_type_of_license = mysql_real_escape_string(mysql_result($personalInfo_data,0,"type_of_license"));
	
	@$employee_license_g_issued_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"license_g_iss_date"));
	@$employee_license_g_exp_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"license_g_exp_date"));
	@$employee_visa_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"visa_number"));
	
	@$employee_license_h_iss_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"license_h_iss_date"));
	@$employee_license_h_exp_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"license_h_exp_date"));
	
	@$employee_agency_id = mysql_real_escape_string(mysql_result($personalInfo_data,0,"agency_id"));
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Contract information
	@$employee_sponsor = mysql_real_escape_string(mysql_result($personalInfo_data,0,"sponsor"));
	@$employee_project_id = mysql_real_escape_string(mysql_result($personalInfo_data,0,"project_id"));
	@$employee_project_name = mysql_real_escape_string(mysql_result($personalInfo_data,0,"project_name"));
	@$employee_pid = mysql_real_escape_string(mysql_result($personalInfo_data,0,"pid"));
	
	@$employee_type_of_visa_id = mysql_real_escape_string(mysql_result($personalInfo_data,0,"type_of_visa_id"));
	@$employee_type_of_visa = mysql_real_escape_string(mysql_result($personalInfo_data,0,"type_of_visa"));
	@$employee_status = mysql_real_escape_string(mysql_result($personalInfo_data,0,"employment_status"));
	@$employee_position_id = mysql_real_escape_string(mysql_result($personalInfo_data,0,"position_id"));
	@$employee_position_name = mysql_real_escape_string(mysql_result($personalInfo_data,0,"position"));
	
	// This is for the Salary
	$currentSalary = "SELECT * FROM salary_history WHERE emp_id_number = '".$empid."' ORDER BY id DESC LIMIT 1";
	$currentSalary_data = mysql_query($currentSalary);
	@$employee_basic_salary = mysql_real_escape_string(mysql_result($currentSalary_data,0,"basic_salary"));
	@$employee_other_allowance = mysql_real_escape_string(mysql_result($currentSalary_data,0,"other_allowance"));
	@$employee_total_salary = mysql_real_escape_string(mysql_result($currentSalary_data,0,"total_salary"));

	@$employee_current_contract_g_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"contract_g_date_employed"));
	@$employee_contract_g_date_expiration = mysql_real_escape_string(mysql_result($personalInfo_data,0,"contract_g_date_expiration"));
	@$employee_contract_g_date_entry = mysql_real_escape_string(mysql_result($personalInfo_data,0,"contract_g_date_entry"));
	
	@$employee_current_contract_h_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"contract_h_date_employed"));
	@$employee_contract_h_date_expiration = mysql_real_escape_string(mysql_result($personalInfo_data,0,"contract_h_date_expiration"));
	@$employee_contract_h_date_entry = mysql_real_escape_string(mysql_result($personalInfo_data,0,"contract_h_date_entry"));
	
	@$employee_contract_years = mysql_real_escape_string(mysql_result($personalInfo_data,0,"contract_years"));
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Passport information
	@$employee_passport_exp_date_g = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_g_exp_date"));
	@$employee_passport_iss_date_g = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_g_iss_date"));
	@$employee_passport_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_number"));
	
	@$employee_passport_exp_date_h = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_h_exp_date"));
	@$employee_passport_iss_date_h = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_h_iss_date"));
	@$employee_passport_entry_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_entry_number"));
	
	@$employee_passport_in_file = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_in_file"));
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Iqama information
	@$employee_iqama_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"iqama_number"));
	@$employee_iqama_g_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"iqama_g_date"));
	@$employee_iqama_h_date = mysql_real_escape_string(mysql_result($personalInfo_data,0,"iqama_h_date"));
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Ministry of labor and GOSI information
	@$employee_mol_emp_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"mol_emp_number"));
	@$employee_mol_company_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"mol_company_number"));
	@$employee_gosi_emp_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"gosi_emp_number"));
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Bank information
	@$employee_atm_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"atm_number"));
	@$employee_atm_status = mysql_real_escape_string(mysql_result($personalInfo_data,0,"atm_status"));
	@$employee_atm_issuance = mysql_real_escape_string(mysql_result($personalInfo_data,0,"atm_issuance"));
	
	@$employee_atm_date_issued = mysql_real_escape_string(mysql_result($personalInfo_data,0,"atm_date_issued"));
	@$employee_atm_date_expiration = mysql_real_escape_string(mysql_result($personalInfo_data,0,"atm_date_expiration"));
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Medical/Health Insurance Details
	@$employee_medical_number = mysql_real_escape_string(mysql_result($personalInfo_data,0,"medical_issuance_number"));
	@$employee_medical_class = mysql_real_escape_string(mysql_result($personalInfo_data,0,"medical_class"));
	@$employee_medical_date_iss = mysql_real_escape_string(mysql_result($personalInfo_data,0,"medical_iss_date"));
	
	@$employee_medical_date_exp = mysql_real_escape_string(mysql_result($personalInfo_data,0,"medical_exp_date"));
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Left panel informations
	@$employee_photo_path = mysql_real_escape_string(mysql_result($personalInfo_data,0,"id_picture"));
	
	@$employee_passport_photo = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_photo"));
	@$employee_iqama_photo = mysql_real_escape_string(mysql_result($personalInfo_data,0,"iqama_image"));
	@$employee_dl_photo = mysql_real_escape_string(mysql_result($personalInfo_data,0,"license_image"));
	
	@$employee_passport_visa_photo = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_visa_photo"));
	@$employee_passport_stamp_visa_photo = mysql_real_escape_string(mysql_result($personalInfo_data,0,"passport_stamp_visa_photo"));
	@$employee_company_id_photo = mysql_real_escape_string(mysql_result($personalInfo_data,0,"company_id_photo"));
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Salary History List
	$salaryCurrent = "SELECT id, emp_id_number, basic_salary, other_allowance, total_salary, effectivity_date FROM salary_history WHERE emp_id_number = '$empid' ORDER BY id DESC LIMIT 1 ";
	$salaryCurrent_data = mysql_query($salaryCurrent);
	$salaryCurrent_rows = mysql_num_rows($salaryCurrent_data);
	@$salaryCurrent_basic_salary = mysql_result($salaryCurrent_data,0,"basic_salary");
	@$salaryCurrent_other_allowance = mysql_result($salaryCurrent_data,0,"other_allowance");
	@$salaryCurrent_total_salary = mysql_result($salaryCurrent_data,0,"total_salary");
	@$salaryCurrent_effectivity_date = mysql_result($salaryCurrent_data,0,"effectivity_date");
	
	if($salaryCurrent_rows > 0){
		$currentTotalSalary = $salaryCurrent_total_salary;
		$currentTotalSalaryStatus = 'Disabled';
	}else {
		$currentTotalSalary = '';
		$currentTotalSalaryStatus = 'Enabled';
	}
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// To check if the employee have renew iqama request
	$iqamaRenew = "SELECT tcode, iqama_status, emp_id_number FROM renew_iqama_info WHERE emp_id_number = '".$empid."' AND iqama_status = 1 ";
	$iqamaRenew_data = mysql_query($iqamaRenew);
	$iqamaRenew_rows = mysql_num_rows($iqamaRenew_data);
	
	//next and previous employee id start
	$nextEmpId = "SELECT id_number FROM employee_details WHERE id_number > $empid ORDER BY id_number ASC LIMIT 1";
	$nextEmpId_data = mysql_query($nextEmpId);
	@$nextEmpIdFroJ = mysql_real_escape_string(mysql_result($nextEmpId_data,0,"id_number"));
	
	$previousEmpId = "SELECT id_number FROM employee_details WHERE id_number < $empid ORDER BY id_number DESC LIMIT 1";
	$previousEmpId_data = mysql_query($previousEmpId);
	@$previousEmpIdFroJ = mysql_real_escape_string(mysql_result($previousEmpId_data,0,"id_number"));	
	//next and previous employee id end
	
	return array(
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// Personal information
			'employee_id' => $employee_id,
			'employee_name' => $employee_name,
			'employee_gbirthdate' => $employee_g_birth_date,
			
			'employee_hbirthdate' => $employee_h_birth_date,
			'employee_age' => $employee_age,
			'employee_gender_id' => $employee_gender,
			'employee_gender_name' => $gender_name,
			
			'employee_nationality_id' => $employee_nationality_id,
			'employee_nationality_name' => $employee_nationality,
			'employee_religion_id' => $employee_religion,
			'employee_religion_name' => $religion_name,
			'employee_marital_status_id' => $employee_marital_status,
			'employee_marital_status_name' => $mstatus_name,
			
			'employee_phone_number' => $employee_phone_number,
			'employee_drivers_license_number' => $employee_drivers_license_number,
			'employee_type_of_license' => $employee_type_of_license,
			
			'employee_license_g_issued_date' => $employee_license_g_issued_date,
			'employee_license_g_exp_date' => $employee_license_g_exp_date,
			'employee_visa_number' => $employee_visa_number,
			
			'employee_license_h_issued_date' => $employee_license_h_iss_date,
			'employee_license_h_exp_date' => $employee_license_h_exp_date,
			'employee_agency_id' => $employee_agency_id,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// Contract information
			'employee_sponsor' => $employee_sponsor,
			'employee_project_id' => $employee_project_id,
			'employee_project_name' => $employee_project_name,
			'employee_pid' => $employee_pid,
			
			'employee_type_of_visa_id' => $employee_type_of_visa_id,
			'employee_type_of_visa' => $employee_type_of_visa,
			'employee_status' => $employee_status,
			'employee_position_id' => $employee_position_id,
			'employee_position_name' => $employee_position_name,
			
			'employee_basic_salary' => $employee_basic_salary,
			'employee_other_allowance' => $employee_other_allowance,
			'employee_total_salary' => $employee_total_salary,
			
			'employee_current_contract_g_date' => $employee_current_contract_g_date,
			'employee_contract_g_date_expiration' => $employee_contract_g_date_expiration,
			'employee_contract_g_date_entry' => $employee_contract_g_date_entry,
			
			'employee_current_contract_h_date' => $employee_current_contract_h_date,
			'employee_contract_h_date_expiration' => $employee_contract_h_date_expiration,
			'employee_contract_h_date_entry' => $employee_contract_h_date_entry,
			
			'employee_contract_years' => $employee_contract_years,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			
			// Passport information
			'employee_passport_exp_date_g' => $employee_passport_exp_date_g,
			'employee_passport_iss_date_g' => $employee_passport_iss_date_g,
			'employee_passport_number' => $employee_passport_number,
			
			'employee_passport_exp_date_h' => $employee_passport_exp_date_h,
			'employee_passport_iss_date_h' => $employee_passport_iss_date_h,
			'employee_passport_entry_number' => $employee_passport_entry_number,
			
			'employee_passport_in_file' => $employee_passport_in_file,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// Iqama information
			'employee_iqama_number' => $employee_iqama_number,
			'employee_iqama_g_date' => $employee_iqama_g_date,
			'employee_iqama_h_date' => $employee_iqama_h_date,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// Ministry of labor and GOSI information
			'employee_mol_emp_number' => $employee_mol_emp_number,
			'employee_mol_company_number' => $employee_mol_company_number,
			'employee_gosi_emp_number' => $employee_gosi_emp_number,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// Bank details
			'employee_atm_number' => $employee_atm_number,
			'employee_atm_status' => $employee_atm_status,
			'employee_atm_issuance' => $employee_atm_issuance,
			
			'employee_atm_date_issued' => $employee_atm_date_issued,
			'employee_atm_date_expiration' => $employee_atm_date_expiration,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// Medical details
			'employee_medical_number' => $employee_medical_number,
			'employee_medical_class' => $employee_medical_class,
			'employee_medical_date_iss' => $employee_medical_date_iss,
			
			'employee_medical_date_exp' => $employee_medical_date_exp,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// Left panel information
			'employee_photo_path' => $employee_photo_path,
			
			'employee_passport_photo' => $employee_passport_photo,
			'employee_iqama_photo' => $employee_iqama_photo,
			'employee_license_photo' => $employee_dl_photo,
				
			'employee_passport_visa_photo' => $employee_passport_visa_photo,
			'employee_passport_stamp_visa_photo' => $employee_passport_stamp_visa_photo,
			'employee_company_id_photo' => $employee_company_id_photo,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// Salary History
			'salary_current_total_salary' => $currentTotalSalary,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
			// To check if the employee have renew iqama request
			'renew_iqama' => $iqamaRenew_rows,
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			
// 			'salary_current_basic_salary' => $salaryCurrent_basic_salary,
// 			'salary_current_other_allowance' => $salaryCurrent_other_allowance,
			
// 			'salary_current_total_salary' => $salaryCurrent_total_salary,
// 			'currentTotalSalaryStatus' => $currentTotalSalaryStatus,
// 			'salary_current_effectivity_date' => $salaryCurrent_effectivity_date,
			
			
			/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
			//next and previous employee id start
			'nextEmpIdFroJ' => $nextEmpIdFroJ,
			'previousEmpIdFroJ' => $previousEmpIdFroJ
			//next and previous employee id end				
	);

}//end	

$result = search($_POST['employee_id']);
echo json_encode($result);

?>