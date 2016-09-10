<form id="careerForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="careerEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="careerEmployeeID" name="careerEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="careerEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="careerEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="careerEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="careerEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="careerEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="careerEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="careerEmpPositionOnVisa">Position on visa</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="careerEmpPositionOnVisa" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="careerNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="careerNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="careerAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="careerAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" class="btn btn-info" id="careerInsert">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>