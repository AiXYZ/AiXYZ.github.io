<?php 
ob_start();
session_start();

include_once '../../inc/config.php';
include_once '../../inc/functions.php';

// echo $_SESSION['login_user'];
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
      				<h3>Create request</h3>
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
								  <li id="vacationRequestNav"><a href="javascript:void(0)">Vacation </a></li>
								  <li id="exitRequestNav"><a href="javascript:void(0)">Exit </a></li>
								  <li id="transferRequestNav"><a href="javascript:void(0)">Transfer </a></li>
								  <li id="bankRequestNav"><a href="javascript:void(0)">Bank </a></li>
								  <li id="cashAdvanceRequestNav"><a href="javascript:void(0)">Cash advance </a></li>
								  <li id="salaryIncreaseRequestNav"><a href="javascript:void(0)">Salary increase </a></li>
								  <li id="healthInsuranceRequestNav"><a href="javascript:void(0)">Health insurance </a></li>
								  <li id="generalRequestNav"><a href="javascript:void(0)">General </a></li>
								  <li id="newEmployeeRequestNav"><a href="javascript:void(0)">New employee </a></li>
								  <li id="fromVacationRequestNav"><a href="javascript:void(0)">From vacation </a></li>
								  <li id="transferredRequestNav"><a href="javascript:void(0)">Transferred </a></li>
								  <li id="reNewIqamaRequestNav"><a href="javascript:void(0)">Re-new iqama </a></li>
								  <li id="extendOrReEntryRequestNav"><a href="javascript:void(0)">Extend/Re-entry </a></li>
								  <li id="familyVisaRequestNav"><a href="javascript:void(0)">Family visit </a></li>
								  <li id="changeCareerRequestNav"><a href="javascript:void(0)">Change career </a></li>
								  <li id="floatingRequestNav"><a href="javascript:void(0)">Floating </a></li>
								</ul>
							  </div>
							  <!-- request menu end -->
							  
							  <!-- request table start -->
							  <div class="span10">
								<div class="row-fluid">
									<!-- vacation content start -->
									<div id="vacationRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-vacation-request-content.php") ?>						
									</div>
									<!-- vacation content end -->
									
									<!-- exit content start -->
									<div id="exitRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-exit-request-content.php") ?>						
									</div>
									<!-- exit content end -->
									
									<!-- transfer content start -->
									<div id="transferRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-transfer-request-content.php") ?>						
									</div>
									<!-- transfer content end -->	
									
									<!-- bank content start -->
									<div id="bankRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-bank-request-content.php") ?>						
									</div>
									<!-- bank content end -->
									
									<!-- cashAdvance content start -->
									<div id="cashAdvanceRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-cash-advance-request-content.php") ?>						
									</div>
									<!-- cashAdvance content end -->
									
									<!-- salaryIncrease content start -->
									<div id="salaryIncreaseRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-salary-increase-request-content.php") ?>						
									</div>
									<!-- salaryIncrease content end -->
									
									<!-- healthInsurance content start -->
									<div id="healthInsuranceRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-health-insurance-request-content.php") ?>						
									</div>
									<!-- healthInsurance content end -->
									
									<!-- general content start -->
									<div id="generalRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-general-request-content.php") ?>						
									</div>
									<!-- general content end -->
									
									<!-- newEmployee content start -->
									<div id="newEmployeeRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-new-employee-request-content.php") ?>						
									</div>
									<!-- newEmployee content end -->
									
									<!-- fromVacation content start -->
									<div id="fromVacationRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-from-vacation-request-content.php") ?>						
									</div>
									<!-- fromVacation content end -->
									
									<!-- transferred content start -->
									<div id="transferredRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-transferred-request-content.php") ?>						
									</div>
									<!-- transferred content end -->
									
									<!-- reNewIqama content start -->
									<div id="reNewIqamaRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-re-new-iqama-request-content.php") ?>						
									</div>
									<!-- reNewIqama content end -->
									
									<!-- extendOrReEntry content start -->
									<div id="extendOrReEntryRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-extend-or-re-entry-request-content.php") ?>						
									</div>
									<!-- extendOrReEntry content end -->
									
									<!-- familyVisa content start -->
									<div id="familyVisaRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-family-visa-request-content.php") ?>						
									</div>
									<!-- familyVisa content end -->
									
									<!-- changeCareer content start -->
									<div id="changeCareerRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-change-career-request-content.php") ?>						
									</div>
									<!-- changeCareer content end -->
									
									<!-- floating content start -->
									<div id="floatingRequestContent" class="tabbable hideContentAi">
										<?php include_once("inc-en/create-floating-request-content.php") ?>						
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

<script src="../ajax/request-nav.js"></script>

<script src="../ajax/create-vacation-request.js"></script>
<script src="../ajax/create-exit-request.js"></script>
<script src="../ajax/create-transfer-request.js"></script>
<script src="../ajax/create-bank-request.js"></script>
<script src="../ajax/create-cash-advance-request.js"></script>
<script src="../ajax/create-salary-increase-request.js"></script>
<script src="../ajax/create-health-insurance-request.js"></script>
<script src="../ajax/create-general-request.js"></script>
<script src="../ajax/create-new-employee-request.js"></script>
<script src="../ajax/create-from-vacation-request.js"></script>
<script src="../ajax/create-transferred-request.js"></script>
<script src="../ajax/create-re-new-iqama-request.js"></script>
<script src="../ajax/create-extend-or-re-entry-request.js"></script>
<script src="../ajax/create-family-visa-request.js"></script>
<script src="../ajax/create-change-career-request.js"></script>
<script src="../ajax/create-floating-request.js"></script>
<script src="../ajax/search-employee-request.js"></script>

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
	
} );	
</script>

<script src="../../js/change_url.js" type="text/javascript"></script>

</body>
</html>
