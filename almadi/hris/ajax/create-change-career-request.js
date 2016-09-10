$(document).ready(function(){
	
	$('#careerNotes').wysihtml5();

	/* ------------------------------------------------------------------------------------------------------ */	
	
	//fetch data for employee start
	$("#careerEmployeeID").keyup(function(){
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
			var type_of_visa = $.parseJSON(msg);
			
			$('#careerEmpName').val(create_employee_name['create_employee_name']);
			$('#careerEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#careerEmpPosition').val(create_employee_position['create_employee_position']);
			$('#careerEmpPositionOnVisa').val(type_of_visa['type_of_visa']);
			
		});

	});	
	//fetch data for employee end
	
	/* ------------------------------------------------------------------------------------------------------ */	
	
	//validation start
	 $('#careerEmployeeID').focusout(function(){
		  var employee_id_check = $(this).val();
		  //alert(employee_id_check);
		  $.ajax({
			  type: "POST",
			  url: "../ajax/controller/create_request/is_existing_request.php",
			  data: {
				  employee_id: employee_id_check,
				  request_type: 'career'
			  }
		  })
		  .done(function( msg ){
			  var requestStatus = $.parseJSON(msg);
			  rStatus = requestStatus['request_status'];
			  //alert(rStatus);
			  if(rStatus == 'TRUE'){
				  //alert(Existing);
				  $("#careerInsert").attr("disabled", true);
				  alert('The Employee ID '+employee_id_check+' already have existing request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			  }else{
				  $("#careerInsert").attr("disabled", false);
			  }
			  
			  var project_list = $.parseJSON(msg);
			  projectList = project_list['project_list'];
				  
			  if(projectList != 'TRUE'){
				  console.log(projectList);
				  $("#careerInsert").attr("disabled", true);
				  alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			  }else {
				  console.log(projectList);
				  $("#careerInsert").attr("disabled", false);
			  }
			  
		  });//End .done
	  });	//End .keyup	
	
	//validation end  
	 
		/* ------------------------------------------------------------------------------------------------------ */	
		
	 // This is to validate the required fields
	 $("#careerForm").validate({
		 ignore: "#careerAttachment, #careerNotes",
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
	        	careerEmployeeID: {
	        		required: true,
	        		number: true
	        	}

	        },
	        messages: {
	        	careerEmployeeID: "Please specify employee id"
	        	
	        }
	 })
	 
	 /* ------------------------------------------------------------------------------------------------------ */	 
	 
	//insert start
	$('#careerInsert').on('click',function(){
		 // This will run if all the required fields are valid
		 if($("#careerForm").valid()){
			//this is for text start
			//alert("Ali");
			
			var vr_formData = {
					'cr_careerEmployeeID':$('#careerEmployeeID').val(),	
					
					'cr_careerNotes':$('#careerNotes').val()
					
			}; // end
			
			$.ajax({
				type: 'POST',
				url: '../ajax/controller/create_request/change_career_employee_request.php',
				data: vr_formData,
				beforeSend: function(){
					$("#careerInsert").attr("disabled", true);
				},
				complete: function(){
					$("#careerInsert").attr("disabled", false);
				},
				dataType: 'json',
				encode: true
			})// end ajax
			
			.done(function(data){
				
				//attached file start
				
				var transactionCodeForCr = data.message;
				console.log(transactionCodeForCr);
				
				var cr_attach_file = $('#careerAttachment').val();
				
				var cr_attach_fileLength = cr_attach_file.length;
				
				if(cr_attach_fileLength > 0){
					
					var cr_attach_File = document.getElementById('careerAttachment');
					
					if(cr_attach_File.length === 0){
						 return;
					}// end if
					
					var data_cr = new FormData();
					
					data_cr.append('SelectedFile', cr_attach_File.files[0]);
					
					var request_cr = new XMLHttpRequest();
					request_cr.onreadystatechange = function(){
						if(request_cr.readyState == 4){
							try {
								var resp = JSON.parse(request_cr.response);
							}catch(e){
								var resp = {
									status_cr: 'error',
									data_cr: 'Unknown error occurred: [' + request_cr.responseText + ']'
								};// end
							}// end
							//console.log(resp.status_vr + ': ' + resp.data_vr);
						}// end if
					}; // end
					request_cr.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+transactionCodeForCr+'&requestType=career');
					request_cr.send(data_cr);
				}// end if
				
				//attached file end
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#careerNotes').data("wysihtml5").editor.setValue();
				$('#careerNotes').val('');
				
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
	
});