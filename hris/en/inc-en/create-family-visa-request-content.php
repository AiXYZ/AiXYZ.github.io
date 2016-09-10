<form id="familyVisitForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="familyVisitEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="familyVisitEmployeeID" name="familyVisitEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="familyVisitEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="familyVisitEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="familyVisitEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="familyVisitEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="familyVisitEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="familyVisitEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="familyVisitType">Type of visit <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="familyVisitType" name="familyVisitType">
					<option style="display:none;" value="">Select</option>
					<option value="Permanent">Permanent</option>
					<option value="Temporary">Temporary</option>
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="familyVisitNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="familyVisitNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="familyVisitAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="familyVisitAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" id="familyVisitInsert" class="btn btn-info">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>