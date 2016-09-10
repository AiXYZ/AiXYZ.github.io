<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// Personal information
@$emp_id = $_POST['emp_id'];
@$emp_name = $_POST['emp_name'];
@$emp_bdateg = $_POST['emp_bdateg'];

@$emp_bdateh = $_POST['emp_bdateh'];
@$emp_age = $_POST['emp_age'];
@$emp_gender = $_POST['emp_gender'];

@$emp_nationality = $_POST['emp_nationality'];
@$emp_religion = $_POST['emp_religion'];
@$emp_marital_status = $_POST['emp_marital_status'];

@$emp_phone_number = $_POST['emp_phone_number'];
@$emp_drivers_license = $_POST['emp_drivers_license'];
@$emp_type_of_license = $_POST['emp_type_of_license'];

@$emp_lic_iss_date_g = $_POST['emp_lic_iss_date_g'];
@$emp_lic_exp_date_g = $_POST['emp_lic_exp_date_g'];
@$emp_visa_number = $_POST['emp_visa_number'];

@$emp_lic_iss_date_h = $_POST['emp_lic_iss_date_h'];
@$emp_lic_exp_date_h = $_POST['emp_lic_exp_date_h'];
@$emp_name_agency = $_POST['emp_name_agency'];

// Contract information
@$emp_sponsor = $_POST['emp_sponsor'];
@$emp_project_id = $_POST['emp_project_id'];
@$emp_pid_name = $_POST['emp_pid_name'];

@$emp_type_of_visa_id = $_POST['emp_type_of_visa_id'];
@$emp_status = $_POST['emp_status'];
@$emp_position_id = $_POST['emp_position_id'];

@$emp_basic_salary = $_POST['emp_basic_salary'];
@$emp_other_allowance = $_POST['emp_other_allowance'];
@$emp_total_salary = $_POST['emp_total_salary'];

@$emp_current_contract_date_g = $_POST['emp_current_contract_date_g'];
@$emp_current_expiry_date_g = $_POST['emp_current_expiry_date_g'];
@$emp_current_entry_date_g = $_POST['emp_current_entry_date_g'];

@$emp_current_contract_date_h = $_POST['emp_current_contract_date_h'];
@$emp_current_expiry_date_h = $_POST['emp_current_expiry_date_h'];
@$emp_current_entry_date_h = $_POST['emp_current_entry_date_h'];

@$emp_contract_years = $_POST['emp_contract_years'];

// Passport information
@$emp_passport_issued_date_g = $_POST['emp_passport_issued_date_g'];
@$emp_passport_expiry_date_g = $_POST['emp_passport_expiry_date_g'];
@$emp_passport_number = $_POST['emp_passport_number'];

@$emp_passport_issued_date_h = $_POST['emp_passport_issued_date_h'];
@$emp_passport_expiry_date_h = $_POST['emp_passport_expiry_date_h'];
@$emp_entry_number = $_POST['emp_entry_number'];

@$emp_passport_in_file = $_POST['emp_passport_in_file'];

// Iqama information
@$emp_iqama_number = $_POST['emp_iqama_number'];
@$emp_iqama_expiry_date_g = $_POST['emp_iqama_expiry_date_g'];
@$emp_iqama_expiry_date_h = $_POST['emp_iqama_expiry_date_h'];

// Ministry of labor and GOSI information
@$emp_mol_number = $_POST['emp_mol_number'];
@$emp_mol_company_number = $_POST['emp_mol_company_number'];
@$emp_gosi_number = $_POST['emp_gosi_number'];

// Bank information
@$emp_atm_number = $_POST['emp_atm_number'];
@$emp_atm_status = $_POST['emp_atm_status'];
@$emp_bank_status = $_POST['emp_bank_status'];

@$emp_atm_issued_date_g = $_POST['emp_atm_issued_date_g'];
@$emp_atm_expiry_date_g = $_POST['emp_atm_expiry_date_g'];

// Medical information
@$emp_health_insurance_number = $_POST['emp_health_insurance_number'];
@$emp_health_insurance_class = $_POST['emp_health_insurance_class'];
@$emp_health_issued_date_g = $_POST['emp_health_issued_date_g'];

@$emp_health_expiry_date_g = $_POST['emp_health_expiry_date_g'];

// Get the name of the Nationality
$nationality = "SELECT id, nationality_arabic FROM nationality_info WHERE id = '".$emp_nationality."' ";
$nationality_data = mysql_query($nationality);
@$nationality_name = mysql_result($nationality_data,0,"nationality_arabic");

// Get the name of the project
$project = "SELECT id, p_name FROM project_info WHERE id = '".$emp_project_id."' ";
$project_data = mysql_query($project);
@$project_name = mysql_result($project_data,0,"p_name");

// Get the name of the position
$position = "SELECT id, position_name FROM position_info WHERE id = '".$emp_position_id."' ";
$position_data = mysql_query($position);
@$position_name = mysql_result($position_data,0,"position_name");

// Get the name of the Type of Visa
$visa = "SELECT * FROM visa_info WHERE id = '".$emp_type_of_visa_id."' ";
$visa_data = mysql_query($visa);
@$visa_name = mysql_result($visa_data,0,"visa_position_name");

// ================================== \\

//Add employee
$addEmployee = "INSERT INTO employee_details
		(id_number,
		fullname,
		g_birth_date,
		
		h_birth_date,
		age,
		gender,
		
		nationality_id,
		nationality,
		religion,
		marital_status,
		
		phone_number,
		drivers_license_number,
		type_of_license,
		
		license_g_iss_date,
		license_g_exp_date,
		visa_number,
		
		license_h_iss_date,
		license_h_exp_date,
		agency_id,
		
		sponsor,
		project_id,
		project_name,
		pid,
		
		type_of_visa_id,
		type_of_visa,
		employment_status,
		position_id,
		position,
		
		basic_salary,
		other_allowance,
		total_salary,
		
		contract_g_date_employed,
		contract_g_date_expiration,
		contract_g_date_entry,
		
		contract_h_date_employed,
		contract_h_date_expiration,
		contract_h_date_entry,
		
		contract_years,
		
		passport_g_iss_date,
		passport_g_exp_date,
		passport_number,
		
		passport_h_iss_date,
		passport_h_exp_date,
		passport_entry_number,
		
		passport_in_file,
		
		iqama_number,
		iqama_g_date,
		iqama_h_date,
		
		mol_emp_number,
		mol_company_number,
		gosi_emp_number,
		
		atm_number,
		atm_status,
		atm_issuance,
		
		atm_date_issued,
		atm_date_expiration,
		
		medical_issuance_number,
		medical_class,
		medical_iss_date,
		
		medical_exp_date
		)
		VALUES
		('".$emp_id."',
		'".$emp_name."',
		'".$emp_bdateg."',
				
		'".$emp_bdateh."',
		'".$emp_age."',
		'".$emp_gender."',
		
		'".$emp_nationality."',
		'".$nationality_name."',
		'".$emp_religion."',
		'".$emp_marital_status."',
				
		'".$emp_phone_number."',
		'".$emp_drivers_license."',
		'".$emp_type_of_license."',
				
		'".$emp_lic_iss_date_g."',
		'".$emp_lic_exp_date_g."',
		'".$emp_visa_number."',				
				
		'".$emp_lic_iss_date_h."',
		'".$emp_lic_exp_date_h."',
		'".$emp_name_agency."',
		
		'".$emp_sponsor."',
		'".$emp_project_id."',
		'".$project_name."',
		'".$emp_pid_name."',
				
		'".$emp_type_of_visa_id."',
		'".$visa_name."',		
		'".$emp_status."',			
		'".$emp_position_id."',
		'".$position_name."',							
		
		'".$emp_basic_salary."',
		'".$emp_other_allowance."',
		'".$emp_total_salary."',
				
		'".$emp_current_contract_date_g."',		
		'".$emp_current_expiry_date_g."',		
		'".$emp_current_entry_date_g."',		
				
		'".$emp_current_contract_date_h."',		
		'".$emp_current_expiry_date_h."',		
		'".$emp_current_entry_date_h."',
				
		'".$emp_contract_years."',
				
		'".$emp_passport_issued_date_g."',
		'".$emp_passport_expiry_date_g."',
		'".$emp_passport_number."',
			
		'".$emp_passport_issued_date_h."',
		'".$emp_passport_expiry_date_h."',
		'".$emp_entry_number."',
		
		'".$emp_passport_in_file."',
				
		'".$emp_iqama_number."',
		'".$emp_iqama_expiry_date_g."',
		'".$emp_iqama_expiry_date_h."',
				
		'".$emp_mol_number."',
		'".$emp_mol_company_number."',
		'".$emp_gosi_number."',
				
		'".$emp_atm_number."',
		'".$emp_atm_status."',
		'".$emp_bank_status."',
				
		'".$emp_atm_issued_date_g."',
		'".$emp_atm_expiry_date_g."',
				
		'".$emp_health_insurance_number."',
		'".$emp_health_insurance_class."',
		'".$emp_health_issued_date_g."',
				
		'".$emp_health_expiry_date_g."'		
		
		)";
$addEmployee_data = mysql_query($addEmployee);


$data['success'] = true;
$data['message'] = 'Success!';
//$data['message'] = $addEmployee;

echo json_encode($data);
?>