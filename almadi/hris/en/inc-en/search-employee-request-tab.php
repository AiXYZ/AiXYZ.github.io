<div id="employeeRequestModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" style="width: 900px; margin-left: -450px;">
  <div class="modal-header">
	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
	<h3 id="myModalLabel">Employee Request</h3>
  </div>
  <div class="modal-body" style="max-height: none;">
	<div class="row-fluid">
		<ul id="tabSearchRequest" class="nav nav-tabs">
		  <li class="active"><a href="#personalInformationSearchRequest" data-toggle="tab">Personal</a></li>
		  <li><a href="#contractInformationSearchRequest" data-toggle="tab">Contract</a></li>
		  <li><a href="#passportInformationSearchRequest" data-toggle="tab">Passport</a></li>
		  <li><a href="#iqamaInformationSearchRequest" data-toggle="tab">Iqama</a></li>
		  <li><a href="#molAndGgodiInformationSearchRequest" data-toggle="tab">MOL &#38; GOSI</a></li>
		  <li><a href="#bankInformationSearchRequest" data-toggle="tab">Bank</a></li>
		  <li><a href="#medicalInformationSearchRequest" data-toggle="tab">Medical</a></li>
		  <li><a href="#requestInformationSearchRequest" data-toggle="tab">Request</a></li>
		</ul>
		<div id="tabContentSearchRequest" class="tab-content">
		  <div class="tab-pane fade in active" id="personalInformationSearchRequest">
			<!-- Personal information start -->
			<div class="row-fluid">
				<div class="span3">
					<div class="row-fluid">
						<img src="../upload/emoloyee-picture/profile-picture-placeholder.jpg" width="190px" height="190px" style="border-radius: 50%;">	
					</div>
					<div class="row-fluid">
						<div class="clearfix"><br></div>
						<img src="test_page.php" style="max-width: 190px;">	
					</div>					
				</div>
				<div class="span9">
			        <div class="row-fluid">
			          <div class="span4">
			          	<strong>Employee ID</strong><br><span id="employeeIDSr"> </span> 						          
			          </div>
			          <div class="span4">
						<strong>Name</strong><br><span id="empNameSr"> </span>							          
			          </div>
			          <div class="span4">
						<strong>Birth date (G)</strong><br><span id="birthDateGSr">7/8/1990</span>								          
			          </div>
			        </div>
			        
			        <div class="row-fluid">
						<div class="span4">
							<strong>Birth date (H)</strong><br><span id="birthDateHSr">7/8/1450</span>	
						</div>
						<div class="span4">
							<strong>Age</strong><br><span id="empAgeSr">25</span>
						</div>
						<div class="span4">
							<strong>Gender</strong><br><span id="empGenderSr">Male</span>
						</div>							
			        </div>							        
			        
			        <div class="row-fluid">
						<div class="span4">
							<strong>Nationality</strong><br><span id="empNationalitySr">Indian</span>
						</div>
						<div class="span4">	
							<strong>Religion</strong><br><span id="empReligionSr">Islam</span>
						</div>
						<div class="span4">
							<strong>Marital status</strong><br><span id="maritalStatusSr">Single</span>
						</div>																			        										
			        </div>								        
			        
			        <div class="row-fluid">
						<div class="span4">
							<strong>Phone number</strong><br><span id="phoneNumberSr">05946596596</span>	
						</div>
						<div class="span4">
							<strong>Driver's license</strong><br><span id="driversLicenseSr">134511541</span>	
						</div>	
						<div class="span4">
							<strong>Type of license</strong><br><span id="typeOfLicenseSr">48543</span>	
						</div>														        
			        </div>						
		
			        <div class="row-fluid">
						<div class="span4">
							<strong>License issue date (G)</strong><br><span id="licenseIssueDateGSr">6/7/2016</span>	
						</div>
						<div class="span4">
							<strong>License issue date (H)</strong><br><span id="licenseIssueDateGSr">6/7/1416</span>	
						</div>								        
						<div class="span4">
							<strong>License expiry date (G)</strong><br><span id="licenseExpiryDateGSr">6/7/2017</span>	
						</div>
			        </div>						
		
			        <div class="row-fluid">
						<div class="span4">	
							<strong>License expiry date (H)</strong><br><span id="licenseExpiryDateGSr">6/7/1417</span>
						</div>
						<div class="span4">	
							<strong>Visa number</strong><br><span id="visaNumberSr">46546034654</span>
						</div>	
						<div class="span4">
							<strong>Name of agency</strong><br><span id="nameOfAgencySr">AlSofi</span>
						</div>															        
			        </div>						
				</div>										
			</div>			
			<!-- Personal information end -->
		  </div>
		  <div class="tab-pane fade" id="contractInformationSearchRequest">
			<!-- Contract information start -->
	        <div class="row-fluid">
				<div class="span3">
					<strong>Sponsor</strong><br><span id="sponsorSr">  شركة عبدالله إبراهيم الصائغ  </span>	
				</div>
				<div class="span3">
					<strong>Project name</strong><br><span id="projectNameSr">  قنوات الري  </span>	
				</div>
				<div class="span3">	
					<strong>PID - account name</strong><br><span id="pidAccountNameSr"> 1 - شركة عبدالله إبراهيم الصائغ </span>
				</div>
				<div class="span3">	
					<strong>Type of visa</strong><br><span id="typeOfVisaSr"> طرق  </span>
				</div>												          
	        </div>						

	        <div class="row-fluid">
				<div class="span3">	
					<strong>Employement status</strong><br><span id="employementStatusSr">  أجازة  </span>
				</div>
				<div class="span3">	
					<strong>Position</strong><br><span id="positionSr">  الشئون القانونية  </span>
				</div>
	        	<div class="span3">	
					<strong>Basic salary</strong><br><span id="basicSalarySr">2500</span>
				</div>
				<div class="span3">
					<strong>Other allowance</strong><br><span id="otherAllowanceSr">500</span>
				</div>					
	        </div>					

	        <div class="row-fluid">
				<div class="span3">
					<strong>Total salary</strong><br><span id="totalSalarySr">2500</span>
				</div>					
				<div class="span3">	
					<strong>Current contract date (G)</strong><br><span id="currentContractDateGSr">20/8/2017</span>
				</div>
				<div class="span3">	
					<strong>Contract expiry date (G)</strong><br><span id="contractExpiryDateGSr">20/8/2017</span>
				</div>
				<div class="span3">	
					<strong>Entry date (G)</strong><br><span id="entryDateGSr">20/8/2017</span>
				</div>
	        </div>						

	        <div class="row-fluid">
	        	<div class="span3">	
					<strong>Current contract date (H)</strong><br><span id="currentContractDateHSr">20/8/1417</span>
				</div>
				<div class="span3">
					<strong>Contract expiry date (H)</strong><br><span id="contractExpiryDateHSr">20/8/1417</span>
				</div>
				<div class="span3">	
					<strong>Entry date (H)</strong><br><span id="entryDateHSr">20/8/1417</span>
				</div>
	        	<div class="span3">	
					<strong>Contract years</strong><br><span id="contractYearsSr">2</span>
				</div>					
	        </div>						
			<!-- Contract information end -->
		  </div>
		  <div class="tab-pane fade" id="passportInformationSearchRequest">
			<!-- Passport information start -->
	        <div class="row-fluid">
				<div class="span3">
					<strong>Passport number</strong><br><span id="passportNumberSr">12413241</span>	
				</div>
				<div class="span3">	
					<strong>Entry number</strong><br><span id="entryNumberSr">456011354</span>
				</div>
				<div class="span3">	
					<strong>Expiry date (G)</strong><br><span id="passportExpiryDateGSr">5/8/2021</span>
				</div>
				<div class="span3">	
					<strong>Expiry date (H)</strong><br><span id="passportExpiryDateHSr">5/8/1421</span>
				</div>												          
	        </div>						

	        <div class="row-fluid">
				<div class="span3">
					<strong>Issue date (G)</strong><br><span id="passportIssuedDateGSr">5/8/2015</span>
				</div>
				<div class="span3">
					<strong>Issue date (H)</strong><br><span id="passportIssuedDateHSr">5/8/1415</span>
				</div>	
				<div class="span3">	
					<strong>Is passport in file?</strong><br><span id="isPassportInFileSr">No</span>
				</div>					
	        </div>	
			<!-- Passport information end -->
		  </div>		  
		  <div class="tab-pane fade" id="iqamaInformationSearchRequest">
			<!-- Iqama information start -->
	        <div class="row-fluid">
				<div class="span3">
					<strong>Iqama number</strong><br><span id="iqamaNumberSr">46853168</span>
				</div>
				<div class="span3">	
					<strong>Expiry date (G)</strong><br><span id="iqamaExpiryDateGSr">20/8/2018</span>
				</div>
				<div class="span3">	
					<strong>Expiry date (H)</strong><br><span id="iqamaExpiryDateHSr">20/8/1418</span>
				</div>
	        </div>			
			<!-- Iqama information end -->
		  </div>		  
		  <div class="tab-pane fade" id="molAndGgodiInformationSearchRequest">
			<!-- Ministry of labor and GOSI information start -->
	        <div class="row-fluid">
				<div class="span3">
					<strong>MOL ID number</strong><br><span id="molIdNumberSr">5465878134</span>
				</div>
				<div class="span3">	
					<strong>MOL company ID number</strong><br><span id="molCompanyIdNumberSr">893214343</span>
				</div>	
				<div class="span3">
					<strong>GOSI employee number</strong><br><span id="gosiEmployeeNumberSr">6357341</span>	
				</div>	
	        </div>			
			<!-- Ministry of labor and GOSI information end -->
		  </div>		  
		  <div class="tab-pane fade" id="bankInformationSearchRequest">
			<!-- Bank information start -->
	        <div class="row-fluid">
				<div class="span3">
					<strong>ATM number</strong><br><span id="atmNumberSr">5768465743</span>	
				</div>
				<div class="span3">	
					<strong>ATM status</strong><br><span id="atmStatusSr">  نشط  </span>
				</div>																
				<div class="span3">	
					<strong>Bank status</strong><br><span id="bankStatusSr">   نشر   </span>
				</div>
				<div class="span3">	
					<strong>Issued date (G)</strong><br><span id="atmIssuedDateGSr">7/8/2016</span>
				</div>					
	        </div>								        
	        <div class="row-fluid">
				<div class="span3">	
					<strong>Expiry date (G)</strong><br><span id="atmExpirydateGSr">7/8/2018</span>
				</div>
	        </div>					
			<!-- Bank information end -->
		  </div>		  
		  <div class="tab-pane fade" id="medicalInformationSearchRequest">
			<!-- Medical information start -->
	        <div class="row-fluid">
				<div class="span3">	
					<strong>Health insurance number</strong><br><span id="healthInsuranceNumberSr">75926113165</span>
				</div>
				<div class="span3">	
					<strong>Health insurance class</strong><br><span id="healthInsuranceClassSr">A</span>
				</div>																
				<div class="span3">
					<strong>Issued date (G)</strong><br><span id="healthIssuedDateGSr">20/4/2015</span>
				</div>
				<div class="span3">
					<strong>Expiry date (G)</strong><br><span id="healthExpiryDateGSr">20/4/2017</span>
				</div>					
	        </div>			
			<!-- Medical information end -->
		  </div>		  
		  <div class="tab-pane fade" id="requestInformationSearchRequest">
			<!-- Request information start -->
			<form class="form-horizontal">
				<table id="employeeRequestTable" class="table table-striped table-bordered" style="width: 100%;">
					<thead>
						<tr>
							<th class="tdTextInCenterAi">Date</th>
							<th class="tdTextInCenterAi">Encoder</th>
							<th class="tdTextInCenterAi">Status</th>
							<th class="tdTextInCenterAi">Request type</th>
						</tr>
					</thead>
					<tbody>
						<tr style="cursor: pointer;">
							<td class="tdTextInCenterAi">7/8/2016</td>
							<td class="tdTextInCenterAi">Ali Mohammed</td>
							<td class="tdTextInCenterAi">HR</td>
							<td class="tdTextInCenterAi">Health Insurance</td>
						</tr>
						<tr style="cursor: pointer;">
							<td class="tdTextInCenterAi">6/8/2016</td>
							<td class="tdTextInCenterAi">ElRefai</td>
							<td class="tdTextInCenterAi">FD</td>
							<td class="tdTextInCenterAi">Bank</td>
						</tr>
						<tr style="cursor: pointer;">
							<td class="tdTextInCenterAi">7/8/2016</td>
							<td class="tdTextInCenterAi">Tariq</td>
							<td class="tdTextInCenterAi">Closed</td>
							<td class="tdTextInCenterAi">Vacation</td>
						</tr>													        
					</tbody>
				</table>
			</form>									
			<!-- Request information end -->
		  </div>		  
		</div>	
	</div>
  </div>
  <div class="modal-footer">
	<!-- employee previous and next start -->									
	  <div class="btn-group pull-left">
	    <a class="btn" href="javascript:void(0)">&larr; Previous</a>
	    <a class="btn" href="javascript:void(0)">Next &rarr;</a>
	  </div>
	<!-- employee previous and next end -->	
	<button class="btn btn-info">Update</button>	
  </div>
</div>