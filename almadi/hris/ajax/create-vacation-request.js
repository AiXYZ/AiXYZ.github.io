$(document).ready(function(){
	
	$("input:radio[name=vReplacementRequirementsOptions]").click(function() {
		//alert($('input[name="vReplacementRequirementsOptions"]:checked').val());
		if($('input[name="vReplacementRequirementsOptions"]:checked').val() == 'ar'){
	    	$("#vacationReplacementDetails").removeClass('hideContentAi');
		}else {
			$('#vacationReplacementDetails').addClass('hideContentAi');
		}		
	});	
	
	$('#vacationNotes').wysihtml5();
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	//fetch data for employee start
	$("#vacationEmployeeID").keyup(function(){
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
			
			$('#vacationEmpName').val(create_employee_name['create_employee_name']);
			$('#vacationEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#vacationEmpPosition').val(create_employee_position['create_employee_position']);
			
		});

	});	
	//fetch data for employee end
	
	/* ------------------------------------------------------------------------------------------------------ */
	
	//fetch data for Replacement Employee start
	$("#vacationReplacementEmployeeID").keyup(function(){
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
			
			$('#vacationReplacementEmpName').val(create_employee_name['create_employee_name']);
			$('#vacationReplacementEmpProject').val(create_employee_pname['create_employee_pname']);
			$('#vacationReplacementEmpPosition').val(create_employee_position['create_employee_position']);
			
		});
		
	});	
	//fetch data for Replacement Employee end	
	
	/* ------------------------------------------------------------------------------------------------------ */
	
    // Airport Departure start
    $('#vacationAirportDeparture').empty();
    $('#vacationAirportDeparture').append("<option>Loading...</option>");
    $.ajax({
    	type: "POST",
		  url: "../ajax/controller/airport_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#vacationAirportDeparture').empty();
			  $('#vacationAirportDeparture').append('<option style="display:none;" value="">Select</option>');
			  $.each(data, function(i, airport_code, airport_name){
				  $('#vacationAirportDeparture').append('<option value="'+data[i].airport_code+'"> '+data[i].airport_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // Airport Departure end
    
    /* ------------------------------------------------------------------------------------------------------ */
    
    // Airport Destinations start
    $('#vacationAirportDestinations').empty();
    $('#vacationAirportDestinations').append("<option>Loading...</option>");
    $.ajax({
    	type: "POST",
		  url: "../ajax/controller/airport_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#vacationAirportDestinations').empty();
			  $('#vacationAirportDestinations').append('<option style="display:none;" value="">Select</option>');
			  $.each(data, function(i, airport_code, airport_name){
				  $('#vacationAirportDestinations').append('<option value="'+data[i].airport_code+'"> '+data[i].airport_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // Airport Destinations end
    
    /* ------------------------------------------------------------------------------------------------------ */

	//validation start
	 $('#vacationEmployeeID').focusout(function(){
		  var employee_id_check = $(this).val();
		  //alert(employee_id_check);
		  $.ajax({
			  type: "POST",
			  url: "../ajax/controller/create_request/is_existing_request.php",
			  data: { employee_id: employee_id_check,
				  		request_type: 'vacation'
			  }
		  })
		  .done(function( msg ){
			  var requestStatus = $.parseJSON(msg);
			  rStatus = requestStatus['request_status'];
			  //alert(rStatus);
			  if(rStatus == 'TRUE'){
				  //alert(Existing);
				  $("#vacationInsert").attr("disabled", true);
				  alert('The Employee ID '+employee_id_check+' already have existing request. \n \n genesis_lista@sayeghwater.com يوجد طلب مسبق لهذا الموظف اذا تريد الحذف او التعديل رجاءاً ارسال ايميل برقم الملف + الاسم الى  \n \n If you want to remove or change the existing request, please send an email to genesis_lista@sayeghwater.com. \n \n Provide the following: \n 1. Employee ID Number \n 2. Employee Name');
			  }else{
				  $("#vacationInsert").attr("disabled", false);
			  }
			  
		  });//End .done
	  });	//End .keyup	
	
	//validation end  
	 
	/* ------------------------------------------------------------------------------------------------------ */
	 
	// This will check if the replacement employee id is the same with the employee id
	 $('#vacationReplacementEmployeeID').focusout(function(){
		 var replacement_employee_id_check = $(this).val();
		 var employee_id_check = $('#vacationEmployeeID').val();
		 
		 if(replacement_employee_id_check == employee_id_check){
			 //console.log('Same');
			 
			 $('#vacationInsert').attr('disabled', true);
			 
			//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.error('Error! Replacement ID is not allowed.');
			return false;
		 }else {
			 //console.log('Not Same');
			 $('#vacationInsert').attr('disabled', false);
		 }// end if
		 
	 }); // end
	 
	 
	/* ------------------------------------------------------------------------------------------------------ */

	 // This is to validate the required fields
	 $("#vacationForm").validate({
		 ignore: "#vacationAttachment, #vacationNotes",
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
	        	vacationEmployeeID: {
	        		required: true,
	        		number: true
	        	},
	        	vReplacementRequirementsOptions: "required",
	        	vacationReplacementEmployeeID: {
	        		required: "#vReplacementRequirementsOptions3:checked"
	        	},	        	
	        	vacationTypeOfLeave: "required",
	        	vacationNumberOfDays: {
	        		required: true,
	        		number: true
	        	},
	        	vacationWhoWillPayForVisa: "required",
	        	vacationEdFromDate: "required",
	        	vacationEdToDate: "required",
	        	vacationAirportDeparture: "required",
	        	vacationAirportDestinations: "required"
	        	

	        },
	        messages: {
	        	vacationEmployeeID: "Please specify employee id",
	        	vReplacementRequirementsOptions: "",
	        	vacationReplacementEmployeeID: "Please specify employee id",	
	        	vacationTypeOfLeave: "Please select leave",
	        	vacationNumberOfDays: "Please specify number of days",
	        	vacationWhoWillPayForVisa: "Please select",
	        	vacationEdFromDate: "Please select date",
	        	vacationEdToDate: "Please select date",
	        	vacationAirportDeparture: "Please select departure",
	        	vacationAirportDestinations: "Please select destinations"
	        	
	        }
	 })
	 
	 /* ------------------------------------------------------------------------------------------------------ */	 
	 
	//insert start
	$('#vacationInsert').on('click',function(){
		 // This will run if all the required fields are valid
		 if($("#vacationForm").valid()){
			//this is for text start
			//alert("Ali");
			var vr_formData = {
					'vr_vacationEmployeeID':$('#vacationEmployeeID').val(),	
					
					'vr_vReplacementRequirementsOptions':$('input[name="vReplacementRequirementsOptions"]:checked').val(),
					'vr_vacationReplacementEmployeeID':$('#vacationReplacementEmployeeID').val(),
					
					'vr_vacationTypeOfLeave':$('#vacationTypeOfLeave option:selected').val(),
					'vr_vacationNumberOfDays':$('#vacationNumberOfDays').val(),
					'vr_vacationWhoWillPayForVisa':$('#vacationWhoWillPayForVisa option:selected').val(),
					'vr_vacationEdFromDate':$('#vacationEdFromDate').val(),
					'vr_vacationEdToDate':$('#vacationEdToDate').val(),
					'vr_vacationAirportDeparture':$('#vacationAirportDeparture option:selected').val(),
					'vr_vacationAirportDestinations':$('#vacationAirportDestinations option:selected').val(),
					'vr_vacationNotes':$('#vacationNotes').val()
					
			}; // end
			
			$.ajax({
				type: 'POST',
				url: '../ajax/controller/create_request/create_vacation_request.php',
				data: vr_formData,
				beforeSend: function(){
					$("#vacationInsert").attr("disabled", true);
				},
				complete: function(){
					$("#vacationInsert").attr("disabled", false);
				},
				dataType: 'json',
				encode: true
			})// end ajax
			
			.done(function(data){
				
				//attached file start
				var transactionCodeForVr = data.message;
				//console.log(transactionCodeForVr);
				
				var vr_attach_file = $('#vacationAttachment').val();
				
				var vr_attach_fileLength = vr_attach_file.length;
				
				if(vr_attach_fileLength > 0){
					
					var vr_attach_File = document.getElementById('vacationAttachment');
					
					if(vr_attach_File.length === 0){
						 return;
					}// end if
					
					var data_vr = new FormData();
					
					data_vr.append('SelectedFile', vr_attach_File.files[0]);
					
					var request_vr = new XMLHttpRequest();
					request_vr.onreadystatechange = function(){
						if(request_vr.readyState == 4){
							try {
								var resp = JSON.parse(request_vr.response);
							}catch(e){
								var resp = {
									status_vr: 'error',
									data_vr: 'Unknown error occurred: [' + request_vr.responseText + ']'
								};// end
							}// end
							//console.log(resp.status_vr + ': ' + resp.data_vr);
						}// end if
					}; // end
					request_vr.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+transactionCodeForVr+'&requestType=vacation');
					request_vr.send(data_vr);
				}// end if
				//attached file end
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	
				$('#vacationNotes').data("wysihtml5").editor.setValue();
				$('#vacationNotes').val('');
				$('input[name="vReplacementRequirementsOptions"]').attr('checked', false);
				
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
			 
			 //console.log('Exit');
		 }// end if		

	});
	//insert end
	
});