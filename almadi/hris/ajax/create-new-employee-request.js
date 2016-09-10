$(document).ready(function(){
	
	//list start
	function showListOfNewEmployeePdfTables(){
	    var dataTableIqama = $('#newEmployeeListOfPdf').DataTable( {
	    	"fnRowCallback": function( row, data, index ){
				if(jQuery.isEmptyObject(data[2]) || data[2] == 'NULL'){
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
			"ajax": "../ajax/controller/create_request/new_employee_pending_list.php",
			"order": [[ 2, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3] }
			]
		}); 
		
    }// end function
	//list end	
	
	$('#newEmpNotes').wysihtml5();
	
	$('#newEmployeeListOfPdfTable').removeClass('hideContentAi');

	$('#newEmployeeListOfPdf tbody').on( 'click', 'tr', function () {
		
		//employee detail for iqama renew strt
		var newEmployee_table = $('#newEmployeeListOfPdf').DataTable();
		var newEmployee_rowData = newEmployee_table.row( this ).data();
		var newEmployee_tcodeid = newEmployee_rowData[7];
		
		//console.log(newEmployee_tcodeid);
		
		// This is for the Generate PDF
		var downloadNewEmployeePdfUrl = "../../tcpdf/hris/pdf_new_employee.php?tcode=" + newEmployee_tcodeid;
		$("#downloadNewEmployeePdf").attr("href", downloadNewEmployeePdfUrl);    		
		// This is for the Generate PDF		
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/create_request/new-employee-details.php",
			data: {newEmployee_tcode_id: newEmployee_tcodeid}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log(newEmployee_tcodeid);
    		
    		var newEmployee_employee_id = $.parseJSON(msg);
    		var newEmployee_employee_name = $.parseJSON(msg);
    		var newEmployee_employee_pname = $.parseJSON(msg);
    		var newEmployee_employee_position = $.parseJSON(msg);
    		var newEmployee_iqama_number = $.parseJSON(msg);
    		var newEmployee_emp_reporting_date = $.parseJSON(msg);
    		var newEmployee_emp_notes = $.parseJSON(msg);
    		var newEmployee_remainingDays = $.parseJSON(msg);
    	
    		/* --------------------------------------------------------------------------- */	
    		$('#newEmployeeTablePdf > tbody').empty();
    		$('#newEmployeeTablePdf > tbody').append(
    			'<tr>'+
    				'<td><strong>Employee ID</strong><br>'+newEmployee_employee_id['newEmployee_employee_id']+'</td>'+
    				'<td><strong>Name</strong><br>'+newEmployee_employee_name['newEmployee_employee_name']+'</td>'+
    				'<td><strong>Project</strong><br>'+newEmployee_employee_pname['newEmployee_employee_pname']+'</td>'+
    				'<td><strong>Position</strong><br>'+newEmployee_employee_position['newEmployee_employee_position']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Job-Site Reporting Date</strong><br>'+newEmployee_emp_reporting_date['newEmployee_emp_reporting_date']+'</td>'+
    				'<td colspan="3"><strong>Notes</strong><br>'+newEmployee_emp_notes['newEmployee_emp_notes']+'</td>'+
    				'<input type="hidden" id="newEmployeeTcodeForPdf" value="'+newEmployee_tcodeid+'" />'+
    			'</tr>'				
    		);		
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
		//employee detail for iqama renew end		
		
		$('#newEmployeeListOfPdfTable').addClass('hideContentAi');
    	$("#newEmployeeListOfPdfDetails").removeClass('hideContentAi');
    } );
	
	
    $( '#goBackToNewEmployeeListOfPdf').click(function() {
    	$('#newEmployeeListOfPdfDetails').addClass('hideContentAi');
    	$("#newEmployeeListOfPdfTable").removeClass('hideContentAi');
    });	
	
    showListOfNewEmployeePdfTables(); // This will display table lists
    
	/* ------------------------------------------------------------------------------------------------------ */	
	
	//fetch data for employee start
	$("#newEmployeeID").keyup(function(){
		var employeeId = $(this).val();
		//alert(employeeId);
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/create_request/create_request_employee_details.php",
			data: { employee_id: employeeId }
		})
		.done(function(msg){
			var create_employee_name = $.parseJSON(msg);
			var create_employee_pname = $.parseJSON(msg);
			var create_employee_position = $.parseJSON(msg);
			var create_employee_nationality = $.parseJSON(msg);
			var contract_g_date_entry = $.parseJSON(msg);
			var total_salary = $.parseJSON(msg);
			
			$('#newEmpName').val(create_employee_name['create_employee_name']);
			$('#newEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#newEmpPosition').val(create_employee_position['create_employee_position']);
			$('#newEmpEntryDate').val(contract_g_date_entry['contract_g_date_entry']);
			$('#newEmpCurrentSalary').val(total_salary['total_salary']);
			
		});

	});	
	//fetch data for employee end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	//validation start
	 $('#newEmployeeID').focusout(function(){
		  var employee_id_check = $(this).val();
		  //alert(employee_id_check);
		  $.ajax({
			  type: "POST",
			  url: "../ajax/controller/create_request/is_existing_request.php",
			  data: {
				  employee_id: employee_id_check,
				  request_type: 'newEmployee'
			  }
		  })
		  .done(function( msg ){
				var requestStatus = $.parseJSON(msg);
				rStatus = requestStatus['request_status'];
				//alert(rStatus);
				if(rStatus == 'TRUE'){
					//alert(Existing);
					
					alert('The Employee ID '+employee_id_check+' already have existing request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
					$("#newEmployeeInsert").attr("disabled", true);
				}
//				}else{
//					//$("#fromVacationPending").attr("enable", false);
//				}
				
				console.log(rStatus);
				var project_list = $.parseJSON(msg);
				projectList = project_list['project_list'];
				  
				if(projectList != 'TRUE'){
					console.log(projectList);
					//$("#fromVacationPending").attr("disabled", true);
					alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
				}
//				}else {
//					console.log(projectList);
//					//$("#fromVacationPending").attr("enabled", false);
//				}
				
				if(rStatus == 'TRUE' || projectList != 'TRUE'){
					$("#newEmployeeInsert").attr("disabled", true);
				}else {
					$("#newEmployeeInsert").attr("disabled", false);
				}
			});//End .done
	  });	//End .keyup	
	
	//validation end  
	 
	/* ------------------------------------------------------------------------------------------------------ */	
	
	 // This is to validate the required fields
	 $("#newEmployeeForm").validate({
		 ignore: "#newEmpAttachment, #newEmpNotes",
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
	        	//exitEmployeeID: "required",
	        	newEmployeeID: {
	        		required: true,
	        		number: true
	        	},
	        	newEmpJobSiteReportingDate: "required"

	        },
	        messages: {
	        	newEmployeeID: "Please specify employee id",
	        	newEmpJobSiteReportingDate: "Please select date"
	        	
	        }
	 })
	 
	 /* ------------------------------------------------------------------------------------------------------ */	 
	 
	//insert start
	$('#newEmployeeInsert').on('click',function(){
		 // This will run if all the required fields are valid
		 if($("#newEmployeeForm").valid()){
			//this is for text start
			//alert("Ali");
			
			var vr_formData = {
					'ner_newEmployeeID':$('#newEmployeeID').val(),	
					
					'ner_newEmpJobSiteReportingDate':$('#newEmpJobSiteReportingDate').val(),
					'ner_newEmpNotes':$('#newEmpNotes').val()
					
			}; // end
			
			$.ajax({
				type: 'POST',
				url: '../ajax/controller/create_request/create_new_employee_request.php',
				data: vr_formData,
				beforeSend: function(){
					$("#newEmployeeInsert").attr("disabled", true);
				},
				complete: function(){
					$("#newEmployeeInsert").attr("disabled", false);
				},
				dataType: 'json',
				encode: true
			})// end ajax
			
			.done(function(data){
				
				//attached file start
				/*
				var transactionCodeForNer = data.message;
				console.log(transactionCodeForNer);
				
				var ner_attach_file = $('#newEmpAttachment').val();
				
				var ner_attach_fileLength = ner_attach_file.length;
				
				if(ner_attach_fileLength > 0){
					
					var ner_attach_File = document.getElementById('newEmpAttachment');
					
					if(ner_attach_File.length === 0){
						 return;
					}// end if
					
					var data_ner = new FormData();
					
					data_ner.append('SelectedFile', ner_attach_File.files[0]);
					
					var request_ner = new XMLHttpRequest();
					request_ner.onreadystatechange = function(){
						if(request_ner.readyState == 4){
							try {
								var resp = JSON.parse(request_ner.response);
							}catch(e){
								var resp = {
									status_ner: 'error',
									data_ner: 'Unknown error occurred: [' + request_ner.responseText + ']'
								};// end
							}// end
							//console.log(resp.status_vr + ': ' + resp.data_vr);
						}// end if
					}; // end
					request_ner.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+transactionCodeForNer+'&requestType=newEmployee');
					request_ner.send(data_ner);
				}// end if
				*/
				//attached file end
				
				showListOfNewEmployeePdfTables(); // This will display table lists
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#newEmpNotes').data("wysihtml5").editor.setValue();
				$('#newEmpNotes').val('');
				
				//This will show the ALERT
				function reset () {
					$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
					alertify.set({			
					   delay : 2000,
					});
				}
				
				reset();
				alertify.success('Success! Data inseted on the database.');
				return false;
				
				
			}); // end done
			
			//this is for text end
			
		 }// end if		

	});
	//insert end
	// pdf start
		/* ------------------------------------------------------------------------------------------------------ */
		
		// This is to validate the required fields
		$("#newEmployeePdfFormValidation").validate({
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
		$('#newEmployeeUpdatePdf').on('click', function(){
			
			// This will run if all the required fields are valid
			if($("#newEmployeePdfFormValidation").valid()){

				var transactionCodeForNer = $('#newEmployeeTcodeForPdf').val()
				console.log(transactionCodeForNer);				
				
				var formData = {
						'tcode_id':$('#newEmployeeTcodeForPdf').val(),
				}; // end formData
				
				$.ajax({
				 	type: "POST",
				 	url: "../ajax/controller/create_request/create_new_employee_pdf_update.php",
				 	data: formData,
				 	beforeSend: function(){
				 		$("#newEmployeeUpdatePdf").attr("disabled", true);
				 	},
				 	complete: function(){
				 		$("#newEmployeeUpdatePdf").attr("disabled", false);
				 	},
				 	dataType: 'json',
				 	encode: true
				})// end ajax
				
				.done(function(data){
					
					showListOfNewEmployeePdfTables(); // This will display table lists
					
			    	$('#newEmployeeListOfPdfDetails').addClass('hideContentAi');
			    	$("#newEmployeeListOfPdfTable").removeClass('hideContentAi');
			    	
			    	// This will attach file
			    	
			    	var transactionCodeForNer = data.message;
			    	
			    	var newEmployee_pdf_attach_file = $('#newEmployeePdfFile').val();
					
					var newEmployee_pdf_attach_fileLength = newEmployee_pdf_attach_file.length;
					
					if(newEmployee_pdf_attach_fileLength > 0){
						
						var newEmployee_pdf_attach_file = document.getElementById('newEmployeePdfFile');
						
						if(newEmployee_pdf_attach_file.length === 0){
							 return;
						}// end if
						
						var data = new FormData();
						
						data.append('SelectedFile', newEmployee_pdf_attach_file.files[0]);
						
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
					 
						request.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+transactionCodeForNer+'&requestType=newEmployee');
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
		}); // end	 
	// pdf end 
	
});