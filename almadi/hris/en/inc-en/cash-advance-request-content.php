										<ul class="nav nav-tabs">
										  <li class="active"><a href="#cashAdvanceHr" data-toggle="tab">HR <span id="cash_hr_first_total"></span> </a></li>
										  <li><a href="#cashAdvanceApproval" data-toggle="tab">Approval <span id="cash_approval_total"></span> </a></li>
										  <li><a href="#cashAdvanceEmployeeReceived" data-toggle="tab">Employee Received <span id="cash_employee_received_total"></span> </a></li>
										  <li><a href="#cashAdvanceClosed" data-toggle="tab">Closed <span id="cash_closed_total"></span> </a></li>
										  <li><a href="#cashAdvanceDeclined" data-toggle="tab">Declined <span id="cash_declined_total"></span> </a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="cashAdvanceHr">
												<!-- list of cashAdvance - HR request start-->
												<div id="cashAdvanceHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfcashAdvanceRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of cashAdvance - HR request end-->
												<!-- employee details - cashAdvance HR and update start -->
												<div id="cashAdvanceHrDetails" class="hideContentAi">
													<table id="cash_advance_encoder_details_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="cash_advance_employee_details_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																        
														</tbody>
													</table>
																										
													<table id="cashAdvanceHrTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">HR</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">
																
																	<div class="row-fluid">
																		<div class="span4">
																			<div class="control-group">											
																				<label class="control-label" for="cashAdvanceHrTotalSalary">Total salary</label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="cashAdvanceHrTotalSalary" readonly>
																				</div> <!-- /controls -->				
																			</div> <!-- /control-group -->	
																		</div>
																		<div class="span4">
																			<div class="control-group">											
																				<label class="control-label" for="cashAdvanceHrTotalRemainingSalary">Total remaining salary</label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="cashAdvanceHrTotalRemainingSalary">
																				</div> <!-- /controls -->				
																			</div> <!-- /control-group -->	
																		</div>	
																		<div class="span4">
																			<div class="control-group">											
																				<label class="control-label" for="cashAdvanceHrOutstandingBalance">Outstanding balance</label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="cashAdvanceHrOutstandingBalance">
																				</div> <!-- /controls -->				
																			</div> <!-- /control-group -->	
																		</div>	
																	</div>	
																	
																	<div class="row-fluid">
																		<div class="span4">
																			<div class="control-group">											
																				<label class="control-label" for="cashAdvanceHrAmountLastAdvance">Amount - Last advance</label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="cashAdvanceHrAmountLastAdvance">
																				</div> <!-- /controls -->				
																			</div> <!-- /control-group -->	
																		</div>
																		<div class="span4">
																			<div class="control-group">											
																				<label class="control-label" for="cashAdvanceHrDateLastAdvance">Date - Last advance</label>
																				<div class="controls">
																					<input type="text" class="input-block-level gregorianDatepicker" id="cashAdvanceHrDateLastAdvance" onkeydown="return false">
																				</div> <!-- /controls -->				
																			</div> <!-- /control-group -->	
																		</div>	
																		<div class="span4">
																			<div class="control-group">											
																				<label class="control-label" for="cashAdvanceHrDeductionMethod">Deduction method</label>
																				<div class="controls">
																					<input type="text" class="input-block-level" id="cashAdvanceHrDeductionMethod">
																				</div> <!-- /controls -->				
																			</div> <!-- /control-group -->	
																		</div>	
																	</div>
																																																	
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="cashAdvanceHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="cashAdvanceHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>	
																																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="cashAdvanceHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="cashAdvanceHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToCashAdvanceHrTable" class="btn">Go Back</button>
															  <button type="button" id="Cash_Advance_Update_HR_first" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>							
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<button type="button" class="btn btn-info">Decline</button>
													-->
																				
												</div>																																																														
												<!-- employee details - cashAdvance HR and update end -->	
											</div>
											
											<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
											
											<div class="tab-pane" id="cashAdvanceApproval">
												<!-- list of cashAdvance - approval request start-->
												<div id="cashAdvanceApprovalTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfCashAdvanceRequestApproval"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of cashAdvance - approval request end-->
												<!-- employee details - cashAdvance approval and update start -->
												<div id="cashAdvanceApprovalDetails" class="hideContentAi">
													<table id="cash_advance_encoder_details_approval" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="cash_advance_employee_details_approval" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>	
													
													<table id="cash_advance_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																
															</tr>
														</thead>
														<tbody>
																																														        
														</tbody>
													</table>													

													<table id="cashAdvanceHrUpdateInApprovalTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">HR - Editing <span class="pull-right cashAdvanceHrUpdateInApproval"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>													
															<tr>
																<td colspan="3">
																
																	<div id="cash_advance_hr_first_editing_on_approval_tab"></div>
																
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Cash_Advance_Update_HRFirst_On_Approval" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																	
																</td>
															</tr>																					        
														</tbody>
													</table>
																									
													<table id="cashAdvanceApprovalTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">Approval</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="cashAdvanceApprovalNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="cashAdvanceApprovalNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="cashAdvanceApprovalAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="cashAdvanceApprovalAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToCashAdvanceApproval" class="btn">Go Back</button>
															  <a id="cash_advance_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button type="button" id="Cash_Advance_Update_Approval" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>					
													
													<!--
													  <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													-->
																						
												</div>																																																														
												<!-- employee details - cashAdvance approval and update end -->
											</div>
											
											<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="cashAdvanceEmployeeReceived">
												<!-- list of cashAdvance - emoloyee received request start-->
												<div id="cashAdvanceEmployeeReceivedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfcashAdvanceRequestEmployeeReceived"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of cashAdvance - employee received request end-->
												<!-- employee details - cashAdvance employee received and update start -->
												<div id="cashAdvanceEmployeeReceivedDetails" class="hideContentAi">
													<table id="cash_advance_encoder_details_employeereceived" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="cash_advance_employee_details_employeereceived" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>	
													
													<table id="cash_advance_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="cash_advance_task_approval" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																	        
														</tbody>
													</table>																										

													<table id="cashAdvanceApprovalUpdateInEmployeeReceivedTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">Approval - Editing <span class="pull-right cashAdvanceApprovalUpdateInEmployeeReceived"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">					
																
																	<div id="cash_advance_approval_editing_on_employee_received_tab"></div>
																										
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Cash_Advance_Update_Approval_On_Employee_Received" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>
												
													<table id="cashAdvanceEmployeeReceivedTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">Employee Received</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="cashAdvanceEmployeeReceivedNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="cashAdvanceEmployeeReceivedNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="cashAdvanceEmployeeReceivedAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="cashAdvanceEmployeeReceivedAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToCashAdvanceEmployeeReceived" class="btn">Go Back</button>
															  <button type="button" id="Cash_Advance_Update_Employee_Received" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>						
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													-->
																					
												</div>																																																														
												<!-- employee details - cashAdvance employee received and update end -->
											</div>
											
											<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="cashAdvanceClosed">
												<!-- list of cashAdvance - Closed request start-->
												<div id="cashAdvanceClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfcashAdvanceRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of cashAdvance - Closed request end-->
												<!-- employee details - cashAdvance Closed and update start -->
												<div id="cashAdvanceClosedDetails" class="hideContentAi">
													<table id="cash_advance_encoder_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="cash_advance_employee_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>
													
													<table id="cash_advance_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="cash_advance_task_approval" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>																										

													<table id="cash_advance_task_received_employee" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToCashAdvanceClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - cashAdvance Closed and update end -->
											</div>
											
											<div class="tab-pane" id="cashAdvanceDeclined">
												<!-- list of cashAdvance - Declined request start-->
												<div id="cashAdvanceDeclinedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfCashAdvanceRequestDeclined"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of cashAdvance - Declined request end-->
												<!-- employee details - Declined and update start -->
												<div id="cashAdvanceDeclinedDetails" class="hideContentAi">
													<table id="cash_advance_encoder_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="cash_advance_employee_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																						        
														</tbody>
													</table>
													
													<table id="cash_advance_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="cash_advance_task_approval" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>																										

													<table id="cash_advance_task_received_employee" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToCashAdvanceDeclinedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - Declined and update end -->
											</div>											
										</div>