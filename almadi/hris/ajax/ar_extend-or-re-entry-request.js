$(document).ready(function() {

	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showEnRTables(table_name, task){
    	//console.log(table_name + ' ' + task);
		
		var dataTable = $(table_name).DataTable({
			"fnRowCallback": function( row, data, index ){
				if(jQuery.isEmptyObject(data[6]) || data[6] == ''){
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
			"ajax": "../ajax/controller/employee_request/extend_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This is the counter for the extend request
	counterEnRRequest(); // This will display the number of pending rquest on the TABS
	
	function counterEnRRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/extend_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR
			var EnR_Hr_total = $.parseJSON(msg);
			$("#EnR_Hr_total").text(EnR_Hr_total['EnR_Hr_total']);
		
			// closed
			var EnR_Closed_total = $.parseJSON(msg);
			$("#EnR_Closed_total").text(EnR_Closed_total['EnR_Closed_total']);

			// Declined
			var EnR_Declined_total = $.parseJSON(msg);
			$("#EnR_Declined_total").text(EnR_Declined_total['EnR_Declined_total']);		
			
			// All
			var EnR_Hr_total_All = $.parseJSON(msg);
			$("#EnR_Hr_total_All").text(EnR_Hr_total_All['EnR_Hr_total_All']);			
			
		});// end done
		
	}// end function
	// This is the counter for the extend request
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	// This will display the Encoder Details
	function EnR_encoder_details($EnR_tcode,$EnR_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/extend_request_details.php",
    		data: { EnR_tcode_id: $EnR_tcode, EnR_query: $EnR_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($EnR_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var EnR_encode_by = $.parseJSON(msg);
    		var EnR_encoder_name = $.parseJSON(msg);
    		var EnR_encode_date = $.parseJSON(msg);
    		var EnR_elapsed_days = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#EnR_encoder_details_'+$EnR_query+'> thead').empty();
    		$('#EnR_encoder_details_'+$EnR_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="4">Encoder details <span class="muted">- '+$EnR_tcode+'</span></th>'+
    				'<input type="hidden" id="hidden_EnR_tcode_'+$EnR_query+'" value="'+$EnR_tcode+'" />'+
    			'</tr>'			
    		);
    		
    		$('#EnR_encoder_details_'+$EnR_query+'> tbody').empty();
    		$('#EnR_encoder_details_'+$EnR_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+EnR_encode_by['EnR_encode_by']+'</td>'+
    				'<td><strong>Name</strong><br>'+EnR_encoder_name['EnR_encoder_name']+'</td>'+
    				'<td><strong>Created date</strong><br>'+EnR_encode_date['EnR_encode_date']+'</td>'+
    				'<td><strong>Elapsed day(s)</strong><br>'+EnR_elapsed_days['EnR_elapsed_days']+'</td>'+
    			'</tr>'			
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
				
	}// end function
	// This will display the Encoder Details
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the emmployee Details
	function EnR_employee_details($EnR_tcode,$EnR_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/extend_request_details.php",
    		data: { EnR_tcode_id: $EnR_tcode, EnR_query: $EnR_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($EnR_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var EnR_employee_id = $.parseJSON(msg);
    		var EnR_employee_name = $.parseJSON(msg);
    		var EnR_employee_pname = $.parseJSON(msg);
    		var EnR_employee_position = $.parseJSON(msg);
    		var EnR_employee_nationality = $.parseJSON(msg);
    		var EnR_file_path = $.parseJSON(msg);
    		var EnR_file_name = $.parseJSON(msg);
    		var EnR_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#EnR_employee_details_'+$EnR_query+'> thead').empty();
    		$('#EnR_employee_details_'+$EnR_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">Employee details</th>'+
    			'</tr>'			
    		);
    		
    		$('#EnR_employee_details_'+$EnR_query+'> tbody').empty();
    		$('#EnR_employee_details_'+$EnR_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+EnR_employee_id['EnR_employee_id']+'</td>'+
    				'<td><strong>Name</strong><br>'+EnR_employee_name['EnR_employee_name']+'</td>'+
    				'<td><strong>Project name</strong><br>'+EnR_employee_pname['EnR_employee_pname']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Job title</strong><br>'+EnR_employee_position['EnR_employee_position']+'</td>'+
    				'<td><strong>Nationality</strong><br>'+EnR_employee_nationality['EnR_employee_nationality']+'</td>'+
    				'<td><strong>Attachment</strong><br><a href="'+EnR_file_path['EnR_file_path']+'" target="_blank">'+EnR_file_name['EnR_file_name']+'</a></td>'+
    			'</tr>'+															
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+EnR_notes['EnR_notes']+'</td>'+
    			'</tr>'		
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
				
	}// end function
	// This will display the emmployee Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the hr closed Details
	function EnR_closed_details($EnR_tcode,$EnR_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/extend_request_details.php",
    		data: { EnR_tcode_id: $EnR_tcode, EnR_query: $EnR_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($EnR_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var EnR_hrclosed_update_by = $.parseJSON(msg);
    		var EnR_hrclosed_encoder_name = $.parseJSON(msg);
    		var EnR_hrclosed_update_created = $.parseJSON(msg);
    		var EnR_hrclosed_update_days = $.parseJSON(msg);
    		var EnR_hrclosed_file_path = $.parseJSON(msg);
    		var EnR_hrclosed_file_name = $.parseJSON(msg);
    		var EnR_hrclosed_notes = $.parseJSON(msg);
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#EnR_closed_details_'+$EnR_query+'> thead').empty();
    		$('#EnR_closed_details_'+$EnR_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">HR</th>'+
    			'</tr>'			
    		);
    		
    		$('#EnR_closed_details_'+$EnR_query+'> tbody').empty();
    		$('#EnR_closed_details_'+$EnR_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br> '+EnR_hrclosed_update_by['EnR_hrclosed_update_by']+', '+EnR_hrclosed_encoder_name['EnR_hrclosed_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+EnR_hrclosed_update_created['EnR_hrclosed_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+EnR_hrclosed_update_days['EnR_hrclosed_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+EnR_hrclosed_file_path['EnR_hrclosed_file_path']+'" target="_blank">'+EnR_hrclosed_file_name['EnR_hrclosed_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+EnR_hrclosed_notes['EnR_hrclosed_notes']+'</td>'+
    			'</tr>'	
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the hr closed Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the hr declined Details
	function EnR_declined_details($EnR_tcode,$EnR_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/extend_request_details.php",
    		data: { EnR_tcode_id: $EnR_tcode, EnR_query: $EnR_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($EnR_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var EnR_hrdeclined_update_by = $.parseJSON(msg);
    		var EnR_hrdeclined_encoder_name = $.parseJSON(msg);
    		var EnR_hrdeclined_update_created = $.parseJSON(msg);
    		var EnR_hrdeclined_update_days = $.parseJSON(msg);
    		var EnR_hrdeclined_file_path = $.parseJSON(msg);
    		var EnR_hrdeclined_file_name = $.parseJSON(msg);
    		var EnR_hrdeclined_notes = $.parseJSON(msg);
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#EnR_declined_details_'+$EnR_query+'> thead').empty();
    		$('#EnR_declined_details_'+$EnR_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">HR</th>'+
    			'</tr>'			
    		);
    		
    		$('#EnR_declined_details_'+$EnR_query+'> tbody').empty();
    		$('#EnR_declined_details_'+$EnR_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br> '+EnR_hrdeclined_update_by['EnR_hrdeclined_update_by']+', '+EnR_hrdeclined_encoder_name['EnR_hrdeclined_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+EnR_hrdeclined_update_created['EnR_hrdeclined_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+EnR_hrdeclined_update_days['EnR_hrdeclined_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+EnR_hrdeclined_file_path['EnR_hrdeclined_file_path']+'" target="_blank">'+EnR_hrdeclined_file_name['EnR_hrdeclined_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+EnR_hrdeclined_notes['EnR_hrdeclined_notes']+'</td>'+
    			'</tr>'	
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the hr declined Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	//extendReEntryHr start
	$('#extendReEntryHrTable').removeClass('hideContentAi');
	
	$('#listOfExtendReEntryRequestHr tbody').on( 'click', 'tr', function () {
		
		//clear field
    	$('#extendReEntryHrAttachment').val('');
		$('#extendReEntryHrNotes').data("wysihtml5").editor.setValue();
		$('#extendReEntryHrNotes').val('');		

		var EnR_hr_table = $('#listOfExtendReEntryRequestHr').DataTable();
		var EnR_hr_rowData = EnR_hr_table.row( this ).data();
		var EnR_hr_tcodeid = EnR_hr_rowData[7];		
		
		EnR_encoder_details(EnR_hr_tcodeid,'EnR_hr'); // Display the Encoder details
		EnR_employee_details(EnR_hr_tcodeid,'EnR_hr'); // Display the employee details		
		
		// This is for the Generate PDF HR First
		var extend_reentry_hrfirst_GeneratePDF = "../../tcpdf/hris/pdf_extend_request.php?tcode=" + EnR_hr_tcodeid;
		$("#extend_reentry_hrfirst_GeneratePDF").attr("href", extend_reentry_hrfirst_GeneratePDF);    		
		// This is for the Generate PDF HR First
		
		$('#extendReEntryHrTable').addClass('hideContentAi');
    	$("#extendReEntryHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExtendReEntryHrTable').click(function() {
    	$('#extendReEntryHrDetails').addClass('hideContentAi');
    	$("#extendReEntryHrTable").removeClass('hideContentAi');
    });	
	
    showEnRTables('#listOfExtendReEntryRequestHr', 'EnR_hr'); // Display the list of HR Tables
    
	$('#extendReEntryHrNotes').wysihtml5();  
	
	// This will update the HR for closed
	$('#updateEnRHr').on('click',function(){
		
		// This is for the Attach Files
		
		var tcode_EnR_attach = $('#hidden_EnR_tcode_EnR_hr').val();
		
		var EnR_attach_file = $('#extendReEntryHrAttachment').val();
		
		var EnR_attach_fileLength = EnR_attach_file.length;
		
		if(EnR_attach_fileLength > 0){
			
			var EnR_attach_File = document.getElementById('extendReEntryHrAttachment');
			
			if(EnR_attach_File.length === 0){
				 return;
			}// end if
			
			var data_EnR = new FormData();
			
			data_EnR.append('SelectedFile', EnR_attach_File.files[0]);
			
			var request_EnR = new XMLHttpRequest();
			request_EnR.onreadystatechange = function(){
				if(request_EnR.readyState == 4){
					try {
						var resp = JSON.parse(request_EnR.response);
					}catch(e){
						var resp = {
							status_EnR: 'error',
							data_EnR: 'Unknown error occurred: [' + request_EnR.responseText + ']'
						};// end
					}// end
					console.log(resp.status_EnR + ': ' + resp.data_EnR);
				}// end if
			}; // end
			request_EnR.open('POST', '../ajax/controller/employee_request/upload_extend_request_attach_file.php?tcode='+tcode_EnR_attach+'&path=EnR_hr');
			request_EnR.send(data_EnR);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		
		var EnR_formData = {
				'EnR_code':$('#hidden_EnR_tcode_EnR_hr').val(),	
				'EnR_hr_notes':$('#extendReEntryHrNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/extend_request_update_hr.php',
			data: EnR_formData,
			beforeSend: function(){
				$("#goBackToExtendReEntryHrTable").attr("disabled", true);
				$("#declineFvHr").attr("disabled", true);
				$("#updateFvHr").attr("disabled", true);
			},
			complete: function(){
				showEnRTables('#listOfExtendReEntryRequestClosed', 'EnR_closed'); // Display the list of HR Tables
				$("#goBackToFamilyVisitHrTable").attr("disabled", false);
				$("#declineEnRHr").attr("disabled", false);
				$("#updateEnRHr").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showEnRTables('#listOfExtendReEntryRequestHr', 'EnR_hr'); // Display the list of HR Tables
			
			// Return to previous page
	    	$('#extendReEntryHrDetails').addClass('hideContentAi');
	    	$("#extendReEntryHrTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterEnRRequest(); // This will display the number of pending rquest on the TABS
	    	
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
		
		//console.log(tcode);		
		//this is for text end

	});
	// This will update the HR for closed	

	// This will update the HR for declined
	$('#declineEnRHr').on('click',function(){
		
		// This is for the Attach Files
		
		var tcode_EnR_attach = $('#hidden_EnR_tcode_EnR_hr').val();
		
		var EnR_attach_file = $('#extendReEntryHrAttachment').val();
		
		var EnR_attach_fileLength = EnR_attach_file.length;
		
		if(EnR_attach_fileLength > 0){
			
			var EnR_attach_File = document.getElementById('extendReEntryHrAttachment');
			
			if(EnR_attach_File.length === 0){
				 return;
			}// end if
			
			var data_EnR = new FormData();
			
			data_EnR.append('SelectedFile', EnR_attach_File.files[0]);
			
			var request_EnR = new XMLHttpRequest();
			request_EnR.onreadystatechange = function(){
				if(request_EnR.readyState == 4){
					try {
						var resp = JSON.parse(request_EnR.response);
					}catch(e){
						var resp = {
							status_EnR: 'error',
							data_EnR: 'Unknown error occurred: [' + request_EnR.responseText + ']'
						};// end
					}// end
					console.log(resp.status_EnR + ': ' + resp.data_EnR);
				}// end if
			}; // end
			request_EnR.open('POST', '../ajax/controller/employee_request/upload_extend_request_attach_file.php?tcode='+tcode_EnR_attach+'&path=EnR_declined');
			request_EnR.send(data_EnR);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		
		var EnR_formData = {
				'EnR_code':$('#hidden_EnR_tcode_EnR_hr').val(),	
				'EnR_hr_notes':$('#extendReEntryHrNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/extend_request_update_hr_for_declined.php',
			data: EnR_formData,
			beforeSend: function(){
				$("#goBackToExtendReEntryHrTable").attr("disabled", true);
				$("#declineFvHr").attr("disabled", true);
				$("#updateFvHr").attr("disabled", true);
			},
			complete: function(){
				showEnRTables('#listOfExtendReEntryRequestDeclined', 'EnR_declined'); // Display the list of HR Tables
				$("#goBackToFamilyVisitHrTable").attr("disabled", false);
				$("#declineEnRHr").attr("disabled", false);
				$("#updateEnRHr").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showEnRTables('#listOfExtendReEntryRequestHr', 'EnR_hr'); // Display the list of HR Tables
			
			// Return to previous page
	    	$('#extendReEntryHrDetails').addClass('hideContentAi');
	    	$("#extendReEntryHrTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterEnRRequest(); // This will display the number of pending rquest on the TABS
	    	
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
		
		//console.log(tcode);		
		//this is for text end

	});
	// This will update the HR for declined	
	
	//extendReEntryHr end


	// Closed start
	$('#extendReEntryClosedTable').removeClass('hideContentAi');
	
	$('#listOfExtendReEntryRequestClosed tbody').on( 'click', 'tr', function () {

		var EnR_closed_table = $('#listOfExtendReEntryRequestClosed').DataTable();
		var EnR_closed_rowData = EnR_closed_table.row( this ).data();
		var EnR_closed_tcodeid = EnR_closed_rowData[7];		
		
		EnR_encoder_details(EnR_closed_tcodeid,'EnR_closed'); // Display the Encoder details
		EnR_employee_details(EnR_closed_tcodeid,'EnR_closed'); // Display the employee details
		EnR_closed_details(EnR_closed_tcodeid,'EnR_closed'); // Display the hr closed details
		
		$('#extendReEntryClosedTable').addClass('hideContentAi');
    	$("#extendReEntryClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExtendReEntryClosedTable').click(function() {
    	$('#extendReEntryClosedDetails').addClass('hideContentAi');
    	$("#extendReEntryClosedTable").removeClass('hideContentAi');
    });	
	
    showEnRTables('#listOfExtendReEntryRequestClosed', 'EnR_closed'); // Display the list of HR Tables
    
	// Closed end       

   
	// Declined start
	$('#extendReEntryDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfExtendReEntryRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var EnR_declined_table = $('#listOfExtendReEntryRequestDeclined').DataTable();
		var EnR_declined_rowData = EnR_declined_table.row( this ).data();
		var EnR_declined_tcodeid = EnR_declined_rowData[7];		
		
		EnR_encoder_details(EnR_declined_tcodeid,'EnR_declined'); // Display the Encoder details
		EnR_employee_details(EnR_declined_tcodeid,'EnR_declined'); // Display the employee details
		EnR_declined_details(EnR_declined_tcodeid,'EnR_declined'); // Display the hr closed details		
		
		$('#extendReEntryDeclinedTable').addClass('hideContentAi');
    	$("#extendReEntryDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExtendReEntryDeclinedTable').click(function() {
    	$('#extendReEntryDeclinedDetails').addClass('hideContentAi');
    	$("#extendReEntryDeclinedTable").removeClass('hideContentAi');
    });	
	
    showEnRTables('#listOfExtendReEntryRequestDeclined', 'EnR_declined'); // Display the list of HR Tables
    
	// Declined end	    
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#extendReEntryHrTableH').addClass('hideContentAi');
		$('#extend_reentry_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#updateEnRHr').addClass('hideContentAi');
			
	}
	//disable button and update end    

} );
