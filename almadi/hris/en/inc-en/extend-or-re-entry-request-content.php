										<ul class="nav nav-tabs">
										  <li class="active"><a href="#extendReEntryHr" data-toggle="tab">HR <span id="EnR_Hr_total"></span></a></li>
										  <li><a href="#extendReEntryClosed" data-toggle="tab">Closed <span id="EnR_Closed_total"></span></a></li>
										  <li><a href="#extendReEntryDeclined" data-toggle="tab">Declined <span id="EnR_Declined_total"></span></a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="extendReEntryHr">
												<!-- list of extend or reentry hr request start-->
												<div id="extendReEntryHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfExtendReEntryRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of extend or reentry hr request end-->
												<!-- employee details - extend or reentry hr and update start -->
												<div id="extendReEntryHrDetails" class="hideContentAi">
													<table id="EnR_encoder_details_EnR_hr" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																					        
														</tbody>
													</table>
													
													<table id="EnR_employee_details_EnR_hr" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
																										
													<table id="extendReEntryHrTableH" class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="extendReEntryHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="extendReEntryHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="extendReEntryHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="extendReEntryHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToExtendReEntryHrTable" class="btn">Go Back</button>
															  <!-- 
															  <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															  <a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button id="declineEnRHr" type="button" class="btn btn-info">Decline</button>
															   -->
															  <a id="extend_reentry_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button id="updateEnRHr" type="button" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - extend or reentry hr and update end -->	
											</div>

											<div class="tab-pane" id="extendReEntryClosed">
												<!-- list of extend or reentry close request start-->
												<div id="extendReEntryClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfExtendReEntryRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of extend or reentry close request end-->
												<!-- employee details - extend or reentry close and update start -->
												<div id="extendReEntryClosedDetails" class="hideContentAi">
													<table id="EnR_encoder_details_EnR_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																					        
														</tbody>
													</table>
													
													<table id="EnR_employee_details_EnR_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
													
													<table id="EnR_closed_details_EnR_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>
												
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToExtendReEntryClosedTable" class="btn">Go Back</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - extend or reentry close and update end -->
											</div>
											
											<div class="tab-pane" id="extendReEntryDeclined">
												<!-- list of extend or reentry declined request start-->
												<div id="extendReEntryDeclinedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfExtendReEntryRequestDeclined"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of extend or reentry declined request end-->
												<!-- employee details - extend or reentry declined update start -->
												<div id="extendReEntryDeclinedDetails" class="hideContentAi">
													<table id="EnR_encoder_details_EnR_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																					        
														</tbody>
													</table>
													
													<table id="EnR_employee_details_EnR_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
													
													<table id="EnR_declined_details_EnR_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>													
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToExtendReEntryDeclinedTable" class="btn">Go Back</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - extend or reentry declined and update end -->
											</div>											
										</div>