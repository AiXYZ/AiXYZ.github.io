										<ul class="nav nav-tabs">
										  <li class="active"><a href="#bankHr" data-toggle="tab">HR <span id="bank_hr_first_total"></span> </a></li>
										  <li><a href="#bankSendToBank" data-toggle="tab">Send To Bank <span id="bank_send_to_bank"> </span> </a></li>
										  <li><a href="#bankReceivedFromBank" data-toggle="tab">Received From Bank <span id="bank_received_from_bank_total"></span> </a></li>
										  <li><a href="#bankSendToSite" data-toggle="tab">Send To Site <span id="bank_send_to_site_total"></span> </a></li>
										  <li><a href="#bankClosed" data-toggle="tab">Closed <span id="bank_closed_total"></span> </a></li>
										  <li><a href="#bankDeclined" data-toggle="tab">Declined <span id="bank_declined_total"></span> </a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="bankHr">
												<!-- list of bank - HR request start-->
												<div id="bankHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfBankRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of bank - HR request end-->
												<!-- employee details - bank HR and update start -->
												<div id="bankHrDetails" class="hideContentAi">
													<table id="bank_encoder_details_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="bank_employee_details_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																	        
														</tbody>
													</table>
																										
													<table id="bankHrTableH" class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="bankHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="bankHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="bankHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="bankHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToBankHrTable" class="btn">Go Back</button>
															  <a id="bank_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button type="button" id="Update_Bank_HR_First" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>									
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<button type="button" class="btn btn-info">Decline</button>
													-->
																		
												</div>																																																														
												<!-- employee details - bank HR and update end -->	
											</div>
											
											<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
											
											<div class="tab-pane" id="bankSendToBank">
												<!-- list of bank - send to bank request start-->
												<div id="bankSendToBankTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfBankRequestSendToBank"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of bank - send to bank request end-->
												<!-- employee details - bank send to bank and update start -->
												<div id="bankSendToBankDetails" class="hideContentAi">
													<table id="bank_encoder_details_sendtobank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="bank_employee_details_sendtobank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>	
													
													<table id="bank_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																	        
														</tbody>
													</table>													

													<table id="bankHrUpdateInSendToBankTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">HR <span class="pull-right bankHrUpdateInSendToBank"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>													
															<tr>
																<td colspan="3">
																
																	<div id="bank_hr_first_editing_on_send_to_bank_tab"></div>
																	
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Bank_Update_HRFirst_On_Send_To_Bank" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>
																									
													<table id="bankSendToBankTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">Send To Bank</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="bankSendToBankNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="bankSendToBankNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="bankSendToBankAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="bankSendToBankAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToBankSendToBank" class="btn">Go Back</button>
															  <button type="button" id="Bank_Update_Send_To_Bank" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>								
													
													<!--
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
													-->
																			
												</div>																																																														
												<!-- employee details - bank send to bank and update end -->
											</div>
											
											<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="bankReceivedFromBank">
												<!-- list of bank - received from bank request start-->
												<div id="bankReceivedFromBankTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfBankRequestReceivedFromBank"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of bank - received from bank request end-->
												<!-- employee details - bank received from bank and update start -->
												<div id="bankReceivedFromBankDetails" class="hideContentAi">
													<table id="bank_encoder_details_receivedfrombank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="bank_employee_details_receivedfrombank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>	
													
													<table  id="bank_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="bank_task_sendtobank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																        
														</tbody>
													</table>																										

													<table id="bankSendToBankUpdateInReceivedFromBankTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">Send To Bank <span class="pull-right bankSendToBankUpdateInReceivedFromBank"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">				
																
																	<div id="bank_send_to_bank_on_received_from_bank_tab"></div>
																	
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Bank_Update_Send_To_Bank_On_Received_From_Bank" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>
												
													<table id="bankReceivedFromBankTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">Received From Bank</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="bankReceivedFromBankNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="bankReceivedFromBankNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="bankReceivedFromBankAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="bankReceivedFromBankAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToBankReceivedFromBankTable" class="btn">Go Back</button>
															  <button type="button" id="Bank_Update_Received_From_Bank" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>							
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
													-->
																				
												</div>																																																														
												<!-- employee details - bank received from bank and update end -->
											</div>
											
											<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
														
											<div class="tab-pane" id="bankSendToSite">
												<!-- list of bank - send to site request start-->
												<div id="bankSendToSiteTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfBankRequestSendToSite"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of bank - send to site request end-->
												<!-- employee details - bank send to site and update start -->
												<div id="bankSendToSiteDetails" class="hideContentAi">
													<table id="bank_encoder_details_sendtosite" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="bank_employee_details_sendtosite" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>
													
													<table id="bank_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="bank_task_sendtobank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>																										

													<table id="bank_task_receivedfrombank" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															
														</thead>
														<tbody>
																																		        
														</tbody>
													</table>

													<table id="bankReceivedFromBankUpdateInSendToSiteTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">Received From Bank <span class="pull-right bankReceivedFromBankUpdateInSendToSite"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">			
																
																	<div id="received_from_bank_on_send_to_site_tab"></div>
																													        																														
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Bank_Update_Received_From_Bank_On_Send_To_Site" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>

													<table id="bankSendToSiteTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">Send To Site</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="bankSendToSiteNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="bankSendToSiteNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="bankSendToSiteAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="bankSendToSiteAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToBankSendToSiteTable" class="btn">Go Back</button>
															  <button type="button" id="Bank_Update_Send_To_Site" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>								
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
													-->
																			
												</div>																																																														
												<!-- employee details - bank send to site and update end -->
											</div>
											
											<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="bankClosed">
												<!-- list of bank - Closed request start-->
												<div id="bankClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfBankRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of bank - Closed request end-->
												<!-- employee details - bank Closed and update start -->
												<div id="bankClosedDetails" class="hideContentAi">
													<table id="bank_encoder_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="bank_employee_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>
													
													<table id="bank_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="bank_task_sendtobank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																        
														</tbody>
													</table>																										

													<table id="bank_task_receivedfrombank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>

													<table id="bank_task_sendtosite" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToBankClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - bank Closed and update end -->
											</div>
											
											<!-- --------------------------------------------------------------------------------------------------------------------------------------------------- -->
											
											<div class="tab-pane" id="bankDeclined">
												<!-- list of bank - Declined request start-->
												<div id="bankDeclinedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfBankRequestDeclined"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of nank - Declined request end-->
												<!-- employee details - Declined and update start -->
												<div id="bankDeclinedDetails" class="hideContentAi">
													<table id="bank_encoder_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="bank_employee_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																			        
														</tbody>
													</table>
													
													<table id="bank_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="bank_task_sendtobank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																        
														</tbody>
													</table>																										

													<table id="bank_task_receivedfrombank" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>

													<table id="bank_task_sendtosite" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToBankDeclinedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - Declined and update end -->
											</div>											
										</div>