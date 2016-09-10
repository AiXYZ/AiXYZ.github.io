										<ul class="nav nav-tabs">
										  <li class="active"><a href="#hiHr" data-toggle="tab">HR <span id="health_hr_first_total"></span> </a></li>
										  <li><a href="#hiSendToCompany" data-toggle="tab">Send To Company  <span id="health_send_to_company_total"></span> </a></li>
										  <li><a href="#hiReceivedFromCompany" data-toggle="tab">Received From Company <span id="health_received_from_company_total"></span> </a></li>
										  <li><a href="#hiSendToSite" data-toggle="tab">Send To Site <span id="health_send_to_site_total"></span> </a></li>
										  <li><a href="#hiClosed" data-toggle="tab">Closed <span id="health_closed_total"></span> </a></li>
										  <li><a href="#hiDeclined" data-toggle="tab">Declined <span id="health_declined_total"></span> </a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="hiHr">
												<!-- list of Health Insurance - HR request start-->
												<div id="hiHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfHiRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of Health Insurance - HR request end-->
												<!-- employee details - Health Insurance HR and update start -->
												<div id="hiHrDetails" class="hideContentAi">
													<table id="health_encoder_details_hr_first" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="health_employee_details_hr_first" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																	        
														</tbody>
													</table>
																										
													<table id="hiHrTableH" class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="hiHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="hiHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="hiHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="hiHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToHiHrTable" class="btn">Go Back</button>
															  <a id="health_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button type="button" id="Update_Health_Insurance_HR_First" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>					
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<button type="button" class="btn btn-info">Decline</button>
													-->
																						
												</div>																																																														
												<!-- employee details - Health Insurance HR and update end -->	
											</div>
											
											<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
											
											<div class="tab-pane" id="hiSendToCompany">
												<!-- list of Health Insurance - send to company request start-->
												<div id="hiSendToCompanyTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOHiRequestSendToCompany"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of Health Insurance - send to company request end-->
												<!-- employee details - Health Insurance send to company and update start -->
												<div id="hiSendToCompanyDetails" class="hideContentAi">
													<table id="health_encoder_details_send_to_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="health_employee_details_send_to_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>	
													
													<table id="health_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																	        
														</tbody>
													</table>													

													<table id="hiHrUpdateInSendToCompanyTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">HR - Editing <span class="pull-right hiHrUpdateInSendToCompany"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>													
															<tr>
																<td colspan="3">
																
																	<div id="health_hr_first_editing_on_send_to_company_tab"></div>
																
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Update_Health_Insurance_HR_First_On_Send_To_Company_Tab" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>
																									
													<table id="hiSendToCompanyTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">Send To Company</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="hiSendToCompanyNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="hiSendToCompanyNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="hiSendToCompanyAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="hiSendToCompanyAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToHiSendToCompany" class="btn">Go Back</button>
															  <button type="button" id="Update_Health_Insurance_Send_To_Company" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>		
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
													-->
																									
												</div>																																																														
												<!-- employee details - Health Insurance send to company and update end -->
											</div>
											
											<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="hiReceivedFromCompany">
												<!-- list of Health Insurance - received from company request start-->
												<div id="hiReceivedFromCompanyTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfHiRequestReceivedFromCompany"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of Health Insurance - received from company request end-->
												<!-- employee details - Health Insurance received from company and update start -->
												<div id="hiReceivedFromCompanyDetails" class="hideContentAi">
													<table id="health_encoder_details_received_from_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="health_employee_details_received_from_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>	
													
													<table id="health_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																						        
														</tbody>
													</table>
													
													<table id="health_task_send_to_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																	        
														</tbody>
													</table>																										

													<table id="hiSendToCompanyUpdateInReceivedFromCompanyTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">Send To Company - Editing <span class="pull-right hiSendToCompanyUpdateInReceivedFromCompany"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">				
																
																	<div id="health_send_to_company_editing_on_received_from_company_tab"></div>
																											
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Update_Health_Insurance_Send_To_Company_On_Received_From_Company_Tab" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>
												
													<table id="hiReceivedFromCompanyTableH" class="table table-bordered noHoverInTable">
														<thead>
															<tr>
																<th colspan="3">Received From Company</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">															
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="hiReceivedFromCompanyNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="hiReceivedFromCompanyNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="hiReceivedFromCompanyAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="hiReceivedFromCompanyAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToHiReceivedFromCompany" class="btn">Go Back</button>
															  <button type="button" id="Update_Health_Insurance_Received_From_Company" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>					
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
												  	<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
													-->
																						
												</div>																																																														
												<!-- employee details - Health Insurance received from company and update end -->
											</div>
											
											<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->
														
											<div class="tab-pane" id="hiSendToSite">
												<!-- list of bank - Health Insurance to site request start-->
												<div id="hiSendToSiteTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfHiRequestSendToSite"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of bank - Health Insurance to site request end-->
												<!-- employee details - Health Insurance send to site and update start -->
												<div id="hiSendToSiteDetails" class="hideContentAi">
													<table id="health_encoder_details_send_to_site" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="health_employee_details_send_to_site" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>
													
													<table id="health_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																						        
														</tbody>
													</table>
													
													<table id="health_task_send_to_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																	        
														</tbody>
													</table>																										

													<table id="health_task_received_from_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>

													<table id="hiReceivedFromCompanyUpdateInSendToSiteTable" class="table table-bordered noHoverInTable hideContentAi">
														<thead>
															<tr>
																<th colspan="3">Received From Company - Editing <span class="pull-right hiReceivedFromCompanyUpdateInSendToSite"><i class="icon-large icon-remove"></i></span></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="3">		
																
																	<div id="health_received_from_company_editing_on_send_to_site_tab"></div>
																													        																														
																	<div class="row-fluid">
																		<div class="control-group pull-right">											
																			<div class="controls">
																			  <button type="button" id="Update_Health_Insurance_Received_From_Company_On_Send_To_Site_Tab" class="btn btn-info">Save</button>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->
																	</div>																																																	
																</td>
															</tr>																						        
														</tbody>
													</table>

													<table id="hiSendToSiteTableH" class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="hiSendToSiteNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="hiSendToSiteNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="hiSendToSiteAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="hiSendToSiteAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToHiSendToSiteTable" class="btn">Go Back</button>
															  <button type="button" id="Update_Health_Insurance_Send_To_Site" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>				
													
													<!--  
													<button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
													<button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button>
													<a href="pdf-file-location.php" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
													-->
																							
												</div>																																																														
												<!-- employee details - Health Insurance send to site and update end -->
											</div>
											
											<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

											<div class="tab-pane" id="hiClosed">
												<!-- list of Health Insurance - Closed request start-->
												<div id="hiClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfHiRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of Health Insurance - Closed request end-->
												<!-- employee details - Health Insurance Closed and update start -->
												<div id="hiClosedDetails" class="hideContentAi">
													<table id="health_encoder_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="health_employee_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>
													
													<table id="health_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																						        
														</tbody>
													</table>
													
													<table id="health_task_send_to_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																	        
														</tbody>
													</table>																										

													<table id="health_task_received_from_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																						        
														</tbody>
													</table>

													<table id="health_task_send_to_site" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToHiClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - Health Insurance Closed and update end -->
											</div>
											<div class="tab-pane" id="hiDeclined">
												<!-- list of Health Insurance - Declined request start-->
												<div id="hiDeclinedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfHiRequestDeclined"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of Health Insurance - Declined request end-->
												<!-- employee details - Health Insurance Declined and update start -->
												<div id="hiDeclinedDetails" class="hideContentAi">
													<table id="health_encoder_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<table id="health_employee_details_declined" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																					        
														</tbody>
													</table>
													
													<table id="health_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																						        
														</tbody>
													</table>
													
													<table id="health_task_send_to_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																	        
														</tbody>
													</table>																										

													<table id="health_task_received_from_company" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																						        
														</tbody>
													</table>

													<table id="health_task_send_to_site" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																					        
														</tbody>
													</table>
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToHiDeclinedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - Health Insurance Declined and update end -->
											</div>											
										</div>