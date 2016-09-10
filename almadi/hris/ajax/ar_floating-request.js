$(document).ready(function() {

	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showFRTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/floating_request_list.php?request_type="+task,
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
	counterFloatingRequest(); // This will display the number of pending rquest on the TABS
	
	function counterFloatingRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/floating_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR received
			var fr_hr_received_total = $.parseJSON(msg);
			$("#fr_hr_received_total").text(fr_hr_received_total['fr_hr_received_total']);

			// HR closing
			var fr_hr_closing_total = $.parseJSON(msg);
			$("#fr_hr_closing_total").text(fr_hr_closing_total['fr_hr_closing_total']);
		
			// closed
			var fr_closed_total = $.parseJSON(msg);
			$("#fr_closed_total").text(fr_closed_total['fr_closed_total']);
			
			//All
			var fr_total_All = $.parseJSON(msg);
			$("#fr_total_All").text(fr_total_All['fr_total_All']);
			
		});// end done
		
	}// end function
	// This is the counter for the floating request
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	// This will display the Encoder Details
	function floating_encoder_details($fr_tcode,$fr_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/floating_request_details.php",
    		data: { fr_tcode_id: $fr_tcode, fr_query: $fr_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($fr_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var fr_encode_by = $.parseJSON(msg);
    		var fr_encoder_name = $.parseJSON(msg);
    		var fr_encode_date = $.parseJSON(msg);
    		var fr_elapsed_days = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
		
    		$('#floating_encoder_details_'+$fr_query+'> thead').empty();
    		$('#floating_encoder_details_'+$fr_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="4">Encoder details <span class="muted">- '+$fr_tcode+'</span></th>'+
    				'<input type="hidden" id="hidden_floating__tcode_'+$fr_query+'" value="'+$fr_tcode+'" />'+
    			'</tr>'				
    		);
    		
    		$('#floating_encoder_details_'+$fr_query+'> tbody').empty();
    		$('#floating_encoder_details_'+$fr_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+fr_encode_by['fr_encode_by']+'</td>'+
    				'<td><strong>Name</strong><br>'+fr_encoder_name['fr_encoder_name']+'</td>'+
    				'<td><strong>Created date</strong><br>'+fr_encode_date['fr_encode_date']+'</td>'+
    				'<td><strong>Elapsed day(s)</strong><br>'+fr_elapsed_days['fr_elapsed_days']+'</td>'+
    			'</tr>'					
    		);
		
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		

		
	}// end function
	// This will display the Encoder Details
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	// This will display the Employee Details
	function floating_employee_details($fr_tcode,$fr_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/floating_request_details.php",
    		data: { fr_tcode_id: $fr_tcode, fr_query: $fr_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($fr_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var fr_employee_id = $.parseJSON(msg);
    		var fr_employee_name = $.parseJSON(msg);
    		var fr_employee_pname = $.parseJSON(msg);
    		var fr_employee_position = $.parseJSON(msg);
    		var fr_employee_nationality = $.parseJSON(msg);
    		var fr_file_path = $.parseJSON(msg);
    		var fr_file_name = $.parseJSON(msg);
    		var fr_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
		
    		$('#floating_employee_details_'+$fr_query+'> thead').empty();
    		$('#floating_employee_details_'+$fr_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">Employee details</th>'+
    			'</tr>'			
    		);
    		
    		$('#floating_employee_details_'+$fr_query+'> tbody').empty();
    		$('#floating_employee_details_'+$fr_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Emp.ID</strong><br>'+fr_employee_id['fr_employee_id']+'</td>'+
    				'<td><strong>Name</strong><br>'+fr_employee_name['fr_employee_name']+'</td>'+
    				'<td><strong>Project name</strong><br>'+fr_employee_pname['fr_employee_pname']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Job title</strong><br>'+fr_employee_position['fr_employee_position']+'</td>'+
    				'<td><strong>Nationality</strong><br>'+fr_employee_nationality['fr_employee_nationality']+'</td>'+
    				'<td><strong>Attachment</strong><br><a href="'+fr_file_path['fr_file_path']+'" target="_blank">'+fr_file_name['fr_file_name']+'</a></td>'+
    			'</tr>'+															
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+fr_notes['fr_notes']+'</td>'+
    			'</tr>'				
    		);
		
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
	}// end function
	// This will display the Employee Details
	
	/*--------------------------------------------------------------------------------------------------------------*/

	// This will display the hr received
	function floating_not_editing_hr_received($fr_tcode,$fr_query,$fr_display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/floating_request_details.php",
    		data: { fr_tcode_id: $fr_tcode, fr_query: $fr_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($fr_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var fr_hrreceived_update_by = $.parseJSON(msg);
    		var fr_hrreceived_encoder_name = $.parseJSON(msg);
    		var fr_hrreceived_update_created = $.parseJSON(msg);
    		var fr_hrreceived_update_days = $.parseJSON(msg);
    		var fr_hrreceived_file_path = $.parseJSON(msg);
    		var fr_hrreceived_file_name = $.parseJSON(msg);
    		var fr_hrreceived_notes = $.parseJSON(msg);
    		
    	
    		/* --------------------------------------------------------------------------- */	
		
    		if($fr_display == 'True'){
    			$('#floating_hr_received_'+$fr_query+'> thead').empty();
    			$('#floating_hr_received_'+$fr_query+'> thead').append(
    				'<tr>'+
    					'<th colspan="3">HR Received <span class="pull-right floatingHrReceivedEditInHrClosing"><i class="icon-large icon-pencil"></i></span></th>'+
    				'</tr>'		
    			);
    		}else{
    			$('#floating_hr_received_'+$fr_query+'> thead').empty();
    			$('#floating_hr_received_'+$fr_query+'> thead').append(
    				'<tr>'+
    					'<th colspan="3">HR Received </th>'+
    				'</tr>'		
    			);			
    		}
    		
    		$('#floating_hr_received_'+$fr_query+'> tbody').empty();
    		$('#floating_hr_received_'+$fr_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br> '+fr_hrreceived_update_by['fr_hrreceived_update_by']+', '+fr_hrreceived_encoder_name['fr_hrreceived_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+fr_hrreceived_update_created['fr_hrreceived_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+fr_hrreceived_update_days['fr_hrreceived_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+fr_hrreceived_file_path['fr_hrreceived_file_path']+'" target="_blank">'+fr_hrreceived_file_name['fr_hrreceived_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+fr_hrreceived_notes['fr_hrreceived_notes']+'</td>'+
    			'</tr>'			
    		);		
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.floatingHrReceivedEditInHrClosing').addClass('hideContentAi');
			}
			//disable button and update end    		

    	    $( '.floatingHrReceivedEditInHrClosing').click(function() {
    	    	
    			// This will display the details for HR received - Editing    	    	

	    		//Hr Received Content In Hr Closing start
	    		$('#feHrReceivedContentInHrClosing').empty();
	    		$('#feHrReceivedContentInHrClosing').append(
					'<div class="row-fluid">'+
					  '<div class="span12">'+
						'<div class="control-group">'+											
							'<label class="control-label" for="feHrReceivedNotesInHrClosing">Notes</label>'+
							'<div class="controls">'+
								'<textarea rows="5" class="input-block-level" id="feHrReceivedNotesInHrClosing">'+fr_hrreceived_notes['fr_hrreceived_notes']+'</textarea>'+
							'</div>'+				
						'</div>'+						          
					  '</div>'+
					'</div>'+																
					'<div class="row-fluid">'+
					  '<div class="span4">'+
						'<div class="control-group">'+											
							'<label class="control-label" for="feHrReceivedAttachmentInHrClosing">Attachment</label>'+
							'<div class="controls">'+
								'<input type="file" id="feHrReceivedAttachmentInHrClosing" accept=".pdf, .doc, .docx">'+
							'</div>'+
						'</div>'+
					  '</div>'+
					  '<div class="span8">'+
						'<div class="control-group">'+											
							'<label class="control-label"> &nbsp; </label>'+
							'<div class="controls">'+
								'<a href="'+fr_hrreceived_file_path['fr_hrreceived_file_path']+'" target="_blank">'+fr_hrreceived_file_name['fr_hrreceived_file_name']+'</a>'+
							'</div>'+
						'</div>'+						          
					  '</div>'+																	  
					'</div>'				
	    		);   
	    		
	    		$('#feHrReceivedNotesInHrClosing').wysihtml5();
	    		
	    		//Hr Received Content In Hr Closing start
    			
    			// This will display the details for HR received - Editing    	    	
    	    	
    	    	$('#floating_hr_received_'+$fr_query+'').addClass('hideContentAi');
    	    	$("#floatingHrReceivedUpdateInHrClosingTable").removeClass('hideContentAi');
    	    });	
		
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
	
		
	}// end function
	// This will display the hr received
	
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	// This will display the Employee Details
	function floating_hr_closed($fr_tcode,$fr_query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/floating_request_details.php",
    		data: { fr_tcode_id: $fr_tcode, fr_query: $fr_query}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log($fr_query); // Display the current query
    		//var test_result = $.parseJSON(msg);
    		//console.log(test_result['test_result']);
    		// For testing
    		
    		var fr_hrclosing_update_by = $.parseJSON(msg);
    		var fr_hrclosing_encoder_name = $.parseJSON(msg);
    		var fr_hrclosing_update_created = $.parseJSON(msg);
    		var fr_hrclosing_update_days = $.parseJSON(msg);
    		var fr_hrclosing_file_path = $.parseJSON(msg);
    		var fr_hrclosing_file_name = $.parseJSON(msg);
    		var fr_hrclosing_notes = $.parseJSON(msg);

    		
    		/* --------------------------------------------------------------------------- */	
		
    		$('#floating_hr_closed_'+$fr_query+'> thead').empty();
    		$('#floating_hr_closed_'+$fr_query+'> thead').append(
    			'<tr>'+
    				'<th colspan="3">HR Closing</th>'+
    			'</tr>'		
    		);
    		
    		$('#floating_hr_closed_'+$fr_query+'> tbody').empty();
    		$('#floating_hr_closed_'+$fr_query+'> tbody').append(
    			'<tr>'+
    				'<td><strong>Status</strong><br>Done</td>'+
    				'<td><strong>Updated by</strong><br> '+fr_hrclosing_update_by['fr_hrclosing_update_by']+', '+fr_hrclosing_encoder_name['fr_hrclosing_encoder_name']+'</td>'+
    				'<td><strong>Date</strong><br>'+fr_hrclosing_update_created['fr_hrclosing_update_created']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Elapsed</strong><br>'+fr_hrclosing_update_days['fr_hrclosing_update_days']+'</td>'+
    				'<td colspan="2"><strong>Attachment</strong><br><a href="'+fr_hrclosing_file_path['fr_hrclosing_file_path']+'" target="_blank">'+fr_hrclosing_file_name['fr_hrclosing_file_name']+'</a></td>'+
    			'</tr>'+	
    			'<tr>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+fr_hrclosing_notes['fr_hrclosing_notes']+'</td>'+
    			'</tr>'				
    		);	
		
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done	

		
	}// end function
	// This will display the Employee Details
	/*--------------------------------------------------------------------------------------------------------------*/	
	
	
	//feHrReceived start
	$('#feHrReceivedTable').removeClass('hideContentAi');
	
	$('#listOfFeRequestHrReceived tbody').on( 'click', 'tr', function () {
		//clear field
    	$('#feHrReceivedAttachment').val('');
		$('#feHrReceivedNotes').data("wysihtml5").editor.setValue();
		$('#feHrReceivedNotes').val('');		
		
		var fr_hr_received_table = $('#listOfFeRequestHrReceived').DataTable();
		var fr_hr_received_rowData = fr_hr_received_table.row( this ).data();
		var fr_hr_received_tcodeid = fr_hr_received_rowData[7];		
		
		floating_encoder_details(fr_hr_received_tcodeid,'fr_hr_received'); // Display the Encoder details
		floating_employee_details(fr_hr_received_tcodeid,'fr_hr_received'); // Display the employee details
		
		// This is for the Generate PDF HR First
		var floating_hrfirst_GeneratePDF = "../../tcpdf/hris/pdf_floating_personnel.php?tcode=" + fr_hr_received_tcodeid;
		$("#floating_hrfirst_GeneratePDF").attr("href", floating_hrfirst_GeneratePDF);    		
		// This is for the Generate PDF HR First
		
		$('#feHrReceivedTable').addClass('hideContentAi');
    	$("#feHrReceivedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFeHrReceivedTable').click(function() {
    	$('#feHrReceivedDetails').addClass('hideContentAi');
    	$("#feHrReceivedTable").removeClass('hideContentAi');
    });	
    
    showFRTables('#listOfFeRequestHrReceived', 'fr_hr_received'); // Display the list of HR Received Tables    
        
	$('#feHrReceivedNotes').wysihtml5();
	
	// This will update the HR received
	$('#updateFloatingHrReceived').on('click',function(){
		
		// This is for the Attach Files
		var tcode_fr_attach = $('#hidden_floating__tcode_fr_hr_received').val();
		
		var fr_attach_file = $('#feHrReceivedAttachment').val();
		
		var fr_attach_fileLength = fr_attach_file.length;
		
		if(fr_attach_fileLength > 0){
			
			var fr_attach_File = document.getElementById('feHrReceivedAttachment');
			
			if(fr_attach_File.length === 0){
				 return;
			}// end if
			
			var data_fr = new FormData();
			
			data_fr.append('SelectedFile', fr_attach_File.files[0]);
			
			var request_fr = new XMLHttpRequest();
			request_fr.onreadystatechange = function(){
				if(request_fr.readyState == 4){
					try {
						var resp = JSON.parse(request_fr.response);
					}catch(e){
						var resp = {
							status_fr: 'error',
							data_fr: 'Unknown error occurred: [' + request_fr.responseText + ']'
						};// end
					}// end
					console.log(resp.status_fr + ': ' + resp.data_fr);
				}// end if
			}; // end
			request_fr.open('POST', '../ajax/controller/employee_request/upload_floating_request_attach_file.php?tcode='+tcode_fr_attach+'&path=fr_hr_received');
			request_fr.send(data_fr);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		var fr_formData = {
				'fr_code':$('#hidden_floating__tcode_fr_hr_received').val(),	
				'fr_hr_received_notes':$('#feHrReceivedNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/floating_request_update_hr_received.php',
			data: fr_formData,
			beforeSend: function(){
				$("#goBackToFeHrReceivedTable").attr("disabled", true);
				$("#updateFloatingHrReceived").attr("disabled", true);
			},
			complete: function(){
				showFRTables('#listOfFeHrRequestClosing', 'fr_hr_closing'); // Display the list of HR Closing Tables
				$("#goBackToFeHrReceivedTable").attr("disabled", false);
				$("#updateFloatingHrReceived").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showFRTables('#listOfFeRequestHrReceived', 'fr_hr_received'); // Display the list of HR Received Tables
			
			// Return to previous page
	    	$('#feHrReceivedDetails').addClass('hideContentAi');
	    	$("#feHrReceivedTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterFloatingRequest(); // This will display the number of pending rquest on the TABS
	    	
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
	// This will update the HR received	
	
	//feHrReceived end


	// hr closing start
	$('#feHrClosingTable').removeClass('hideContentAi');
	
	$('#listOfFeHrRequestClosing tbody').on( 'click', 'tr', function () {
		
		//clear field
    	$('#feHrClosingAttachment').val('');
		$('#feHrClosingNotes').data("wysihtml5").editor.setValue();
		$('#feHrClosingNotes').val('');		
		
		var fr_hr_closing_table = $('#listOfFeHrRequestClosing').DataTable();
		var fr_hr_closing_rowData = fr_hr_closing_table.row( this ).data();
		var fr_hr_closing_tcodeid = fr_hr_closing_rowData[7];		
		
		floating_encoder_details(fr_hr_closing_tcodeid,'fr_hr_closing'); // Display the Encoder details
		floating_employee_details(fr_hr_closing_tcodeid,'fr_hr_closing'); // Display the employee details
		floating_not_editing_hr_received(fr_hr_closing_tcodeid,'fr_hr_closing','True'); // Display the hr received
		
		$('#feHrClosingTable').addClass('hideContentAi');
    	$("#feHrClosingDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFeHrClosingTable').click(function() {
    	$('#feHrClosingDetails').addClass('hideContentAi');
    	$("#feHrClosingTable").removeClass('hideContentAi');
    });	
	
    showFRTables('#listOfFeHrRequestClosing', 'fr_hr_closing'); // Display the list of HR Closing Tables    

	$('#feHrClosingNotes').wysihtml5();    
	
	$('#floatingHrReceivedEditInHrClosingTable').removeClass('hideContentAi');

    $( '.floatingHrReceivedUpdateInHrClosing').click(function() {
    	$('#floatingHrReceivedUpdateInHrClosingTable').addClass('hideContentAi');
    	$("#floating_hr_received_fr_hr_closing").removeClass('hideContentAi');
    }); 
   
    //HR received edit in hr closing start
    $('#feHrReceivedSaveInHrClosing').on('click', function(){
		
		// This is for the Attach Files
		var tcode_fr_attach = $('#hidden_floating__tcode_fr_hr_closing').val();
		
		var fr_attach_file = $('#feHrReceivedAttachmentInHrClosing').val();
		
		var fr_attach_fileLength = fr_attach_file.length;
		
		if(fr_attach_fileLength > 0){
			
			var fr_attach_File = document.getElementById('feHrReceivedAttachmentInHrClosing');
			
			if(fr_attach_File.length === 0){
				 return;
			}// end if
			
			var data_fr = new FormData();
			
			data_fr.append('SelectedFile', fr_attach_File.files[0]);
			
			var request_fr = new XMLHttpRequest();
			request_fr.onreadystatechange = function(){
				if(request_fr.readyState == 4){
					try {
						var resp = JSON.parse(request_fr.response);
					}catch(e){
						var resp = {
							status_fr: 'error',
							data_fr: 'Unknown error occurred: [' + request_fr.responseText + ']'
						};// end
					}// end
					console.log(resp.status_fr + ': ' + resp.data_fr);
				}// end if
			}; // end
			request_fr.open('POST', '../ajax/controller/employee_request/upload_floating_request_attach_file.php?tcode='+tcode_fr_attach+'&path=fr_hr_received');
			request_fr.send(data_fr);
		}// end if
		// This is for the Attach Files
		
		//this is for text start
		var fr_formData = {
				'fr_code':$('#hidden_floating__tcode_fr_hr_closing').val(),	
				'fr_hr_received_notes':$('#feHrReceivedNotesInHrClosing').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/floating_request_update_hr_received.php',
			data: fr_formData,
			beforeSend: function(){
				$("#feHrReceivedSaveInHrClosing").attr("disabled", true);
			},
			complete: function(){
				$("#feHrReceivedSaveInHrClosing").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			floating_not_editing_hr_received($('#hidden_floating__tcode_fr_hr_closing').val(),'fr_hr_closing','True'); // Display the hr received

			//clear field
	    	$('#feHrReceivedAttachmentInHrClosing').val('');
			$('#feHrReceivedNotesInHrClosing').data("wysihtml5").editor.setValue();
			$('#feHrReceivedNotesInHrClosing').val('');	
			$('#feHrReceivedAttachmentInHrClosingLink').empty();
			
	    	$('#floatingHrReceivedUpdateInHrClosingTable').addClass('hideContentAi');
	    	$("#floating_hr_received_fr_hr_closing").removeClass('hideContentAi');
	    	
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
    }); // end    
    //Hr received edit in hr closing end
    
	// This will update the HR closing
	$('#updateFloatingHrClosing').on('click',function(){
		
		// This is for the Attach Files
		var tcode_fr_attach = $('#hidden_floating__tcode_fr_hr_closing').val();
		
		var fr_attach_file = $('#feHrClosingAttachment').val();
		
		var fr_attach_fileLength = fr_attach_file.length;
		
		if(fr_attach_fileLength > 0){
			
			var fr_attach_File = document.getElementById('feHrClosingAttachment');
			
			if(fr_attach_File.length === 0){
				 return;
			}// end if
			
			var data_fr = new FormData();
			
			data_fr.append('SelectedFile', fr_attach_File.files[0]);
			
			var request_fr = new XMLHttpRequest();
			request_fr.onreadystatechange = function(){
				if(request_fr.readyState == 4){
					try {
						var resp = JSON.parse(request_fr.response);
					}catch(e){
						var resp = {
							status_fr: 'error',
							data_fr: 'Unknown error occurred: [' + request_fr.responseText + ']'
						};// end
					}// end
					console.log(resp.status_fr + ': ' + resp.data_fr);
				}// end if
			}; // end
			request_fr.open('POST', '../ajax/controller/employee_request/upload_floating_request_attach_file.php?tcode='+tcode_fr_attach+'&path=fr_hr_closing');
			request_fr.send(data_fr);
		}// end if
		
		// This is for the Attach Files
		
		//this is for text start
		var fr_formData = {
				'fr_code':$('#hidden_floating__tcode_fr_hr_closing').val(),	
				'fr_hr_Closing_notes':$('#feHrClosingNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/floating_request_update_hr_closing.php',
			data: fr_formData,
			beforeSend: function(){
				$("#goBackToFeHrClosingTable").attr("disabled", true);
				$("#updateFloatingHrClosing").attr("disabled", true);
			},
			complete: function(){
				showFRTables('#listOfFeRequestClosed', 'fr_closed'); // Display the list of Closed Tables
				$("#goBackToFeHrClosingTable").attr("disabled", false);
				$("#updateFloatingHrClosing").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showFRTables('#listOfFeHrRequestClosing', 'fr_hr_closing'); // Display the list of HR Closing Tables
			
			// Return to previous page
	    	$('#feHrClosingDetails').addClass('hideContentAi');
	    	$("#feHrClosingTable").removeClass('hideContentAi');
			// Return to previous page
			 
	    	counterFloatingRequest(); // This will display the number of pending rquest on the TABS
	    	
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
	// This will update the HR closing	    
    
	// hr closing end       

   
	// closed start
	$('#feClosedTable').removeClass('hideContentAi');
	
	$('#listOfFeRequestClosed tbody').on( 'click', 'tr', function () {

		var fr_hr_closed_table = $('#listOfFeRequestClosed').DataTable();
		var fr_hr_closed_rowData = fr_hr_closed_table.row( this ).data();
		var fr_hr_closed_tcodeid = fr_hr_closed_rowData[7];		
		
		floating_encoder_details(fr_hr_closed_tcodeid,'fr_closed'); // Display the Encoder details
		floating_employee_details(fr_hr_closed_tcodeid,'fr_closed'); // Display the employee details
		floating_not_editing_hr_received(fr_hr_closed_tcodeid,'fr_closed','False'); // Display the hr received
		floating_hr_closed(fr_hr_closed_tcodeid,'fr_closed'); // Display the 
		
		$('#feClosedTable').addClass('hideContentAi');
    	$("#feClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFeClosedTable').click(function() {
    	$('#feClosedDetails').addClass('hideContentAi');
    	$("#feClosedTable").removeClass('hideContentAi');
    });	
    
    showFRTables('#listOfFeRequestClosed', 'fr_closed'); // Display the list of Closed Tables    
    
	// closed end	     
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#feHrReceivedTableH').addClass('hideContentAi');
		$('#floating_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#updateFloatingHrReceived').addClass('hideContentAi');

		$('#feHrClosingTableH').addClass('hideContentAi');
		$('#updateFloatingHrClosing').addClass('hideContentAi');
		
	}
	//disable button and update end    

} );
