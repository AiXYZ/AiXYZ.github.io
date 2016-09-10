$(document).ready(function(){
	
	$('#floatingNotes').wysihtml5();
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will fetch the employee details
	$('#floatingEmployeeID').keyup(function(){
		
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
			
			$('#floatingEmpName').val(create_employee_name['create_employee_name']);
			$('#floatingEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#floatingEmpPosition').val(create_employee_position['create_employee_position']);
			
		});// end
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */		
	
	// This check for existing request
	$('#floatingEmployeeID').focusout(function(){
		var employee_id_check = $(this).val();
		//alert(employee_id_check);
		$.ajax({
			type: "POST",
			url: "../ajax/controller/create_request/is_existing_request.php",
			data: { employee_id: employee_id_check,
				request_type: 'floating'
			}
		})
		.done(function( msg ){
			var requestStatus = $.parseJSON(msg);
			rStatus = requestStatus['request_status'];
			//alert(rStatus);
			if(rStatus == 'TRUE'){
				//alert(Existing);
				$("#floatingInsert").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' already have existing request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}else{
				$("#floatingInsert").attr("disabled", false);
			}
			
			var project_list = $.parseJSON(msg);
			projectList = project_list['project_list'];
			  
			if(projectList != 'TRUE'){
				console.log(projectList);
				$("#floatingInsert").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}else {
				console.log(projectList);
				$("#floatingInsert").attr("disabled", false);
			}
		});//End .done
	});	//End .keyup
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This is to validate the required fields
	$("#floatingForm").validate({
		ignore: "#floatingAttachment, #floatingNotes",
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
	    	   floatingEmployeeID: {
	    		   required: true,
	    		   number: true
	    	   },
	    	   floatingReportingDate: "required"
	       },
	       messages: {
	    	   floatingEmployeeID: "Please specify employee id",
	    	   floatingReportingDate: "Please select date"
	       }
	})
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will insert new request
	$('#floatingInsert').on('click', function(){
		
		// This will run if all the required fields are valid
		if($("#floatingForm").valid()){
			
			var formData = {
					'employee_id':$('#floatingEmployeeID').val(),
					'floating_date':$('#floatingReportingDate').val(),
					'floating_notes':$('#floatingNotes').val()
			}; // end formData
			
			$.ajax({
			 	type: "POST",
			 	url: "../ajax/controller/create_request/create_floating_request.php",
			 	data: formData,
			 	beforeSend: function(){
			 		$("#floatingInsert").attr("disabled", true);
			 	},
			 	complete: function(){
			 		$("#floatingInsert").attr("disabled", false);
			 	},
			 	dataType: 'json',
			 	encode: true
			})// end ajax
			
			.done(function(data){
				
				// This will attach file
				var tcode = data.message;
				
				var floating_attach_file = $('#floatingAttachment').val();
				
				var floating_attach_fileLength = floating_attach_file.length;
				
				if(floating_attach_fileLength > 0){
					
					var floating_attach_file = document.getElementById('floatingAttachment');
					
					if(floating_attach_file.length === 0){
						 return;
					}// end if
					
					var data = new FormData();
					
					data.append('SelectedFile', floating_attach_file.files[0]);
					
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
				 
					request.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+tcode+'&requestType=floating');
			        request.send(data);
					
				}// end if
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#floatingNotes').data("wysihtml5").editor.setValue();
				$('#floatingNotes').val('');
				
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
			
		}// end if
		
		//console.log('Insert floating request');
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	
});