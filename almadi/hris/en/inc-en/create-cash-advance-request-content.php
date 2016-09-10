<form id="cashAdvanceForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="cashEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="cashEmployeeID" name="cashEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="cashEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="cashEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="cashEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="cashEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="cashEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="cashEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="cashEmpAmount">Amount <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="cashEmpAmount" name="cashEmpAmount">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="cashNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="cashNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="cashAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="cashAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" id="cashAdvanceInsert" class="btn btn-info">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>