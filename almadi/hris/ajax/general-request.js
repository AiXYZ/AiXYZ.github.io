$(document).ready(function() {
	
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is for the tab Assigned from and Assigned to display
	requestFeatures();
	function requestFeatures(){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/request_features.php"
		}) //end ajax
		
		.done(function( msg ){
			
			var gr_who_assign = $.parseJSON(msg);
			var gr_assign_to = $.parseJSON(msg);
			var test_result = $.parseJSON(msg);
			
			//console.log(test_result['test_result']);
			
			// This is for the Admin
			// Assigned to
			if(gr_who_assign['gr_who_assign'] == 'True'){
				$('#general_assigned_to_menu_tab').show(); // Value is true
				$('#general_hr_menu_tab').show(); // Value is true
			}else {
				$('#general_assigned_to_menu_tab').hide(); // Value is false
				$('#general_hr_menu_tab').hide(); // Value is false
			}// end function
			
			// This is for the Non-admin
			// Assigned from
			if(gr_assign_to['gr_assign_to'] == 'True'){
				$('#general_assigned_from_menu_tab').show(); // Value is true
				$('#general_assigned_from_menu_tab').addClass('active');
				$('#genHr').removeClass('active');
				$('#genAssignedFrom').addClass('active');
			}else {
				$('#general_assigned_from_menu_tab').hide(); // Value is false
			}// end function
			
			// This will remove the active class if the employee have 1 and 2 features
			if(gr_who_assign['gr_who_assign'] == 'True' && gr_assign_to['gr_assign_to'] == 'True'){
				$('#general_assigned_from_menu_tab').removeClass('active');
				$('#genHr').addClass('active');
				$('#genAssignedFrom').removeClass('active');
			}// end function
			
			/*--------------------------------------------------------------------------------------------------------------*/
			
		} );// end
		
		//console.log('request features');
	}
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is the counter for the general request
	counterGeneralRequest(); // This will display the number of pending rquest on the TABS
	
	function counterGeneralRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/general_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var general_hr_first_total = $.parseJSON(msg);
			$("#general_hr_first_total").text(general_hr_first_total['general_hr_first_total']);
			
			// Assigned to
			var general_assigned_to_total = $.parseJSON(msg);
			$("#general_assigned_to_total").text(general_assigned_to_total['general_assigned_to_total']);
			
			// Assigned from
			var general_assigned_from_total = $.parseJSON(msg);
			$("#general_assigned_from_total").text(general_assigned_from_total['general_assigned_from_total']);
			
			// Closed
			var general_closed_total = $.parseJSON(msg);
			$("#general_closed_total").text(general_closed_total['general_closed_total']);
			
			// Declined
			var general_declined_total = $.parseJSON(msg);
			$("#general_declined_total").text(general_declined_total['general_declined_total']);
			
			// Grand Total
			var general_grand_total = $.parseJSON(msg);
			$("#gr_grand_total").text(general_grand_total['general_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the general request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showGeneralRequestTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/general_request_list.php?request_type="+task,
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
    		url: "../ajax/controller/employee_request/general_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		$('#general_encoder_details_'+$query+' > thead').empty();
    		$('#general_encoder_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="4">Encoder details <span class="muted">- '+$tcode+' </span></th>'+
						'<input type="hidden" id="hidden_general_tcode_'+$query+'" value="'+$tcode+'" />'+
					'</tr>'
    		);
    		
    		$('#general_encoder_details_'+$query+' > tbody').empty();
    		$('#general_encoder_details_'+$query+' > tbody').append(
    				'<tr>'+
	    				'<tr>'+
	    				'<td><strong>Employee ID</strong><br> '+encode_by['encode_by']+' </td>'+
						'<td><strong>Name</strong><br> '+encoder_name['encoder_name']+' </td>'+
						'<td><strong>Created date</strong><br> '+encode_date['encode_date']+' </td>'+
						'<td><strong>Elapsed day(s)</strong><br> '+elapsed_days['elapsed_days']+' </td>'+
					'</tr>'		
    		);
    		
    	}); //  end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the employee details
	function employee_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/general_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_id = $.parseJSON(msg);
    		var employee_name = $.parseJSON(msg);
    		var employee_pname = $.parseJSON(msg);
    		var employee_position = $.parseJSON(msg);
    		var employee_nationality = $.parseJSON(msg);
    		
    		var employee_request_notes = $.parseJSON(msg);
    		
    		var employee_request_subject = $.parseJSON(msg);
    		
    		var request_file_path = $.parseJSON(msg);
    		var request_file_filename = $.parseJSON(msg);
    		
    		$('#general_employee_details_'+$query+' > thead').empty();
    		$('#general_employee_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="3">Employee details</th>'+
					'</tr>'
    		);
    		
    		$('#general_employee_details_'+$query+' > tbody').empty();
    		$('#general_employee_details_'+$query+' > tbody').append(
    				'<tr>'+
						'<td><strong>EmployeeID</strong><br> '+employee_id['employee_id']+' </td>'+
						'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
						'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
						'<td><strong>Nationality</strong><br> '+employee_nationality['employee_nationality']+' </td>'+
						'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_filename['request_file_filename']+' </a></td>'+
					'</tr>'+															
					'<tr>'+
						'<td><strong>Subject</strong><br> '+employee_request_subject['employee_request_subject']+' </td>'+
						'<td colspan="2"><strong>Notes</strong><br> '+employee_request_notes['employee_request_notes']+' </td>'+
					'</tr>'	
    		);
    		
    	}); //  end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of 
	function assignHistory(rid){
		
		//console.log(rid);
		
		$('#general_assign_list > thead').empty();
		$('#general_assign_list > thead').append(
				'<tr>'+
					'<th colspan="6">Assign history</th>'+
				'</tr>'
		);
		
		$('#general_assign_list > tbody').empty();
		
		$('#general_assign_list > tbody').append(
				'<tr>'+
					'<td class="tdTextInCenterAi"><strong>Assigned by</strong></td>'+
					'<td class="tdTextInCenterAi"><strong>Assign to</strong></td>'+
					'<td class="tdTextInCenterAi"><strong>Notes</strong></td>'+
					'<td class="tdTextInCenterAi"><strong>Attachment</strong></td>'+
					'<td class="tdTextInCenterAi"><strong>Date</strong></td>'+
				'</tr>'
		);
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/assign_to_history_list.php?rid="+rid,
			contentType:"application/json: charset=utf-8",
			dataType:"json",
			encode: true
		})// end ajax
		
		.done(function(data){
			
			$.each(data, function(i, assigned_to, assigned_by, assign_comment, assigned_date, assigned_file_path, assigned_file_name){
				
				$('#general_assign_list > tbody').append(
						'<tr>'+
							'<td class="tdTextInCenterAi"> '+data[i].assigned_by+' </td>'+
							'<td class="tdTextInCenterAi"> '+data[i].assigned_to+' </td>'+
							'<td class="tdTextInCenterAi"> '+data[i].assign_comment+' </td>'+
							'<td class="tdTextInCenterAi"><a href="'+data[i].assigned_file_path+'" target="_blank"> '+data[i].assigned_file_name+' </a></td>'+
							'<td class="tdTextInCenterAi"> '+data[i].assigned_date+' </td>'+
						'</tr>'
				);
				
			});// end each
			
		}); // end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr details
	function general_hr($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/general_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_update_by = $.parseJSON(msg);
    		var hr_encoder_name = $.parseJSON(msg);
    		var hr_update_date = $.parseJSON(msg);
    		var hr_update_days = $.parseJSON(msg);
    		var hr_update_note = $.parseJSON(msg);
    		var hr_file_path = $.parseJSON(msg);
    		var hr_file_path_filename = $.parseJSON(msg);
    		
    		$('#general_hr > thead').empty();
    		$('#general_hr > thead').append(
    				'<tr>'+
						'<th colspan="3">HR</th>'+
					'</tr>'
    		);
    		
    		$('#general_hr > tbody').empty();
    		$('#general_hr > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+hr_update_by['hr_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+hr_encoder_name['hr_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+hr_update_date['hr_update_date']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Elapsed</strong><br> '+hr_update_days['hr_update_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+hr_file_path['hr_file_path']+'" target="_blank"> '+hr_file_path_filename['hr_file_path_filename']+' </a></td>'+
					'</tr>'+
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+hr_update_note['hr_update_note']+' </td>'+
					'</tr>'		
    		);
    		
    	}); //  end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the assigned from details
	function general_assigned_from_details($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/general_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var assigned_from_update_by = $.parseJSON(msg);
    		var assigned_from_encoder_name = $.parseJSON(msg);
    		var assigned_from_update_date = $.parseJSON(msg);
    		var assigned_from_update_days = $.parseJSON(msg);
    		var assigned_from_update_note = $.parseJSON(msg);
    		var assigned_from_file_path = $.parseJSON(msg);
    		var assigned_from_file_path_filename = $.parseJSON(msg);
    		
    		$('#general_assigned_from > thead').empty();
    		$('#general_assigned_from > thead').append(
    				'<tr>'+
						'<th colspan="3">Assign From</th>'+
					'</tr>'
    		);
    		
    		$('#general_assigned_from > tbody').empty();
    		$('#general_assigned_from > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+assigned_from_update_by['assigned_from_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+assigned_from_encoder_name['assigned_from_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br>  '+assigned_from_update_date['assigned_from_update_date']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Elapsed</strong><br> '+assigned_from_update_days['assigned_from_update_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+assigned_from_file_path['assigned_from_file_path']+'" target="_blank"> '+assigned_from_file_path_filename['assigned_from_file_path_filename']+' </a></td>'+
					'</tr>'+
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+assigned_from_update_note['assigned_from_update_note']+' </td>'+
					'</tr>'		
    		);
    		
    	}); //  end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/

	//genHr start
	$('#genHrTable').removeClass('hideContentAi');
	
	$('#listOfGenRequestHr tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#genHrNotes').data("wysihtml5").editor.setValue();
		$('#genHrNotes').val('');
		$('#genHrAttachment').val('');
		
		// Clear the fields for Assign to
		$('#genHrAssignNotesFirst').val('');
		$('#genHrAssignAttachmentFirst').val('');
		
		var table = $('#listOfGenRequestHr').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'hr_first'); // Display the Encoder details
		employee_details(tcodeid,'hr_first'); // Display the Employee details
		
		$('#genHrTable').addClass('hideContentAi');
    	$("#genHrDetails").removeClass('hideContentAi');
    	
    	//This is for the Assign To HR Dropdown List
    	$('#genHrAssignToFirst').empty();
		$('#genHrAssignToFirst').append("<option>Loading...</option>");
		$.ajax({
		  type: "POST",
		  url: "../ajax/controller/assign_to_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#genHrAssignToFirst').empty();
			  $.each(data, function(i, employee_id, employee_name){
				  $('#genHrAssignToFirst').append('<option value="'+data[i].employee_id+'"> '+data[i].employee_id+' , '+data[i].employee_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
			  
		}); // end ajax
		
    } );

    $( '#goBackToGenHrTable, a[href="#genHr"]').click(function() {
    	$('#genHrDetails').addClass('hideContentAi');
    	$("#genHrTable").removeClass('hideContentAi');
    });	
    
    showGeneralRequestTables('#listOfGenRequestHr', 'general_hr_first') // This will display the HR First table lists
	
	$('#genHrNotes').wysihtml5();
	
	$('#genHrAssignNotesFirst').wysihtml5();
	
	// This will update the HR First
	$('#Update_General_HR_First').on('click', function(){
		
		// This is for the attach file
		var tcode = $('#hidden_general_tcode_hr_first').val();
		
		var general_attach_file = $('#genHrAttachment').val();
		
		var general_attach_fileLength = general_attach_file.length;
		
		if(general_attach_fileLength > 0){
			
			var general_attach_file = document.getElementById('genHrAttachment');
			
			if(general_attach_file.length === 0){
				 return;
			}// end if
			
			var data = new FormData();
			
			data.append('SelectedFile', general_attach_file.files[0]);
			
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_general_request_attach_file.php?tcode='+tcode+'&path=general_hr_first');
	        request.send(data);
			
		}// end if
		
		var formData = {
			'tcode':$('#hidden_general_tcode_hr_first').val(),
			'hr_first_notes':$('#genHrNotes').val()
    	}; // end formData
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/general_request_update_hr_first.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToGenHrTable").attr("disabled", true);
    			$("#Update_General_HR_First").attr("disabled", true);
    		},
    		complete: function(){
    			 showGeneralRequestTables('#listOfGenRequestClosed', 'general_closed') // This will display the Closed table lists
    			$("#goBackToGenHrTable").attr("disabled", false);
    			$("#Update_General_HR_First").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
		
    	.done(function(data){
    		
    		showGeneralRequestTables('#listOfGenRequestHr', 'general_hr_first') // This will display the HR First table lists
    		
    		$('#genHrDetails').addClass('hideContentAi');
        	$("#genHrTable").removeClass('hideContentAi');
    		
    		counterGeneralRequest(); // This will display the number of pending rquest on the TABS
    		
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
    		
    	}); // end
		
		//console.log('Update hr first');
		
	}); // end

	//genHr end
	
	/* ------------------------------------------------------------------------------------------------------------- */

	//genAssignedTo start
	$('#genAssignedToTable').removeClass('hideContentAi');
	
	$('#listOfGenRequestAssignedTo tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfGenRequestAssignedTo').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		assignHistory(tcodeid); // Display the assign history list
		
		encoder_details(tcodeid,'approved_to'); // Display the Encoder details
		employee_details(tcodeid,'approved_to'); // Display the Employee details
		
		$('#genAssignedToTable').addClass('hideContentAi');
    	$("#genAssignedToDetails").removeClass('hideContentAi');
    	
    	//This is for the Assign To HR Dropdown List
    	$('#genHrAssignToSecond').empty();
		$('#genHrAssignToSecond').append("<option>Loading...</option>");
		$.ajax({
		  type: "POST",
		  url: "../ajax/controller/assign_to_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#genHrAssignToSecond').empty();
			  $.each(data, function(i, employee_id, employee_name){
				  $('#genHrAssignToSecond').append('<option value="'+data[i].employee_id+'"> '+data[i].employee_id+' , '+data[i].employee_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
			  
		}); // end ajax
		
    } );

    $( '#goBackToGenAssignedTo, a[href="#genAssignedTo"]').click(function() {
    	$('#genAssignedToDetails').addClass('hideContentAi');
    	$("#genAssignedToTable").removeClass('hideContentAi');
    });	
    
    showGeneralRequestTables('#listOfGenRequestAssignedTo', 'general_assigned_to') // This will display the Assigned to table lists
    
    $('#genHrAssignNotesSecond').wysihtml5();
	
	//genAssignedTo end	
    
    /* ------------------------------------------------------------------------------------------------------------- */

	//genAssignedFrom start
	$('#genAssignedFromTable').removeClass('hideContentAi');
	
	$('#listOfGenRequestAssignedFrom tbody').on( 'click', 'tr', function () {
		
		console.log('Assigned from');
		
		// Clear the fields for Assign to
		$('#genAssignedFromNotes').data("wysihtml5").editor.setValue();
		$('#genAssignedFromNotes').val('');
		$('#genAssignedFromAttachment').val('');
		
		var table = $('#listOfGenRequestAssignedFrom').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		// This is for the Generate PDF Assign from 
		var assignedFrom_GeneratePdfUrl = "../../tcpdf/hris/pdf_general_request.php?tcode=" + tcodeid;
		$("#assignedFrom_GeneratePDF").attr("href", assignedFrom_GeneratePdfUrl);    		
		// This is for the Generate PDF Assign from
		
		assignHistory(tcodeid); // Display the assign history list
		
		encoder_details(tcodeid,'approved_from'); // Display the Encoder details
		employee_details(tcodeid,'approved_from'); // Display the Employee details
		
		$('#genAssignedFromTable').addClass('hideContentAi');
    	$("#genAssignedFromDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToGenAssignedFromTable, a[href="#genAssignedFrom"]').click(function() {
    	$('#genAssignedFromDetails').addClass('hideContentAi');
    	$("#genAssignedFromTable").removeClass('hideContentAi');
    });	
    
    //This is for the Assign To HR Dropdown List
	$('#genAssignToThird').empty();
	$('#genAssignToThird').append("<option>Loading...</option>");
	$.ajax({
	  type: "POST",
	  url: "../ajax/controller/assign_to_list.php",
	  contentType:"application/json: charset=utf-8",
	  dataType:"json",
	  success: function(data){
		  $('#genHrAssignToThird').empty();
		  $.each(data, function(i, employee_id, employee_name){
			  $('#genHrAssignToThird').append('<option value="'+data[i].employee_id+'"> '+data[i].employee_id+' , '+data[i].employee_name+' </option>');
		  });// end each
	  },
	  complete: function(){
	  }// end success
		  
	}); // end ajax
    
    showGeneralRequestTables('#listOfGenRequestAssignedFrom', 'general_assigned_from') // This will display the Assigned from table lists
    
	$('#genAssignedFromNotes').wysihtml5();
    $('#genHrAssignNotesThird').wysihtml5();
    
    // This is to update he assigned from
    $('#updateGeneralRequest_Assigned_From').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_general_tcode_approved_from').val();
    	
    	var general_attach_file = $('#genAssignedFromAttachment').val();
    	
    	var general_attach_fileLength = general_attach_file.length;
    	
    	if(general_attach_fileLength > 0){
    		
    		var general_attach_file = document.getElementById('genAssignedFromAttachment');
    		
    		if(general_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', general_attach_file.files[0]);
    		
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
    		
    		request.open('POST', '../ajax/controller/employee_request/upload_general_request_attach_file.php?tcode='+tcode+'&path=general_asssigned_from');
	        request.send(data);
	        
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_general_tcode_approved_from').val(),
			'assign_from_notes':$('#genAssignedFromNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/general_request_assign_from_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToGenAssignedFromTable").attr("disabled", true);
    			$("#assignedForward").attr("disabled", true);
    			$("#updateGeneralRequest_Assigned_From").attr("disabled", true);
    		},
    		complete: function(){
    			showGeneralRequestTables('#listOfGenRequestClosed', 'general_closed') // This will display the Closed table lists
    			$("#goBackToGenAssignedFromTable").attr("disabled", false);
    			$("#assignedForward").attr("disabled", false);
    			$("#updateGeneralRequest_Assigned_From").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		showGeneralRequestTables('#listOfGenRequestAssignedFrom', 'general_assigned_from') // This will display the Assigned from table lists
    		
    		$('#genAssignedFromDetails').addClass('hideContentAi');
        	$("#genAssignedFromTable").removeClass('hideContentAi');
    		
    		counterGeneralRequest(); // This will display the number of pending rquest on the TABS
    		
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
    		
    	}); //end done
    	
    	//console.log('Update assigned from');
    });
    
    
	//genAssignedFrom end    
    
	/* ------------------------------------------------------------------------------------------------------------- */

	// Closed start
	$('#genClosedTable').removeClass('hideContentAi');
	
	$('#listOfGenRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfGenRequestClosed').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		assignHistory(tcodeid); // Display the assign history list
		
		encoder_details(tcodeid,'closed'); // Display the Encoder details
		employee_details(tcodeid,'closed'); // Display the Employee details
		general_hr(tcodeid,'closed'); // Display the HR details
		general_assigned_from_details(tcodeid,'closed'); // Display the Assign from details
		
		$('#genClosedTable').addClass('hideContentAi');
    	$("#genClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToGenClosedTable, a[href="#genClosed"]').click(function() {
    	$('#genClosedDetails').addClass('hideContentAi');
    	$("#genClosedTable").removeClass('hideContentAi');
    });	
    
    showGeneralRequestTables('#listOfGenRequestClosed', 'general_closed') // This will display the Closed table lists
	
	// Closed end    

    /* ------------------------------------------------------------------------------------------------------------- */
    
	// Declined start
	$('#genDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfGenRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfGenRequestDeclined').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		assignHistory(tcodeid); // Display the assign history list
		
		encoder_details(tcodeid,'declined'); // Display the Encoder details
		employee_details(tcodeid,'declined'); // Display the Employee details
		general_hr(tcodeid,'closed'); // Display the HR details
		general_assigned_from_details(tcodeid,'declined'); // Display the Assign from details
		
		$('#genDeclinedTable').addClass('hideContentAi');
    	$("#genDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToGenDeclinedTable, a[href="#genDeclined"]').click(function() {
    	$('#genDeclinedDetails').addClass('hideContentAi');
    	$("#genDeclinedTable").removeClass('hideContentAi');
    });	
    
    showGeneralRequestTables('#listOfGenRequestDeclined', 'general_declined') // This will display the Declined table lists
	
	// Declined end	    
    
    /* ------------------------------------------------------------------------------------------------------------- */
    
    // This will assigned on HR First
	$('#assignGeneralRequestFirst').on('click', function(){
		
		var formData = {
			'tcode':$('#hidden_general_tcode_hr_first').val(),
			'assign_to':$('#genHrAssignToFirst').val(),
			'assign_to_notes':$('#genHrAssignNotesFirst').val()
    	}; // end formData
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/general_request_assign_to_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#assignGeneralRequest").attr("disabled", true);
    		},
    		complete: function(){
    			showGeneralRequestTables('#listOfGenRequestAssignedTo', 'general_assigned_to') // This will display the Assigned to table lists
    			$("#assignGeneralRequest").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
		
    	.done(function(data){
    		
    		showGeneralRequestTables('#listOfGenRequestHr', 'general_hr_first') // This will display the HR First table lists
    		
    		$('#genHrDetails').addClass('hideContentAi');
        	$("#genHrTable").removeClass('hideContentAi');
    		
    		$('#genHrAssignFirst').modal('hide');
    		
    		counterGeneralRequest(); // This will display the number of pending rquest on the TABS
    		
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
			
    	}); // end done
		
		// Delay the posting
		setTimeout(function(){
			
			$.ajax({
	    		type: "POST",
	    		url: "../ajax/controller/employee_request/general_request_assign_to_id.php",
	    		data: { tcode_id: $('#hidden_general_tcode_hr_first').val()}
	    	})// end ajax
			
			.done(function( msg ){
				
				var assigned_to_id = $.parseJSON(msg);
				var assignedToID = assigned_to_id['assigned_to_id'];
				
				// This will save the assigned to attachment
				var assigned_to_Image = $('#genHrAssignAttachmentFirst').val();
				
				var assigned_to_ImageLength = assigned_to_Image.length;
				
				if(assigned_to_ImageLength > 0){
					
					var assigned_toFile = document.getElementById('genHrAssignAttachmentFirst');
					
					if(assigned_toFile.length === 0){
		    			return;
		    		}// end if
					
					var data = new FormData();
					
					data.append('SelectedFile', assigned_toFile.files[0]);
					
					var request = new XMLHttpRequest();
					request.onreadystatechange = function(){
		    			if(request.readyState == 4){
		    				try {
		    					var resp = JSON.parse(request.response);
		    				}catch(e){
		    					var resp = {
									status: 'error',
									data: 'Unknown error occurred: [' + request.responseText + ']'
		    					}// end
		    				}// end catch
		    			}// end if
		    		};// end request
		    		request.open('POST', '../ajax/controller/employee_request/upload_attach_assigned_to.php?aid='+assignedToID);
			        request.send(data);
					
				}// end if
				
				//console.log(assigned_to_id['assigned_to_id']);
				
			}); //end done
			
		}, 5000);
		// Delay the posting
		
		//console.log('Assign request');
	}); // end
    
    /* ------------------------------------------------------------------------------------------------------------- */
    
    // This will assigned on Assigned to
	$('#assignGeneralRequestSecond').on('click', function(){
		
		var formData = {
			'tcode':$('#hidden_general_tcode_approved_to').val(),
			'assign_to':$('#genHrAssignToSecond').val(),
			'assign_to_notes':$('#genHrAssignNotesSecond').val()
    	}; // end formData
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/general_request_assign_to_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#assignGeneralRequest").attr("disabled", true);
    		},
    		complete: function(){
    			showGeneralRequestTables('#listOfGenRequestAssignedTo', 'general_assigned_to') // This will display the Assigned to table lists
    			$("#assignGeneralRequest").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		/*-----------------------------------------------------------------------------------------------*/
    		
    		$.ajax({
	    		type: "POST",
	    		url: "../ajax/controller/employee_request/general_request_assign_to_id.php",
	    		data: { tcode_id: $('#hidden_general_tcode_approved_to').val()}
	    	})// end ajax
	    	
	    	.done(function( msg ){
	    		
	    		var assigned_to_id = $.parseJSON(msg);
				var assignedToID = assigned_to_id['assigned_to_id'];
				
				// This will save the assigned to attachment
				var assigned_to_Image = $('#genHrAssignAttachmentSecond').val();
				
				var assigned_to_ImageLength = assigned_to_Image.length;
				
				if(assigned_to_ImageLength > 0){
					
					var assigned_toFile = document.getElementById('genHrAssignAttachmentSecond');
					
					if(assigned_toFile.length === 0){
		    			return;
		    		}// end if
					
					var data = new FormData();
					
					data.append('SelectedFile', assigned_toFile.files[0]);
					
					var request = new XMLHttpRequest();
					request.onreadystatechange = function(){
		    			if(request.readyState == 4){
		    				try {
		    					var resp = JSON.parse(request.response);
		    				}catch(e){
		    					var resp = {
									status: 'error',
									data: 'Unknown error occurred: [' + request.responseText + ']'
		    					}// end
		    				}// end catch
		    			}// end if
		    		};// end request
		    		request.open('POST', '../ajax/controller/employee_request/upload_attach_assigned_to.php?aid='+assignedToID);
			        request.send(data);
					
				}// end if
				
				$('#genAssignedToDetails').addClass('hideContentAi');
	        	$("#genAssignedToTable").removeClass('hideContentAi');
	    		
	    	}); //end done
    		
    		/*-----------------------------------------------------------------------------------------------*/
    		
        	$('#genHrAssignSecond').modal('hide');
        	
        	counterGeneralRequest(); // This will display the number of pending rquest on the TABS
        	
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
    		
    	}); // end done
		
	}); // end
	
	 /* ------------------------------------------------------------------------------------------------------------- */
	
	// This will assigned on Assigned from
	$('#assignGeneralRequestThird').on('click', function(){
		
		console.log('Assign Third');
		
	}); // end
	
	 /* ------------------------------------------------------------------------------------------------------------- */

} );
