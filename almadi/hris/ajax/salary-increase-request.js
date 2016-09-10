$(document).ready(function() {
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will compute the xx year(s) xx month(s) xx day(s)
	function difference(d1, d2, display) {
	  var m = moment(d1);
	  var years = m.diff(d2, 'years');
	  m.add(-years, 'years');
	  var months = m.diff(d2, 'months');
	  m.add(-months, 'months');
	  var days = m.diff(d2, 'days');

	  //return {years: years, months: months, days: days};
	  var year_month_day = years+' year(s) '+months+' month(s) '+days+' day(s)';
	  
	  return year_month_day;
	  
	}// end
	// This will compute the xx year(s) xx month(s) xx day(s)
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This is the counter for the salary increase request
	counterSalaryIncreaseRequest(); // This will display the number of pending rquest on the TABS
	
	function counterSalaryIncreaseRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/salary_increase_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var salary_increase_hr_first_total = $.parseJSON(msg);
			$("#salary_increase_hr_first_total").text(salary_increase_hr_first_total['salary_increase_hr_first_total']);
			
			// Approval
			var salary_increase_approval_total = $.parseJSON(msg);
			$("#salary_increase_approval_total").text(salary_increase_approval_total['salary_increase_approval_total']);
			
			// HR Final
			var salary_increase_hr_final_total = $.parseJSON(msg);
			$("#salary_increase_hr_final_total").text(salary_increase_hr_final_total['salary_increase_hr_final_total']);
			
			// Closed
			var salary_increase_closed_total = $.parseJSON(msg);
			$("#salary_increase_closed_total").text(salary_increase_closed_total['salary_increase_closed_total']);
			
			// Declined
			var salary_increase_declined_total = $.parseJSON(msg);
			$("#salary_increase_declined_total").text(salary_increase_declined_total['salary_increase_declined_total']);
			
			// Salary Increase Grand Total
			var salary_increase_grand_total = $.parseJSON(msg);
			$("#sir_grand_total").text(salary_increase_grand_total['salary_increase_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the salary increase request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showSalaryIncreaseTables(table_name, task){
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
			"ajax": "../ajax/controller/employee_request/salary_increase_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of salary history
	function salaryHistory(eid){
		
		console.log(eid);
		
		$('#salary_increase_history_list > thead').empty();
		$('#salary_increase_history_list > thead').append(
				'<tr>'+
					'<th colspan="4">Salary history</th>'+
				'</tr>'
		);
		
		$('#salary_increase_history_list > tbody').empty();
		$('#salary_increase_history_list > tbody').append(
				'<tr>'+
					'<td class="tdTextInCenterAi"><strong>Basic salary</strong></td>'+
					'<td class="tdTextInCenterAi"><strong>Other allowance</strong></td>'+
					'<td class="tdTextInCenterAi"><strong>Total salary</strong></td>'+
					'<td class="tdTextInCenterAi"><strong>Effectivity date</strong></td>'+
				'</tr>'
		);
		
		$.ajax({
		type: "POST",
		url: "../ajax/controller/salary_history_list.php?eid="+eid,
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		encode: true
		})// end ajax
		
		.done(function(data){
			
			if(data == null){
				
				$('#Salary_Increase_Update_HR_first').attr('disabled', true);
				
				$('#salary_increase_history_list > tbody').append(
						'<tr id="salary_listings">'+
							'<td class="tdTextInCenterAi"> 0 </td>'+
							'<td class="tdTextInCenterAi"> 0 </td>'+
							'<td class="tdTextInCenterAi"> 0 </td>'+
							'<td class="tdTextInCenterAi"> 0 </td>'+
						'</tr>'
				);
				
				function reset () {
					$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
					alertify.set({
						 delay : 2000,
					});
				}// end function
				reset();
				alertify.error('Error! Please check the salary history.');
				return false;
				
				//console.log(data);
			}else {
				
				$('#Salary_Increase_Update_HR_first').attr('disabled', false);
				
				 $.each(data, function(i, basic_salary){
					 
					 $('#salary_increase_history_list > tbody').append(
							'<tr id="salary_listings">'+
								'<td class="tdTextInCenterAi"> '+data[i].basic_salary+' </td>'+
								'<td class="tdTextInCenterAi"> '+data[i].other_allowance+' </td>'+
								'<td class="tdTextInCenterAi"> '+data[i].total_salary+' </td>'+
								'<td class="tdTextInCenterAi"> '+data[i].effectivity_date+' </td>'+
							'</tr>'+	
							'<tr>'	
					 );
					 
				 });// end each
				 
				//console.log(data);
			}
			
		}); // end done
		
	}// end function
	// This will display the list of salary history
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the encoder details
	function encoder_details($tcode,$query){
		
		console.log($query); // Display the current query
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		$('#salary_increase_encoder_details_'+$query+' > thead').empty();
    		$('#salary_increase_encoder_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="4">Encoder details <span class="muted">- '+$tcode+'</span></th>'+
						'<input type="hidden" id="hidden_salary_increase_tcode_'+$query+'" value="'+$tcode+'" />'+
					'</tr>'
    		);
    		
    		$('#salary_increase_encoder_details_'+$query+' > tbody').empty();
    		$('#salary_increase_encoder_details_'+$query+' > tbody').append(
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
    		url: "../ajax/controller/employee_request/salary_increase_request_details.php",
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
    		
    		var salary_increase_request_notes = $.parseJSON(msg);
    		
    		$('#salary_increase_employee_details_'+$query+' > thead').empty();
    		$('#salary_increase_employee_details_'+$query+' > thead').append(
    				'<tr>'+
						'<th colspan="3">Employee details</th>'+
					'</tr>'
    		);
    		
    		$('#salary_increase_employee_details_'+$query+' > tbody').empty();
    		$('#salary_increase_employee_details_'+$query+' > tbody').append(
    				'<tr>'+
						'<td><strong>Emp.ID</strong><br> '+employee_id['employee_id']+'  </td>'+
						'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
						'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
						'<td><strong>Nationality</strong><br> '+employee_nationality['employee_nationality']+' </td>'+
						'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_filename['request_file_filename']+' </a></td>'+
					'</tr>'+															
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+salary_increase_request_notes['salary_increase_request_notes']+' </td>'+
					'</tr>'	
    		);
    		
    	}); //  end done
	
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr first details
	function salary_increase_hr_first($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_first_update_by = $.parseJSON(msg);
    		var hr_first_encoder_name = $.parseJSON(msg);
    		var hr_first_update_date = $.parseJSON(msg);
    		var hr_first_notes = $.parseJSON(msg);
    		var hr_first_days = $.parseJSON(msg);
    		var hr_first_file_path = $.parseJSON(msg);
    		var hr_first_file_path_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#salary_increase_task_hrfirst > thead').empty();
	    		$('#salary_increase_task_hrfirst > thead').append(
	    				'<tr>'+
							'<th colspan="3">HR First  <span class="pull-right salaryIncreaseHrFirstEditInApproval"><i class="icon-large icon-pencil"></i></span></th>'+
						'</tr>'
	    		);
    		}else {
    			$('#salary_increase_task_hrfirst > thead').empty();
	    		$('#salary_increase_task_hrfirst > thead').append(
	    				'<tr>'+
							'<th colspan="3">HR First   </th>'+
						'</tr>'
	    		);
    		}
    		
    		$('#salary_increase_task_hrfirst > tbody').empty();
    		$('#salary_increase_task_hrfirst > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+hr_first_update_by['hr_first_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+hr_first_encoder_name['hr_first_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+hr_first_update_date['hr_first_update_date']+' </td>'+
					'</tr>'+																
					'<tr>'+
					    '<td><strong>Elapsed</strong><br> '+hr_first_days['hr_first_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+hr_first_file_path['hr_first_file_path']+'" target="_blank"> '+hr_first_file_path_filename['hr_first_file_path_filename']+' </a></td>'+
					'</tr>'+
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+hr_first_notes['hr_first_notes']+' </td>'+
					'</tr>'						
						
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.salaryIncreaseHrFirstEditInApproval').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.salaryIncreaseHrFirstEditInApproval').click(function() {
    			
    			$('#salary_increase_hr_first_editing_on_approval_tab').empty();
    			$('#salary_increase_hr_first_editing_on_approval_tab').append(
																											
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="salaryIncreaseHrFirstNotesInApproval">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="salaryIncreaseHrFirstNotesInApproval"></textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+												
						
						'<div class="row-fluid">'+
						  '<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="salaryIncreaseHrFirstAttachmentInApproval">Attachment</label>'+
								'<div class="controls">'+
									'<input type="file" id="salaryIncreaseHrFirstAttachmentInApproval" accept=".pdf, .doc, .docx">'+
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
    			
    			$('#salaryIncreaseHrFirstNotesInApproval').wysihtml5();
    			$('#salaryIncreaseHrFirstNotesInApproval').data("wysihtml5").editor.setValue();
 	    		$('#salaryIncreaseHrFirstNotesInApproval').val(hr_first_notes['hr_first_notes']);
    			
    	    	$('#salary_increase_task_hrfirst').addClass('hideContentAi');
    	    	$("#salaryIncreaseHrFirstUpdateInApprovalTable").removeClass('hideContentAi');
    	    });	
    		
    	}); //  end done
	
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the approval details
	function salary_increase_approval($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_second_update_by = $.parseJSON(msg);
    		var hr_second_encoder_name = $.parseJSON(msg);
    		var hr_second_update_date = $.parseJSON(msg);
    		var hr_second_notes = $.parseJSON(msg);
    		var hr_second_days = $.parseJSON(msg);
    		var hr_second_file_path = $.parseJSON(msg);
    		var hr_second_file_path_filename = $.parseJSON(msg);
    		
    		var salaryCurrent_basic_salary = $.parseJSON(msg);
    		var salaryCurrent_other_allowance = $.parseJSON(msg);
    		var salaryCurrent_total_salary = $.parseJSON(msg);
    		var salaryCurrent_effectivity_date = $.parseJSON(msg);
    		
    		// Without comma
    		var Current_basic_salary = $.parseJSON(msg);
    		var Current_other_allowance = $.parseJSON(msg);
    		var Current_total_salary = $.parseJSON(msg);
    		
    		var salaryCurrent_id = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#salary_increase_task_approval > thead').empty();
	    		$('#salary_increase_task_approval > thead').append(
	    				'<tr>'+
							'<th colspan="3">Approval  <span class="pull-right salaryIncreaseApprovalEditInHrFinal"><i class="icon-large icon-pencil"></i></span></th>'+
						'</tr>'
	    		);
    		}else {
    			$('#salary_increase_task_approval > thead').empty();
	    		$('#salary_increase_task_approval > thead').append(
	    				'<tr>'+
							'<th colspan="3">Approval  </th>'+
						'</tr>'
	    		);
    		}
    		
    		$('#salary_increase_task_approval > tbody').empty();
    		$('#salary_increase_task_approval > tbody').append(
    				'<tr>'+
	    				'<td><strong>Employee ID</strong><br> '+hr_second_update_by['hr_second_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+hr_second_encoder_name['hr_second_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+hr_second_update_date['hr_second_update_date']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Basic salary</strong><br> '+salaryCurrent_basic_salary['salaryCurrent_basic_salary']+' </td>'+
						'<td><strong>Other allowance</strong><br> '+salaryCurrent_other_allowance['salaryCurrent_other_allowance']+' </td>'+
						'<td><strong>Total salary</strong><br> '+salaryCurrent_total_salary['salaryCurrent_total_salary']+' </td>'+
					'</tr>'+															
					'<tr>'+
						'<td><strong>Effectivity date</strong><br> '+salaryCurrent_effectivity_date['salaryCurrent_effectivity_date']+' </td>'+
						'<td><strong>Elapsed</strong><br> '+hr_second_days['hr_second_days']+' </td>'+
						'<td><strong>Attachment</strong><br><a href="'+hr_second_file_path['hr_second_file_path']+'" target="_blank"> '+hr_second_file_path_filename['hr_second_file_path_filename']+' </a></td>'+
					'</tr>'+	
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+hr_second_notes['hr_second_notes']+' </td>'+
					'</tr>'
    		);
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.salaryIncreaseApprovalEditInHrFinal').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		$( '.salaryIncreaseApprovalEditInHrFinal').click(function() {
    			
    			$('#salary_increase_approval_editing_on_hr_final_tab').empty();
    			$('#salary_increase_approval_editing_on_hr_final_tab').append(
    					'<div class="row-fluid">'+
							'<div class="span3">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="salaryIncreaseApprovalBasicSalaryInHrFinal">Basic salary</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="salaryIncreaseApprovalBasicSalaryInHrFinal" value="'+Current_basic_salary['Current_basic_salary']+'" readonly>'+
										'<input type="hidden" id="salaryID" value="'+salaryCurrent_id['salaryCurrent_id']+'" />'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span3">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="salaryIncreaseApprovalAllowanceInHrFinal">Other allowance</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="salaryIncreaseApprovalAllowanceInHrFinal" value="'+Current_other_allowance['Current_other_allowance']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span3">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="salaryIncreaseApprovalTotalSalaryInHrFinal">Total salary</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="salaryIncreaseApprovalTotalSalaryInHrFinal" value="'+Current_total_salary['Current_total_salary']+'" readonly>'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span3">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="salaryIncreaseApprovalEffectivityInHrFinal">Effectivity date</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level gregorianDatepicker" id="salaryIncreaseApprovalEffectivityInHrFinal" value="'+salaryCurrent_effectivity_date['salaryCurrent_effectivity_date']+'" onkeydown="return false">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+																		
						'</div>'+																															
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="salaryIncreaseApprovalNotesInHrFinal">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="salaryIncreaseApprovalNotesInHrFinal"> </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+																
						'<div class="row-fluid">'+
						  '<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="salaryIncreaseApprovalAttachmentInHrFinal">Attachment</label>'+
								'<div class="controls">'+
									'<input type="file" id="salaryIncreaseApprovalAttachmentInHrFinal" accept=".pdf, .doc, .docx">'+
								'</div> <!-- /controls -->'+	
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						  '<div class="span8">'+
							'<div class="control-group">'+											
								'<label class="control-label"> &nbsp; </label>'+
								'<div class="controls">'+
									'<a href="'+hr_second_file_path['hr_second_file_path']+'" target="_blank"> '+hr_second_file_path_filename['hr_second_file_path_filename']+' </a>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+																	  
						'</div>'
    			);
    			
    			// This will automatically compute the total salary on change at other allowance
    	    	$('#salaryIncreaseApprovalAllowanceInHrFinal').on('input', function(){
    	    		 var salary_other_allowance = $(this).val();
    	    		 var salary_basic = $('#salaryIncreaseApprovalBasicSalaryInHrFinal').val();
    	    		 
    	    		 var regx = /[0-9]/;
    	    		 if (!regx.test(salary_other_allowance) || salary_other_allowance.length == '') {
    	    			 
    	    			 $('#Salary_Increase_Update_Approval_On_HR_Final').attr('disabled', true);
    	    			 
    	    			 function reset () {
    						  $("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
    						  alertify.set({
    							  delay : 2000,
    						  });
    					  }// end function
    					  reset();
    					  alertify.error('Error! Other allowance should be numeric and not empty.');
    					  return false;
    	    		 }else {
    	    			 $('#Salary_Increase_Update_Approval_On_HR_Final').attr('disabled', false);
    	    			 
    	    			 var total_salary = parseInt(salary_other_allowance) + parseInt(salary_basic);
    	    			 $('#salaryIncreaseApprovalTotalSalaryInHrFinal').val(total_salary);
    	    			 //console.log(total_salary);
    	    		 }
    	    	}); // end
    	    	// This will automatically compute the total salary on change at other allowance
    			
    			//datepicker start
    			var gregorianCalendarSI_HRFinal = $.calendars.instance('gregorian');
    			
    			$('.gregorianDatepicker').calendarsPicker({
    				calendar: gregorianCalendarSI_HRFinal,
    				dateFormat: 'd/m/yyyy',
    			});	
    			//datepicker end	
    			
    			$('#salaryIncreaseApprovalNotesInHrFinal').wysihtml5();
    			$('#salaryIncreaseApprovalNotesInHrFinal').data("wysihtml5").editor.setValue();
 	    		$('#salaryIncreaseApprovalNotesInHrFinal').val(hr_second_notes['hr_second_notes']);
    			
    	    	$('#salary_increase_task_approval').addClass('hideContentAi');
    	    	$("#salaryIncreaseApprovalUpdateInHrFinalTable").removeClass('hideContentAi');
    	    });	
    		
    	}); //  end done
	
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr final details
	function salary_increase_hr_final($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_third_update_by = $.parseJSON(msg);
    		var hr_third_encoder_name = $.parseJSON(msg);
    		var hr_third_update_date = $.parseJSON(msg);
    		var hr_third_notes = $.parseJSON(msg);
    		var hr_third_days = $.parseJSON(msg);
    		var hr_third_file_path = $.parseJSON(msg);
    		var hr_third_file_path_filename = $.parseJSON(msg);
    		
    		$('#salary_increase_task_hrfinal > thead').empty();
    		$('#salary_increase_task_hrfinal > thead').append(
    				'<tr>'+
						'<th colspan="3">HR Final</th>'+
					'</tr>'
    		);
    		
    		$('#salary_increase_task_hrfinal > tbody').empty();
    		$('#salary_increase_task_hrfinal > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+hr_third_update_by['hr_third_update_by']+' </td>'+
						'<td><strong>Updated by</strong><br> '+hr_third_encoder_name['hr_third_encoder_name']+' </td>'+
						'<td><strong>Date</strong><br> '+hr_third_update_date['hr_third_update_date']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Elapsed</strong><br> '+hr_third_days['hr_third_days']+' </td>'+
						'<td colspan="2"><strong>Attachment</strong><br><a href="'+hr_third_file_path['hr_third_file_path']+'" target="_blank"> '+hr_third_file_path_filename['hr_third_file_path_filename']+' </a></td>'+
					'</tr>'+	
					'<tr>'+
						'<td colspan="3"><strong>Notes</strong><br> '+hr_third_notes['hr_third_notes']+' </td>'+
					'</tr>'		
    		);
    		
    	}); //  end done
	
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/

	//salaryIncreaseHrFirst start
	$('#salaryIncreaseHrFirstTable').removeClass('hideContentAi');
	
	$('#listOfsalaryIncreaseRequestHrFirst tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#salaryIncreaseHrFirstNotes').data("wysihtml5").editor.setValue();
		$('#salaryIncreaseHrFirstNotes').val('');
		$('#salaryIncreaseHrFirstAttachment').val('');
		
		var table = $('#listOfsalaryIncreaseRequestHrFirst').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		var eid = rowData[0];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		salaryHistory(eid); // Display the salary increase history
		
		encoder_details(tcodeid,'hrfirst'); // Display the Encoder details
		employee_details(tcodeid,'hrfirst'); // Display the Employee details
		
		$('#salaryIncreaseHrFirstTable').addClass('hideContentAi');
    	$("#salaryIncreaseHrFirstDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToSalaryIncreaseHrFirst, a[href="#salaryIncreaseHrFirst"]').click(function() {
    	$('#salaryIncreaseHrFirstDetails').addClass('hideContentAi');
    	$("#salaryIncreaseHrFirstTable").removeClass('hideContentAi');
    });	
	
    showSalaryIncreaseTables('#listOfsalaryIncreaseRequestHrFirst', 'salary_hr_first') // This will display the HR First table lists
    
	$('#salaryIncreaseHrFirstNotes').wysihtml5();
    
    $('#Salary_Increase_Update_HR_first').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_salary_increase_tcode_hrfirst').val();
    	
    	var salary_increase_attach_file = $('#salaryIncreaseHrFirstAttachment').val();
    	
    	var salary_increase_attach_fileLength = salary_increase_attach_file.length;
    	
    	if(salary_increase_attach_fileLength > 0){
    		
    		var salary_increase_attach_file = document.getElementById('salaryIncreaseHrFirstAttachment');
    		
    		if(salary_increase_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', salary_increase_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_salary_increase_request_attach_file.php?tcode='+tcode+'&path=salary_increase_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_salary_increase_tcode_hrfirst').val(),
			'salary_increase_hr_first_notes':$('#salaryIncreaseHrFirstNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_update_hr_first.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToSalaryIncreaseHrFirst").attr("disabled", true);
    			$("#Salary_Increase_Update_HR_first").attr("disabled", true);
    		},
    		complete: function(){
    			showSalaryIncreaseTables('#listOfSalaryIncreaseRequestApproval', 'salary_approval') // This will display the Approval table lists
    			$("#goBackToSalaryIncreaseHrFirst").attr("disabled", false);
    			$("#Salary_Increase_Update_HR_first").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		showSalaryIncreaseTables('#listOfsalaryIncreaseRequestHrFirst', 'salary_hr_first') // This will display the HR First table lists
    		
    		$('#salaryIncreaseHrFirstDetails').addClass('hideContentAi');
    		$("#salaryIncreaseHrFirstTable").removeClass('hideContentAi');
    		
    		counterSalaryIncreaseRequest(); // This will display the number of pending rquest on the TABS
    		
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
    
	//salaryIncreaseHrFirst HR end
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	//salaryIncreaseApproval start
	$('#salaryIncreaseApprovalTable').removeClass('hideContentAi');
	
	$('#listOfSalaryIncreaseRequestApproval tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#salaryIncreaseApprovalAllowance').val('');
    	$('#salaryIncreaseApprovalEffectivity').val('');
    	$('#salaryIncreaseApprovalAttachment').val('');
		$('#salaryIncreaseApprovalNotes').data("wysihtml5").editor.setValue();
		$('#salaryIncreaseApprovalNotes').val('');
		
		var table = $('#listOfSalaryIncreaseRequestApproval').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		var eid = rowData[0];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		salaryHistory(eid); // Display the salary increase history
		
		encoder_details(tcodeid,'approval'); // Display the Encoder details
		employee_details(tcodeid,'approval'); // Display the Employee details
		salary_increase_hr_first(tcodeid,'approval','True'); // Display the HR First
		
		$('#salaryIncreaseApprovalTable').addClass('hideContentAi');
    	$("#salaryIncreaseApprovalDetails").removeClass('hideContentAi');
    	
    	$('#salaryIncreaseApprovalBasicSalary').attr('readonly', true); // Make basic salary readonly
    	$('#salaryIncreaseApprovalTotalSalary').attr('readonly', true); // Make total salary readonly
    	
    	// This will automatically compute the total salary on change at other allowance
    	$('#salaryIncreaseApprovalAllowance').on('input', function(){
    		 var salary_other_allowance = $(this).val();
    		 var salary_basic = $('#salaryIncreaseApprovalBasicSalary').val();
    		 
    		 var regx = /[0-9]/;
    		 if (!regx.test(salary_other_allowance) || salary_other_allowance.length == '') {
    			 
    			 $('#Salary_Increase_Update_Approval').attr('disabled', true);
    			 
    			 function reset () {
					  $("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
					  alertify.set({
						  delay : 2000,
					  });
				  }// end function
				  reset();
				  alertify.error('Error! Other allowance should be numeric and not empty.');
				  return false;
    		 }else {
    			 $('#Salary_Increase_Update_Approval').attr('disabled', false);
    			 
    			 var total_salary = parseInt(salary_other_allowance) + parseInt(salary_basic);
    			 $('#salaryIncreaseApprovalTotalSalary').val(total_salary);
    			 //console.log(total_salary);
    		 }
    	}); // end
    	// This will automatically compute the total salary on change at other allowance
    	
    	// This will get the value of the last basic salary
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_details.php",
    		data: { tcode_id: tcodeid, query: 'approval'}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		// Length of service
    		var employee_contract_date = $.parseJSON(msg);
    		var emp_info_contract_g_date_employed = $.parseJSON(msg);
    		var sDate = employee_contract_date['employee_contract_date'].split('/');
			var sDate_Day = parseInt(sDate[0],10);
			var sDate_Month = parseInt(sDate[1],10);
			var sDate_Year = parseInt(sDate[2],10);
			var sDate_New = sDate_Year+'/'+sDate_Month+'/'+sDate_Day;
			
			// This wll get the current date in Gregorian Calendar
			var gc = $.calendars.instance(); 
			var d = gc.today();
			var y = d.year();
			var m = d.month();
			var d = d.day();
			
			var currentDate = y + "/" + m + "/" + d;
			
    		// This is for the Generate PDF HR Final 
			var salary_increaseApprovedGeneratePdfUrl = "../../tcpdf/hris/pdf_salary_increase_request.php?tcode=" + tcodeid +"& Al Sayegh Group of Companies &los="+difference(Date.parse(currentDate), Date.parse(sDate_New));
    		$("#salary_increase_hrfirst_GeneratePDF").attr("href", salary_increaseApprovedGeneratePdfUrl);
    		// This is for the Generate PDF HR Final
    		
    		var salaryCurrent_total_salary = $.parseJSON(msg);
    		var Current_total_salary = $.parseJSON(msg);
    		
    		$('#salaryIncreaseApprovalBasicSalary').val(Current_total_salary['Current_total_salary']);
    		
    	}); //  end done
    	
    } );

    $( '#goBackToSalaryIncreaseApproval, a[href="#salaryIncreaseApproval"]').click(function() {
    	$('#salaryIncreaseApprovalDetails').addClass('hideContentAi');
    	$("#salaryIncreaseApprovalTable").removeClass('hideContentAi');
    });	
	
    showSalaryIncreaseTables('#listOfSalaryIncreaseRequestApproval', 'salary_approval') // This will display the Approval table lists
    
	$('#salaryIncreaseApprovalNotes').wysihtml5();

	$('#salary_increase_task_hrfirst').removeClass('hideContentAi');
	
    $( '.salaryIncreaseHrFirstUpdateInApproval').click(function() {
    	$('#salaryIncreaseHrFirstUpdateInApprovalTable').addClass('hideContentAi');
    	$("#salary_increase_task_hrfirst").removeClass('hideContentAi');
    }); 
    
    $('#Salary_Increase_Update_HRFirst_On_Approval').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_salary_increase_tcode_approval').val();
    	
    	var salary_increase_attach_file = $('#salaryIncreaseHrFirstAttachmentInApproval').val();
    	
    	var salary_increase_attach_fileLength = salary_increase_attach_file.length;
    	
    	if(salary_increase_attach_fileLength > 0){
    		
    		var salary_increase_attach_file = document.getElementById('salaryIncreaseHrFirstAttachmentInApproval');
    		
    		if(salary_increase_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', salary_increase_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_salary_increase_request_attach_file.php?tcode='+tcode+'&path=salary_increase_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_salary_increase_tcode_approval').val(),
			'hr_notes':$('#salaryIncreaseHrFirstNotesInApproval').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_hr_first_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Salary_Increase_Update_HRFirst_On_Approval").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Salary_Increase_Update_HRFirst_On_Approval").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		salary_increase_hr_first($('#hidden_salary_increase_tcode_approval').val(),'approval','True'); // Display the HR First
    		
    		
    		$('#salaryIncreaseHrFirstUpdateInApprovalTable').addClass('hideContentAi');
        	$("#salary_increase_task_hrfirst").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update hr first on approval tab.');
    }); // end
    
    /*------------------------------- // \\ -------------------------------*/
    
    $('#Salary_Increase_Update_Approval').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_salary_increase_tcode_approval').val();
    	
    	var salary_increase_attach_file = $('#salaryIncreaseApprovalAttachment').val();
    	
    	var salary_increase_attach_fileLength = salary_increase_attach_file.length;
    	
    	if(salary_increase_attach_fileLength > 0){
    		
    		var salary_increase_attach_file = document.getElementById('salaryIncreaseApprovalAttachment');
    		
    		if(salary_increase_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', salary_increase_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_salary_increase_request_attach_file.php?tcode='+tcode+'&path=salary_increase_approval');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_salary_increase_tcode_approval').val(),
			'basic_salary':$('#salaryIncreaseApprovalBasicSalary').val(),
			'allowance':$('#salaryIncreaseApprovalAllowance').val(),
			'total_salary':$('#salaryIncreaseApprovalTotalSalary').val(),
			'effectivity_date':$('#salaryIncreaseApprovalEffectivity').val(),
			'approval_notes':$('#salaryIncreaseApprovalNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_update_approval.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToSalaryIncreaseApproval").attr("disabled", true);
    			$("#Salary_Increase_Update_Approval").attr("disabled", true);
    		},
    		complete: function(){
    			showSalaryIncreaseTables('#listOfsalaryIncreaseRequestHrFinal', 'salary_hr_final') // This will display the Approval table lists
    			$("#goBackToSalaryIncreaseApproval").attr("disabled", false);
    			$("#Salary_Increase_Update_Approval").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterSalaryIncreaseRequest(); // This will display the number of pending rquest on the TABS
    		
    		showSalaryIncreaseTables('#listOfSalaryIncreaseRequestApproval', 'salary_approval') // This will display the Approval table lists
    		
    		$('#salaryIncreaseApprovalDetails').addClass('hideContentAi');
        	$("#salaryIncreaseApprovalTable").removeClass('hideContentAi');
    		
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
    	
    	//console.log('Update approval');
    }); // end
   
	//salaryIncreaseApproval end	
    
    /*--------------------------------------------------------------------------------------------------------------*/
    
	//salaryIncreaseHrFinal start
	$('#salaryIncreaseHrFinalTable').removeClass('hideContentAi');
	
	$('#listOfsalaryIncreaseRequestHrFinal tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#salaryIncreaseHrFinalAttachment').val('');
		$('#salaryIncreaseHrFinalNotes').data("wysihtml5").editor.setValue();
		$('#salaryIncreaseHrFinalNotes').val('');
		
		var table = $('#listOfsalaryIncreaseRequestHrFinal').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		var eid = rowData[0];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		salaryHistory(eid); // Display the salary increase history
		
		encoder_details(tcodeid,'hrfinal'); // Display the Encoder details
		employee_details(tcodeid,'hrfinal'); // Display the Employee details
		salary_increase_hr_first(tcodeid,'hrfinal','False'); // Display the HR First
		salary_increase_approval(tcodeid,'hrfinal','True'); // Display the Approval
		
		$('#salaryIncreaseHrFinalTable').addClass('hideContentAi');
    	$("#salaryIncreaseHrFinalDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToSalaryIncreaseHrFinal, a[href="#salaryIncreaseHrFinal"]').click(function() {
    	$('#salaryIncreaseHrFinalDetails').addClass('hideContentAi');
    	$("#salaryIncreaseHrFinalTable").removeClass('hideContentAi');
    });	
    
    showSalaryIncreaseTables('#listOfsalaryIncreaseRequestHrFinal', 'salary_hr_final') // This will display the Approval table lists
	
	$('#salaryIncreaseHrFinalNotes').wysihtml5();

	$('#salary_increase_task_approval').removeClass('hideContentAi');
	
    $( '.salaryIncreaseApprovalUpdateInHrFinal').click(function() {
    	$('#salaryIncreaseApprovalUpdateInHrFinalTable').addClass('hideContentAi');
    	$("#salary_increase_task_approval").removeClass('hideContentAi');
    });       
    
    $('#Salary_Increase_Update_Approval_On_HR_Final').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_salary_increase_tcode_hrfinal').val();
    	
    	var salary_increase_attach_file = $('#salaryIncreaseApprovalAttachmentInHrFinal').val();
    	
    	var salary_increase_attach_fileLength = salary_increase_attach_file.length;
    	
    	if(salary_increase_attach_fileLength > 0){
    		
    		var salary_increase_attach_file = document.getElementById('salaryIncreaseApprovalAttachmentInHrFinal');
    		
    		if(salary_increase_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', salary_increase_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_salary_increase_request_attach_file.php?tcode='+tcode+'&path=salary_increase_approval');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_salary_increase_tcode_hrfinal').val(),
			'salary_history_id':$('#salaryID').val(),
			'basic_salary':$('#salaryIncreaseApprovalBasicSalaryInHrFinal').val(),
			'allowance':$('#salaryIncreaseApprovalAllowanceInHrFinal').val(),
			'total_salary':$('#salaryIncreaseApprovalTotalSalaryInHrFinal').val(),
			'effectivity_date':$('#salaryIncreaseApprovalEffectivityInHrFinal').val(),
			'approval_notes':$('#salaryIncreaseApprovalNotesInHrFinal').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_approval_update.php",
    		data: formData,
    		beforeSend: function(){
    			$("#Salary_Increase_Update_Approval_On_HR_Final").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Salary_Increase_Update_Approval_On_HR_Final").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		salary_increase_approval($('#hidden_salary_increase_tcode_hrfinal').val(),'hrfinal','True'); // Display the Approval
    		
    		$('#salaryIncreaseApprovalUpdateInHrFinalTable').addClass('hideContentAi');
        	$("#salary_increase_task_approval").removeClass('hideContentAi');
    		
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
    	
    	//var salaryHistory_ID = $('#salaryID').val();
    	//console.log('Update approval on hr final tab -> '+salaryHistory_ID);
    }); // end
    
    /*------------------------------- // \\ -------------------------------*/
    
    $('#Salary_Increase_Update_HR_Final').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_salary_increase_tcode_hrfinal').val();
    	
    	var salary_increase_attach_file = $('#salaryIncreaseHrFinalAttachment').val();
    	
    	var salary_increase_attach_fileLength = salary_increase_attach_file.length;
    	
    	if(salary_increase_attach_fileLength > 0){
    		
    		var salary_increase_attach_file = document.getElementById('salaryIncreaseHrFinalAttachment');
    		
    		if(salary_increase_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', salary_increase_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_salary_increase_request_attach_file.php?tcode='+tcode+'&path=salary_increase_hrfinal');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_salary_increase_tcode_hrfinal').val(),
			'hrfinal_notes':$('#salaryIncreaseHrFinalNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/salary_increase_request_update_hrfinal.php",
    		data: formData,
    		beforeSend: function(){
    			$("#goBackToSalaryIncreaseHrFinal").attr("disabled", true);
    			$("#Salary_Increase_Update_HR_Final").attr("disabled", true);
    		},
    		complete: function(){
    			showSalaryIncreaseTables('#listOfSalaryIncreaseRequestClosed', 'salary_closed') // This will display the Closed table lists
    			$("#goBackToSalaryIncreaseHrFinal").attr("disabled", false);
    			$("#Salary_Increase_Update_HR_Final").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		counterSalaryIncreaseRequest(); // This will display the number of pending rquest on the TABS
    		
    		showSalaryIncreaseTables('#listOfsalaryIncreaseRequestHrFinal', 'salary_hr_final') // This will display the Approval table lists
    		
    		$('#salaryIncreaseHrFinalDetails').addClass('hideContentAi');
        	$("#salaryIncreaseHrFinalTable").removeClass('hideContentAi');
    		
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
    	
    });
	//salaryIncreaseHrFinal end    
   
    /*--------------------------------------------------------------------------------------------------------------*/
  
	// Closed start
	$('#salaryIncreaseClosedTable').removeClass('hideContentAi');
	
	$('#listOfSalaryIncreaseRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfSalaryIncreaseRequestClosed').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		var eid = rowData[0];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		salaryHistory(eid); // Display the salary increase history
		
		encoder_details(tcodeid,'closed'); // Display the Encoder details
		employee_details(tcodeid,'closed'); // Display the Employee details
		salary_increase_hr_first(tcodeid,'closed','False'); // Display the HR First
		salary_increase_approval(tcodeid,'closed','False'); // Display the Approval
		salary_increase_hr_final(tcodeid,'closed'); // Display the HR Final
		
		$('#salaryIncreaseClosedTable').addClass('hideContentAi');
    	$("#salaryIncreaseClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToSalaryIncreaseClosedTable, a[href="#salaryIncreaseClosed"]').click(function() {
    	$('#salaryIncreaseClosedDetails').addClass('hideContentAi');
    	$("#salaryIncreaseClosedTable").removeClass('hideContentAi');
    });	
    
    showSalaryIncreaseTables('#listOfSalaryIncreaseRequestClosed', 'salary_closed') // This will display the Closed table lists
	
	// Closed end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
        
	// Declined start
	$('#salaryIncreaseDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfSalaryIncreaseRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfSalaryIncreaseRequestDeclined').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		var eid = rowData[0];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[9] == 0){ // to make not clickable row
			return false;
		}
		
		salaryHistory(eid); // Display the salary increase history
		
		encoder_details(tcodeid,'declined'); // Display the Encoder details
		employee_details(tcodeid,'declined'); // Display the Employee details
		salary_increase_hr_first(tcodeid,'declined','False'); // Display the HR First
		salary_increase_approval(tcodeid,'declined','False'); // Display the Approval
		salary_increase_hr_final(tcodeid,'declined'); // Display the HR Final
		
		$('#salaryIncreaseDeclinedTable').addClass('hideContentAi');
    	$("#salaryIncreaseDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToSalaryIncreaseDeclinedTable, a[href="#salaryIncreaseDeclined"]').click(function() {
    	$('#salaryIncreaseDeclinedDetails').addClass('hideContentAi');
    	$("#salaryIncreaseDeclinedTable").removeClass('hideContentAi');
    });	
	
    showSalaryIncreaseTables('#listOfSalaryIncreaseRequestDeclined', 'salary_declined') // This will display the Declined table lists
	// Declined end	   
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#salaryIncreaseHrFirstTableH').addClass('hideContentAi');
		$('#Salary_Increase_Update_HR_first').addClass('hideContentAi');

		$('#salaryIncreaseApprovalTableH').addClass('hideContentAi');
		$('#salary_increase_hrfirst_GeneratePDF').addClass('hideContentAi');
		$('#Salary_Increase_Update_Approval').addClass('hideContentAi');

		$('#salaryIncreaseHrFinalTableH').addClass('hideContentAi');
		$('#Salary_Increase_Update_HR_Final').addClass('hideContentAi');
		
	}
	//disable button and update end    

} );
