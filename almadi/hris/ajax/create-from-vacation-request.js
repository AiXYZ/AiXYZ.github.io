$(document).ready(function(){
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showFromVacationTables(table_name, task){
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
			"ajax": "../ajax/controller/create_request/from_vacation_pending_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the details for the pdf
	function from_vacation_pdf_details($tcode,$query){
		
		console.log($tcode+' '+$query); // Display the current query
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/from_vacation_request_details.php",
    		data: { FromV_tcode_id: $tcode, FromV_query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var FromV_employee_id = $.parseJSON(msg);
    		var FromV_employee_name = $.parseJSON(msg);
    		var FromV_employee_pname = $.parseJSON(msg);
    		var FromV_employee_position = $.parseJSON(msg);
    		
    		var FromV_reporting_date = $.parseJSON(msg);
    		var FromV_file_path = $.parseJSON(msg);
    		var FromV_file_name = $.parseJSON(msg);
    		var FromV_notes = $.parseJSON(msg);
    		
    		$('#from_vacation_pdf_details > tbody').empty();
    		$('#from_vacation_pdf_details > tbody').append(
    				'<tr>'+
						'<td><strong>Employee ID</strong><br> '+FromV_employee_id['FromV_employee_id']+' </td>'+
						'<input type="hidden" id="hidden_from_vacation_pdf_tcode_'+$query+'" value="'+$tcode+'" />'+
						'<td><strong>Name</strong><br> '+FromV_employee_name['FromV_employee_name']+' </td>'+
						'<td><strong>Project</strong><br> '+FromV_employee_pname['FromV_employee_pname']+' </td>'+
						'<td><strong>Position</strong><br> '+FromV_employee_position['FromV_employee_position']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Job-Site Reporting Date</strong><br> '+FromV_reporting_date['FromV_reporting_date']+' </td>'+
						'<td colspan="4"><strong>Notes</strong><br> '+FromV_notes['FromV_notes']+' </td>'+
					'</tr>'	
    				);
    		
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	//form start
	$('#fromVacationNotes').wysihtml5();
	//form end
	
	//pdf start
	$('#fromVacationListOfPdfTable').removeClass('hideContentAi');
	
	$('#fromVacationListOfPdf tbody').on( 'click', 'tr', function () {
		
		var table = $('#fromVacationListOfPdf').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This is for the Generate PDF HR Final 
		var fromVacation_GeneratePDFUrl = "../../tcpdf/hris/pdf_reporting_date_vacation.php?tcode=" + tcodeid;
		$("#fromVacation_GeneratePDF").attr("href", fromVacation_GeneratePDFUrl);    		
		// This is for the Generate PDF HR Final
		
		from_vacation_pdf_details(tcodeid,'FromV_pdf');
		
		$('#fromVacationListOfPdfTable').addClass('hideContentAi');
    	$("#fromVacationListOfPdfDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToFromVacationListOfPdf').click(function() {
    	$('#fromVacationListOfPdfDetails').addClass('hideContentAi');
    	$("#fromVacationListOfPdfTable").removeClass('hideContentAi');
    });	
    
    showFromVacationTables('#fromVacationListOfPdf', 'FromV_hr') // This will display the HR First table lists
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will fetch the employee details
	$('#fromVacationEmployeeID').keyup(function(){
		
		var employeeId = $(this).val();
		//console.log(employeeId);
		
		// Fetch the employee details
		$.ajax({
			type: "POST",
			url: "../ajax/controller/create_request/create_request_employee_details.php",
			data: { employee_id: employeeId }
		})
		
		.done(function(msg){
			var create_employee_name = $.parseJSON(msg);
			var create_employee_pname = $.parseJSON(msg);
			var create_employee_position = $.parseJSON(msg);
			
			$('#fromVacationEmpName').val(create_employee_name['create_employee_name']);
			$('#fromVacationEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#fromVacationEmpPosition').val(create_employee_position['create_employee_position']);
			
		});// end
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This check for existing request
	$('#fromVacationEmployeeID').focusout(function(){
		var employee_id_check = $(this).val();
		//alert(employee_id_check);
		$.ajax({
			type: "POST",
			url: "../ajax/controller/create_request/is_existing_request.php",
			data: { employee_id: employee_id_check,
				request_type: 'from_vacation'
			}
		})
		.done(function( msg ){
			var requestStatus = $.parseJSON(msg);
			rStatus = requestStatus['request_status'];
			//alert(rStatus);
			if(rStatus == 'TRUE'){
				//alert(Existing);
				
				alert('The Employee ID '+employee_id_check+' already have existing request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
				$("#fromVacationPending").attr("disabled", true);
			}
//			}else{
//				//$("#fromVacationPending").attr("enable", false);
//			}
			
			console.log(rStatus);
			var project_list = $.parseJSON(msg);
			projectList = project_list['project_list'];
			  
			if(projectList != 'TRUE'){
				console.log(projectList);
				//$("#fromVacationPending").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}
//			}else {
//				console.log(projectList);
//				//$("#fromVacationPending").attr("enabled", false);
//			}
			
			if(rStatus == 'TRUE' || projectList != 'TRUE'){
				$("#fromVacationPending").attr("disabled", true);
			}else {
				$("#fromVacationPending").attr("disabled", false);
			}
		});//End .done
	});	//End .keyup
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This is to validate the required fields
	$("#fromVacationFormPending").validate({
		ignore: "#fromVacationAttachment, #fromVacationNotes",
		debug: true,
        errorClass:'error help-inline',
        validClass:'success',
        errorElement:'span',
        highlight: function (element, errorClass, validClass) { 
          $(element).parents("div.control-group").addClass('error').removeClass('success'); 

        }, 
        unhighlight: function (element, errorClass, validClass) { 
                $(element).parents(".error").removeClass('error').addClass('success'); 
        },
	       rules: {
	    	   fromVacationEmployeeID: {
	    		   required: true,
	    		   number: true
	    	   },
	    	   fromVacationEntryDate: "required",
	    	   fromVacationContract: "required",
	    	   fromVacationJobSiteReportingDate: "required"
	       },
	       messages: {
	    	   fromVacationEmployeeID: "Please specify employee id",
	    	   fromVacationEntryDate: "Please select date",
	    	   fromVacationContract: "Please select",
	    	   fromVacationJobSiteReportingDate: "Please select date"
	       }
	})
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will insert new request
	$('#fromVacationPending').on('click', function(){
		
		// This will run if all the required fields are valid
		if($("#fromVacationFormPending").valid()){
			
			var formData = {
					'employee_id':$('#fromVacationEmployeeID').val(),
					'fv_entry_date':$('#fromVacationEntryDate').val(),
					'fv_contract':$('#fromVacationContract').val(),
					'fv_reporting_date':$('#fromVacationJobSiteReportingDate').val(),
					'fv_notes':$('#fromVacationNotes').val()
			}; // end formData
			
			$.ajax({
			 	type: "POST",
			 	url: "../ajax/controller/create_request/create_from_vacation_pending_request.php",
			 	data: formData,
			 	beforeSend: function(){
			 		$("#fromVacationPending").attr("disabled", true);
			 	},
			 	complete: function(){
			 		showFromVacationTables('#fromVacationListOfPdf', 'FromV_hr') // This will display the HR First table lists
			 		$("#fromVacationPending").attr("disabled", false);
			 	},
			 	dataType: 'json',
			 	encode: true
			})// end ajax
			
			.done(function(data){
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#fromVacationNotes').data("wysihtml5").editor.setValue();
				$('#fromVacationNotes').val('');
				
				//This will show the ALERT
				function reset () {
					$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
					alertify.set({			
					   delay : 2000,
					});
				}
					
				reset();
				alertify.success('Success! Data inserted on the database.');
				return false;
				
				//console.log(data.message);
				
			}); // end done
			
		} // end if
		
		//console.log('Insert from vacation request');
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This is to validate the required fields
	$("#fromVacationPdfFormValidation").validate({
		debug: true,
        errorClass:'error help-inline',
        validClass:'success',
        errorElement:'span',
        highlight: function (element, errorClass, validClass) { 
          $(element).parents("div.control-group").addClass('error').removeClass('success'); 

        }, 
        unhighlight: function (element, errorClass, validClass) { 
                $(element).parents(".error").removeClass('error').addClass('success'); 
        },
	       rules: {
	    	   fromVacationPdfFile: "required"
	       },
	       messages: {
	    	   fromVacationPdfFile: "Please select PDF file"
	       }
	})
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will send the request to hr list
	$('#fromVacationUpdate').on('click', function(){
		
		// This will run if all the required fields are valid
		if($("#fromVacationPdfFormValidation").valid()){
			
			var formData = {
					'tcode_id':$('#hidden_from_vacation_pdf_tcode_FromV_pdf').val(),
			}; // end formData
			
			$.ajax({
			 	type: "POST",
			 	url: "../ajax/controller/create_request/create_from_vacation_pdf_update.php",
			 	data: formData,
			 	beforeSend: function(){
			 		$("#fromVacationUpdate").attr("disabled", true);
			 	},
			 	complete: function(){
			 		$("#fromVacationUpdate").attr("disabled", false);
			 	},
			 	dataType: 'json',
			 	encode: true
			})// end ajax
			
			.done(function(data){
				
				showFromVacationTables('#fromVacationListOfPdf', 'FromV_hr') // This will display the HR First table lists
				
				$('#fromVacationListOfPdfDetails').addClass('hideContentAi');
		    	$("#fromVacationListOfPdfTable").removeClass('hideContentAi');
				
				// This will attach file
				var tcode = data.message;
				
				var from_vacation_pdf_attach_file = $('#fromVacationPdfFile').val();
				
				var from_vacation_pdf_attach_fileLength = from_vacation_pdf_attach_file.length;
				
				if(from_vacation_pdf_attach_fileLength > 0){
					
					var from_vacation_pdf_attach_file = document.getElementById('fromVacationPdfFile');
					
					if(from_vacation_pdf_attach_file.length === 0){
						 return;
					}// end if
					
					var data = new FormData();
					
					data.append('SelectedFile', from_vacation_pdf_attach_file.files[0]);
					
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
				 
					request.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+tcode+'&requestType=from_vacation_pdf');
			        request.send(data);
					
				}// end if
				
				//This will show the ALERT
				function reset () {
					$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
					alertify.set({			
					   delay : 2000,
					});
				}
					
				reset();
				alertify.success('Success! Data inserted on the database.');
				return false;
				
				//console.log(data.message);
				
			}); // end done
			
			//console.log(tcodePDF);
			
		} // end if
		
		//console.log('Send to HR');
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
    
});