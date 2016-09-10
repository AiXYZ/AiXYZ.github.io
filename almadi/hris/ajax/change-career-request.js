$(document).ready(function() {

	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showCRTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/career_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This is the counter for the floating request
	counterCCRequest(); // This will display the number of pending rquest on the TABS
	
	function counterCCRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/career_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR
			var cr_Hr_total = $.parseJSON(msg);
			$("#cr_Hr_total").text(cr_Hr_total['cr_Hr_total']);
		
			// closed
			var cr_Closed_total = $.parseJSON(msg);
			$("#cr_Closed_total").text(cr_Closed_total['cr_Closed_total']);

			// Declined
			var cr_Declined_total = $.parseJSON(msg);
			$("#cr_Declined_total").text(cr_Declined_total['cr_Declined_total']);		
			
			// All
			var cr_Hr_total_All = $.parseJSON(msg);
			$("#cr_Hr_total_All").text(cr_Hr_total_All['cr_Hr_total_All']);			
			
		});// end done
		
	}// end function
	// This is the counter for the floating request
	
	/*--------------------------------------------------------------------------------------------------------------*/		

	// This will display the Encoder Details
	function cc_encoder_details($cc_tcode,$cc_query){

		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/career_request_details.php",
    		data: { cr_tcode_id: $cc_tcode, cr_query: $cc_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($cc_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var cr_encode_by = $.parseJSON(msg);
    		var cr_encoder_name = $.parseJSON(msg);
    		var cr_encode_date = $.parseJSON(msg);
    		var cr_elapsed_days = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#cc_encoder_details_'+$cc_query+'> thead').empty();
    		$('#cc_encoder_details_'+$cc_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="4">Encoder details <span class="muted">- '+$cc_tcode+'</span></th>'+
    				'<input type="hidden" id="hidden_cc_tcode_'+$cc_query+'" value="'+$cc_tcode+'" />'+
    			'</tr>'				
    		);
    		
    		$('#cc_encoder_details_'+$cc_query+'> tbody').empty();
    		$('#cc_encoder_details_'+$cc_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+cr_encode_by['cr_encode_by']+'</td>'+
    				'<td><strong>Name</strong><br>'+cr_encoder_name['cr_encoder_name']+'</td>'+
    				'<td><strong>Created date</strong><br>'+cr_encode_date['cr_encode_date']+'</td>'+
    				'<td><strong>Elapsed day(s)</strong><br>'+cr_elapsed_days['cr_elapsed_days']+'</td>'+
    			'</tr>'				
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the Encoder Details
	
	/*--------------------------------------------------------------------------------------------------------------*/		
	
	// This will display the emmployee Details
	function cc_employee_details($cc_tcode,$cc_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/career_request_details.php",
    		data: { cr_tcode_id: $cc_tcode, cr_query: $cc_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($cc_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var cr_employee_id = $.parseJSON(msg);
    		var cr_employee_name = $.parseJSON(msg);
    		var cr_employee_pname = $.parseJSON(msg);
    		var cr_employee_position = $.parseJSON(msg);
    		var cr_employee_nationality = $.parseJSON(msg);
    		var cr_file_path = $.parseJSON(msg);
    		var cr_file_name = $.parseJSON(msg);
    		var cr_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#cc_employee_details_'+$cc_query+'> thead').empty();
    		$('#cc_employee_details_'+$cc_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">Employee details</th>'+
    			'</tr>'			
    		);
    		
    		$('#cc_employee_details_'+$cc_query+'> tbody').empty();
    		$('#cc_employee_details_'+$cc_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+cr_employee_id['cr_employee_id']+'</td>'+
    				'<td><strong>Name</strong><br>'+cr_employee_name['cr_employee_name']+'</td>'+
    				'<td><strong>Project name</strong><br>'+cr_employee_pname['cr_employee_pname']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Job title</strong><br>'+cr_employee_position['cr_employee_position']+'</td>'+
    				'<td><strong>Nationality</strong><br>'+cr_employee_nationality['cr_employee_nationality']+'</td>'+
    				'<td><strong>Attachment</strong><br><a href="'+cr_file_path['cr_file_path']+'" target="_blank">'+cr_file_name['cr_file_name']+'</a></td>'+
    			'</tr>'+															
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+cr_notes['cr_notes']+'</td>'+
    			'</tr>'				
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the emmployee Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the hr Details
	function cc_hr_details($cc_tcode,$cc_query){

		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/career_request_details.php",
    		data: { cr_tcode_id: $cc_tcode, cr_query: $cc_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($cc_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var cr_hrclosing_update_by = $.parseJSON(msg);
    		var cr_hrclosing_encoder_name = $.parseJSON(msg);
    		var cr_hrclosing_update_created = $.parseJSON(msg);
    		var cr_hrclosing_update_days = $.parseJSON(msg);
    		var cr_hrclosing_file_path = $.parseJSON(msg);
    		var cr_hrclosing_file_name = $.parseJSON(msg);
    		var cr_hrclosing_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#cc_hr_details_'+$cc_query+'> thead').empty();
    		$('#cc_hr_details_'+$cc_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">HR</th>'+
    			'</tr>'			
    		);
    		
    		$('#cc_hr_details_'+$cc_query+'> tbody').empty();
    		$('#cc_hr_details_'+$cc_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br> '+cr_hrclosing_update_by['cr_hrclosing_update_by']+', '+cr_hrclosing_encoder_name['cr_hrclosing_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+cr_hrclosing_update_created['cr_hrclosing_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+cr_hrclosing_update_days['cr_hrclosing_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+cr_hrclosing_file_path['cr_hrclosing_file_path']+'" target="_blank">'+cr_hrclosing_file_name['cr_hrclosing_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+cr_hrclosing_notes['cr_hrclosing_notes']+'</td>'+
    			'</tr>'			
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the hr Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the declined Details
	function cc_declined_details($cc_tcode,$cc_query){

		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/career_request_details.php",
    		data: { cr_tcode_id: $cc_tcode, cr_query: $cc_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($cc_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var cr_hrdeclinde_update_by = $.parseJSON(msg);
    		var cr_hrdeclinde_encoder_name = $.parseJSON(msg);
    		var cr_hrdeclinde_update_created = $.parseJSON(msg);
    		var cr_hrdeclinde_update_days = $.parseJSON(msg);
    		var cr_hrdeclinde_file_path = $.parseJSON(msg);
    		var cr_hrdeclinde_file_name = $.parseJSON(msg);
    		var cr_hrdeclinde_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#cc_declined_details_'+$cc_query+'> thead').empty();
    		$('#cc_declined_details_'+$cc_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">HR</th>'+
    			'</tr>'			
    		);
    		
    		$('#cc_declined_details_'+$cc_query+'> tbody').empty();
    		$('#cc_declined_details_'+$cc_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br> '+cr_hrdeclinde_update_by['cr_hrdeclinde_update_by']+', '+cr_hrdeclinde_encoder_name['cr_hrdeclinde_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+cr_hrdeclinde_update_created['cr_hrdeclinde_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+cr_hrdeclinde_update_days['cr_hrdeclinde_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+cr_hrdeclinde_file_path['cr_hrdeclinde_file_path']+'" target="_blank">'+cr_hrdeclinde_file_name['cr_hrdeclinde_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+cr_hrdeclinde_notes['cr_hrdeclinde_notes']+'</td>'+
    			'</tr>'			
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the declined Details
	
	/*--------------------------------------------------------------------------------------------------------------*/		
	
	//changeCareerHr start
	$('#changeCareerHrTable').removeClass('hideContentAi');
	
	$('#listOfChangeCareerRequestHr tbody').on( 'click', 'tr', function () {
		
		//clear field
    	$('#changeCareerHrAttachment').val('');
		$('#changeCareerHrNotes').data("wysihtml5").editor.setValue();
		$('#changeCareerHrNotes').val('');		

		var cr_hr_table = $('#listOfChangeCareerRequestHr').DataTable();
		var cr_hr_rowData = cr_hr_table.row( this ).data();
		var cr_hr_tcodeid = cr_hr_rowData[7];			
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(cr_hr_rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		cc_encoder_details(cr_hr_tcodeid,'cc_hr'); // Display the Encoder details
		cc_employee_details(cr_hr_tcodeid,'cc_hr'); // Display the employee details
		
		// This is for the Generate PDF HR First
		var changed_career_hrfirst_GeneratePDF = "../../tcpdf/hris/pdf_change_career_request.php?tcode=" + cr_hr_tcodeid;
		$("#changed_career_hrfirst_GeneratePDF").attr("href", changed_career_hrfirst_GeneratePDF);    		
		// This is for the Generate PDF HR First
		
		$('#changeCareerHrTable').addClass('hideContentAi');
    	$("#changeCareerHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToChangeCareerHrTable, a[href="#changeCareerHr"]').click(function() {
    	$('#changeCareerHrDetails').addClass('hideContentAi');
    	$("#changeCareerHrTable").removeClass('hideContentAi');
    });	

    showCRTables('#listOfChangeCareerRequestHr', 'cr_hr'); // Display the list of HR Tables    
    
	$('#changeCareerHrNotes').wysihtml5();  
	
	// This will update the HR for closed
	$('#updateCcHr').on('click',function(){
		
		// This is for the Attach Files
		
		var tcode_cr_attach = $('#hidden_cc_tcode_cc_hr').val();
		
		var fc_attach_file = $('#changeCareerHrAttachment').val();
		
		var cr_attach_fileLength = fc_attach_file.length;
		
		if(cr_attach_fileLength > 0){
			
			var cr_attach_File = document.getElementById('changeCareerHrAttachment');
			
			if(cr_attach_File.length === 0){
				 return;
			}// end if
			
			var data_cr = new FormData();
			
			data_cr.append('SelectedFile', cr_attach_File.files[0]);
			
			var request_cr = new XMLHttpRequest();
			request_cr.onreadystatechange = function(){
				if(request_cr.readyState == 4){
					try {
						var resp = JSON.parse(request_cr.response);
					}catch(e){
						var resp = {
							status_cr: 'error',
							data_cr: 'Unknown error occurred: [' + request_cr.responseText + ']'
						};// end
					}// end
					console.log(resp.status_cr + ': ' + resp.data_cr);
				}// end if
			}; // end
			request_cr.open('POST', '../ajax/controller/employee_request/upload_career_request_attach_file.php?tcode='+tcode_cr_attach+'&path=cc_hr');
			request_cr.send(data_cr);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		
		var cr_formData = {
				'cr_code':$('#hidden_cc_tcode_cc_hr').val(),	
				'cr_hr_notes':$('#changeCareerHrNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/career_request_update_hr.php',
			data: cr_formData,
			beforeSend: function(){
				$("#goBackToChangeCareerHrTable").attr("disabled", true);
				$("#declineCcHr").attr("disabled", true);
				$("#updateCcHr").attr("disabled", true);
			},
			complete: function(){
				showCRTables('#listOfChangeCareerRequestClosed', 'cr_closed'); // Display the list of clossed Tables
				$("#goBackToChangeCareerHrTable").attr("disabled", false);
				$("#declineCcHr").attr("disabled", false);
				$("#updateCcHr").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showCRTables('#listOfChangeCareerRequestHr', 'cr_hr'); // Display the list of HR Tables
			
			// Return to previous page
	    	$('#changeCareerHrDetails').addClass('hideContentAi');
	    	$("#changeCareerHrTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterCCRequest(); // This will display the number of pending rquest on the TABS
	    	
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
	$('#declineCcHr').on('click',function(){
		
		// This is for the Attach Files
		
		var tcode_cr_attach = $('#hidden_cc_tcode_cc_hr').val();
		
		var fc_attach_file = $('#changeCareerHrAttachment').val();
		
		var cr_attach_fileLength = fc_attach_file.length;
		
		if(cr_attach_fileLength > 0){
			
			var cr_attach_File = document.getElementById('changeCareerHrAttachment');
			
			if(cr_attach_File.length === 0){
				 return;
			}// end if
			
			var data_cr = new FormData();
			
			data_cr.append('SelectedFile', cr_attach_File.files[0]);
			
			var request_cr = new XMLHttpRequest();
			request_cr.onreadystatechange = function(){
				if(request_cr.readyState == 4){
					try {
						var resp = JSON.parse(request_cr.response);
					}catch(e){
						var resp = {
							status_cr: 'error',
							data_cr: 'Unknown error occurred: [' + request_cr.responseText + ']'
						};// end
					}// end
					console.log(resp.status_cr + ': ' + resp.data_cr);
				}// end if
			}; // end
			request_cr.open('POST', '../ajax/controller/employee_request/upload_career_request_attach_file.php?tcode='+tcode_cr_attach+'&path=cc_hr_declined');
			request_cr.send(data_cr);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		
		var cr_formData = {
				'cr_code':$('#hidden_cc_tcode_cc_hr').val(),	
				'cr_hr_notes':$('#changeCareerHrNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/career_request_update_hr_for_declined.php',
			data: cr_formData,
			beforeSend: function(){
				$("#goBackToChangeCareerHrTable").attr("disabled", true);
				$("#declineCcHr").attr("disabled", true);
				$("#updateCcHr").attr("disabled", true);
			},
			complete: function(){
				showCRTables('#listOfChangeCareerRequestDeclined', 'cr_declined'); // Display the list of clossed Tables
				$("#goBackToChangeCareerHrTable").attr("disabled", false);
				$("#declineCcHr").attr("disabled", false);
				$("#updateCcHr").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showCRTables('#listOfChangeCareerRequestHr', 'cr_hr'); // Display the list of HR Tables
			
			// Return to previous page
	    	$('#changeCareerHrDetails').addClass('hideContentAi');
	    	$("#changeCareerHrTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterCCRequest(); // This will display the number of pending rquest on the TABS
	    	
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
	
	//changeCareerHr end


	// Closed start
	$('#changeCareerClosedTable').removeClass('hideContentAi');
	
	$('#listOfChangeCareerRequestClosed tbody').on( 'click', 'tr', function () {

		var cr_Closed_table = $('#listOfChangeCareerRequestClosed').DataTable();
		var cr_Closed_rowData = cr_Closed_table.row( this ).data();
		var cr_Closed_tcodeid = cr_Closed_rowData[7];		
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(cr_Closed_rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		cc_encoder_details(cr_Closed_tcodeid,'cc_closed'); // Display the Encoder details
		cc_employee_details(cr_Closed_tcodeid,'cc_closed'); // Display the employee details
		cc_hr_details(cr_Closed_tcodeid,'cc_closed'); // Display the hr details
		
		$('#changeCareerClosedTable').addClass('hideContentAi');
    	$("#changeCareerClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToChangeCareerClosedDetails, a[href="#changeCareerClosed"]').click(function() {
    	$('#changeCareerClosedDetails').addClass('hideContentAi');
    	$("#changeCareerClosedTable").removeClass('hideContentAi');
    });	

    showCRTables('#listOfChangeCareerRequestClosed', 'cr_closed'); // Display the list of clossed Tables    
    
	// Closed end       

   
	// Declined start
	$('#changeCareerDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfChangeCareerRequestDeclined tbody').on( 'click', 'tr', function () {

		var cr_Declined_table = $('#listOfChangeCareerRequestDeclined').DataTable();
		var cr_Declined_rowData = cr_Declined_table.row( this ).data();
		var cr_Declined_tcodeid = cr_Declined_rowData[7];	
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(cr_Declined_rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		cc_encoder_details(cr_Declined_tcodeid,'cc_declined'); // Display the Encoder details
		cc_employee_details(cr_Declined_tcodeid,'cc_declined'); // Display the employee details
		cc_declined_details(cr_Declined_tcodeid,'cc_declined'); // Display the hr details		
		
		$('#changeCareerDeclinedTable').addClass('hideContentAi');
    	$("#changeCareerDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToChangeCareerDeclinedTable, a[href="#changeCareerDeclined"]').click(function() {
    	$('#changeCareerDeclinedDetails').addClass('hideContentAi');
    	$("#changeCareerDeclinedTable").removeClass('hideContentAi');
    });	
	
    showCRTables('#listOfChangeCareerRequestDeclined', 'cr_declined'); // Display the list of clossed Tables    
	// Declined end	     
   
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#changeCareerHrTableH').addClass('hideContentAi');
		$('#changed_career_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#updateCcHr').addClass('hideContentAi');
			
	}
	//disable button and update end    

} );
