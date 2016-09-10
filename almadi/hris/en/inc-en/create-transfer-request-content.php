<form id="transferForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="transferEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="transferEmployeeID" name="transferEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="transferEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="transferEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="transferEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="transferEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="transferEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="transferEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="transferProjectTo">Transfer project to <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="transferProjectTo" name="transferProjectTo">
																
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="transferEdOfTransfer">Expected date of transfer <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level gregorianDatepicker" id="transferEdOfTransfer" name="transferEdOfTransfer" onkeydown="return false">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="transferNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="transferNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="transferAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="transferAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" id="transferInsert" class="btn btn-info">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>