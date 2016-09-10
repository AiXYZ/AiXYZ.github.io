<form id="vacationForm">
<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationEmployeeID">Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationEmployeeID" name="vacationEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationEmpName">Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationEmpProject">Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationEmpPosition">Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
	<div class="span12">
		<div class="control-group">
			<label class="control-label">Replacement Requirements <span class="asteriskForRequired">*</span></label>											
			<label class="radio inline">
			  <input type="radio" name="vReplacementRequirementsOptions" id="vReplacementRequirementsOptions1" value="nr"> Need replacement
			</label>
			<label class="radio inline">
			  <input type="radio" name="vReplacementRequirementsOptions" id="vReplacementRequirementsOptions2" value="nnr"> No need replacement
			</label>
			<label class="radio inline">
			  <input type="radio" name="vReplacementRequirementsOptions" id="vReplacementRequirementsOptions3" value="ar"> Already have replacement
			</label>				
		</div> <!-- /control-group -->	
	</div>			
</div>

<div id="vacationReplacementDetails" class="row-fluid hideContentAi">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationReplacementEmployeeID">Replacement Employee ID <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationReplacementEmployeeID" name="vacationReplacementEmployeeID">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationReplacementEmpName">Replacement Name</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationReplacementEmpName" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationReplacementEmpProject">Replacement Project</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationReplacementEmpProject" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationReplacementEmpPosition">Replacement Position</label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationReplacementEmpPosition" disabled>
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationTypeOfLeave">Type of leave <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="vacationTypeOfLeave" name="vacationTypeOfLeave">
					<option style="display:none;" value="">Select</option>	
					<option value="Emergency">Emergency</option>
					<option value="Haj">Haj</option>
					<option value="Leave">Leave</option>
					<option value="Umra">Umra</option>
					<option value="Vacation">Vacation</option>
					<option value="Buisness Trip">Business Trip</option>						
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationNumberOfDays">Number of days <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level" id="vacationNumberOfDays" name="vacationNumberOfDays">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationWhoWillPayForVisa">Who will pay for Visa? <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="vacationWhoWillPayForVisa" name="vacationWhoWillPayForVisa">
					<option style="display:none;" value="">Select</option>
					<option value="1">Employee</option>
					<option value="2">Company</option>														
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
</div>

<div class="row-fluid">
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationEdFromDate">Expected Departure - From Date <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level gregorianDatepicker" id="vacationEdFromDate" name="vacationEdFromDate" onkeydown="return false">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationEdToDate">Expected Departure - To Date <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<input type="text" class="input-block-level gregorianDatepicker" id="vacationEdToDate" name="vacationEdToDate" onkeydown="return false">
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>	
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationAirportDeparture">Airport Departure <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="vacationAirportDeparture" name="vacationAirportDeparture">
				
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>
	<div class="span3">
		<div class="control-group">											
			<label class="control-label" for="vacationAirportDestinations">Airport Destinations <span class="asteriskForRequired">*</span></label>
			<div class="controls">
				<select class="input-block-level" id="vacationAirportDestinations" name="vacationAirportDestinations">
													
				</select>				
			</div> <!-- /controls -->				
		</div> <!-- /control-group -->	
	</div>		
</div>

<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="vacationNotes">Notes </label>
		<div class="controls">
			<textarea rows="5" class="input-block-level" id="vacationNotes"></textarea>
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>																
<div class="row-fluid">
  <div class="span12">
	<div class="control-group">											
		<label class="control-label" for="vacationAttachment">Attachment</label>
		<div class="controls">
			<input type="file" id="vacationAttachment" accept=".pdf, .doc, .docx">
		</div> <!-- /controls -->				
	</div> <!-- /control-group -->							          
  </div>
</div>

<div class="row-fluid">
	<div class="control-group pull-right">											
		<div class="controls"> 
		  <button type="button" class="btn btn-info" id="vacationInsert">Submit</button>
		</div> <!-- /controls -->																			
	</div> <!-- /control-group -->
</div>
</form>