<div id="iqamaListOfPdfTable" class="hideContentAi">
	<form class="form-horizontal">							
		<table id="iqamaListOfPdf"  class="table table-striped table-bordered" style="width: 100%;">
			<thead>
				<tr>
					<th class="tdTextInCenterAi">Emp.ID</th>
					<th class="tdTextInCenterAi">Name</th>
					<th class="tdTextInCenterAi">Date</th>
					<!-- <th class="tdTextInCenterAi">Status</th>
					<th class="tdTextInCenterAi">Days</th> -->
				</tr>
			</thead>
			<tbody>
																							        
			</tbody>
		</table>									
	</form>
</div>										
<!-- list of new employee - HR request end-->
<!-- employee details - new employee HR and update start -->
<div id="iqamaListOfPdfDetails" class="hideContentAi">
	<table class="table table-bordered noHoverInTable" id="reNewIqamaTable">
		<tbody>
																																																						        
		</tbody>
	</table>
	
	<form id="reNewIqamaForm">
		<div class="row-fluid">
		  <div class="span12">
			<div class="control-group">											
				<label class="control-label" for="reNewIqamaPdf">Upload PDF file <span class="asteriskForRequired">*</span></label>
				<div class="controls">
					<input type="file" id="reNewIqamaPdf" accept=".pdf, .doc, .docx" required>
				</div> <!-- /controls -->				
			</div> <!-- /control-group -->							          
		  </div>
		</div>
		
		<div class="row-fluid">
			<div class="control-group pull-right">											
				<div class="controls"> 
				  <button type="button" id="goBackToIqamaListOfPdf" class="btn">Go Back</button>
				  <a id="downloadIqamaReNewPdf" target="_blank"><button type="button" class="btn btn-info">Download PDF</button></a>
				  <button type="button" class="btn btn-info" id="reNewIqamaSendRequestInsert">Send request</button>
				</div> <!-- /controls -->																			
			</div> <!-- /control-group -->
		</div>
	</form>														
</div>