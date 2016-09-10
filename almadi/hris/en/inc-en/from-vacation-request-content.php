										<ul class="nav nav-tabs">
										  <li class="active"><a href="#fromVacationHr" data-toggle="tab">HR <span id="FromV_Hr_total"></span></a></li>
										  <li><a href="#fromVacationClosed" data-toggle="tab">Closed <span id="FromV_Closed_total"></span></a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="fromVacationHr">
												<!-- list of from vacation - HR request start-->
												<div id="fromVacationHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOffromVacationRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of from vacation - HR request end-->
												<!-- employee details - from vacation HR and update start -->
												<div id="fromVacationHrDetails" class="hideContentAi">
													<table id="FromV_encoder_details_FromV_hr" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																						        
														</tbody>
													</table>
													
													<table id="FromV_employee_details_FromV_hr" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
																										
													<table id="fromVacationHrTableH" class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="fromVacationHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="fromVacationHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="fromVacationHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="fromVacationHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToFromVacationHrTable" class="btn">Go Back</button>
															  <!-- 
															  <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															   -->
															   <a id="from_vacation_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button id="updateFromVHr" type="button" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - from vacation HR and update end -->	
											</div>
		
											<div class="tab-pane" id="fromVacationClosed">
												<!-- list of from vacation - Closed request start-->
												<div id="fromVacationClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfFromVacationRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of from vacation - Closed request end-->
												<!-- employee details - from vacation Closed and update start -->
												<div id="fromVacationClosedDetails" class="hideContentAi">
													<table id="FromV_encoder_details_FromV_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																						        
														</tbody>
													</table>
													
													<table id="FromV_employee_details_FromV_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="FromV_closed_details_FromV_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>																										
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToFromVacationClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - from vacation Closed and update end -->
											</div>
										
										</div>