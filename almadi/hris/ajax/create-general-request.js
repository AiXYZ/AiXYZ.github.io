$(document).ready(function(){
	
	$('#generalNotes').wysihtml5();
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will fetch the employee details
	$('#generalEmployeeID').keyup(function(){
		
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
			var create_employee_nationality = $.parseJSON(msg);
			
			$('#generalEmpName').val(create_employee_name['create_employee_name']);
			$('#generalEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#generalEmpPosition').val(create_employee_position['create_employee_position']);
		});// end
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This check for existing request
	$('#generalEmployeeID').focusout(function(){
		var employee_id_check = $(this).val();
		//alert(employee_id_check);
		$.ajax({
			type: "POST",
			url: "../ajax/controller/create_request/is_existing_request.php",
			data: { employee_id: employee_id_check,
				request_type: 'general_request'
			}
		})
		.done(function( msg ){
//			var requestStatus = $.parseJSON(msg);
//			rStatus = requestStatus['request_status'];
//			//alert(rStatus);
//			if(rStatus == 'TRUE'){
//				//alert(Existing);
//				$("#generalInsert").attr("disabled", true);
//				alert('The Employee ID '+employee_id_check+' already have existing request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
//			}else{
//				$("#generalInsert").attr("disabled", false);
//			}
			
			var project_list = $.parseJSON(msg);
			projectList = project_list['project_list'];
			  
			if(projectList != 'TRUE'){
				console.log(projectList);
				$("#generalInsert").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}else {
				console.log(projectList);
				$("#generalInsert").attr("disabled", false);
			}
			  
		});//End .done
	});	//End .keyup
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This is to validate the required fields
	$("#generalForm").validate({
		ignore: "#generalAttachment, #generalNotes",
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
	    	   generalEmployeeID: {
	    		   required: true,
	    		   number: true
	    	   },
	    	   generalEmpSubject: {
	    		   required: true,
	    		   maxlength: 20
	    	   }
	       },
	       messages: {
	    	   generalEmployeeID: "Please specify employee id",
	    	   generalEmpSubject: "Please specify a subject of maximum 20 characters only"
	       }
	})
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will insert new request
	$('#generalInsert').on('click', function(){
		
		// This will run if all the required fields are valid
		if($("#generalForm").valid()){
			
			var formData = {
					'employee_id':$('#generalEmployeeID').val(),
					'general_subject':$('#generalEmpSubject').val(),
					'general_notes':$('#generalNotes').val()
			}; // end formData
			
			$.ajax({
			 	type: "POST",
			 	url: "../ajax/controller/create_request/create_general_request.php",
			 	data: formData,
			 	beforeSend: function(){
			 		$("#generalInsert").attr("disabled", true);
			 	},
			 	complete: function(){
			 		$("#generalInsert").attr("disabled", false);
			 	},
			 	dataType: 'json',
			 	encode: true
			})// end ajax
			
			.done(function(data){
				
				// This will attach file
				var tcode = data.message;
				
				var general_attach_file = $('#generalAttachment').val();
				
				var general_attach_fileLength = general_attach_file.length;
				
				if(general_attach_fileLength > 0){
					
					var general_attach_file = document.getElementById('generalAttachment');
					
					if(general_attach_file.length === 0){
						 return;
					}// end if
					
					var data = new FormData();
					
					data.append('SelectedFile', general_attach_file.files[0]);
					
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
				 
					request.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+tcode+'&requestType=general');
			        request.send(data);
					
				}// end if
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#generalNotes').data("wysihtml5").editor.setValue();
				$('#generalNotes').val('');
				
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
			
			//console.log('Insert general request');
			
		}// end if
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
});