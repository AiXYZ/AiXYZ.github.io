<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

$data = array();

	db_connect();
	
	mysql_query("SET NAMES utf8");
	mysql_query("set character set utf8");
	
	// Personal information
	@$empid = $_POST['empid'];
	@$empname = $_POST['empname'];
	@$empbdateg = $_POST['empbdateg'];
	
	@$empbdateh = $_POST['empbdateh'];
	@$empage = $_POST['empage'];
	@$empgender = $_POST['empgender'];
	
	@$empnationalityid = $_POST['empnationalityid'];
	@$empreligion = $_POST['empreligion'];
	@$empmaritalstatus = $_POST['empmaritalstatus'];
	
	@$empphonenumber = $_POST['empphonenumber'];
	@$empdriverlicense = $_POST['empdriverlicense'];
	@$emptypeoflicense = $_POST['emptypeoflicense'];
	
	@$empissdatelicenseg = $_POST['empissdatelicenseg'];
	@$empexpdatelicenseg = $_POST['empexpdatelicenseg'];
	@$empvisanumber = $_POST['empvisanumber'];
	
	@$empissdatelicenseh = $_POST['empissdatelicenseh'];
	@$empexpdatelicenseh = $_POST['empexpdatelicenseh'];
	@$empagencyid = $_POST['empagencyid'];
	
	// Get the name of the Nationality
	$nationality = "SELECT id, nationality_arabic FROM nationality_info WHERE id = '".$empnationalityid."' ";
	$nationality_data = mysql_query($nationality);
	@$nationality_name = mysql_result($nationality_data,0,"nationality_arabic");
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Contract information
	@$empsponsor = $_POST['empsponsor'];
	@$empprojectid = $_POST['empprojectid'];
	@$emppidaccount = $_POST['emppidaccount'];
	
	@$emptypeofvisaid = $_POST['emptypeofvisaid'];
	@$empstatus = $_POST['empstatus'];
	@$emppositionid = $_POST['emppositionid'];
	
	// Update of basic salary, other allowance and total salary
	// is done on salary history
	
	@$empcurrentcontractdateg = $_POST['empcurrentcontractdateg'];
	@$empcontractexpirydateg = $_POST['empcontractexpirydateg'];
	@$empcontractentrydateg = $_POST['empcontractentrydateg'];
	
	@$empcurrentcontractdateh = $_POST['empcurrentcontractdateh'];
	@$empcontractexpirydateh = $_POST['empcontractexpirydateh'];
	@$empcontractentrydateh = $_POST['empcontractentrydateh'];
	
	@$empcontractyears = $_POST['empcontractyears'];
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Passport information
	@$emppassportexpirydateg = $_POST['emppassportexpirydateg'];
	@$emppassportissueddateg = $_POST['emppassportissueddateg'];
	@$emppassportnumber = $_POST['emppassportnumber'];
	
	@$emppassportexpirydateh = $_POST['emppassportexpirydateh'];
	@$emppassportissueddateh = $_POST['emppassportissueddateh'];
	@$empentrynumber = $_POST['empentrynumber'];
	
	@$empispassportinfile = $_POST['empispassportinfile'];
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Iqama information
	@$empiqamanumber = $_POST['empiqamanumber'];
	@$empiqamaexpirydateg = $_POST['empiqamaexpirydateg'];
	@$empiqamaexpirydateh = $_POST['empiqamaexpirydateh'];
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Ministry of labor and GOSI information
	@$empmolidnumber = $_POST['empmolidnumber'];
	@$empmolcompanyidnumber = $_POST['empmolcompanyidnumber'];
	@$empgosiemployeenumber = $_POST['empgosiemployeenumber'];
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Bank information
	
	@$empatmnumber = $_POST['empatmnumber'];
	@$empatmstatus = $_POST['empatmstatus'];
	@$empbankstatus = $_POST['empbankstatus'];
	
	@$empatmissueddateg = $_POST['empatmissueddateg'];
	@$empatmexpirydateg = $_POST['empatmexpirydateg'];
		
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/

	// Medical information
	@$emphealthinsurancenumber = $_POST['emphealthinsurancenumber'];
	@$emphealthinsuranceclass = $_POST['emphealthinsuranceclass'];
	@$emphealthinsuranceissueddateg = $_POST['emphealthinsuranceissueddateg'];
	@$emphealthinsuranceexpirydateg = $_POST['emphealthinsuranceexpirydateg'];
	
	/*------------------------------------------------------------------------------------------------------------------------*/
	
	// Update Personal Info
	$update_personal_information = "UPDATE employee_details SET
			fullname = '".$empname."',
			g_birth_date = '".$empbdateg."',
					
			h_birth_date = '".$empbdateh."',
			age = '".$empage."',
			gender = '".$empgender."',
					
			nationality_id = '".$empnationalityid."',
			nationality = '".$nationality_name."',
			religion = '".$empreligion."',
			marital_status = '".$empmaritalstatus."',
					
			phone_number = '".$empphonenumber."',
			drivers_license_number = '".$empdriverlicense."',
			type_of_license = '".$emptypeoflicense."',
					
			license_g_iss_date = '".$empissdatelicenseg."',
			license_h_iss_date = '".$empissdatelicenseg."',
			visa_number = '".$empvisanumber."',		
					
			license_g_exp_date = '".$empexpdatelicenseg."',
			license_h_exp_date = '".$empexpdatelicenseh."',
			agency_id	= '".$empagencyid."'
					
			WHERE id_number = '".$empid."'
			";
	
	$update_personal_information_data = mysql_query($update_personal_information);
	
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Update Contract Info
	
	// Get the name of the project
	$project = "SELECT id, p_name FROM project_info WHERE id = '".$empprojectid."' ";
	$project_data = mysql_query($project);
	@$project_name = mysql_result($project_data,0,"p_name");
	
	// Get the name of the Type of Visa
	$visa = "SELECT * FROM visa_info WHERE id = '".$emptypeofvisaid."' ";
	$visa_data = mysql_query($visa);
	@$visa_name = mysql_result($visa_data,0,"visa_position_name");
	
	// Get the name of the position
	$position = "SELECT id, position_name FROM position_info WHERE id = '".$emppositionid."' ";
	$position_data = mysql_query($position);
	@$position_name = mysql_result($position_data,0,"position_name");

	$update_contract_information = "UPDATE employee_details SET
			sponsor = '".$empsponsor."',
			project_id = '".$empprojectid."', 
			project_name = '".$project_name."',
			pid = '".$emppidaccount."',
			
			type_of_visa_id = '".$emptypeofvisaid."', 
			type_of_visa = '".$visa_name."',
			employment_status = '".$empstatus."', 
			position_id = '".$emppositionid."',
			position = '".$position_name."',
			
			contract_g_date_employed = '".$empcurrentcontractdateg."', 
			contract_g_date_expiration = '".$empcontractexpirydateg."',
			contract_g_date_entry = '".$empcontractentrydateg."',
			
			contract_h_date_employed = '".$empcurrentcontractdateh."', 
			contract_h_date_expiration = '".$empcontractexpirydateh."',
			contract_h_date_entry = '".$empcontractentrydateh."',
			
			contract_years = '".$empcontractyears."'
			
			WHERE id_number = '".$empid."'
			";
	
	$update_contract_information = mysql_query($update_contract_information);
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Update Passport information
	$update_passport_information = "UPDATE employee_details SET 
			passport_g_exp_date = '".$emppassportexpirydateg."',
			passport_g_iss_date = '".$emppassportissueddateg."',
			passport_number = '".$emppassportnumber."',
			
			passport_h_exp_date = '".$emppassportexpirydateh."',
			passport_h_iss_date = '".$emppassportissueddateh."',
			passport_entry_number ='".$empentrynumber."',
			
			passport_in_file = '".$empispassportinfile."'
			
			WHERE id_number = '".$empid."'
			";
	
	$update_passport_information_data = mysql_query($update_passport_information);
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Update Iqama Information
	$update_iqama_information = "UPDATE employee_details SET
			iqama_number = '".$empiqamanumber."',
			iqama_g_date = '".$empiqamaexpirydateg."',
			iqama_h_date = '".$empiqamaexpirydateh."'
			
			WHERE id_number = '".$empid."'
			";
	$update_iqama_information_data = mysql_query($update_iqama_information);
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Update Ministry of labor and GOSI information
	$update_mol_gosi_information = "UPDATE employee_details SET
			mol_emp_number = '".$empmolidnumber."',
			mol_company_number = '".$empmolcompanyidnumber."',
			gosi_emp_number = '".$empgosiemployeenumber."'
					
			WHERE id_number = '".$empid."'
			";
	$update_mol_gosi_information_data = mysql_query($update_mol_gosi_information);
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Update Bank information
	$update_bank_information = "UPDATE employee_details SET
			atm_number = '".$empatmnumber."',
			atm_status = '".$empatmstatus."',
			atm_issuance = '".$empbankstatus."',
					
			atm_date_issued = '".$empatmissueddateg."',
			atm_date_expiration = '".$empatmexpirydateg."'
					
			WHERE id_number = '".$empid."'
			";
	$update_bank_information_data = mysql_query($update_bank_information);
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	// Update Health Insurance Information
	$update_medical_information = "UPDATE employee_details SET
			medical_issuance_number = '".$emphealthinsurancenumber."',
			medical_class = '".$emphealthinsuranceclass."',
			medical_iss_date = '".$emphealthinsuranceissueddateg."',
					
			medical_exp_date = '".$emphealthinsuranceexpirydateg."'
				
			WHERE id_number = '".$empid."'
			";
	$update_medical_information_data = mysql_query($update_medical_information);
	
	/*-------------------------------------------------------------------------------------------------------------------------------------------------------*/
	
	$data['success'] = true;
	$data['message'] = $empid;
	//$data['message'] = $update_contract_information;
	
echo json_encode($data);

?>