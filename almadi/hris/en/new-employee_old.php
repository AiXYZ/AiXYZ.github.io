<!DOCTYPE html>
<html lang="en">
<head>
	<?php include_once("../inc/meta-data-and-favicon.php") ?>
    
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet">
	<?php include_once("../inc/font.php") ?>
	<link href="css/style.css" rel="stylesheet">
	<!-- for table -->
	<link href="css/table/jquery.dataTables.min.css" rel="stylesheet">
	<style>.popover{max-width: 700px !important;}.popover-inner {width: 730px !important;}</style>
	<style>#profilePictureChangeSign {opacity: 0.6;top:165px;left:37%;position: absolute;}.thumbnail{position:relative;}</style>
	<style>.profileIconTable tbody tr:hover td, .profileIconTable tbody tr:hover th {background-color: #fff;}</style>
	<!-- datepicker -->
	<link href="css/datepicker/jquery.calendars.picker.css" rel="stylesheet">
		
    <script>
    <?php include_once("../inc/google-analytics.php") ?>
    </script>	
</head>
<body>
<div class="navbar navbar-fixed-top">
  <div class="navbar-inner">
	<?php include_once("inc-en/top-navbar.php") ?>
    <!-- /container --> 
  </div>
  <!-- /navbar-inner --> 
</div>
<!-- /navbar -->
<div class="subnavbar">
  <div class="subnavbar-inner">
  	<?php include_once("inc-en/subnavbar-menu.php") ?>
  </div>
</div>
<!-- /subnavbar -->
<div class="main">
  <div class="main-inner">
    <div class="container">
      <div class="row">
		<!-- employee list start -->
      	<div class="span12">
			<!--add new start -->
      		<div id="addNewEmp" class="widget hideContentAi">
      			<div class="widget-header">
      				<i class="icon-user"></i>
      				<h3>New employee</h3>
  				</div> <!-- /widget-header -->
				<div class="widget-content">
					<div class="tabbable">
						<!-- list of employee starts -->
						<div class="row-fluid">
							<div class="span12">							
								<!-- employee profile start -->
								<form id="newEmployeeForm">
								<div class="row-fluid">
								  <!-- employee picture, attachedment and quick info start -->
								  <div class="span3">
									<div class="thumbnail" style="padding-right: 0px;padding-left: 0px;">
										<img src="../upload/emoloyee-picture/profile-picture-placeholder.jpg" id="profilePictureChange" style="border-radius: 50%;">
										<h3 class="tdTextInCenterAi profilePictureChangeClick"><span id="empNameWhileTyping">Employee Name</span></h3>
										<p class="tdTextInCenterAi"><strong><span id="positionWhileTyping">Position</span></strong></p>
										<p class="tdTextInCenterAi"><strong>0 Year 0 Month,</strong> على راس العمل </p>
										<!-- employee attachedment and quick info start -->
										<table class="table table-bordered profileIconTable" style="border-radius: 0px;border-right: 0px;">
											<tbody>
												<tr>
													<td class="tdTextInCenterAi" style="border-radius: 0px;border-left: 0px;"><i class="icon-calendar" style="font-size: 30px;"></i><br><span id="birthDateGWhileTyping">Birthday</span></td>
													<td class="tdTextInCenterAi"><i class="icon-user" style="font-size: 30px;"></i><br><span id="empGenderWhileTyping">Gender</span></td>
													<td class="tdTextInCenterAi"><i class="icon-globe" style="font-size: 30px;"></i><br><span id="empNationalityWhileTyping">Nationality</span></td>
												</tr>
												<tr>
													<td style="border-left: 0px;"  class="tdTextInCenterAi"><i class="icon-group" style="font-size: 30px;"></i><br><span id="empReligionWhileTyping">Religion</span></td>
													<td class="tdTextInCenterAi"><i class="icon-heart" style="font-size: 30px;"></i><br><span id="maritalStatusWhileTyping">Status</span></td>
													<td class="tdTextInCenterAi"><i class="icon-phone-sign" style="font-size: 30px;"></i><br><span id="phoneNumberWhileTyping">Mob.No.</span></td>
												</tr>
										        <tr>
										            <td style="border-left: 0px;" class="tdTextInCenterAi" colspan="3">&nbsp;</td>
										        </tr>												
												<tr>
													<td style="border-left: 0px;" class="tdTextInCenterAi" data-toggle="popover" title="Passport" data-content="<img src='../upload/passport/passport-placeholder.jpg' width='700px'>"><img src="../upload/passport/passport-placeholder.jpg" style="width: 65px;height: 65px;"/><br>Passport</td>
													<td class="tdTextInCenterAi" data-toggle="popover" title="Iqama" data-content="<img src='../upload/iqama/iqama-placeholder.jpg' width='700px'>"><img src="../upload/iqama/iqama-placeholder.jpg" style="width: 65px;height: 65px;"/><br>Iqama</td>
													<td class="tdTextInCenterAi" data-toggle="popover" title="DL" data-content="<img src='../upload/dl/dl-placeholder.jpg' width='700px'>"><img src="../upload/dl/dl-placeholder.jpg" style="width: 65px;height: 65px;"/><br>DL</td>
												</tr>
												<tr>
													<td style="border-left: 0px;" class="tdTextInCenterAi" data-toggle="popover" title="Visa" data-content="<img src='../upload/visa/visa-placeholder.jpg' width='700px'>"><img src="../upload/visa/visa-placeholder.jpg" style="width: 65px;height: 65px;"/><br>Visa</span></td>
													<td class="tdTextInCenterAi" data-toggle="popover" title="S.Visa" data-content="<img src='../upload/stamp-visa/stamp-visa-placeholder.jpg' width='700px'>"><img src="../upload/stamp-visa/stamp-visa-placeholder.jpg" style="width: 65px;height: 65px;"/><br>S.Visa</td>
													<td class="tdTextInCenterAi" data-toggle="popover" title="ID" data-content="<img src='../upload/id/id-card-placeholder.jpg' width='700px'>"><img src="../upload/id/id-card-placeholder.jpg" style="width: 65px;height: 65px;"/><br>ID</td>
												</tr>
											</tbody>
										</table>
										<!-- employee attachedment and quick info end -->																
									</div>								      
								  </div>
								  <!-- employee picture, attachedment and quick info end -->
								  
								  <!-- employee form start -->
								  <div class="span9">
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Personal information</strong></p>
										</div>

										<div class="row-fluid">
										  <div class="span4">
											<div class="control-group">											
												<label class="control-label" for="employeeID">Employee ID <span class="asteriskForRequired">*</span></label>
												<div class="controls">
													<input type="text" class="input-block-level" id="employeeID" required>
												</div> <!-- /controls -->				
											</div> <!-- /control-group -->							          
										  </div>
										  <div class="span4">
											<div class="control-group">											
												<label class="control-label" for="empName">Name <span class="asteriskForRequired">*</span></label>
												<div class="controls">
													<input type="text" class="input-block-level" id="empName" required>
												</div> <!-- /controls -->				
											</div> <!-- /control-group -->								          
										  </div>
										  <div class="span4">
											<div class="control-group">											
												<label class="control-label" for="birthDateG">Birth date (G)</label>
												<div class="controls">
													<input type="text" class="input-block-level" id="birthDateG">
												</div> <!-- /controls -->				
											</div> <!-- /control-group -->								          
										  </div>
										</div>
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="birthDateH">Birth date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="birthDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="empAge">Age</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="empAge" value="25" readonly>
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="empGender">Gender</label>
													<div class="controls">
														<select class="input-block-level" id="empGender">
															<option style="display:none;" value="">Select</option>
															<option value="Male">Male</option>
															<option value="Female">Female</option>														
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>							        
										
										<div class="row-fluid">								
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="empNationality">Nationality</label>
													<div class="controls">
														<select class="input-block-level" id="empNationality">
															<option style="display:none;" value="">Select</option>
															<option value="India"> الهند </option>
															<option value="Saudi"> سعودي </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>	
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="empReligion">Religion</label>
													<div class="controls">
														<select class="input-block-level" id="empReligion">
															<option style="display:none;" value="">Select</option>
															<option value="Islam">Islam</option>
															<option value="Christianity">Christianity</option>
															<option value="Hinduism">Hinduism</option>
															<option value="Buddhism">Buddhism</option>
															<option value="Nonreligious">Nonreligious</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="maritalStatus">Marital status</label>
													<div class="controls">
														<select class="input-block-level" id="maritalStatus">
															<option style="display:none;" value="">Select</option>
															<option value="Single">Single</option>
															<option value="Married">Married</option>
															<option value="Separated">Separated</option>
															<option value="Divorced">Divorced</option>
															<option value="Widowed">Widowed</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>																														
										</div>								        
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="phoneNumber">Phone number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="phoneNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="driversLicense">Driver's license</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="driversLicense">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="typeOfLicense">Type of license</label>
													<div class="controls">
														<select class="input-block-level" id="typeOfLicense">
															<option style="display:none;" value="">Select</option>
															<option value="type1"> خاصة </option>
															<option value="type2"> نقل خفيف </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="licenseIssueDateG">License issue date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="licenseIssueDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="licenseIssueDateH">License issue date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="licenseIssueDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="licenseExpiryDateG">License expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="licenseExpiryDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="licenseExpiryDateH">License expiry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="licenseExpiryDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="visaNumber">Visa number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="visaNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="nameOfAgency">Name of agency</label>
													<div class="controls">
														<select class="input-block-level" id="nameOfAgency">
															<option style="display:none;" value="">Select</option>
															<option value="type1">LC Manpower</option>
															<option value="type2">Al-Sofi</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>						
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Contract information</strong></p>
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="sponsor">Sponsor</label>
													<div class="controls">
														<select class="input-block-level" id="sponsor">
															<option style="display:none;" value="">Select</option>
															<option value="type1">  شركة عبدالله إبراهيم الصائغ  </option>
															<option value="type2"> مؤسسة عبدالله إبراهيم الصائغ </option>
														</select>															
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="projectName">Project name</label>
													<div class="controls">
														<select class="input-block-level" id="projectName">
															<option style="display:none;" value="">Select</option>
															<option value="type1">  الادارة التنفيذية شركة عبدالله  </option>
															<option value="type2"> القرى الشرقية </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="pidAccountName">PID - account name</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="pidAccountName" readonly>
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>							          
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="typeOfVisa">Type of visa</label>
													<div class="controls">
														<select class="input-block-level" id="typeOfVisa">
															<option style="display:none;" value="">Select</option>
															<option value="type1"> عامل عادي </option>
															<option value="type2"> فني كهرباء تمديدات </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="basicSalary">Basic salary</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="basicSalary">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="otherAllowance">Other allowance</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="otherAllowance">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>																          
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="totalSalary">Total salary</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="totalSalary" readonly>
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>													          
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="position">Position</label>
													<div class="controls">
														<select class="input-block-level" id="position">
															<option style="display:none;" value="">Select</option>
															<option value="Engineer"> تقنية المعلومات </option>
															<option value="CEO"> حارس </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>	
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="contractYears">Contract years</label>
													<div class="controls">
														<select class="input-block-level" id="contractYears">
															<option style="display:none;" value="">Select</option>
															<option value="type1">1</option>
															<option value="type2">2</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>														          
										</div>							
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="currentContractDateG">Current contract date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="currentContractDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="currentContractDateH">Current contract date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="currentContractDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="contractExpiryDateG">Contract expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="contractExpiryDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>										
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="contractExpiryDateH">Contract expiry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="contractExpiryDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="entryDateG">Entry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="entryDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="entryDateH">Entry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="entryDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>										
										</div>											
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Passport information</strong></p>
										</div>							
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportNumber">Passport number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="entryNumber">Entry number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="entryNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportExpiryDateG">Expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportExpiryDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>							          
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportExpiryDateH">Expiry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportExpiryDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportIssuedDateG">Issue date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportIssuedDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportIssuedDateH">Issue date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportIssuedDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>						          
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="isPassportInFile">Is passport in file?</label>
													<div class="controls">
														<select class="input-block-level" id="isPassportInFile">
															<option style="display:none;" value="">Select</option>
															<option value="type1">No</option>
															<option value="type2">Yes</option>
														</select>															
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
								  
										</div>						
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Iqama information</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="iqamaNumber">Iqama number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="iqamaNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="iqamaExpiryDateG">Expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="iqamaExpiryDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="iqamaExpiryDateH">Expiry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="iqamaExpiryDateH">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Ministry of labor and GOSI information</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="molIdNumber">MOL ID number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="molIdNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="molCompanyIdNumber">MOL company ID number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="molCompanyIdNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>	
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="gosiEmployeeNumber">GOSI employee number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="gosiEmployeeNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>	
										</div>							        
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Bank details</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="atmNumber">ATM number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="atmNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="atmStatus">ATM status</label>
													<div class="controls">
														<select class="input-block-level" id="atmStatus">
															<option style="display:none;" value="">Select</option>
															<option value="type1">Active</option>
															<option value="type2">Pending</option>
														</select>															
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>																
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="bankStatus">Bank status</label>
													<div class="controls">
														<select class="input-block-level" id="bankStatus">
															<option style="display:none;" value="">Select</option>
															<option value="type1">Issued</option>
															<option value="type2">Not Issued</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>								        
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="atmIssuedDateG">Issued date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="atmIssuedDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="atmExpirydateG">Expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="atmExpirydateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>							        
									
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Medical details</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="healthInsuranceNumber">Health insurance number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="healthInsuranceNumber">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="healthInsuranceClass">Health insurance class</label>
													<div class="controls">
														<select class="input-block-level" id="healthInsuranceClass">
															<option style="display:none;" value="">Select</option>
															<option value="type1">A</option>
															<option value="type2">B</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>																
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="healthIssuedDateG">Issued date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="healthIssuedDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>								        
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="healthExpiryDateG">Expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="healthExpiryDateG">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>							        
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Upload</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportImage">Passport</label>
													<div class="controls">
														<input type="file" id="passportImage" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="iqamaImage">Iqama</label>
													<div class="controls">
														<input type="file" id="iqamaImage" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="dlImage">DL</label>
													<div class="controls">
														<input type="file" id="dlImage" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="visatImage">Visa</label>
													<div class="controls">
														<input type="file" id="visatImage" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="stampVisaImage">Stamp Visa (S.Visa)</label>
													<div class="controls">
														<input type="file" id="stampVisaImage" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="idImage">ID</label>
													<div class="controls">
														<input type="file" id="idImage" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>								        
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="row-fluid">
										<div class="control-group pull-right">											
											<div class="controls">
											  <button class="btn btn-info">Save</button>															
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
									</div>								        						
								  </div>
								  <!-- employee form end -->							      
								</div>
								</form>
							    <!-- employee profile end -->
							</div>
						</div>							
						<!-- list of employee ends -->
					</div>
				</div> <!-- /widget-content -->
			</div> <!-- /widget -->
			<!--add new end -->
			
			
			
			<!--update start -->
      		<div id="updateNewEmp" class="widget hideContentAi">
      			<div class="widget-header">
      				<i class="icon-user"></i>
      				<h3>Update</h3>
  				</div> <!-- /widget-header -->
				<div class="widget-content">
					<div class="tabbable">
						<!-- list of employee starts -->
						<div class="row-fluid">
							<div class="span12">							
								<!-- employee profile start -->
								<form id="updateEmployeeForm">
								<div class="row-fluid">
								  <!-- employee picture, attachedment and quick info start -->
								  <div class="span3">
									<div class="thumbnail" style="padding-right: 0px;padding-left: 0px;">
										<img src="../upload/emoloyee-picture/profile-picture-placeholder.jpg" id="profilePictureChangeUpdate" style="border-radius: 50%;">
										<span id="profilePictureChangeSign" class="hideContentAi"><a href="#profilePictureChangeModal" role="button" class="btn" data-toggle="modal"><i class="icon-camera" style="font-size: 40px;"></i></a></span>
										<h3 class="tdTextInCenterAi">Mohammed Ali Akhtar</h3>
										<p class="tdTextInCenterAi"><strong> تقنية المعلومات </strong></p>
										<p class="tdTextInCenterAi"><strong>0 Year 0 Month,</strong> على راس العمل </p>
										<!-- employee attachedment and quick info start -->
										<table class="table table-bordered profileIconTable" style="border-radius: 0px;border-right: 0px;">
											<tbody>
												<tr>
													<td class="tdTextInCenterAi" style="border-radius: 0px;border-left: 0px;"><i class="icon-calendar" style="font-size: 30px;"></i><br>7/8/1990</td>
													<td class="tdTextInCenterAi"><i class="icon-user" style="font-size: 30px;"></i><br>Male</td>
													<td class="tdTextInCenterAi"><i class="icon-globe" style="font-size: 30px;"></i><br>Indian</td>
												</tr>
												<tr>
													<td style="border-left: 0px;" class="tdTextInCenterAi"><i class="icon-group" style="font-size: 30px;"></i><br>Islam</td>
													<td class="tdTextInCenterAi"><i class="icon-heart" style="font-size: 30px;"></i><br>Single</td>
													<td class="tdTextInCenterAi"><i class="icon-phone-sign" style="font-size: 30px;"></i><br>05911571</td>
												</tr>
										        <tr>
										            <td style="border-left: 0px;" class="tdTextInCenterAi" colspan="3">&nbsp;</td>
										        </tr>												
												<tr>
													<td style="border-left: 0px;" class="tdTextInCenterAi" data-toggle="popover" title="Passport" data-content="<img src='../upload/passport/passport-placeholder.jpg' width='700px'>"><img src="../upload/passport/passport-placeholder.jpg" style="width: 65px;height: 65px;"/><br>Passport</td>
													<td class="tdTextInCenterAi" data-toggle="popover" title="Iqama" data-content="<img src='../upload/iqama/iqama-placeholder.jpg' width='700px'>"><img src="../upload/iqama/iqama-placeholder.jpg" style="width: 65px;height: 65px;"/><br>Iqama</td>
													<td class="tdTextInCenterAi" data-toggle="popover" title="DL" data-content="<img src='../upload/dl/dl-placeholder.jpg' width='700px'>"><img src="../upload/dl/dl-placeholder.jpg" style="width: 65px;height: 65px;"/><br>DL</td>
												</tr>
												<tr>
													<td style="border-left: 0px;" class="tdTextInCenterAi" data-toggle="popover" title="Visa" data-content="<img src='../upload/visa/visa-placeholder.jpg' width='700px'>"><img src="../upload/visa/visa-placeholder.jpg" style="width: 65px;height: 65px;"/><br>Visa</span></td>
													<td class="tdTextInCenterAi" data-toggle="popover" title="S.Visa" data-content="<img src='../upload/stamp-visa/stamp-visa-placeholder.jpg' width='700px'>"><img src="../upload/stamp-visa/stamp-visa-placeholder.jpg" style="width: 65px;height: 65px;"/><br>S.Visa</td>
													<td class="tdTextInCenterAi" data-toggle="popover" title="ID" data-content="<img src='../upload/id/id-card-placeholder.jpg' width='700px'>"><img src="../upload/id/id-card-placeholder.jpg" style="width: 65px;height: 65px;"/><br>ID</td>
												</tr>
											</tbody>
										</table>
										<!-- employee attachedment and quick info end -->																
									</div>								      
								  </div>
								  <!-- employee picture, attachedment and quick info end -->
								  
								  <!-- employee form start -->
								  <div class="span9">
								  
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Personal information</strong></p>
										</div>

										<div class="row-fluid">
										  <div class="span4">
											<div class="control-group">											
												<label class="control-label" for="employeeIDUpdate">Employee ID</label>
												<div class="controls">
													<input type="text" class="input-block-level" id="employeeIDUpdate" value="3744" readonly>
												</div> <!-- /controls -->				
											</div> <!-- /control-group -->							          
										  </div>
										  <div class="span4">
											<div class="control-group">											
												<label class="control-label" for="empNameUpdate">Name</label>
												<div class="controls">
													<input type="text" class="input-block-level" id="empNameUpdate" value="Mohammed Ali Akhtar">
												</div> <!-- /controls -->				
											</div> <!-- /control-group -->								          
										  </div>
										  <div class="span4">
											<div class="control-group">											
												<label class="control-label" for="birthDateGUpdate">Birth date (G)</label>
												<div class="controls">
													<input type="text" class="input-block-level" id="birthDateGUpdate" value="7/8/1990">
												</div> <!-- /controls -->				
											</div> <!-- /control-group -->								          
										  </div>
										</div>
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="birthDateHUpdate">Birth date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="birthDateHUpdate" value="7/8/1434">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="empAgeUpdate">Age</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="empAgeUpdate" value="25" readonly>
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="empGenderUpdate">Gender</label>
													<div class="controls">
														<select class="input-block-level" id="empGenderUpdate">
															<option value="Male" selected>Male</option>
															<option value="Female">Female</option>														
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>							        
										
										<div class="row-fluid">								
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="empNationalityUpdate">Nationality</label>
													<div class="controls">
														<select class="input-block-level" id="empNationalityUpdate">
															<option value="India" selected> الهند </option>
															<option value="Saudi"> سعودي </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>	
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="empReligionUpdate">Religion</label>
													<div class="controls">
														<select class="input-block-level" id="empReligionUpdate">
															<option value="Islam" selected>Islam</option>
															<option value="Christianity">Christianity</option>
															<option value="Hinduism">Hinduism</option>
															<option value="Buddhism">Buddhism</option>
															<option value="Nonreligious">Nonreligious</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="maritalStatusUpdate">Marital status</label>
													<div class="controls">
														<select class="input-block-level" id="maritalStatusUpdate">
															<option value="Single" selected>Single</option>
															<option value="Married">Married</option>
															<option value="Separated">Separated</option>
															<option value="Divorced">Divorced</option>
															<option value="Widowed">Widowed</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>																														
										</div>								        
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="phoneNumberUpdate">Phone number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="phoneNumberUpdate" value="05648415">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="driversLicenseUpdate">Driver's license</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="driversLicenseUpdate" value="21454585">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="typeOfLicenseUpdate">Type of license</label>
													<div class="controls">
														<select class="input-block-level" id="typeOfLicenseUpdate">
															<option value="type1" selected> خاصة </option>
															<option value="type2"> نقل خفيف </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="licenseIssueDateGUpdate">License issue date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="licenseIssueDateGUpdate" value="6/3/2015">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="licenseIssueDateHUpdate">License issue date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="licenseIssueDateHUpdate" value="6/3/1443">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="licenseExpiryDateGUpdate">License expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="licenseExpiryDateGUpdate" value="6/8/2016">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="licenseExpiryDateHUpdate">License expiry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="licenseExpiryDateHUpdate" value="6/8/1452">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="visaNumberUpdate">Visa number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="visaNumberUpdate" value="45616498">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>									
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="nameOfAgencyUpdate">Name of agency</label>
													<div class="controls">
														<select class="input-block-level" id="nameOfAgencyUpdate">
															<option value="type1" selected>LC Manpower</option>
															<option value="type2">Al-Sofi</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>						
						
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Contract information</strong></p>
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="sponsorUpdate">Sponsor</label>
													<div class="controls">
														<select class="input-block-level" id="sponsorUpdate">
															<option value="type1" selected>  شركة عبدالله إبراهيم الصائغ  </option>
															<option value="type2"> مؤسسة عبدالله إبراهيم الصائغ </option>
														</select>															
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="projectNameUpdate">Project name</label>
													<div class="controls">
														<select class="input-block-level" id="projectNameUpdate">
															<option value="type1" selected>  الادارة التنفيذية شركة عبدالله  </option>
															<option value="type2"> القرى الشرقية </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="pidAccountNameUpdate">PID - account name</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="pidAccountNameUpdate" value="155187454" readonly>
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>							          
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="typeOfVisaUpdate">Type of visa</label>
													<div class="controls">
														<select class="input-block-level" id="typeOfVisaUpdate" required>
															<option value="type1" selected> عامل عادي </option>
															<option value="type2"> فني كهرباء تمديدات </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="basicSalaryUpdate">Basic salary</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="basicSalaryUpdate" value="2500">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="otherAllowanceUpdate">Other allowance</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="otherAllowanceUpdate" value="0000">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>																          
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="totalSalaryUpdate">Total salary</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="totalSalaryUpdate" value="2500" readonly>
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>													          
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="positionUpdate">Position</label>
													<div class="controls">
														<select class="input-block-level" id="positionUpdate">
															<option value="Engineer" selected> تقنية المعلومات </option>
															<option value="CEO"> حارس </option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>	
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="contractYearsUpdate">Contract years</label>
													<div class="controls">
														<select class="input-block-level" id="contractYearsUpdate">
															<option value="type1" selected>1</option>
															<option value="type2">2</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>														          
										</div>							
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="currentContractDateGUpdate">Current contract date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="currentContractDateGUpdate" value="7/8/2015">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="currentContractDateHUpdate">Current contract date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="currentContractDateHUpdate" value="7/8/1434">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="contractExpiryDateGUpdate">Contract expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="contractExpiryDateGUpdate" value="7//8/2015">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>										
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="contractExpiryDateHUpdate">Contract expiry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="contractExpiryDateHUpdate" value="7/8/1542">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="entryDateGUpdate">Entry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="entryDateGUpdate" value="7/8/2015">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="entryDateHUpdate">Entry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="entryDateHUpdate" value="7/8/1542">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>										
										</div>											
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Passport information</strong></p>
										</div>							
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportNumberUpdate">Passport number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportNumberUpdate" value="456312554">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="entryNumberUpdate">Entry number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="entryNumberUpdate" value="16674657">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportExpiryDateGUpdate">Expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportExpiryDateGUpdate" value="7/8/2016">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>							          
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportExpiryDateHUpdate">Expiry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportExpiryDateHUpdate" value="7/8/1452">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportIssuedDateGUpdate">Issue date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportIssuedDateGUpdate" value="7/8/2002">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportIssuedDateHUpdate">Issue date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="passportIssuedDateHUpdate" value="7/8/1425">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>						          
										</div>						
							
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="isPassportInFileUpdate">Is passport in file?</label>
													<div class="controls">
														<select class="input-block-level" id="isPassportInFileUpdate">
															<option value="type1" selected>No</option>
															<option value="type2">Yes</option>
														</select>															
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
								  
										</div>						
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Iqama information</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="iqamaNumberUpdate">Iqama number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="iqamaNumberUpdate" value="16546843">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="iqamaExpiryDateGUpdate">Expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="iqamaExpiryDateGUpdate" value="7/8/1995">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="iqamaExpiryDateHUpdate">Expiry date (H)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="iqamaExpiryDateHUpdate" value="7/8/1435">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Ministry of labor and GOSI information</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="molIdNumberUpdate">MOL ID number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="molIdNumberUpdate" value="546463122">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="molCompanyIdNumberUpdate">MOL company ID number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="molCompanyIdNumberUpdate" value="579485671">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>	
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="gosiEmployeeNumberUpdate">GOSI employee number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="gosiEmployeeNumberUpdate" value="2461296">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>	
										</div>							        
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Bank details</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="atmNumberUpdate">ATM number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="atmNumberUpdate" value="45654651">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="atmStatusUpdate">ATM status</label>
													<div class="controls">
														<select class="input-block-level" id="atmStatusUpdate">
															<option value="type1" selected>Active</option>
															<option value="type2">Pending</option>
														</select>															
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>																
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="bankStatusUpdate">Bank status</label>
													<div class="controls">
														<select class="input-block-level" id="bankStatusUpdate">
															<option value="type1" selected>Issued</option>
															<option value="type2">Not Issued</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>								        
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="atmIssuedDateGUpdate">Issued date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="atmIssuedDateGUpdate" value="7/8/2015">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="atmExpirydateGUpdate">Expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="atmExpirydateGUpdate" value="7/8/2020">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>							        
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Medical details</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="healthInsuranceNumberUpdate">Health insurance number</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="healthInsuranceNumberUpdate" value="254987946">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="healthInsuranceClassUpdate">Health insurance class</label>
													<div class="controls">
														<select class="input-block-level" id="healthInsuranceClassUpdate">
															<option value="type1" selected>A</option>
															<option value="type2">B</option>
														</select>														
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>																
											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="healthIssuedDateGUpdate">Issued date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="healthIssuedDateGUpdate" value="7/5/2015">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>								        
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="healthExpiryDateGUpdate">Expiry date (G)</label>
													<div class="controls">
														<input type="text" class="input-block-level" id="healthExpiryDateGUpdate" value="7/8/1452">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>							        
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="widget-content">
										<div class="row-fluid">
											<p><strong>Upload</strong></p>
										</div>						

										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="passportImageUpdate">Passport</label>
													<div class="controls">
														<input type="file" id="passportImageUpdate" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="iqamaImageUpdate">Iqama</label>
													<div class="controls">
														<input type="file" id="iqamaImageUpdate" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="dlImageUpdate">DL</label>
													<div class="controls">
														<input type="file" id="dlImageUpdate" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>
										
										<div class="row-fluid">
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="visatImageUpdate">Visa</label>
													<div class="controls">
														<input type="file" id="visatImageUpdate" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="stampVisaImageUpdate">Stamp Visa (S.Visa)</label>
													<div class="controls">
														<input type="file" id="stampVisaImageUpdate" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>											
											<div class="span4">
												<div class="control-group">											
													<label class="control-label" for="idImageUpdate">ID</label>
													<div class="controls">
														<input type="file" id="idImageUpdate" accept="image/*">
													</div> <!-- /controls -->				
												</div> <!-- /control-group -->	
											</div>
										</div>								        
										
									</div>
									
									<div class="clearfix"><br></div>
									
									<div class="row-fluid">
										<div class="control-group pull-right">											
											<div class="controls">
											  <button class="btn">Add new</button>
											  <button class="btn btn-info">Update</button>											  														
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->
									</div>								        						
								  </div>
								  <!-- employee form end -->							      
								</div>
								</form>
							    <!-- employee profile end -->
							</div>
						</div>							
						<!-- list of employee ends -->
					</div>
				</div> <!-- /widget-content -->
			</div> <!-- /widget -->
			<!--update end -->			
	    </div> <!-- /span12 -->
	    <!-- employee list end -->
	    
		<!-- Modal start -->			
		<!-- modal for profile picture change start -->
		<div id="profilePictureChangeModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false"  style="width: 330px; margin-left: -165px;">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			<h3 id="myModalLabel">Image</h3>
		  </div>
		  <div class="modal-body">
		  	<iframe src="../upload-profile-picture/employee-profile-image-ui.php?empIdForImgUpdate=3744" width="300px" height="400px" align="middle" frameborder="0"></iframe>		
		  </div>
		  <!-- 
		  <div class="modal-footer">
			<button class="btn btn-info">Yes</button>
		  </div>
		   -->
		</div>		
		<!-- modal for profile picture change end -->
		
		
		
			    
		<!-- Modal end -->
      </div>
      <!-- /row --> 
    </div>
    <!-- /container --> 
  </div>
  <!-- /main-inner --> 
</div>
<!-- /main -->
<div class="footer">
  <div class="footer-inner">
	<?php include_once("inc-en/footer.php") ?>
    <!-- /container --> 
  </div>
  <!-- /footer-inner --> 
</div>
<!-- /footer --> 

<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/bootstrap.js"></script>
<!-- for table search and pagination -->
<script src="js/table/jquery.dataTables.min.js"></script>
<!-- datepicker -->
<script src="js/datepicker/jquery.calendars.js"></script>
<script src="js/datepicker/jquery.calendars.plus.js"></script>
<script src="js/datepicker/jquery.plugin.js"></script>
<script src="js/datepicker/jquery.calendars.picker.js"></script>
<script src="js/datepicker/jquery.calendars.islamic.js"></script>
<script src="js/validator.min.js"></script>

<!-- This is for the Employee List Ajax -->
<script src="../ajax/employee.js"></script>
<script src="js/alertify/alertify.min.js"></script>

<script>
$(document).ready(function() {
	//add new employee and update start
	$('#addNewEmp').removeClass('hideContentAi');
	
    $('#newEmployeeForm').submit(function() {
    	$("#addNewEmp").addClass('hideContentAi');
    	$('#updateNewEmp').removeClass('hideContentAi');
    	return false
    });

    $('#updateEmployeeForm').submit(function() {
    	$("#updateNewEmp").addClass('hideContentAi');
    	$('#addNewEmp').removeClass('hideContentAi');
    	return false
    });    
	//add new employee and update icon end
		
	//employee name
	$('#empName').keyup(function() {
		$('#empNameWhileTyping').text($('#empName').val());	
	});

	//employee gender
	$('#empGender').change(function() {
		$('#empGenderWhileTyping').text($('#empGender').val());	
	});	

	//employee Religion
	$('#empReligion').change(function() {
		$('#empReligionWhileTyping').text($('#empReligion').val());	
	});	

	//employee Nationality
	$('#empNationality').change(function() {
		$('#empNationalityWhileTyping').text($('#empNationality').val());	
	});

	//employee marital Status
	$('#maritalStatus').change(function() {
		$('#maritalStatusWhileTyping').text($('#maritalStatus').val());	
	});		

	//employee Phone number
	$('#phoneNumber').keyup(function() {
		$('#phoneNumberWhileTyping').text($('#phoneNumber').val());	
	});	

	//employee position
	$('#position').change(function() {
		$('#positionWhileTyping').text($('#position').val());	
	});	
	
	//popover
    $('[data-toggle="popover"]').popover();    

	//profile image change icon start
	$("#profilePictureChangeSign").mouseover(function() {
		$('#profilePictureChangeSign').removeClass('hideContentAi');
	});
		
	$("#profilePictureChangeUpdate").hover(function() {
		$('#profilePictureChangeSign').removeClass('hideContentAi');
	},function() {
		$('#profilePictureChangeSign').addClass('hideContentAi');
	});

	$("#profilePictureChangeModal").mouseover(function() {
		$('#profilePictureChangeSign').addClass('hideContentAi');
	});	
	//profile image change icon end
	
	//datepicker start
	var gregorianCalendar = $.calendars.instance('gregorian');
	var islamicCalendar = $.calendars.instance('islamic');
	//datepicker start
	
	//add new start
	//Birth date start
	//Gregorian datepicker start
	$('#birthDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			$('#birthDateGWhileTyping').text($('#birthDateG').val());
			var gregorianDateFromtextBox = $('#birthDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>			
			$('#birthDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#birthDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			$('#birthDateGWhileTyping').text($('#birthDateH').val());
			var islamicDateFromtextBox = $('#birthDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#birthDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Birth date end

	//License issue date start
	//Gregorian datepicker start
	$('#licenseIssueDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#licenseIssueDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#licenseIssueDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#licenseIssueDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#licenseIssueDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#licenseIssueDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//License issue date end

	//License expiry date start
	//Gregorian datepicker start
	$('#licenseExpiryDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#licenseExpiryDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#licenseExpiryDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#licenseExpiryDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#licenseExpiryDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#licenseExpiryDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//License expiry date end	

	//Current contract date start
	//Gregorian datepicker start
	$('#currentContractDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#currentContractDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#currentContractDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#currentContractDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#currentContractDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#currentContractDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Current contract date end	

	//Contract expiry date start
	//Gregorian datepicker start
	$('#contractExpiryDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#contractExpiryDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#contractExpiryDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#contractExpiryDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#contractExpiryDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#contractExpiryDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Contract expiry date end

	//Entry date start
	//Gregorian datepicker start
	$('#entryDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#entryDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#entryDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#entryDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#entryDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#entryDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Entry date end

	//passport Expiry Date start
	//Gregorian datepicker start
	$('#passportExpiryDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#passportExpiryDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#passportExpiryDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#passportExpiryDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#passportExpiryDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#passportExpiryDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//passport Expiry Date end

	//passport Issue Date start
	//Gregorian datepicker start
	$('#passportIssuedDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#passportIssuedDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#passportIssuedDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#passportIssuedDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#passportIssuedDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#passportIssuedDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//passport Issue Date end

	//iqama Expiry Date start
	//Gregorian datepicker start
	$('#iqamaExpiryDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#iqamaExpiryDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#iqamaExpiryDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#iqamaExpiryDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#iqamaExpiryDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#iqamaExpiryDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//iqama Expiry Date end	

	//atm Issued Date start
	//Gregorian datepicker start
	$('#atmIssuedDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//atm Issued Date end	

	//atm Expiry Date start
	//Gregorian datepicker start
	$('#atmExpirydateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//atm Expiry Date end	

	//health Issued Date start
	//Gregorian datepicker start
	$('#healthIssuedDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//health Issued Date end	

	//health Expiry Date start
	//Gregorian datepicker start
	$('#healthExpiryDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//health Expiry Date end
	//add new end		

	//update start
	//Birth date start
	//Gregorian datepicker start
	$('#birthDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#birthDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>			
			$('#birthDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#birthDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#birthDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#birthDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Birth date end

	//License issue date start
	//Gregorian datepicker start
	$('#licenseIssueDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#licenseIssueDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#licenseIssueDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#licenseIssueDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#licenseIssueDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#licenseIssueDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//License issue date end

	//License expiry date start
	//Gregorian datepicker start
	$('#licenseExpiryDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#licenseExpiryDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#licenseExpiryDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#licenseExpiryDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#licenseExpiryDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#licenseExpiryDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//License expiry date end	

	//Current contract date start
	//Gregorian datepicker start
	$('#currentContractDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#currentContractDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#currentContractDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#currentContractDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#currentContractDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#currentContractDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Current contract date end	

	//Contract expiry date start
	//Gregorian datepicker start
	$('#contractExpiryDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#contractExpiryDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#contractExpiryDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#contractExpiryDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#contractExpiryDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#contractExpiryDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Contract expiry date end

	//Entry date start
	//Gregorian datepicker start
	$('#entryDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#entryDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#entryDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#entryDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#entryDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#entryDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Entry date end

	//passport Expiry Date start
	//Gregorian datepicker start
	$('#passportExpiryDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#passportExpiryDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#passportExpiryDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#passportExpiryDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#passportExpiryDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#passportExpiryDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//passport Expiry Date end

	//passport Issue Date start
	//Gregorian datepicker start
	$('#passportIssuedDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#passportIssuedDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#passportIssuedDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#passportIssuedDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#passportIssuedDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#passportIssuedDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//passport Issue Date end

	//iqama Expiry Date start
	//Gregorian datepicker start
	$('#iqamaExpiryDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#iqamaExpiryDateGUpdate').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#iqamaExpiryDateHUpdate').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#iqamaExpiryDateHUpdate').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#iqamaExpiryDateHUpdate').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#iqamaExpiryDateGUpdate').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//iqama Expiry Date end	

	//atm Issued Date start
	//Gregorian datepicker start
	$('#atmIssuedDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//atm Issued Date end	

	//atm Expiry Date start
	//Gregorian datepicker start
	$('#atmExpirydateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//atm Expiry Date end	

	//health Issued Date start
	//Gregorian datepicker start
	$('#healthIssuedDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//health Issued Date end	

	//health Expiry Date start
	//Gregorian datepicker start
	$('#healthExpiryDateGUpdate').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//health Expiry Date end
	//update end	
	
} );
</script> 
</body>
</html>
