<ul class="nav nav-tabs">
  <li class="active"><a href="#newEmployeeFormTab" data-toggle="tab">Form</a></li>
  <li><a href="#newEmployeePdfTab" data-toggle="tab">PDF</a></li>
</ul>

<br>

<div class="tab-content">
	<div class="tab-pane active" id="newEmployeeFormTab">
		<form id="newEmployeeForm">
		<div class="row-fluid">
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="newEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="text" class="input-block-level" id="newEmployeeID" name="newEmployeeID">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="newEmpName">Name</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="newEmpName" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>	
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="newEmpProject">Project</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="newEmpProject" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="newEmpPosition">Position</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="newEmpPosition" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>		
		</div>
		
		<div class="row-fluid">
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="newEmpEntryDate">Entry date </label>
					<div class="controls">
						<input type="text" class="input-block-level" id="newEmpEntryDate" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="newEmpCurrentSalary">Current salary </label>
					<div class="controls">
						<input type="text" class="input-block-level" id="newEmpCurrentSalary" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="newEmpJobSiteReportingDate">Job-Site Reporting Date <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="text" class="input-block-level gregorianDatepicker" id="newEmpJobSiteReportingDate" onkeydown="return false" name="newEmpJobSiteReportingDate">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>					
		</div>
		
		<div class="row-fluid">
		  <div class="span12">
			<div class="control-group">											
				<label class="control-label" for="newEmpNotes">Notes </label>
				<div class="controls">
					<textarea rows="5" class="input-block-level" id="newEmpNotes"></textarea>
				</div> <!-- /controls -->				
			</div> <!-- /control-group -->							          
		  </div>
		</div>
		<!-- 																
		<div class="row-fluid">
		  <div class="span12">
			<div class="control-group">											
				<label class="control-label" for="newEmpAttachment">Attachment</label>
				<div class="controls">
					<input type="file" id="newEmpAttachment" accept=".pdf, .doc, .docx">
				</div>				
			</div>							          
		  </div>
		</div>
		 -->
		
		<div class="row-fluid">
			<div class="control-group pull-right">											
				<div class="controls"> 
				  <button type="button" class="btn btn-info" id="newEmployeeInsert">Submit</button>
				</div> <!-- /controls -->																			
			</div> <!-- /control-group -->
		</div>
		</form>
	</div>

	<div class="tab-pane" id="newEmployeePdfTab">
		<!-- joining from vacation pdf start -->
		<div id="newEmployeeListOfPdfTable" class="hideContentAi">
			<form id="newEmployeeFormUpdate" class="form-horizontal">							
				<table id="newEmployeeListOfPdf"  class="table table-striped table-bordered" style="width: 100%;">
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
		<div id="newEmployeeListOfPdfDetails" class="hideContentAi">
			<table id="newEmployeeTablePdf" class="table table-bordered noHoverInTable">
				<tbody>
																																																							        
				</tbody>
			</table>

			<form id="newEmployeePdfFormValidation">
			<div class="row-fluid">
			  <div class="span12">
				<div class="control-group">											
					<label class="control-label" for="newEmployeePdfFile">Upload PDF file <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="file" id="newEmployeePdfFile" accept=".pdf, .doc, .docx" name="fromVacationPdfFile">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->							          
			  </div>
			</div>
			
			<div class="row-fluid">
				<div class="control-group pull-right">											
					<div class="controls"> 
					  <button type="button" id="goBackToNewEmployeeListOfPdf" class="btn">Go Back</button>
					  <a id="downloadNewEmployeePdf" target="_blank"><button type="button" class="btn btn-info">Download PDF</button></a>
					  <button type="button" id="newEmployeeUpdatePdf" class="btn btn-info">Send request</button>
					</div> <!-- /controls -->																			
				</div> <!-- /control-group -->
			</div>
			</form>														
		</div>																																																														
		<!-- employee details - new employee HR and update end -->
		<!-- joining from vacation pdf end -->
	</div>

</div>