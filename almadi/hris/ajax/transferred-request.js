$(document).ready(function() {
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// THIS TO REFRESH THE VALUES IN TRANSFER REQUEST
	
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
	
	// This will display the list of request
	function showTransferTables(table_name, task){
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
	
	// THIS TO REFRESH THE VALUES IN TRANSFER REQUEST
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is the counter for the transferred request
	counterTransferredRequest(); // This will display the number of pending rquest on the TABS
	
	function counterTransferredRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/transferred_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var transferred_hr_first_total = $.parseJSON(msg);
			$("#transferred_hr_first_total").text(transferred_hr_first_total['transferred_hr_first_total']);
			
			// Closed
			var transferred_closed_total = $.parseJSON(msg);
			$("#transferred_closed_total").text(transferred_closed_total['transferred_closed_total']);
			
			// Grand Total
			var transferred_grand_total = $.parseJSON(msg);
			$("#transferred_grand_total").text(transferred_grand_total['transferred_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the cash advance request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showTransferredTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/transferred_request_list.php?request_type="+task,
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
    		url: "../ajax/controller/employee_request/transferred_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		$('#transferred_encoder_details_'+$query+' > thead').empty();
    		$('#transferred_encoder_details_'+$query+' > thead').append(
    				'<tr>'+
	    				'<th colspan="4">Encoder details <span class="muted">- '+$tcode+' </span></th>'+
						'<input type="hidden" id="hidden_transferred_tcode_'+$query+'" value="'+$tcode+'" />'+
					'</tr>'
    		);
    		
    		$('#transferred_encoder_details_'+$query+' > tbody').empty();
    		$('#transferred_encoder_details_'+$query+' > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+encode_by['encode_by']+' </td>'+
						'<td><strong>Name</strong><br> '+encoder_name['encoder_name']+' </td>'+
						'<td><strong>Created date</strong><br> '+encoder_name['encode_date']+' </td>'+
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
    		url: "../ajax/controller/employee_request/transferred_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_id = $.parseJSON(msg);
    		var employee_name = $.parseJSON(msg);
    		var employee_pname = $.parseJSON(msg);
    		var employee_position = $.parseJSON(msg);
    		var employee_nationality = $.parseJSON(msg);
    		var employee_request_notes = $.parseJSON(msg);
    		var request_file_path = $.parseJSON(msg);
    		var request_file_filename = $.parseJSON(msg);
    		
    		var employee_transfer_date = $.parseJSON(msg);
    		
    		$('#transferred_employee_details_'+$query+' > thead').empty();
    		$('#transferred_employee_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="3">Employee details</th>'+
					'</tr>'
    		);
    		
    		$('#transferred_employee_details_'+$query+' > tbody').empty();
    		$('#transferred_employee_details_'+$query+' > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+employee_id['employee_id']+' </td>'+
						'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
						'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
						'<td><strong>Nationality</strong><br> '+employee_nationality['employee_nationality']+' </td>'+
						'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_filename['request_file_filename']+' </a></td>'+
					'</tr>'+															
					'<tr>'+
						'<td><strong>Expected transfer date</strong><br> '+employee_transfer_date['employee_transfer_date']+' </td>'+
						'<td colspan="2"><strong>Notes</strong><br> '+employee_request_notes['employee_request_notes']+' </td>'+
					'</tr>'
    		);
    		
    	}); //  end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr details
	function transferred_hr_first($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transferred_request_details.php",
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
    		
    		$('#transferred_task_hrfirst > thead').empty();
    		$('#transferred_task_hrfirst > thead').append(
    				'<tr>'+
						'<th colspan="3">HR</th>'+
					'</tr>'
    		);
    		
    		$('#transferred_task_hrfirst > tbody').empty();
    		$('#transferred_task_hrfirst > tbody').append(
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
    		
    	}); //  end done
		
	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/

	//transferred start
	$('#transferredHrTable').removeClass('hideContentAi');
	
	$('#listOfTransferredRequestHr tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#transferredHrAttachment').val('');
		$('#transferredHrNotes').data("wysihtml5").editor.setValue();
		$('#transferredHrNotes').val('');
		
		var table = $('#listOfTransferredRequestHr').DataTable();
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
		
		// This is for the Generate PDF HR First
		var transferred_hrFirst_GeneratePdfUrl = "../../tcpdf/hris/pdf_reporting_date_request_transferred.php?tcode=" + tcodeid;
		$("#transferred_hrfirst_GeneratePDF").attr("href", transferred_hrFirst_GeneratePdfUrl);    		
		// This is for the Generate PDF HR First
		
		$('#transferredHrTable').addClass('hideContentAi');
    	$("#transferredHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferredHrTable, a[href="#transferredHr"]').click(function() {
    	$('#transferredHrDetails').addClass('hideContentAi');
    	$("#transferredHrTable").removeClass('hideContentAi');
    });	
    
    showTransferredTables('#listOfTransferredRequestHr', 'transferred_hr_first') // This will display the HR First table lists
	
	$('#transferredHrNotes').wysihtml5();
    
    // This will update the HR First
    $('#Update_Transferred_HR_First').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_transferred_tcode_hr_first').val();
    	
    	var transferred_attach_file = $('#transferredHrAttachment').val();
    	
    	var transferred_attach_fileLength = transferred_attach_file.length;
    	
    	if(transferred_attach_fileLength > 0){
    		
    		var transferred_attach_file = document.getElementById('transferredHrAttachment');
    		
    		if(transferred_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', transferred_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_transferred_request_attach_file.php?tcode='+tcode+'&path=transferred_hr_first');
	        request.send(data);
	        
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_transferred_tcode_hr_first').val(),
			'hr_first_notes':$('#transferredHrNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/transferred_request_update_hr_first.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToTransferredHrTable").attr("disabled", true);
    			$("#Update_Transferred_HR_First").attr("disabled", true);
    		},
    		complete: function(){
    			showTransferredTables('#listOfTransferredRequestClosed', 'transferred_closed') // This will display the Closed table lists
    			$("#goBackToTransferredHrTable").attr("disabled", false);
    			$("#Update_Transferred_HR_First").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		showTransferredTables('#listOfTransferredRequestHr', 'transferred_hr_first') // This will display the HR First table lists
    		showTransferTables('#listOfTransferRequestApproval', 'transfer_approval') // This will display the Approval table lists
    		
    		$('#transferredHrDetails').addClass('hideContentAi');
    		$("#transferredHrTable").removeClass('hideContentAi');
    		
    		counterTransferredRequest(); // This will display the number of pending rquest on the TABS
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
    	
    	//console.log('Update hr first');
    });
    
	//transerred end

    /*--------------------------------------------------------------------------------------------------------------*/
	
	// Closed start
	$('#transferredClosedTable').removeClass('hideContentAi');
	
	$('#listOfTransferredRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfTransferredRequestClosed').DataTable();
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
		transferred_hr_first(tcodeid,'closed'); // Display the HR details
		
		$('#transferredClosedTable').addClass('hideContentAi');
    	$("#transferredClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferredClosedTable, a[href="#transferredClosed"]').click(function() {
    	$('#transferredClosedDetails').addClass('hideContentAi');
    	$("#transferredClosedTable").removeClass('hideContentAi');
    });	
	
    showTransferredTables('#listOfTransferredRequestClosed', 'transferred_closed') // This will display the Closed table lists
    
	// Closed end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#transferredHrTableH').addClass('hideContentAi');
		$('#transferred_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#Update_Transferred_HR_First').addClass('hideContentAi');
			
	}
	//disable button and update end    

} );
