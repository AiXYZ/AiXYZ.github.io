$(document).ready(function() {

	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showFromVTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/from_vacation_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This is the counter for the from vacation request
	counterFromVRequest(); // This will display the number of pending rquest on the TABS
	
	function counterFromVRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/from_vacation_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR
			var FromV_Hr_total = $.parseJSON(msg);
			$("#FromV_Hr_total").text(FromV_Hr_total['FromV_Hr_total']);
		
			// closed
			var FromV_Closed_total = $.parseJSON(msg);
			$("#FromV_Closed_total").text(FromV_Closed_total['FromV_Closed_total']);
			
			// All
			var FromV_Hr_total_All = $.parseJSON(msg);
			$("#FromV_Hr_total_All").text(FromV_Hr_total_All['FromV_Hr_total_All']);			
			
		});// end done
		
	}// end function
	// This is the counter for the from vacation request
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the Encoder Details
	function FromV_encoder_details($FromV_tcode,$FromV_query){

		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/from_vacation_request_details.php",
    		data: { FromV_tcode_id: $FromV_tcode, FromV_query: $FromV_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($FromV_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var FromV_encode_by = $.parseJSON(msg);
    		var FromV_encoder_name = $.parseJSON(msg);
    		var FromV_encode_date = $.parseJSON(msg);
    		var FromV_elapsed_days = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#FromV_encoder_details_'+$FromV_query+'> thead').empty();
    		$('#FromV_encoder_details_'+$FromV_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="4">Encoder details <span class="muted">- '+$FromV_tcode+'</span></th>'+
    				'<input type="hidden" id="hidden_FromV_tcode_'+$FromV_query+'" value="'+$FromV_tcode+'" />'+
    			'</tr>'		
    		);
    		
    		$('#FromV_encoder_details_'+$FromV_query+'> tbody').empty();
    		$('#FromV_encoder_details_'+$FromV_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+FromV_encode_by['FromV_encode_by']+'</td>'+
    				'<td><strong>Name</strong><br>'+FromV_encoder_name['FromV_encoder_name']+'</td>'+
    				'<td><strong>Created date</strong><br>'+FromV_encode_date['FromV_encode_date']+'</td>'+
    				'<td><strong>Elapsed day(s)</strong><br>'+FromV_elapsed_days['FromV_elapsed_days']+'</td>'+
    			'</tr>'		
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
				
	}// end function
	// This will display the Encoder Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the employee Details
	function FromV_employee_details($FromV_tcode,$FromV_query){

		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/from_vacation_request_details.php",
    		data: { FromV_tcode_id: $FromV_tcode, FromV_query: $FromV_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($FromV_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var FromV_employee_id = $.parseJSON(msg);
    		var FromV_employee_name = $.parseJSON(msg);
    		var FromV_employee_pname = $.parseJSON(msg);
    		var FromV_employee_position = $.parseJSON(msg);
    		var FromV_employee_nationality = $.parseJSON(msg);
    		var FromV_file_path = $.parseJSON(msg);
    		var FromV_file_name = $.parseJSON(msg);
    		var FromV_notes = $.parseJSON(msg);
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#FromV_employee_details_'+$FromV_query+'> thead').empty();
    		$('#FromV_employee_details_'+$FromV_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">Employee details</th>'+
    			'</tr>'	
    		);
    		
    		$('#FromV_employee_details_'+$FromV_query+'> tbody').empty();
    		$('#FromV_employee_details_'+$FromV_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+FromV_employee_id['FromV_employee_id']+'</td>'+
    				'<td><strong>Name</strong><br>'+FromV_employee_name['FromV_employee_name']+'</td>'+
    				'<td><strong>Project name</strong><br>'+FromV_employee_pname['FromV_employee_pname']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Job title</strong><br>'+FromV_employee_position['FromV_employee_position']+'</td>'+
    				'<td><strong>Nationality</strong><br>'+FromV_employee_nationality['FromV_employee_nationality']+'</td>'+
    				'<td><strong>Attachment</strong><br><a href="'+FromV_file_path['FromV_file_path']+'" target="_blank">'+FromV_file_name['FromV_file_name']+'</a></td>'+
    			'</tr>'+															
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+FromV_notes['FromV_notes']+'</td>'+
    			'</tr>'		
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
				
	}// end function
	// This will display the employee Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	

	// This will display the closed Details
	function FromV_closed_details($FromV_tcode,$FromV_query){

		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/from_vacation_request_details.php",
    		data: { FromV_tcode_id: $FromV_tcode, FromV_query: $FromV_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($FromV_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var FromV_hrclosed_update_by = $.parseJSON(msg);
    		var FromV_hrclosed_encoder_name = $.parseJSON(msg);
    		var FromV_hrclosed_update_created = $.parseJSON(msg);
    		var FromV_hrclosed_update_days = $.parseJSON(msg);
    		var FromV_hrclosed_file_path = $.parseJSON(msg);
    		var FromV_hrclosed_file_name = $.parseJSON(msg);
    		var FromV_hrclosed_notes = $.parseJSON(msg);
    	
    		/* --------------------------------------------------------------------------- */	
    		
    		$('#FromV_closed_details_'+$FromV_query+'> thead').empty();
    		$('#FromV_closed_details_'+$FromV_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">HR</th>'+
    			'</tr>'	
    		);
    		
    		$('#FromV_closed_details_'+$FromV_query+'> tbody').empty();
    		$('#FromV_closed_details_'+$FromV_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br>'+FromV_hrclosed_update_by['FromV_hrclosed_update_by']+', '+FromV_hrclosed_encoder_name['FromV_hrclosed_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+FromV_hrclosed_update_created['FromV_hrclosed_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+FromV_hrclosed_update_days['FromV_hrclosed_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+FromV_hrclosed_file_path['FromV_hrclosed_file_path']+'" target="_blank">'+FromV_hrclosed_file_name['FromV_hrclosed_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+FromV_hrclosed_notes['FromV_hrclosed_notes']+'</td>'+
    			'</tr>'		
    		);
    	
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
				
	}// end function
	// This will display the closed Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	//from vacation start
	$('#fromVacationHrTable').removeClass('hideContentAi');
	
	$('#listOffromVacationRequestHr tbody').on( 'click', 'tr', function () {
		
		//clear field
    	$('#fromVacationHrAttachment').val('');
		$('#fromVacationHrNotes').data("wysihtml5").editor.setValue();
		$('#fromVacationHrNotes').val('');		

		var FromV_hr_table = $('#listOffromVacationRequestHr').DataTable();
		var FromV_hr_rowData = FromV_hr_table.row( this ).data();
		var FromV_hr_tcodeid = FromV_hr_rowData[7];			
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(FromV_hr_rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		FromV_encoder_details(FromV_hr_tcodeid, 'FromV_hr'); // Display the Encoder details
		FromV_employee_details(FromV_hr_tcodeid, 'FromV_hr'); // Display the employee details
		
		// This is for the Generate PDF HR First
		var from_vacation_hrFirst_GeneratePdfUrl = "../../tcpdf/hris/pdf_reporting_date_request_vacation.php?tcode=" + FromV_hr_tcodeid;
		$("#from_vacation_hrfirst_GeneratePDF").attr("href", from_vacation_hrFirst_GeneratePdfUrl);    		
		// This is for the Generate PDF HR First
		
		$('#fromVacationHrTable').addClass('hideContentAi');
    	$("#fromVacationHrDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFromVacationHrTable, a[href="#fromVacationHr"]').click(function() {
    	$('#fromVacationHrDetails').addClass('hideContentAi');
    	$("#fromVacationHrTable").removeClass('hideContentAi');
    });	
    
    showFromVTables('#listOffromVacationRequestHr', 'FromV_hr'); // Display the list of HR Tables
    
	$('#fromVacationHrNotes').wysihtml5();
	
	// This will update the HR for closed
	$('#updateFromVHr').on('click',function(){
		
		// This is for the Attach Files
		
		var tcode_FromV_attach = $('#hidden_FromV_tcode_FromV_hr').val();
		
		var FromV_attach_file = $('#fromVacationHrAttachment').val();
		
		var FromV_attach_fileLength = FromV_attach_file.length;
		
		if(FromV_attach_fileLength > 0){
			
			var FromV_attach_File = document.getElementById('fromVacationHrAttachment');
			
			if(FromV_attach_File.length === 0){
				 return;
			}// end if
			
			var data_FromV = new FormData();
			
			data_FromV.append('SelectedFile', FromV_attach_File.files[0]);
			
			var request_FromV = new XMLHttpRequest();
			request_FromV.onreadystatechange = function(){
				if(request_FromV.readyState == 4){
					try {
						var resp = JSON.parse(request_FromV.response);
					}catch(e){
						var resp = {
							status_FromV: 'error',
							data_FromV: 'Unknown error occurred: [' + request_FromV.responseText + ']'
						};// end
					}// end
					console.log(resp.status_FromV + ': ' + resp.data_FromV);
				}// end if
			}; // end
			request_FromV.open('POST', '../ajax/controller/employee_request/upload_from_vacation_request_attach_file.php?tcode='+tcode_FromV_attach+'&path=FromV_hr');
			request_FromV.send(data_FromV);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		
		var FromV_formData = {
				'FromV_code':$('#hidden_FromV_tcode_FromV_hr').val(),	
				'FromV_hr_notes':$('#fromVacationHrNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/from_vacation_request_update_hr.php',
			data: FromV_formData,
			beforeSend: function(){
				$("#goBackToFromVacationHrTable").attr("disabled", true);
				$("#updateFromVHr").attr("disabled", true);
			},
			complete: function(){
				showFromVTables('#listOfFromVacationRequestClosed', 'FromV_closed'); // Display the list of closed Tables
				$("#goBackToFromVacationHrTable").attr("disabled", false);
				$("#updateFromVHr").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showFromVTables('#listOffromVacationRequestHr', 'FromV_hr'); // Display the list of HR Tables
			
			// Return to previous page
	    	$('#fromVacationHrDetails').addClass('hideContentAi');
	    	$("#fromVacationHrTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterFromVRequest(); // This will display the number of pending rquest on the TABS
	    	
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
	
	//from vacation end

	
	// Closed start
	$('#fromVacationClosedTable').removeClass('hideContentAi');
	
	$('#listOfFromVacationRequestClosed tbody').on( 'click', 'tr', function () {

		var FromV_closed_table = $('#listOfFromVacationRequestClosed').DataTable();
		var FromV_closed_rowData = FromV_closed_table.row( this ).data();
		var FromV_closed_tcodeid = FromV_closed_rowData[7];		
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(FromV_hr_rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		FromV_encoder_details(FromV_closed_tcodeid,'FromV_closed'); // Display the Encoder details
		FromV_employee_details(FromV_closed_tcodeid,'FromV_closed'); // Display the employee details
		FromV_closed_details(FromV_closed_tcodeid,'FromV_closed'); // Display the hr closed details		
		
		$('#fromVacationClosedTable').addClass('hideContentAi');
    	$("#fromVacationClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFromVacationClosedTable, a[href="#fromVacationClosed"]').click(function() {
    	$('#fromVacationClosedDetails').addClass('hideContentAi');
    	$("#fromVacationClosedTable").removeClass('hideContentAi');
    });	
   
    showFromVTables('#listOfFromVacationRequestClosed', 'FromV_closed'); // Display the list of closed Tables
    
	// Closed end   
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#fromVacationHrTableH').addClass('hideContentAi');
		$('#from_vacation_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#updateFromVHr').addClass('hideContentAi');
			
	}
	//disable button and update end    

} );
