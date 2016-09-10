$(document).ready(function() {
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is the counter for the renew iqama request
	counterRenewIqamaRequest(); // This will display the number of pending rquest on the TABS
	
	function counterRenewIqamaRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/renew_iqama_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var renew_iqama_hr_first_total = $.parseJSON(msg);
			$("#renew_iqama_hr_first_total").text(renew_iqama_hr_first_total['renew_iqama_hr_first_total']);
			
			// Closed
			var renew_iqama_closed_total = $.parseJSON(msg);
			$("#renew_iqama_closed_total").text(renew_iqama_closed_total['renew_iqama_closed_total']);
			
			// Grand Total
			var renew_iqama_grand_total = $.parseJSON(msg);
			$("#ri_grand_total").text(renew_iqama_grand_total['renew_iqama_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the cash advance request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the encoder details
	function encoder_details($tcode,$query){
		
		console.log($query); // Display the current query
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/renew_iqama_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		$('#renew_iqama_encoder_details_'+$query+' > thead').empty();
    		$('#renew_iqama_encoder_details_'+$query+' > thead').append(
    				'<tr>'+
	    				'<th colspan="4">Encoder details <span class="muted">- '+$tcode+' </span></th>'+
						'<input type="hidden" id="hidden_renew_iqama_tcode_'+$query+'" value="'+$tcode+'" />'+
					'</tr>'
    		);
    		
    		$('#renew_iqama_encoder_details_'+$query+' > tbody').empty();
    		$('#renew_iqama_encoder_details_'+$query+' > tbody').append(
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
	
	// This will display the encoder details
	function employee_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/renew_iqama_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_id = $.parseJSON(msg);
    		var employee_name = $.parseJSON(msg);
    		var employee_pname = $.parseJSON(msg);
    		var employee_position = $.parseJSON(msg);
    		var employee_nationality = $.parseJSON(msg);
    		
    		var request_file_path = $.parseJSON(msg);
    		var request_file_filename = $.parseJSON(msg);
    		
    		$('#renew_iqama_employee_details_'+$query+' > thead').empty();
    		$('#renew_iqama_employee_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="3">Employee details</th>'+
					'</tr>'
    		);
    		
    		$('#renew_iqama_employee_details_'+$query+' > tbody').empty();
    		$('#renew_iqama_employee_details_'+$query+' > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+employee_id['employee_id']+' </td>'+
						'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
						'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
						'<td><strong>Nationality</strong><br> '+employee_nationality['employee_nationality']+' </td>'+
						'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_filename['request_file_filename']+' </a></td>'+
					'</tr>'
    		);
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the encoder details
	function renew_iqama_hr_first($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/renew_iqama_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var request_hr_update_by = $.parseJSON(msg);
    		var hr_first_encoder_name = $.parseJSON(msg);
    		var request_hr_update_created = $.parseJSON(msg);
    		var request_hr_update_days = $.parseJSON(msg);
    		
    		$('#renew_iqama_task_hrfirst > thead').empty();
    		$('#renew_iqama_task_hrfirst > thead').append(
    				'<tr>'+
						'<th colspan="4">HR</th>'+
					'</tr>'
    		);
    		
    		$('#renew_iqama_task_hrfirst > tbody').empty();
    		$('#renew_iqama_task_hrfirst > tbody').append(
    				'<tr>'+
	    				'<td><strong>Employee ID</strong><br> '+request_hr_update_by['request_hr_update_by']+' </td>'+
						'<td><strong>Name</strong><br> '+hr_first_encoder_name['hr_first_encoder_name']+' </td>'+
						'<td><strong>Created date</strong><br> '+request_hr_update_created['request_hr_update_created']+' </td>'+
						'<td><strong>Elapsed day(s)</strong><br> '+request_hr_update_days['request_hr_update_days']+' </td>'+
					'</tr>'
    		);
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showRenewIqamaTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/renew_iqama_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/

	//renew iqama start
	$('#reNewIqamaHrTable').removeClass('hideContentAi');
	
	$('#listOfReNewIqamaRequestHr tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#reNewIqamaHrIqama').val('');
    	$('#reNewIqamaHrExpiryDateG').val('');
    	$('#reNewIqamaHrExpiryDateH').val('');
    	$('#reNewIqamaHrPlaceOfIssue').val('');
    	$('#reNewIqamaHrCopyIssue').val('');
    	$('#reNewIqamaHrAttachment').val('');
		
		var table = $('#listOfReNewIqamaRequestHr').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		var eid = rowData[0];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'hr_first'); // Display the Encoder details
		employee_details(tcodeid,'hr_first'); // Display the Employee details
		
		// This is for the Visa
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var employee_type_of_visa = $.parseJSON(msg);
			
			$('#reNewIqamaHrVisa').val(employee_type_of_visa['employee_type_of_visa']);
			
		}); // end done
		
		$('#reNewIqamaHrTable').addClass('hideContentAi');
    	$("#reNewIqamaHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToReNewIqamaHrTable, a[href="#reNewIqamaHr"]').click(function() {
    	$('#reNewIqamaHrDetails').addClass('hideContentAi');
    	$("#reNewIqamaHrTable").removeClass('hideContentAi');
    });	
	
    showRenewIqamaTables('#listOfReNewIqamaRequestHr', 'renew_iqama_hr_first') // This will display the HR First table lists
    
    // This will update the hr first
    $('#Update_Renew_Iqama_HR_First').on('click', function(){
    	
    	var formData = {
			'tcode':$('#hidden_renew_iqama_tcode_hr_first').val(),
			'new_iqama_number':$('#reNewIqamaHrIqama').val(),
			'new_expiry_date_g':$('#reNewIqamaHrExpiryDateG').val(),
			'new_expiry_date_h':$('#reNewIqamaHrExpiryDateH').val(),
			'new_place_of_issue':$('#reNewIqamaHrPlaceOfIssue').val(),
			'new_number_of_copies':$('#reNewIqamaHrCopyIssue').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/renew_iqama_request_update_hr_first.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToReNewIqamaHrTable").attr("disabled", true);
    			$("#Update_Renew_Iqama_HR_First").attr("disabled", true);
    		},
    		complete: function(){
    			showRenewIqamaTables('#listOfReNewIqamaRequestClosed', 'renew_iqama_closed') // This will display the Closed table lists
    			$("#goBackToReNewIqamaHrTable").attr("disabled", false);
    			$("#Update_Renew_Iqama_HR_First").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		showRenewIqamaTables('#listOfReNewIqamaRequestHr', 'renew_iqama_hr_first') // This will display the HR First table lists
    		
    		$('#reNewIqamaHrDetails').addClass('hideContentAi');
        	$("#reNewIqamaHrTable").removeClass('hideContentAi');
    		
    		counterRenewIqamaRequest(); // This will display the number of pending rquest on the TABS
    		
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
    	
    	// Delay the posting
    	setTimeout(function(){

    		// This is for the attach file
	    	var tcode = $('#hidden_renew_iqama_tcode_hr_first').val();
	    	
	    	var renew_iqama_attach_file = $('#reNewIqamaHrAttachment').val();
	    	
	    	var renew_iqama_attach_fileLength = renew_iqama_attach_file.length;
	    	
	    	if(renew_iqama_attach_fileLength > 0){
	    		
	    		var renew_iqama_attach_file = document.getElementById('reNewIqamaHrAttachment');
	    		
	    		if(renew_iqama_attach_file.length === 0){
					 return;
				}// end if
	    		
	    		var data = new FormData();
	    		
	    		data.append('SelectedFile', renew_iqama_attach_file.files[0]);
	    		
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
				
				request.open('POST', '../ajax/controller/employee_request/upload_renew_iqama_request_attach_file.php?tcode='+tcode+'&path=renew_iqama_hr_first');
		        request.send(data);
	    		
	    	}// end if

    	}, 5000);
    	// Delay the posting
    	
    	//console.log('Update renew iqama');
    });
    
	//renew iqama end

    /* ------------------------------------------------------------------------------------------------ */

	// Closed start
	$('#reNewIqamaClosedTable').removeClass('hideContentAi');
	
	$('#listOfReNewIqamaRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfReNewIqamaRequestClosed').DataTable();
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
		renew_iqama_hr_first(tcodeid,'closed'); // Display the HR First details
		
		$('#reNewIqamaClosedTable').addClass('hideContentAi');
    	$("#reNewIqamaClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToReNewIqamaClosedTable, a[href="#reNewIqamaClosed"]').click(function() {
    	$('#reNewIqamaClosedDetails').addClass('hideContentAi');
    	$("#reNewIqamaClosedTable").removeClass('hideContentAi');
    });	
    
    showRenewIqamaTables('#listOfReNewIqamaRequestClosed', 'renew_iqama_closed') // This will display the Closed table lists
	
	// Closed end       
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#reNewIqamaHrTableH').addClass('hideContentAi');
		$('#Update_Renew_Iqama_HR_First').addClass('hideContentAi');
			
	}
	//disable button and update end     

} );
