<form id="floatingForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="floatingEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="floatingEmployeeID" name="floatingEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="floatingEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="floatingEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="floatingEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="floatingEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="floatingEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="floatingEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="floatingReportingDate">Reporting date <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level gregorianDatepicker" id="floatingReportingDate" onkeydown="return false" name="floatingReportingDate">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="floatingNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="floatingNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="floatingAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="floatingAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" id="floatingInsert" class="btn btn-info">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>