										<ul class="nav nav-tabs">
										  <li class="active"><a href="#newEmpHr" data-toggle="tab">HR <span id="new_employee_hr_first_total"></span> </a></li>
										  <li><a href="#newEmpClosed" data-toggle="tab">Closed <span id="new_employee_closed_total"></span> </a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="newEmpHr">
												<!-- list of new employee - HR request start-->
												<div id="newEmpHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfNewEmpRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Project</th>
																	<th class="tdTextInCenterAi">Position</th>
																</tr>
															</thead>
															<tbody>
																																					        
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of new employee - HR request end-->
												<!-- employee details - new employee HR and update start -->
												<div id="newEmpHrDetails" class="hideContentAi">
													<table id="new_employee_encoder_details_hr_first" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="new_employee_employee_details_hr_first" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																		        
														</tbody>
													</table>
																										
													<table id="newEmpHrTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">HR</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="newEmpHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="newEmpHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="newEmpHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="newEmpHrAttachment" accept=".pdf, .doc, .docx">
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																																
																</td>
															</tr>																						        
														</tbody>
													</table>
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls"> 
															  <button type="button" id="goBackToNewEmpHrTable" class="btn">Go Back</button>
															  <!-- <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															  <a id="new_employee_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button type="button" id="Update_New_Employee_HR_First" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - new employee HR and update end -->	
											</div>
											
											<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
		
											<div class="tab-pane" id="newEmpClosed">
												<!-- list of new employee - Closed request start-->
												<div id="newEmpClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfNewEmpRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Project</th>
																	<th class="tdTextInCenterAi">Position</th>
																</tr>
															</thead>
															<tbody>
																																				        
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of new employee - Closed request end-->
												<!-- employee details - new employee Closed and update start -->
												<div id="newEmpClosedDetails" class="hideContentAi">
													<table id="new_employee_encoder_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="new_employee_employee_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>
													
													<table id="new_employee_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																        
														</tbody>
													</table>																										
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToNewEmpClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - new employee Closed and update end -->
											</div>
										
										</div>