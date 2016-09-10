$(document).ready(function() {
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is the counter for the new employee request
	counterNewEmployeeRequest(); // This will display the number of pending rquest on the TABS
	
	function counterNewEmployeeRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/new_employee_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var new_employee_hr_first_total = $.parseJSON(msg);
			$("#new_employee_hr_first_total").text(new_employee_hr_first_total['new_employee_hr_first_total']);
			
			// Closed
			var new_employee_closed_total = $.parseJSON(msg);
			$("#new_employee_closed_total").text(new_employee_closed_total['new_employee_closed_total']);
			
			// Grand Total
			var new_employee_grand_total = $.parseJSON(msg);
			$("#ne_grand_total").text(new_employee_grand_total['new_employee_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the cash advance request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showNewEmployeeTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/new_employee_request_list.php?request_type="+task,
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
    		url: "../ajax/controller/employee_request/new_employee_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		$('#new_employee_encoder_details_'+$query+' > thead').empty();
    		$('#new_employee_encoder_details_'+$query+' > thead').append(
    				'<tr>'+
	    				'<th colspan="4">Encoder details <span class="muted">- '+$tcode+' </span></th>'+
						'<input type="hidden" id="hidden_new_employee_tcode_'+$query+'" value="'+$tcode+'" />'+
				'</tr>'
    		);
    		
    		$('#new_employee_encoder_details_'+$query+' > tbody').empty();
    		$('#new_employee_encoder_details_'+$query+' > tbody').append(
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
    		url: "../ajax/controller/employee_request/new_employee_request_details.php",
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
    		
    		$('#new_employee_employee_details_'+$query+' > thead').empty();
    		$('#new_employee_employee_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="3">Employee details</th>'+
					'</tr>'
    		);
    		
    		$('#new_employee_employee_details_'+$query+' > tbody').empty();
    		$('#new_employee_employee_details_'+$query+' > tbody').append(
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
					'<td colspan="3"><strong>Notes</strong><br> '+employee_request_notes['employee_request_notes']+' </td>'+
				'</tr>'
    		);
    		
    	}); //  end done

	} // end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr first details
	function new_employee_hr_first($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/new_employee_request_details.php",
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
    		
    		$('#new_employee_task_hrfirst > thead').empty();
    		$('#new_employee_task_hrfirst > thead').append(
    				'<tr>'+
						'<th colspan="3">HR</th>'+
					'</tr>'
    		);
    		
    		$('#new_employee_task_hrfirst > tbody').empty();
    		$('#new_employee_task_hrfirst > tbody').append(
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

	//newEmpHr start
	$('#newEmpHrTable').removeClass('hideContentAi');
	
	$('#listOfNewEmpRequestHr tbody').on( 'click', 'tr', function () {
		
		// Clear fields
		$('#newEmpHrNotes').data("wysihtml5").editor.setValue();
		$('#newEmpHrNotes').val('');
		$('#newEmpHrAttachment').val();
		
		var table = $('#listOfNewEmpRequestHr').DataTable();
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
		
		// This is for the Generate PDF HR Final 
		var new_employee_hrFirst_GeneratePdfUrl = "../../tcpdf/hris/pdf_reporting_date_request_new.php?tcode=" + tcodeid;
		$("#new_employee_hrfirst_GeneratePDF").attr("href", new_employee_hrFirst_GeneratePdfUrl);    		
		// This is for the Generate PDF HR Final
		
		$('#newEmpHrTable').addClass('hideContentAi');
    	$("#newEmpHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToNewEmpHrTable, a[href="#newEmpHr"]').click(function() {
    	$('#newEmpHrDetails').addClass('hideContentAi');
    	$("#newEmpHrTable").removeClass('hideContentAi');
    });	
    
    showNewEmployeeTables('#listOfNewEmpRequestHr', 'new_employee_hr_first') // This will display the HR First table lists
	
	$('#newEmpHrNotes').wysihtml5();
    
    // This will update the hr first
    $('#Update_New_Employee_HR_First').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_new_employee_tcode_hr_first').val();
    	
    	var new_employee_attach_file = $('#newEmpHrAttachment').val();
    	
    	var new_employee_attach_fileLength = new_employee_attach_file.length;
    	
    	if(new_employee_attach_fileLength > 0){
    		
    		var new_employee_attach_file = document.getElementById('newEmpHrAttachment');
    		
    		if(new_employee_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', new_employee_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_new_employee_request_attach_file.php?tcode='+tcode+'&path=new_employee_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_new_employee_tcode_hr_first').val(),
			'hr_first_notes':$('#newEmpHrNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/new_employee_request_update_hr_first.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToNewEmpHrTable").attr("disabled", true);
    			$("#Update_New_Employee_HR_First").attr("disabled", true);
    		},
    		complete: function(){
    			showNewEmployeeTables('#listOfNewEmpRequestClosed', 'new_employee_closed') // This will display the HR First table lists
    			$("#goBackToNewEmpHrTable").attr("disabled", false);
    			$("#Update_New_Employee_HR_First").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		showNewEmployeeTables('#listOfNewEmpRequestHr', 'new_employee_hr_first') // This will display the HR First table lists
    		
    		$('#newEmpHrDetails').addClass('hideContentAi');
        	$("#newEmpHrTable").removeClass('hideContentAi');
    		
    		counterNewEmployeeRequest(); // This will display the number of pending rquest on the TABS
    		
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
    
	//newEmpHr end

    /*--------------------------------------------------------------------------------------------------------------*/
	
	// Closed start
	$('#newEmpClosedTable').removeClass('hideContentAi');
	
	$('#listOfNewEmpRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfNewEmpRequestClosed').DataTable();
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
		new_employee_hr_first(tcodeid,'closed'); // Display the HR details
		
		$('#newEmpClosedTable').addClass('hideContentAi');
    	$("#newEmpClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToNewEmpClosedTable, a[href="#newEmpClosed"]').click(function() {
    	$('#newEmpClosedDetails').addClass('hideContentAi');
    	$("#newEmpClosedTable").removeClass('hideContentAi');
    });	
    
    showNewEmployeeTables('#listOfNewEmpRequestClosed', 'new_employee_closed') // This will display the HR First table lists
	
	// Closed end     
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#newEmpHrTableH').addClass('hideContentAi');
		$('#new_employee_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#Update_New_Employee_HR_First').addClass('hideContentAi');
			
	}
	//disable button and update end     

} );
