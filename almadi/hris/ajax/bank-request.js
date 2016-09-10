$(document).ready(function() {
	// This is the counter for the bank request
	counterBankRequest(); // This will display the number of pending rquest on the TABS
	
	function counterBankRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/bank_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var bank_hr_first_total = $.parseJSON(msg);
			$("#bank_hr_first_total").text(bank_hr_first_total['bank_hr_first_total']);
			
			// Send to bank
			var bank_send_to_bank = $.parseJSON(msg);
			$("#bank_send_to_bank").text(bank_send_to_bank['bank_send_to_bank']);
			
			// HR Final
			var bank_received_from_bank_total = $.parseJSON(msg);
			$("#bank_received_from_bank_total").text(bank_received_from_bank_total['bank_received_from_bank_total']);
			
			// Approval
			var bank_send_to_site_total = $.parseJSON(msg);
			$("#bank_send_to_site_total").text(bank_send_to_site_total['bank_send_to_site_total']);
			
			// Closed
			var bank_closed_total = $.parseJSON(msg);
			$("#bank_closed_total").text(bank_closed_total['bank_closed_total']);
			
			// Declined
			var bank_declined_total = $.parseJSON(msg);
			$("#bank_declined_total").text(bank_declined_total['bank_declined_total']);
			
			// Bank Grand Total
			var bank_grand_total = $.parseJSON(msg);
			$("#br_grand_total").text(bank_grand_total['bank_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the bank request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showBankTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/bank_request_list.php?request_type="+task,
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
    		url: "../ajax/controller/employee_request/bank_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
		
			$('#bank_encoder_details_'+$query+' > thead').empty();
			$('#bank_encoder_details_'+$query+' > thead').append(
					'<tr>'+
						'<th colspan="4">Encoder details <span class="muted">- '+$tcode+'</span> </th>'+
						'<input type="hidden" id="hidden_bank_tcode_'+$query+'" value="'+$tcode+'" />'+
					'</tr>'
			);
			
			$('#bank_encoder_details_'+$query+' > tbody').empty();
			$('#bank_encoder_details_'+$query+' > tbody').append(
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
	
	function employee_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_id = $.parseJSON(msg);
    		var employee_name = $.parseJSON(msg);
    		var employee_pname = $.parseJSON(msg);
    		var employee_position = $.parseJSON(msg);
    		var employee_nationality = $.parseJSON(msg);
    		
    		var bank_type_name = $.parseJSON(msg);
    		var bank_issues_name = $.parseJSON(msg);
    		
    		var bank_notes_bank_request = $.parseJSON(msg);
    		
    		var request_file_path = $.parseJSON(msg);
    		var request_file_filename = $.parseJSON(msg);
    		
    		$('#bank_employee_details_'+$query+' > thead').empty();
    		$('#bank_employee_details_'+$query+' > thead').append(
    				'<tr>'+
    					'<th colspan="3">Employee details</th>'+
    				'</tr>'
    		);
    		
    		$('#bank_employee_details_'+$query+' > tbody').empty();
    		$('#bank_employee_details_'+$query+' > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+employee_id['employee_id']+' </td>'+
    					'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
    					'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
    					'<td><strong>Nationality</strong><br> '+employee_nationality['employee_nationality']+' </td>'+
    					'<td><strong>Type</strong><br> '+bank_type_name['bank_type_name']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_filename['request_file_filename']+' </a></td>'+
    					'<td><strong>Notes</strong><br> '+bank_notes_bank_request['bank_notes_bank_request']+' </td>'+
    					'<td><strong>Issues</strong><br> '+bank_issues_name['bank_issues_name']+' </td>'+
    				'</tr>'
    		);
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr first
	function bank_hr_first($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var request_hr_update_by = $.parseJSON(msg);
    		var hr_first_encoder_name = $.parseJSON(msg);
    		var request_hr_update_created = $.parseJSON(msg);
    		var request_hr_update_days = $.parseJSON(msg);
    		
    		var request_hr_notes = $.parseJSON(msg);
    		
    		var hr_first_file_path = $.parseJSON(msg);
    		var hr_first_file_path_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#bank_task_hrfirst > thead').empty();
	    		$('#bank_task_hrfirst > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">HR  <span class="pull-right bankHrEditInSendToBank"><i class="icon-large icon-pencil"></i></span></th>'+
	    				'</tr>'
	    		);
    		}else {
    			$('#bank_task_hrfirst > thead').empty();
	    		$('#bank_task_hrfirst > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">HR </th>'+
	    				'</tr>'
	    		);
    		}
    		
    		$('#bank_task_hrfirst > tbody').empty();
    		$('#bank_task_hrfirst > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+request_hr_update_by['request_hr_update_by']+' </td>'+
    					'<td><strong>Updated by</strong><br> '+hr_first_encoder_name['hr_first_encoder_name']+' </td>'+
    					'<td><strong>Date</strong><br> '+request_hr_update_created['request_hr_update_created']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Elapsed</strong><br> '+request_hr_update_days['request_hr_update_days']+' </td>'+
    					'<td colspan="2"><strong>Attachment</strong><br><a href="'+hr_first_file_path['hr_first_file_path']+'" target="_blank"> '+hr_first_file_path_filename['hr_first_file_path_filename']+' </a></td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td colspan="3"><strong>Notes</strong><br> '+request_hr_notes['request_hr_notes']+' </td>'+
    				'</tr>'
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.bankHrEditInSendToBank').addClass('hideContentAi');
			}
			//disable button and update end     		
    		
    		$( '.bankHrEditInSendToBank').click(function() {
    			
    			$('#bank_hr_first_editing_on_send_to_bank_tab').empty();
    			$('#bank_hr_first_editing_on_send_to_bank_tab').append(
    					'<div class="row-fluid">'+
    						'<div class="span12">'+
    							'<div class="control-group">'+
    								'<label class="control-label" for="bankHrNotesInSendToBank">Notes</label>'+
    								'<div class="controls">'+
    									'<textarea rows="5" class="input-block-level" id="bankHrNotesInSendToBank"></textarea>'+
    								'</div>'+
    							'</div>'+
    						'</div>'+
    					'</div>'+
    					
    					'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="bankHrAttachmentInSendToBank">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="bankHrAttachmentInSendToBank" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+hr_first_file_path['hr_first_file_path']+'" target="_blank"> '+hr_first_file_path_filename['hr_first_file_path_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
    			);
    			
    			$('#bankHrNotesInSendToBank').wysihtml5();
    			$('#bankHrNotesInSendToBank').data("wysihtml5").editor.setValue();
	    		$('#bankHrNotesInSendToBank').val(request_hr_notes['request_hr_notes']);
    			
    	    	$('#bank_task_hrfirst').addClass('hideContentAi');
    	    	$("#bankHrUpdateInSendToBankTable").removeClass('hideContentAi');
    	    });	
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the send to bank
	function bank_send_to_bank($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var request_fd_update_by = $.parseJSON(msg);
    		var fd_encoder_name = $.parseJSON(msg);
    		var request_fd_update_created = $.parseJSON(msg);
    		var request_fd_update_days = $.parseJSON(msg);
    		
    		var request_fd_notes = $.parseJSON(msg);
    		
    		var fd_file_path = $.parseJSON(msg);
    		var fd_file_path_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#bank_task_sendtobank > thead').empty();
	    		$('#bank_task_sendtobank > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">Send To Bank  <span class="pull-right bankSendToBankEditInReceivedFromBank"><i class="icon-large icon-pencil"></i></span></th>'+
	    				'</tr>'
	    		);
    		}else {
    			$('#bank_task_sendtobank > thead').empty();
	    		$('#bank_task_sendtobank > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">Send To Bank </th>'+
	    				'</tr>'
	    		);
    		}
    		
    		$('#bank_task_sendtobank > tbody').empty();
    		$('#bank_task_sendtobank > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+request_fd_update_by['request_fd_update_by']+' </td>'+
    					'<td><strong>Updated by</strong><br> '+fd_encoder_name['fd_encoder_name']+' </td>'+
    					'<td><strong>Date</strong><br> '+request_fd_update_created['request_fd_update_created']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Elapsed</strong><br> '+request_fd_update_days['request_fd_update_days']+' </td>'+
    					'<td colspan="2"><strong>Attachment</strong><br><a href="'+fd_file_path['fd_file_path']+'" target="_blank"> '+fd_file_path_filename['fd_file_path_filename']+' </a></td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td colspan="3"><strong>Notes</strong><br> '+request_fd_notes['request_fd_notes']+' </td>'+
    				'</tr>'
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.bankSendToBankEditInReceivedFromBank').addClass('hideContentAi');
			}
			//disable button and update end
    		
    		$( '.bankSendToBankEditInReceivedFromBank').click(function() {
    			
    			$('#bank_send_to_bank_on_received_from_bank_tab').empty();
    			$('#bank_send_to_bank_on_received_from_bank_tab').append(
    					'<div class="row-fluid">'+
    						'<div class="span12">'+
    							'<div class="control-group">'+
    								'<label class="control-label" for="bankSendToBankNotesInReceivedFromBank">Notes</label>'+
    								'<div class="controls">'+
    									'<textarea rows="5" class="input-block-level" id="bankSendToBankNotesInReceivedFromBank"> بدون أجازات سابقة </textarea>'+
    								'</div>'+
    							'</div>'+
    						'</div>'+
    					'</div>'+
    					
    					'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="bankSendToBankAttachmentInReceivedFromBank">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="bankSendToBankAttachmentInReceivedFromBank" accept=".pdf, .doc, .docx">'+
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
    			
    			$('#bankSendToBankNotesInReceivedFromBank').wysihtml5();
    			$('#bankSendToBankNotesInReceivedFromBank').data("wysihtml5").editor.setValue();
	    		$('#bankSendToBankNotesInReceivedFromBank').val(request_fd_notes['request_fd_notes']);
    			
    	    	$('#bank_task_sendtobank').addClass('hideContentAi');
    	    	$("#bankSendToBankUpdateInReceivedFromBankTable").removeClass('hideContentAi');
    	    });	
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the send to bank
	function bank_received_from_bank($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var request_received_update_by = $.parseJSON(msg);
    		var received_from_bank_encoder_name = $.parseJSON(msg);
    		var request_received_update_created = $.parseJSON(msg);
    		var request_received_update_days = $.parseJSON(msg);
    		
    		var request_received_note = $.parseJSON(msg);
    		
    		var received_file_path = $.parseJSON(msg);
    		var received_file_path_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#bank_task_receivedfrombank > thead').empty();
	    		$('#bank_task_receivedfrombank > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">Received From Bank  <span class="pull-right bankReceivedFromBankEditInSendToSite"><i class="icon-large icon-pencil"></i></span></th>'+
	    				'</tr>'
	    		);
    		}else {
    			$('#bank_task_receivedfrombank > thead').empty();
	    		$('#bank_task_receivedfrombank > thead').append(
	    				'<tr>'+
	    					'<th colspan="3">Received From Bank </th>'+
	    				'</tr>'
	    		);
    		}
    		
    		$('#bank_task_receivedfrombank > tbody').empty();
    		$('#bank_task_receivedfrombank > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+request_received_update_by['request_received_update_by']+' </td>'+
    					'<td><strong>Updated by</strong><br> '+received_from_bank_encoder_name['received_from_bank_encoder_name']+' </td>'+
    					'<td><strong>Date</strong><br> '+request_received_update_created['request_received_update_created']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Elapsed</strong><br> '+request_received_update_days['request_received_update_days']+' </td>'+
    					'<td colspan="2"><strong>Attachment</strong><br><a href="'+received_file_path['received_file_path']+'" target="_blank"> '+received_file_path_filename['received_file_path_filename']+' </a></td>'+
    				'</tr>'+
    				
    				'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+request_received_note['request_received_note']+' </td>'+
					'</tr>'
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.bankReceivedFromBankEditInSendToSite').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.bankReceivedFromBankEditInSendToSite').click(function() {
    			
    			$('#received_from_bank_on_send_to_site_tab').empty();
    			$('#received_from_bank_on_send_to_site_tab').append(
    					'<div class="row-fluid">'+
    						'<div class="span12">'+
    							'<div class="control-group">'+
    								'<label class="control-label" for="bankReceivedFromBankNotesInSendToSite">Notes</label>'+
    								'<div class="controls">'+
    									'<textarea rows="5" class="input-block-level" id="bankReceivedFromBankNotesInSendToSite"></textarea>'+
    								'</div>'+
    							'</div>'+
    						'</div>'+
    					'</div>'+
    					
    					'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="bankReceivedFromBankAttachmentInSendToSite">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="bankReceivedFromBankAttachmentInSendToSite" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+received_file_path['received_file_path']+'" target="_blank"> '+received_file_path_filename['received_file_path_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
    			);
    			
    			$('#bankReceivedFromBankNotesInSendToSite').wysihtml5();
    			$('#bankReceivedFromBankNotesInSendToSite').data("wysihtml5").editor.setValue();
	    		$('#bankReceivedFromBankNotesInSendToSite').val(request_received_note['request_received_note']);
    			
    	    	$('#bank_task_receivedfrombank').addClass('hideContentAi');
    	    	$("#bankReceivedFromBankUpdateInSendToSiteTable").removeClass('hideContentAi');
    	    });	
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function bank_task_sendtosite($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var request_hr_final_update_by = $.parseJSON(msg);
    		var send_to_site_encoder_name = $.parseJSON(msg);
    		var request_hr_final_update_created = $.parseJSON(msg);
    		var request_hr_final_days = $.parseJSON(msg);
    		
    		var request_hr_final_note = $.parseJSON(msg);
    		
    		var received_hr_final_path = $.parseJSON(msg);
    		var received_hr_final_path_filename = $.parseJSON(msg);
    		
    		$('#bank_task_sendtosite > thead').empty();
    		$('#bank_task_sendtosite > thead').append(
    				'<tr>'+
    					'<th colspan="3">Send To Site</th>'+
    				'</tr>'
    		);
    		
    		$('#bank_task_sendtosite > tbody').empty();
    		$('#bank_task_sendtosite > tbody').append(
    				'<tr>'+
    					'<td><strong>Employee ID</strong><br> '+request_hr_final_update_by['request_hr_final_update_by']+' </td>'+
    					'<td><strong>Updated by</strong><br> '+send_to_site_encoder_name['send_to_site_encoder_name']+' </td>'+
    					'<td><strong>Date</strong><br> '+request_hr_final_update_created['request_hr_final_update_created']+' </td>'+
    				'</tr>'+
    				
    				'<tr>'+
    					'<td><strong>Elapsed</strong><br> '+request_hr_final_days['request_hr_final_days']+' </td>'+
    					'<td colspan="2"><strong>Attachment</strong><br><a href="'+received_hr_final_path['received_hr_final_path']+'" target="_blank"> '+received_hr_final_path_filename['received_hr_final_path_filename']+' </a></td>'+
    				'<tr>'+
    				
    				'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+request_hr_final_note['request_hr_final_note']+' </td>'+
					'<tr>'
    		);
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	//bank HR start
	$('#bankHrTable').removeClass('hideContentAi');
	
	$('#listOfBankRequestHr tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#bankHrNotes').data("wysihtml5").editor.setValue();
		$('#bankHrNotes').val('');
		$('#bankHrAttachment').val('');
		
		var table = $('#listOfBankRequestHr').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		// This is for the Generate PDF HR Final 
		var bank_hrFirst_GeneratePdfUrl = "../../tcpdf/hris/pdf_bank_request.php?tcode=" + tcodeid;
		$("#bank_hrfirst_GeneratePDF").attr("href", bank_hrFirst_GeneratePdfUrl);    		
		// This is for the Generate PDF HR Final
		
		encoder_details(tcodeid,'hrfirst'); // Display the Encoder details
		employee_details(tcodeid,'hrfirst'); // Display the Employee details
		
		$('#bankHrTable').addClass('hideContentAi');
    	$("#bankHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToBankHrTable, a[href="#bankHr"]').click(function() {
    	$('#bankHrDetails').addClass('hideContentAi');
    	$("#bankHrTable").removeClass('hideContentAi');
    });	
	
    showBankTables('#listOfBankRequestHr', 'bank_hr_first') // This will display the HR First table lists
    
	$('#bankHrNotes').wysihtml5();
    
    // This will update the hrfirst
    $('#Update_Bank_HR_First').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_bank_tcode_hrfirst').val();
    	
    	var bank_attach_file = $('#bankHrAttachment').val();
    	
    	var bank_attach_fileLength = bank_attach_file.length;
    	
    	if(bank_attach_fileLength > 0){
    		
    		var bank_attach_file = document.getElementById('bankHrAttachment');
    		
    		if(bank_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();

    		data.append('SelectedFile', bank_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_bank_request_attach_file.php?tcode='+tcode+'&path=bank_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_bank_tcode_hrfirst').val(),
			'hr_first_notes':$('#bankHrNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_update_hr_first.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToBankHrTable").attr("disabled", true);
    			$("#Update_Bank_HR_First").attr("disabled", true);
    		},
    		complete: function(){
    			showBankTables('#listOfBankRequestSendToBank', 'bank_send_to_bank') // This will display the Send to bank table lists
    			$("#goBackToBankHrTable").attr("disabled", false);
    			$("#Update_Bank_HR_First").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		showBankTables('#listOfBankRequestHr', 'bank_hr_first') // This will display the HR First table lists
    		
    		$('#bankHrDetails').addClass('hideContentAi');
    		$("#bankHrTable").removeClass('hideContentAi');
    		
    		counterBankRequest(); // This will display the number of pending rquest on the TABS
    		
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
    	
    	//console.log('Update bank hr first');
    	
    }); // end
    // This will update the hrfirst
    
	//bank HR end
	
    /*--------------------------------------------------------------------------------------------------------------*/

	//bank send to bank start
	$('#bankSendToBankTable').removeClass('hideContentAi');
	
	$('#listOfBankRequestSendToBank tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#bankSendToBankAttachment').val('');
		$('#bankSendToBankNotes').data("wysihtml5").editor.setValue();
		$('#bankSendToBankNotes').val('');
		
		var table = $('#listOfBankRequestSendToBank').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'sendtobank'); // Display the Encoder details
		employee_details(tcodeid,'sendtobank'); // Display the Employee details
		bank_hr_first(tcodeid,'sendtobank','True'); // Display the HR First
		
		$('#bankSendToBankTable').addClass('hideContentAi');
    	$("#bankSendToBankDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToBankSendToBank, a[href="#bankSendToBank"]').click(function() {
    	$('#bankSendToBankDetails').addClass('hideContentAi');
    	$("#bankSendToBankTable").removeClass('hideContentAi');
    });	
	
    showBankTables('#listOfBankRequestSendToBank', 'bank_send_to_bank') // This will display the Send to bank table lists
    
	$('#bankSendToBankNotes').wysihtml5();

	$('#bank_task_hrfirst').removeClass('hideContentAi');
	
    $( '.bankHrUpdateInSendToBank').click(function() {
    	$('#bankHrUpdateInSendToBankTable').addClass('hideContentAi');
    	$("#bank_task_hrfirst").removeClass('hideContentAi');
    });
    
    // This will update the HR First on Send to bank Tab
    $('#Bank_Update_HRFirst_On_Send_To_Bank').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_bank_tcode_sendtobank').val();
    	
    	var bank_attach_file = $('#bankHrAttachmentInSendToBank').val();
    	
    	var bank_attach_fileLength = bank_attach_file.length;
    	
    	if(bank_attach_fileLength > 0){
    		
    		var bank_attach_file = document.getElementById('bankHrAttachmentInSendToBank');
    		
    		if(bank_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', bank_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_bank_request_attach_file.php?tcode='+tcode+'&path=bank_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_bank_tcode_sendtobank').val(),
			'hr_first_notes':$('#bankHrNotesInSendToBank').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_hr_first_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Bank_Update_HRFirst_On_Send_To_Bank").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Bank_Update_HRFirst_On_Send_To_Bank").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		bank_hr_first($('#hidden_bank_tcode_sendtobank').val(),'sendtobank','True'); // Display the HR First
    		
    		$('#bankHrUpdateInSendToBankTable').addClass('hideContentAi');
        	$("#bank_task_hrfirst").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update hr first on send to bank');
    }); // end
    
    /*------------------------------- // \\ -------------------------------*/
    
    // This will update the Send to bank
    $('#Bank_Update_Send_To_Bank').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_bank_tcode_sendtobank').val();
    	
    	var bank_attach_file = $('#bankSendToBankAttachment').val();
    	
    	var bank_attach_fileLength = bank_attach_file.length;
    	
    	if(bank_attach_fileLength > 0){
    		
    		var bank_attach_file = document.getElementById('bankSendToBankAttachment');
    		
    		if(bank_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', bank_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_bank_request_attach_file.php?tcode='+tcode+'&path=bank_send_to_bank');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_bank_tcode_sendtobank').val(),
			'send_to_bank_notes':$('#bankSendToBankNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_update_send_to_bank.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToBankSendToBank").attr("disabled", true);
    			$("#Bank_Update_Send_To_Bank").attr("disabled", true);
    		},
    		complete: function(){
    			showBankTables('#listOfBankRequestReceivedFromBank', 'bank_received_from_bank') // This will display the Received from bank table lists
    			$("#goBackToBankSendToBank").attr("disabled", false);
    			$("#Bank_Update_Send_To_Bank").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterBankRequest(); // This will display the number of pending rquest on the TABS
    		
    		showBankTables('#listOfBankRequestSendToBank', 'bank_send_to_bank') // This will display the Send to bank table lists
    		
    		$('#bankSendToBankDetails').addClass('hideContentAi');
        	$("#bankSendToBankTable").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update send to bank');
    }); // end
    
	//bank send to bank First end	
    
    /*--------------------------------------------------------------------------------------------------------------*/

	//bank received from bank start
	$('#bankReceivedFromBankTable').removeClass('hideContentAi');
	
	$('#listOfBankRequestReceivedFromBank tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#bankReceivedFromBankAttachment').val('');
		$('#bankReceivedFromBankNotes').data("wysihtml5").editor.setValue();
		$('#bankReceivedFromBankNotes').val('');
		
		var table = $('#listOfBankRequestReceivedFromBank').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'receivedfrombank'); // Display the Encoder details
		employee_details(tcodeid,'receivedfrombank'); // Display the Employee details
		bank_hr_first(tcodeid,'receivedfrombank','False'); // Display the HR First
		bank_send_to_bank(tcodeid,'receivedfrombank','True'); // Display the Send to bank
		
		$('#bankReceivedFromBankTable').addClass('hideContentAi');
    	$("#bankReceivedFromBankDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToBankReceivedFromBankTable, a[href="#bankReceivedFromBank"]').click(function() {
    	$('#bankReceivedFromBankDetails').addClass('hideContentAi');
    	$("#bankReceivedFromBankTable").removeClass('hideContentAi');
    });	
	
    showBankTables('#listOfBankRequestReceivedFromBank', 'bank_received_from_bank') // This will display the Received from bank table lists
    
	$('#bankReceivedFromBankNotes').wysihtml5();

	$('#bank_task_sendtobank').removeClass('hideContentAi');
	
    $( '.bankSendToBankUpdateInReceivedFromBank').click(function() {
    	$('#bankSendToBankUpdateInReceivedFromBankTable').addClass('hideContentAi');
    	$("#bank_task_sendtobank").removeClass('hideContentAi');
    });       
    
    /*------------------------------- // \\ -------------------------------*/
    
    // This will update Send to bank on Received from bank tab
	$('#Bank_Update_Send_To_Bank_On_Received_From_Bank').on('click', function(){
		
		// This is for the attach file
		var tcode = $('#hidden_bank_tcode_receivedfrombank').val();
		
		var bank_attach_file = $('#bankSendToBankAttachmentInReceivedFromBank').val();
		
		var bank_attach_fileLength = bank_attach_file.length;
		
		if(bank_attach_fileLength > 0){
			
			var bank_attach_file = document.getElementById('bankSendToBankAttachmentInReceivedFromBank');
			
			if(bank_attach_file.length === 0){
				 return;
			}// end if
			
			var data = new FormData();
			
			data.append('SelectedFile', bank_attach_file.files[0]);
			
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_bank_request_attach_file.php?tcode='+tcode+'&path=bank_send_to_bank');
	        request.send(data);
			
		}// end if
		
		var formData = {
			'tcode':$('#hidden_bank_tcode_receivedfrombank').val(),
			'send_to_bank_notes':$('#bankSendToBankNotesInReceivedFromBank').val()
    	}; // end formData
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_send_to_bank_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Bank_Update_Send_To_Bank_On_Received_From_Bank").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Bank_Update_Send_To_Bank_On_Received_From_Bank").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		bank_send_to_bank($('#hidden_bank_tcode_receivedfrombank').val(),'receivedfrombank','True'); // Display the Send to bank
    		
    		$('#bankSendToBankUpdateInReceivedFromBankTable').addClass('hideContentAi');
        	$("#bank_task_sendtobank").removeClass('hideContentAi');
    		
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
		
		//console.log('Update send to bank on received from bank');
	}); // end
	
	/*------------------------------- // \\ -------------------------------*/
	
	// This will update the Received from bank
	$('#Bank_Update_Received_From_Bank').on('click', function(){
		
		// This is for the attach file
		var tcode = $('#hidden_bank_tcode_receivedfrombank').val();
		
		var bank_attach_file = $('#bankReceivedFromBankAttachment').val();
		
		var bank_attach_fileLength = bank_attach_file.length;
		
		if(bank_attach_fileLength > 0){
			
			var bank_attach_file = document.getElementById('bankReceivedFromBankAttachment');
			
			if(bank_attach_file.length === 0){
				 return;
			}// end if
   		
	   		var data = new FormData();
	   		
	   		data.append('SelectedFile', bank_attach_file.files[0]);
	   		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_bank_request_attach_file.php?tcode='+tcode+'&path=bank_received_from_bank');
	        request.send(data);
			
		}// end if
		
		var formData = {
			'tcode':$('#hidden_bank_tcode_receivedfrombank').val(),
			'received_from_bank_notes':$('#bankReceivedFromBankNotes').val()
    	}; // end formData
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_update_received_from_bank.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToBankReceivedFromBankTable").attr("disabled", true);
    			$("#Bank_Update_Received_From_Bank").attr("disabled", true);
    		},
    		complete: function(){
    			showBankTables('#listOfBankRequestSendToSite', 'bank_send_to_site') // This will display the Send to site table lists
    			$("#goBackToBankReceivedFromBankTable").attr("disabled", false);
    			$("#Bank_Update_Received_From_Bank").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterBankRequest(); // This will display the number of pending rquest on the TABS
    		
    		showBankTables('#listOfBankRequestReceivedFromBank', 'bank_received_from_bank') // This will display the Received from bank table lists
    		
    		$('#bankReceivedFromBankDetails').addClass('hideContentAi');
        	$("#bankReceivedFromBankTable").removeClass('hideContentAi');
    		
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
		
		//console.log('Update received from bank');
	}); // end
	
	//bank received from bank end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	//bank send to site start
	$('#bankSendToSiteTable').removeClass('hideContentAi');
	
	$('#listOfBankRequestSendToSite tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#bankSendToSiteAttachment').val('');
		$('#bankSendToSiteNotes').data("wysihtml5").editor.setValue();
		$('#bankSendToSiteNotes').val('');
		
		var table = $('#listOfBankRequestSendToSite').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'sendtosite'); // Display the Encoder details
		employee_details(tcodeid,'sendtosite'); // Display the Employee details
		bank_hr_first(tcodeid,'sendtosite','False'); // Display the HR First
		bank_send_to_bank(tcodeid,'sendtosite','False'); // Display the Send to bank
		bank_received_from_bank(tcodeid,'sendtosite','True'); // Display the Received from bank
		
		$('#bankSendToSiteTable').addClass('hideContentAi');
    	$("#bankSendToSiteDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToBankSendToSiteTable, a[href="#bankSendToSite"]').click(function() {
    	$('#bankSendToSiteDetails').addClass('hideContentAi');
    	$("#bankSendToSiteTable").removeClass('hideContentAi');
    });	
	
    showBankTables('#listOfBankRequestSendToSite', 'bank_send_to_site') // This will display the Send to site table lists
    
    $('#bankSendToSiteNotes').wysihtml5();

	$('#bank_task_receivedfrombank').removeClass('hideContentAi');
	
    $( '.bankReceivedFromBankUpdateInSendToSite').click(function() {
    	$('#bankReceivedFromBankUpdateInSendToSiteTable').addClass('hideContentAi');
    	$("#bank_task_receivedfrombank").removeClass('hideContentAi');
    });    
    
    /*------------------------------- // \\ -------------------------------*/
    
    // This will update Received from bank on send to site
    $('#Bank_Update_Received_From_Bank_On_Send_To_Site').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_bank_tcode_sendtosite').val();
    	
    	var bank_attach_file = $('#bankReceivedFromBankAttachmentInSendToSite').val();
    	
    	var bank_attach_fileLength = bank_attach_file.length;
    	
    	if(bank_attach_fileLength > 0){
    		
    		var bank_attach_file = document.getElementById('bankReceivedFromBankAttachmentInSendToSite');
			
			if(bank_attach_file.length === 0){
				 return;
			}// end if
			
			var data = new FormData();
			
			data.append('SelectedFile', bank_attach_file.files[0]);
			
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_bank_request_attach_file.php?tcode='+tcode+'&path=bank_received_from_bank');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_bank_tcode_sendtosite').val(),
			'received_from_bank_notes':$('#bankReceivedFromBankNotesInSendToSite').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_send_to_bank_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Bank_Update_Received_From_Bank_On_Send_To_Site").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Bank_Update_Received_From_Bank_On_Send_To_Site").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		bank_received_from_bank($('#hidden_bank_tcode_sendtosite').val(),'sendtosite','True'); // Display the Send to bank
    		
    		$('#bankReceivedFromBankUpdateInSendToSiteTable').addClass('hideContentAi');
        	$("#bank_task_receivedfrombank").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update received from bank on send to site tab');
    	
    }); // end
    
    /*------------------------------- // \\ -------------------------------*/
    
    // This will update the Send to site
    $('#Bank_Update_Send_To_Site').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_bank_tcode_sendtosite').val();
    	
    	var bank_attach_file = $('#bankSendToSiteAttachment').val();
    	
    	var bank_attach_fileLength = bank_attach_file.length;
    	
    	if(bank_attach_fileLength > 0){
    		
    		var bank_attach_file = document.getElementById('bankSendToSiteAttachment');
    		
    		if(bank_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
	   		
	   		data.append('SelectedFile', bank_attach_file.files[0]);
	   		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_bank_request_attach_file.php?tcode='+tcode+'&path=bank_send_to_site');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_bank_tcode_sendtosite').val(),
			'send_to_site_notes':$('#bankSendToSiteNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/bank_request_update_send_to_site.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToBankSendToSiteTable").attr("disabled", true);
    			$("#Bank_Update_Send_To_Site").attr("disabled", true);
    		},
    		complete: function(){
    			showBankTables('#listOfBankRequestClosed', 'bank_closed') // This will display the Closed table lists
    			$("#goBackToBankSendToSiteTable").attr("disabled", false);
    			$("#Bank_Update_Send_To_Site").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterBankRequest(); // This will display the number of pending rquest on the TABS
    		
    		showBankTables('#listOfBankRequestSendToSite', 'bank_send_to_site') // This will display the Send to site table lists
    		
    		$('#bankSendToSiteDetails').addClass('hideContentAi');
        	$("#bankSendToSiteTable").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update send to site');
    }); // end
    
	//bank send to site end	
   
    /*--------------------------------------------------------------------------------------------------------------*/
  
	// Closed start
	$('#bankClosedTable').removeClass('hideContentAi');
	
	$('#listOfBankRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfBankRequestClosed').DataTable();
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
		bank_hr_first(tcodeid,'closed','False'); // Display the HR First
		bank_send_to_bank(tcodeid,'closed','False'); // Display the Send to bank
		bank_received_from_bank(tcodeid,'closed','False'); // Display the Received to bank
		bank_task_sendtosite(tcodeid,'closed','False'); // Display the Send to site
		
		$('#bankClosedTable').addClass('hideContentAi');
    	$("#bankClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToBankClosedTable, a[href="#bankClosed"]').click(function() {
    	$('#bankClosedDetails').addClass('hideContentAi');
    	$("#bankClosedTable").removeClass('hideContentAi');
    });	
	
    showBankTables('#listOfBankRequestClosed', 'bank_closed') // This will display the Closed table lists
    
	// Closed end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
    
	// Declined start
	$('#bankDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfBankRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfBankRequestDeclined').DataTable();
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
		bank_hr_first(tcodeid,'declined','False'); // Display the HR First
		bank_send_to_bank(tcodeid,'declined','False'); // Display the Send to bank
		bank_received_from_bank(tcodeid,'declined','False'); // Display the Received to bank
		bank_task_sendtosite(tcodeid,'declined','False'); // Display the Send to site
		
		$('#bankDeclinedTable').addClass('hideContentAi');
    	$("#bankDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToBankDeclinedTable, a[href="#bankDeclined"]').click(function() {
    	$('#bankDeclinedDetails').addClass('hideContentAi');
    	$("#bankDeclinedTable").removeClass('hideContentAi');
    });	
    
    showBankTables('#listOfBankRequestDeclined', 'bank_declined') // This will display the Declined table lists
	
	// Declined end	 

    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#bankHrTableH').addClass('hideContentAi');
		$('#bank_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#Update_Bank_HR_First').addClass('hideContentAi');

		$('#bankSendToBankTableH').addClass('hideContentAi');
		$('#Bank_Update_Send_To_Bank').addClass('hideContentAi');
		
		$('#bankReceivedFromBankTableH').addClass('hideContentAi');
		$('#Bank_Update_Received_From_Bank').addClass('hideContentAi');		
		
		$('#bankSendToSiteTableH').addClass('hideContentAi');
		$('#Bank_Update_Send_To_Site').addClass('hideContentAi');			
		
	}
	//disable button and update end    

} );
