<?php 
ob_start();
session_start();

include_once '../../inc/config.php';
include_once '../../inc/functions.php';

// echo $_SESSION['login_user'];

// echo getRequestAccess($_SESSION['login_user']);
$department = getDeptAccess($_SESSION["login_user"]);
$_SESSION['type_department'] = $department['department']; 
$_SESSION['type_applications'] = $department['applications'];

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
	<style>.noHoverInTable tbody tr:hover td, .noHoverInTable tbody tr:hover th {background-color: #fff;}</style>
    <link href="css/wysi/bootstrap-wysihtml5.css" rel="stylesheet">
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
      	<div class="span12">
			<!--add new start -->
      		<div class="widget">
      			<div class="widget-header">
      				<i class="icon-file"></i>
      				<h3>New request</h3>
  				</div> <!-- /widget-header -->
				<div class="widget-content">				
					<!-- request starts -->
					<div class="row-fluid">
						<div class="span12">							
							<!-- request body start -->
							<div class="row-fluid">
							  <!-- request menu start -->
							  <div class="span2">
								<ul class="nav nav-tabs nav-stacked">
								  <li id="vacationRequestNav"><a href="javascript:void(0)">Vacation <span id="vr_grand_total"></span> </a></li>
								  <li id="exitRequestNav"><a href="javascript:void(0)">Exit <span id="er_grand_total"></span> </a></li>
								  <li id="transferRequestNav"><a href="javascript:void(0)">Transfer <span id="transfer_grand_total"></span> </a></li>
								  <li id="bankRequestNav"><a href="javascript:void(0)">Bank <span id="br_grand_total"></span> </a></li>
								  <li id="cashAdvanceRequestNav"><a href="javascript:void(0)">Cash advance <span id="car_grand_total"></span> </a></li>
								  <li id="salaryIncreaseRequestNav"><a href="javascript:void(0)">Salary increase <span id="sir_grand_total"></span> </a></li>
								  <li id="healthInsuranceRequestNav"><a href="javascript:void(0)">Health insurance <span id="hir_grand_total"></span> </a></li>
								  <li id="generalRequestNav"><a href="javascript:void(0)">General <span id="gr_grand_total"></span> </a></li>
								  <li id="newEmployeeRequestNav"><a href="javascript:void(0)">New employee <span id="ne_grand_total"></span> </a></li>
								  <li id="fromVacationRequestNav"><a href="javascript:void(0)">From vacation <span id="FromV_Hr_total_All"></span></a></li>
								  <li id="transferredRequestNav"><a href="javascript:void(0)">Transferred <span id="transferred_grand_total"></span></a></li>
								  <li id="reNewIqamaRequestNav"><a href="javascript:void(0)">Re-new iqama <span id="ri_grand_total"></span> </a></li>
								  <li id="extendOrReEntryRequestNav"><a href="javascript:void(0)">Extend/Re-entry <span id="EnR_Hr_total_All"></span></a></li>
								  <li id="familyVisaRequestNav"><a href="javascript:void(0)">Family visit <span id="fv_Hr_total_All"></span></a></li>
								  <li id="changeCareerRequestNav"><a href="javascript:void(0)">Change career <span id="cr_Hr_total_All"></span></a></li>
								  <li id="floatingRequestNav"><a href="javascript:void(0)">Floating <span id="fr_total_All"></span></a></li>
								</ul>
							  </div>
							  <!-- request menu end -->
							  
							  <!-- request table start -->
							  <div class="span10">
								<div class="row-fluid">
									<!-- vacation content start -->
									<div id="vacationRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/vacation-request-content.php") ?>						
									</div>
									<!-- vacation content end -->
									
									<!-- exit content start -->
									<div id="exitRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/exit-request-content.php") ?>						
									</div>
									<!-- exit content end -->
									
									<!-- transfer content start -->
									<div id="transferRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/transfer-request-content.php") ?>						
									</div>
									<!-- transfer content end -->	
									
									<!-- bank content start -->
									<div id="bankRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/bank-request-content.php") ?>						
									</div>
									<!-- bank content end -->
									
									<!-- cashAdvance content start -->
									<div id="cashAdvanceRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/cash-advance-request-content.php") ?>						
									</div>
									<!-- cashAdvance content end -->
									
									<!-- salaryIncrease content start -->
									<div id="salaryIncreaseRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/salary-increase-request-content.php") ?>						
									</div>
									<!-- salaryIncrease content end -->
									
									<!-- healthInsurance content start -->
									<div id="healthInsuranceRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/health-insurance-request-content.php") ?>						
									</div>
									<!-- healthInsurance content end -->
									
									<!-- general content start -->
									<div id="generalRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/general-request-content.php") ?>						
									</div>
									<!-- general content end -->
									
									<!-- newEmployee content start -->
									<div id="newEmployeeRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/new-employee-request-content.php") ?>						
									</div>
									<!-- newEmployee content end -->
									
									<!-- fromVacation content start -->
									<div id="fromVacationRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/from-vacation-request-content.php") ?>						
									</div>
									<!-- fromVacation content end -->
									
									<!-- transferred content start -->
									<div id="transferredRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/transferred-request-content.php") ?>						
									</div>
									<!-- transferred content end -->
									
									<!-- reNewIqama content start -->
									<div id="reNewIqamaRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/re-new-iqama-request-content.php") ?>						
									</div>
									<!-- reNewIqama content end -->
									
									<!-- extendOrReEntry content start -->
									<div id="extendOrReEntryRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/extend-or-re-entry-request-content.php") ?>						
									</div>
									<!-- extendOrReEntry content end -->
									
									<!-- familyVisa content start -->
									<div id="familyVisaRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/family-visa-request-content.php") ?>						
									</div>
									<!-- familyVisa content end -->
									
									<!-- changeCareer content start -->
									<div id="changeCareerRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/change-career-request-content.php") ?>						
									</div>
									<!-- changeCareer content end -->
									
									<!-- floating content start -->
									<div id="floatingRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/floating-request-content.php") ?>						
									</div>
									<!-- floating content end -->
								</div>
							  </div>
							  
							  <!-- request table end -->							      
							</div>
							<!-- request body end -->
						</div>
					</div>							
					<!-- request ends -->
				</div> <!-- /widget-content -->
			</div> <!-- /widget -->
			<!--add new end -->
			
	    </div> <!-- /span12 -->

		<!-- Modal start -->			
		<!-- modal for vaction Hr First message start -->
		<div id="messageInRequest" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" style="width: 700px; margin-left: -350px;">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			<h3 id="myModalLabel">Message</h3>
		  </div>
		  <div class="modal-body">
				<div class="widget-content">
					<div class="row-fluid">
						<p><strong>3744, Mohammed Ali Akhtar</strong> <span class="pull-right">7/8/2016, 9:38 AM</span></p>
						<hr>
						<p> تم تاجيل بناء على مدير المشروع لعدم وجود البديل </p>
						<p>Attachment: <a href="#" target="_blank">message.pdf</a></p>
					</div>						
				</div>		  
				<div class="row-fluid">
				  <div class="span12">
					<div class="control-group">											
						<label class="control-label" for="requestNewMessage">New message</label>
						<div class="controls">
							<textarea rows="3" class="input-block-level" id="requestNewMessage"></textarea>
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>																
				<div class="row-fluid">
				  <div class="span12">
					<div class="control-group">											
						<label class="control-label" for="requestNewMessageAttachment">Attachment</label>
						<div class="controls">
							<input type="file" id="requestNewMessageAttachment" accept=".pdf, .doc, .docx">
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>			  			
		  </div>
		  <div class="modal-footer">
			<button class="btn btn-info">Send</button>
		  </div>
		</div>
		<!-- modal for vaction Hr First message end -->

		<!-- modal for General Hr start -->
		<div id="genHrAssignFirst" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" style="width: 700px; margin-left: -350px;">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			<h3 id="myModalLabel">General Request HR Tab</h3>
		  </div>
		  <div class="modal-body">
				<div class="row-fluid">
				  <div class="span6">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignToFirst">Assign to</label>
						<div class="controls">
							<select class="input-block-level" id="genHrAssignToFirst">
								
							</select>							
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>		  		  
				<div class="row-fluid">
				  <div class="span12">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignNotesFirst">Notes</label>
						<div class="controls">
							<textarea rows="3" class="input-block-level" id="genHrAssignNotesFirst"></textarea>
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>																
				<div class="row-fluid">
				  <div class="span12">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignAttachmentFirst">Attachment</label>
						<div class="controls">
							<input type="file" id="genHrAssignAttachmentFirst" accept=".pdf, .doc, .docx">
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>			  			
		  </div>
		  <div class="modal-footer">
			<button id="assignGeneralRequestFirst" class="btn btn-info">Submit</button>
		  </div>
		</div>
		<!-- modal for General Hr end -->
		
		<!-- modal for General Assign to start -->
		<div id="genHrAssignSecond" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" style="width: 700px; margin-left: -350px;">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			<h3 id="myModalLabel">General Request Assigned To Tab</h3>
		  </div>
		  <div class="modal-body">
				<div class="row-fluid">
				  <div class="span6">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignToSecond">Assign to</label>
						<div class="controls">
							<select class="input-block-level" id="genHrAssignToSecond">
								
							</select>							
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>		  		  
				<div class="row-fluid">
				  <div class="span12">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignNotesSecond">Notes</label>
						<div class="controls">
							<textarea rows="3" class="input-block-level" id="genHrAssignNotesSecond"></textarea>
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>																
				<div class="row-fluid">
				  <div class="span12">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignAttachmentSecond">Attachment</label>
						<div class="controls">
							<input type="file" id="genHrAssignAttachmentSecond" accept=".pdf, .doc, .docx">
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>			  			
		  </div>
		  <div class="modal-footer">
			<button id="assignGeneralRequestSecond" class="btn btn-info">Submit</button>
		  </div>
		</div>
		<!-- modal for General Assign to end -->
		
		<!-- modal for General Assign from start -->
		<div id="genHrAssignThird" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" style="width: 700px; margin-left: -350px;">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			<h3 id="myModalLabel">General Request Assigned From Tab</h3>
		  </div>
		  <div class="modal-body">
				<div class="row-fluid">
				  <div class="span6">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignToThird">Assign to</label>
						<div class="controls">
							<select class="input-block-level" id="genHrAssignToThird">
								
							</select>							
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>		  		  
				<div class="row-fluid">
				  <div class="span12">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignNotesThird">Notes</label>
						<div class="controls">
							<textarea rows="3" class="input-block-level" id="genHrAssignNotesThird"></textarea>
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>																
				<div class="row-fluid">
				  <div class="span12">
					<div class="control-group">											
						<label class="control-label" for="genHrAssignAttachmentThird">Attachment</label>
						<div class="controls">
							<input type="file" id="genHrAssignAttachmentThird" accept=".pdf, .doc, .docx">
						</div> <!-- /controls -->				
					</div> <!-- /control-group -->							          
				  </div>
				</div>			  			
		  </div>
		  <div class="modal-footer">
			<button id="assignGeneralRequestThird" class="btn btn-info">Submit</button>
		  </div>
		</div>
		<!-- modal for General Assign from end -->

		
		<!-- modal for delete start -->
<!-- 		<div id="deleteInRequest" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false"> -->
<!-- 		  <div class="modal-header"> -->
<!-- 			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> -->
<!-- 			<h3 id="myModalLabel">Delete Item</h3> -->
<!-- 		  </div> -->
<!-- 		  <div class="modal-body"> -->
<!-- 			<h2 class="tdTextInCenterAi">Are you sure?</h2> -->
<!-- 		  </div> -->
<!-- 		  <div class="modal-footer"> -->
<!-- 			<button class="btn btn-info">Yes</button> -->
<!-- 		  </div> -->
<!-- 		</div> -->
		<!-- modal for delete end -->		
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
<script src="js/validator.min.js"></script>
<script src="js/jquery.validate.js"></script>
<!-- for table search and pagination -->
<script src="js/table/jquery.dataTables.min.js"></script>
<script src="js/wysi/wysihtml5-0.3.0.min.js"></script>
<script src="js/wysi/bootstrap3-wysihtml5.js"></script>
<!-- datepicker -->
<script src="js/datepicker/jquery.calendars.js"></script>
<script src="js/datepicker/jquery.calendars.plus.js"></script>
<script src="js/datepicker/jquery.plugin.js"></script>
<script src="js/datepicker/jquery.calendars.picker.js"></script>
<script src="js/datepicker/jquery.calendars.islamic.js"></script>
<script src="../../js/moment.js"></script>

<script src="../ajax/request-nav.js"></script>

<script src="../ajax/vacation-request.js"></script>
<script src="../ajax/exit-request.js"></script>
<script src="../ajax/transfer-request.js"></script>
<script src="../ajax/bank-request.js"></script>
<script src="../ajax/cash-advance-request.js"></script>
<script src="../ajax/salary-increase-request.js"></script>
<script src="../ajax/health-insurance-request.js"></script>
<script src="../ajax/general-request.js"></script>
<script src="../ajax/new-employee-request.js"></script>
<script src="../ajax/from-vacation-request.js"></script>
<script src="../ajax/transferred-request.js"></script>
<script src="../ajax/re-new-iqama-request.js"></script>
<script src="../ajax/extend-or-re-entry-request.js"></script>
<script src="../ajax/family-visa-request.js"></script>
<script src="../ajax/change-career-request.js"></script>
<script src="../ajax/floating-request.js"></script>
<script src="../ajax/search-employee-request.js"></script>

<!-- This is for the Employee List Ajax -->
<script src="../ajax/employee.js"></script>
<script src="js/alertify/alertify.min.js"></script>

<script>
$(document).ready(function() {

	//datepicker start
	var gregorianCalendar = $.calendars.instance('gregorian');
	var islamicCalendar = $.calendars.instance('islamic');
	
	$('.gregorianDatepicker').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
	});	
	//datepicker end		

	//Vacation visa (only datepicker)start
	//Exit before this date start
	//Gregorian datepicker start
	$('#VacationExitBeforeThisDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#VacationExitBeforeThisDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#VacationExitBeforeThisDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#VacationExitBeforeThisDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#VacationExitBeforeThisDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#VacationExitBeforeThisDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Exit before this date end  
	
	//Return date satart
	//Gregorian datepicker start
	$('#VacationReturnDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#VacationReturnDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#VacationReturnDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#VacationReturnDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#VacationReturnDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#VacationReturnDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Return date end	
	//Vacation visa (only datepicker) end	

	//Vacation Muqeem (only datepicker)start
	//KSA Leaving date start
	//Gregorian datepicker start
	$('#VacationKsaLeavingDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#VacationKsaLeavingDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#VacationKsaLeavingDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#VacationKsaLeavingDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#VacationKsaLeavingDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#VacationKsaLeavingDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//KSA Leaving date end    
	//Vacation Muqeem (only datepicker) end	

	//exit HR first (only datepicker)start
	//Gregorian datepicker start
	//Last vacation date start 
// 	$('#exitHrFirstLastVacation').calendarsPicker({
// 		calendar: gregorianCalendar,
// 		dateFormat: 'd/m/yyyy',
// 	});	
// 	//Last vacation date end 
	
// 	//Date joined after vacation start 
// 	$('#exitHrFirstDateJoined').calendarsPicker({
// 		calendar: gregorianCalendar,
// 		dateFormat: 'd/m/yyyy',
// 	});
// 	$('#exitHrFirstDateJoined').calendarsPicker({
// 		calendar: gregorianCalendar,
// 		dateFormat: 'd/m/yyyy',
// 		//gregorian to hijri converter start
// 		onSelect:function(){
// 			var exitHrFirstLastVacationDate = $('#exitHrFirstLastVacation').val().split('/');
// 			var exitHrFirstLastVacationDay = parseInt(exitHrFirstLastVacationDate[0],10);
// 			var exitHrFirstLastVacationMonth = parseInt(exitHrFirstLastVacationDate[1],10);
// 			var exitHrFirstLastVacationYear = parseInt(exitHrFirstLastVacationDate[2],10);
// 			var exitHrFirstLastVacationForCal = new Date(exitHrFirstLastVacationYear,exitHrFirstLastVacationMonth,exitHrFirstLastVacationDay);

// 			var exitHrFirstDateJoinedDate = $('#exitHrFirstDateJoined').val().split('/');
// 			var exitHrFirstDateJoinedDay = parseInt(exitHrFirstDateJoinedDate[0],10);
// 			var exitHrFirstDateJoinedMonth = parseInt(exitHrFirstDateJoinedDate[1],10);
// 			var exitHrFirstDateJoinedYear = parseInt(exitHrFirstDateJoinedDate[2],10);
// 			var exitHrFirstDateJoinedForCal = new Date(exitHrFirstDateJoinedYear,exitHrFirstDateJoinedMonth,exitHrFirstDateJoinedDay);			

// 			var exitHrFirstDaysOfLastVacationVal = (exitHrFirstDateJoinedForCal - exitHrFirstLastVacationForCal) / (1000*60*60*24)+" day(s)";
			
// 			$('#exitHrFirstDaysOfLastVacation').text(exitHrFirstDaysOfLastVacationVal);	
// 		}		
// 		//gregorian to hijri converter end
// 	});	
	//Date joined after vacation end	
	//Gregorian datepicker end
	//exit HR First (only datepicker) end	
	
	//exit visa (only datepicker)start
	//Exit before this date satart
	//Gregorian datepicker start
	$('#exitExitBeforeThisDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#exitExitBeforeThisDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#exitExitBeforeThisDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#exitExitBeforeThisDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#exitExitBeforeThisDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#exitExitBeforeThisDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//Exit before this date end  	
	//exit visa (only datepicker) end

	//exit Muqeem (only datepicker)start
	//KSA Leaving date start
	//Gregorian datepicker start
	$('#exitKsaLeavingDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#exitKsaLeavingDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#exitKsaLeavingDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian datepicker end

	//Hijri datepicker start
	$('#exitKsaLeavingDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#exitKsaLeavingDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#exitKsaLeavingDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri datepicker end
	//KSA Leaving date end    
	//exit Muqeem (only datepicker) end

	//renew iqama (only datepicker)start
	//Gregorian Expiry date datepicker start
	$('#reNewIqamaHrExpiryDateG').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#reNewIqamaHrExpiryDateG').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#reNewIqamaHrExpiryDateH').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	
	//Gregorian Expiry date datepicker end

	//Hijri Expiry date datepicker start
	$('#reNewIqamaHrExpiryDateH').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#reNewIqamaHrExpiryDateH').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#reNewIqamaHrExpiryDateG').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	//Hijri Expiry date datepicker end
	//renew iqama (only datepicker) end

	// This is for the edit visa on ticket tab
	$('#exitExitBeforeThisDateGInTicket').calendarsPicker({
		calendar: gregorianCalendar,
		dateFormat: 'd/m/yyyy',
		//gregorian to hijri converter start
		onSelect:function(){
			var gregorianDateFromtextBox = $('#exitExitBeforeThisDateGInTicket').val().split('/');
			<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
			$('#exitExitBeforeThisDateHInTicket').val(outputHijriDate);					
		}		
		//gregorian to hijri converter end
	});	

	$('#exitExitBeforeThisDateHInTicket').calendarsPicker({
		calendar: islamicCalendar,
		dateFormat: 'd/m/yyyy',
		//hijri to gregorian converter start
		onSelect:function(){
			var islamicDateFromtextBox = $('#exitExitBeforeThisDateHInTicket').val().split('/');
			<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
			$('#exitExitBeforeThisDateGInTicket').val(outputGregorianDate);
		}		
		//hijri to gregorian converter end
	});	
	// This is for the edit visa on ticket tab
	
} );

</script>

<script src="../../js/change_url.js" type="text/javascript"></script>
 
</body>
</html>
