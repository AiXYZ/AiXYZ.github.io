										<ul class="nav nav-tabs">
										  <li class="active"><a href="#transferHrFirst" data-toggle="tab">HR First <span id="transfer_hr_first_total"></span> </a></li>
										  <li><a href="#transferFD" data-toggle="tab">FD <span id="transfer_fd_total"></span> </a></li>
										  <li><a href="#transferHrFinal" data-toggle="tab">HR Final <span id="transfer_hr_final_total"></span> </a></li>
										  <li><a href="#transferApproval" data-toggle="tab">Approval <span id="transfer_approval_total"></span> </a></li>
										  <li><a href="#transferClosed" data-toggle="tab">Closed <span id="transfer_closed_total"></span> </a></li>
										  <li><a href="#transferDeclined" data-toggle="tab">Declined <span id="transfer_declined_total"></span> </a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="transferHrFirst">
												<!-- list of transfer - HR First request start-->
												<div id="transferHrFirstTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfTransferRequestHrFirst"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Position</th>
																	<th class="tdTextInCenterAi">Project from</th>
																	<th class="tdTextInCenterAi">Project to</th>
																</tr>
															</thead>
															<tbody>
																																					        
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of transfer - HR First request end-->
												<!-- employee details - transfer HR First and update start -->
												<div id="transferHrFirstDetails" class="hideContentAi">
													<table id="transfer_encoder_details_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="transfer_employee_details_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																	        
														</tbody>
													</table>
																										
													<table id="transferHRFirstTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">HR First</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">
																	<div class="row-fluid">
																		<div class="span4">
																			<div class="control-group">
																				<label class="control-label" for="exitTotalSalary"> Total salary </label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="exitTotalSalary" readonly>
																				</div>
																			</div>
																		</div>
																		<div class="span4">
																		</div>
																		<div class="span4">
																		</div>
																	</div>
																	
																	<div class="row-fluid">
																		<div class="span4">
																			<div class="control-group">
																				<label class="control-label" for="exitIqama"> Iqama </label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="exitIqama">
																				</div>
																			</div>
																		</div>
																		<div class="span4">
																			<div class="control-group">
																				<label class="control-label" for="exitPreviousSalary"> Previous salary </label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="exitPreviousSalary">
																				</div>
																			</div>
																		</div>
																		<div class="span4">
																			<div class="control-group">
																				<label class="control-label" for="exitPreviousCashAdvance"> Previous cash advance </label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="exitPreviousCashAdvance">
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	<div class="row-fluid">
																		<div class="span4">
																			<div class="control-group">
																				<label class="control-label" for="exitPreviousPettyCash"> Previous petty cash </label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="exitPreviousPettyCash">
																				</div>
																			</div>
																		</div>
																		<div class="span4">
																			<div class="control-group">
																				<label class="control-label" for="exitEntryVisa"> Entry visa </label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="exitEntryVisa">
																				</div>
																			</div>
																		</div>
																		<div class="span4">
																			<div class="control-group">
																				<label class="control-label" for="exitMedicalInsurance"> Medical insurance </label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="exitMedicalInsurance">
																				</div>
																			</div>
																		</div>
																	</div>
																	
																	
																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="transferHRFirstNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="transferHRFirstNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="transferHrFirstAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="transferHrFirstAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToTransferHrFirstTable" class="btn">Go Back</button>
															  <button type="button" id="Update_Transfer_HR_First" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>												
													
													<!-- 
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
												  	<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													-->
															
												</div>																																																														
												<!-- employee details - transfer HR First and update end -->	
											</div>
											
											<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
											
											<div class="tab-pane" id="transferFD">
												<!-- list of transfer - FD request start-->
												<div id="transferFdTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfTransferRequestFd"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Position</th>
																	<th class="tdTextInCenterAi">Project from</th>
																	<th class="tdTextInCenterAi">Project to</th>
																</tr>
															</thead>
															<tbody>
																								        
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of transfer - FD request end-->
												<!-- employee details - transfer FD and update start -->
												<div id="transferFdDetails" class="hideContentAi">
													<table id="transfer_encoder_details_fd" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="transfer_employee_details_fd" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>	
													
													<table id="transfer_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																        
														</tbody>
													</table>													

													<table id="transferHrFirstUpdateInFDTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">HR First - Editing <span class="pull-right transferHrFirstUpdateInFD"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>													
															<tr>
																<td colspan="3">
																
																	<div id="transfer_hr_first_editing_fd_tab"></div>
																										
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Transfer_Update_HR_First_On_FD" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>
																									
													<table id="transferFdTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">FD</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="transferFdNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="transferFdNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="transferFdAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="transferFdAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToTransferFdTable" class="btn">Go Back</button>
															  <button type="button" id="Transfer_Update_FD" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>												
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
												  	<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													-->
															
												</div>																																																														
												<!-- employee details - transfer FD and update end -->
											</div>
											
											<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="transferHrFinal">
												<!-- list of transfer - HR Final request start-->
												<div id="transferHrFinalTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfTransferRequestHrFinal"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Position</th>
																	<th class="tdTextInCenterAi">Project from</th>
																	<th class="tdTextInCenterAi">Project to</th>
																</tr>
															</thead>
															<tbody>
																																					        
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of transfer - HR Final request end-->
												<!-- employee details - transfer HR Final and update start -->
												<div id="transferHrFinalDetails" class="hideContentAi">
													<table id="transfer_encoder_details_hrfinal" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="transfer_employee_details_hrfinal" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>	
													
													<table id="transfer_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="transfer_task_fd" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																        
														</tbody>
													</table>																										

													<table id="transferFdUpdateInHrFinalTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">FD - Editing <span class="pull-right transferFdUpdateInHrFinal"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">						
																
																	<div id="transfer_fd_editing_hrfinal_tab"></div>
																									
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Transfer_Update_FD_On_HRFinal" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>
												
													<table id="transferHrFinalTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">HR Final</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">				
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="transferHrFinalNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="transferHrFinalNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="transferHrFinalAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="transferHrFinalAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToTransferHrFinalTable" class="btn">Go Back</button>
															  <a id="transfer_hrfinal_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button type="button" id="Transfer_Update_HRFinal" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>				
													
													<!--
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<button type="button" class="btn btn-info">Decline</button>
													-->
																							
												</div>																																																														
												<!-- employee details - transfer HR Final and update end -->
											</div>
											
											<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
														
											<div class="tab-pane" id="transferApproval">
												<!-- list of transfer - approval request start-->
												<div id="transferApprovalTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfTransferRequestApproval"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Position</th>
																	<th class="tdTextInCenterAi">Project from</th>
																	<th class="tdTextInCenterAi">Project to</th>
																</tr>
															</thead>
															<tbody>
																																					        
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of transfer - approval request end-->
												<!-- employee details - transfer Approval and update start -->
												<div id="transferApprovalDetails" class="hideContentAi">
													<table id="transfer_encoder_details_approval" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="transfer_employee_details_approval" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>
													
													<table id="transfer_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="transfer_task_fd" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																	        
														</tbody>
													</table>																										

													<table id="transfer_task_hrfinal" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																		        
														</tbody>
													</table>

													<table id="transferHrFinalUpdateInApprovalTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">HR Final - Editing <span class="pull-right transferHrFinalUpdateInApproval"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">	
																														        																														
																	<div id="transfer_hrfinal_editing_approval_tab"></div>
																	
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Transfer_Update_HRFinal_On_Approval" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>

													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToTransferApprovalTable" class="btn">Go Back</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
													
													<!--
													  <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													-->
													
												</div>																																																														
												<!-- employee details - transfer Approval and update end -->
											</div>
											
											<!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="transferClosed">
												<!-- list of transfer - Closed request start-->
												<div id="transferClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfTransferRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Position</th>
																	<th class="tdTextInCenterAi">Project from</th>
																	<th class="tdTextInCenterAi">Project to</th>
																</tr>
															</thead>
															<tbody>
																																					        
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of transfer - Closed request end-->
												<!-- employee details - transfer Closed and update start -->
												<div id="transferClosedDetails" class="hideContentAi">
													<table id="transfer_encoder_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="transfer_employee_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>
													
													<table id="transfer_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="transfer_task_fd" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																	        
														</tbody>
													</table>																										

													<table id="transfer_task_hrfinal" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToTransferClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - transfer Closed and update end -->
											</div>
											<div class="tab-pane" id="transferDeclined">
												<!-- list of vaction - Declined request start-->
												<div id="transferDeclinedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfTransferRequestDeclined"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Position</th>
																	<th class="tdTextInCenterAi">Project from</th>
																	<th class="tdTextInCenterAi">Project to</th>
																</tr>
															</thead>
															<tbody>
																																			        
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of vaction - Declined request end-->
												<!-- employee details - Declined and update start -->
												<div id="transferDeclinedDetails" class="hideContentAi">
													<table id="transfer_encoder_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="transfer_employee_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>
													
													<table id="transfer_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																		        
														</tbody>
													</table>
													
													<table id="transfer_task_fd" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>																										

													<table id="transfer_task_hrfinal" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToTransferDeclinedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - Declined and update end -->
											</div>											
										</div>