<form id="exitForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="exitEmployeeID" name="exitEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="exitEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="exitEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="exitEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitTypeOfExit">Type of exit <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="exitTypeOfExit" name="exitTypeOfExit">
					<option style="display:none;" value="">Select</option>	
					<option value="eoc">End of contract</option>
					<option value="resign">Resign</option>
					<option value="terminate">Terminate</option>						
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span9">
		<div class="control-group">
			<label class="control-label">Replacement Requirements <span class="asteriskForRequired">*</span></label>											
			<label class="radio inline">
			  <input type="radio" name="eReplacementRequirementsOptions" id="eReplacementRequirementsOptions1" value="nr"> Need replacement
			</label>
			<label class="radio inline">
			  <input type="radio" name="eReplacementRequirementsOptions" id="eReplacementRequirementsOptions2" value="nnr"> No need replacement
			</label>
			<label class="radio inline">
			  <input type="radio" name="eReplacementRequirementsOptions" id="eReplacementRequirementsOptions3" value="ar"> Already have replacement
			</label>				
		</div> <!-- /control-group -->	
	</div>			
</div>

<div id="exitReplacementDetails" class="row-fluid hideContentAi">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitReplacementEmployeeID">Replacement Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="exitReplacementEmployeeID" name="exitReplacementEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitReplacementEmpName">Replacement Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="exitReplacementEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitReplacementEmpProject">Replacement Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="exitReplacementEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitReplacementEmpPosition">Replacement Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="exitReplacementEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitEdFromDate">Expected Departure - From Date <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level gregorianDatepicker" id="exitEdFromDate" name="exitEdFromDate" onkeydown="return false">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitEdToDate">Expected Departure - To Date <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level gregorianDatepicker" id="exitEdToDate" name="exitEdToDate" onkeydown="return false">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitAirportDeparture">Airport Departure <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="exitAirportDeparture" name="exitAirportDeparture">
																	
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="exitAirportDestinations">Airport Destinations <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="exitAirportDestinations" name="exitAirportDestinations">
																	
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="exitNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="exitNotes" name="exitNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="exitAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="exitAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" id="exitInsert" class="btn btn-info">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>