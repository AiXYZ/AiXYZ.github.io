<form id="generalForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="generalEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="generalEmployeeID" name="generalEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="generalEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="generalEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="generalEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="generalEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="generalEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="generalEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
	<div class="span12">
		<div class="control-group">											
			<label class="control-label" for="generalEmpSubject">Subject <span class="asteriskForRequired">*</span> <span class="muted">Maximum of 20 characters only</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="generalEmpSubject" name="generalEmpSubject">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>			
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="generalNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="generalNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="generalAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="generalAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" id="generalInsert" class="btn btn-info">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>