<form id="bankForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="bankEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="bankEmployeeID" name="bankEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="bankEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="bankEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="bankEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="bankEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="bankEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="bankEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="bankEmpIqama">Iqama </label>
			<div class="controls">
				<input type="text" class="input-block-level" id="bankEmpIqama" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="bankIssues">Issues <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="bankIssues" name="bankIssues">
																	
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div id="bankProblemViews" class="span3 hideContentAi">
		<div class="control-group">											
			<label class="control-label" for="bankProblem">Problem <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="bankProblem" name="bankProblem">
																
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="bankNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="bankNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="bankAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="bankAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" id="bankInsert" class="btn btn-info">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>