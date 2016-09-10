$(document).ready(function(){
	
	$('#hiIssues').change(function(){
		//alert($(this).val());
		if($(this).val() == '2'){
			$("#hiProblemViews").removeClass('hideContentAi');
		}else{
			$('#hiProblemViews').addClass('hideContentAi');
		}
	});	
	
	$('#hiNotes').wysihtml5();
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will fetch the employee details
	$('#hiEmployeeID').keyup(function(){
		
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
			
			$('#hiEmpName').val(create_employee_name['create_employee_name']);
			$('#hiEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#hiEmpPosition').val(create_employee_position['create_employee_position']);
			$('#hiEmpIqama').val(create_employee_iqama_number['create_employee_iqama_number']);
		});// end
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */	
	
	// Dropdown issues
	$('#hiIssues').empty();
	$('#hiIssues').append("<option>Loading...</option>");
	$.ajax({
    	type: "POST",
		  url: "../ajax/controller/health_issues_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#hiIssues').empty();
			  $.each(data, function(i, issues_name){
				  $('#hiIssues').append('<option style="display:none;" value="">Select</option>');
				  $('#hiIssues').append('<option value="'+data[i].id+'"> '+data[i].issues_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// Dropdown problem
	$('#hiProblem').empty();
	$('#hiProblem').append("<option>Loading...</option>");
	$.ajax({
    	type: "POST",
		  url: "../ajax/controller/health_problem_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#hiProblem').empty();
			  $.each(data, function(i, problem_name){
				  $('#hiProblem').append('<option style="display:none;" value="">Select</option>');
				  $('#hiProblem').append('<option value="'+data[i].id+'"> '+data[i].problem_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This check for existing request
	$('#hiEmployeeID').focusout(function(){
		var employee_id_check = $(this).val();
		//alert(employee_id_check);
		$.ajax({
			type: "POST",
			url: "../ajax/controller/create_request/is_existing_request.php",
			data: { employee_id: employee_id_check,
				request_type: 'health_insurance'
			}
		})
		.done(function( msg ){
			var requestStatus = $.parseJSON(msg);
			rStatus = requestStatus['request_status'];
			//alert(rStatus);
			if(rStatus == 'TRUE'){
				//alert(Existing);
				$("#healthInsuranceInsert").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' already have existing request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}else{
				$("#healthInsuranceInsert").attr("disabled", false);
			}
			
			var project_list = $.parseJSON(msg);
			projectList = project_list['project_list'];
			  
			if(projectList != 'TRUE'){
				console.log(projectList);
				$("#healthInsuranceInsert").attr("disabled", true);
				alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			}else {
				console.log(projectList);
				$("#healthInsuranceInsert").attr("disabled", false);
			}
		});//End .done
	});	//End .keyup
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This is to validate the required fields
	$("#healthInsuranceForm").validate({
		ignore: "#hiAttachment, #hiNotes",
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
	    	   hiEmployeeID: {
	    		   required: true,
	    		   number: true
	    	   },
	    	   hiIssues : "required",
	    	   hiProblem : {
	    		   required: function(element){
	    			   if($('#hiIssues').val() == '2'){
	    				   return true
	    			   }else {
	    				   return false
	    			   }// end if
	    		   }// end required
	    	   }
	       },
	       messages: {
	    	   hiEmployeeID: "Please specify employee id",
	    	   hiIssues: "Please select issues",
	    	   hiProblem: "Please select problem"
	       }
	})
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will insert new request
	$('#healthInsuranceInsert').on('click', function(){
		
		// This will run if all the required fields are valid
		if($("#healthInsuranceForm").valid()){
			
			var formData = {
					'employee_id':$('#hiEmployeeID').val(),
					'health_insurance_issues':$('#hiIssues').val(),
					'health_insurance_problem':$('#hiProblem').val(),
					'health_insurance_notes':$('#hiNotes').val()
			}; // end formData
			
			$.ajax({
			 	type: "POST",
			 	url: "../ajax/controller/create_request/create_health_insurance_request.php",
			 	data: formData,
			 	beforeSend: function(){
			 		$("#healthInsuranceInsert").attr("disabled", true);
			 	},
			 	complete: function(){
			 		$("#healthInsuranceInsert").attr("disabled", false);
			 	},
			 	dataType: 'json',
			 	encode: true
			})// end ajax
			
			.done(function(data){
				
				// This will attach file
				var tcode = data.message;
				
				var health_insurance_attach_file = $('#hiAttachment').val();
				
				var health_insurance_attach_fileLength = health_insurance_attach_file.length;
				
				if(health_insurance_attach_fileLength > 0){
					
					var health_insurance_attach_file = document.getElementById('hiAttachment');
					
					if(health_insurance_attach_file.length === 0){
						 return;
					}// end if
					
					var data = new FormData();
					
					data.append('SelectedFile', health_insurance_attach_file.files[0]);
					
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
				 
					request.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+tcode+'&requestType=health_insurance');
			        request.send(data);
					
				}// end if
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#hiNotes').data("wysihtml5").editor.setValue();
				$('#hiNotes').val('');
				
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
			
			//console.log('Insert health insurance');
		}// end if
		
		//console.log('Insert health insurance');
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
});