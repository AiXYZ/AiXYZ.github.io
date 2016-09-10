$(document).ready(function() {

	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showFVTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/family_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This is the counter for the fimily request
	counterFVRequest(); // This will display the number of pending rquest on the TABS
	
	function counterFVRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/family_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR
			var fv_Hr_total = $.parseJSON(msg);
			$("#fv_Hr_total").text(fv_Hr_total['fv_Hr_total']);
		
			// closed
			var fv_Closed_total = $.parseJSON(msg);
			$("#fv_Closed_total").text(fv_Closed_total['fv_Closed_total']);

			// Declined
			var fv_Declined_total = $.parseJSON(msg);
			$("#fv_Declined_total").text(fv_Declined_total['fv_Declined_total']);		
			
			// All
			var fv_Hr_total_All = $.parseJSON(msg);
			$("#fv_Hr_total_All").text(fv_Hr_total_All['fv_Hr_total_All']);			
			
		});// end done
		
	}// end function
	// This is the counter for the family request
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the Encoder Details
	function fv_encoder_details($fv_tcode,$fv_query){

		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/family_request_details.php",
    		data: { fv_tcode_id: $fv_tcode, fv_query: $fv_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($fv_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var fv_encode_by = $.parseJSON(msg);
    		var fv_encoder_name = $.parseJSON(msg);
    		var fv_encode_date = $.parseJSON(msg);
    		var fv_elapsed_days = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#fv_encoder_details_'+$fv_query+'> thead').empty();
    		$('#fv_encoder_details_'+$fv_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="4">Encoder details <span class="muted">- '+$fv_tcode+'</span></th>'+
    				'<input type="hidden" id="hidden_fv_tcode_'+$fv_query+'" value="'+$fv_tcode+'" />'+
    			'</tr>'				
    		);
    		
    		$('#fv_encoder_details_'+$fv_query+'> tbody').empty();
    		$('#fv_encoder_details_'+$fv_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+fv_encode_by['fv_encode_by']+'</td>'+
    				'<td><strong>Name</strong><br>'+fv_encoder_name['fv_encoder_name']+'</td>'+
    				'<td><strong>Created date</strong><br>'+fv_encode_date['fv_encode_date']+'</td>'+
    				'<td><strong>Elapsed day(s)</strong><br>'+fv_elapsed_days['fv_elapsed_days']+'</td>'+
    			'</tr>'			
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
				
	}// end function
	// This will display the Encoder Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	// This will display the emmployee Details
	function fv_employee_details($fv_tcode,$fv_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/family_request_details.php",
    		data: { fv_tcode_id: $fv_tcode, fv_query: $fv_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($fv_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var fv_employee_id = $.parseJSON(msg);
    		var fv_employee_name = $.parseJSON(msg);
    		var fv_employee_pname = $.parseJSON(msg);
    		var fv_employee_position = $.parseJSON(msg);
    		var fv_employee_nationality = $.parseJSON(msg);
    		var fv_file_path = $.parseJSON(msg);
    		var fv_file_name = $.parseJSON(msg);
    		var fv_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#fv_employee_details_'+$fv_query+'> thead').empty();
    		$('#fv_employee_details_'+$fv_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">Employee details</th>'+
    			'</tr>'				
    		);
    		
    		$('#fv_employee_details_'+$fv_query+'> tbody').empty();
    		$('#fv_employee_details_'+$fv_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+fv_employee_id['fv_employee_id']+'</td>'+
    				'<td><strong>Name</strong><br>'+fv_employee_name['fv_employee_name']+'</td>'+
    				'<td><strong>Project name</strong><br>'+fv_employee_pname['fv_employee_pname']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Job title</strong><br>'+fv_employee_position['fv_employee_position']+'</td>'+
    				'<td><strong>Nationality</strong><br>'+fv_employee_nationality['fv_employee_nationality']+'</td>'+
    				'<td><strong>Attachment</strong><br><a href="'+fv_file_path['fv_file_path']+'" target="_blank">'+fv_file_name['fv_file_name']+'</a></td>'+
    			'</tr>'+															
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+fv_notes['fv_notes']+'</td>'+
    			'</tr>'		
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the emmployee Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	// This will display the hr closed Details
	function fv_closed_details($fv_tcode,$fv_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/family_request_details.php",
    		data: { fv_tcode_id: $fv_tcode, fv_query: $fv_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($fv_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var fv_hrclosed_update_by = $.parseJSON(msg);
    		var fv_hrclosed_encoder_name = $.parseJSON(msg);
    		var fv_hrclosed_update_created = $.parseJSON(msg);
    		var fv_hrclosed_update_days = $.parseJSON(msg);
    		var fv_hrclosed_file_path = $.parseJSON(msg);
    		var fv_hrclosed_file_name = $.parseJSON(msg);
    		var fv_hrclosed_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#fv_closed_details_'+$fv_query+'> thead').empty();
    		$('#fv_closed_details_'+$fv_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">HR</th>'+
    			'</tr>'			
    		);
    		
    		$('#fv_closed_details_'+$fv_query+'> tbody').empty();
    		$('#fv_closed_details_'+$fv_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br> '+fv_hrclosed_update_by['fv_hrclosed_update_by']+', '+fv_hrclosed_encoder_name['fv_hrclosed_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+fv_hrclosed_update_created['fv_hrclosed_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+fv_hrclosed_update_days['fv_hrclosed_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+fv_hrclosed_file_path['fv_hrclosed_file_path']+'" target="_blank">'+fv_hrclosed_file_name['fv_hrclosed_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+fv_hrclosed_notes['fv_hrclosed_notes']+'</td>'+
    			'</tr>'	
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the hr closed Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the hr closed Details
	function fv_declined_details($fv_tcode,$fv_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/family_request_details.php",
    		data: { fv_tcode_id: $fv_tcode, fv_query: $fv_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($fv_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var fv_hrdeclined_update_by = $.parseJSON(msg);
    		var fv_hrdeclined_encoder_name = $.parseJSON(msg);
    		var fv_hrdeclined_update_created = $.parseJSON(msg);
    		var fv_hrdeclined_update_days = $.parseJSON(msg);
    		var fv_hrdeclined_file_path = $.parseJSON(msg);
    		var fv_hrdeclined_file_name = $.parseJSON(msg);
    		var fv_hrdeclined_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#fv_declined_details_'+$fv_query+'> thead').empty();
    		$('#fv_declined_details_'+$fv_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">HR</th>'+
    			'</tr>'			
    		);
    		
    		$('#fv_declined_details_'+$fv_query+'> tbody').empty();
    		$('#fv_declined_details_'+$fv_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br>'+fv_hrdeclined_update_by['fv_hrdeclined_update_by']+', '+fv_hrdeclined_encoder_name['fv_hrdeclined_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+fv_hrdeclined_update_created['fv_hrdeclined_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+fv_hrdeclined_update_days['fv_hrdeclined_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+fv_hrdeclined_file_path['fv_hrdeclined_file_path']+'" target="_blank">'+fv_hrdeclined_file_name['fv_hrdeclined_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+fv_hrdeclined_notes['fv_hrdeclined_notes']+'</td>'+
    			'</tr>'	
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		

		
	}// end function
	// This will display the hr closed Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	//familyVisitHr start
	$('#familyVisitHrTable').removeClass('hideContentAi');
	
	$('#listOfFamilyVisitRequestHr tbody').on( 'click', 'tr', function () {
		
		//clear field
    	$('#familyVisitHrAttachment').val('');
		$('#familyVisitHrNotes').data("wysihtml5").editor.setValue();
		$('#familyVisitHrNotes').val('');		

		var fv_hr_table = $('#listOfFamilyVisitRequestHr').DataTable();
		var fv_hr_rowData = fv_hr_table.row( this ).data();
		var fv_hr_tcodeid = fv_hr_rowData[7];		
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(fv_hr_rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		fv_encoder_details(fv_hr_tcodeid,'fv_hr'); // Display the Encoder details
		fv_employee_details(fv_hr_tcodeid,'fv_hr'); // Display the employee details
		
		// This is for the Generate PDF HR First
		var family_visit_hrfirst_GeneratePDF = "../../tcpdf/hris/pdf_family_request.php?tcode=" + fv_hr_tcodeid;
		$("#family_visit_hrfirst_GeneratePDF").attr("href", family_visit_hrfirst_GeneratePDF);    		
		// This is for the Generate PDF HR First

		
		$('#familyVisitHrTable').addClass('hideContentAi');
    	$("#familyVisitHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFamilyVisitHrTable, a[href="#familyVisitHr"]').click(function() {
    	$('#familyVisitHrDetails').addClass('hideContentAi');
    	$("#familyVisitHrTable").removeClass('hideContentAi');
    });	
	
    showFVTables('#listOfFamilyVisitRequestHr', 'fv_hr'); // Display the list of HR Tables    
    
	$('#familyVisitHrNotes').wysihtml5();
	
	// This will update the HR for closed
	$('#updateFvHr').on('click',function(){
		
		// This is for the Attach Files
		
		var tcode_fv_attach = $('#hidden_fv_tcode_fv_hr').val();
		
		var fv_attach_file = $('#familyVisitHrAttachment').val();
		
		var fv_attach_fileLength = fv_attach_file.length;
		
		if(fv_attach_fileLength > 0){
			
			var fv_attach_File = document.getElementById('familyVisitHrAttachment');
			
			if(fv_attach_File.length === 0){
				 return;
			}// end if
			
			var data_fv = new FormData();
			
			data_fv.append('SelectedFile', fv_attach_File.files[0]);
			
			var request_fv = new XMLHttpRequest();
			request_fv.onreadystatechange = function(){
				if(request_fv.readyState == 4){
					try {
						var resp = JSON.parse(request_fv.response);
					}catch(e){
						var resp = {
							status_fv: 'error',
							data_fv: 'Unknown error occurred: [' + request_fv.responseText + ']'
						};// end
					}// end
					console.log(resp.status_fv + ': ' + resp.data_fv);
				}// end if
			}; // end
			request_fv.open('POST', '../ajax/controller/employee_request/upload_family_request_attach_file.php?tcode='+tcode_fv_attach+'&path=fv_hr');
			request_fv.send(data_fv);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		
		var fv_formData = {
				'fv_code':$('#hidden_fv_tcode_fv_hr').val(),	
				'fv_hr_notes':$('#familyVisitHrNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/family_request_update_hr.php',
			data: fv_formData,
			beforeSend: function(){
				$("#goBackToFamilyVisitHrTable").attr("disabled", true);
				$("#declineFvHr").attr("disabled", true);
				$("#updateFvHr").attr("disabled", true);
			},
			complete: function(){
				showFVTables('#listOfFamilyVisitRequestClosed', 'fv_closed'); // Display the list of closed Tables
				$("#goBackToFamilyVisitHrTable").attr("disabled", false);
				$("#declineFvHr").attr("disabled", false);
				$("#updateFvHr").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showFVTables('#listOfFamilyVisitRequestHr', 'fv_hr'); // Display the list of HR Tables
			
			// Return to previous page
	    	$('#familyVisitHrDetails').addClass('hideContentAi');
	    	$("#familyVisitHrTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterFVRequest(); // This will display the number of pending rquest on the TABS
	    	
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
	$('#declineFvHr').on('click',function(){
		
		// This is for the Attach Files
		
		var tcode_fv_attach = $('#hidden_fv_tcode_fv_hr').val();
		
		var fv_attach_file = $('#familyVisitHrAttachment').val();
		
		var fv_attach_fileLength = fv_attach_file.length;
		
		if(fv_attach_fileLength > 0){
			
			var fv_attach_File = document.getElementById('familyVisitHrAttachment');
			
			if(fv_attach_File.length === 0){
				 return;
			}// end if
			
			var data_fv = new FormData();
			
			data_fv.append('SelectedFile', fv_attach_File.files[0]);
			
			var request_fv = new XMLHttpRequest();
			request_fv.onreadystatechange = function(){
				if(request_fv.readyState == 4){
					try {
						var resp = JSON.parse(request_fv.response);
					}catch(e){
						var resp = {
							status_fv: 'error',
							data_fv: 'Unknown error occurred: [' + request_fv.responseText + ']'
						};// end
					}// end
					console.log(resp.status_fv + ': ' + resp.data_fv);
				}// end if
			}; // end
			request_fv.open('POST', '../ajax/controller/employee_request/upload_family_request_attach_file.php?tcode='+tcode_fv_attach+'&path=fv_declined');
			request_fv.send(data_fv);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		
		var fv_formData = {
				'fv_code':$('#hidden_fv_tcode_fv_hr').val(),	
				'fv_hr_notes':$('#familyVisitHrNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/family_request_update_hr_for_declined.php',
			data: fv_formData,
			beforeSend: function(){
				$("#goBackToFamilyVisitHrTable").attr("disabled", true);
				$("#declineFvHr").attr("disabled", true);
				$("#updateFvHr").attr("disabled", true);
			},
			complete: function(){
				showFVTables('#listOfFamilyVisitRequestDeclined', 'fv_declined'); // Display the list of declined Tables
				$("#goBackToFamilyVisitHrTable").attr("disabled", false);
				$("#declineFvHr").attr("disabled", false);
				$("#updateFvHr").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showFVTables('#listOfFamilyVisitRequestHr', 'fv_hr'); // Display the list of HR Tables
			
			// Return to previous page
	    	$('#familyVisitHrDetails').addClass('hideContentAi');
	    	$("#familyVisitHrTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterFVRequest(); // This will display the number of pending rquest on the TABS
	    	
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
	//familyVisitHr end


	// Closed start
	$('#familyVisitClosedTable').removeClass('hideContentAi');
	
	$('#listOfFamilyVisitRequestClosed tbody').on( 'click', 'tr', function () {

		var fv_closed_table = $('#listOfFamilyVisitRequestClosed').DataTable();
		var fv_closed_rowData = fv_closed_table.row( this ).data();
		var fv_closed_tcodeid = fv_closed_rowData[7];	
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(fv_closed_rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		fv_encoder_details(fv_closed_tcodeid,'fv_closed'); // Display the Encoder details
		fv_employee_details(fv_closed_tcodeid,'fv_closed'); // Display the employee details
		fv_closed_details(fv_closed_tcodeid,'fv_closed'); // Display the hr closed details
		
		$('#familyVisitClosedTable').addClass('hideContentAi');
    	$("#familyVisitClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFamilyVisitClosedTable, a[href="#familyVisitClosed"]').click(function() {
    	$('#familyVisitClosedDetails').addClass('hideContentAi');
    	$("#familyVisitClosedTable").removeClass('hideContentAi');
    });	
	
    showFVTables('#listOfFamilyVisitRequestClosed', 'fv_closed'); // Display the list of closed Tables
    
	// Closed end       

   
	// Declined start
	$('#familyVisitDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfFamilyVisitRequestDeclined tbody').on( 'click', 'tr', function () {

		var fv_declined_table = $('#listOfFamilyVisitRequestDeclined').DataTable();
		var fv_declined_rowData = fv_declined_table.row( this ).data();
		var fv_declined_tcodeid = fv_declined_rowData[7];		
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(fv_declined_rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		fv_encoder_details(fv_declined_tcodeid,'fv_declined'); // Display the Encoder details
		fv_employee_details(fv_declined_tcodeid,'fv_declined'); // Display the employee details
		fv_declined_details(fv_declined_tcodeid,'fv_declined'); // Display the hr closed details		
		
		$('#familyVisitDeclinedTable').addClass('hideContentAi');
    	$("#familyVisitDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFamilyVisitDeclinedTable, a[href="#familyVisitDeclined"]').click(function() {
    	$('#familyVisitDeclinedDetails').addClass('hideContentAi');
    	$("#familyVisitDeclinedTable").removeClass('hideContentAi');
    });	
	
    showFVTables('#listOfFamilyVisitRequestDeclined', 'fv_declined'); // Display the list of declined Tables
    
	// Declined end	
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#familyVisitHrTableH').addClass('hideContentAi');
		$('#family_visit_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#updateFvHr').addClass('hideContentAi');
			
	}
	//disable button and update end    

} );
