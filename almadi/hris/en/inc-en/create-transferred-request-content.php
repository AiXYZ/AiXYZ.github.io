<ul class="nav nav-tabs">
  <li class="active"><a href="#transferredForm" data-toggle="tab">Form</a></li>
  <li><a href="#transferredPdf" data-toggle="tab">PDF</a></li>
</ul>

<br>

<div class="tab-content">
	<div class="tab-pane active" id="transferredForm">
		<!-- joining transferred form start -->
		<form id="transferredFormPending">
		<div class="row-fluid">
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="transferredEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="text" class="input-block-level" id="transferredEmployeeID" name="transferredEmployeeID">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="transferredEmpName">Name</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="transferredEmpName" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>	
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="transferredEmpProject">Project</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="transferredEmpProject" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="transferredEmpPosition">Position</label>
					<div class="controls">
						<input type="text" class="input-block-level" id="transferredEmpPosition" disabled>
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>		
		</div>
		
		<div class="row-fluid">			
			<div class="span3">
				<div class="control-group">											
					<label class="control-label" for="transferredJobSiteReportingDate">Job-Site Reporting Date <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="text" class="input-block-level gregorianDatepicker" id="transferredJobSiteReportingDate" onkeydown="return false" name="transferredJobSiteReportingDate">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->	
			</div>					
		</div>
		
		<div class="row-fluid">
		  <div class="span12">
			<div class="control-group">											
				<label class="control-label" for="transferredNotes">Notes </label>
				<div class="controls">
					<textarea rows="5" class="input-block-level" id="transferredNotes"></textarea>
				</div> <!-- /controls -->				
			</div> <!-- /control-group -->							          
		  </div>
		</div>	
																	
		<!-- <div class="row-fluid"> -->
		  <!-- <div class="span12"> -->
			<!-- <div class="control-group"> -->											
				<!-- <label class="control-label" for="transferredAttachment">Attachment</label> -->
				<!-- <div class="controls"> -->
					<!-- <input type="file" id="transferredAttachment" accept=".pdf, .doc, .docx"> -->
				<!-- </div> --> <!-- /controls -->				
			<!-- </div> --> <!-- /control-group -->							          
		  <!-- </div> -->
		<!-- </div> -->
		
		<div class="row-fluid">
			<div class="control-group pull-right">											
				<div class="controls"> 
				  <button type="button" id="transferredPending" class="btn btn-info">Submit</button>
				</div> <!-- /controls -->																			
			</div> <!-- /control-group -->
		</div>
		</form>
		<!-- joining transferred form end -->
	</div>

	<div class="tab-pane" id="transferredPdf">
		<!-- joining transferred pdf start -->
		<div id="transferredListOfPdfTable" class="hideContentAi">
			<form id="transferredFormUpdate" class="form-horizontal">							
				<table id="transferredListOfPdf"  class="table table-striped table-bordered" style="width: 100%;">
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
		<div id="transferredListOfPdfDetails" class="hideContentAi">
			<table id="transferred_pdf_details" class="table table-bordered noHoverInTable">
				<tbody>
																																																								        
				</tbody>
			</table>
			
			<form id="transferredPdfFormValidation">
			<div class="row-fluid">
			  <div class="span12">
				<div class="control-group">											
					<label class="control-label" for="transferredReportingPdf">Upload PDF file <span class="asteriskForRequired">*</span></label>
					<div class="controls">
						<input type="file" id="transferredReportingPdf" accept=".pdf, .doc, .docx" name="transferredReportingPdf">
					</div> <!-- /controls -->				
				</div> <!-- /control-group -->							          
			  </div>
			</div>
			
			<div class="row-fluid">
				<div class="control-group pull-right">											
					<div class="controls"> 
					  <button type="button" id="goBackToTransferredListOfPdf" class="btn">Go Back</button>
					  <a id="transferred_GeneratePDF" target="_blank"><button type="button" class="btn btn-info">Generate PDF</button></a>
					  <button type="button" id="transferredUpdate" class="btn btn-info">Send request</button>
					</div> <!-- /controls -->																			
				</div> <!-- /control-group -->
			</div>	
			</form>														
		</div>																																																														
		<!-- joining transferred pdf end -->
	</div>

</div>