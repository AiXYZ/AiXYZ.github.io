$(document).ready(function() {	
	//search employee request satart
	$('#en_search_employee').keypress(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
			var empIdRequestSearch = $(this).val();
			//alert(empIdRequestSearch);
			
			//emloyee details start
			$.ajax({
				type: "POST",
				url: "../ajax/controller/create_request/create_request_employee_details.php",
				data: { employee_id: empIdRequestSearch }
			})
			.done(function(msg){
				var create_employee_name = $.parseJSON(msg);
				var create_employee_pname = $.parseJSON(msg);
				var create_employee_position = $.parseJSON(msg);
				var create_employee_nationality = $.parseJSON(msg);
				
				$('#employeeIDSr').text(empIdRequestSearch);
				$('#empNameSr').text(create_employee_name['create_employee_name']);
				
			});
			//emloyee details end
			
			$('#employeeRequestModal').modal('show')
			
	    }
	});
	//search employee request end
	
	//table start
    $('#employeeRequestTable').DataTable( {
        "iDisplayLength": 10,
        "bLengthChange": false,
        "order": [[ 1, "desc" ]]
    } );
	//table end	
    
} ); // end 