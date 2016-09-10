$(document).ready(function(){
	//list start
	function showListOfIqamaToReNewTables(){
	    var dataTableIqama = $('#iqamaListOfPdf').DataTable( {
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
			"ajax": "../ajax/controller/create_request/re-rew-iqama-employee_list.php",
			"order": [[ 2, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2] }
			]
		}); 
		
    }// end function
	//list end	
	
	$('#iqamaListOfPdfTable').removeClass('hideContentAi');
	
	$('#iqamaListOfPdf tbody').on( 'click', 'tr', function () {
		//employee detail for iqama renew strt
		var empId_table = $('#iqamaListOfPdf').DataTable();
		var empId_rowData = empId_table.row( this ).data();
		var employeeIdNo = empId_rowData[0];	

		// This is for the Generate PDF
		var downloadIqamaReNewPdfUrl = "../../tcpdf/hris/pdf_iqama_renew_request.php?empId=" + employeeIdNo;
		$("#downloadIqamaReNewPdf").attr("href", downloadIqamaReNewPdfUrl);    		
		// This is for the Generate PDF		
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/create_request/re-new-iqama-employee-details.php",
			data: {iqama_employeeIdNo: employeeIdNo}
    	})// end ajax
    	
    	.done(function( msg ){

    		// For testing
    		console.log(employeeIdNo);
    		
    		var iqama_employee_name = $.parseJSON(msg);
    		var iqama_employee_pname = $.parseJSON(msg);
    		var iqama_employee_position = $.parseJSON(msg);
    		var employee_iqama_number = $.parseJSON(msg);
    		var employee_iqama_g_date = $.parseJSON(msg);
    		var employee_iqama_h_date = $.parseJSON(msg);
    		var remainingDays = $.parseJSON(msg);
    	
    		/* --------------------------------------------------------------------------- */	
    		$('#reNewIqamaTable > tbody').empty();
    		$('#reNewIqamaTable > tbody').append(
    			'<tr>'+
    				'<td><strong>Employee ID</strong><br>'+employeeIdNo+'</td>'+
    				'<td><strong>Name</strong><br>'+iqama_employee_name['iqama_employee_name']+'</td>'+
    				'<td><strong>Project</strong><br>'+iqama_employee_pname['iqama_employee_pname']+'</td>'+
    				'<td><strong>Position</strong><br>'+iqama_employee_position['iqama_employee_position']+'</td>'+
    			'</tr>'+
    			'<tr>'+
    				'<td><strong>Iqama</strong><br>'+employee_iqama_number['employee_iqama_number']+'</td>'+
    				'<td><strong>Iqama expiry (G)</strong><br>'+employee_iqama_g_date['employee_iqama_g_date']+'</td>'+
    				'<td><strong>Iqama Expiry (H)</strong><br>'+employee_iqama_h_date['employee_iqama_h_date']+'</td>'+
    				'<td><strong>Days</strong><br>'+remainingDays['remainingDays']+'</td>'+
    				'<input type="hidden" id="reNewIqamaEmpIdForPdf" value="'+employeeIdNo+'" />'+
    			'</tr>'				
    		);		
    		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done		
		
		//employee detail for iqama renew end
		
		$('#iqamaListOfPdfTable').addClass('hideContentAi');
    	$("#iqamaListOfPdfDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToIqamaListOfPdf').click(function() {
    	$('#iqamaListOfPdfDetails').addClass('hideContentAi');
    	$("#iqamaListOfPdfTable").removeClass('hideContentAi');
    });	
    
    showListOfIqamaToReNewTables(); // This will display table lists

	/* ------------------------------------------------------------------------------------------------------ */

	// This is to validate the required fields
	$("#reNewIqamaForm").validate({
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
	    	   reNewIqamaPdf: "required"
	       },
	       messages: {
	    	   reNewIqamaPdf: "Please select PDF file"
	       }
	})	 
	 
	 /* ------------------------------------------------------------------------------------------------------ */	 
	 
	//insert start
	$('#reNewIqamaSendRequestInsert').on('click',function(){
		 // This will run if all the required fields are valid
		 if($("#reNewIqamaForm").valid()){
			//this is for text start
			//alert("Ali");
			 
			var reIqama_formData = {
					'reIqama_EmployeeID':$('#reNewIqamaEmpIdForPdf').val(),					
			}; // end
			
			$.ajax({
				type: 'POST',
				url: '../ajax/controller/create_request/create_re_new_iqama_request.php',
				data: reIqama_formData,
				beforeSend: function(){
					$("#reNewIqamaSendRequestInsert").attr("disabled", true);
				},
				complete: function(){
					$("#reNewIqamaSendRequestInsert").attr("disabled", false);
				},
				dataType: 'json',
				encode: true
			})// end ajax
			
			.done(function(data){
				
				//attached file start
				var transactionCodeForReNewIqama = data.message;
				console.log(transactionCodeForReNewIqama);
				
				var reIqama_attach_file = $('#reNewIqamaPdf').val();
				
				var reIqama_attach_fileLength = reIqama_attach_file.length;
				
				if(reIqama_attach_fileLength > 0){
					
					var reIqama_attach_File = document.getElementById('reNewIqamaPdf');
					
					if(reIqama_attach_File.length === 0){
						 return;
					}// end if
					
					var data_reIqama = new FormData();
					
					data_reIqama.append('SelectedFile', reIqama_attach_File.files[0]);
					
					var request_reIqama = new XMLHttpRequest();
					request_reIqama.onreadystatechange = function(){
						if(request_reIqama.readyState == 4){
							try {
								var resp = JSON.parse(request_reIqama.response);
							}catch(e){
								var resp = {
									status_reIqama: 'error',
									data_reIqama: 'Unknown error occurred: [' + request_reIqama.responseText + ']'
								};// end
							}// end
							//console.log(resp.status_vr + ': ' + resp.data_vr);
						}// end if
					}; // end
					request_reIqama.open('POST', '../ajax/controller/create_request/upload_request_attach_file.php?transactionCode='+transactionCodeForReNewIqama+'&requestType=reNewIqama');
					request_reIqama.send(data_reIqama);
				}// end if
				//attached file end
				
				// Clear the fields
				$(':input').not(':button, :submit, :reset, :hidden').val('');	

				showListOfIqamaToReNewTables(); // This will display table lists
				
		    	$('#iqamaListOfPdfDetails').addClass('hideContentAi');
		    	$("#iqamaListOfPdfTable").removeClass('hideContentAi');				
				
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