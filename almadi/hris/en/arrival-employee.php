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
	<link href="css/categories-bar-chart.css" rel="stylesheet">
	
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
	      		<div class="widget ">
	      			<div class="widget-header">
	      				<i class="icon-user"></i>
	      				<h3>Arrival employee</h3>
	  				</div> <!-- /widget-header -->
					<div class="widget-content">
						<div class="tabbable">
							<div class="row-fluid">
								<div class="span12">
									<ul class="nav nav-tabs">
									  <li class="active"><a href="#laborsControls" data-toggle="tab">Labors <span id="others_total"></span> </a></li>
									  <li class="driversBarChartActive"><a href="#driversControls" data-toggle="tab">Drivers (68)</a></li>
									  <li class="engineersBarChartActive"><a href="#engineersControls" data-toggle="tab">Engineers (12)</a></li>
									  <li class="othersBarChartActive"><a href="#othersControls" data-toggle="tab">Others (91)</a></li>
									</ul>
									<br>
									<div class="tab-content">
										<!-- labors start -->
										<div class="tab-pane active" id="laborsControls">
											<!-- labors filter and table start -->
											<div id="laborsView"  class="hideContentAi">
												<!-- labors filter start-->
												<div class="BarChartContainer">
													<div id="laborsBarChart" class="BarChartPlaceholder"></div>
												</div>
												<div class="clearfix"><br></div>
												<!-- labors filter end-->
												
												<!-- labors table start-->
												<form class="form-horizontal">							
													<table id="listOfLabors"  class="table table-striped table-bordered" style="width: 100%;">
														<thead>
															<tr>
																<th class="tdTextInCenterAi">Emp.ID</th>
																<th class="tdTextInCenterAi">Name</th>
																<th class="tdTextInCenterAi">Project</th>
																<th class="tdTextInCenterAi">Position</th>
															</tr>
														</thead>
														<tbody>
															<tr style="cursor: pointer;">
																<td class="tdTextInCenterAi">3744</td>
																<td class="tdTextInCenterAi">Ali Akhtar</td>
																<td class="tdTextInCenterAi"> الادارة التنفيذية شركة عبدالله </td>
																<td class="tdTextInCenterAi"> تقنية المعلومات </td>
															</tr>
															<tr style="cursor: pointer;">
																<td class="tdTextInCenterAi">3565</td>
																<td class="tdTextInCenterAi">GENESIS BERGONIA LISTA</td>
																<td class="tdTextInCenterAi"> الادارة التنفيذية شركة عبدالله </td>
																<td class="tdTextInCenterAi"> تقنية المعلومات </td>
															</tr>								        
														</tbody>
													</table>									
												</form>											
												<!-- labors table end-->
											</div>	
											<!-- labors filter and table end -->
											
											<!-- labors update start-->
											<div id="laborsUpdate"  class="hideContentAi">
												<div class="row-fluid">
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="lEmpId">Employee ID</label>
															<div class="controls">
																<input type="text" class="span3" id="lEmpId" value="3744" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="lName">Name</label>
															<div class="controls">
																<input type="text" class="span3" id="lName" value="Mohammed Ali Akhtar" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="lEntryDate">Entry date</label>
															<div class="controls">
																<input type="text" class="span3" id="lEntryDate" value="7/8/2015" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="lNationality">Nationality</label>
															<div class="controls">
																<input type="text" class="span3" id="lNationality" value="Indian" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>												
												</div>

												<div class="row-fluid">
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="lEntryNumber">Entry number</label>
															<div class="controls">
																<input type="text" class="span3" id="lEntryNumber" value="15667876" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="lOriginAirport">Origin airport</label>
															<div class="controls">
																<input type="text" class="span3" id="lOriginAirport" value="Mumbai" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="lEntryDate">Project</label>
															<div class="controls">
																<input type="text" class="span3" id="lEntryDate" value=" الادارة التنفيذية شركة عبدالله	 " readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>											
												</div>
												
												<table class="table table-striped table-bordered">
													<thead>
														<tr>
															<th class="tdTextInCenterAi">Description</th>
															<th class="tdTextInCenterAi">Status</th>
															<th class="tdTextInCenterAi">Elapsed</th>
															<th class="tdTextInCenterAi">Updated by</th>
															<th class="tdTextInCenterAi">Updated Date</th>
															<th class="tdTextInCenterAi">Attachment</th>
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
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Contract</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">contractfile.pdf</td>
														</tr>

														<tr>
															<td class="tdTextInCenterAi">Visa</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">visafile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Passport</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">passportfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Photo</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">photofile.png</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Medical Check-Up</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">5</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">checkupfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Medical Insurance</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">7</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">insurancefile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Reporting Date</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">reportinfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Work Permit</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">permitfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Iqama</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">iqamafile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Bank Account</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">acfile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">GOSI</td>
															<td class="tdTextInCenterAi"><input type="checkbox"></td>
															<td class="tdTextInCenterAi">34</td>
															<td class="tdTextInCenterAi">-</td>
															<td class="tdTextInCenterAi">-</td>
															<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
														</tr>													        											        											        
													</tbody>
												</table>
												
										        <div class="row-fluid">
													<div class="control-group pull-right">											
														<div class="controls">
														  <button type="button" id="GoBackToLaborsListTable" class="btn">Go Back</button>
														  <button type="button" class="btn btn-info">Update</button>															
														</div> <!-- /controls -->				
													</div> <!-- /control-group -->
										        </div>																																															
											</div>
											<!-- labors update end-->																					
										</div>
										<!-- labors end -->
										
										<!-- drivers start -->
										<div class="tab-pane" id="driversControls">
											<!-- drivers filter and table start -->
											<div id="driversView"  class="hideContentAi">
												<!-- drivers filter start-->
												<div class="BarChartContainer">
													<div id="DriversBarChart" class="BarChartPlaceholder"></div>
												</div>
												<div class="clearfix"><br></div>
												<!-- drivers filter end-->
												
												<!-- drivers table start-->
												<form class="form-horizontal">							
													<table id="listOfDrivers"  class="table table-striped table-bordered" style="width: 100%;">
														<thead>
															<tr>
																<th class="tdTextInCenterAi">Emp.ID</th>
																<th class="tdTextInCenterAi">Name</th>
																<th class="tdTextInCenterAi">Project</th>
																<th class="tdTextInCenterAi">Position</th>
															</tr>
														</thead>
														<tbody>
															<tr style="cursor: pointer;">
																<td class="tdTextInCenterAi">3744</td>
																<td class="tdTextInCenterAi">Ali Akhtar</td>
																<td class="tdTextInCenterAi"> الادارة التنفيذية شركة عبدالله </td>
																<td class="tdTextInCenterAi"> تقنية المعلومات </td>
															</tr>
															<tr style="cursor: pointer;">
																<td class="tdTextInCenterAi">3565</td>
																<td class="tdTextInCenterAi">GENESIS BERGONIA LISTA</td>
																<td class="tdTextInCenterAi"> الادارة التنفيذية شركة عبدالله </td>
																<td class="tdTextInCenterAi"> تقنية المعلومات </td>
															</tr>								        
														</tbody>
													</table>									
												</form>											
												<!-- drivers table end-->
											</div>	
											<!-- drivers filter and table end -->
											
											<!-- drivers update start-->
											<div id="driversUpdate"  class="hideContentAi">
												<div class="row-fluid">
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="dEmpId">Employee ID</label>
															<div class="controls">
																<input type="text" class="span3" id="dEmpId" value="3744" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="dName">Name</label>
															<div class="controls">
																<input type="text" class="span3" id="dName" value="Mohammed Ali Akhtar" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="dEntryDate">Entry date</label>
															<div class="controls">
																<input type="text" class="span3" id="dEntryDate" value="7/8/2015" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="dNationality">Nationality</label>
															<div class="controls">
																<input type="text" class="span3" id="dNationality" value="Indian" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>												
												</div>

												<div class="row-fluid">
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="dEntryNumber">Entry number</label>
															<div class="controls">
																<input type="text" class="span3" id="dEntryNumber" value="15667876" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="dOriginAirport">Origin airport</label>
															<div class="controls">
																<input type="text" class="span3" id="dOriginAirport" value="Mumbai" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="dEntryDate">Project</label>
															<div class="controls">
																<input type="text" class="span3" id="dEntryDate" value=" الادارة التنفيذية شركة عبدالله	 " readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>											
												</div>
												
												<table class="table table-striped table-bordered">
													<thead>
														<tr>
															<th class="tdTextInCenterAi">Description</th>
															<th class="tdTextInCenterAi">Status</th>
															<th class="tdTextInCenterAi">Elapsed</th>
															<th class="tdTextInCenterAi">Updated by</th>
															<th class="tdTextInCenterAi">Updated Date</th>
															<th class="tdTextInCenterAi">Attachment</th>
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
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Contract</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">contractfile.pdf</td>
														</tr>

														<tr>
															<td class="tdTextInCenterAi">Visa</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">visafile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Passport</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">passportfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Photo</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">photofile.png</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Medical Check-Up</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">5</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">checkupfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Medical Insurance</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">7</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">insurancefile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Reporting Date</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">reportinfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Work Permit</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">permitfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">DL Country</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">dlcfile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">DL</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">dlfile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Translated DL</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">tdlfile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Iqama</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">iqamafile.pdf</td>
														</tr>																																																								
														<tr>
															<td class="tdTextInCenterAi">Bank Account</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">acfile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">GOSI</td>
															<td class="tdTextInCenterAi"><input type="checkbox"></td>
															<td class="tdTextInCenterAi">34</td>
															<td class="tdTextInCenterAi">-</td>
															<td class="tdTextInCenterAi">-</td>
															<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
														</tr>													        											        											        
													</tbody>
												</table>
												
										        <div class="row-fluid">
													<div class="control-group pull-right">											
														<div class="controls">
														  <button type="button" id="GoBackToDriversListTable" class="btn">Go Back</button>
														  <button type="button" class="btn btn-info">Update</button>															
														</div> <!-- /controls -->				
													</div> <!-- /control-group -->
										        </div>																																															
											</div>
											<!-- drivers update end-->	
										</div>
										<!-- drivers end -->
										
										<!-- engineers start -->
										<div class="tab-pane" id="engineersControls">
											<!-- engineers filter and table start -->
											<div id="engineersView"  class="hideContentAi">
												<!-- engineers filter start-->
												<div class="BarChartContainer">
													<div id="EngineersBarChart" class="BarChartPlaceholder"></div>
												</div>
												<div class="clearfix"><br></div>
												<!-- engineers filter end-->
												
												<!-- engineers table start-->
												<form class="form-horizontal">							
													<table id="listOfEngineers"  class="table table-striped table-bordered" style="width: 100%;">
														<thead>
															<tr>
																<th class="tdTextInCenterAi">Emp.ID</th>
																<th class="tdTextInCenterAi">Name</th>
																<th class="tdTextInCenterAi">Project</th>
																<th class="tdTextInCenterAi">Position</th>
															</tr>
														</thead>
														<tbody>
															<tr style="cursor: pointer;">
																<td class="tdTextInCenterAi">3744</td>
																<td class="tdTextInCenterAi">Ali Akhtar</td>
																<td class="tdTextInCenterAi"> الادارة التنفيذية شركة عبدالله </td>
																<td class="tdTextInCenterAi"> تقنية المعلومات </td>
															</tr>
															<tr style="cursor: pointer;">
																<td class="tdTextInCenterAi">3565</td>
																<td class="tdTextInCenterAi">GENESIS BERGONIA LISTA</td>
																<td class="tdTextInCenterAi"> الادارة التنفيذية شركة عبدالله </td>
																<td class="tdTextInCenterAi"> تقنية المعلومات </td>
															</tr>								        
														</tbody>
													</table>									
												</form>											
												<!-- engineers table end-->
											</div>	
											<!-- engineers filter and table end -->
											
											<!-- engineers update start-->
											<div id="engineersUpdate"  class="hideContentAi">
												<div class="row-fluid">
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="eEmpId">Employee ID</label>
															<div class="controls">
																<input type="text" class="span3" id="eEmpId" value="3744" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="eName">Name</label>
															<div class="controls">
																<input type="text" class="span3" id="eName" value="Mohammed Ali Akhtar" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="eEntryDate">Entry date</label>
															<div class="controls">
																<input type="text" class="span3" id="eEntryDate" value="7/8/2015" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="eNationality">Nationality</label>
															<div class="controls">
																<input type="text" class="span3" id="eNationality" value="Indian" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>												
												</div>

												<div class="row-fluid">
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="eEntryNumber">Entry number</label>
															<div class="controls">
																<input type="text" class="span3" id="eEntryNumber" value="15667876" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="eOriginAirport">Origin airport</label>
															<div class="controls">
																<input type="text" class="span3" id="eOriginAirport" value="Mumbai" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="eEntryDate">Project</label>
															<div class="controls">
																<input type="text" class="span3" id="eEntryDate" value=" الادارة التنفيذية شركة عبدالله	 " readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>											
												</div>
												
												<table class="table table-striped table-bordered">
													<thead>
														<tr>
															<th class="tdTextInCenterAi">Description</th>
															<th class="tdTextInCenterAi">Status</th>
															<th class="tdTextInCenterAi">Elapsed</th>
															<th class="tdTextInCenterAi">Updated by</th>
															<th class="tdTextInCenterAi">Updated Date</th>
															<th class="tdTextInCenterAi">Attachment</th>
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
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Contract</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">contractfile.pdf</td>
														</tr>

														<tr>
															<td class="tdTextInCenterAi">Visa</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">visafile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Passport</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">passportfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Photo</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">photofile.png</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Medical Check-Up</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">5</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">checkupfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Medical Insurance</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">7</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">insurancefile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Reporting Date</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">reportinfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Work Permit</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">permitfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Certificate</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">cetificatecfile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Iqama</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">iqamafile.pdf</td>
														</tr>																																																								
														<tr>
															<td class="tdTextInCenterAi">Bank Account</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">acfile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">GOSI</td>
															<td class="tdTextInCenterAi"><input type="checkbox"></td>
															<td class="tdTextInCenterAi">34</td>
															<td class="tdTextInCenterAi">-</td>
															<td class="tdTextInCenterAi">-</td>
															<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
														</tr>													        											        											        
													</tbody>
												</table>
												
										        <div class="row-fluid">
													<div class="control-group pull-right">											
														<div class="controls">
														  <button type="button" id="GoBackToEngineersListTable" class="btn">Go Back</button>
														  <button type="button" class="btn btn-info">Update</button>															
														</div> <!-- /controls -->				
													</div> <!-- /control-group -->
										        </div>																																															
											</div>
											<!-- engineers update end-->	
										</div>
										<!-- engineers end -->
										
										<!-- others start -->
										<div class="tab-pane" id="othersControls">
											<!-- others filter and table start -->
											<div id="othersView"  class="hideContentAi">
												<!-- others filter start-->
												<div class="BarChartContainer">
													<div id="othersBarChart" class="BarChartPlaceholder"></div>
												</div>
												<div class="clearfix"><br></div>
												<!-- others filter end-->
												
												<!-- others table start-->
												<form class="form-horizontal">							
													<table id="listOfOthers"  class="table table-striped table-bordered" style="width: 100%;">
														<thead>
															<tr>
																<th class="tdTextInCenterAi">Emp.ID</th>
																<th class="tdTextInCenterAi">Name</th>
																<th class="tdTextInCenterAi">Project</th>
																<th class="tdTextInCenterAi">Position</th>
															</tr>
														</thead>
														<tbody>
															<tr style="cursor: pointer;">
																<td class="tdTextInCenterAi">3744</td>
																<td class="tdTextInCenterAi">Ali Akhtar</td>
																<td class="tdTextInCenterAi"> الادارة التنفيذية شركة عبدالله </td>
																<td class="tdTextInCenterAi"> تقنية المعلومات </td>
															</tr>
															<tr style="cursor: pointer;">
																<td class="tdTextInCenterAi">3565</td>
																<td class="tdTextInCenterAi">GENESIS BERGONIA LISTA</td>
																<td class="tdTextInCenterAi"> الادارة التنفيذية شركة عبدالله </td>
																<td class="tdTextInCenterAi"> تقنية المعلومات </td>
															</tr>								        
														</tbody>
													</table>									
												</form>											
												<!-- others table end-->
											</div>	
											<!-- others filter and table end -->
											
											<!-- others update start-->
											<div id="othersUpdate"  class="hideContentAi">
												<div class="row-fluid">
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="oEmpId">Employee ID</label>
															<div class="controls">
																<input type="text" class="span3" id="oEmpId" value="3744" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="oName">Name</label>
															<div class="controls">
																<input type="text" class="span3" id="oName" value="Mohammed Ali Akhtar" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="oEntryDate">Entry date</label>
															<div class="controls">
																<input type="text" class="span3" id="oEntryDate" value="7/8/2015" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="oNationality">Nationality</label>
															<div class="controls">
																<input type="text" class="span3" id="oNationality" value="Indian" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>												
												</div>

												<div class="row-fluid">
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="oEntryNumber">Entry number</label>
															<div class="controls">
																<input type="text" class="span3" id="oEntryNumber" value="15667876" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="oOriginAirport">Origin airport</label>
															<div class="controls">
																<input type="text" class="span3" id="oOriginAirport" value="Mumbai" readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>									
													<div class="span3">
														<div class="control-group">											
															<label class="control-label" for="oEntryDate">Project</label>
															<div class="controls">
																<input type="text" class="span3" id="oEntryDate" value=" الادارة التنفيذية شركة عبدالله	 " readonly>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->	
													</div>											
												</div>
												
												<table class="table table-striped table-bordered">
													<thead>
														<tr>
															<th class="tdTextInCenterAi">Description</th>
															<th class="tdTextInCenterAi">Status</th>
															<th class="tdTextInCenterAi">Elapsed</th>
															<th class="tdTextInCenterAi">Updated by</th>
															<th class="tdTextInCenterAi">Updated Date</th>
															<th class="tdTextInCenterAi">Attachment</th>
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
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Contract</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">contractfile.pdf</td>
														</tr>

														<tr>
															<td class="tdTextInCenterAi">Visa</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">visafile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">Passport</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">passportfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Photo</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">photofile.png</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Medical Check-Up</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">5</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">checkupfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Medical Insurance</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">7</td>
															<td class="tdTextInCenterAi"> 3615 - طارق عاطف محمد يونس </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">insurancefile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Reporting Date</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">reportinfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Work Permit</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">permitfile.pdf</td>
														</tr>														
														<tr>
															<td class="tdTextInCenterAi">Iqama</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">iqamafile.pdf</td>
														</tr>																																																								
														<tr>
															<td class="tdTextInCenterAi">Bank Account</td>
															<td class="tdTextInCenterAi"><input type="checkbox" checked disabled></td>
															<td class="tdTextInCenterAi">0</td>
															<td class="tdTextInCenterAi"> 3256 - هاني شعبان سعيد متولي </td>
															<td class="tdTextInCenterAi">2/8/2015</td>
															<td class="tdTextInCenterAi">acfile.pdf</td>
														</tr>
														<tr>
															<td class="tdTextInCenterAi">GOSI</td>
															<td class="tdTextInCenterAi"><input type="checkbox"></td>
															<td class="tdTextInCenterAi">34</td>
															<td class="tdTextInCenterAi">-</td>
															<td class="tdTextInCenterAi">-</td>
															<td class="tdTextInCenterAi"><input type="file" name="pic" accept=".pdf"></td>
														</tr>													        											        											        
													</tbody>
												</table>
												
										        <div class="row-fluid">
													<div class="control-group pull-right">											
														<div class="controls">
														  <button type="button" id="GoBackToOthersListTable" class="btn">Go Back</button>
														  <button type="button" class="btn btn-info">Update</button>															
														</div> <!-- /controls -->				
													</div> <!-- /control-group -->
										        </div>																																															
											</div>
											<!-- others update end-->
										</div>
										<!-- others end -->																							
									</div>
								</div>	
							</div>
						</div>
					</div> <!-- /widget-content -->
				</div> <!-- /widget -->
		    </div> <!-- /span12 -->

			<!-- Modal start -->
			<!-- search employee request start -->
			<?php include_once("inc-en/search-employee-request-tab.php") ?>										
			<!-- search employee request end -->
			
			<!-- Modal end -->
		    
	      </div> <!-- /row -->
	      
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

<script src="js/flot/jquery.flot.js"></script>
<script src="js/flot/jquery.flot.categories.js"></script>

<script src="../ajax/search-employee-request.js"></script>

<script src="../ajax/new-arrival-employee.js"></script>

<script src="../../js/change_url.js" type="text/javascript"></script>
	
</body>
</html>
