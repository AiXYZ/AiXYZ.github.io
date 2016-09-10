$(document).ready(function() {
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is the counter for the cash advance request
	counterHealthInsuranceRequest(); // This will display the number of pending rquest on the TABS
	
	function counterHealthInsuranceRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/health_insurance_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var health_hr_first_total = $.parseJSON(msg);
			$("#health_hr_first_total").text(health_hr_first_total['health_hr_first_total']);
			
			// Send to company
			var health_send_to_company_total = $.parseJSON(msg);
			$("#health_send_to_company_total").text(health_send_to_company_total['health_send_to_company_total']);
			
			// Received from company
			var health_received_from_company_total = $.parseJSON(msg);
			$("#health_received_from_company_total").text(health_received_from_company_total['health_received_from_company_total']);
			
			// Send to site
			var health_send_to_site_total = $.parseJSON(msg);
			$("#health_send_to_site_total").text(health_send_to_site_total['health_send_to_site_total']);
			
			// Closed
			var health_closed_total = $.parseJSON(msg);
			$("#health_closed_total").text(health_closed_total['health_closed_total']);
			
			// Declined
			var health_declined_total = $.parseJSON(msg);
			$("#health_declined_total").text(health_declined_total['health_declined_total']);
			
			// Grand Total
			var health_grand_total = $.parseJSON(msg);
			$("#hir_grand_total").text(health_grand_total['health_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the cash advance request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showHealthInsuranceTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/health_insurance_request_list.php?request_type="+task,
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
		
		//console.log($query); // Display the current query
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		$('#health_encoder_details_'+$query+' > thead').empty();
    		$('#health_encoder_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="4">Encoder details <span class="muted">- '+$tcode+' </span></th>'+
						'<input type="hidden" id="hidden_health_tcode_'+$query+'" value="'+$tcode+'" />'+
					'</tr>'
    		);
    		
    		$('#health_encoder_details_'+$query+' > tbody').empty();
    		$('#health_encoder_details_'+$query+' > tbody').append(
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
    		url: "../ajax/controller/employee_request/health_insurance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_id = $.parseJSON(msg);
    		var employee_name = $.parseJSON(msg);
    		var employee_pname = $.parseJSON(msg);
    		var employee_position = $.parseJSON(msg);
    		var employee_nationality = $.parseJSON(msg);
    		
    		var employee_request_notes = $.parseJSON(msg);
    		
    		var health_type_name = $.parseJSON(msg);
    		var health_issues_name = $.parseJSON(msg);
    		
    		var request_file_path = $.parseJSON(msg);
    		var request_file_filename = $.parseJSON(msg);
    		
    		$('#health_employee_details_'+$query+' > thead').empty();
    		$('#health_employee_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="3">Employee details</th>'+
					'</tr>'
    		);
    		
    		$('#health_employee_details_'+$query+' > tbody').empty();
    		$('#health_employee_details_'+$query+' > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+employee_id['employee_id']+' </td>'+
						'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
						'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
					'</tr>'+
					
					'<tr>'+
						'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
						'<td><strong>Nationality</strong><br> '+employee_nationality['employee_nationality']+' </td>'+
						'<td><strong>Type</strong><br> '+health_type_name['health_type_name']+' </td>'+
					'</tr>'+
					
					'<tr>'+
						'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_filename['request_file_filename']+' </a></td>'+
						'<td><strong>Notes</strong><br> '+employee_request_notes['employee_request_notes']+' </td>'+
						'<td><strong>Issues</strong><br> '+health_issues_name['health_issues_name']+' </td>'+
					'</tr>'
    		);
		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// HR First details
	function health_hr_first($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_details.php",
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
    			$('#health_task_hrfirst > thead').empty();
	    		$('#health_task_hrfirst > thead').append(
	    				'<tr>'+
							'<th colspan="3">HR  <span class="pull-right hiHrEditInSendToCompany"><i class="icon-large icon-pencil"></i></span></th>'+
						'</tr>'
	    		);
    		}else {
    			$('#health_task_hrfirst > thead').empty();
	    		$('#health_task_hrfirst > thead').append(
	    				'<tr>'+
							'<th colspan="3">HR  </th>'+
						'</tr>'
	    		);
    		} // end if else
    		
    		$('#health_task_hrfirst > tbody').empty();
    		$('#health_task_hrfirst > tbody').append(
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
				$('.hiHrEditInSendToCompany').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.hiHrEditInSendToCompany').click(function() {
    			
    			$('#health_hr_first_editing_on_send_to_company_tab').empty();
    			$('#health_hr_first_editing_on_send_to_company_tab').append(
    					'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="hiHrNotesInSendToCompany">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="hiHrNotesInSendToCompany"> </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+																
						'<div class="row-fluid">'+
						  '<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="hiHrAttachmentInSendToCampany">Attachment</label>'+
								'<div class="controls">'+
									'<input type="file" id="hiHrAttachmentInSendToCampany" accept=".pdf, .doc, .docx">'+
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
    			
    			$('#hiHrNotesInSendToCompany').wysihtml5();
    			$('#hiHrNotesInSendToCompany').data("wysihtml5").editor.setValue();
	    		$('#hiHrNotesInSendToCompany').val(request_hr_notes['request_hr_notes']);
    			
    	    	$('#health_task_hrfirst').addClass('hideContentAi');
    	    	$("#hiHrUpdateInSendToCompanyTable").removeClass('hideContentAi');
    	    });
		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// Send to company details
	function health_send_to_company($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var second_update_by = $.parseJSON(msg);
    		var second_encoder_name = $.parseJSON(msg);
    		var second_update_created = $.parseJSON(msg);
    		var second_update_days = $.parseJSON(msg);
    		var second_notes = $.parseJSON(msg);
    		var second_file_path = $.parseJSON(msg);
    		var second_file_path_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#health_task_send_to_company > thead').empty();
	    		$('#health_task_send_to_company > thead').append(
	    				'<tr>'+
							'<th colspan="3">Send To Company  <span class="pull-right hiSendToCompanyEditInReceivedFromCompany"><i class="icon-large icon-pencil"></i></span></th>'+
						'</tr>'
	    		);
    		}else {
    			$('#health_task_send_to_company > thead').empty();
	    		$('#health_task_send_to_company > thead').append(
	    				'<tr>'+
							'<th colspan="3">Send To Company  </th>'+
						'</tr>'
	    		);
    		} // end if else
    		
	    		
    		
    		$('#health_task_send_to_company > tbody').empty();
    		$('#health_task_send_to_company > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+second_update_by['second_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+second_encoder_name['second_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+second_update_created['second_update_created']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Elapsed</strong><br> '+second_update_days['second_update_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+second_file_path['second_file_path']+'" target="_blank"> '+second_file_path_filename['second_file_path_filename']+' </a></td>'+
					'</tr>'+	
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+second_notes['second_notes']+' </td>'+
					'</tr>'	
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.hiSendToCompanyEditInReceivedFromCompany').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.hiSendToCompanyEditInReceivedFromCompany').click(function() {
    			
    			$('#health_send_to_company_editing_on_received_from_company_tab').empty();
    			$('#health_send_to_company_editing_on_received_from_company_tab').append(
    					'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="hiSendToCompanyNotesInReceivedFromCompany">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="hiSendToCompanyNotesInReceivedFromCompany"> </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+																
						'<div class="row-fluid">'+
						  '<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="hiSendToCompanyAttachmentInReceivedFromCompany">Attachment</label>'+
								'<div class="controls">'+
									'<input type="file" id="hiSendToCompanyAttachmentInReceivedFromCompany" accept=".pdf, .doc, .docx">'+
								'</div> <!-- /controls -->'+
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						  '<div class="span8">'+
							'<div class="control-group">'+											
								'<label class="control-label"> &nbsp; </label>'+
								'<div class="controls">'+
									'<a href="'+second_file_path['second_file_path']+'" target="_blank"> '+second_file_path_filename['second_file_path_filename']+' </a>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+																	  
						'</div>'
    			);
    			
    			$('#hiSendToCompanyNotesInReceivedFromCompany').wysihtml5();
    			$('#hiSendToCompanyNotesInReceivedFromCompany').data("wysihtml5").editor.setValue();
	    		$('#hiSendToCompanyNotesInReceivedFromCompany').val(second_notes['second_notes']);
    			
    	    	$('#health_task_send_to_company').addClass('hideContentAi');
    	    	$("#hiSendToCompanyUpdateInReceivedFromCompanyTable").removeClass('hideContentAi');
    	    });
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// Received from company details
	function health_received_from_company($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var third_update_by = $.parseJSON(msg);
    		var third_encoder_name = $.parseJSON(msg);
    		var third_update_created = $.parseJSON(msg);
    		var third_update_days = $.parseJSON(msg);
    		var third_notes = $.parseJSON(msg);
    		var third_file_path = $.parseJSON(msg);
    		var third_file_path_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#health_task_received_from_company > thead').empty();
	    		$('#health_task_received_from_company > thead').append(
	    				'<tr>'+
							'<th colspan="3">Received From Company  <span class="pull-right hiReceivedFromCompanyEditInSendToSite"><i class="icon-large icon-pencil"></i></span></th>'+
						'</tr>'
	    		);
    		}else {
    			$('#health_task_received_from_company > thead').empty();
	    		$('#health_task_received_from_company > thead').append(
	    				'<tr>'+
							'<th colspan="3">Received From Company  </th>'+
						'</tr>'
	    		);
    		} // end if
    		
    		$('#health_task_received_from_company > tbody').empty();
    		$('#health_task_received_from_company > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+third_update_by['third_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+third_encoder_name['third_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+third_update_created['third_update_created']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Elapsed</strong><br> '+third_update_days['third_update_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+third_file_path['third_file_path']+'" target="_blank"> '+third_file_path_filename['third_file_path_filename']+' </a></td>'+
					'</tr>'+	
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+third_notes['third_notes']+' </td>'+
					'</tr>'	
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.hiReceivedFromCompanyEditInSendToSite').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.hiReceivedFromCompanyEditInSendToSite').click(function() {
    			
    			$('#health_received_from_company_editing_on_send_to_site_tab').empty();
    			$('#health_received_from_company_editing_on_send_to_site_tab').append(
    					'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="hiReceivedFromCompanyNotesInSendToSite">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="hiReceivedFromCompanyNotesInSendToSite"></textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+																
						'<div class="row-fluid">'+
						  '<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="hiReceivedFromCompanyAttachmentInSendToSite">Attachment</label>'+
								'<div class="controls">'+
									'<input type="file" id="hiReceivedFromCompanyAttachmentInSendToSite" accept=".pdf, .doc, .docx">'+
								'</div> <!-- /controls -->'+		
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						  '<div class="span8">'+
							'<div class="control-group">'+											
								'<label class="control-label"> &nbsp; </label>'+
								'<div class="controls">'+
									'<a href="'+third_file_path['third_file_path']+'" target="_blank"> '+third_file_path_filename['third_file_path_filename']+' </a>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+																	  
						'</div>'
    			);
    			
    			$('#hiReceivedFromCompanyNotesInSendToSite').wysihtml5();
    			$('#hiReceivedFromCompanyNotesInSendToSite').data("wysihtml5").editor.setValue();
	    		$('#hiReceivedFromCompanyNotesInSendToSite').val(third_notes['third_notes']);
    			
    	    	$('#health_task_received_from_company').addClass('hideContentAi');
    	    	$("#hiReceivedFromCompanyUpdateInSendToSiteTable").removeClass('hideContentAi');
    	    });
    		
    	}); //  end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// Send to site details
	function health_send_to_site($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var fourth_update_by = $.parseJSON(msg);
    		var fourth_encoder_name = $.parseJSON(msg);
    		var fourth_update_created = $.parseJSON(msg);
    		var fourth_update_days = $.parseJSON(msg);
    		var fourth_notes = $.parseJSON(msg);
    		var fourth_file_path = $.parseJSON(msg);
    		var fourth_file_path_filename = $.parseJSON(msg);
    		
    		$('#health_task_send_to_site > thead').empty();
    		$('#health_task_send_to_site > thead').append(
    				'<tr>'+
						'<th colspan="3">Send To Site</th>'+
					'</tr>'
    		);
    		
    		$('#health_task_send_to_site > tbody').empty();
    		$('#health_task_send_to_site > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+fourth_update_by['fourth_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+fourth_encoder_name['fourth_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+fourth_update_created['fourth_update_created']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Elapsed</strong><br> '+fourth_update_days['fourth_update_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+fourth_file_path['fourth_file_path']+'" target="_blank"> '+fourth_file_path_filename['fourth_file_path_filename']+' </a></td>'+
					'</tr>'+	
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+fourth_notes['fourth_notes']+' </td>'+
					'</tr>'	
    		);
    		
    	}); //  end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/

	//Health Insurance HR start
	$('#hiHrTable').removeClass('hideContentAi');
	
	$('#listOfHiRequestHr tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#hiHrNotes').val('');
		$('#hiHrAttachment').val('');
		
		var table = $('#listOfHiRequestHr').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		// This is for the Generate PDF HR Final 
		var health_hrFirst_GeneratePdfUrl = "../../tcpdf/hris/pdf_health_insurance_request.php?tcode=" + tcodeid;
		$("#health_hrfirst_GeneratePDF").attr("href", health_hrFirst_GeneratePdfUrl);    		
		// This is for the Generate PDF HR Final
		
		encoder_details(tcodeid,'hr_first'); // Display the Encoder details
		employee_details(tcodeid,'hr_first'); // Display the Employee details
		
		$('#hiHrTable').addClass('hideContentAi');
    	$("#hiHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToHiHrTable, a[href="#hiHr"]').click(function() {
    	$('#hiHrDetails').addClass('hideContentAi');
    	$("#hiHrTable").removeClass('hideContentAi');
    });	
    
    showHealthInsuranceTables('#listOfHiRequestHr', 'health_hr_first') // This will display the HR First table lists
	
	$('#hiHrNotes').wysihtml5();
    
    // This will update the hr first
    $('#Update_Health_Insurance_HR_First').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_health_tcode_hr_first').val();
    	
    	var health_attach_file = $('#hiHrAttachment').val();
    	
    	var health_attach_fileLength = health_attach_file.length;
    	
    	if(health_attach_fileLength > 0){
    		
    		var health_attach_file = document.getElementById('hiHrAttachment');
    		
    		if(health_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', health_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_health_request_attach_file.php?tcode='+tcode+'&path=health_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_health_tcode_hr_first').val(),
			'hr_first_notes':$('#hiHrNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_update_hr_first.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToHiHrTable").attr("disabled", true);
    			$("#Update_Health_Insurance_HR_First").attr("disabled", true);
    		},
    		complete: function(){
    			showHealthInsuranceTables('#listOHiRequestSendToCompany', 'health_send_to_company') // This will display the Send to company table lists
    			$("#goBackToHiHrTable").attr("disabled", false);
    			$("#Update_Health_Insurance_HR_First").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		showHealthInsuranceTables('#listOfHiRequestHr', 'health_hr_first') // This will display the HR First table lists
    		
    		$('#hiHrDetails').addClass('hideContentAi');
        	$("#hiHrTable").removeClass('hideContentAi');
    		
    		counterHealthInsuranceRequest(); // This will display the number of pending rquest on the TABS
    		
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
    	
    }); // end
    // This will update the hr first

	//Health Insurance HR end
	
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */

	//hiSendToCompany start
	$('#hiSendToCompanyTable').removeClass('hideContentAi');
	
	$('#listOHiRequestSendToCompany tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#hiSendToCompanyAttachment').val('');
		$('#hiSendToCompanyNotes').data("wysihtml5").editor.setValue();
		$('#hiSendToCompanyNotes').val('');
		
		var table = $('#listOHiRequestSendToCompany').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'send_to_company'); // Display the Encoder details
		employee_details(tcodeid,'send_to_company'); // Display the Employee details
		health_hr_first(tcodeid,'send_to_company','True') // Display the HR First
		
		$('#hiSendToCompanyTable').addClass('hideContentAi');
    	$("#hiSendToCompanyDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToHiSendToCompany, a[href="#hiSendToCompany"]').click(function() {
    	$('#hiSendToCompanyDetails').addClass('hideContentAi');
    	$("#hiSendToCompanyTable").removeClass('hideContentAi');
    });	
	
    showHealthInsuranceTables('#listOHiRequestSendToCompany', 'health_send_to_company') // This will display the Send to company table lists
    
	$('#hiSendToCompanyNotes').wysihtml5();

	$('#health_task_hrfirst').removeClass('hideContentAi');
	
    $( '.hiHrUpdateInSendToCompany').click(function() {
    	$('#hiHrUpdateInSendToCompanyTable').addClass('hideContentAi');
    	$("#health_task_hrfirst").removeClass('hideContentAi');
    }); 
   
    // This will update the HR First on Send to company tab
    $('#Update_Health_Insurance_HR_First_On_Send_To_Company_Tab').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_health_tcode_send_to_company').val();
    	
    	var health_attach_file = $('#hiHrAttachmentInSendToCampany').val();
    	
    	var health_attach_fileLength = health_attach_file.length;
    	
    	if(health_attach_fileLength > 0){
    		
    		var health_attach_file = document.getElementById('hiHrAttachmentInSendToCampany');
    		
    		if(health_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', health_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_health_request_attach_file.php?tcode='+tcode+'&path=health_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_health_tcode_send_to_company').val(),
			'hr_first_notes':$('#hiHrNotesInSendToCompany').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_hr_first_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_Health_Insurance_HR_First_On_Send_To_Company_Tab").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_Health_Insurance_HR_First_On_Send_To_Company_Tab").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		health_hr_first($('#hidden_health_tcode_send_to_company').val(),'send_to_company','True') // Display the HR First
    		
    		$('#hiHrUpdateInSendToCompanyTable').addClass('hideContentAi');
        	$("#health_task_hrfirst").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update hr first on send to company tab');
    }); // end
    
    /* ------------------------- \\ // ------------------------- */
    
    $('#Update_Health_Insurance_Send_To_Company').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_health_tcode_send_to_company').val();
    	
    	var health_attach_file = $('#hiSendToCompanyAttachment').val();
    	
    	var health_attach_fileLength = health_attach_file.length;
    	
    	if(health_attach_fileLength > 0){
    		
    		var health_attach_file = document.getElementById('hiSendToCompanyAttachment');
    		
    		if(health_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', health_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_health_request_attach_file.php?tcode='+tcode+'&path=health_send_to_company');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_health_tcode_send_to_company').val(),
			'send_to_company_notes':$('#hiSendToCompanyNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_update_send_to_company.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToHiSendToCompany").attr("disabled", true);
    			$("#Update_Health_Insurance_Send_To_Company").attr("disabled", true);
    		},
    		complete: function(){
    			showHealthInsuranceTables('#listOfHiRequestReceivedFromCompany', 'health_received_from_company') // This will display the Received from company table lists
    			$("#goBackToHiSendToCompany").attr("disabled", false);
    			$("#Update_Health_Insurance_Send_To_Company").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterHealthInsuranceRequest(); // This will display the number of pending rquest on the TABS
    		
    		showHealthInsuranceTables('#listOHiRequestSendToCompany', 'health_send_to_company') // This will display the Send to company table lists
    		
    		$('#hiSendToCompanyDetails').addClass('hideContentAi');
        	$("#hiSendToCompanyTable").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update send to company');
    }); // end
    
    // This will update the Send to company
    
	//hiSendToCompany end	
    
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */

	//hiReceivedFromCompany start
	$('#hiReceivedFromCompanyTable').removeClass('hideContentAi');
	
	$('#listOfHiRequestReceivedFromCompany tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#hiReceivedFromCompanyAttachment').val('');
		$('#hiReceivedFromCompanyNotes').data("wysihtml5").editor.setValue();
		$('#hiReceivedFromCompanyNotes').val('');
		
		var table = $('#listOfHiRequestReceivedFromCompany').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'received_from_company'); // Display the Encoder details
		employee_details(tcodeid,'received_from_company'); // Display the Employee details
		health_hr_first(tcodeid,'received_from_company', 'False') // Display the HR First
		health_send_to_company(tcodeid,'received_from_company','True') // Display the Send to company
		
		$('#hiReceivedFromCompanyTable').addClass('hideContentAi');
    	$("#hiReceivedFromCompanyDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToHiReceivedFromCompany, a[href="#hiReceivedFromCompany"]').click(function() {
    	$('#hiReceivedFromCompanyDetails').addClass('hideContentAi');
    	$("#hiReceivedFromCompanyTable").removeClass('hideContentAi');
    });	
	
    showHealthInsuranceTables('#listOfHiRequestReceivedFromCompany', 'health_received_from_company') // This will display the Received from company table lists
    
	$('#hiReceivedFromCompanyNotes').wysihtml5();

	$('#health_task_send_to_company').removeClass('hideContentAi');
	
    $( '.hiSendToCompanyUpdateInReceivedFromCompany').click(function() {
    	$('#hiSendToCompanyUpdateInReceivedFromCompanyTable').addClass('hideContentAi');
    	$("#health_task_send_to_company").removeClass('hideContentAi');
    });       
    
    // This will update the send to company on received from company tab
    $('#Update_Health_Insurance_Send_To_Company_On_Received_From_Company_Tab').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_health_tcode_received_from_company').val();
    	
    	var health_attach_file = $('#hiSendToCompanyAttachmentInReceivedFromCompany').val();
    	
    	var health_attach_fileLength = health_attach_file.length;
    	
    	if(health_attach_fileLength > 0){
    		
    		var health_attach_file = document.getElementById('hiSendToCompanyAttachmentInReceivedFromCompany');
    		
    		if(health_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', health_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_health_request_attach_file.php?tcode='+tcode+'&path=health_send_to_company');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_health_tcode_received_from_company').val(),
			'send_to_company_notes':$('#hiSendToCompanyNotesInReceivedFromCompany').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_send_to_company_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_Health_Insurance_Send_To_Company_On_Received_From_Company_Tab").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_Health_Insurance_Send_To_Company_On_Received_From_Company_Tab").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		health_send_to_company($('#hidden_health_tcode_received_from_company').val(),'received_from_company','True') // Display the Send to company
    		
    		$('#hiSendToCompanyUpdateInReceivedFromCompanyTable').addClass('hideContentAi');
        	$("#health_task_send_to_company").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update send to company on received from company tab');
    }); // end
    
    /* ------------------------- \\ // ------------------------- */
    
    // This will update the received from company
    $('#Update_Health_Insurance_Received_From_Company').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_health_tcode_received_from_company').val();
    	
    	var health_attach_file = $('#hiReceivedFromCompanyAttachment').val();
    	
    	var health_attach_fileLength = health_attach_file.length;
    	
    	if(health_attach_fileLength > 0){
    		
    		var health_attach_file = document.getElementById('hiReceivedFromCompanyAttachment');
    		
    		if(health_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', health_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_health_request_attach_file.php?tcode='+tcode+'&path=health_received_from_company');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_health_tcode_received_from_company').val(),
			'received_from_company_notes':$('#hiReceivedFromCompanyNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_update_received_from_company.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToHiReceivedFromCompany").attr("disabled", true);
    			$("#Update_Health_Insurance_Received_From_Company").attr("disabled", true);
    		},
    		complete: function(){
    			showHealthInsuranceTables('#listOfHiRequestSendToSite', 'health_send_to_site') // This will display the Send to site table lists
    			$("#goBackToHiReceivedFromCompany").attr("disabled", false);
    			$("#Update_Health_Insurance_Received_From_Company").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterHealthInsuranceRequest(); // This will display the number of pending rquest on the TABS
    		
    		showHealthInsuranceTables('#listOfHiRequestReceivedFromCompany', 'health_received_from_company') // This will display the Received from company table lists
    		
    		$('#hiReceivedFromCompanyDetails').addClass('hideContentAi');
    		$("#hiReceivedFromCompanyTable").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update received from company');
    }); // end
    
	//hiReceivedFromCompany end    
    
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */
    
	//hiSendToSite start
	$('#hiSendToSiteTable').removeClass('hideContentAi');
	
	$('#listOfHiRequestSendToSite tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#hiSendToSiteAttachment').val('');
		$('#hiSendToSiteNotes').data("wysihtml5").editor.setValue();
		$('#hiSendToSiteNotes').val('');
		
		var table = $('#listOfHiRequestSendToSite').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'send_to_site'); // Display the Encoder details
		employee_details(tcodeid,'send_to_site'); // Display the Employee details
		health_hr_first(tcodeid,'send_to_site', 'False') // Display the HR First
		health_send_to_company(tcodeid,'send_to_site','False') // Display the Send to company
		health_received_from_company(tcodeid,'send_to_site','True') // Display the Received company
		
		$('#hiSendToSiteTable').addClass('hideContentAi');
    	$("#hiSendToSiteDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToHiSendToSiteTable, a[href="#hiSendToSite"]').click(function() {
    	$('#hiSendToSiteDetails').addClass('hideContentAi');
    	$("#hiSendToSiteTable").removeClass('hideContentAi');
    });	
	
    showHealthInsuranceTables('#listOfHiRequestSendToSite', 'health_send_to_site') // This will display the Send to site table lists
    
	$('#hiSendToSiteNotes').wysihtml5();

	$('#health_task_received_from_company').removeClass('hideContentAi');
	
    $( '.hiReceivedFromCompanyUpdateInSendToSite').click(function() {
    	$('#hiReceivedFromCompanyUpdateInSendToSiteTable').addClass('hideContentAi');
    	$("#health_task_received_from_company").removeClass('hideContentAi');
    });       
    
    // Update received from company on send to site tab
    $('#Update_Health_Insurance_Received_From_Company_On_Send_To_Site_Tab').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_health_tcode_send_to_site').val();
    	
    	var health_attach_file = $('#hiReceivedFromCompanyAttachmentInSendToSite').val();
    	
    	var health_attach_fileLength = health_attach_file.length;
    	
    	if(health_attach_fileLength > 0){
    		
    		var health_attach_file = document.getElementById('hiReceivedFromCompanyAttachmentInSendToSite');
    		
    		if(health_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', health_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_health_request_attach_file.php?tcode='+tcode+'&path=health_received_from_company');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_health_tcode_send_to_site').val(),
			'send_to_site_notes':$('#hiReceivedFromCompanyNotesInSendToSite').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_send_to_site_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_Health_Insurance_Received_From_Company_On_Send_To_Site_Tab").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_Health_Insurance_Received_From_Company_On_Send_To_Site_Tab").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		health_received_from_company($('#hidden_health_tcode_send_to_site').val(),'send_to_site','True') // Display the Received company
    		
    		$('#hiReceivedFromCompanyUpdateInSendToSiteTable').addClass('hideContentAi');
        	$("#health_task_received_from_company").removeClass('hideContentAi');
    		
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
    		
//    		console.log(data.message);
    		
    	}); // end done
    	
    	//console.log('Update received from company on send to site tab');
    }); // end
    
    /* ------------------------- \\ // ------------------------- */
    
    // Update send to site
    $('#Update_Health_Insurance_Send_To_Site').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_health_tcode_send_to_site').val();
    	
    	var health_attach_file = $('#hiSendToSiteAttachment').val();
    	
    	var health_attach_fileLength = health_attach_file.length;
    	
    	if(health_attach_fileLength > 0){
    		
    		var health_attach_file = document.getElementById('hiSendToSiteAttachment');
    		
    		if(health_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', health_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_health_request_attach_file.php?tcode='+tcode+'&path=health_send_to_site');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_health_tcode_send_to_site').val(),
			'send_to_site_notes':$('#hiSendToSiteNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/health_insurance_request_update_send_to_site.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToHiSendToSiteTable").attr("disabled", true);
    			$("#Update_Health_Insurance_Send_To_Site").attr("disabled", true);
    		},
    		complete: function(){
    			showHealthInsuranceTables('#listOfHiRequestClosed', 'health_closed') // This will display the Closed table lists
    			$("#goBackToHiSendToSiteTable").attr("disabled", false);
    			$("#Update_Health_Insurance_Send_To_Site").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterHealthInsuranceRequest(); // This will display the number of pending rquest on the TABS
    		
    		showHealthInsuranceTables('#listOfHiRequestSendToSite', 'health_send_to_site') // This will display the Send to site table lists
    		
    		$('#hiSendToSiteDetails').addClass('hideContentAi');
        	$("#hiSendToSiteTable").removeClass('hideContentAi');
    		
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
    
	//hiSendToSite end  
    
    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */

	// Closed start
	$('#hiClosedTable').removeClass('hideContentAi');
	
	$('#listOfHiRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfHiRequestClosed').DataTable();
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
		health_hr_first(tcodeid,'closed', 'False') // Display the HR First
		health_send_to_company(tcodeid,'closed','False') // Display the Send to company
		health_received_from_company(tcodeid,'closed','False') // Display the Received company
		health_send_to_site(tcodeid,'closed') // Display the Send to site
		
		$('#hiClosedTable').addClass('hideContentAi');
    	$("#hiClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToHiClosedTable, a[href="#hiClosed"]').click(function() {
    	$('#hiClosedDetails').addClass('hideContentAi');
    	$("#hiClosedTable").removeClass('hideContentAi');
    });	
    
    showHealthInsuranceTables('#listOfHiRequestClosed', 'health_closed') // This will display the Closed table lists
	
	// Closed end    

    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */
  
	// Declined start
	$('#hiDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfHiRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfHiRequestDeclined').DataTable();
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
		health_hr_first(tcodeid,'declined', 'False') // Display the HR First
		health_send_to_company(tcodeid,'declined','False') // Display the Send to company
		health_received_from_company(tcodeid,'declined','False') // Display the Received company
		health_send_to_site(tcodeid,'declined') // Display the Send to site
		
		$('#hiDeclinedTable').addClass('hideContentAi');
    	$("#hiDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToHiDeclinedTable, a[href="#hiDeclined"]').click(function() {
    	$('#hiDeclinedDetails').addClass('hideContentAi');
    	$("#hiDeclinedTable").removeClass('hideContentAi');
    });	
	
    showHealthInsuranceTables('#listOfHiRequestDeclined', 'health_declined') // This will display the Declined table lists
    
	// Declined end	    

    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#hiHrTableH').addClass('hideContentAi');
		$('#health_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#Update_Health_Insurance_HR_First').addClass('hideContentAi');

		$('#hiSendToCompanyTableH').addClass('hideContentAi');
		$('#Update_Health_Insurance_Send_To_Company').addClass('hideContentAi');
		
		$('#hiReceivedFromCompanyTableH').addClass('hideContentAi');
		$('#Update_Health_Insurance_Received_From_Company').addClass('hideContentAi');		
		
		$('#hiSendToSiteTableH').addClass('hideContentAi');
		$('#Update_Health_Insurance_Send_To_Site').addClass('hideContentAi');			
	}
	//disable button and update end      
    
} );
