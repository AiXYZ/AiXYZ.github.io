										<ul class="nav nav-tabs">
										  <li class="active"><a href="#changeCareerHr" data-toggle="tab">HR <span id="cr_Hr_total"></span></a></li>
										  <li><a href="#changeCareerClosed" data-toggle="tab">Closed <span id="cr_Closed_total"></span></a></li>
										  <li><a href="#changeCareerDeclined" data-toggle="tab">Declined <span id="cr_Declined_total"></span></a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="changeCareerHr">
												<!-- list of family visit hr request start-->
												<div id="changeCareerHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfChangeCareerRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of change career hr request end-->
												<!-- employee details - family visit hr and update start -->
												<div id="changeCareerHrDetails" class="hideContentAi">
													<table id="cc_encoder_details_cc_hr" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																					        
														</tbody>
													</table>
													
													<table  id="cc_employee_details_cc_hr" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
																										
													<table id="changeCareerHrTableH" class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="changeCareerHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="changeCareerHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="changeCareerHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="changeCareerHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToChangeCareerHrTable" class="btn">Go Back</button>
															  <!-- 
															  <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															  <a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button type="button" class="btn btn-info" id="declineCcHr">Decline</button>
															   -->
															  <a id="changed_career_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button type="button" class="btn btn-info" id="updateCcHr">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - change career hr and update end -->	
											</div>

											<div class="tab-pane" id="changeCareerClosed">
												<!-- list of change career close request start-->
												<div id="changeCareerClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfChangeCareerRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of change career close request end-->
												<!-- employee details - change career close and update start -->
												<div id="changeCareerClosedDetails" class="hideContentAi">
													<table id="cc_encoder_details_cc_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																				        
														</tbody>
													</table>
													
													<table id="cc_employee_details_cc_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>
													
													<table id="cc_hr_details_cc_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>
												
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToChangeCareerClosedDetails" class="btn">Go Back</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - change career close and update end -->
											</div>
											
											<div class="tab-pane" id="changeCareerDeclined">
												<!-- list of change career declined request start-->
												<div id="changeCareerDeclinedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfChangeCareerRequestDeclined"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of change career declined request end-->
												<!-- employee details - change career declined update start -->
												<div id="changeCareerDeclinedDetails" class="hideContentAi">
													<table id="cc_encoder_details_cc_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																					        
														</tbody>
													</table>
													
													<table id="cc_employee_details_cc_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
													
													<table id="cc_declined_details_cc_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>													
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToChangeCareerDeclinedTable" class="btn">Go Back</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - change career declined and update end -->
											</div>											
										</div>