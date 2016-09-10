$(document).ready(function() {
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is the counter for the cash advance request
	counterCashAdvanceRequest(); // This will display the number of pending rquest on the TABS
	
	function counterCashAdvanceRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/cash_advance_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var cash_hr_first_total = $.parseJSON(msg);
			$("#cash_hr_first_total").text(cash_hr_first_total['cash_hr_first_total']);
			
			// Approval
			var cash_approval_total = $.parseJSON(msg);
			$("#cash_approval_total").text(cash_approval_total['cash_approval_total']);
			
			// Employee received
			var cash_employee_received_total = $.parseJSON(msg);
			$("#cash_employee_received_total").text(cash_employee_received_total['cash_employee_received_total']);
			
			// Closed
			var cash_closed_total = $.parseJSON(msg);
			$("#cash_closed_total").text(cash_closed_total['cash_closed_total']);
			
			// Declined
			var cash_declined_total = $.parseJSON(msg);
			$("#cash_declined_total").text(cash_declined_total['cash_declined_total']);
			
			// Cash Advance Grand Total
			var cash_grand_total = $.parseJSON(msg);
			$("#car_grand_total").text(cash_grand_total['cash_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the cash advance request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showCashAdvanceTables(table_name, task){
    	//console.log(table_name + ' ' + task);
		var dataTable = $(table_name).DataTable({

			"fnRowCallback": function( row, data, index, oSettings ){
				// 1 - Personal information
				if(jQuery.inArray("1", data[8])!='-1'){
					var pinfo = 'Personal information <br>';
				}else {
					var pinfo = '';
				}
				
				// 2 - Contract information
				if(jQuery.inArray("2", data[8])!='-1'){
					var cinfo = 'Contract information <br>';
				}else {
					var cinfo = '';
				}
				
				// 3 - Salary information
				if(jQuery.inArray("3", data[8])!='-1'){
					var sinfo = 'Salary information <br>';
				}else {
					var sinfo = '';
				}
				
				// 4 - Passport information
				if(jQuery.inArray("4", data[8])!='-1'){
					var psinfo = 'Passport information <br>';
				}else {
					var psinfo = '';
				}
				
				// 5 - Iqama information
				if(jQuery.inArray("5", data[8])!='-1'){
					var iqinfo = 'Iqama information <br>';
				}else {
					var iqinfo = '';
				}
				
				// 6 - Medical information
				if(jQuery.inArray("6", data[8])!='-1'){
					var minfo = 'Medical information <br>';
				}else {
					var minfo = '';
				}
				
				// 7 - Upload files
				if(jQuery.inArray("7", data[8])!='-1'){
					var finfo = 'Document photo <br>';
				}else {
					var finfo = '';
				}
				
				var mstring = data[0]+' having following incorrect data: <br>';
				var message = mstring.concat(pinfo, cinfo, sinfo, pinfo, iqinfo, minfo, finfo);
				
				if(pinfo != '' || cinfo != '' || sinfo != '' || psinfo != '' || iqinfo != '' || minfo != '' || finfo != ''){
					
					var tooltipsTitle;
					tooltipsTitle = message;
					
					
					row.setAttribute( 'data-original-title', tooltipsTitle );
					
					// Apply the tooltips
					dataTable.$('tr').tooltip( {
						"delay": 0,
						"track": true,
						"fade": 250
					} );
					
					row.className = "invalidContractDateCursor";
					return row;
				}else {
					row.className = "validContractDate";
					return row;
				}
			},
			
//			"fnRowCallback": function( row, data, index ){
//				if(jQuery.isEmptyObject(data[6]) || data[6] == ''){
//					row.className = "invalidContractDate";
//					return row;
//				}else {
//					row.className = "validContractDate";
//					return row;
//				}
//			},
			"processing": true,
			"serverSide": true,	
			"destroy": true,
			"ajax": "../ajax/controller/employee_request/cash_advance_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the encoder details
	function encoder_details($tcode,$query){
		
		console.log($query); // Display the current query
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		$('#cash_advance_encoder_details_'+$query+' > thead').empty();
    		$('#cash_advance_encoder_details_'+$query+' > thead').append(
    				'<tr>'+
	    				'<th colspan="4">Encoder details <span class="muted">- '+$tcode+'</span> </th>'+
						'<input type="hidden" id="hidden_cash_advance_tcode_'+$query+'" value="'+$tcode+'" />'+
    				'</tr>'
    		);
    		
    		$('#cash_advance_encoder_details_'+$query+' > tbody').empty();
    		$('#cash_advance_encoder_details_'+$query+' > tbody').append(
    				'<tr>'+
    				'<td><strong>Employee ID</strong><br> '+encode_by['encode_by']+' </td>'+
					'<td><strong>Name</strong><br> '+encoder_name['encoder_name']+' </td>'+
					'<td><strong>Created date</strong><br> '+encode_date['encode_date']+' </td>'+
					'<td><strong>Elapsed day(s)</strong><br> '+elapsed_days['elapsed_days']+' </td>'+
    				'</tr>'
    		);
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the employee details
	function employee_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_id = $.parseJSON(msg);
    		var employee_name = $.parseJSON(msg);
    		var employee_pname = $.parseJSON(msg);
    		var employee_position = $.parseJSON(msg);
    		var employee_nationality = $.parseJSON(msg);
    		
    		var amount = $.parseJSON(msg);
    		var reason_for_cash_advance = $.parseJSON(msg);
    		
    		var request_file_path = $.parseJSON(msg);
    		var request_file_filename = $.parseJSON(msg);
    		
    		var employee_total_salary = $.parseJSON(msg);
    		
    		$('#cashAdvanceHrTotalSalary').val(employee_total_salary['employee_total_salary']);
    		
    		$('#cash_advance_employee_details_'+$query+' > thead').empty();
    		$('#cash_advance_employee_details_'+$query+' > thead').append(
    				'<tr>'+
    					'<th colspan="3">Employee details</th>'+
    				'</tr>'
    		);
    		
    		$('#cash_advance_employee_details_'+$query+' > tbody').empty();
    		$('#cash_advance_employee_details_'+$query+' > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+employee_id['employee_id']+' </td>'+
    					'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
    					'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
    					'<td><strong>Nationality</strong><br> '+employee_nationality['employee_nationality']+' </td>'+
    					'<td><strong>Amount</strong><br> '+amount['amount']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_filename['request_file_filename']+' </a></td>'+
    					'<td colspan="2"><strong>Notes</strong><br> '+reason_for_cash_advance['reason_for_cash_advance']+' </td>'+
    				'</tr>'
    		);
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr first details
	function cash_advance_hr_first($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_update_by = $.parseJSON(msg);
    		var hr_first_encoder_name = $.parseJSON(msg);
    		var hr_update_created = $.parseJSON(msg);
    		
    		var hr_update_days = $.parseJSON(msg);
    		var employee_total_salary = $.parseJSON(msg);
    		var hr_remaining_salary = $.parseJSON(msg);
    		
    		var hr_oustanding_balance = $.parseJSON(msg);
    		var hr_last_advance_amount = $.parseJSON(msg);
    		var hr_last_advance_date = $.parseJSON(msg);
    		
    		var hr_payment_method = $.parseJSON(msg);
    		var hr_first_file_path = $.parseJSON(msg);
    		var hr_first_file_path_filename = $.parseJSON(msg);
    		
    		var hr_notes = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#cash_advance_task_hrfirst > thead').empty();
	    		$('#cash_advance_task_hrfirst > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">HR <span class="pull-right cashAdvanceHrEditInApproval"><i class="icon-large icon-pencil"></i></span></th>'+
	    				'</tr>'
	    		);
    		}else {
    			$('#cash_advance_task_hrfirst > thead').empty();
	    		$('#cash_advance_task_hrfirst > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">HR <span class="pull-right cashAdvanceHrEditInApproval"> </span></th>'+
	    				'</tr>'
	    		);
    		}
    		
    		$('#cash_advance_task_hrfirst > tbody').empty();
    		$('#cash_advance_task_hrfirst > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+hr_update_by['hr_update_by']+' </td>'+
    					'<td><strong>Updated by</strong><br> '+hr_first_encoder_name['hr_first_encoder_name']+' </td>'+
    					'<td><strong>Date</strong><br> '+hr_update_created['hr_update_created']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Elapsed</strong><br> '+hr_update_days['hr_update_days']+' </td>'+
    					'<td><strong>Total salary</strong><br> '+employee_total_salary['employee_total_salary']+' </td>'+
    					'<td><strong>Total remaining salary</strong><br> '+hr_remaining_salary['hr_remaining_salary']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Outstanding balance</strong><br> '+hr_oustanding_balance['hr_oustanding_balance']+' </td>'+
    					'<td><strong>Amount - Last advance</strong><br> '+hr_last_advance_amount['hr_last_advance_amount']+' </td>'+
    					'<td><strong>Date - Last advance</strong><br> '+hr_last_advance_date['hr_last_advance_date']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Deduction method</strong><br> '+hr_payment_method['hr_payment_method']+' </td>'+
    					'<td colspan="2"><strong>Attachment</strong><br><a href="'+hr_first_file_path['hr_first_file_path']+'" target="_blank"> '+hr_first_file_path_filename['hr_first_file_path_filename']+' </a></td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td colspan="3"><strong>Notes</strong><br> '+hr_notes['hr_notes']+' </td>'+
    				'</tr>'
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.cashAdvanceHrEditInApproval').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.cashAdvanceHrEditInApproval').click(function() {
    			
    			$('#cash_advance_hr_first_editing_on_approval_tab').empty();
    			$('#cash_advance_hr_first_editing_on_approval_tab').append(
    					
						'<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="cashAdvanceHrTotalSalaryInApproval">Total salary</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="cashAdvanceHrTotalSalaryInApproval" value="'+employee_total_salary['employee_total_salary']+'" readonly>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="cashAdvanceHrTotalRemainingSalaryInApproval">Total remaining salary</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="cashAdvanceHrTotalRemainingSalaryInApproval" value="'+hr_remaining_salary['hr_remaining_salary']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+	
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="cashAdvanceHrOutstandingBalanceInApproval">Outstanding balance</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="cashAdvanceHrOutstandingBalanceInApproval" value="'+hr_oustanding_balance['hr_oustanding_balance']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+	
					'</div>'+	
					'<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="cashAdvanceHrAmountLastAdvanceInApproval">Amount - Last advance</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="cashAdvanceHrAmountLastAdvanceInApproval" value="'+hr_last_advance_amount['hr_last_advance_amount']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="cashAdvanceHrDateLastAdvanceInApproval">Date - Last advance</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level gregorianDatepicker" id="cashAdvanceHrDateLastAdvanceInApproval" value="'+hr_last_advance_date['hr_last_advance_date']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+	
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="cashAdvanceHrDeductionMethodInApproval">Deduction method</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="cashAdvanceHrDeductionMethodInApproval" value="'+hr_payment_method['hr_payment_method']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+	
					'</div>'+																																
					'<div class="row-fluid">'+
					  '<div class="span12">'+
						'<div class="control-group">'+											
							'<label class="control-label" for="cashAdvanceHrNotesInApproval">Notes</label>'+
							'<div class="controls">'+
								'<textarea rows="5" class="input-block-level" id="cashAdvanceHrNotesInApproval"> </textarea>'+
							'</div> <!-- /controls -->'+				
						'</div> <!-- /control-group -->'+							          
					  '</div>'+
					'</div>'+																
					'<div class="row-fluid">'+
					  '<div class="span4">'+
						'<div class="control-group">'+											
							'<label class="control-label" for="cashAdvanceHrAttachmentInApproval">Attachment</label>'+
							'<div class="controls">'+
								'<input type="file" id="cashAdvanceHrAttachmentInApproval" accept=".pdf, .doc, .docx">'+
							'</div> <!-- /controls -->'+				
						'</div> <!-- /control-group -->'+							          
					  '</div>'+
					  '<div class="span8">'+
						'<div class="control-group">'+											
							'<label class="control-label"> &nbsp; </label>'+
							'<div class="controls">'+
								'<a href="'+hr_first_file_path['hr_first_file_path']+'" target="_blank"> '+hr_first_file_path_filename['hr_first_file_path_filename']+' </a>'+
							'</div> <!-- /controls -->'+				
						'</div> <!-- /control-group -->'+							          
					  '</div>'+																	  
					'</div>'	
    					
    			);
    			
    			$('#cashAdvanceHrNotesInApproval').wysihtml5();
    			$('#cashAdvanceHrNotesInApproval').data("wysihtml5").editor.setValue();
 	    		$('#cashAdvanceHrNotesInApproval').val(hr_notes['hr_notes']);
 	    		 
 	    		var gregorianCalendarCashAdvance = $.calendars.instance('gregorian');
 	    		
 	    		//Gregorian datepicker start
 				$('#cashAdvanceHrDateLastAdvanceInApproval').calendarsPicker({
 					calendar: gregorianCalendarCashAdvance,
 					dateFormat: 'd/m/yyyy'});	
 				//Gregorian datepicker end
    			
    	    	$('#cash_advance_task_hrfirst').addClass('hideContentAi');
    	    	$("#cashAdvanceHrUpdateInApprovalTable").removeClass('hideContentAi');
    	    });
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the approval details
	function cash_advance_approval($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var approval_update_by = $.parseJSON(msg);
    		var approval_encoder_name = $.parseJSON(msg);
    		var approval_update_created = $.parseJSON(msg);
    		var approval_update_days = $.parseJSON(msg);
    		var approval_update_notes = $.parseJSON(msg);
    		var approval_file_path = $.parseJSON(msg);
    		var approval_file_path_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#cash_advance_task_approval > thead').empty();
	    		$('#cash_advance_task_approval > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">Approval <span class="pull-right cashAdvanceApprovalEditInEmployeeReceived"><i class="icon-large icon-pencil"></i></span></th>'+
	    				'</tr>'
	    		);
    		}else {
    			$('#cash_advance_task_approval > thead').empty();
	    		$('#cash_advance_task_approval > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">Approval <span class="pull-right cashAdvanceApprovalEditInEmployeeReceived"> </span></th>'+
	    				'</tr>'
	    		);
    		}
    		
    		$('#cash_advance_task_approval > tbody').empty();
    		$('#cash_advance_task_approval > tbody').append(
    				'<tr>'+
    					'<td><strong>Employye ID</strong><br> '+approval_update_by['approval_update_by']+' </td>'+
    					'<td><strong>Updated by</strong><br> '+approval_encoder_name['approval_encoder_name']+' </td>'+
    					'<td><strong>Date</strong><br> '+approval_update_created['approval_update_created']+' </td>'+
    				'</t>'+
    				
    				'<tr>'+
    					'<td><strong>Elapsed</strong><br> '+approval_update_days['approval_update_days']+' </td>'+
    					'<td colspan="2"><strong>Attachment</strong><br><a href="'+approval_file_path['approval_file_path']+'" target="_blank"> '+approval_file_path_filename['approval_file_path_filename']+' </a></td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td colspan="3"><strong>Notes</strong><br> '+approval_update_notes['approval_update_notes']+' </td>'+
    				'</tr>'
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.cashAdvanceApprovalEditInEmployeeReceived').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.cashAdvanceApprovalEditInEmployeeReceived').click(function() {
    			
    			$('#cash_advance_approval_editing_on_employee_received_tab').empty();
    			$('#cash_advance_approval_editing_on_employee_received_tab').append(
    					
    					'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="cashAdvanceApprovalNotesInEmployeeReceived">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="cashAdvanceApprovalNotesInEmployeeReceived"> بدون أجازات سابقة </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+																
						'<div class="row-fluid">'+
						  '<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="cashAdvanceApprovalAttachmentInEmployeeReceived">Attachment</label>'+
								'<div class="controls">'+
									'<input type="file" id="cashAdvanceApprovalAttachmentInEmployeeReceived" accept=".pdf, .doc, .docx">'+
								'</div> <!-- /controls -->'+
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						  '<div class="span8">'+
							'<div class="control-group">'+											
								'<label class="control-label"> &nbsp; </label>'+
								'<div class="controls">'+
									'<a href="'+approval_file_path['approval_file_path']+'" target="_blank"> '+approval_file_path_filename['approval_file_path_filename']+' </a>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+																	  
						'</div>'
    			);
    			
    			$('#cashAdvanceApprovalNotesInEmployeeReceived').wysihtml5();
    			$('#cashAdvanceApprovalNotesInEmployeeReceived').data("wysihtml5").editor.setValue();
 	    		$('#cashAdvanceApprovalNotesInEmployeeReceived').val(approval_update_notes['approval_update_notes']);
    			
    	    	$('#cash_advance_task_approval').addClass('hideContentAi');
    	    	$("#cashAdvanceApprovalUpdateInEmployeeReceivedTable").removeClass('hideContentAi');
    	    });	
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the approval details
	function cash_advance_employee_received($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_received_update_by = $.parseJSON(msg);
    		var employee_received_encoder_name = $.parseJSON(msg);
    		var employee_received_update_created = $.parseJSON(msg);
    		var employee_received_update_days = $.parseJSON(msg);
    		var employee_received_update_notes = $.parseJSON(msg);
    		var employee_received_file_path = $.parseJSON(msg);
    		var employee_received_file_path_filename = $.parseJSON(msg);
    		
    		$('#cash_advance_task_received_employee > thead').empty();
    		$('#cash_advance_task_received_employee > thead').append(
    				'<tr>'+
						'<th colspan="3">Employee Received</th>'+
					'</tr>'
    		);
    		
    		$('#cash_advance_task_received_employee > tbody').empty();
    		$('#cash_advance_task_received_employee > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+employee_received_update_by['employee_received_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+employee_received_encoder_name['employee_received_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+employee_received_update_created['employee_received_update_created']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Elapsed</strong><br> '+employee_received_update_days['employee_received_update_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+employee_received_file_path['employee_received_file_path']+'" target="_blank"> '+employee_received_file_path_filename['employee_received_file_path_filename']+' </a></td>'+
					'</tr>'+	
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+employee_received_update_notes['employee_received_update_notes']+' </td>'+
					'</tr>'	
    		);
    		
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	//cashAdvance HR start
	$('#cashAdvanceHrTable').removeClass('hideContentAi');
	
	$('#listOfcashAdvanceRequestHr tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#cashAdvanceHrTotalRemainingSalary').val('');
		$('#cashAdvanceHrOutstandingBalance').val('');
		$('#cashAdvanceHrAmountLastAdvance').val('');
		$('#cashAdvanceHrDateLastAdvance').val('');
		$('#cashAdvanceHrDeductionMethod').val('');
		$('#cashAdvanceHrNotes').data("wysihtml5").editor.setValue();
		$('#cashAdvanceHrNotes').val('');
		$('#cashAdvanceHrAttachment').val('');
		
		var table = $('#listOfcashAdvanceRequestHr').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'hrfirst'); // Display the Encoder details
		employee_details(tcodeid,'hrfirst'); // Display the Employee details
		
		$("#cashAdvanceHrTotalRemainingSalary").focus(); // Focus on Total remaining salary
		
		// Will check the input for the total remaining salary
    	$('#cashAdvanceHrTotalRemainingSalary').on('input', function(){
    		
    		var total_remaining_salary = $(this).val();
    		
    		var regx = /[0-9]/;
    		
    		if (!regx.test(total_remaining_salary) || total_remaining_salary.length == '') {
    			
    			$('#goBackToCashAdvanceHrTable').attr('disabled', true);
    			$('#Cash_Advance_Update_HR_first').attr('disabled', true);
    			
    			function reset () {
    				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
    				alertify.set({			
    					delay : 2000,
    				});
    			}// end function
    			
    			reset();
    			alertify.error('Error! Total remaining salary should be Numeric.');
    			return false;
    			
    		}else {
    			$('#goBackToCashAdvanceHrTable').attr('disabled', false);
    			$('#Cash_Advance_Update_HR_first').attr('disabled', false);
    		}// end if else
    		
    	}); // end 
    	
    	// Will check the input for the outstanding balance
    	$('#cashAdvanceHrOutstandingBalance').on('input', function(){
    		
    		var outstanding_balance = $(this).val();
    		
    		var regx = /[0-9]/;
    		
    		if (!regx.test(outstanding_balance) || outstanding_balance.length == '') {
    			$('#goBackToCashAdvanceHrTable').attr('disabled', true);
    			$('#Cash_Advance_Update_HR_first').attr('disabled', true);
    			
    			function reset () {
    				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
    				alertify.set({			
    					delay : 2000,
    				});
    			}// end function
    			
    			reset();
    			alertify.error('Error! Outstanding balance should be Numeric.');
    			return false;
    			
    		}else {
    			$('#goBackToCashAdvanceHrTable').attr('disabled', false);
    			$('#Cash_Advance_Update_HR_first').attr('disabled', false);
    		}// end if else
    		
    	}); // end 
    	
    	// Will check the input for the amount - last advance
    	$('#cashAdvanceHrAmountLastAdvance').on('input', function(){
    		
    		var last_advance = $(this).val();
    		
    		var regx = /[0-9]/;
    		
    		if (!regx.test(last_advance) || last_advance.length == '') {
    			$('#goBackToCashAdvanceHrTable').attr('disabled', true);
    			$('#Cash_Advance_Update_HR_first').attr('disabled', true);
    			
    			function reset () {
    				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
    				alertify.set({			
    					delay : 2000,
    				});
    			}// end function
    			
    			reset();
    			alertify.error('Error! Last balance should be Numeric.');
    			return false;
    			
    		}else {
    			$('#goBackToCashAdvanceHrTable').attr('disabled', false);
    			$('#Cash_Advance_Update_HR_first').attr('disabled', false);
    		}// end if else
    		
    	}); // end 
		
		$('#cashAdvanceHrTable').addClass('hideContentAi');
    	$("#cashAdvanceHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToCashAdvanceHrTable, a[href="#cashAdvanceHr"]').click(function() {
    	$('#cashAdvanceHrDetails').addClass('hideContentAi');
    	$("#cashAdvanceHrTable").removeClass('hideContentAi');
    });	
    
    showCashAdvanceTables('#listOfcashAdvanceRequestHr', 'cash_hr_first') // This will display the HR First table lists
	
	$('#cashAdvanceHrNotes').wysihtml5();
    
    // This will update the HR First
    $('#Cash_Advance_Update_HR_first').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_cash_advance_tcode_hrfirst').val();
    	
    	var cash_advance_attach_file = $('#cashAdvanceHrAttachment').val();
    	
    	var cash_advance_attach_fileLength = cash_advance_attach_file.length;
    	
    	if(cash_advance_attach_fileLength > 0){
    		
    		var cash_advance_attach_file = document.getElementById('cashAdvanceHrAttachment');
    		
    		if(cash_advance_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', cash_advance_attach_file.files[0]);
    		
    		var request = new XMLHttpRequest();
    		
    		request.onreadystatechange = function(){
				if(request.readyState == 4){
					try {
						var resp = JSON.parse(request.response);
					}catch(e){
						var resp = {
							status: 'error',
							data: 'Unknown error occurred: [' + request.responseText + ']'
						};// end
					}// end
					console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_cash_advance_request_attach_file.php?tcode='+tcode+'&path=cash_advance_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_cash_advance_tcode_hrfirst').val(),
			'total_remaining_salary':$('#cashAdvanceHrTotalRemainingSalary').val(),
			'outstanding_balance':$('#cashAdvanceHrOutstandingBalance').val(),
			'amount_last_advance':$('#cashAdvanceHrAmountLastAdvance').val(),
			'date_last_advance':$('#cashAdvanceHrDateLastAdvance').val(),
			'deduction_method':$('#cashAdvanceHrDeductionMethod').val(),
			'cash_advance_notes':$('#cashAdvanceHrNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_update_hr_first.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToCashAdvanceHrTable").attr("disabled", true);
    			$("#Cash_Advance_Update_HR_first").attr("disabled", true);
    		},
    		complete: function(){
    			showCashAdvanceTables('#listOfCashAdvanceRequestApproval', 'cash_approval') // This will display the Approval lists
    			$("#goBackToCashAdvanceHrTable").attr("disabled", false);
    			$("#Cash_Advance_Update_HR_first").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		showCashAdvanceTables('#listOfcashAdvanceRequestHr', 'cash_hr_first') // This will display the HR First table lists
    		
    		$('#cashAdvanceHrDetails').addClass('hideContentAi');
        	$("#cashAdvanceHrTable").removeClass('hideContentAi');
    		
    		counterCashAdvanceRequest(); // This will display the number of pending rquest on the TABS
    		
    		//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done
    	
    	//console.log('Update HR First');
    	
    }); // end
    
	//cashAdvance HR end
	
	/*--------------------------------------------------------------------------------------------------------------*/

	//cashAdvance approval start
	$('#cashAdvanceApprovalTable').removeClass('hideContentAi');
	
	$('#listOfCashAdvanceRequestApproval tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#cashAdvanceApprovalAttachment').val('');
		$('#cashAdvanceApprovalNotes').data("wysihtml5").editor.setValue();
		$('#cashAdvanceApprovalNotes').val('');
		
		var table = $('#listOfCashAdvanceRequestApproval').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		// This is for the Generate PDF HR First 
		var cash_advance_hrFirst_GeneratePdfUrl = "../../tcpdf/hris/pdf_cash_advance_request.php?tcode=" + tcodeid;
		$("#cash_advance_hrfirst_GeneratePDF").attr("href", cash_advance_hrFirst_GeneratePdfUrl);    		
		// This is for the Generate PDF HR Final
		
		encoder_details(tcodeid,'approval'); // Display the Encoder details
		employee_details(tcodeid,'approval'); // Display the Employee details
		cash_advance_hr_first(tcodeid,'approval','True'); // Display the HR First
		
		$('#cashAdvanceApprovalTable').addClass('hideContentAi');
    	$("#cashAdvanceApprovalDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToCashAdvanceApproval, a[href="#cashAdvanceApproval"]').click(function() {
    	$('#cashAdvanceApprovalDetails').addClass('hideContentAi');
    	$("#cashAdvanceApprovalTable").removeClass('hideContentAi');
    });	
    
    showCashAdvanceTables('#listOfCashAdvanceRequestApproval', 'cash_approval') // This will display the Approval lists
	
	$('#cashAdvanceApprovalNotes').wysihtml5();

	$('#cash_advance_task_hrfirst').removeClass('hideContentAi');
	
    $( '.cashAdvanceHrUpdateInApproval').click(function() {
    	$('#cashAdvanceHrUpdateInApprovalTable').addClass('hideContentAi');
    	$("#cash_advance_task_hrfirst").removeClass('hideContentAi');
    }); 
    
    // This will update hr first on approval tab
    $('#Cash_Advance_Update_HRFirst_On_Approval').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_cash_advance_tcode_approval').val();
    	
    	var cash_advance_attach_file = $('#cashAdvanceHrAttachmentInApproval').val();
    	
    	var cash_advance_attach_fileLength = cash_advance_attach_file.length;
    	
    	if(cash_advance_attach_fileLength > 0){
    		
    		var cash_advance_attach_file = document.getElementById('cashAdvanceHrAttachmentInApproval');
    		
    		if(cash_advance_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', cash_advance_attach_file.files[0]);
    		
    		var request = new XMLHttpRequest();
    		
    		request.onreadystatechange = function(){
				if(request.readyState == 4){
					try {
						var resp = JSON.parse(request.response);
					}catch(e){
						var resp = {
							status: 'error',
							data: 'Unknown error occurred: [' + request.responseText + ']'
						};// end
					}// end
					console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_cash_advance_request_attach_file.php?tcode='+tcode+'&path=cash_advance_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_cash_advance_tcode_approval').val(),
			'total_remaining_salary':$('#cashAdvanceHrTotalRemainingSalaryInApproval').val(),
			'outstanding_balance':$('#cashAdvanceHrOutstandingBalanceInApproval').val(),
			'amount_last_advance':$('#cashAdvanceHrAmountLastAdvanceInApproval').val(),
			'date_last_advance':$('#cashAdvanceHrDateLastAdvanceInApproval').val(),
			'deduction_method':$('#cashAdvanceHrDeductionMethodInApproval').val(),
			'hr_notes':$('#cashAdvanceHrNotesInApproval').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_hr_first_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Cash_Advance_Update_HRFirst_On_Approval").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Cash_Advance_Update_HRFirst_On_Approval").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		cash_advance_hr_first(tcodeid,'approval','True'); // Display the HR First
    		
    		$('#cashAdvanceHrUpdateInApprovalTable').addClass('hideContentAi');
        	$("#cash_advance_task_hrfirst").removeClass('hideContentAi');
    		
    		//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done
    	
    	//console.log('Update hr first on approval');
    });
    
    /*------------------------------- // \\ -------------------------------*/
    
    // This will update approval
    $('#Cash_Advance_Update_Approval').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_cash_advance_tcode_approval').val();
    	
    	var cash_advance_attach_file = $('#cashAdvanceApprovalAttachment').val();
    	
    	var cash_advance_attach_fileLength = cash_advance_attach_file.length;
    	
    	if(cash_advance_attach_fileLength > 0){
    		
    		var cash_advance_attach_file = document.getElementById('cashAdvanceApprovalAttachment');
    		
    		if(cash_advance_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', cash_advance_attach_file.files[0]);
    		
    		var request = new XMLHttpRequest();
    		
    		request.onreadystatechange = function(){
				if(request.readyState == 4){
					try {
						var resp = JSON.parse(request.response);
					}catch(e){
						var resp = {
							status: 'error',
							data: 'Unknown error occurred: [' + request.responseText + ']'
						};// end
					}// end
					console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_cash_advance_request_attach_file.php?tcode='+tcode+'&path=cash_advance_approval');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_cash_advance_tcode_approval').val(),
			'approval_notes':$('#cashAdvanceApprovalNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_update_approval.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToCashAdvanceApproval").attr("disabled", true);
    			$("#Cash_Advance_Update_Approval").attr("disabled", true);
    		},
    		complete: function(){
    			showCashAdvanceTables('#listOfcashAdvanceRequestEmployeeReceived', 'cash_recieved') // This will display the Employee received table lists
    			$("#goBackToCashAdvanceApproval").attr("disabled", false);
    			$("#Cash_Advance_Update_Approval").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterCashAdvanceRequest(); // This will display the number of pending rquest on the TABS
    		
    		showCashAdvanceTables('#listOfCashAdvanceRequestApproval', 'cash_approval') // This will display the Approval lists
    		
    		$('#cashAdvanceApprovalDetails').addClass('hideContentAi');
        	$("#cashAdvanceApprovalTable").removeClass('hideContentAi');
    		
    		//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done
    	
    	//console.log('Update approval');
    });
   
	//cashAdvance approval end	
    
    /*--------------------------------------------------------------------------------------------------------------*/

	//cashAdvanceEmployeeReceived start
	$('#cashAdvanceEmployeeReceivedTable').removeClass('hideContentAi');
	
	$('#listOfcashAdvanceRequestEmployeeReceived tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#cashAdvanceEmployeeReceivedAttachment').val('');
		$('#cashAdvanceEmployeeReceivedNotes').data("wysihtml5").editor.setValue();
		$('#cashAdvanceEmployeeReceivedNotes').val('');
		
		var table = $('#listOfcashAdvanceRequestEmployeeReceived').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'employeereceived'); // Display the Encoder details
		employee_details(tcodeid,'employeereceived'); // Display the Employee details
		cash_advance_hr_first(tcodeid,'employeereceived','False'); // Display the HR First
		cash_advance_approval(tcodeid,'employeereceived','True'); // Display the Approval
		
		$('#cashAdvanceEmployeeReceivedTable').addClass('hideContentAi');
    	$("#cashAdvanceEmployeeReceivedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToCashAdvanceEmployeeReceived, a[href="#cashAdvanceEmployeeReceived"]').click(function() {
    	$('#cashAdvanceEmployeeReceivedDetails').addClass('hideContentAi');
    	$("#cashAdvanceEmployeeReceivedTable").removeClass('hideContentAi');
    });	
	
    showCashAdvanceTables('#listOfcashAdvanceRequestEmployeeReceived', 'cash_recieved') // This will display the Employee received table lists
    
	$('#cashAdvanceEmployeeReceivedNotes').wysihtml5();

	$('#cash_advance_task_approval').removeClass('hideContentAi');
	
    $( '.cashAdvanceApprovalUpdateInEmployeeReceived').click(function() {
    	$('#cashAdvanceApprovalUpdateInEmployeeReceivedTable').addClass('hideContentAi');
    	$("#cash_advance_task_approval").removeClass('hideContentAi');
    });       
    
    // This will update the approval on employee received
    $('#Cash_Advance_Update_Approval_On_Employee_Received').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_cash_advance_tcode_employeereceived').val();
    	
    	var cash_advance_attach_file = $('#cashAdvanceApprovalAttachmentInEmployeeReceived').val();
    	
    	var cash_advance_attach_fileLength = cash_advance_attach_file.length;
    	
    	if(cash_advance_attach_fileLength > 0){
    		
    		var cash_advance_attach_file = document.getElementById('cashAdvanceApprovalAttachmentInEmployeeReceived');
    		
    		if(cash_advance_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', cash_advance_attach_file.files[0]);
    		
    		var request = new XMLHttpRequest();
    		
    		request.onreadystatechange = function(){
				if(request.readyState == 4){
					try {
						var resp = JSON.parse(request.response);
					}catch(e){
						var resp = {
							status: 'error',
							data: 'Unknown error occurred: [' + request.responseText + ']'
						};// end
					}// end
					console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_cash_advance_request_attach_file.php?tcode='+tcode+'&path=cash_advance_approval');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_cash_advance_tcode_employeereceived').val(),
			'employee_received_notes':$('#cashAdvanceApprovalNotesInEmployeeReceived').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_employee_received_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Cash_Advance_Update_Approval_On_Employee_Received").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Cash_Advance_Update_Approval_On_Employee_Received").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		cash_advance_approval($('#hidden_cash_advance_tcode_employeereceived').val(),'employeereceived','True'); // Display the Approval
    		
    		$('#cashAdvanceApprovalUpdateInEmployeeReceivedTable').addClass('hideContentAi');
        	$("#cash_advance_task_approval").removeClass('hideContentAi');
    		
    		//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		console.log(data.message);
    		
    	}); // end done
    	
    	//console.log('Update approval on employee received');
    	
    }); // end
    
    /*------------------------------- // \\ -------------------------------*/
    
    // This will update the employee received
    $('#Cash_Advance_Update_Employee_Received').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_cash_advance_tcode_employeereceived').val();
    	
    	var cash_advance_attach_file = $('#cashAdvanceEmployeeReceivedAttachment').val();
    	
    	var cash_advance_attach_fileLength = cash_advance_attach_file.length;
    	
    	if(cash_advance_attach_fileLength > 0){
    		
    		var cash_advance_attach_file = document.getElementById('cashAdvanceEmployeeReceivedAttachment');
    		
    		if(cash_advance_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', cash_advance_attach_file.files[0]);
    		
    		var request = new XMLHttpRequest();
    		
    		request.onreadystatechange = function(){
				if(request.readyState == 4){
					try {
						var resp = JSON.parse(request.response);
					}catch(e){
						var resp = {
							status: 'error',
							data: 'Unknown error occurred: [' + request.responseText + ']'
						};// end
					}// end
					console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_cash_advance_request_attach_file.php?tcode='+tcode+'&path=cash_advance_employee_received');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_cash_advance_tcode_employeereceived').val(),
			'employee_received_notes':$('#cashAdvanceEmployeeReceivedNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/cash_advance_request_update_employee_received.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToCashAdvanceEmployeeReceived").attr("disabled", true);
    			$("#Cash_Advance_Update_Employee_Received").attr("disabled", true);
    		},
    		complete: function(){
    			showCashAdvanceTables('#listOfcashAdvanceRequestClosed', 'cash_closed') // This will display the Closed table lists
    			$("#goBackToCashAdvanceEmployeeReceived").attr("disabled", false);
    			$("#Cash_Advance_Update_Employee_Received").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterCashAdvanceRequest(); // This will display the number of pending rquest on the TABS
    		
    		showCashAdvanceTables('#listOfcashAdvanceRequestEmployeeReceived', 'cash_recieved') // This will display the Employee received table lists
    		
    		$('#cashAdvanceEmployeeReceivedDetails').addClass('hideContentAi');
        	$("#cashAdvanceEmployeeReceivedTable").removeClass('hideContentAi');
    		
    		//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done
    	
    	//console.log(data.message);
    }); // end
    
	//cashAdvanceEmployeeReceived end    

    /*--------------------------------------------------------------------------------------------------------------*/
  
	// Closed start
	$('#cashAdvanceClosedTable').removeClass('hideContentAi');
	
	$('#listOfcashAdvanceRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfcashAdvanceRequestClosed').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'closed'); // Display the Encoder details
		employee_details(tcodeid,'closed'); // Display the Employee details
		cash_advance_hr_first(tcodeid,'closed','False'); // Display the HR First
		cash_advance_approval(tcodeid,'closed','False'); // Display the Approval
		cash_advance_employee_received(tcodeid,'closed'); // Display the Employee received
		
		$('#cashAdvanceClosedTable').addClass('hideContentAi');
    	$("#cashAdvanceClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToCashAdvanceClosedTable, a[href="#cashAdvanceClosed"]').click(function() {
    	$('#cashAdvanceClosedDetails').addClass('hideContentAi');
    	$("#cashAdvanceClosedTable").removeClass('hideContentAi');
    });	
    
    showCashAdvanceTables('#listOfcashAdvanceRequestClosed', 'cash_closed') // This will display the Closed table lists
	
	// Closed end    
    
    
	// Declined start
	$('#cashAdvanceDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfCashAdvanceRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfCashAdvanceRequestDeclined').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'declined'); // Display the Encoder details
		employee_details(tcodeid,'declined'); // Display the Employee details
		cash_advance_hr_first(tcodeid,'declined','False'); // Display the HR First
		cash_advance_approval(tcodeid,'declined','False'); // Display the Approval
		cash_advance_employee_received(tcodeid,'declined'); // Display the Employee received
		
		$('#cashAdvanceDeclinedTable').addClass('hideContentAi');
    	$("#cashAdvanceDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToCashAdvanceDeclinedTable, a[href="#cashAdvanceDeclined"]').click(function() {
    	$('#cashAdvanceDeclinedDetails').addClass('hideContentAi');
    	$("#cashAdvanceDeclinedTable").removeClass('hideContentAi');
    });	
    
    showCashAdvanceTables('#listOfCashAdvanceRequestDeclined', 'cash_declined') // This will display the Declined table lists
	
	// Declined end	    

    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#cashAdvanceHrTableH').addClass('hideContentAi');
		$('#Cash_Advance_Update_HR_first').addClass('hideContentAi');
	
		$('#cashAdvanceApprovalTableH').addClass('hideContentAi');
		$('#cash_advance_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#Cash_Advance_Update_Approval').addClass('hideContentAi');

		$('#cashAdvanceEmployeeReceivedTableH').addClass('hideContentAi');
		$('#Cash_Advance_Update_Employee_Received').addClass('hideContentAi');
		
		
		
	}
	//disable button and update end     
    
} );
