										<ul class="nav nav-tabs">
										  <li class="active"><a href="#familyVisitHr" data-toggle="tab">HR <span id="fv_Hr_total"></span></a></li>
										  <li><a href="#familyVisitClosed" data-toggle="tab">Closed <span id="fv_Closed_total"></span></a></li>
										  <li><a href="#familyVisitDeclined" data-toggle="tab">Declined <span id="fv_Declined_total"></span></a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="familyVisitHr">
												<!-- list of family visit hr request start-->
												<div id="familyVisitHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfFamilyVisitRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of family visit hr request end-->
												<!-- employee details - family visit hr and update start -->
												<div id="familyVisitHrDetails" class="hideContentAi">
													<table id="fv_encoder_details_fv_hr" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																					        
														</tbody>
													</table>
													
													<table id="fv_employee_details_fv_hr" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
																										
													<table id="familyVisitHrTableH" class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="familyVisitHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="familyVisitHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="familyVisitHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="familyVisitHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToFamilyVisitHrTable" class="btn">Go Back</button>
															  <!-- 
															  <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															  <a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button id="declineFvHr" type="button" class="btn btn-info">Decline</button>
															   -->
															  <a id="family_visit_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button id="updateFvHr" type="button" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - family visit hr and update end -->	
											</div>

											<div class="tab-pane" id="familyVisitClosed">
												<!-- list of family visit close request start-->
												<div id="familyVisitClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfFamilyVisitRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of family visit close request end-->
												<!-- employee details - family visit close and update start -->
												<div id="familyVisitClosedDetails" class="hideContentAi">
													<table id="fv_encoder_details_fv_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																					        
														</tbody>
													</table>
													
													<table id="fv_employee_details_fv_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
													
													<table id="fv_closed_details_fv_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>
												
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToFamilyVisitClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - family visit close and update end -->
											</div>
											
											<div class="tab-pane" id="familyVisitDeclined">
												<!-- list of family visit declined request start-->
												<div id="familyVisitDeclinedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfFamilyVisitRequestDeclined"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Project</th>
																	<th class="tdTextInCenterAi">Position</th>
																	<th class="tdTextInCenterAi">Message</th>
																	<th class="tdTextInCenterAi">Elapsed</th>
																</tr>
															</thead>
															<tbody>
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of family visit declined request end-->
												<!-- employee details - family visit declined update start -->
												<div id="familyVisitDeclinedDetails" class="hideContentAi">
													<table id="fv_encoder_details_fv_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																					        
														</tbody>
													</table>
													
													<table id="fv_employee_details_fv_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
													
													<table id="fv_declined_details_fv_declined" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>													
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToFamilyVisitDeclinedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - family visit declined and update end -->
											</div>											
										</div>