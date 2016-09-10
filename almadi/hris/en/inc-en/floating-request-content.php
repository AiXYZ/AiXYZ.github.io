										<ul class="nav nav-tabs">
										  <li class="active"><a href="#feHrReceived" data-toggle="tab">HR Received <span id="fr_hr_received_total"></span></a></li>
										  <li><a href="#feHrClosing" data-toggle="tab">HR Closing <span id="fr_hr_closing_total"></span></a></li>
										  <li><a href="#feClosed" data-toggle="tab">Closed <span id="fr_closed_total"></span></a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="feHrReceived">
												<!-- list of family visit hr request start-->
												<div id="feHrReceivedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfFeRequestHrReceived"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of floating employee hr received request end-->
												<!-- employee details - family visit hr and update start -->
												<div id="feHrReceivedDetails" class="hideContentAi">
													<table id="floating_encoder_details_fr_hr_received" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																				        
														</tbody>
													</table>
													
													<table id="floating_employee_details_fr_hr_received" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
																										
													<table id="feHrReceivedTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">HR Received</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">																																														
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="feHrReceivedNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="feHrReceivedNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="feHrReceivedAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="feHrReceivedAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToFeHrReceivedTable" class="btn">Go Back</button>
															  <!-- 
															  <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															  <a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															   -->
															   <a id="floating_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button type="button" class="btn btn-info" id="updateFloatingHrReceived">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - floating employee hr received and update end -->	
											</div>

											<div class="tab-pane" id="feHrClosing">
												<!-- list of floating employee hr closing request start-->
												<div id="feHrClosingTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfFeHrRequestClosing"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of floating employee hr closing request end-->
												<!-- employee details - floating employee hr closing and update start -->
												<div id="feHrClosingDetails" class="hideContentAi">
													<table id="floating_encoder_details_fr_hr_closing" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																				        
														</tbody>
													</table>
													
													<table id="floating_employee_details_fr_hr_closing" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
														
													<table id="floating_hr_received_fr_hr_closing" class="table table-bordered noHoverInTable">
														<thead>

														</thead>														
														<tbody>
																																																			        
														</tbody>
													</table>
														
													<table id="floatingHrReceivedUpdateInHrClosingTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">HR Received <span class="pull-right floatingHrReceivedUpdateInHrClosing"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>														
														<tbody>
															<tr>
																<td colspan="3">
																	<div id="feHrReceivedContentInHrClosing"></div>
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" class="btn btn-info" id="feHrReceivedSaveInHrClosing">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																
																</td>
															</tr>																						        
														</tbody>
													</table>													
												
													<table id="feHrClosingTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">HR Closing</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">																																														
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="feHrClosingNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="feHrClosingNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="feHrClosingAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="feHrClosingAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToFeHrClosingTable" class="btn">Go Back</button>
															  <!-- 
															  <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															  <a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															   -->
															  <button type="button" class="btn btn-info" id="updateFloatingHrClosing">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - floating employee hr closing and update end -->
											</div>
											
											<div class="tab-pane" id="feClosed">
												<!-- list of floating employee closed request start-->
												<div id="feClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfFeRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of floating employee closed request end-->
												<!-- employee details - floating employee closed update start -->
												<div id="feClosedDetails" class="hideContentAi">
													<table id="floating_encoder_details_fr_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																				        
														</tbody>
													</table>
													
													<table id="floating_employee_details_fr_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																				        
														</tbody>
													</table>
													
													<table id="floating_hr_received_fr_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>													

													<table id="floating_hr_closed_fr_closed" class="table table-bordered noHoverInTable">
														<thead>

														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToFeClosedTable" class="btn">Go Back</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - floating employee closed and update end -->
											</div>											
										</div>