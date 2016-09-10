<ul class="nav nav-tabs">
  <li class="active"><a href="#fromVacationForm" data-toggle="tab">Form</a></li>
  <li><a href="#fromVacationPdf" data-toggle="tab">PDF</a></li>
</ul>

<br>

<div class="tab-content">
	<div class="tab-pane active" id="fromVacationForm">
		<!-- joining from vacation form start -->
		<form id="fromVacationFormPending">
		<div class="row-fluid">
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="fromVacationEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="text" class="input-block-level" id="fromVacationEmployeeID" name="fromVacationEmployeeID">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="fromVacationEmpName">Name</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="fromVacationEmpName" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>	
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="fromVacationEmpProject">Project</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="fromVacationEmpProject" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="fromVacationEmpPosition">Position</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="fromVacationEmpPosition" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>		
		</div>
		
		<div class="row-fluid">
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="fromVacationEntryDate">Entry date <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="text" class="input-block-level gregorianDatepicker" id="fromVacationEntryDate" onkeydown="return false" name="fromVacationEntryDate">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="fromVacationContract">Existing Contract? <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<select class="input-block-level" id="fromVacationContract" name="fromVacationContract">
							<option style="display:none;" value="">Select</option>
							<option value="Yes">Yes</option>
							<option value="No">No</option>														
						</select>				
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>				
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="fromVacationJobSiteReportingDate">Job-Site Reporting Date <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="text" class="input-block-level gregorianDatepicker" id="fromVacationJobSiteReportingDate" onkeydown="return false" name="fromVacationJobSiteReportingDate">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>					
		</div>
		
		<div class="row-fluid">
		  <div class="span12">
			<div class="control-group">											
				<label class="control-label" for="fromVacationNotes">Notes </label>
				<div class="controls">
					<textarea rows="5" class="input-block-level" id="fromVacationNotes"></textarea>
				</div> <!-- /controls -->				
			</div> <!-- /control-group -->							          
		  </div>
		</div>		
																
		<!-- <div class="row-fluid"> -->
		  <!-- <div class="span12"> -->
			<!-- <div class="control-group"> -->											
				<!-- <label class="control-label" for="fromVacationAttachment">Attachment</label> -->
				<!-- <div class="controls"> -->
					<!-- <input type="file" id="fromVacationAttachment" accept=".pdf, .doc, .docx"> -->
				<!-- </div> --> <!-- /controls -->				
			<!-- </div> --> <!-- /control-group -->							          
		  <!-- </div> -->
		<!-- </div> -->
		
		<div class="row-fluid">
			<div class="control-group pull-right">											
				<div class="controls"> 
				  <button type="button" id="fromVacationPending" class="btn btn-info">Submit</button>
				</div> <!-- /controls -->																			
			</div> <!-- /control-group -->
		</div>
		</form>
		<!-- joining from vacation form end -->
	</div>

	<div class="tab-pane" id="fromVacationPdf">
		<!-- joining from vacation pdf start -->
		<div id="fromVacationListOfPdfTable" class="hideContentAi">
			<form id="fromVacationFormUpdate" class="form-horizontal">							
				<table id="fromVacationListOfPdf"  class="table table-striped table-bordered" style="width: 100%;">
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
		<!-- list of new employee - HR request end-->
		<!-- employee details - new employee HR and update start -->
		<div id="fromVacationListOfPdfDetails" class="hideContentAi">
			<table id="from_vacation_pdf_details" class="table table-bordered noHoverInTable">
				<tbody>
																																																							        
				</tbody>
			</table>

			<form id="fromVacationPdfFormValidation">
			<div class="row-fluid">
			  <div class="span12">
				<div class="control-group">											
					<label class="control-label" for="fromVacationPdfFile">Upload PDF file <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="file" id="fromVacationPdfFile" accept=".pdf, .doc, .docx" name="fromVacationPdfFile">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->							          
			  </div>
			</div>
			
			<div class="row-fluid">
				<div class="control-group pull-right">											
					<div class="controls"> 
					  <button type="button" id="goBackToFromVacationListOfPdf" class="btn">Go Back</button>
					  <a id="fromVacation_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
					  <button type="button" id="fromVacationUpdate" class="btn btn-info">Send request</button>
					</div> <!-- /controls -->																			
				</div> <!-- /control-group -->
			</div>
			</form>														
		</div>																																																														
		<!-- employee details - new employee HR and update end -->
		<!-- joining from vacation pdf end -->
	</div>

</div>