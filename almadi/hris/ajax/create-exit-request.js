$(document).ready(function(){
	
	$("input:radio[name=eReplacementRequirementsOptions]").click(function() {
		//alert($('input[name="eReplacementRequirementsOptions"]:checked').val());
		if($('input[name="eReplacementRequirementsOptions"]:checked').val() == 'ar'){
	    	$("#exitReplacementDetails").removeClass('hideContentAi');
		}else {
			$('#exitReplacementDetails').addClass('hideContentAi');
		}		
	});	
	
	$('#exitNotes').wysihtml5();
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will fetch the employee details
	$('#exitEmployeeID').keyup(function(){
		
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
			
			$('#exitEmpName').val(create_employee_name['create_employee_name']);
			$('#exitEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#exitEmpPosition').val(create_employee_position['create_employee_position']);
			
		});// end
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// This will fetch the employee details for the replacement
	$('#exitReplacementEmployeeID').keyup(function(){
		
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
			
			$('#exitReplacementEmpName').val(create_employee_name['create_employee_name']);
			$('#exitReplacementEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#exitReplacementEmpPosition').val(create_employee_position['create_employee_position']);
			
		});// end
		
	}); // end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// Dropdown airport departure
	$('#exitAirportDeparture').empty();
	$('#exitAirportDeparture').append("<option>Loading...</option>");
	$.ajax({
    	type: "POST",
		  url: "../ajax/controller/airport_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#exitAirportDeparture').empty();
			  $.each(data, function(i, airport_code, airport_name){
				  $('#exitAirportDeparture').append('<option style="display:none;" value="">Select</option>');
				  $('#exitAirportDeparture').append('<option value="'+data[i].airport_code+'"> '+data[i].airport_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // Airport Departure end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	// Dropdown airport destinations
	$('#exitAirportDestinations').empty();
	$('#exitAirportDestinations').append("<option>Loading...</option>");
	$.ajax({
    	type: "POST",
		  url: "../ajax/controller/airport_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#exitAirportDestinations').empty();
			  $.each(data, function(i, airport_code, airport_name){
				  $('#exitAirportDestinations').append('<option style="display:none;" value="">Select</option>');
				  $('#exitAirportDestinations').append('<option value="'+data[i].airport_code+'"> '+data[i].airport_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // Airport Departure end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	//validation start
	 $('#exitEmployeeID').focusout(function(){
		  var employee_id_check = $(this).val();
		  //alert(employee_id_check);
		  $.ajax({
			  type: "POST",
			  url: "../ajax/controller/create_request/is_existing_request.php",
			  data: { employee_id: employee_id_check,
				  		request_type: 'exit'
			  }
		  })
		  .done(function( msg ){
			  var requestStatus = $.parseJSON(msg);
			  rStatus = requestStatus['request_status'];
			  //alert(rStatus);
			  if(rStatus == 'TRUE'){
				  //alert(Existing);
				  $("#vacationInsert").attr("disabled", true);
				  alert('The Employee ID '+employee_id_check+' already have existing request. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			  }else{
				  $("#vacationInsert").attr("disabled", false);
			  }
			  
			  var project_list = $.parseJSON(msg);
			  projectList = project_list['project_list'];
			  
			  if(projectList != 'TRUE'){
				  console.log(projectList);
				  $("#vacationInsert").attr("disabled", true);
				  alert('The Employee ID '+employee_id_check+' is not in your Project List. \n \n ali.hr@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n Please send an email to ali.hr@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			  }else {
				  console.log(projectList);
				  $("#vacationInsert").attr("disabled", false);
			  }
			  
		  });//End .done
	  });	//End .keyup	
	 
	 /* ------------------------------------------------------------------------------------------------------ */
	 
	 // This is to validate the required fields
	 $("#exitForm").validate({
		 ignore: "#exitAttachment, #exitNotes",
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
	        	exitEmployeeID: {
	        		required: true,
	        		number: true
	        	},
	        	exitTypeOfExit: "required",
	        	exitEdFromDate: "required",
	        	exitReplacementEmployeeID: "required",
	        	exitEdToDate: "required",
	        	exitAirportDeparture: "required",
	        	exitAirportDestinations: "required",
	        	eReplacementRequirementsOptions: "required",
	        	exitReplacementEmployeeID: {
	        		required: "#eReplacementRequirementsOptions3:checked"
	        	}
	        },
	        messages: {
	        	exitEmployeeID: "Please specify employee id",
	        	exitTypeOfExit: "Please select leave",
	        	exitEdFromDate: "Please select date",
	        	exitReplacementEmployeeID: "Please specify employee id",
	        	exitEdToDate: "Please select date",
	        	exitAirportDeparture: "Please select departure",
	        	exitAirportDestinations: "Please select destinations",
	        	eReplacementRequirementsOptions: ""
	        }
	 })
	 
	 /* ------------------------------------------------------------------------------------------------------ */
	 
	 // This will insert new request
	 $('#exitInsert').on('click', function(){
		 
		 // This will run if all the required fields are valid
		 if($("#exitForm").valid()){
			 
			 var formData = {
					 'employee_id':$('#exitEmployeeID').val(),
					 'replacement_id':$('#exitReplacementEmployeeID').val(),
					 'type_of_exit':$('#exitTypeOfExit').val(),
					 'replacement_options':$('input[name="eReplacementRequirementsOptions"]:checked').val(),
					 'departure_from_date':$('#exitEdFromDate').val(),
					 'departure_to_date':$('#exitEdToDate').val(),
					 'airport_departure':$('#exitAirportDeparture').val(),
					 'airport_destinations':$('#exitAirportDestinations').val(),
					 'request_notes':$('#exitNotes').val()
			 }; // end formData
			 
			 $.ajax({
				 	type: "POST",
				 	url: "../ajax/controller/create_request/create_exit_request.php",
				 	data: formData,
				 	beforeSend: function(){
				 		$("#exitInsert").attr("disabled", true);
				 	},
				 	complete: function(){
				 		$("#exitInsert").attr("disabled", false);
				 	},
				 	dataType: 'json',
				 	encode: true
			 })// end ajax
			 
			 .done(function(data){
				 
				// This will attach file
				var tcode = data.message;
				
				var exit_attach_file = $('#exitAttachment').val();
		    	
		    	var exit_attach_fileLength = exit_attach_file.length;
		    	
		    	if(exit_attach_fileLength > 0){
		    		
		    		var exit_attach_file = document.getElementById('exitAttachment');
		    		
		    		if(exit_attach_file.length === 0){
						 return;
					}// end if
		    		
		    		var data = new FormData();
		    		
		    		data.append('SelectedFile', exit_attach_file.files[0]);
		    		
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
				 
					request.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+tcode+'&requestType=exit');
			        request.send(data);
					
				}// end if
		    	
		    	// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#exitNotes').data("wysihtml5").editor.setValue();
				$('#exitNotes').val('');
				$('input[name="eReplacementRequirementsOptions"]').attr('checked', false);
				 
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
				 
			 }); // end done
			 
			 //console.log('Exit');
		 }// end if
		 
	 }); // end
	 
	 /* ------------------------------------------------------------------------------------------------------ */
	 
	 
	 
	
});