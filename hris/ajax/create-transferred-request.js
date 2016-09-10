$(document).ready(function(){
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showTransferredTables(table_name, task){
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
			"ajax": "../ajax/controller/create_request/transferred_pending_list.php?request_type="+task,
			"iDisplayLength": 10,
			"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the details for the PDF
	function transferred_pdf_details($tcode,$query){
		
		console.log($tcode+' '+$query); // Display the current query
		
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
			var employee_request_reporting_date = $.parseJSON(msg);
			var employee_request_notes = $.parseJSON(msg);
			
			$('#transferred_pdf_details > tbody').empty();
			$('#transferred_pdf_details > tbody').append(
					'<tr>'+
						'<td><strong>Employee ID</strong><br> '+employee_id['employee_id']+' </td>'+
						'<input type="hidden" id="hidden_transferred_pdf_tcode_'+$query+'" value="'+$tcode+'" />'+
						'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
						'<td><strong>Project (Previous)</strong><br> '+employee_pname['employee_pname']+' </td>'+
						'<td><strong>Position</strong><br> '+employee_position['employee_position']+' </td>'+
					'</tr>'+
					'<tr>'+
						'<td><strong>Job-Site Reporting Date</strong><br> '+employee_request_reporting_date['employee_request_reporting_date']+' </td>'+
						'<td colspan="4"><strong>Notes</strong><br> '+employee_request_notes['employee_request_notes']+' </td>'+
					'</tr>'
					);
			
		}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	//form start
	$('#transferredNotes').wysihtml5();
	//form end
	
	//pdf start
	$('#transferredListOfPdfTable').removeClass('hideContentAi');
	
	$('#transferredListOfPdf tbody').on( 'click', 'tr', function () {
		
		var table = $('#transferredListOfPdf').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[7];
		
		// This is for the Generate PDF HR Final 
		var transferred_GeneratePDFUrl = "../../tcpdf/hris/pdf_reporting_date_transferred.php?tcode=" + tcodeid;
		$("#transferred_GeneratePDF").attr("href", transferred_GeneratePDFUrl);    		
		// This is for the Generate PDF HR Final
		
		transferred_pdf_details(tcodeid,'transferred_pdf');
		
		$('#transferredListOfPdfTable').addClass('hideContentAi');
    	$("#transferredListOfPdfDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToTransferredListOfPdf').click(function() {
    	$('#transferredListOfPdfDetails').addClass('hideContentAi');
    	$("#transferredListOfPdfTable").removeClass('hideContentAi');
    });	
    
    showTransferredTables('#transferredListOfPdf', 'Transferred') // This will display the HR First table lists
	
    /* ------------------------------------------------------------------------------------------------------ */
	
	// This will fetch the employee details
	$('#transferredEmployeeID').keyup(function(){
		
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
			
			$('#transferredEmpName').val(create_employee_name['create_employee_name']);
			$('#transferredEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#transferredEmpPosition').val(create_employee_position['create_employee_position']);
			
		});// end
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This check for existing request
	$('#transferredEmployeeID').focusout(function(){
		var employee_id_check = $(this).val();
		
		//alert(employee_id_check);
		$.ajax({
			type: "POST",
			url: "../ajax/controller/create_request/is_existing_request_transferred.php",
			data: { employee_id: employee_id_check,
				request_type: 'transferred'
			}
		})
		.done(function( msg ){
			var request_status = $.parseJSON(msg);
			var requestStatus = request_status['request_status'];
			
			if(requestStatus == 'not_in_project_list'){
				//console.log(requestStatus);
				$("#transferredPending").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			} else if(requestStatus == 'no_transfer_request'){
				//console.log(requestStatus);
				$("#transferredPending").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' has no transfer request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			} else if(requestStatus == 'have_pending_transferred_pdf'){
				//console.log(requestStatus);
				$("#transferredPending").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' have a pending PDF transferred request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}else {
				//console.log(requestStatus);
				$("#transferredPending").attr("disabled", false);
			}
			
			//console.log(requestStatus);
			
		});//End .done
	});	//End .keyup
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This is to validate the required fields
	$("#transferredFormPending").validate({
		ignore: "#transferredAttachment, #transferredNotes",
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
	    	   transferredEmployeeID: {
	    		   required: true,
	    		   number: true
	    	   },
	    	   transferredJobSiteReportingDate: "required"
	       },
	       messages: {
	    	   transferredEmployeeID: "Please specify employee id",
	    	   transferredJobSiteReportingDate: "Please select date"
	       }
	})
	
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will insert new request
	$('#transferredPending').on('click', function(){
		
		// This will run if all the required fields are valid
		if($("#transferredFormPending").valid()){
			
			var formData = {
					'employee_id':$('#transferredEmployeeID').val(),
					'transferred_reporting_date':$('#transferredJobSiteReportingDate').val(),
					'transferred_notes':$('#transferredNotes').val()
			}; // end formData
			
			$.ajax({
			 	type: "POST",
			 	url: "../ajax/controller/create_request/create_transferred_pending_request.php",
			 	data: formData,
			 	beforeSend: function(){
			 		$("#transferredPending").attr("disabled", true);
			 	},
			 	complete: function(){
			 		showTransferredTables('#transferredListOfPdf', 'Transferred') // This will display the HR First table lists
			 		$("#transferredPending").attr("disabled", false);
			 	},
			 	dataType: 'json',
			 	encode: true
			})// end ajax
			
			.done(function(data){
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#transferredNotes').data("wysihtml5").editor.setValue();
				$('#transferredNotes').val('');
				
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
			
			//console.log('Insert transferred request');
		} // end if
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This is to validate the required fields
	$("#transferredPdfFormValidation").validate({
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
	    	   transferredReportingPdf: "required"
	       },
	       messages: {
	    	   transferredReportingPdf: "Please select PDF file"
	       }
	})
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will send the request to hr list
	$('#transferredUpdate').on('click', function(){
		
		// This will run if all the required fields are valid
		if($("#transferredPdfFormValidation").valid()){
			
			var formData = {
					'tcode_id':$('#hidden_transferred_pdf_tcode_transferred_pdf').val(),
			}; // end formData
			
			$.ajax({
			 	type: "POST",
			 	url: "../ajax/controller/create_request/create_transferred_pdf_update.php",
			 	data: formData,
			 	beforeSend: function(){
			 		$("#transferredUpdate").attr("disabled", true);
			 	},
			 	complete: function(){
			 		$("#transferredUpdate").attr("disabled", false);
			 	},
			 	dataType: 'json',
			 	encode: true
			})// end ajax
			
			.done(function(data){
				
				showTransferredTables('#transferredListOfPdf', 'Transferred') // This will display the HR First table lists
				
				$('#transferredListOfPdfDetails').addClass('hideContentAi');
		    	$("#transferredListOfPdfTable").removeClass('hideContentAi');
		    	
		    	// This will attach file
		    	var tcode = data.message;
		    	
		    	var transferred_pdf_attach_file = $('#transferredReportingPdf').val();
				
				var transferred_pdf_attach_fileLength = transferred_pdf_attach_file.length;
				
				if(transferred_pdf_attach_fileLength > 0){
					
					var transferred_pdf_attach_file = document.getElementById('transferredReportingPdf');
					
					if(transferred_pdf_attach_file.length === 0){
						 return;
					}// end if
					
					var data = new FormData();
					
					data.append('SelectedFile', transferred_pdf_attach_file.files[0]);
					
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
				 
					request.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+tcode+'&requestType=transferred_pdf');
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
			
			//console.log('Update Transferred');
			
		}// end if
		
		//console.log('Update Transferred');
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
    
});