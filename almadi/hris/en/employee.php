<?php 
ob_start();
session_start();

include_once '../../inc/config.php';
include_once '../../inc/functions.php';

// echo $_SESSION['login_user'];
$department = getDeptAccess($_SESSION["login_user"]);
$_SESSION['type_department'] = $department['department'];
$_SESSION['type_applications'] = $department['applications'];
//echo $department['applications'];

if(!isset($_SESSION['login_user'])){
	header("Location: /sgc/index.php");
}
?>
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
	<style>.popover{max-width: 700px !important;}.popover-inner {width: 730px  !important;}</style>
	<style>#profilePictureChangeSign {opacity: 0.6;top:165px;left:37%;position: absolute;}.thumbnail{position:relative;}</style>
	<style>.profileIconTable tbody tr:hover td, .profileIconTable tbody tr:hover th {background-color: #fff;}</style>
	<!-- datepicker -->
	<link href="css/datepicker/jquery.calendars.picker.css" rel="stylesheet">
	<!-- alertifyjs notifier -->
 	<link href="css/alertify/alertify.core.css" rel="stylesheet">
    <link href="css/alertify/alertify.default.css" rel="stylesheet" id = "toggleCSS"> 
	
    <script>
    <?php include_once("../inc/google-analytics.php") ?>
    </script>	
    
    <script type="text/javascript">
		var typeDepartment="<?php echo $_SESSION['type_department']; ?>";
		var typeApplications="<?php echo $_SESSION['type_applications']; ?>";
		//console.log(typeDepartment);
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
      		<div class="widget ">
      			<div class="widget-header">
      				<i class="icon-list-alt"></i>
      				<h3>Employee list</h3>
  				</div> <!-- /widget-header -->
				<div class="widget-content">
					<div class="tabbable">
						<!-- list of employee starts -->
						<div class="row-fluid">
							<div class="span12">
								<!-- employee list start -->
								<div id="employeeListTable"  class="hideContentAi">
									<form class="form-horizontal">
										<table id="listOfEmployee"  class="table table-striped table-bordered">
											<thead>
									            <tr>
									                <th class="tdTextInCenterAi">Emp.ID</th>
									                <th class="tdTextInCenterAi">Name</th>
									                <th class="tdTextInCenterAi">Iqama</th>
									                <th class="tdTextInCenterAi">Project</th>
									                <th class="tdTextInCenterAi">Nationality</th>
									                <th class="tdTextInCenterAi">Status</th>
									                <th class="tdTextInCenterAi">Position</th>
									            </tr>
									        </thead>
									        <tbody>
									        	
									        </tbody>
										</table>	
									</form>
								</div>
								<!-- employee list end --> 
							
								<!-- employee profile start -->
								<div id="employeeProfileForm" class="hideContentAi">
								    <!-- search employee, go back and submit start -->
								    <div class="row-fluid">
								      <div class="span3">
										<input id="searchEmployeeIdInProfile" type="text" class="search-query input-block-level" placeholder="Search employee ID">
								      </div>
								      <div class="span9">
										<div class="btn-group pull-left">
										  <button type="button" id="previousEmployeeButton" class="btn">&larr; Previous</button>
										  <button type="button" id="nextEmployeeButton" class="btn">Next &rarr;</button>
										</div>								      
										<div class="control-group pull-right">											
											<div class="controls">
											  <button type="button" id="GoBackToEmployeeListTableTop" class="btn">Go Back</button>
											  <button type="button" id="UpdateEmployeeTop" class="btn btn-info">Submit</button>															
											</div> <!-- /controls -->				
										</div> <!-- /control-group -->					
								      </div>
									  <div class="clearfix"></div>
								    </div>
									<!-- search employee, go back and submit end -->								
								    <div class="row-fluid">
									  <!-- employee picture, attachedment and quick info start -->
								      <div class="span3">
								      		<!-- Profile picture and quick information -->	
								      		<div id="left_panel_information"></div>
								      </div>
								      <!-- employee picture, attachedment and quick info end -->
								      
								      <!-- employee form start -->
								      <div class="span9">
						      			<div class="widget-content">
											<!-- personal information -->
											<div id="personal_information"></div>
							      		</div>		
							      							      
										<div class="clearfix"><br></div>
	
										<div class="widget-content">
											<!-- contract info -->
											<div id="contract_information"></div>
										</div>
										
										<div class="clearfix"><br></div>
										
										<div class="widget-content">
											<!-- salary history -->
											<div id="salary_history"></div>
										</div>
										
										<div class="clearfix"><br></div>
										
										<div class="widget-content">
											<!-- passport info -->
											<div id="passport_information"></div>
										</div>										
										
										<div class="clearfix"><br></div>
										
										<div class="widget-content">
											<!-- iqama info -->
											<div id="iqama_information"></div>
								        </div>
								        
								        <div class="clearfix"><br></div>
								        
								        <div class="widget-content">
											<!-- mol and gosi -->
											<div id="mol_gosi_information"></div>
								        </div>
								        
								        <div class="clearfix"><br></div>
								        
								        <div class="widget-content">
											<!-- bank info -->
											<div id="bank_information"></div>
								        </div>
								        
								        <div class="clearfix"><br></div>
								        
								        <div class="widget-content">
											<!-- medical info -->
											<div id="medical_information"></div>
										</div>
										
										<div class="clearfix"><br></div>
										
										<div class="widget-content">
											<!-- upload file -->
											<div id="file_attachments_upload"></div>
								        </div>
								        
								        <div class="clearfix"><br></div>
								        
									
										<table class="table table-striped table-bordered">
											<thead>
												<tr>
													<th class="tdTextInCenterAi">Description</th>
													<th class="tdTextInCenterAi">Status</th>
													<th class="tdTextInCenterAi">Elapsed</th>
													<th class="tdTextInCenterAi">Updated by</th>
													<th class="tdTextInCenterAi">Updated Date</th>
													<th class="tdTextInCenterAi">Attachment</th>
													<th class="tdTextInCenterAi">&nbsp;</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="tdTextInCenterAi">Money Transfer</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">noneyfile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>
												<tr>
													<td class="tdTextInCenterAi">Contract</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">contractfile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>

												<tr>
													<td class="tdTextInCenterAi">Visa</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">visafile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>
												<tr>
													<td class="tdTextInCenterAi">Passport</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">passportfile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>														
												<tr>
													<td class="tdTextInCenterAi">Photo</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">photofile.png</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>														
												<tr>
													<td class="tdTextInCenterAi">Medical Check-Up</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">5</td>
													<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">checkupfile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>														
												<tr>
													<td class="tdTextInCenterAi">Medical Insurance</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">7</td>
													<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">insurancefile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>														
												<tr>
													<td class="tdTextInCenterAi">Reporting Date</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">reportinfile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>														
												<tr>
													<td class="tdTextInCenterAi">Work Permit</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">permitfile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>														
												<tr>
													<td class="tdTextInCenterAi">Iqama</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">iqamafile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>														
												<tr>
													<td class="tdTextInCenterAi">Bank Account</td>
													<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
													<td class="tdTextInCenterAi">0</td>
													<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
													<td class="tdTextInCenterAi">2/8/2015</td>
													<td class="tdTextInCenterAi">acfile.pdf</td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-pencil"></i></td>
												</tr>
												<tr>
													<td class="tdTextInCenterAi">GOSI</td>
													<td class="tdTextInCenterAi"><input type="checkbox"></td>
													<td class="tdTextInCenterAi">34</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-ok"></i></td>
												</tr>
												<!-- Certificate - only for engineer start -->
												<tr>
													<td class="tdTextInCenterAi">Certificate</td>
													<td class="tdTextInCenterAi"><input type="checkbox"></td>
													<td class="tdTextInCenterAi">34</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-ok"></i></td>
												</tr>
												<!-- Certificate - only for engineer end -->
												<!-- DL From Country, DL, Translated DL - only for driver start -->											
												<tr>
													<td class="tdTextInCenterAi">DL From Country</td>
													<td class="tdTextInCenterAi"><input type="checkbox"></td>
													<td class="tdTextInCenterAi">34</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-ok"></i></td>
												</tr>												
												<tr>
													<td class="tdTextInCenterAi">DL</td>
													<td class="tdTextInCenterAi"><input type="checkbox"></td>
													<td class="tdTextInCenterAi">34</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-ok"></i></td>
												</tr>												
												<tr>
													<td class="tdTextInCenterAi">Translated DL</td>
													<td class="tdTextInCenterAi"><input type="checkbox"></td>
													<td class="tdTextInCenterAi">34</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi">-</td>
													<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
													<td class="tdTextInCenterAi clickableCursor"><i class="icon-ok"></i></td>
												</tr>
												<!-- DL From Country, DL, Translated DL - only for driver end -->											        											        											        
											</tbody>
										</table>
							        
								        
								        <div class="clearfix"><br></div>								        
								        
								        <div class="row-fluid">
											<div class="control-group pull-right">											
												<div class="controls">
												  <button type="button" id="GoBackToEmployeeListTable" class="btn">Go Back</button>
												  <button type="button" id="UpdateEmployee" class="btn btn-info">Submit</button>															
												</div> <!-- /controls -->				
											</div> <!-- /control-group -->
								        </div>								        						
								      </div>
								      <!-- employee form end -->							      
								    </div>
							    </div>								
							    <!-- employee profile end -->
							</div>
						</div>							
						<!-- list of employee ends -->
					</div>
				</div> <!-- /widget-content -->
			</div> <!-- /widget -->
	    </div> <!-- /span12 -->
	    <!-- employee list end -->
	    
		<!-- Modal start -->			
		<!-- search employee request start -->
		<?php include_once("inc-en/search-employee-request-tab.php") ?>										
		<!-- search employee request end -->		
			    
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

<!-- This is for the Employee List Ajax -->
<script src="../ajax/employee.js"></script>
<script src="js/alertify/alertify.min.js"></script>

<script src="../../js/moment.js"></script>

<script src="../ajax/search-employee-request.js"></script>

<script>
$(document).ready(function() {

	//datepicker start
	var gregorianCalendar = $.calendars.instance('gregorian');
	var islamicCalendar = $.calendars.instance('islamic');
	//datepicker start
	



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

	//Salary history Date start
	//Gregorian datepicker start
	$('.salaryHistoryEffectivityDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//Gregorian datepicker end
	//Salary history Date end				

} );
</script> 

<script src="../../js/change_url.js" type="text/javascript"></script>

</body>
</html>