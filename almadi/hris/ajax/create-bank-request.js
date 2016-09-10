$(document).ready(function(){
	
	$('#bankIssues').change(function(){
		//alert($(this).val());
		if($(this).val() == '2'){
			$("#bankProblemViews").removeClass('hideContentAi');
		}else{
			$('#bankProblemViews').addClass('hideContentAi');
		}
	});	
	
	$('#bankNotes').wysihtml5();
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will fetch the employee details
	$('#bankEmployeeID').keyup(function(){
		
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
			var create_employee_iqama_number = $.parseJSON(msg);
			
			$('#bankEmpName').val(create_employee_name['create_employee_name']);
			$('#bankEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#bankEmpPosition').val(create_employee_position['create_employee_position']);
			$('#bankEmpIqama').val(create_employee_iqama_number['create_employee_iqama_number']);
		});// end
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */	
	
	// Dropdown issues
	$('#bankIssues').empty();
	$('#bankIssues').append("<option>Loading...</option>");
	$.ajax({
    	type: "POST",
		  url: "../ajax/controller/bank_issues_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#bankIssues').empty();
			  $.each(data, function(i, issues_name){
				  $('#bankIssues').append('<option style="display:none;" value="">Select</option>');
				  $('#bankIssues').append('<option value="'+data[i].id+'"> '+data[i].issues_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// Dropdown problem
	$('#bankProblem').empty();
	$('#bankProblem').append("<option>Loading...</option>");
	$.ajax({
    	type: "POST",
		  url: "../ajax/controller/bank_problem_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#bankProblem').empty();
			  $.each(data, function(i, problem_name){
				  $('#bankProblem').append('<option style="display:none;" value="">Select</option>');
				  $('#bankProblem').append('<option value="'+data[i].id+'"> '+data[i].problem_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This check for existing request
	$('#bankEmployeeID').focusout(function(){
		var employee_id_check = $(this).val();
		//alert(employee_id_check);
		$.ajax({
			type: "POST",
			url: "../ajax/controller/create_request/is_existing_request.php",
			data: { employee_id: employee_id_check,
				request_type: 'bank'
			}
		})
		.done(function( msg ){
			var requestStatus = $.parseJSON(msg);
			rStatus = requestStatus['request_status'];
			//alert(rStatus);
			if(rStatus == 'TRUE'){
				//alert(Existing);
				$("#bankInsert").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' already have existing request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}else{
				$("#bankInsert").attr("disabled", false);
			}
			
			var project_list = $.parseJSON(msg);
			projectList = project_list['project_list'];
			  
			if(projectList != 'TRUE'){
				console.log(projectList);
				$("#bankInsert").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}else {
				console.log(projectList);
				$("#bankInsert").attr("disabled", false);
			}
			  
		});//End .done
	});	//End .keyup
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This is to validate the required fields
	$("#bankForm").validate({
		ignore: "#bankAttachment, #bankNotes",
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
	    	   bankEmployeeID: {
	    		   required: true,
	    		   number: true
	    	   },
	    	   bankIssues : "required",
	    	   bankProblem : {
	    		   required: function(element){
	    			   if($('#bankIssues').val() == '2'){
	    				   return true
	    			   }else {
	    				   return false
	    			   }// end if
	    		   }// end required
	    	   }
	       },
	       messages: {
	    	   bankEmployeeID: "Please specify employee id",
	    	   bankIssues: "Please select issues",
	    	   bankProblem: "Please select problem"
	       }
	})
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will insert new request
	$('#bankInsert').on('click', function(){
		
		// This will run if all the required fields are valid
		if($("#bankForm").valid()){
			
			var formData = {
					'employee_id':$('#bankEmployeeID').val(),
					'bank_issues':$('#bankIssues').val(),
					'bank_problem':$('#bankProblem').val(),
					'bank_notes':$('#bankNotes').val()
			}; // end formData
			
			$.ajax({
			 	type: "POST",
			 	url: "../ajax/controller/create_request/create_bank_request.php",
			 	data: formData,
			 	beforeSend: function(){
			 		$("#bankInsert").attr("disabled", true);
			 	},
			 	complete: function(){
			 		$("#bankInsert").attr("disabled", false);
			 	},
			 	dataType: 'json',
			 	encode: true
			})// end ajax
			
			.done(function(data){
				
				// This will attach file
				var tcode = data.message;
				
				var bank_attach_file = $('#bankAttachment').val();
				
				var bank_attach_fileLength = bank_attach_file.length;
				
				if(bank_attach_fileLength > 0){
					
					var bank_attach_file = document.getElementById('bankAttachment');
					
					if(bank_attach_file.length === 0){
						 return;
					}// end if
					
					var data = new FormData();
					
					data.append('SelectedFile', bank_attach_file.files[0]);
					
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
				 
					request.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+tcode+'&requestType=bank');
			        request.send(data);
					
				}// end if
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#bankNotes').data("wysihtml5").editor.setValue();
				$('#bankNotes').val('');
				
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
			
			//console.log('Insert bank');
			
		}// end if
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
});