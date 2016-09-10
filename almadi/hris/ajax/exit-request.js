
$(document).ready(function() {
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will convert from Hijiri to Gregorian
	// This is the calendar on Ticket Tab to update the Visa
	
	function convertGregorianToHijiri(gregorianDateFromtextBox){
		
		//gregorian to hijri
		function intPart(floatNum){
			if (floatNum< -0.0000001){
				 return Math.ceil(floatNum-0.0000001);
				}
			return Math.floor(floatNum+0.0000001);	
		}				

		d=parseInt(gregorianDateFromtextBox[0],10);
		m=parseInt(gregorianDateFromtextBox[1],10);
		y=parseInt(gregorianDateFromtextBox[2],10);

		if ((y>1582)||((y==1582)&&(m>10))||((y==1582)&&(m==10)&&(d>14))){
			jd=intPart((1461*(y+4800+intPart((m-14)/12)))/4)+intPart((367*(m-2-12*(intPart((m-14)/12))))/12)-intPart( (3* (intPart(  (y+4900+    intPart( (m-14)/12)     )/100)    )   ) /4)+d-32075;
		}else{
			jd = 367*y-intPart((7*(y+5001+intPart((m-9)/7)))/4)+intPart((275*m)/9)+d+1729777;
		}

		l=jd-1948440+10632;
		n=intPart((l-1)/10631);
		l=l-10631*n+354;
		j=(intPart((10985-l)/5316))*(intPart((50*l)/17719))+(intPart(l/5670))*(intPart((43*l)/15238));
		l=l-(intPart((30-j)/15))*(intPart((17719*j)/50))-(intPart(j/16))*(intPart((15238*j)/43))+29;
		m=intPart((24*l)/709);
		d=l-intPart((709*m)/24);
		y=30*n+j-30;

		return outputHijriDate = d + "/" + m + "/" + y;
		
	}// end function
	
	function convertHijiriToGregorian(islamicDateFromtextBox){
		
		//hijri to gregorian
		function intPart(floatNum){
			if (floatNum< -0.0000001){
				 return Math.ceil(floatNum-0.0000001);
				}
			return Math.floor(floatNum+0.0000001);
		}			

		d=parseInt(islamicDateFromtextBox[0],10);
		m=parseInt(islamicDateFromtextBox[1],10);
		y=parseInt(islamicDateFromtextBox[2],10);

		jd=intPart((11*y+3)/30)+354*y+30*m-intPart((m-1)/2)+d+1948440-385;

		if (jd> 2299160 ){
			l=jd+68569;
			n=intPart((4*l)/146097);
			l=l-intPart((146097*n+3)/4);
			i=intPart((4000*(l+1))/1461001);
			l=l-intPart((1461*i)/4)+31;
			j=intPart((80*l)/2447);
			d=l-intPart((2447*j)/80);
			l=intPart(j/11);
			m=j+2-12*l;
			y=100*(n-49)+i+l;
		}else{
			j=jd+1402;
			k=intPart((j-1)/1461);
			l=j-1461*k;
			n=intPart((l-1)/365)-intPart(l/1461);
			i=l-365*n+30;
			j=intPart((80*i)/2447);
			d=i-intPart((2447*j)/80);
			i=intPart(j/11);
			m=j+2-12*i;
			y=4*k+n+i-4716;
		}

		return outputGregorianDate = d + "/" + m + "/" + y;
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will compute the xx year(s) xx month(s) xx day(s)
	function difference(d1, d2, display) {
	  var m = moment(d1);
	  var years = m.diff(d2, 'years');
	  m.add(-years, 'years');
	  var months = m.diff(d2, 'months');
	  m.add(-months, 'months');
	  var days = m.diff(d2, 'days');

	  //return {years: years, months: months, days: days};
	  var year_month_day = years+' year(s) '+months+' month(s) '+days+' day(s)';
	  
	  return year_month_day;
	  
	}// end
	// This will compute the xx year(s) xx month(s) xx day(s)
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the list of request
	function showERTables(table_name, task){
    	//console.log(table_name + ' ' + task);
		
		var dataTable = $(table_name).DataTable({
			"fnRowCallback": function( row, data, index, oSettings ){
				//if(jQuery.isEmptyObject(data[8]) || data[8] == ''){ // This same if condition need to put under $('#tableName tbody').on( 'click', 'tr', function () {
				
				/*if(jQuery.inArray("1", data[10])!='-1'){
					
					//tooltips for table start
					var tooltipsTitle;
					tooltipsTitle =  data[1]+' having following incorrect data:\
					<br> Birth date\
					<br> Nationality\
					<br> Visa number\
					<br> Project name';
					row.setAttribute( 'data-original-title', tooltipsTitle );
					
					// Apply the tooltips
					dataTable.$('tr').tooltip( {
						"delay": 0,
						"track": true,
						"fade": 250
					} );
					//tooltips for table end		
					
					row.className = "invalidContractDateCursor";
					return row;
					
				}else {
					
					row.className = "validContractDate";
					return row;
					
				}*/
				
				// 1 - Personal information
				if(jQuery.inArray("1", data[10])!='-1'){
					var pinfo = 'Personal information <br>';
				}else {
					var pinfo = '';
				}
				
				// 2 - Contract information
				if(jQuery.inArray("2", data[10])!='-1'){
					var cinfo = 'Contract information <br>';
				}else {
					var cinfo = '';
				}
				
				// 3 - Salary information
				if(jQuery.inArray("3", data[10])!='-1'){
					var sinfo = 'Salary information <br>';
				}else {
					var sinfo = '';
				}
				
				// 4 - Passport information
				if(jQuery.inArray("4", data[10])!='-1'){
					var psinfo = 'Passport information <br>';
				}else {
					var psinfo = '';
				}
				
				// 5 - Iqama information
				if(jQuery.inArray("5", data[10])!='-1'){
					var iqinfo = 'Iqama information <br>';
				}else {
					var iqinfo = '';
				}
				
				// 6 - Medical information
				if(jQuery.inArray("6", data[10])!='-1'){
					var minfo = 'Medical information <br>';
				}else {
					var minfo = '';
				}
				
				// 7 - Upload files
				if(jQuery.inArray("7", data[10])!='-1'){
					var finfo = 'Document photo <br>';
				}else {
					var finfo = '';
				}
				
				var mstring = data[1]+' having following incorrect data: <br>';
				var message = mstring.concat(pinfo, cinfo, sinfo, pinfo, iqinfo, minfo, finfo);
				
				if(pinfo != '' || cinfo != '' || sinfo != '' || psinfo != '' || iqinfo != '' || minfo != '' || finfo != ''){
					
					var tooltipsTitle;
					tooltipsTitle = message;
					
					
					row.setAttribute( 'data-original-title', tooltipsTitle );
					
					// Apply the tooltips
					dataTable.$('tr').tooltip( {
						"delay": 0,
						"track": true,
						"fade": 250
					} );
					
					row.className = "invalidContractDateCursor";
					return row;
				}else {
					row.className = "validContractDate";
					return row;
				}
				
//				var mstring = data[1]+' having following incorrect data: <br>';
//				var message = mstring.concat(pinfo, cinfo);
				
				//tooltips for table start
//				var tooltipsTitle;
//				tooltipsTitle = message;
//				
//				
//				row.setAttribute( 'data-original-title', tooltipsTitle );
//				
//				// Apply the tooltips
//				dataTable.$('tr').tooltip( {
//					"delay": 0,
//					"track": true,
//					"fade": 250
//				} );
				//tooltips for table end
				
				
				
				
			},
			
			/*
			//tooltips for table start
			"fnDrawCallback": function(oSettings){
				 $(table_name+' tbody tr').each( function() {
					 var sTitle;
					 var nTds = $('td', this);
					 var sEmpId = $(nTds[1]).text();
					 sTitle =  sEmpId+' having following incorrect data:\
		            	<br> Birth date\
		            	<br> Nationality\
		            	<br> Visa number\
		            	<br> Project name';
					 this.setAttribute( 'data-original-title', sTitle );
				 });
			     
			    // Apply the tooltips
			    dataTable.$('tr').tooltip( {
			        "delay": 0,
			        "track": true,
			        "fade": 250
			    } );				 
			},
			//tooltips for table end
			*/
			
			"processing": true,
			"serverSide": true,	
			"destroy": true,
			"ajax": "../ajax/controller/employee_request/exit_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			//"order": [[ 0, "asc" ]],
			"order": [[ 1, "asc" ]],
			"columnDefs": [
				//{ className: "dt-center", "targets": [0,1,2,3,4,5,6] }
				{ className: "dt-center", "targets": [0,1,2,3,4,5,6,7] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/*--------------------------------------------------------------------------------------------------------------*/

	
	// This is the counter for the exit request
	counterExitRequest(); // This will display the number of pending rquest on the TABS
	
	function counterExitRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/exit_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// HR First
			var er_hr_first_total = $.parseJSON(msg);
			$("#er_hr_first_total").text(er_hr_first_total['er_hr_first_total']);
			
			// FD
			var er_fd_total = $.parseJSON(msg);
			$("#er_fd_total").text(er_fd_total['er_fd_total']);
			
			// HR Final
			var er_hr_final_total = $.parseJSON(msg);
			$("#er_hr_final_total").text(er_hr_final_total['er_hr_final_total']);
			
			// Visa
			var er_visa_total = $.parseJSON(msg);
			$("#er_visa_total").text(er_visa_total['er_visa_total']);
			
			// Ticket
			var er_ticket_total = $.parseJSON(msg);
			$("#er_ticket_total").text(er_ticket_total['er_ticket_total']);
			
			// Clearance
			var er_clearance_total = $.parseJSON(msg);
			$("#er_clearance_total").text(er_clearance_total['er_clearance_total']);
			
			// Muqeem
			var er_muqeem_total = $.parseJSON(msg);
			$("#er_muqeem_total").text(er_muqeem_total['er_muqeem_total']);
			
			// Closed
			var er_closed_total = $.parseJSON(msg);
			$("#er_closed_total").text(er_closed_total['er_closed_total']);
			
			// Declined
			var er_declined_total = $.parseJSON(msg);
			$("#er_declined_total").text(er_declined_total['er_declined_total']);
			
			// ER Grand Total
			var er_grand_total = $.parseJSON(msg);
			$("#er_grand_total").text(er_grand_total['er_grand_total']);
			
		});// end done
		
	}// end function
	// This is the counter for the exit request
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the Encoder Details
	function encoder_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){

    		console.log($query); // Display the current query
    		
    		var encode_by = $.parseJSON(msg);
    		var encoder_name = $.parseJSON(msg);
    		var encode_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    	
    	/* --------------------------------------------------------------------------- */	
		
		$('#exit_encoder_details_'+$query+' > thead').empty();
		$('#exit_encoder_details_'+$query+' > thead').append('<tr>'+
																				'<th colspan="4">Encoder details <span class="muted">- '+$tcode+'</span> </th>'+
																				'<input type="hidden" id="hidden_exit_tcode_'+$query+'" value="'+$tcode+'" />'+
																			  '</tr>');
		
		$('#exit_encoder_details_'+$query+' > tbody').empty();
		$('#exit_encoder_details_'+$query+' > tbody').append('<tr>'+
																				'<td><strong>Employee ID</strong><br> '+encode_by['encode_by']+' </td>'+
																				'<td><strong>Name</strong><br> '+encoder_name['encoder_name']+' </td>'+
																				'<td><strong>Created date</strong><br> '+encode_date['encode_date']+' </td>'+
																				'<td><strong>Elapsed day(s)</strong><br> '+elapsed_days['elapsed_days']+' </td>'+
																			  '</tr>');
		
		/* --------------------------------------------------------------------------- */	
		
    	}); //  end done
		
	}// end function
	// This will display the Encoder Details
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the Employee Details
	function employee_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var employee_id = $.parseJSON(msg);
    		var employee_name = $.parseJSON(msg);
    		var employee_pname = $.parseJSON(msg);
    		var employee_position = $.parseJSON(msg);
    		
    		var request_leave_type = $.parseJSON(msg);
    		var request_number_of_days = $.parseJSON(msg);
    		
    		var request_expected_departure_from_date = $.parseJSON(msg);
    		var request_expected_departure_to_date = $.parseJSON(msg);
    		var request_who_will_pay_visa = $.parseJSON(msg);
    		
    		var replacement_requirements = $.parseJSON(msg);
    		var request_file_path = $.parseJSON(msg);
    		var request_file_name = $.parseJSON(msg);
    		var employee_iqama_number = $.parseJSON(msg);
    		
    		var employee_contract_date = $.parseJSON(msg);
    		var employee_contract_years = $.parseJSON(msg);
    		
    		// Display length of service 
    		// 9 year(s) 11 month(s) 4 day(s)
    		// From the Contract Date Gregorian to the current system date
    		var emp_info_contract_g_date_employed = $.parseJSON(msg);
    		var sDate = employee_contract_date['employee_contract_date'].split('/');
			var sDate_Day = parseInt(sDate[0],10);
			var sDate_Month = parseInt(sDate[1],10);
			var sDate_Year = parseInt(sDate[2],10);
			var sDate_New = sDate_Year+'/'+sDate_Month+'/'+sDate_Day;
			
			// This wll get the current date in Gregorian Calendar
			var gc = $.calendars.instance(); 
			var d = gc.today();
			var y = d.year();
			var m = d.month();
			var d = d.day();
			
			var currentDate = y + "/" + m + "/" + d;
			
			//var systemDate = new Date();
			//var twoDigitMonth = systemDate.getMonth();
			//var twoDigitDate = systemDate.getDate();
			//var currentDate = systemDate.getFullYear() + "/" + twoDigitMonth + "/" + twoDigitDate;
			//difference(Date.parse(currentDate), Date.parse(sDate_New));
    		
			var request_notes = $.parseJSON(msg);
			
			var last_vacation_date = $.parseJSON(msg);
			var date_joined_last_vacation = $.parseJSON(msg);
			var date_days_of_last_vacation = $.parseJSON(msg);
			
    		/* --------------------------------------------------------------------------------------------------------------------------------------- */
    		
			$('#exit_employee_details_'+$query+' > thead').empty();
			$('#exit_employee_details_'+$query+' > thead').append('<tr>'+
																					'<th colspan="3">Employee details</th>'+
																				  '</tr>');
			
			if($query == 'hrfirst'){
				// HR First show last vacation and date joined after vacation input fields
				$('#exit_employee_details_'+$query+' > tbody').empty();
				$('#exit_employee_details_'+$query+' > tbody').append('<tr>'+
													'<td><strong>Emp.ID</strong><br> '+employee_id['employee_id']+' </td>'+
													'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
													'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
												  '</tr>'+
												  '<tr>'+
												  	'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
												  	'<td><strong>Leave type</strong><br> '+request_leave_type['request_leave_type']+' </td>'+
												  	'<td><strong>Number of days</strong><br> 0 </td>'+
												  '</tr>'+
												  '<tr>'+
												  	'<td><strong>Departure date (From)</strong><br> '+request_expected_departure_from_date['request_expected_departure_from_date']+' </td>'+
												  	'<td><strong>Departure date (To)</strong><br> '+request_expected_departure_to_date['request_expected_departure_to_date']+' </td>'+
												  	'<td><strong>Visa payment</strong><br> '+request_who_will_pay_visa['request_who_will_pay_visa']+' </td>'+
												  '<tr>'+
												  '<tr>'+
												  	'<td><strong>Replacement</strong><br> '+replacement_requirements['replacement_requirements']+' </td>'+
												  	'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_name['request_file_name']+' </a></td>'+
												  	'<td><strong>Iqama number</strong><br> '+employee_iqama_number['employee_iqama_number']+' </td>'+
												  '</tr>'+
												  '<tr>'+
												  	'<td><strong>Contract date</strong><br> '+employee_contract_date['employee_contract_date']+' </td>'+
												  	'<td><strong>Years of contract</strong><br> '+employee_contract_years['employee_contract_years']+' </td>'+
												  	'<td><strong>Length of service</strong><br> '+difference(Date.parse(currentDate), Date.parse(sDate_New))+' </td>'+
												  '</tr>'+
												  '<tr>'+
												  	'<td><input type="text" class="input-block-level" id="exitHrFirstLastVacation" placeholder="Last vacation" onkeydown="return false"></td>'+
												  	'<td><input type="text" class="input-block-level" id="exitHrFirstDateJoined" placeholder="Date joined after vacation" onkeydown="return false"></td>'+
												  	'<td><strong>Days of last vacation</strong><br><span id="exitHrFirstDaysOfLastVacation"> 0 year(s) 0 month(s) 0 day(s) </span></td>'+
												  '</tr>'+
												  '<tr>'+
												  	'<td colspan="3"><strong>Notes</strong><br> '+request_notes['request_notes']+' </td>'+
												  '</tr>');
				
			}else {
				// Not HR First show values
				$('#exit_employee_details_'+$query+' > tbody').empty();
				$('#exit_employee_details_'+$query+' > tbody').append('<tr>'+
																						'<td><strong>Emp.ID</strong><br> '+employee_id['employee_id']+' </td>'+
																						'<td><strong>Name</strong><br> '+employee_name['employee_name']+' </td>'+
																						'<td><strong>Project name</strong><br> '+employee_pname['employee_pname']+' </td>'+
																					  '</tr>'+
																					  '<tr>'+
																					  	'<td><strong>Job title</strong><br> '+employee_position['employee_position']+' </td>'+
																					  	'<td><strong>Leave type</strong><br> '+request_leave_type['request_leave_type']+' </td>'+
																					  	'<td><strong>Number of days</strong><br> 0 </td>'+
																					  '</tr>'+
																					  '<tr>'+
																					  	'<td><strong>Departure date (From)</strong><br> '+request_expected_departure_from_date['request_expected_departure_from_date']+' </td>'+
																					  	'<td><strong>Departure date (To)</strong><br> '+request_expected_departure_to_date['request_expected_departure_to_date']+' </td>'+
																					  	'<td><strong>Visa payment</strong><br> '+request_who_will_pay_visa['request_who_will_pay_visa']+' </td>'+
																					  '<tr>'+
																					  '<tr>'+
																					  	'<td><strong>Replacement</strong><br> '+replacement_requirements['replacement_requirements']+' </td>'+
																					  	'<td><strong>Attachment</strong><br><a href="'+request_file_path['request_file_path']+'" target="_blank"> '+request_file_name['request_file_name']+' </a></td>'+
																					  	'<td><strong>Iqama number</strong><br> '+employee_iqama_number['employee_iqama_number']+' </td>'+
																					  '</tr>'+
																					  '<tr>'+
																					  	'<td><strong>Contract date</strong><br> '+employee_contract_date['employee_contract_date']+' </td>'+
																					  	'<td><strong>Years of contract</strong><br> '+employee_contract_years['employee_contract_years']+' </td>'+
																					  	'<td><strong>Length of service</strong><br> '+difference(Date.parse(currentDate), Date.parse(sDate_New))+' </td>'+
																					  '</tr>'+
																					  '<tr>'+
																					  	'<td><strong>Last vacation</strong><br> '+last_vacation_date['last_vacation_date']+' </td>'+
																					  	'<td><strong>Date joined after vacation</strong><br> '+date_joined_last_vacation['date_joined_last_vacation']+' </td>'+
																					  	'<td><strong>Days of last vacation</strong><br> '+date_days_of_last_vacation['date_days_of_last_vacation']+' </td>'+
																					  '</tr>'+
																					  '<tr>'+
																					  	'<td colspan="3"><strong>Notes</strong><br> '+request_notes['request_notes']+' </td>'+
																					  '</tr>');
			}// end if else

			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$("#exitHrFirstLastVacation").attr("disabled", true);
				$("#exitHrFirstDateJoined").attr("disabled", true);
			}
			//disable button and update end			
			
			//datepicker start
			var gregorianCalendarExit = $.calendars.instance('gregorian');
			
			$('#exitHrFirstLastVacation').calendarsPicker({
				calendar: gregorianCalendarExit,
				dateFormat: 'd/m/yyyy',
			});	
			//Last vacation date end 
			
			//Date joined after vacation start 
			$('#exitHrFirstDateJoined').calendarsPicker({
				calendar: gregorianCalendarExit,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var sDate = $('#exitHrFirstLastVacation').val().split('/');
					var sDate_Day = parseInt(sDate[0],10);
					var sDate_Month = parseInt(sDate[1],10);
					var sDate_Year = parseInt(sDate[2],10);
					var sDate_New = sDate_Year+'/'+sDate_Month+'/'+sDate_Day;
					
					var eDate = $('#exitHrFirstDateJoined').val().split('/');
					var eDate_Day = parseInt(eDate[0],10);
					var eDate_Month = parseInt(eDate[1],10);
					var eDate_Year = parseInt(eDate[2],10);
					var eDate_New = eDate_Year+'/'+eDate_Month+'/'+eDate_Day;
					
					//difference(Date.parse("2014/01/20"), Date.parse("2012/08/17"))
					//difference(Date.parse(eDate_New), Date.parse(sDate_New), 'vacationHrFirstDaysOfLastVacation'); 
					$('#exitHrFirstDaysOfLastVacation').text(difference(Date.parse(eDate_New), Date.parse(sDate_New))); // This is the function from MOMENT.JS to compute the xx year(s) xx months(s) xx day(s)
				}// end
			});
			
    	}); //  end done
		
	}// end function
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the Replacement details
	function replacement_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var request_employee_id_replacement = $.parseJSON(msg);
    		var replacement_name = $.parseJSON(msg);
    		var replacement_pname = $.parseJSON(msg);
    		var replacement_position = $.parseJSON(msg);
    		
    		$('#exit_replacement_details_'+$query+' > thead').empty();
			$('#exit_replacement_details_'+$query+' > thead').append('<tr>'+
																							'<th colspan="4">Replacement details</th>'+
																						'<tr>');
			
			$('#exit_replacement_details_'+$query+' > tbody').empty();
			$('#exit_replacement_details_'+$query+' > tbody').append('<tr>'+
																							'<td><strong>Employee ID</strong><br> '+request_employee_id_replacement['request_employee_id_replacement']+' </td>'+
																							'<td><strong>Name</strong><br> '+replacement_name['replacement_name']+' </td>'+
																							'<td><strong>Project</strong><br> '+replacement_pname['replacement_pname']+' </td>'+
																							'<td><strong>Position</strong><br>  '+replacement_position['replacement_position']+' </td>'+
																						'</tr>');
    		
    	});// end done
		
			
		
	}// end function
	// This will display the Replacement details
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr first
	function not_editing_hr_first($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var request_hr_update_by = $.parseJSON(msg);
    		var request_hr_update_created = $.parseJSON(msg);
    		var request_hr_update_days = $.parseJSON(msg);
    		var request_hr_notes = $.parseJSON(msg);
    		
    		var exit_hrfirst_file_path = $.parseJSON(msg);
    		var exit_hrfirst_file_name = $.parseJSON(msg);
		
			// Condition to display the PENCIL ICON for editing
			if($display == 'True'){
				$('#exit_task_hrfirst > thead').empty();
				$('#exit_task_hrfirst > thead').append('<tr>'+
																	'<th colspan="3">HR First <span class="pull-right exitHrFirstEditInFD"><i class="icon-large icon-pencil"></i></span></th>'+
																 '</tr>');
			}else {
				$('#exit_task_hrfirst > thead').empty();
				$('#exit_task_hrfirst > thead').append('<tr>'+
																	'<th colspan="3">HR First </th>'+
																 '</tr>');
			}// end if else
			// Condition to display the PENCIL ICON for editing
			
			$('#exit_task_hrfirst > tbody').empty();
			$('#exit_task_hrfirst > tbody').append('<tr>'+
															 	'<td><strong>Employee ID</strong><br> '+request_hr_update_by['request_hr_update_by']+' </td>'+
															 	'<td><strong>Updated by</strong><br>  '+request_hr_update_by['request_hr_update_by']+' </td>'+
															 	'<td><strong>Date</strong><br> '+request_hr_update_created['request_hr_update_created']+' </td>'+
															 '</tr>'+
															 '<tr>'+
															 	'<td><strong>Elapsed</strong><br> '+request_hr_update_days['request_hr_update_days']+' </td>'+
															 	'<td colspan="2"><strong>Attachment</strong><br><a href="'+exit_hrfirst_file_path['exit_hrfirst_file_path']+'" target="_blank"> '+exit_hrfirst_file_name['exit_hrfirst_file_name']+' </a></td>'+
															 '</tr>'+
															 '<tr>'+
															 	'<td colspan="3"><strong>Notes</strong><br> '+request_hr_notes['request_hr_notes']+' </td>'+
															 '</tr>');
			
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.exitHrFirstEditInFD').addClass('hideContentAi');
			}
			//disable button and update end			
	
			// This will open the EDIT FORM for HR First
			$( '.exitHrFirstEditInFD').click(function() {
				
				$('#exit_hr_first_editing_on_fd_tab').empty();
				$('#exit_hr_first_editing_on_fd_tab').append(
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="exitHrFirstNotesInFD">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="exitHrFirstNotesInFD"> بدون أجازات سابقة  </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+		
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="exitHrFirstAttachmentInFd">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="exitHrFirstAttachmentInFd" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+exit_hrfirst_file_path['exit_hrfirst_file_path']+'" target="_blank"> '+exit_hrfirst_file_name['exit_hrfirst_file_name']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
						);
				
				$('#exitHrFirstNotesInFD').wysihtml5();
	    		$('#exitHrFirstNotesInFD').data("wysihtml5").editor.setValue();
	    		$('#exitHrFirstNotesInFD').val(request_hr_notes['request_hr_notes']);
				
		    	$('#exit_task_hrfirst').addClass('hideContentAi');
		    	$("#exitHrFirstUpdateInFDTable").removeClass('hideContentAi');
		    });
			// This will open the EDIT FORM for HR First
		
    	});// end done
		
	}// end function
	// This will display the hr first
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the fd
	function not_editing_fd($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax 
    	
    	.done(function( msg ){
    		
    		var request_fd_update_by = $.parseJSON(msg);
    		var request_fd_encoder_name = $.parseJSON(msg);
    		var request_fd_update_created = $.parseJSON(msg);
    		var request_fd_update_days = $.parseJSON(msg);
    		var employee_total_salary = $.parseJSON(msg);
    		var request_fd_total_deductions = $.parseJSON(msg);
    		var request_fd_credit = $.parseJSON(msg);
    		
    		var exit_fd_file_path = $.parseJSON(msg);
    		var exit_fd_file_name = $.parseJSON(msg);
    		
    		var request_fd_notes = $.parseJSON(msg);
		
			// This will open the EDIT FORM for FD
			if($display == 'True'){
				$('#exit_task_fd > thead').empty();
				$('#exit_task_fd > thead').append('<tr>'+
															'<th colspan="3">FD <span class="pull-right exitFdEditInHrFinal"><i class="icon-large icon-pencil"></i></span></th>'+
														  '</tr>');
			}else {
				$('#exit_task_fd > thead').empty();
				$('#exit_task_fd > thead').append('<tr>'+
															'<th colspan="3">FD </th>'+
														  '</tr>');
			}// end if else
			// This will open the EDIT FORM for FD
			
			$('#exit_task_fd > tbody').empty();
			$('#exit_task_fd > tbody').append('<tr>'+
														'<td><strong>Employee ID</strong><br> '+request_fd_update_by['request_fd_update_by']+' </td>'+
														'<td><strong>Updated by</strong><br> '+request_fd_encoder_name['request_fd_encoder_name']+' </td>'+
														'<td><strong>Date</strong><br> '+request_fd_update_created['request_fd_update_created']+' </td>'+
													  '</tr>'+
													  '<tr>'+
													  	'<td><strong>Elapsed</strong><br> '+request_fd_update_days['request_fd_update_days']+' </td>'+
													  	'<td><strong>Total Salary</strong><br> '+employee_total_salary['employee_total_salary']+' </td>'+
													  	'<td><strong>Total Deductions</strong><br> '+request_fd_total_deductions['request_fd_total_deductions']+' </td>'+
													  '</tr>'+
													  '<tr>'+
													  	'<td><strong>Credit</strong><br> '+request_fd_credit['request_fd_credit']+' </td>'+
													  	'<td colspan="2"><strong>Attachment</strong><br><a href="'+exit_fd_file_path['exit_fd_file_path']+'" target="_blank"> '+exit_fd_file_name['exit_fd_file_name']+' </a></td>'+
													  '</tr>'+
													  '<tr>'+
													  	'<td colspan="3"><strong>Notes</strong><br> '+request_fd_notes['request_fd_notes']+' </td>'+
													  '</tr>');
			
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.exitFdEditInHrFinal').addClass('hideContentAi');
			}
			//disable button and update end			
			
			// This will open the EDIT FORM for FD
		    $( '.exitFdEditInHrFinal').click(function() {
		    	
		    	$('#exit_fd_editing_on_hr_final_tab').empty();
		    	$('#exit_fd_editing_on_hr_final_tab').append(
		    			'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="ExitInHrFinalTotalSalary">Total salary</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="ExitInHrFinalTotalSalary" value="'+employee_total_salary['employee_total_salary']+'" readonly>'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="ExitInHrFinalTotaldeduction">Total deduction</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="ExitInHrFinalTotaldeduction" value="'+request_fd_total_deductions['request_fd_total_deductions']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="ExitInHrFinalCredit">Credit</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="ExitInHrFinalCredit" value="'+request_fd_credit['request_fd_credit']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+																
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="exitInHrFinalNotesOfFd">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="exitInHrFinalNotesOfFd"> </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+					
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="vacationFDAttachmentInHRFinal">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="vacationFDAttachmentInHRFinal" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+exit_fd_file_path['exit_fd_file_path']+'" target="_blank"> '+exit_fd_file_name['exit_fd_file_name']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
		    			);
		    	
		    	$('#exitInHrFinalNotesOfFd').wysihtml5();
	    		$('#exitInHrFinalNotesOfFd').data("wysihtml5").editor.setValue();
	    		$('#exitInHrFinalNotesOfFd').val(request_fd_notes['request_fd_notes']);
		    	
		    	$('#exit_task_fd').addClass('hideContentAi');
		    	$("#exitFdUpdateInHrFinalTable").removeClass('hideContentAi');
		    });
		    // This will open the EDIT FORM for FD
	    
    	}); // end done 
		
	}// end function
	// This will display the fd
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the hr final
	function not_editing_hrfinal($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax 
    	
    	.done(function( msg ){
    		
    		var request_hr_final_update_by = $.parseJSON(msg);
    		var request_hr_final_encoder_name = $.parseJSON(msg);
    		var request_hr_final_update_created = $.parseJSON(msg);
    		var request_hr_final_update_days = $.parseJSON(msg);
    		var exit_hr_final_file_path = $.parseJSON(msg);
    		var exit_hr_final_file_name = $.parseJSON(msg);
    		var hr_final_notes = $.parseJSON(msg);
		
			// This will open the EDIT FORM for HR Final
			if($display == 'True'){
				$('#exit_task_hrfinal > thead').empty();
				$('#exit_task_hrfinal > thead').append('<tr>'+
																	'<th colspan="3">HR Final <span class="pull-right exitHrFinalEditInVisa"><i class="icon-large icon-pencil"></i></span></th>'+
																'</tr>');
			}else {
				$('#exit_task_hrfinal > thead').empty();
				$('#exit_task_hrfinal > thead').append('<tr>'+
																	'<th colspan="3">HR Final </th>'+
																'</tr>');
			}// end function
			// This will open the EDIT FORM for HR Final
			
			$('#exit_task_hrfinal > tbody').empty();
			$('#exit_task_hrfinal > tbody').append('<tr>'+
																'<td><strong>Employee ID</strong><br> '+request_hr_final_update_by['request_hr_final_update_by']+' </td>'+
																'<td><strong>Updated by</strong><br> '+request_hr_final_encoder_name['request_hr_final_encoder_name']+' </td>'+
																'<td><strong>Date</strong><br> '+request_hr_final_update_created['request_hr_final_update_created']+' </td>'+
															'</tr>'+
															'<tr>'+
																'<td><strong>Elapsed</strong><br> '+request_hr_final_update_days['request_hr_final_update_days']+' </td>'+
																'<td colspan="2"><strong>Attachment</strong><br><a href="'+exit_hr_final_file_path['exit_hr_final_file_path']+'" target="_blank"> '+exit_hr_final_file_name['exit_hr_final_file_name']+' </a></td>'+
															'</tr>'+
															'<tr>'+
																'<td colspan="3"><strong>Notes</strong><br> '+hr_final_notes['hr_final_notes']+' </td>'+
															'</tr>');
			
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.exitHrFinalEditInVisa').addClass('hideContentAi');
			}
			//disable button and update end			
			
			// This will open the EDIT FORM for HR Final
			 $( '.exitHrFinalEditInVisa').click(function() {
				 
				$('#exit_hr_final_editing_on_visa_tab').empty();
				$('#exit_hr_final_editing_on_visa_tab').append(
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="exitHrFinalNotesInVisa">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="exitHrFinalNotesInVisa"></textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+			
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="exitHrFinalAttachmentInVisa">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="exitHrFinalAttachmentInVisa" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+exit_hr_final_file_path['exit_hr_final_file_path']+'" target="_blank"> '+exit_hr_final_file_name['exit_hr_final_file_name']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
						);
				
				$('#exitHrFinalNotesInVisa').wysihtml5();
	    		$('#exitHrFinalNotesInVisa').data("wysihtml5").editor.setValue();
	    		$('#exitHrFinalNotesInVisa').val(hr_final_notes['hr_final_notes']);
				 
		    	$('#exit_task_hrfinal').addClass('hideContentAi');
		    	$("#exitHrFinalUpdateInVisaTable").removeClass('hideContentAi');
		    });
			// This will open the EDIT FORM for HR Final
		
    	}); // end done 
		
	}// end function
	// This will display the hr final
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the visa
	function not_editing_visa($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
		
		.done(function( msg ){
			
			var visa_created_by = $.parseJSON(msg);
			var visa_fullname = $.parseJSON(msg);
			var visa_date_created = $.parseJSON(msg);
			var visa_number = $.parseJSON(msg);
			var visa_exit_before_gregorian = $.parseJSON(msg);
			var visa_exit_before_date_hijiri = $.parseJSON(msg);
			var visa_elapsed_days = $.parseJSON(msg);
			var visa_note = $.parseJSON(msg);
			var visa_file_path = $.parseJSON(msg);
			var visa_filename = $.parseJSON(msg);
			
			/* --------------------------------------------------------------------------- */	
		
			// This will open the EDIT FORM for Visa
			if($display == 'True'){
				$('#exit_task_visa > thead').empty();
				$('#exit_task_visa > thead').append('<tr>'+
																'<th colspan="3">Visa <span class="pull-right exitVisaEditInTicket"><i class="icon-large icon-pencil"></i></span></th>'+
															 '</tr>');
			}else {
				$('#exit_task_visa > thead').empty();
				$('#exit_task_visa > thead').append('<tr>'+
																'<th colspan="3">Visa </th>'+
															 '</tr>');
			}// end if
			// This will open the EDIT FORM for Visa
			
			$('#exit_task_visa > tbody').empty();
			$('#exit_task_visa > tbody').append('<tr>'+
														 '<td><strong>Employee ID</strong><br> '+visa_created_by['visa_created_by']+' </td>'+
														 	'<td><strong>Updated by</strong><br> '+visa_fullname['visa_fullname']+' </td>'+
														 	'<td><strong>Date</strong><br> '+visa_date_created['visa_date_created']+' </td>'+
														 '</tr>'+
														 '<tr>'+
														 	'<td><strong>Visa number</strong><br> '+visa_number['visa_number']+' </td>'+
														 	'<td><strong>Elapsed</strong><br> '+visa_elapsed_days['visa_elapsed_days']+' </td>'+
														 	'<td><strong>Exit before this date (G)</strong><br> '+visa_exit_before_gregorian['visa_exit_before_gregorian']+' </td>'+
														 '</tr>'+
														 '<tr>'+
														 	'<td><strong>Exit before this date (H)</strong><br> '+visa_exit_before_date_hijiri['visa_exit_before_date_hijiri']+' </td>'+
														 	'<td colspan="2"><strong>Attachment</strong><br><a href="'+visa_file_path['visa_file_path']+'" target="_blank">'+visa_filename['visa_filename']+'</a></td>'+
														 '</tr>'+
														 '<tr>'+
														 	'<td colspan="3"><strong>Notes</strong><br> '+visa_note['visa_note']+' </td>'+
														 '</tr>');
			
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.exitVisaEditInTicket').addClass('hideContentAi');
			}
			//disable button and update end			
			
			
			// This will open the EDIT FORM for Visa
			$( '.exitVisaEditInTicket').click(function() {
				
				$('#exit_visa_editing_on_ticket_tab').empty();
				$('#exit_visa_editing_on_ticket_tab').append(
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitVisaNumberInTicket">Visa number</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="exitVisaNumberInTicket" value="'+visa_number['visa_number']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitExitBeforeThisDateGInTicket">Exit before this date (G)</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="exitExitBeforeThisDateGInTicket" value="'+visa_exit_before_gregorian['visa_exit_before_gregorian']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitExitBeforeThisDateHInTicket">Exit before this date (H)</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="exitExitBeforeThisDateHInTicket" value="'+visa_exit_before_date_hijiri['visa_exit_before_date_hijiri']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+																		
						'</div>'+																        																														
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="exitVisaNotesInTicket">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="exitVisaNotesInTicket"></textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+	
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="exitVisaAttachmentInTicket">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="exitVisaAttachmentInTicket" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+visa_file_path['visa_file_path']+'" target="_blank"> '+visa_filename['visa_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
						);
				
				var gregorianCalendarERVisaOnTicket = $.calendars.instance('gregorian');
				var islamicCalendarERVisaOnTicket = $.calendars.instance('islamic');
				
				//Gregorian datepicker start
				$('#exitExitBeforeThisDateGInTicket').calendarsPicker({
					calendar: gregorianCalendarERVisaOnTicket,
					dateFormat: 'd/m/yyyy',
					//gregorian to hijri converter start
					onSelect:function(){
						var gregorianDateFromtextBox = $('#exitExitBeforeThisDateGInTicket').val().split('/');
						//<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
						convertGregorianToHijiri(gregorianDateFromtextBox);
						$('#exitExitBeforeThisDateHInTicket').val(outputHijriDate);					
					}		
					//gregorian to hijri converter end
				});	
				//Gregorian datepicker end
				
				//Hijri datepicker start
				$('#exitExitBeforeThisDateHInTicket').calendarsPicker({
					calendar: islamicCalendarERVisaOnTicket,
					dateFormat: 'd/m/yyyy',
					//hijri to gregorian converter start
					onSelect:function(){
						var islamicDateFromtextBox = $('#exitExitBeforeThisDateHInTicket').val().split('/');
						//<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
						convertHijiriToGregorian(islamicDateFromtextBox);
						$('#exitExitBeforeThisDateGInTicket').val(outputGregorianDate);
					}		
					//hijri to gregorian converter end
				});	
				//Hijri datepicker end
				
				$('#exitVisaNotesInTicket').wysihtml5();
	    		$('#exitVisaNotesInTicket').data("wysihtml5").editor.setValue();
	    		$('#exitVisaNotesInTicket').val(visa_note['visa_note']);
				
				$('#exit_task_visa').addClass('hideContentAi');
				$("#exitVisaUpdateInTicketTable").removeClass('hideContentAi');
		    });
			// This will open the EDIT FORM for Visa
			
			/* --------------------------------------------------------------------------- */	
			
		}); //  end done
		
	}// end function
	// This will display the visa
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the ticket
	function not_editing_ticket($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
		
		.done(function( msg ){
			
			var ticket_created_by = $.parseJSON(msg);
			var ticket_fullname = $.parseJSON(msg);
			var ticket_date_created = $.parseJSON(msg);
			var ticket_from = $.parseJSON(msg);
			var ticket_to = $.parseJSON(msg);
			var departure_date = $.parseJSON(msg);
			var ticket_class = $.parseJSON(msg);
			var ticket_price = $.parseJSON(msg);
			var ticket_number = $.parseJSON(msg);
			var name_airlines = $.parseJSON(msg);
			var elapsed_days = $.parseJSON(msg);
			var ticket_file_path = $.parseJSON(msg);
			var ticket_filename = $.parseJSON(msg);
			var note_ticket = $.parseJSON(msg);
			
			var ticket_from_code = $.parseJSON(msg);
    		var ticket_to_code = $.parseJSON(msg);
    		var ticket_class_id = $.parseJSON(msg);
    		
    		var departure_date = $.parseJSON(msg);
    		var ticket_price = $.parseJSON(msg);
    		var ticket_number = $.parseJSON(msg);
    		var name_airlines = $.parseJSON(msg);
    		var ticket_return_date = $.parseJSON(msg);
    		var note_ticket = $.parseJSON(msg);
			
			/* --------------------------------------------------------------------------- */	
		
			// This will open the EDIT FORM for Ticket
			if($display == 'True'){
				$('#exit_task_ticket > thead').empty();
				$('#exit_task_ticket > thead').append('<tr>'+
																	'<th colspan="3">Ticket <span class="pull-right exitTicketEditInClearance"><i class="icon-large icon-pencil"></i></span></th>'+
															   '</tr>');
			}else {
				$('#exit_task_ticket > thead').empty();
				$('#exit_task_ticket > thead').append('<tr>'+
																	'<th colspan="3">Ticket </th>'+
															   '</tr>');
			}// end if else
			// This will open the EDIT FORM for Ticket
			
			$('#exit_task_ticket > tbody').empty();
			$('#exit_task_ticket > tbody').append('<tr>'+
																'<td><strong>Employee ID</strong><br> '+ticket_created_by['ticket_created_by']+' </td>'+
																'<td><strong>Updated by</strong><br> '+ticket_fullname['ticket_fullname']+' </td>'+
																'<td><strong>Date</strong><br> '+ticket_date_created['ticket_date_created']+' </td>'+
														   '</tr>'+
														   '<tr>'+
														   		'<td><strong>From</strong><br> '+ticket_from['ticket_from']+' </td>'+
														   		'<td><strong>To</strong><br> '+ticket_to['ticket_to']+' </td>'+
														   		'<td><strong>Departure date</strong><br> '+departure_date['departure_date']+' </td>'+
														   '</tr>'+
														   '<tr>'+
														   		'<td><strong>Class</strong><br> '+ticket_class['ticket_class']+' </td>'+
														   		'<td><strong>Ticket price</strong><br> '+ticket_price['ticket_price']+' </td>'+
														   		'<td><strong>Ticket number</strong><br> '+ticket_number['ticket_number']+' </td>'+
														   '</tr>'+
														   '<tr>'+
														   		'<td><strong>Airline</strong><br> '+name_airlines['name_airlines']+' </td>'+
														   		'<td><strong>Elapsed</strong><br> '+elapsed_days['elapsed_days']+' </td>'+
														   		'<td><strong>Attachment</strong><br><a href="'+ticket_file_path['ticket_file_path']+'" target="_blank"> '+ticket_filename['ticket_filename']+' </a></td>'+
														   '</tr>'+
														   '<tr>'+
														   		'<td colspan="3"><strong>Notes</strong><br> '+note_ticket['note_ticket']+' </td>'+
														   '</tr>');
			
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.exitTicketEditInClearance').addClass('hideContentAi');
			}
			//disable button and update end			
			
			// This will open the EDIT FORM for Ticket
			$( '.exitTicketEditInClearance').click(function() {
				
				$('#exit_ticket_editing_on_clearance_tab').empty();
				$('#exit_ticket_editing_on_clearance_tab').append(
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitFromTicketInClearance">From</label>'+
									'<div class="controls">'+
										'<select class="input-block-level" id="exitFromTicketInClearance" value="'+ticket_from['ticket_from']+'">'+
										
										'</select>'+																					
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitToTicketInClearance">To</label>'+
									'<div class="controls">'+
										'<select class="input-block-level" id="exitToTicketInClearance" value="'+ticket_to['ticket_to']+'">'+
											
										'</select>'+																					
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitDepartureDateTicketInClearance">Departure date</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level gregorianDatepicker" id="exitDepartureDateTicketInClearance" value="'+departure_date['departure_date']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+	
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitClassTicketInClearance">Class</label>'+
									'<div class="controls">'+
										'<select class="input-block-level" id="exitClassTicketInClearance" value="'+ticket_class['ticket_class']+'">'+
											
										'</select>'+																					
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitPriceTicketInClearance">Ticket price</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="exitPriceTicketInClearance" value="'+ticket_price['ticket_price']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitNumberTicketInClearance">Ticket number</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="exitNumberTicketInClearance" value="'+ticket_number['ticket_number']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+																			
						'</div>'+	
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="exitAirlineTicketInClearance">Airline</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="exitAirlineTicketInClearance" value="'+name_airlines['name_airlines']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+															        
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="exitTicketNotesInClearance">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="exitTicketNotesInClearance"> بدون أجازات سابقة </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+		
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="exitTicketAttachmentInClearance">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="exitVisaAttachmentInTicket" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+ticket_file_path['ticket_file_path']+'" target="_blank"> '+ticket_filename['ticket_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
						);
				
				// This is for the dropdown select list for FROM TICKET
			    $('#exitFromTicketInClearance').empty();
			    $('#exitFromTicketInClearance').append("<option>Loading...</option>");
			    $.ajax({
			    	type: "POST",
					  url: "../ajax/controller/airport_list.php",
					  contentType:"application/json: charset=utf-8",
					  dataType:"json",
					  success: function(data){
						  $('#exitFromTicketInClearance').empty();
						  $.each(data, function(i, airport_code, airport_name){
							  
							  if(data[i].airport_code == ticket_from_code['ticket_from_code']){
								  var S_Ticket_From = 'selected';
							  }else {
								  var S_Ticket_From = '';
							  }
							  
							  $('#exitFromTicketInClearance').append('<option value="'+data[i].airport_code+'" '+S_Ticket_From+'> '+data[i].airport_name+' </option>');
						  });// end each
					  },
					  complete: function(){
					  }// end success
			    }); // end ajax
			    // This is for the dropdown select list for FROM TICKET
			    
			    // This is for the dropdown select list TO TICKET
			    $('#exitToTicketInClearance').empty();
			    $('#exitToTicketInClearance').append("<option>Loading...</option>");
			    $.ajax({
			    	type: "POST",
					  url: "../ajax/controller/airport_list.php",
					  contentType:"application/json: charset=utf-8",
					  dataType:"json",
					  success: function(data){
						  $('#exitToTicketInClearance').empty();
						  $.each(data, function(i, airport_code, airport_name){
							  
							  if(data[i].airport_code == ticket_to_code['ticket_to_code']){
								  var S_Ticket_To = 'selected';
							  }else {
								  var S_Ticket_To = '';
							  }
							  
							  $('#exitToTicketInClearance').append('<option value="'+data[i].airport_code+'" '+S_Ticket_To+'> '+data[i].airport_name+' </option>');
						  });// end each
					  },
					  complete: function(){
					  }// end success
			    }); // end ajax
			    // This is for the dropdown select list TO TICKET
			    
			    // This is for the dropdown select TICKET CLASS 
			    $('#exitClassTicketInClearance').empty();
			    $('#exitClassTicketInClearance').append("<option>Loading...</option>");
			    $.ajax({
			    	type: "POST",
					  url: "../ajax/controller/ticket_class_list.php",
					  contentType:"application/json: charset=utf-8",
					  dataType:"json",
					  success: function(data){
						  $('#exitClassTicketInClearance').empty();
						  $.each(data, function(i, id, ticket_class){
							  
							  if(data[i].id == ticket_class_id['ticket_class_id']){
								  var S_Ticket_Class = 'selected';
							  }else {
								  var S_Ticket_Class = '';
							  }
							  
							  $('#exitClassTicketInClearance').append('<option value="'+data[i].id+'" '+S_Ticket_Class+'> '+data[i].ticket_class+' </option>');
						  });// end each
					  },
					  complete: function(){
					  }// end success
			    }); // end ajax
			    // This is for the dropdown select TICKET CLASS
				
				$('#exitTicketNotesInClearance').wysihtml5();
	    		$('#exitTicketNotesInClearance').data("wysihtml5").editor.setValue();
	     		$('#exitTicketNotesInClearance').val(note_ticket['note_ticket']);
				
		    	$('#exit_task_ticket').addClass('hideContentAi');
		    	$("#exitTicketUpdateInClearanceTable").removeClass('hideContentAi');
		    });
			// This will open the EDIT FORM for Ticket
			
			/* --------------------------------------------------------------------------- */	
			
		}); //  end done
		
	}// end function
	// This will display the ticket
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the clearance
	function not_editing_clearance($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var clearance_created_by = $.parseJSON(msg);
    		var clearance_date_created = $.parseJSON(msg);
    		var clearance_elapsed_days = $.parseJSON(msg);
    		var clearance_process_notes = $.parseJSON(msg);
    		var clearance_files_path = $.parseJSON(msg);
    		var clearance_filename = $.parseJSON(msg);
    		var clearance_fullname = $.parseJSON(msg);
    		
    		var clearance_benefit = $.parseJSON(msg);
    		var clearance_ticket = $.parseJSON(msg);
    		
			// This will open the EDIT FORM for Clearance
			if($display == 'True'){
				$('#exit_task_clearance > thead').empty();
				$('#exit_task_clearance > thead').append('<tr>'+
																		'<th colspan="3">Clearance <span class="pull-right exitClearanceEditInMuqeem"><i class="icon-large icon-pencil"></i></span></th>'+
																	'</tr>');
			}else {
				$('#exit_task_clearance > thead').empty();
				$('#exit_task_clearance > thead').append('<tr>'+
																		'<th colspan="3">Clearance </th>'+
																	'</tr>');
			}// end if else
			// This will open the EDIT FORM for Clearance
			
				
			
			$('#exit_task_clearance > tbody').empty();
			$('#exit_task_clearance > tbody').append('<tr>'+
																	'<td><strong>Employee ID</strong><br> '+clearance_created_by['clearance_created_by']+' </td>'+
																	'<td><strong>Updated by</strong><br>  '+clearance_fullname['clearance_fullname']+'  </td>'+
																	'<td><strong>Date</strong><br> '+clearance_date_created['clearance_date_created']+' </td>'+
																'</tr>'+
																'<tr>'+
																	'<td><strong>Benefit</strong><br> '+clearance_benefit['clearance_benefit']+' </td>'+
																	'<td><strong>Ticket</strong><br> '+clearance_ticket['clearance_ticket']+' </td>'+
																	'<td><strong>Elapsed</strong><br> '+clearance_elapsed_days['clearance_elapsed_days']+' </td>'+
																'</tr>'+
																'<tr>'+
																'<td colspan="1"><strong>Attachment</strong><br><a href="'+clearance_files_path['clearance_files_path']+'" target="_blank"> '+clearance_filename['clearance_filename']+' </a></td>'+
																	'<td colspan="2"><strong>Notes</strong><br> '+clearance_process_notes['clearance_process_notes']+' </td>'+
																'</tr>');
			
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.exitClearanceEditInMuqeem').addClass('hideContentAi');
			}
			//disable button and update end			
			
			// This will open the EDIT FORM for Clearance
			$( '.exitClearanceEditInMuqeem').click(function() {
				
				$('#exit_clearance_editing_on_muqeem_tab').empty();
				$('#exit_clearance_editing_on_muqeem_tab').append(
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="exitClearanceNotesInMuqeem">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="exitClearanceNotesInMuqeem">  </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+			
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="exitClearanceAttachmentInMuqeem">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="exitClearanceAttachmentInMuqeem" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+clearance_files_path['clearance_files_path']+'" target="_blank"> '+clearance_filename['clearance_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
						);
				
				$('#exitClearanceNotesInMuqeem').wysihtml5();
	    		$('#exitClearanceNotesInMuqeem').data("wysihtml5").editor.setValue();
	     		$('#exitClearanceNotesInMuqeem').val(clearance_process_notes['clearance_process_notes']);
	     		
		    	$('#exit_task_clearance').addClass('hideContentAi');
		    	$("#exitClearanceUpdateInMuqeemTable").removeClass('hideContentAi');
		    });	
			// This will open the EDIT FORM for Clearance
			
    	}); //  end done
		
	}// end function
	// This will display the clearance
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	// This will display the muqeem
	function not_editing_muqeem($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var muqeem_created_by = $.parseJSON(msg);
    		var muqeem_fullname = $.parseJSON(msg);
    		var muqeem_date_created = $.parseJSON(msg);
    		var muqeem_out_ksa_g = $.parseJSON(msg);
    		var muqeem_out_ksa_h = $.parseJSON(msg);
    		var muqeem_elapsed_days = $.parseJSON(msg);
    		var muqeem_close_notes = $.parseJSON(msg);
    		
    		var muqeem_outside_ksa_file_path = $.parseJSON(msg);
    		var muqeem_outside_ksa_filename = $.parseJSON(msg);
    		
    		var muqeem_iqama_received_file_path = $.parseJSON(msg);
    		var muqeem_iqama_received_filename = $.parseJSON(msg);
		
			$('#exit_task_muqeem > thead').empty();
			$('#exit_task_muqeem > thead').append('<tr>'+
																	'<th colspan="3">Muqeem</th>'+
															   '</tr>');
			
			$('#exit_task_muqeem > tbody').empty();
			$('#exit_task_muqeem > tbody').append('<tr>'+
																	'<td><strong>Employee ID</strong><br> '+muqeem_created_by['muqeem_created_by']+' </td>'+
																	'<td><strong>Updated by</strong><br> '+muqeem_fullname['muqeem_fullname']+' </td>'+
																	'<td><strong>Date</strong><br> '+muqeem_date_created['muqeem_date_created']+' </td>'+
															   '</tr>'+
															   '<tr>'+
															   		'<td><strong>KSA Leaving date (G)</strong><br> '+muqeem_out_ksa_g['muqeem_out_ksa_g']+' </td>'+
															   		'<td><strong>KSA Leaving date (H)</strong><br> '+muqeem_out_ksa_g['muqeem_out_ksa_g']+' </td>'+
															   		'<td><strong>Elapsed</strong><br>'+muqeem_elapsed_days['muqeem_elapsed_days']+'</td>'+
															   '</tr>'+
															   '<tr>'+
															   		'<td><strong>Attachment (Outside KSA)</strong><br><a href="'+muqeem_outside_ksa_file_path['muqeem_outside_ksa_file_path']+'" target="_blank"> '+muqeem_outside_ksa_filename['muqeem_outside_ksa_filename']+' </a></td>'+
															   		'<!-- <td><strong>Attachment (Iqama received)</strong><br><a href="'+muqeem_iqama_received_file_path['muqeem_iqama_received_file_path']+'" target="_blank"> '+muqeem_iqama_received_filename['muqeem_iqama_received_filename']+' </a></td> -->'+
															   		'<td colspan="2"><strong>Notes</strong><br> '+muqeem_close_notes['muqeem_close_notes']+' </td>'+
															   '</tr>'+
															   '<!-- <tr>'+
															   '<td colspan="3"><strong>Notes</strong><br> '+muqeem_close_notes['muqeem_close_notes']+' </td>'+
															   '</tr> -->');
    	}); //  end done
		
	}// end function
	// This will display the muqeem
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	//exit HR First start
	$('#exitHrFirstTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestHrFirst tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#exitHrFirstLastVacation').val('');
    	$('#exitHrFirstDateJoined').val('');
    	$('#exitHrFirstAttachment').val('');
		$('#exitHRFirstNotes').data("wysihtml5").editor.setValue();
		$('#exitHRFirstNotes').val('');
		
		var table = $('#listOfExitRequestHrFirst').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}		
		
		encoder_details(tcodeid,'hrfirst'); // Display the encoder details
		employee_details(tcodeid,'hrfirst'); // Display the employee details
		replacement_details(tcodeid,'hrfirst'); // Display the replacement details
		
		$('#exitHrFirstTable').addClass('hideContentAi');
    	$("#exitHrFirstDetails").removeClass('hideContentAi');
    	
    	
    } );
	
    $( '#goBackToExitHrFirstTable, a[href="#exitHrFirst"]').click(function() {
    	$('#exitHrFirstDetails').addClass('hideContentAi');
    	$("#exitHrFirstTable").removeClass('hideContentAi');
    });	
	
    showERTables('#listOfExitRequestHrFirst', 'er_hr_first'); // Display the list of HR First Tables
    
	$('#exitHRFirstNotes').wysihtml5();
	
	// This will update the HR First
	$('#updateExitHRFirst').on('click',function(){
		
		// This is for the Attach Files
		var tcode = $('#hidden_exit_tcode_hrfirst').val();
		
		var er_attach_file = $('#exitHrFirstAttachment').val();
		
		var er_attach_fileLength = er_attach_file.length;
		
		if(er_attach_fileLength > 0){
			
			var er_attach_File = document.getElementById('exitHrFirstAttachment');
			
			if(er_attach_File.length === 0){
				 return;
			}// end if
			
			var data = new FormData();
			
			data.append('SelectedFile', er_attach_File.files[0]);
			
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
			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_hr_first');
	        request.send(data);
		}// end if
		
		// This is for the Attach Files
		
		var formData = {
				'tcode':$('#hidden_exit_tcode_hrfirst').val(),	
				'last_vacation_date':$('#exitHrFirstLastVacation').val(),
				'date_joined_after_vacation':$('#exitHrFirstDateJoined').val(),
				'days_of_last_vacation':$('#exitHrFirstDaysOfLastVacation').text(),
				'hr_first_notes':$('#exitHRFirstNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/exit_request_update_hr_first.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToExitHrFirstTable").attr("disabled", true);
				$("#updateExitHRFirst").attr("disabled", true);
			},
			complete: function(){
				showERTables('#listOfExitRequestFd', 'er_fd'); // Display the list of FD Tables
				$("#goBackToExitHrFirstTable").attr("disabled", false);
				$("#updateExitHRFirst").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showERTables('#listOfExitRequestHrFirst', 'er_hr_first'); // Display the list of HR First Tables
			 
			// Return to previous page
			$('#exitHrFirstDetails').addClass('hideContentAi');
			$("#exitHrFirstTable").removeClass('hideContentAi');
			// Return to previous page
			 
			counterExitRequest(); // This will display the number of pending rquest on the TABS
			 
			//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
			
			 //console.log(data.message);
			
		}); // end done
		
		//console.log(tcode);
	});
	// This will update the HR First
	
	//exit HR First end
	
	/*--------------------------------------------------------------------------------------------------------------*/

	//exit FD start
	$('#exitFdTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestFd tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#exitFdTotaldeduction').val('');
    	$('#exitFdCredit').val('');
    	$('#exitFdAttachment').val('');
		$('#exitFdNotes').data("wysihtml5").editor.setValue();
		$('#exitFdNotes').val('');
		
		var table = $('#listOfExitRequestFd').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'fd'); // Display the encoder details
		employee_details(tcodeid,'fd'); // Display the employee details
		replacement_details(tcodeid,'fd'); // Display the replacement details
		not_editing_hr_first(tcodeid,'fd','True'); // Display the HR First
		
		$('#exitFdTable').addClass('hideContentAi');
    	$("#exitFdDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExitFdTable, a[href="#exitFD"]').click(function() {
    	$('#exitFdDetails').addClass('hideContentAi');
    	$("#exitFdTable").removeClass('hideContentAi');
    });	
    
    showERTables('#listOfExitRequestFd', 'er_fd'); // Display the list of FD Tables
	
	$('#exitFdNotes').wysihtml5();

	$('#task_hrfirst').removeClass('hideContentAi');
	
    $( '.exitHrFirstUpdateInFD').click(function() {
    	$('#exitHrFirstUpdateInFDTable').addClass('hideContentAi');
    	$("#exit_task_hrfirst").removeClass('hideContentAi');
    }); 
    
    $('#Update_Exit_HR_First').on('click', function(){
    	
    	// This will upload the images
    	var tcode = $('#hidden_exit_tcode_fd').val();
    	
    	var exitImage = $('#exitHrFirstAttachmentInFd').val();
		
		var exitImageLength = exitImage.length;
		
		if(exitImageLength > 0){
			var exitFile = document.getElementById('exitHrFirstAttachmentInFd');
			
			if(exitFile.length === 0){
				 return;
			}// end if
			
			var data = new FormData();
			
			data.append('SelectedFile', exitFile.files[0]);
			
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
			};//end 
			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_hr_first');
	        request.send(data);
		}// end if
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_fd').val(),
			'edit_hr_first_notes':$('#exitHrFirstNotesInFD').val(),
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_hr_first_update.php?task=update_hr_first",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_Exit_HR_First").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_Exit_HR_First").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		not_editing_hr_first($('#hidden_exit_tcode_fd').val(),'fd','True'); // Display the HR First
    		
    		$('#exitHrFirstUpdateInFDTable').addClass('hideContentAi');
        	$("#exit_task_hrfirst").removeClass('hideContentAi');
        	
        	function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done
    	
    	//console.log('Update HR First');
    }); // end
    
    // This will update the FD
    $('#Update_FD_On_HR_First').on('click', function(){
    	
    	// This is for the Attach files
    	var tcode = $('#hidden_exit_tcode_fd').val();
    	
    	var er_attach_file = $('#exitFdAttachment').val();
    	
    	var er_attach_fileLength = er_attach_file.length;
    	
    	if(er_attach_fileLength > 0){
    		
    		var er_attach_File = document.getElementById('exitFdAttachment');
    		
    		if(er_attach_File.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', er_attach_File.files[0]);
    		
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
			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_fd');
	        request.send(data);
    	}// end if
    	
    	// This is for the Attach files
    	
    	var formData = {
    			'tcode':$('#hidden_exit_tcode_fd').val(),
				'vacation_request_fd_total_deduction':$('#exitFdTotaldeduction').val(),
				'vacation_request_fd_total_credit':$('#exitFdCredit').val(),
				'vacation_request_fd_notes':$('#exitFdNotes').val()
    	}; // end form
    	
    	$.ajax({
    		type: 'POST',
			url: '../ajax/controller/employee_request/exit_request_update_fd.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToExitFdTable").attr("disabled", true);
				$("#Update_FD_On_HR_First").attr("disabled", true);
			},
			complete: function(){
				showERTables('#listOfExitRequestHrFinal', 'er_hr_final'); // Display the list of HR Final Tables
				$("#goBackToExitFdTable").attr("disabled", false);
				$("#Update_FD_On_HR_First").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
    	})// end
    	
    	.done(function(data){
    		
    		showERTables('#listOfExitRequestFd', 'er_fd'); // Display the list of FD Tables
    		
    		$('#exitFdDetails').addClass('hideContentAi');
        	$("#exitFdTable").removeClass('hideContentAi');
    		
        	counterExitRequest(); // This will display the number of pending rquest on the TABS
    		
    		//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	});// end done
    	
    	//console.log('Update FD');
    });
   
	//exit FD end	
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	//exit HR Final start
	$('#exitHrFinalTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestHrFinal tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#exitHrFinalAttachment').val('');
		$('#exitHrFinalNotes').data("wysihtml5").editor.setValue();
		$('#exitHrFinalNotes').val('');
		
		var table = $('#listOfExitRequestHrFinal').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'hrfinal'); // Display the encoder details
		employee_details(tcodeid,'hrfinal'); // Display the employee details
		replacement_details(tcodeid,'hrfinal'); // Display the replacement details
		not_editing_hr_first(tcodeid,'hrfinal','False'); // Display the HR First
		not_editing_fd(tcodeid,'hrfinal','True'); // Display the FD
		
		// This will display the details for FD - Editing
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_details.php",
    		data: { tcode_id: tcodeid, query: 'hrfinal'}
    	})// end ajax 
    	
    	.done(function( msg ){
    		
    		var employee_total_salary = $.parseJSON(msg);
    		var request_fd_total_deductions = $.parseJSON(msg);
    		var request_fd_credit = $.parseJSON(msg);
    		var request_fd_notes = $.parseJSON(msg);
    		
    		// Length of service
    		var employee_contract_date = $.parseJSON(msg);
    		var emp_info_contract_g_date_employed = $.parseJSON(msg);
    		var sDate = employee_contract_date['employee_contract_date'].split('/');
			var sDate_Day = parseInt(sDate[0],10);
			var sDate_Month = parseInt(sDate[1],10);
			var sDate_Year = parseInt(sDate[2],10);
			var sDate_New = sDate_Year+'/'+sDate_Month+'/'+sDate_Day;
			
			// This wll get the current date in Gregorian Calendar
			var gc = $.calendars.instance(); 
			var d = gc.today();
			var y = d.year();
			var m = d.month();
			var d = d.day();
			
			var currentDate = y + "/" + m + "/" + d;
			
    		// This is for the Generate PDF HR Final 
    		var exit_hrFinalGeneratePdfUrl = "../../tcpdf/hris/pdf_exit_request.php?tcode=" + tcodeid +"& Al Sayegh Group of Companies &los="+difference(Date.parse(currentDate), Date.parse(sDate_New));
    		$("#exit_hrfinal_GeneratePDF").attr("href", exit_hrFinalGeneratePdfUrl);    		
    		// This is for the Generate PDF HR Final
    		
    	}); // end done 
		// This will display the details for FD - Editing
		
		$('#exitHrFinalTable').addClass('hideContentAi');
    	$("#exitHrFinalDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExitHrFinalTable, a[href="#exitHrFinal"]').click(function() {
    	$('#exitHrFinalDetails').addClass('hideContentAi');
    	$("#exitHrFinalTable").removeClass('hideContentAi');
    });	
	
    showERTables('#listOfExitRequestHrFinal', 'er_hr_final'); // Display the list of HR Final Tables
    
	$('#exitHrFinalNotes').wysihtml5();

	$('#exit_task_fd').removeClass('hideContentAi');
	
    $( '.exitFdUpdateInHrFinal').click(function() {
    	$('#exitFdUpdateInHrFinalTable').addClass('hideContentAi');
    	$("#exit_task_fd").removeClass('hideContentAi');
    });       
    
    // This is to update the FD on HR Final Tab
    $('#Update_Exit_FD').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_exit_tcode_hrfinal').val();
    	
    	var exit_attach_file = $('#vacationFDAttachmentInHRFinal').val();
    	
    	var exit_attach_fileLength = exit_attach_file.length;
    	
    	if(exit_attach_fileLength > 0){
    		
    		var exit_attach_file = document.getElementById('vacationFDAttachmentInHRFinal');
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_fd');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_hrfinal').val(),
			'edit_hr_final_total_deduction':$('#ExitInHrFinalTotaldeduction').val(),
			'edit_hr_final_credit':$('#ExitInHrFinalCredit').val(),
			'edit_hr_final_notes':$('#exitInHrFinalNotesOfFd').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_fd_update.php?task=update_fd",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_Exit_FD").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_Exit_FD").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		not_editing_fd($('#hidden_exit_tcode_hrfinal').val(),'hrfinal','True'); // Display the FD
    		
    		$('#exitFdUpdateInHrFinalTable').addClass('hideContentAi');
        	$("#exit_task_fd").removeClass('hideContentAi');

    		function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done
    	
    });// end 
    // This is to update the FD on HR Final Tab
    
    // This is for the Assigned Replacement
    $('#exitAssignedReplacement_HR_Final').on('click', function(){
    	
    	var tcode_replacement = $('#hidden_exit_tcode_hrfinal').val();
    	
    	function reset () {
			$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
			alertify.set({			
			   delay : 2000,
			});
		}// end function
    	
    	reset();
    	
    	alertify.prompt("Assigned Replacement", function (e, str) {
    		if (e) {
    			//console.log(str);
    			// Check if the given value is numeric
    			if($.isNumeric(str) == true){
    				var formData = {
							'tcode':tcode_replacement,
							'replacement_id':str
					}; // end formData
    				
    				$.ajax({
						type: 'POST',
						url: '../ajax/controller/employee_request/request_replacement.php?request=exit_request',
						data: formData,
						beforeSend: function(){
		    				$("#goBackToExitHrFinalTable").attr("disabled", true);
		    				$("#exitAssignedReplacement_HR_Final").attr("disabled", true);
//		    				$("#declineRequest_HR_FINAL").attr("disabled", true);
		    				$("#Update_Exit_HR_Final").attr("disabled", true);
		    			},
		    			complete: function(){
		    				$("#goBackToExitHrFinalTable").attr("disabled", false);
		    				$("#exitAssignedReplacement_HR_Final").attr("disabled", false);
//		    				$("#declineRequest_HR_FINAL").attr("disabled", false);
		    				$("#Update_Exit_HR_Final").attr("disabled", false);
		    			},
		    			dataType: 'json',
		    			encode: true
					}) // end ajax
					
					.done(function(data){
						//console.log(data.message);
						
						replacement_details(tcode_replacement,'hrfinal'); // This function display Replacement details
						
						alertify.success(data.message);
					})// end done
					
    			}else {
    				function reset () {
						$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
						alertify.set({			
						   delay : 2000,
						});
					}// end
					
					reset();
					alertify.error("Error! Only numeric is allowed.");
					return false;
    			}// end if else
    		}else {
    			alertify.error('Cancel! Assigned replacement.');
    		}// end if else
    	}, "Enter the Replacement Employee ID");
    	
    	//console.log('Replacement');
    }); // end
    
    // This is to update the HR Final
    $('#Update_Exit_HR_Final').on('click', function(){
    	
    	// This is for the Attached files
    	var tcode = $('#hidden_exit_tcode_hrfinal').val();
    	
    	var er_attach_file = $('#exitHrFinalAttachment').val();
    	
    	var er_attach_fileLength = er_attach_file.length;
    	
    	if(er_attach_fileLength > 0){
    		
    		var er_attach_File = document.getElementById('exitHrFinalAttachment');
    		
    		if(er_attach_File.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', er_attach_File.files[0]);
    		
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
			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_hr_final');
	        request.send(data);
    	}// end if
    	
    	// This is for the Attached files
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_hrfinal').val(),
			'hr_final_notes':$('#exitHrFinalNotes').val()
    	}; // end formData
    	
    	$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/exit_request_update_hr_final.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToExitHrFinalTable").attr("disabled", true);
				$("#exit_hrfinal_GeneratePDF").attr("disabled", true);
				$("#Declined_Exit_HR_Final").attr("disabled", true);
				$("#Update_Exit_HR_Final").attr("disabled", true);
			},
			complete: function(){
				showERTables('#listOfExitRequestVisa', 'er_visa'); // Display the list of Visa Tables
				$("#goBackToExitHrFinalTable").attr("disabled", false);
				$("#exit_hrfinal_GeneratePDF").attr("disabled", false);
				$("#Declined_Exit_HR_Final").attr("disabled", false);
				$("#Update_Exit_HR_Final").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showERTables('#listOfExitRequestHrFinal', 'er_hr_final'); // Display the list of HR Final Tables
			
			$('#exitHrFinalDetails').addClass('hideContentAi');
	    	$("#exitHrFinalTable").removeClass('hideContentAi');
			
			counterExitRequest(); // This will display the number of pending rquest on the TABS
			
			//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			
			//console.log(data.message);
			
		}); // end done
    	
    }); // end 
    // This is to update the HR Final
    
	//exit HR Final end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
	
	//exit Visa start
	$('#exitVisaTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestVisa tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#exitVisaNumber').val('');
    	$('#exitExitBeforeThisDateG').val('');
    	$('#exitExitBeforeThisDateH').val('');
    	$('#exitVisaAttachment').val('');
		$('#exitVisaNotes').data("wysihtml5").editor.setValue();
		$('#exitVisaNotes').val('');
		
		var table = $('#listOfExitRequestVisa').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'visa'); // Display the encoder details
		employee_details(tcodeid,'visa'); // Display the employee details
		replacement_details(tcodeid,'visa'); // Display the replacement details
		not_editing_hr_first(tcodeid,'visa','False'); // Display the HR First
		not_editing_fd(tcodeid,'visa','False'); // Display the HR First
		not_editing_hrfinal(tcodeid,'visa','True'); // Display the HR Final
		
		$('#exitVisaTable').addClass('hideContentAi');
    	$("#exitVisaDetails").removeClass('hideContentAi');
    	
    	//This will focus on Visa Number
    	$("#exitVisaNumber").focus();
    	
    	//Will check the input for the visa number
    	$('#exitVisaNumber').on('input', function(){
    		
    		var visaNumber = $(this).val();
    		
    		var regx = /[A-Za-z0-9]/;
    		
    		if (!regx.test(visaNumber) || visaNumber.length == '') {
    			$('#goBackToExitVisaTable').attr('disabled', true);
    			$('#Update_Exit_Visa').attr('disabled', true);
    			
    			function reset () {
    				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
    				alertify.set({			
    					delay : 2000,
    				});
    			}// end function
    			
    			reset();
    			alertify.error('Error! Visa Number should be AlphaNumeric.');
    			return false;
    			
    		}else {
    			$('#goBackToExitVisaTable').attr('disabled', false);
    			$('#Update_Exit_Visa').attr('disabled', false);
    		}// end if else
    		
    	}); // end 
    	    	
    } );// end

    $( '#goBackToExitVisaTable, a[href="#exitVisa"]').click(function() {
    	$('#exitVisaDetails').addClass('hideContentAi');
    	$("#exitVisaTable").removeClass('hideContentAi');
    });	
    
    showERTables('#listOfExitRequestVisa', 'er_visa'); // Display the list of Visa Tables
	
	$('#exitVisaNotes').wysihtml5();

	$('#exit_task_hrfinal').removeClass('hideContentAi');
	
    $( '.exitHrFinalUpdateInVisa').click(function() {
    	$('#exitHrFinalUpdateInVisaTable').addClass('hideContentAi');
    	$("#exit_task_hrfinal").removeClass('hideContentAi');
    });       
    
    // This is to update HR Final on Visa Tab
    $('#Update_HR_Final_Exit_Tab').on('click',function(){
    	
    	// This is for the Attached files
    	var tcode = $('#hidden_exit_tcode_visa').val();
    	
    	var er_attach_file = $('#exitHrFinalAttachmentInVisa').val();
    	
    	var er_attach_fileLength = er_attach_file.length;
    	
    	if(er_attach_fileLength > 0){
    		
    		var er_attach_File = document.getElementById('exitHrFinalAttachmentInVisa');
    		
    		if(er_attach_File.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', er_attach_File.files[0]);
    		
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
			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_hr_final');
	        request.send(data);
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_visa').val(),
			'edit_hr_final_notes':$('#exitHrFinalNotesInVisa').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_hr_final_update.php?task=update_hr_final",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_HR_Final_Exit_Tab").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_HR_Final_Exit_Tab").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		not_editing_hrfinal($('#hidden_exit_tcode_visa').val(),'visa','True'); // Display the HR Final
    		
    		$('#exitHrFinalUpdateInVisaTable').addClass('hideContentAi');
        	$("#exit_task_hrfinal").removeClass('hideContentAi');
    		
    		function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
    		
    		//console.log(data.message);
    		
    	}); // end done
    	
    }); // end
    // This is to update HR Final on Visa Tab
    
    // This is to update the Visa
    $('#Update_Exit_Visa').on('click',function(){
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_visa').val(),
			'exit_visa_number':$('#exitVisaNumber').val(),
			'exit_visa_before_this_date_g':$('#exitExitBeforeThisDateG').val(),
			'exit_visa_before_this_date_h':$('#exitExitBeforeThisDateH').val(),
			'exit_visa_notes':$('#exitVisaNotes').val()
    	}; // end formData
    	
    	$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/exit_request_update_visa.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToExitVisaTable").attr("disabled", true);
				$("#Update_Exit_Visa").attr("disabled", true);
			},
			complete: function(){
				 showERTables('#listOfExitRequestTicket', 'er_ticket'); // Display the list of Ticket Tables
				$("#goBackToExitVisaTable").attr("disabled", false);
				$("#Update_Exit_Visa").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showERTables('#listOfExitRequestVisa', 'er_visa'); // Display the list of Visa Tables
			
			$('#exitVisaDetails').addClass('hideContentAi');
	    	$("#exitVisaTable").removeClass('hideContentAi');
			
			counterExitRequest(); // This will display the number of pending rquest on the TABS
			
			//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			
			//console.log(data.message);
			
		}); // end done
    	
    	// Delay the posting
    	setTimeout(function(){
    		// This is for the attached files
	    	var tcode = $('#hidden_exit_tcode_visa').val();
	    	
	    	var er_attach_file = $('#exitVisaAttachment').val();
	    	
	    	var er_attach_fileLength = er_attach_file.length;
	    	
	    	if(er_attach_fileLength > 0){
	    		
	    		var er_attach_File = document.getElementById('exitVisaAttachment');
	    		
	    		if(er_attach_File.length === 0){
					 return;
				}// end if
	    		
	    		var data = new FormData();
	    		
	    		data.append('SelectedFile', er_attach_File.files[0]);
	    		
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
						console.log(resp.status + ': ' + resp.data);
					}// end if
				}; // end
				request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_visa');
		        request.send(data);
	    	}// end if
	    	// This is for the attached files
    	}, 5000);
    	// Delay the posting
    	
    }); // end
    // This is to update the Visa
    
	//exit Visa end	
    
    /*--------------------------------------------------------------------------------------------------------------*/
    
	//exit Ticket start
	$('#exitTicketTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestTicket tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#exitFromTicket').val('');
		$('#exitToTicket').val('');
		$('#exitDepartureDateTicket').val('');
		$('#exitClassTicket').val('');
		$('#exitPriceTicket').val('');
		$('#exitNumberTicket').val('');
		$('#exitAirlineTicket').val('');
		$('#exitTicketAttachment').val('');
		$('#exitTicketNotes').data("wysihtml5").editor.setValue();
		$('#exitTicketNotes').val('');
		
		var table = $('#listOfExitRequestTicket').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'ticket'); // Display the encoder details
		employee_details(tcodeid,'ticket'); // Display the employee details
		replacement_details(tcodeid,'ticket'); // Display the replacement details
		not_editing_hr_first(tcodeid,'ticket','False'); // Display the HR First
		not_editing_fd(tcodeid,'ticket','False'); // Display the HR First
		not_editing_hrfinal(tcodeid,'ticket','False'); // Display the HR Final
		not_editing_visa(tcodeid,'ticket','True'); // Display the Visa
		
		$('#exitTicketTable').addClass('hideContentAi');
    	$("#exitTicketDetails").removeClass('hideContentAi');
    } );// end

    $( '#goBackToExitTicketTable, a[href="#exitTcket"]').click(function() {
    	$('#exitTicketDetails').addClass('hideContentAi');
    	$("#exitTicketTable").removeClass('hideContentAi');
    });	
	
    showERTables('#listOfExitRequestTicket', 'er_ticket'); // Display the list of Ticket Tables
    
	$('#exitTicketNotes').wysihtml5();

	$('#task_visa').removeClass('hideContentAi');
	
    $( '.exitVisaUpdateInTicket').click(function() {
    	$('#exitVisaUpdateInTicketTable').addClass('hideContentAi');
    	$("#exit_task_visa").removeClass('hideContentAi');
    });       
    
    // This is for the dropdown select list for FROM TICKET
    $('#exitFromTicket').empty();
    $('#exitFromTicket').append("<option>Loading...</option>");
    $.ajax({
    	type: "POST",
		  url: "../ajax/controller/airport_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#exitFromTicket').empty();
			  $.each(data, function(i, airport_code, airport_name){
				  $('#exitFromTicket').append('<option value="'+data[i].airport_code+'"> '+data[i].airport_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // This is for the dropdown select list for FROM TICKET
    
    // This is for the dropdown select list TO TICKET
    $('#exitToTicket').empty();
    $('#exitToTicket').append("<option>Loading...</option>");
    $.ajax({
    	type: "POST",
		  url: "../ajax/controller/airport_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#exitToTicket').empty();
			  $.each(data, function(i, airport_code, airport_name){
				  $('#exitToTicket').append('<option value="'+data[i].airport_code+'"> '+data[i].airport_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // This is for the dropdown select list TO TICKET    
    
    // This is for the dropdown select TICKET CLASS 
    $('#exitClassTicket').empty();
    $('#exitClassTicket').append("<option>Loading...</option>");
    $.ajax({
    	type: "POST",
		  url: "../ajax/controller/ticket_class_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#exitClassTicket').empty();
			  $.each(data, function(i, id, ticket_class){
				  $('#exitClassTicket').append('<option value="'+data[i].id+'"> '+data[i].ticket_class+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // This is for the dropdown select TICKET CLASS    
    
	//Will check the input for the ticket number
	$('#exitNumberTicket').on('input', function(){
		
		var ticketNumber = $(this).val();
		
		var regx = /[A-Za-z0-9]/;
		
		if (!regx.test(ticketNumber) || ticketNumber.length == '') {
			$('#goBackToExitTicketTable').attr('disabled', true);
			$('#Update_Exit_Visa').attr('disabled', true);
			
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
					delay : 2000,
				});
			}// end function
			
			reset();
			alertify.error('Error! Ticket Number should be AlphaNumeric.');
			return false;
			
		}else {
			$('#goBackToExitTicketTable').attr('disabled', false);
			$('#Update_Exit_Visa').attr('disabled', false);
		}// end if else
	}); // end 
	//Will check the input for the ticket number
	
	//Will check the input for the ticket price
	$('#exitPriceTicket').on('input', function(){
		
		var ticketPrice = $(this).val();
		
		var regx = /[0-9]/;
		
		if (!regx.test(ticketPrice) || ticketPrice.length == '') {
			$('#goBackToExitTicketTable').attr('disabled', true);
			$('#Update_Exit_Visa').attr('disabled', true);
			
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
					delay : 2000,
				});
			}// end function
			
			reset();
			alertify.error('Error! Ticket Price should be Numeric.');
			return false;
			
		}else {
			$('#goBackToExitTicketTable').attr('disabled', false);
			$('#Update_Exit_Visa').attr('disabled', false);
		}// end if else
	}); // end 
	//Will check the input for the ticket price
	
	// This will update the visa on ticket tab
	$('#Update_Visa_Ticket_Tab').on('click', function(){
		
		var formData = {
			'tcode':$('#hidden_exit_tcode_ticket').val(),
			'exit_visa_number':$('#exitVisaNumberInTicket').val(),
			'exit_visa_before_this_date_g':$('#exitExitBeforeThisDateGInTicket').val(),
			'exit_visa_before_this_date_h':$('#exitExitBeforeThisDateHInTicket').val(),
			'exit_visa_notes':$('#exitVisaNotesInTicket').val()
		}; // end formData
		
		$.ajax({
			type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_visa_update.php?task=update_visa",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_Visa_Ticket_Tab").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_Visa_Ticket_Tab").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			not_editing_visa($('#hidden_exit_tcode_ticket').val(),'ticket','True'); // Display the Visa
			
			$('#exitVisaUpdateInTicketTable').addClass('hideContentAi');
	    	$("#exit_task_visa").removeClass('hideContentAi');
			
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
			
			//console.log(data.message);
		}); // end done
		
	}); // end
	// This will update the visa on ticket tab
	
	// This will update the ticket
	$('#Update_Exit_Ticket').on('click', function(){
		
		var formData = {
			'tcode':$('#hidden_exit_tcode_ticket').val(),
			'exit_from_ticket':$('#exitFromTicket').val(),
			'exit_to_ticket':$('#exitToTicket').val(),
			'exit_departure_date_ticket':$('#exitDepartureDateTicket').val(),
			'exit_class_ticket':$('#exitClassTicket').val(),
			'exit_price_ticket':$('#exitPriceTicket').val(),
			'exit_ticket_number':$('#exitNumberTicket').val(),
			'exit_airline_name':$('#exitAirlineTicket').val(),
			'exit_ticket_notes':$('#exitTicketNotes').val()
		}; // end formData
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/exit_request_update_ticket.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToExitTicketTable").attr("disabled", true);
				$("#Update_Exit_Ticket").attr("disabled", true);
			},
			complete: function(){
				showERTables('#listOfExitRequestClearance', 'er_clearance'); // Display the list of Clearance Tables
				$("#goBackToExitTicketTable").attr("disabled", false);
				$("#Update_Exit_Ticket").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showERTables('#listOfExitRequestTicket', 'er_ticket'); // Display the list of Ticket Tables
			
			$('#exitTicketDetails').addClass('hideContentAi');
	    	$("#exitTicketTable").removeClass('hideContentAi');
	    	
	    	counterExitRequest(); // This will display the number of pending rquest on the TABS
	    	
	    	//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			
			//console.log(data.message);
			
		}); // end done
		
		// Delay the posting
		setTimeout(function(){
			
			// This is for the attached files
			var tcode = $('#hidden_exit_tcode_ticket').val();
			
			var er_attach_file = $('#exitTicketAttachment').val();
			
			var er_attach_fileLength = er_attach_file.length;
			
			if(er_attach_fileLength > 0){
				
				var er_attach_File = document.getElementById('exitTicketAttachment');
				
				if(er_attach_File.length === 0){
					 return;
				}// end if
				
				var data = new FormData();
				
				data.append('SelectedFile', er_attach_File.files[0]);
				
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
						console.log(resp.status + ': ' + resp.data);
					}// end if
				}; // end
				request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_ticket');
		        request.send(data);
			}// end if
			// This is for the attached files
			
		}, 5000);
		// Delay the posting
		
	}); // end
	// This will update the ticket
    
	//exit Ticket end
    
    /*--------------------------------------------------------------------------------------------------------------*/
    
	//exit Clearance start
	$('#exitClearanceTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestClearance tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#exitFromTicketInClearance').val('');
		$('#exitToTicketInClearance').val('');
		$('#exitDepartureDateTicketInClearance').val('');
		$('#exitClassTicketInClearance').val('');
		$('#exitPriceTicketInClearance').val('');
		$('#exitNumberTicketInClearance').val('');
		$('#exitAirlineTicketInClearance').val('');
		$('#exitTicketNotesInClearance').val('');
    	
    	var table = $('#listOfExitRequestClearance').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'clearance'); // Display the encoder details
		employee_details(tcodeid,'clearance'); // Display the employee details
		replacement_details(tcodeid,'clearance'); // Display the replacement details
		not_editing_hr_first(tcodeid,'clearance','False'); // Display the HR First
		not_editing_fd(tcodeid,'clearance','False'); // Display the HR First
		not_editing_hrfinal(tcodeid,'clearance','False'); // Display the HR Final
		not_editing_visa(tcodeid,'clearance','False'); // Display the Visa
		not_editing_ticket(tcodeid,'clearance','True'); // Display the Ticket
		
		$('#exitClearanceTable').addClass('hideContentAi');
    	$("#exitClearanceDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExitClearanceTable, a[href="#exitClearance"]').click(function() {
    	$('#exitClearanceDetails').addClass('hideContentAi');
    	$("#exitClearanceTable").removeClass('hideContentAi');
    });	
	
    showERTables('#listOfExitRequestClearance', 'er_clearance'); // Display the list of Clearance Tables
    
	$('#exitClearanceNotes').wysihtml5();

	$('#exit_task_ticket').removeClass('hideContentAi');
	
    $( '.exitTicketUpdateInClearance').click(function() {
    	$('#exitTicketUpdateInClearanceTable').addClass('hideContentAi');
    	$("#exit_task_ticket").removeClass('hideContentAi');
    }); 
     
    // This will update the ticket on clearance tab
    $('#Update_Ticket_Clearance_Tab').on('click', function(){
    	
    	// This is for the Attached files
    	var tcode = $('#hidden_exit_tcode_clearance').val();
    	
    	var er_attach_file = $('#exitVisaAttachmentInTicket').val();
    	
    	var er_attach_fileLength = er_attach_file.length;
    	
    	if(er_attach_fileLength > 0){
    		
    		var er_attach_File = document.getElementById('exitVisaAttachmentInTicket');
    		
    		if(er_attach_File.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', er_attach_File.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_ticket');
	        request.send(data);
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_clearance').val(),
			'exit_from_ticket_clearance':$('#exitFromTicketInClearance').val(),
			'exit_to_ticket_clearance':$('#exitToTicketInClearance').val(),
			'exit_departure_date_clearance':$('#exitDepartureDateTicketInClearance').val(),
			'exit_class_clearance':$('#exitClassTicketInClearance').val(),
			'exit_price_clearance':$('#exitPriceTicketInClearance').val(),
			'exit_number_clearance':$('#exitNumberTicketInClearance').val(),
			'exit_airline_clearance':$('#exitAirlineTicketInClearance').val(),
			'exit_notes_clearance':$('#exitTicketNotesInClearance').val()
		}; // end formData
    	
    	$.ajax({
			type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_ticket_update.php?task=update_ticket",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_Ticket_Exit_Tab").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_Ticket_Exit_Tab").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			not_editing_ticket($('#hidden_exit_tcode_clearance').val(),'clearance','True'); // Display the Ticket
			
			$('#exitTicketUpdateInClearanceTable').addClass('hideContentAi');
	    	$("#exit_task_ticket").removeClass('hideContentAi');
	    	
	    	function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
			
			//console.log(data.message);
			
		}); // end done
    	
    }); // end
    // This will update the ticket on clearance tab
    
    // This will update the clearance
    $('#Update_Exit_Clearance').on('click', function(){
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_clearance').val(),
			'exit_clearance_benefit':$('#ExitClearanceBenefit').val(),
			'exit_clearance_ticket':$('#ExitClearanceTicket').val(),
			'exit_clearance_notes':$('#exitClearanceNotes').val()
		}; // end formData
    	
    	$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/exit_request_update_clearance.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToExitClearanceTable").attr("disabled", true);
				$("#Update_Exit_Clearance").attr("disabled", true);
			},
			complete: function(){
				showERTables('#listOfExitRequestMuqeem', 'er_muqeem'); // Display the list of Muqeem Tables
				$("#goBackToExitClearanceTable").attr("disabled", false);
				$("#Update_Exit_Clearance").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
    	
		.done(function(data){
			
			showERTables('#listOfExitRequestClearance', 'er_clearance'); // Display the list of Clearance Tables
			 
			$('#exitClearanceDetails').addClass('hideContentAi');
	    	$("#exitClearanceTable").removeClass('hideContentAi');
	    	
	    	counterExitRequest(); // This will display the number of pending rquest on the TABS
	    	
	    	//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
			
			//console.log(data.message);
			
		}); // end done
    	
    	// Delay the posting
    	setTimeout(function(){
    		
    		// This is for the attached files
    		var tcode = $('#hidden_exit_tcode_clearance').val();
    		
    		var er_attach_file = $('#exitClearanceAttachment').val();
    		
    		var er_attach_fileLength = er_attach_file.length;
    		
    		if(er_attach_fileLength > 0){
    			
    			var er_attach_File = document.getElementById('exitClearanceAttachment');
    			
    			if(er_attach_File.length === 0){
					 return;
				}// end if
    			
    			var data = new FormData();
    			
    			data.append('SelectedFile', er_attach_File.files[0]);
    			
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
    			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_clearance');
		        request.send(data);
    		}// end if
    		// This is for the attached files
    		
    	}, 5000);
    	// Delay the posting
    	
    }); // end
    // This will update the clearance
    
	//exit Clearance end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
    
	//exit Muqeem start
	$('#exitMuqeemTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestMuqeem tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#exitKsaLeavingDateG').val('');
		$('#exitKsaLeavingDateH').val('');
		$('#exitMuqeemNotes').val('');
		$('#exitMuqeemAttachmentOutsideKSA').val('');
		$('#exitMuqeemAttachmentIqamaReceived').val('');
		
		var table = $('#listOfExitRequestMuqeem').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'muqeem'); // Display the encoder details
		employee_details(tcodeid,'muqeem'); // Display the employee details
		replacement_details(tcodeid,'muqeem'); // Display the replacement details
		not_editing_hr_first(tcodeid,'muqeem','False'); // Display the HR First
		not_editing_fd(tcodeid,'muqeem','False'); // Display the HR First
		not_editing_hrfinal(tcodeid,'muqeem','False'); // Display the HR Final
		not_editing_visa(tcodeid,'muqeem','False'); // Display the Visa
		not_editing_ticket(tcodeid,'muqeem','False'); // Display the Ticket
		not_editing_clearance(tcodeid,'muqeem','True'); // Display the Clearance
		
		$('#exitMuqeemTable').addClass('hideContentAi');
    	$("#exitMuqeemDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExitMuqeemTable, a[href="#exitMuqeem"]').click(function() {
    	$('#exitMuqeemDetails').addClass('hideContentAi');
    	$("#exitMuqeemTable").removeClass('hideContentAi');
    });	
    
    showERTables('#listOfExitRequestMuqeem', 'er_muqeem'); // Display the list of Muqeem Tables
	
	$('#exitMuqeemNotes').wysihtml5();

	$('#exit_task_clearance').removeClass('hideContentAi');
	
    $( '.exitClearanceUpdateInMuqeem').click(function() {
    	$('#exitClearanceUpdateInMuqeemTable').addClass('hideContentAi');
    	$("#exit_task_clearance").removeClass('hideContentAi');
    }); 
    
    // This will update the clearance on muqeem tab
    $('#Update_Clearance_Exit_Tab').on('click', function(){
    	
    	// This is for the Attached files
    	var tcode = $('#hidden_exit_tcode_muqeem').val();
    	
    	var er_attach_file = $('#exitClearanceAttachmentInMuqeem').val();
    	
    	var er_attach_fileLength = er_attach_file.length;
    	
    	if(er_attach_fileLength > 0){
    		
    		var er_attach_File = document.getElementById('exitClearanceAttachmentInMuqeem');
    		
    		if(er_attach_File.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', er_attach_File.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_clearance');
	        request.send(data);
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_muqeem').val(),
			'exit_notes_clearance':$('#exitClearanceNotesInMuqeem').val()
		}; // end formData
    	
    	$.ajax({
			type: "POST",
    		url: "../ajax/controller/employee_request/exit_request_clearance_update.php?task=update_clearance",
    		data: formData,
    		beforeSend: function(){
    			$("#Update_Clearance_Exit_Tab").attr("disabled", true);
    		},
    		complete: function(){
    			$("#Update_Clearance_Exit_Tab").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			not_editing_clearance($('#hidden_exit_tcode_muqeem').val(),'muqeem','True'); // Display the Clearance
			
			$('#exitClearanceUpdateInMuqeemTable').addClass('hideContentAi');
	    	$("#exit_task_clearance").removeClass('hideContentAi');
	    	
	    	function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
			
			//console.log(data.message);
			
		}); // end done
    	
    }); // end
    // This will update the clearance on muqeem tab
    
    // This will update the muqeem
    $('#Update_Exit_Muqeem').on('click', function(){
    	
    	var formData = {
			'tcode':$('#hidden_exit_tcode_muqeem').val(),
			'exit_ksa_leaving_date_g':$('#exitKsaLeavingDateG').val(),
			'exit_ksa_leaving_date_h':$('#exitKsaLeavingDateH').val(),
			'exit_muqeem_notes':$('#exitMuqeemNotes').val()
		}; // end formData
    	
    	$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/exit_request_update_muqeem.php',
			data: formData,
			beforeSend: function(){
				$("#goBackToExitMuqeemTable").attr("disabled", true);
				$("#Update_Exit_Muqeem").attr("disabled", true);
			},
			complete: function(){
				//showERTables('#listOfExitRequestMuqeem', 'er_muqeem'); // Display the list of Muqeem Tables
				$("#goBackToExitMuqeemTable").attr("disabled", false);
				$("#Update_Exit_Muqeem").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			showERTables('#listOfExitRequestMuqeem', 'er_muqeem'); // Display the list of Muqeem Tables
			
			$('#exitMuqeemDetails').addClass('hideContentAi');
	    	$("#exitMuqeemTable").removeClass('hideContentAi');
			
			counterExitRequest(); // This will display the number of pending rquest on the TABS
			
			//This will show the ALERT
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
			
			//console.log(data.message);
			
		}); // end done
    	
    	// Delay the posting
    	
    	// Attachment (Outside KSA)
    	setTimeout(function(){
    		// This is for the attached files
    		var tcode = $('#hidden_exit_tcode_muqeem').val();
    		
    		var er_attach_file = $('#exitMuqeemAttachmentOutsideKSA').val();
    		
    		var er_attach_fileLength = er_attach_file.length;
    		
    		if(er_attach_fileLength > 0){
    			
    			var er_attach_File = document.getElementById('exitMuqeemAttachmentOutsideKSA');
    			
    			if(er_attach_File.length === 0){
					 return;
				}// end if
    			
    			var data = new FormData();
    			
    			data.append('SelectedFile', er_attach_File.files[0]);
    			
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
						console.log(resp.status + ': ' + resp.data);
					}// end if
    			}; // end
    			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_muqeem_outside_ksa');
		        request.send(data);
    		}// end if
    		// This is for the attached files
    	}, 5000);
    	
    	// Attachment (Iqama received)
//    	setTimeout(function(){
//    		var tcode = $('#hidden_exit_tcode_muqeem').val();
//    		
//    		var er_attach_file = $('#exitMuqeemAttachmentIqamaReceived').val();
//    		
//    		var er_attach_fileLength = er_attach_file.length;
//    		
//    		if(er_attach_fileLength > 0){
//    			
//    			var er_attach_File = document.getElementById('exitMuqeemAttachmentIqamaReceived');
//    			
//    			if(er_attach_File.length === 0){
//					 return;
//				}// end if
//    			
//    			var data = new FormData();
//    			
//    			data.append('SelectedFile', er_attach_File.files[0]);
//    			
//    			var request = new XMLHttpRequest();
//    			request.onreadystatechange = function(){
//    				if(request.readyState == 4){
//						try {
//							var resp = JSON.parse(request.response);
//						}catch(e){
//							var resp = {
//								status: 'error',
//								data: 'Unknown error occurred: [' + request.responseText + ']'
//							};// end
//						}// end
//						console.log(resp.status + ': ' + resp.data);
//					}// end if
//    			}; // end
//    			request.open('POST', '../ajax/controller/employee_request/upload_exit_request_attach_file.php?tcode='+tcode+'&path=er_muqeem_iqama_received');
//		        request.send(data);
//    		}// eif
//    		
//    	}, 5000);
    	// Delay the posting
    	
    }); // end
    // This will update the muqeem
    
	//exit Muqeem end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
    
	//exit Closed start
	$('#exitClosedTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfExitRequestClosed').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'closed'); // Display the encoder details
		employee_details(tcodeid,'closed'); // Display the employee details
		replacement_details(tcodeid,'closed'); // Display the replacement details
		not_editing_hr_first(tcodeid,'closed','False'); // Display the HR First
		not_editing_fd(tcodeid,'closed','False'); // Display the HR First
		not_editing_hrfinal(tcodeid,'closed','False'); // Display the HR Final
		not_editing_visa(tcodeid,'closed','False'); // Display the Visa
		not_editing_ticket(tcodeid,'closed','False'); // Display the Ticket
		not_editing_clearance(tcodeid,'closed','False'); // Display the Clearance
		not_editing_muqeem(tcodeid,'closed'); // Display the Muqeem
		
		$('#exitClosedTable').addClass('hideContentAi');
    	$("#exitClosedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExitClosedTable, a[href="#exitClosed"]').click(function() {
    	$('#exitClosedDetails').addClass('hideContentAi');
    	$("#exitClosedTable").removeClass('hideContentAi');
    });	
    
    showERTables('#listOfExitRequestClosed', 'er_closed'); // Display the list of Closed Tables
	
	//exit Closed end    
    
    /*--------------------------------------------------------------------------------------------------------------*/
    
	//exit Declined start
	$('#exitDeclineddTable').removeClass('hideContentAi');
	
	$('#listOfExitRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfExitRequestDeclined').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[9];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[11] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'declined'); // Display the encoder details
		employee_details(tcodeid,'declined'); // Display the employee details
		replacement_details(tcodeid,'declined'); // Display the replacement details
		not_editing_hr_first(tcodeid,'declined','False'); // Display the HR First
		not_editing_fd(tcodeid,'declined','False'); // Display the HR First
		not_editing_hrfinal(tcodeid,'declined','False'); // Display the HR Final
		not_editing_visa(tcodeid,'declined','False'); // Display the Visa
		not_editing_ticket(tcodeid,'declined','False'); // Display the Ticket
		not_editing_clearance(tcodeid,'declined','False'); // Display the Clearance
		not_editing_muqeem(tcodeid,'declined'); // Display the Muqeem
		
		$('#exitDeclineddTable').addClass('hideContentAi');
    	$("#exitDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#goBackToExitDeclinedTable, a[href="#exitDeclined"]').click(function() {
    	$('#exitDeclinedDetails').addClass('hideContentAi');
    	$("#exitDeclineddTable").removeClass('hideContentAi');
    });	
    
    showERTables('#listOfExitRequestDeclined', 'er_declined'); // Display the list of Declined Tables
	
	//exit Declined end	    

	/*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#exitHRFirstTableH').addClass('hideContentAi');
		$('#updateExitHRFirst').addClass('hideContentAi');
		
		$('#exitFdTableH').addClass('hideContentAi');
		$('#Update_FD_On_HR_First').addClass('hideContentAi');		
		
		$('#exitHrFinalTableH').addClass('hideContentAi');
		$('#exit_hrfinal_GeneratePDF').addClass('hideContentAi');
		$('#exitAssignedReplacement_HR_Final').addClass('hideContentAi');
		$('#Update_Exit_HR_Final').addClass('hideContentAi');
		
		$('#exitVisaTableH').addClass('hideContentAi');
		$('#Update_Exit_Visa').addClass('hideContentAi');
		
		$('#exitTicketTableH').addClass('hideContentAi');
		$('#Update_Exit_Ticket').addClass('hideContentAi');		
		
		$('#exitClearanceTableH').addClass('hideContentAi');
		$('#Update_Exit_Clearance').addClass('hideContentAi');		
		
		$('#exitMuqeemTableH').addClass('hideContentAi');
		$('#Update_Exit_Muqeem').addClass('hideContentAi');				
	}
	//disable button and update end   
	
} );
