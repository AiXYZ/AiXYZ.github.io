										<ul class="nav nav-tabs">
										  <li id="general_hr_menu_tab" class="active"><a href="#genHr" data-toggle="tab">HR <span id="general_hr_first_total"></span> </a></li> <!-- Show to only PM and Super user (Eng. Hameed and Mr. Thamer) -->
										  <li id="general_assigned_to_menu_tab"><a href="#genAssignedTo" data-toggle="tab">Assigned To <span id="general_assigned_to_total"></span> </a></li> <!-- Show to only Super user (Mr. Thamer) -->
										  <li id="general_assigned_from_menu_tab"><a href="#genAssignedFrom" data-toggle="tab">Assigned From <span id="general_assigned_from_total"></span> </a></li> <!-- Show to only HR Executive (Mr. Tarek) -->
										  <li><a href="#genClosed" data-toggle="tab">Closed <span id="general_closed_total"></span> </a></li> <!-- Show to All -->
										  <li><a href="#genDeclined" data-toggle="tab">Declined <span id="general_declined_total"></span> </a></li> <!-- Show to All -->
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="genHr">
												<!-- list of General - HR request start-->
												<div id="genHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfGenRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of General - HR request end-->
												<!-- employee details - General HR and update start -->
												<div id="genHrDetails" class="hideContentAi">
													<table id="general_encoder_details_hr_first" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="general_employee_details_hr_first" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																		        
														</tbody>
													</table>
																										
													<table class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="genHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="genHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="genHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="genHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToGenHrTable" class="btn">Go Back</button> <!-- Show to only PM and Super user (Eng. Hameed and Mr. Thamer) -->
															  <button href="#genHrAssignFirst" data-toggle="modal" type="button" class="btn btn-info">Assign</button> <!-- Show to only Super user (Mr. Thamer) -->
															  <button type="button" id="Update_General_HR_First" class="btn btn-info">Submit</button> <!-- Show to only Super user (Mr. Thamer) -->
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>					
													
													<!-- <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button> --> <!-- Show to only Super user (Mr. Thamer) -->
													<!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> --> <!-- Show to only PM and Super user (Eng. Hameed and Mr. Thamer) -->
													<!-- <a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a> -->  <!-- Show to only Super user (Mr. Thamer) -->
													<!-- <button type="button" class="btn btn-info">Decline</button> --> <!-- Show to only Super user (Mr. Thamer) -->	
																						
												</div>																																																														
												<!-- employee details - General HR and update end -->	
											</div>
											
											<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->
											
											<div class="tab-pane" id="genAssignedTo">
												<!-- list of General - aasigned to request start-->
												<div id="genAssignedToTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfGenRequestAssignedTo"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of General - aasigned to request end-->
												<!-- employee details - General aasigned to and update start -->
												<div id="genAssignedToDetails" class="hideContentAi">
													<table id="general_encoder_details_approved_to" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="general_employee_details_approved_to" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>	
													
													<table id="general_assign_list" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																														        
														</tbody>
													</table>													
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToGenAssignedTo" class="btn">Go Back</button>
															  <button href="#genHrAssignSecond" data-toggle="modal" type="button" class="btn btn-info">Re-assign</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>											
													
													<!--  
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
													-->
																
												</div>																																																														
												<!-- employee details - General aasigned to and update end -->
											</div>
											
											<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="genAssignedFrom">
												<!-- list of General - assigned from request start-->
												<div id="genAssignedFromTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfGenRequestAssignedFrom"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of General - assigned from request end-->
												<!-- employee details - General assigned from and update start -->
												<div id="genAssignedFromDetails" class="hideContentAi">
													<table id="general_encoder_details_approved_from" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="general_employee_details_approved_from" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>	
													
													<table id="general_assign_list" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																														        
														</tbody>
													</table>
												
													<table class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">Assign From</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="genAssignedFromNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="genAssignedFromNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="genAssignedFromAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="genAssignedFromAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToGenAssignedFromTable" class="btn">Go Back</button>
															  <a id="assignedFrom_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button id="assignedForward" href="#genHrAssignThird" data-toggle="modal" type="button" class="btn btn-info">Forward</button>
															  <button type="button" id="updateGeneralRequest_Assigned_From" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>												
													
													<!--  
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<button type="button" class="btn btn-info">Forward</button>
													<button type="button" class="btn btn-info">Decline</button>
													-->
															
												</div>																																																														
												<!-- employee details - General assigned from and update end -->
											</div>
											
											<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->
														
											<div class="tab-pane" id="genClosed">
												<!-- list of General - Closed request start-->
												<div id="genClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfGenRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of General - Closed request end-->
												<!-- employee details - General Closed and update start -->
												<div id="genClosedDetails" class="hideContentAi">
													<table id="general_encoder_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="general_employee_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>
													
													<table id="general_hr" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																        
														</tbody>
													</table>
													
													<table id="general_assign_list" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																														        
														</tbody>
													</table>
													
													<table id="general_assigned_from" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																        
														</tbody>
													</table>																										
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToGenClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - General Closed and update end -->
											</div>
											
											<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->
											
											<div class="tab-pane" id="genDeclined">
												<!-- list of General - Declined request start-->
												<div id="genDeclinedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfGenRequestDeclined"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of General - Declined request end-->
												<!-- employee details - General Declined and update start -->
												<div id="genDeclinedDetails" class="hideContentAi">
													<table id="general_encoder_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="general_employee_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>
													
													<table id="general_hr" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																        
														</tbody>
													</table>
													
													<table id="general_assign_list" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																														        
														</tbody>
													</table>

													<table id="general_assigned_from" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																        
														</tbody>
													</table>	
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToGenDeclinedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - General Declined and update end -->
											</div>											
										</div>