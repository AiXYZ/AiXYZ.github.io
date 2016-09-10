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
							
								<!-- --------------------------------------------------------------------------------------------------------------------- -->
								
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
								
								<!-- --------------------------------------------------------------------------------------------------------------------- -->
							
								<!-- employee profile start -->
								<div id="employeeProfileForm" class="hideContentAi">
									<div id="left_panel_information"></div>
								    <div class="row-fluid">
								      <!-- employee picture, attachment and quick info start -->
								      <div class="span3">
										<div class="thumbnail" style="padding-right: 0px;padding-left: 0px;">
											<img src="" id="profilePictureChange" width="220px" height="220px" style="border-radius: 50%;">
											<span id="profilePictureChangeSign" class="hideContentAi"><a href="#profilePictureChangeModal" role="button" class="btn" data-toggle="modal"><i class="icon-camera" style="font-size: 40px;"></i></a></span>
											<h3 class="tdTextInCenterAi profilePictureChangeClick"></h3>
											<p class="tdTextInCenterAi"><strong class="emp_position"></strong></p>
											<p class="tdTextInCenterAi"><strong><span id="ed_length_of_service"></span></strong></p>
											<img id="employee_barcode" />
											<br/>
											<!-- employee attachment and quick info start -->
											<table class="table table-bordered profileIconTable" style="border-radius: 0px;border-right: 0px;">
											    <tbody>
											        <tr>
											            <td class="tdTextInCenterAi" style="border-radius: 0px;border-left: 0px;"><i class="icon-calendar" style="font-size: 30px;"></i><br><span id="emp_birth_date"></span></td>
											            <td class="tdTextInCenterAi"><i class="icon-user" style="font-size: 30px;"></i><br><span id="emp_gender"></span></td>
											            <td class="tdTextInCenterAi"><i class="icon-globe" style="font-size: 30px;"></i><br><span id="emp_nationality"></span></td>
											        </tr>
											        <tr>
											            <td style="border-left: 0px;" class="tdTextInCenterAi"><i class="icon-group" style="font-size: 30px;"></i><br><span id="emp_religion"></span></td>
											            <td class="tdTextInCenterAi"><i class="icon-heart" style="font-size: 30px;"></i><br><span id="emp_marital_status"></span></td>
											            <td class="tdTextInCenterAi"><i class="icon-phone-sign" style="font-size: 30px;"></i><br><span id="emp_phone_number"></span></td>
											        </tr>
											        <tr>
											            <td style="border-left: 0px;" class="tdTextInCenterAi" colspan="3">&nbsp;</td>
											        </tr>											        
											        <tr id="passportIqamaDL">
											        <!-- Display the Passport, Iqama and Driver License Images -->
											        	<td style="border-left: 0px;" class="tdTextInCenterAi"><img id="passport_picture" style="width: 65px;height: 65px;"/><br>Passport</td>
											            <td class="tdTextInCenterAi"><img id="iqama_picture" style="width: 65px;height: 65px;"/><br>Iqama</td>
											            <td class="tdTextInCenterAi"><img id="license_picture" style="width: 65px;height: 65px;"/><br>DL</td>
											        </tr>
											        <tr id="visaStampVisaID">
											        <!-- Display the Visa, Stamp Visa and ID Images -->
											        	<td style="border-left: 0px;" class="tdTextInCenterAi"><img id="passport_visa_picture" style="width: 65px;height: 65px;"/><br>Visa</span></td>
											            <td class="tdTextInCenterAi"><img id="passport_stamp_visa_picture" style="width: 65px;height: 65px;"/><br>S.Visa</td>
											            <td class="tdTextInCenterAi"><img id="company_id_picture" style="width: 65px;height: 65px;"/><br>ID</td>
											        </tr>
											        <tr style="border-left: 0px;">
											            <td style="border-left: 0px; padding: 0px;" colspan="3" cellpadding="0" cellspacing="0">
											            	<table border="0" width="100%" id="employee_history_remarks">
											            	</table>
											            </td>
											        </tr>
											        <tr> 
											            <td style="border-left: 0px;" class="tdTextInCenterAi" colspan="3"><button class="btn btn-mini" type="button">Add history</button></td>
											        </tr>
											        <tr>
											            <td style="border-left: 0px;" class="tdTextInCenterAi" colspan="3">
															<select id="requestHistory">
																<option value="vacationRequest">Vacation</option>
																<option value="transferRequest">Transfer</option>
																<option value="cashAdvanceRequest">Cash Advance</option>
																<option value="generalRequestRequest">General request</option>
																<option value="joiningFromVacationRequest">Joining From Vacation</option>
																<option value="transferredEmployeeRequest">Transferred Employee</option>
																<option value="reNewIqamaRequest">Re-new Iqama</option>
																<option value="familyVisitRequest">Family Visit</option>
																<option style="display:none;" selected>Request History</option>
															</select>									            
											            </td>
											        </tr>									        									        									        									        									        									        										        											        											        
											    </tbody>
											</table>
											<!-- employee attachment and quick info end -->
											
											<!-- employee previous and next start -->									
											<ul class="pager">
											  <li class="previous">
											    <a href="#">&larr; Previous</a>
											  </li>
											  <li class="next">
											    <a href="#">Next &rarr;</a>
											  </li>
											</ul>																		
											<!-- employee previous and next end -->									
										</div>								      
								      </div>
								      <!-- employee picture, attachedment and quick info end -->
								      
								      <!-- --------------------------------------------------------------------------------------------------------------------- -->
								      
								      <!-- employee form start -->
								      <div class="span9">
								      
								      	<!-- --------------------------------------------------------------------------------------------------------------------- -->
								      	
						      			<div class="widget-content">
						      				<div id="personal_information"></div>
							      		</div>		
							      							      
										<div class="clearfix"><br></div>
										
										<!-- --------------------------------------------------------------------------------------------------------------------- -->
	
										<div class="widget-content">
											<div id="contract_information"></div>
										</div>
										
										<div class="clearfix"><br></div>
										
										<!-- --------------------------------------------------------------------------------------------------------------------- -->
										
										<div class="widget-content">
											<div id="salary_history"></div>
										</div>
										
										<div class="clearfix"><br></div>
										
										<!-- --------------------------------------------------------------------------------------------------------------------- -->
										
										<div class="widget-content">
											<div id="passport_information"></div>
										</div>										
										
										<div class="clearfix"><br></div>
										
										<!-- --------------------------------------------------------------------------------------------------------------------- -->
										
										<div class="widget-content">
											<div id="iqama_information"></div>
								        </div>
								        
								        <div class="clearfix"><br></div>
								        
								        <!-- --------------------------------------------------------------------------------------------------------------------- -->
								        
								        <div class="widget-content">
								        	<div id="mol_gosi_information"></div>
								        </div>
								        
								        <div class="clearfix"><br></div>
								        
								        <!-- --------------------------------------------------------------------------------------------------------------------- -->
								        
								        <div class="widget-content">
								        	<div id="bank_information"></div>
								        </div>
								        
								        <div class="clearfix"><br></div>
								        
								        <!-- --------------------------------------------------------------------------------------------------------------------- -->
								        
								        <div class="widget-content">
								        	<div id="medical_information"></div>
										</div>
										
										<div class="clearfix"><br></div>
										
										<!-- --------------------------------------------------------------------------------------------------------------------- -->
										
										<div class="widget-content">
											<div id="file_attachments_upload"></div>
								        </div>
								        
								        <div class="clearfix"><br></div>
								        
								        <!-- --------------------------------------------------------------------------------------------------------------------- -->
								        
								        <div class="row-fluid">
											<div class="control-group pull-right">											
												<div class="controls">
												  <button type="button" id="GoBackToEmployeeListTable" class="btn">Go Back</button>
												  <button type="button" id="UpdateEmployee" class="btn btn-info">Update</button>															
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

// 	$('#employeeListTable').load('test.php');

	var dataTable = $('#listOfEmployee').DataTable( {
		"fnRowCallback": function(nRow) {
			  nRow.className = "clickableCursor";
			  return nRow;
		},
		"processing": true,
		"serverSide": true,	
		"ajax": "../ajax/controller/employee_list.php",
		"order": [[ 0, "asc" ]],
		"columnDefs": [
			{ className: "dt-center", "targets": [0,1,2,3,4,5,6] }
		]
	});

	//datepicker start
	var gregorianCalendar = $.calendars.instance('gregorian');
	var islamicCalendar = $.calendars.instance('islamic');
	//datepicker start
	
	//Birth date start
	//Gregorian datepicker start
	$('#birthDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
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