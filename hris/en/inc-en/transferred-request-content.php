										<ul class="nav nav-tabs">
										  <li class="active"><a href="#transferredHr" data-toggle="tab">HR <span id="transferred_hr_first_total"></span> </a></li>
										  <li><a href="#transferredClosed" data-toggle="tab">Closed <span id="transferred_closed_total"></span> </a></li>
										</ul>
									
										<br>
									
										<div class="tab-content">
											<div class="tab-pane active" id="transferredHr">
												<!-- list of transferred - HR request start-->
												<div id="transferredHrTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfTransferredRequestHr"  class="table table-striped table-bordered" style="width: 100%;">
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
												<!-- list of transferred - HR request end-->
												<!-- employee details - transferred HR and update start -->
												<div id="transferredHrDetails" class="hideContentAi">
													<table id="transferred_encoder_details_hr_first" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																				        
														</tbody>
													</table>
													
													<table id="transferred_employee_details_hr_first" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																			        
														</tbody>
													</table>
																										
													<table id="transferredHrTableH" class="table table-bordered noHoverInTable">
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
																			<label class="control-label" for="transferredHrNotes">Notes</label>
																			<div class="controls">
																				<textarea rows="5" class="input-block-level" id="transferredHrNotes"></textarea>
																			</div> <!-- /controls -->				
																		</div> <!-- /control-group -->							          
																	  </div>
																	</div>																
																	<div class="row-fluid">
																	  <div class="span12">
																		<div class="control-group">											
																			<label class="control-label" for="transferredHrAttachment">Attachment</label>
																			<div class="controls">
																				<input type="file" id="transferredHrAttachment" accept=".pdf, .doc, .docx">
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
															  <button type="button" id="goBackToTransferredHrTable" class="btn">Go Back</button>
															  <!-- <button href="#deleteInRequest" data-toggle="modal" type="button" class="btn btn-danger">Delete</button>
															  <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															  <a id="transferred_hrfirst_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
															  <button id="Update_Transferred_HR_First" type="button" class="btn btn-info">Submit</button>
															</div> <!-- /controls -->																			
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - transferred HR and update end -->	
											</div>
											
											<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------- -->
		
											<div class="tab-pane" id="transferredClosed">
												<!-- list of transferred - Closed request start-->
												<div id="transferredClosedTable" class="hideContentAi">
													<form class="form-horizontal">							
														<table id="listOfTransferredRequestClosed"  class="table table-striped table-bordered" style="width: 100%;">
															<thead>
																<tr>
																	<th class="tdTextInCenterAi">Emp.ID</th>
																	<th class="tdTextInCenterAi">Name</th>
																	<th class="tdTextInCenterAi">Nationality</th>
																	<th class="tdTextInCenterAi">Iqama</th>
																	<th class="tdTextInCenterAi">Project</th>
																	<th class="tdTextInCenterAi"> Position </th>
																</tr>
															</thead>
															<tbody>
															</tbody>
														</table>									
													</form>
												</div>										
												<!-- list of transferred - Closed request end-->
												<!-- employee details - transferred Closed and update start -->
												<div id="transferredClosedDetails" class="hideContentAi">
													<table id="transferred_encoder_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																			        
														</tbody>
													</table>
													
													<table id="transferred_employee_details_closed" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																		        
														</tbody>
													</table>
													
													<table id="transferred_task_hrfirst" class="table table-bordered noHoverInTable">
														<thead>
															
														</thead>
														<tbody>
																																																																		        
														</tbody>
													</table>																										
													
													<div class="row-fluid">
														<div class="control-group pull-right">											
															<div class="controls">
															  <button type="button" id="goBackToTransferredClosedTable" class="btn">Go Back</button>
															  <!-- <button href="#messageInRequest" data-toggle="modal" type="button" class="btn btn-info">Message (1)</button> -->
															</div> <!-- /controls -->				
														</div> <!-- /control-group -->
													</div>														
												</div>																																																														
												<!-- employee details - transferred Closed and update end -->
											</div>
										
										</div>