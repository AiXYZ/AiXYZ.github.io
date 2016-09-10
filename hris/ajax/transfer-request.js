$(document).ready(function() {
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showTransferTables(table_name, task){
    	//console.log(table_name + ' ' + task);
		var dataTable = $(table_name).DataTable({
			
			"fnRowCallback": function( row, data, index, oSettings ){
				// 1 - Personal information
				if(jQuery.inArray("1", data[10])!='-1'){
					var pinfo = 'Personal information <br>';
				}else {
					var pinfo = '';
				}
				
				// 2 - Contract information
				if(jQuery.inArray("2", data[10])!='-1'){
					var cinfo = 'Contract information <br>';
				}else {
					var cinfo = '';
				}
				
				// 3 - Salary information
				if(jQuery.inArray("3", data[10])!='-1'){
					var sinfo = 'Salary information <br>';
				}else {
					var sinfo = '';
				}
				
				// 4 - Passport information
				if(jQuery.inArray("4", data[10])!='-1'){
					var psinfo = 'Passport information <br>';
				}else {
					var psinfo = '';
				}
				
				// 5 - Iqama information
				if(jQuery.inArray("5", data[10])!='-1'){
					var iqinfo = 'Iqama information <br>';
				}else {
					var iqinfo = '';
				}
				
				// 6 - Medical information
				if(jQuery.inArray("6", data[10])!='-1'){
					var minfo = 'Medical information <br>';
				}else {
					var minfo = '';
				}
				
				// 7 - Upload files
				if(jQuery.inArray("7", data[10])!='-1'){
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
//				if(jQuery.isEmptyObject(data[7]) || data[7] == ''){
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
			"ajax": "../ajax/controller/employee_request/transfer_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5,6] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is for the Approval tab
	// Will check if the request have a Transferred request already
	// If yes it will disable the row
	function showHaveTransferredTables(table_name, task){
    	//console.log(table_name + ' ' + task);
		var dataTable = $(table_name).DataTable({
			"fnRowCallback": function( row, data, index ){
				if(data[9] == '1'){
					row.className = "invalidContractDate";
					return row;
				}else {
					row.className = "validContractDate";
					return row;
				}
			},
			"processing": true,
			"serverSide": true,	
			"destroy": true,
			"ajax": "../ajax/controller/employee_request/transfer_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5,6] }
			]
		}); // end data table
		
    }// end function
	// This is for the Approval tab
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is the counter for the transfer request
	counterTransferRequest(); // This will display the number of pending rquest on the TABS
	
	function counterTransferRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/transfer_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var transfer_hr_first_total = $.parseJSON(msg);
			$("#transfer_hr_first_total").text(transfer_hr_first_total['transfer_hr_first_total']);
			
			// FD
			var transfer_fd_total = $.parseJSON(msg);
			$("#transfer_fd_total").text(transfer_fd_total['transfer_fd_total']);
			
			// HR Final
			var transfer_hr_final_total = $.parseJSON(msg);
			$("#transfer_hr_final_total").text(transfer_hr_final_total['transfer_hr_final_total']);
			
			// Approval
			var transfer_approval_total = $.parseJSON(msg);
			$("#transfer_approval_total").text(transfer_approval_total['transfer_approval_total']);
			
			// Closed
			var transfer_closed_total = $.parseJSON(msg);
			$("#transfer_closed_total").text(transfer_closed_total['transfer_closed_total']);
			
			// Declined
			var transfer_declined_total = $.parseJSON(msg);
			$("#transfer_declined_total").text(transfer_declined_total['transfer_declined_total']);
			
			// Transfer Grand Total
			var transfer_grand_total = $.parseJSON(msg);
			$("#transfer_grand_total").text(transfer_grand_total['transfer_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the exit request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the encoder details
	function encoder_details($tcode,$query){
		
		console.log($query); // Display the current query
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
			$('#transfer_encoder_details_'+$query+' > thead').empty();
			$('#transfer_encoder_details_'+$query+' > thead').append(
					'<tr>'+
						'<th colspan="4">Encoder details <span class="muted">- '+$tcode+'</span> </th>'+
						'<input type="hidden" id="hidden_transfer_tcode_'+$query+'" value="'+$tcode+'" />'+
					'<tr>'
			);
			
			$('#transfer_encoder_details_'+$query+' > tbody').empty();
			$('#transfer_encoder_details_'+$query+' > tbody').append(
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
	
	// This will display the Employee Details
	function employee_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_id = $.parseJSON(msg);
    		var employee_name = $.parseJSON(msg);
    		var employee_pname = $.parseJSON(msg);
    		var employee_position = $.parseJSON(msg);
    		var project_to_name = $.parseJSON(msg);
    		var expected_transfer_date = $.parseJSON(msg);
    		var reason_for_transfer = $.parseJSON(msg);
    		
    		var request_file_path = $.parseJSON(msg);
    		var request_file_filename = $.parseJSON(msg);
		
			$('#transfer_employee_details_'+$query+' > thead').empty();
			$('#transfer_employee_details_'+$query+' > thead').append(
					'<tr>'+
						'<th colspan="3">Employee details</th>'+
					'</tr>'
			);
			
			$('#transfer_employee_details_'+$query+' > tbody').empty();
			$('#transfer_employee_details_'+$query+' > tbody').append(
					'<tr>'+
						'<td><strong>Employee ID</strong><br> '+employee_id['employee_id']+' </td>'+
						'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
						'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Project from</strong><br> '+employee_pname['employee_pname']+' </td>'+
						'<td><strong>Project to</strong><br> '+project_to_name['project_to_name']+' </td>'+
						'<td><strong>Expected transfer date</strong><br> '+expected_transfer_date['expected_transfer_date']+' </td>'+
					'<tr>'+
					'<tr>'+
						'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_filename['request_file_filename']+' </a></td>'+
						'<td colspan="2"><strong>Notes</strong><br> '+reason_for_transfer['reason_for_transfer']+' </td>'+
					'</tr>'
			);
		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr first
	function not_editing_hr_first($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_first_hr_update_by = $.parseJSON(msg);
    		var hr_first_encoder_name = $.parseJSON(msg);
    		var hr_first_hr_update_created = $.parseJSON(msg);
    		var hr_first_hr_update_days = $.parseJSON(msg);
    		
    		var hrfirst_file_path = $.parseJSON(msg);
    		var hrfirst_file_path_filename = $.parseJSON(msg);
    		
    		var hr_first_notes_hr = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#transfer_task_hrfirst > thead').empty();
				$('#transfer_task_hrfirst > thead').append(
						'<tr>'+
							'<th colspan="3">HR First <span class="pull-right trnasferHrFirstEditInFD"><i class="icon-large icon-pencil"></i></span></th>'+
						'</tr>'
				);
    		}else {
    			$('#transfer_task_hrfirst > thead').empty();
				$('#transfer_task_hrfirst > thead').append(
						'<tr>'+
							'<th colspan="3">HR First <span class="pull-right trnasferHrFirstEditInFD"></span></th>'+
						'</tr>'
				);
    		}// end if
			
			$('#transfer_task_hrfirst > tbody').empty();
			$('#transfer_task_hrfirst > tbody').append(
					'<tr>'+
						'<td><strong>Employee ID</strong><br> '+hr_first_hr_update_by['hr_first_hr_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+hr_first_encoder_name['hr_first_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+hr_first_hr_update_created['hr_first_hr_update_created']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Elapsed</strong><br> '+hr_first_hr_update_days['hr_first_hr_update_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+hrfirst_file_path['hrfirst_file_path']+'" target="_blank"> '+hrfirst_file_path_filename['hrfirst_file_path_filename']+' </a></td>'+
					'</tr>'+
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+hr_first_notes_hr['hr_first_notes_hr']+' </td>'+
					'</tr>'
			);
			
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.trnasferHrFirstEditInFD').addClass('hideContentAi');
			}
			//disable button and update end			
			
    		// This for the pencil to edit hr first on fd tab
			$( '.trnasferHrFirstEditInFD').click(function() {
				
				$('#transfer_hr_first_editing_fd_tab').empty();
				$('#transfer_hr_first_editing_fd_tab').append(
						'<div class="row-fluid">'+
							'<div class="span12">'+
								'<div class="control-group">'+
									'<label class="control-label" for="transferHrFirstNotesInFD">Notes</label>'+
									'<div class="controls">'+
										'<textarea rows="5" class="input-block-level" id="transferHrFirstNotesInFD"></textarea>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
							
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="transferHrFirstAttachmentInFd">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="transferHrFirstAttachmentInFd" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+hrfirst_file_path['hrfirst_file_path']+'" target="_blank"> '+hrfirst_file_path_filename['hrfirst_file_path_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
				);
				
				$('#transferHrFirstNotesInFD').wysihtml5();
				$('#transferHrFirstNotesInFD').data("wysihtml5").editor.setValue();
	    		$('#transferHrFirstNotesInFD').val(hr_first_notes_hr['hr_first_notes_hr']);
				
		    	$('#transfer_task_hrfirst').addClass('hideContentAi');
		    	$("#transferHrFirstUpdateInFDTable").removeClass('hideContentAi');
		    });
		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function not_editing_fd($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var fd_update_by = $.parseJSON(msg);
    		var fd_encoder_name = $.parseJSON(msg);
    		var fd_update_created = $.parseJSON(msg);
    		var fd_update_days = $.parseJSON(msg);
    		
    		var fd_file_path = $.parseJSON(msg);
    		var fd_file_path_filename = $.parseJSON(msg);
    		
    		var fd_notes = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#transfer_task_fd > thead').empty();
	    		$('#transfer_task_fd > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">FD <span class="pull-right transferFdEditInHrFinal"><i class="icon-large icon-pencil"></i></span></th>'+
	    				'</tr>'
	    		);
    		}else {
    			$('#transfer_task_fd > thead').empty();
	    		$('#transfer_task_fd > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">FD <span class="pull-right transferFdEditInHrFinal"></span></th>'+
	    				'</tr>'
	    		);
    		}
    		
    		$('#transfer_task_fd > tbody').empty();
    		$('#transfer_task_fd > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+fd_update_by['fd_update_by']+' </td>'+
    					'<td><strong>Updated by</strong><br> '+fd_encoder_name['fd_encoder_name']+' </td>'+
    					'<td><strong>Date</strong><br> '+fd_update_created['fd_update_created']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Elapsed</strong><br> '+fd_update_days['fd_update_days']+' </td>'+
    					'<td colspan="2"><strong>Attachment</strong><br><a href="'+fd_file_path['fd_file_path']+'" target="_blank"> '+fd_file_path_filename['fd_file_path_filename']+' </a></td>'+
    				'</tr>'+
    					
    				'<tr>'+
    					'<td colspan="3"><strong>Notes</strong><br> '+fd_notes['fd_notes']+' </td>'+
    				'</tr>'
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.transferFdEditInHrFinal').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.transferFdEditInHrFinal').click(function() {
    			
    			$('#transfer_fd_editing_hrfinal_tab').empty();
    			$('#transfer_fd_editing_hrfinal_tab').append(
    					'<div class="row-fluid">'+
    						'<div class="span12">'+
    							'<div class="control-group">'+
    								'<label class="control-label" for="transferInHrFinalNotesOfFd">Notes</label>'+
    								'<div class="controls">'+
    									'<textarea rows="5" class="input-block-level" id="transferInHrFinalNotesOfFd"> </textarea>'+
    								'</div>'+
    							'</div>'+
    						'</div>'+
    					'</div>'+
    					
    					'<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+
								'<label class="control-label" for="transferInHrFinalAttachmentOfFd">Attachment</label>'+
								'<div class="controls">'+
									'<input type="file" id="transferInHrFinalAttachmentOfFd" accept=".pdf, .doc, .docx">'+
								'</div>'+
							'</div>'+
						'</div>'+
						
						'<div class="span8">'+
							'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
									'<a href="'+fd_file_path['fd_file_path']+'" target="_blank"> '+fd_file_path_filename['fd_file_path_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
    					
    			);
    			
    			$('#transferInHrFinalNotesOfFd').wysihtml5();
    			$('#transferInHrFinalNotesOfFd').data("wysihtml5").editor.setValue();
	    		$('#transferInHrFinalNotesOfFd').val(fd_notes['fd_notes']);
    			
    	    	$('#transfer_task_fd').addClass('hideContentAi');
    	    	$("#transferFdUpdateInHrFinalTable").removeClass('hideContentAi');
    	    });	
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function not_editing_hrfinal($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_final_update_by = $.parseJSON(msg);
    		var hr_final_encoder_name = $.parseJSON(msg);
    		var hr_final_update_created = $.parseJSON(msg);
    		var hr_final_update_days = $.parseJSON(msg);
    		var hr_final_notes = $.parseJSON(msg);
    		var hr_final_file_path = $.parseJSON(msg);
    		var hr_final_file_path_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#transfer_task_hrfinal > thead').empty();
	    		$('#transfer_task_hrfinal > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">HR Final <span class="pull-right transferHrFinalEditInApproval"><i class="icon-large icon-pencil"></i></span></th>'+
	    				'</tr>'
	    		);
    		}else {
    			$('#transfer_task_hrfinal > thead').empty();
	    		$('#transfer_task_hrfinal > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">HR Final <span class="pull-right transferHrFinalEditInApproval"></span></th>'+
	    				'</tr>'
	    		);
    		}
    		
    		$('#transfer_task_hrfinal > tbody').empty();
    		$('#transfer_task_hrfinal > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+hr_final_update_by['hr_final_update_by']+' </td>'+
    					'<td><strong>Updated by</strong><br> '+hr_final_encoder_name['hr_final_encoder_name']+' </td>'+
    					'<td><strong>Date</strong><br> '+hr_final_update_created['hr_final_update_created']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Elapsed</strong><br> '+hr_final_update_days['hr_final_update_days']+' </td>'+
    					'<td colspan="2"><strong>Attachment</strong><br><a href="'+hr_final_file_path['hr_final_file_path']+'" target="_blank"> '+hr_final_file_path_filename['hr_final_file_path_filename']+' </a></td>'+
    				'<tr>'+
    				
    				'<tr>'+
    					'<td colspan="3"><strong>Notes</strong><br> '+hr_final_notes['hr_final_notes']+' </td>'+
    				'</tr>'
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.transferHrFinalEditInApproval').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.transferHrFinalEditInApproval').click(function() {
    			
    			$('#goBackToTransferApprovalTable').hide();
    			
    			$('#transfer_hrfinal_editing_approval_tab').empty();
    			$('#transfer_hrfinal_editing_approval_tab').append(
    					'<div class="row-fluid">'+
    						'<div class="span12">'+
    							'<div class="control-group">'+
    								'<label class="control-label" for="transferHrFinalNotesInApproval">Notes</label>'+
    								'<div class="controls">'+
    									'<textarea rows="5" class="input-block-level" id="transferHrFinalNotesInApproval"></textarea>'+
    								'</div>'+
    							'</div>'+
    						'</div>'+
    					'</div>'+
    					
    					'<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+
								'<label class="control-label" for="transferHrFinalAttachmentInApproval">Attachment</label>'+
								'<div class="controls">'+
									'<input type="file" id="transferHrFinalAttachmentInApproval" accept=".pdf, .doc, .docx">'+
								'</div>'+
							'</div>'+
						'</div>'+
						
						'<div class="span8">'+
							'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
									'<a href="'+hr_final_file_path['hr_final_file_path']+'" target="_blank"> '+hr_final_file_path_filename['hr_final_file_path_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
    			);
    			
    			$('#transferHrFinalNotesInApproval').wysihtml5();
    			$('#transferHrFinalNotesInApproval').data("wysihtml5").editor.setValue();
	    		$('#transferHrFinalNotesInApproval').val(hr_final_notes['hr_final_notes']);
    			
    	    	$('#transfer_task_hrfinal').addClass('hideContentAi');
    	    	$("#transferHrFinalUpdateInApprovalTable").removeClass('hideContentAi');
    	    });
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	//transfer HR First start
	$('#transferHrFirstTable').removeClass('hideContentAi');
	
	$('#listOfTransferRequestHrFirst tbody').on( 'click', 'tr', function () {
		
		// Clear fields
		$('#exitIqama').val('');
		$('#exitPreviousSalary').val('');
		$('#exitPreviousCashAdvance').val('');
		$('#exitPreviousPettyCash').val('');
		$('#exitEntryVisa').val('');
		$('#exitMedicalInsurance').val('');
		$('#transferHrFirstAttachment').val('');
		
		$('#transferHRFirstNotes').data("wysihtml5").editor.setValue();
		$('#transferHRFirstNotes').val('');
		
		var table = $('#listOfTransferRequestHrFirst').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[8];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		console.log(tcodeid);
		
		encoder_details(tcodeid,'hrfirst'); // Display the encoder details
		employee_details(tcodeid,'hrfirst'); // Display the employee details
		
		// Total salary
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_details.php",
    		data: { tcode_id: tcodeid, query: 'hrfirst'}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_total_salary = $.parseJSON(msg);
    		$('#exitTotalSalary').val(employee_total_salary['employee_total_salary']);
    		
    	});
		
		$('#transferHrFirstTable').addClass('hideContentAi');
    	$("#transferHrFirstDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferHrFirstTable, a[href="#transferHrFirst"]').click(function() {
    	$('#transferHrFirstDetails').addClass('hideContentAi');
    	$("#transferHrFirstTable").removeClass('hideContentAi');
    });	
    
    showTransferTables('#listOfTransferRequestHrFirst', 'transfer_hr_first') // This will display the HR First table lists
	
	$('#transferHRFirstNotes').wysihtml5(); // Hide the GO button
    
    // This will update the HR First
    $('#Update_Transfer_HR_First').on('click', function(){
    	
    	// This is for the Attach Files
    	var tcode = $('#hidden_transfer_tcode_hrfirst').val();
    	
    	var transfer_attach_file = $('#transferHrFirstAttachment').val();
    	
    	var transfer_attach_fileLength = transfer_attach_file.length;
    	
    	if(transfer_attach_fileLength > 0){
    		
    		var transfer_attach_file = document.getElementById('transferHrFirstAttachment');
    		
    		if(transfer_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', transfer_attach_file.files[0]);
    		
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
					//console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_transfer_request_attach_file.php?tcode='+tcode+'&path=transfer_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_transfer_tcode_hrfirst').val(),
			'previous_salary':$('#exitPreviousSalary').val(),
			'previous_cash_advance':$('#exitPreviousCashAdvance').val(),
			'previous_petty_cash':$('#exitPreviousPettyCash').val(),
			'previous_entry_visa':$('#exitEntryVisa').val(),
			'previous_medical_insurance':$('#exitMedicalInsurance').val(),
			'previous_iqama':$('#exitIqama').val(),
			'hr_first_notes':$('#transferHRFirstNotes').val()
    	}; // end formData

		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/transfer_request_update_hr_first.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToTransferHrFirstTable").attr("disabled", true);
				$("#Update_Transfer_HR_First").attr("disabled", true);
			},
			complete: function(){
				showTransferTables('#listOfTransferRequestFd', 'transfer_fd') // This will display the FD table lists
				$("#goBackToTransferHrFirstTable").attr("disabled", false);
				$("#Update_Transfer_HR_First").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
    	
    	.done(function(data){
    		
    		showTransferTables('#listOfTransferRequestHrFirst', 'transfer_hr_first') // This will display the HR First table lists
    		
    		$('#transferHrFirstDetails').addClass('hideContentAi');
    		$("#transferHrFirstTable").removeClass('hideContentAi');
    		
    		counterTransferRequest(); // This will display the number of pending rquest on the TABS
    		
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
    	
    });// end function
    // This will update the HR First
    
	//transfer HR First end
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	//transfer FD start
	$('#transferFdTable').removeClass('hideContentAi');
	
	$('#listOfTransferRequestFd tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#transferFdAttachment').val('');
		$('#transferFdNotes').data("wysihtml5").editor.setValue();
		$('#transferFdNotes').val('');
		
		var table = $('#listOfTransferRequestFd').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[8];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'fd'); // Display the encoder details
		employee_details(tcodeid,'fd'); // Display the employee details
		not_editing_hr_first(tcodeid,'fd','True'); // Display the HR First
		
		$('#transferFdTable').addClass('hideContentAi');
    	$("#transferFdDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferFdTable, a[href="#transferFD"]').click(function() {
    	$('#transferFdDetails').addClass('hideContentAi');
    	$("#transferFdTable").removeClass('hideContentAi');
    });	
	
    showTransferTables('#listOfTransferRequestFd', 'transfer_fd') // This will display the FD table lists
    
	$('#transferFdNotes').wysihtml5();

	$('#transfer_task_hrfirst').removeClass('hideContentAi');
	
    $( '.transferHrFirstUpdateInFD').click(function() {
    	//console.log('Not Edit');
    	$('#transferHrFirstUpdateInFDTable').addClass('hideContentAi');
    	$("#transfer_task_hrfirst").removeClass('hideContentAi');
    }); 
    
    // This will update the HR First on FD tab
    $('#Transfer_Update_HR_First_On_FD').on('click', function(){
    	
    	// This is for the Attach files
    	var tcode = $('#hidden_transfer_tcode_fd').val();
    	
    	var transfer_attach_file = $('#transferHrFirstAttachmentInFd').val();
    	
    	var transfer_attach_fileLength = transfer_attach_file.length;
    	
    	if(transfer_attach_fileLength > 0){
    		
    		var transfer_attach_file = document.getElementById('transferHrFirstAttachmentInFd');
    		
    		if(transfer_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', transfer_attach_file.files[0]);
    		
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
					//console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_transfer_request_attach_file.php?tcode='+tcode+'&path=transfer_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_transfer_tcode_fd').val(),
			'edit_hr_first_notes':$('#transferHrFirstNotesInFD').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_hr_first_update.php?task=update_hr_first",
    		data: formData,
    		beforeSend: function(){
    			$("#Transfer_Update_HR_First_On_FD").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Transfer_Update_HR_First_On_FD").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
		
		.done(function(data){
			
			not_editing_hr_first($('#hidden_transfer_tcode_fd').val(),'fd','True'); // Display the HR First
			
			$('#transferHrFirstUpdateInFDTable').addClass('hideContentAi');
	    	$("#transfer_task_hrfirst").removeClass('hideContentAi');
			
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
			
			//console.log(data.message);
			
		}); // end done
    	
    });// end function
    // This will update the HR First on FD tab
    
    // This will update the FD
    $('#Transfer_Update_FD').on('click', function(){
    	
    	// This is for the Attach files
    	var tcode = $('#hidden_transfer_tcode_fd').val();
    	
    	var transfer_attach_file = $('#transferFdAttachment').val();
    	
    	var transfer_attach_fileLength = transfer_attach_file.length;
    	
    	if(transfer_attach_fileLength > 0){
    		
    		var transfer_attach_file = document.getElementById('transferFdAttachment');
    		
    		if(transfer_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', transfer_attach_file.files[0]);
    		
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
					//console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_transfer_request_attach_file.php?tcode='+tcode+'&path=transfer_fd');
	        request.send(data);
    	}// end if
    	
    	var formData = {
    			'tcode':$('#hidden_transfer_tcode_fd').val(),
				'transfer_request_fd_notes':$('#transferFdNotes').val()
    	}; // end form
    	
    	$.ajax({
    		type: 'POST',
			url: '../ajax/controller/employee_request/transfer_request_update_fd.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToTransferFdTable").attr("disabled", true);
				$("#Transfer_Update_FD").attr("disabled", true);
			},
			complete: function(){
				showTransferTables('#listOfTransferRequestHrFinal', 'transfer_hr_final') // This will display the HR Final table lists
				$("#goBackToTransferFdTable").attr("disabled", false);
				$("#Transfer_Update_FD").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
    	})// end
    	
    	.done(function(data){
    		
    		showTransferTables('#listOfTransferRequestFd', 'transfer_fd') // This will display the FD table lists
    		
    		$('#transferFdDetails').addClass('hideContentAi');
        	$("#transferFdTable").removeClass('hideContentAi');
    		
    		counterTransferRequest(); // This will display the number of pending rquest on the TABS
    		
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
    		
    	});// end done
    	
    });// end function
    // This will update the FD
   
	//transfer FD First end	
    
    /*--------------------------------------------------------------------------------------------------------------*/

	//transfer HR Final start
	$('#transferHrFinalTable').removeClass('hideContentAi');
	
	$('#listOfTransferRequestHrFinal tbody').on( 'click', 'tr', function () {
		
		// Clear fields
    	$('#transferHrFinalNotes').data("wysihtml5").editor.setValue();
		$('#transferHrFinalNotes').val('');
    	$('#transferHrFinalAttachment').val('');
		
		var table = $('#listOfTransferRequestHrFinal').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[8];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		// This is for the Generate PDF HR Final 
		var transfer_hrFinal_GeneratePdfUrl = "../../tcpdf/hris/pdf_transfer_request.php?tcode=" + tcodeid;
		$("#transfer_hrfinal_GeneratePDF").attr("href", transfer_hrFinal_GeneratePdfUrl);    		
		// This is for the Generate PDF HR Final
		
		encoder_details(tcodeid,'hrfinal'); // Display the encoder details
		employee_details(tcodeid,'hrfinal'); // Display the employee details
		not_editing_hr_first(tcodeid,'hrfinal','False'); // Display the HR First
		not_editing_fd(tcodeid,'hrfinal','True'); // Display the FD
		
		$('#transferHrFinalTable').addClass('hideContentAi');
    	$("#transferHrFinalDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferHrFinalTable, a[href="#transferHrFinal"]').click(function() {
    	$('#transferHrFinalDetails').addClass('hideContentAi');
    	$("#transferHrFinalTable").removeClass('hideContentAi');
    });	
	
    showTransferTables('#listOfTransferRequestHrFinal', 'transfer_hr_final') // This will display the HR Final table lists
    
	$('#transferHrFinalNotes').wysihtml5();

	$('#transfer_task_fd').removeClass('hideContentAi');
	
    $( '.transferFdUpdateInHrFinal').click(function() {
    	$('#transferFdUpdateInHrFinalTable').addClass('hideContentAi');
    	$("#transfer_task_fd").removeClass('hideContentAi');
    });       
    
    // This will update FD on HR Final tab
    $('#Transfer_Update_FD_On_HRFinal').on('click', function(){
    	
    	// This is for the Attach files
    	var tcode = $('#hidden_transfer_tcode_hrfinal').val();
    	
    	var transfer_attach_file = $('#transferInHrFinalAttachmentOfFd').val();
    	
    	var transfer_attach_fileLength = transfer_attach_file.length;
    	
    	if(transfer_attach_fileLength > 0){
    		
    		var transfer_attach_file = document.getElementById('transferInHrFinalAttachmentOfFd');
    		
    		if(transfer_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', transfer_attach_file.files[0]);
    		
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
					//console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_transfer_request_attach_file.php?tcode='+tcode+'&path=transfer_fd');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_transfer_tcode_hrfinal').val(),
			'edit_fd_notes':$('#transferInHrFinalNotesOfFd').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_fd_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Transfer_Update_FD_On_HRFinal").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Transfer_Update_FD_On_HRFinal").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){

    		not_editing_fd($('#hidden_transfer_tcode_hrfinal').val(),'hrfinal','True'); // Display the FD
			
			$('#transferFdUpdateInHrFinalTable').addClass('hideContentAi');
	    	$("#transfer_task_fd").removeClass('hideContentAi');
	    	
    		function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done
    	
    	//console.log('Update fd on hr final');
    });// end
    // This will update FD on HR Final tab
    
    // This will update HR Final
    $('#Transfer_Update_HRFinal').on('click', function(){
    	
    	// This is for the Attach files
    	var tcode = $('#hidden_transfer_tcode_hrfinal').val();
    	
    	var transfer_attach_file = $('#transferHrFinalAttachment').val();
    	
    	var transfer_attach_fileLength = transfer_attach_file.length;
    	
    	if(transfer_attach_fileLength > 0){
    		
    		var transfer_attach_file = document.getElementById('transferHrFinalAttachment');
    		
    		if(transfer_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', transfer_attach_file.files[0]);
    		
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
					//console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_transfer_request_attach_file.php?tcode='+tcode+'&path=transfer_hrfinal');
	        request.send(data);
    		
    	}//end if
    	
    	var formData = {
			'tcode':$('#hidden_transfer_tcode_hrfinal').val(),
			'transfer_request_hrfinal_notes':$('#transferHrFinalNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: 'POST',
			url: '../ajax/controller/employee_request/transfer_request_update_hr_final.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToTransferHrFinalTable").attr("disabled", true);
				$("#Transfer_Update_HRFinal").attr("disabled", true);
			},
			complete: function(){
				showTransferTables('#listOfTransferRequestApproval', 'transfer_approval') // This will display the Approval table lists
				$("#goBackToTransferHrFinalTable").attr("disabled", false);
				$("#Transfer_Update_HRFinal").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
    	})// end
    	
    	.done(function(data){
    		
    		showTransferTables('#listOfTransferRequestHrFinal', 'transfer_hr_final') // This will display the HR Final table lists
    		
    		$('#transferHrFinalDetails').addClass('hideContentAi');
    		$("#transferHrFinalTable").removeClass('hideContentAi');
    		
    		counterTransferRequest(); // This will display the number of pending rquest on the TABS
    		
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
    		
    	});// end done
    	
    	//console.log('Update hr final');
    });// end
    // This will update HR Final
    
	//transfer HR Final end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	//transfer Approval start
	$('#transferApprovalTable').removeClass('hideContentAi');
	
	$('#listOfTransferRequestApproval tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfTransferRequestApproval').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[8];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'approval'); // Display the encoder details
		employee_details(tcodeid,'approval'); // Display the employee details
		not_editing_hr_first(tcodeid,'approval','False'); // Display the HR First
		not_editing_fd(tcodeid,'approval','False'); // Display the FD
		not_editing_hrfinal(tcodeid,'approval','True'); // Display the HR Final
		
		$('#transferApprovalTable').addClass('hideContentAi');
    	$("#transferApprovalDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferApprovalTable, a[href="#transferApproval"]').click(function() {
    	$('#transferApprovalDetails').addClass('hideContentAi');
    	$("#transferApprovalTable").removeClass('hideContentAi');
    });	
	
    //showTransferTables('#listOfTransferRequestApproval', 'transfer_approval') // This will display the Approval table lists
    showHaveTransferredTables('#listOfTransferRequestApproval', 'transfer_approval') // This will display the Approval table lists
    
	$('#transfer_task_hrfinal').removeClass('hideContentAi');
	

    $( '.transferHrFinalUpdateInApproval').click(function() {
    	
    	$('#goBackToTransferApprovalTable').show(); // Show the GO button
    	
    	$('#transferHrFinalUpdateInApprovalTable').addClass('hideContentAi');
    	$("#transfer_task_hrfinal").removeClass('hideContentAi');
    });       
    
    // This will update the HR Final on approval tab
    $('#Transfer_Update_HRFinal_On_Approval').on('click', function(){
    	
    	// This is for the Attach files
    	var tcode = $('#hidden_transfer_tcode_approval').val();
    	
    	var transfer_attach_file = $('#transferHrFinalAttachmentInApproval').val();
    	
    	var transfer_attach_fileLength = transfer_attach_file.length;
    	
    	if(transfer_attach_fileLength > 0){
    		
    		var transfer_attach_file = document.getElementById('transferHrFinalAttachmentInApproval');
    		
    		if(transfer_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', transfer_attach_file.files[0]);
    		
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
					//console.log(resp.status + ': ' + resp.data);
				}// end if
			}; // end
			
			request.open('POST', '../ajax/controller/employee_request/upload_transfer_request_attach_file.php?tcode='+tcode+'&path=transfer_hrfinal');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_transfer_tcode_approval').val(),
			'edit_hrfinal_notes':$('#transferHrFinalNotesInApproval').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transfer_request_hrfinal_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Transfer_Update_HRFinal_On_Approval").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Transfer_Update_HRFinal_On_Approval").attr("disabled", false);
    			$('#goBackToTransferApprovalTable').show(); // Show the GO button
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		not_editing_hrfinal($('#hidden_transfer_tcode_approval').val(),'approval','True'); // Display the HR Final
    		
    		$('#transferHrFinalUpdateInApprovalTable').addClass('hideContentAi');
        	$("#transfer_task_hrfinal").removeClass('hideContentAi');
    		
    		function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done

    	//console.log('Update hrfinal on approval');
    });// end
    
	//transfer Approval end	
    
    /*--------------------------------------------------------------------------------------------------------------*/
   
	// Closed start
	$('#transferClosedTable').removeClass('hideContentAi');
	
	$('#listOfTransferRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfTransferRequestClosed').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[8];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'closed'); // Display the encoder details
		employee_details(tcodeid,'closed'); // Display the employee details
		not_editing_hr_first(tcodeid,'closed','False'); // Display the HR First
		not_editing_fd(tcodeid,'closed','False'); // Display the FD
		not_editing_hrfinal(tcodeid,'closed','False'); // Display the HR Final
		
		$('#transferClosedTable').addClass('hideContentAi');
    	$("#transferClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferClosedTable, a[href="#transferClosed"]').click(function() {
    	$('#transferClosedDetails').addClass('hideContentAi');
    	$("#transferClosedTable").removeClass('hideContentAi');
    });	
    
    showTransferTables('#listOfTransferRequestClosed', 'transfer_closed') // This will display the Closed table lists
	
	// Closed end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
     
	// Declined start
	$('#transferDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfTransferRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfTransferRequestDeclined').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[8];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'declined'); // Display the encoder details
		employee_details(tcodeid,'declined'); // Display the employee details
		not_editing_hr_first(tcodeid,'declined','False'); // Display the HR First
		not_editing_fd(tcodeid,'declined','False'); // Display the FD
		not_editing_hrfinal(tcodeid,'declined','False'); // Display the HR Final
		
		$('#transferDeclinedTable').addClass('hideContentAi');
    	$("#transferDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferDeclinedTable, a[href="#transferDeclined"]').click(function() {
    	$('#transferDeclinedDetails').addClass('hideContentAi');
    	$("#transferDeclinedTable").removeClass('hideContentAi');
    });	
    
    showTransferTables('#listOfTransferRequestDeclined', 'transfer_declined') // This will display the Declined table lists
	
	// Declined end	    
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#transferHRFirstTableH').addClass('hideContentAi');
		$('#Update_Transfer_HR_First').addClass('hideContentAi');
	
		$('#transferFdTableH').addClass('hideContentAi');
		$('#Transfer_Update_FD').addClass('hideContentAi');		
		
		$('#transferHrFinalTableH').addClass('hideContentAi');
		$('#transfer_hrfinal_GeneratePDF').addClass('hideContentAi');
		$('#Transfer_Update_HRFinal').addClass('hideContentAi');
		
	}
	//disable button and update end     
    
} );
