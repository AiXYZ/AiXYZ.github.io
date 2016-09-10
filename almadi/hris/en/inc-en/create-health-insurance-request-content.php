<form id="healthInsuranceForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="hiEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="hiEmployeeID" name="hiEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="hiEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="hiEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="hiEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="hiEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="hiEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="hiEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="hiEmpIqama">Iqama </label>
			<div class="controls">
				<input type="text" class="input-block-level" id="hiEmpIqama" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="hiIssues">Issues <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="hiIssues" name="hiIssues">
																
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div id="hiProblemViews" class="span3 hideContentAi">
		<div class="control-group">											
			<label class="control-label" for="hiProblem">Problem <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="hiProblem" name="hiProblem">
												
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="hiNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="hiNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="hiAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="hiAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" id="healthInsuranceInsert" class="btn btn-info">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>