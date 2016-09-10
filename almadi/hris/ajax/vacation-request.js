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
	
	// This will compute the xx year(s) xx month(s) xx day(s)
	function difference(d1, d2, display) {
		moment().utcOffset(+0300);
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
	
	
	/* ------------------------------------------------------------------------------------------------------------------------ */
	
	counterVacationRequest(); // This will display the number of pending rquest on the TABS
	
	// This will count the number of request of all request
	function counterVacationRequest(){
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/vacation_request_counter.php"
		}) //end ajax
		
		.done(function( msg ){
			
			// Vacation HR First
			var vr_hr_first_total = $.parseJSON(msg);
			$("#vr_hr_first_total").text(vr_hr_first_total['vr_hr_first_total']);
			
			// Vacation FD
			var vr_fd_total = $.parseJSON(msg);
			$("#vr_fd_total").text(vr_fd_total['vr_fd_total']);
			
			// Vacation HR Final
			var vr_hr_final_total = $.parseJSON(msg);
			$("#vr_hr_final_total").text(vr_hr_final_total['vr_hr_final_total']);
			
			// Vacation Visa
			var vr_visa_total = $.parseJSON(msg);
			$("#vr_visa_total").text(vr_visa_total['vr_visa_total']);
			
			// Vacation Ticket
			var vr_ticket_total = $.parseJSON(msg);
			$("#vr_ticket_total").text(vr_ticket_total['vr_ticket_total']);
			
			// Vacation Clearance
			var vr_clearance_total = $.parseJSON(msg);
			$("#vr_clearance_total").text(vr_clearance_total['vr_clearance_total']);
			
			// Vacation Muqeem
			var vr_muqeem_total = $.parseJSON(msg);
			$("#vr_muqeem_total").text(vr_clearance_total['vr_muqeem_total']);
			
			// Vacation Closed
			var vr_closed_total = $.parseJSON(msg);
			$("#vr_closed_total").text(vr_closed_total['vr_closed_total']);
			
			// Vacation Declined
			var vr_declined_total = $.parseJSON(msg);
			$("#vr_declined_total").text(vr_declined_total['vr_declined_total']);
			
			// Vacation Total
			var vr_grand_total = $.parseJSON(msg);
			$("#vr_grand_total").text(vr_grand_total['vr_grand_total']);
			
			//console.log(vr_hr_first_total['vr_hr_first_total']);
			
		});
	}//end counter request
	// This will count the number of request of all request
	
	/* ------------------------------------------------------------------------------------------------------------------------ */
	
	// This will display the list of request
	function showVRTables(table_name, task){
    	//console.log(table_name + ' ' + task);
		
		var dataTable = $(table_name).DataTable({

			"fnRowCallback": function( row, data, index, oSettings ){
				// 1 - Personal information
				if(jQuery.inArray("1", data[11])!='-1'){
					var pinfo = 'Personal information <br>';
				}else {
					var pinfo = '';
				}
				
				// 2 - Contract information
				if(jQuery.inArray("2", data[11])!='-1'){
					var cinfo = 'Contract information <br>';
				}else {
					var cinfo = '';
				}
				
				// 3 - Salary information
				if(jQuery.inArray("3", data[11])!='-1'){
					var sinfo = 'Salary information <br>';
				}else {
					var sinfo = '';
				}
				
				// 4 - Passport information
				if(jQuery.inArray("4", data[11])!='-1'){
					var psinfo = 'Passport information <br>';
				}else {
					var psinfo = '';
				}
				
				// 5 - Iqama information
				if(jQuery.inArray("5", data[11])!='-1'){
					var iqinfo = 'Iqama information <br>';
				}else {
					var iqinfo = '';
				}
				
				// 6 - Medical information
				if(jQuery.inArray("6", data[11])!='-1'){
					var minfo = 'Medical information <br>';
				}else {
					var minfo = '';
				}
				
				// 7 - Upload files
				if(jQuery.inArray("7", data[11])!='-1'){
					var finfo = 'Document photo <br>';
				}else {
					var finfo = '';
				}
				
				var mstring = data[2]+' having following incorrect data: <br>';
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
			},
//			"fnRowCallback": function( row, data, index ){
//				if(jQuery.isEmptyObject(data[9]) || data[9] == ''){
//					row.className = "invalidContractDate";
//					return row;
//				}else {
//					row.className = "validContractDate";
//					return row;
//				}
//			},
			"processing": true,
			"serverSide": true,	
			"destroy": true,
			"ajax": "../ajax/controller/employee_request/vacation_request_list.php?request_type="+task,
			"iDisplayLength": 10,
			//"order": [[ 0, "asc" ]],
			"columnDefs": [
				{ className: "dt-center", "targets": [0,1,2,3,4,5,6,7,8] }
			]
		}); // end data table
		
    }// end function
	// This will display the list of request
	
	/* ------------------------------------------------------------------------------------------------------------------------ */
	
	// This will display the encoder details
	function encoder_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var encoderID = $.parseJSON(msg);
    		var encoderName = $.parseJSON(msg);
    		var encoderCreated = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		$('#encoder_details_'+$query+' > thead').empty();
			$('#encoder_details_'+$query+' > thead').append('<tr>'+
																	'<th colspan="4">Encoder details <span class="muted">- '+$tcode+'</span> </th>'+
																	'<input type="hidden" id="hidden_tcode_'+$query+'" value="'+$tcode+'" />'+
																	'</tr>');
			
			//Encoder details
			$('#encoder_details_'+$query+' > tbody').empty();
			$('#encoder_details_'+$query+' > tbody').append('<tr>'+
																	'<td><strong>Emp.ID</strong><br> '+encoderID['encoder_id']+' </td>'+
																	'<td><strong>Name</strong><br> '+encoderName['encoder_name']+' </td>'+
																	'<td><strong>Created date</strong><br> '+encoderCreated['encoder_created']+' </td>'+
																	'<td><strong>Elapsed day(s)</strong><br> '+elapsed_days['elapsed_days']+' </td>'+
																	'</tr>');
    		
    	});// end done
		
	}// end
	
	/* ------------------------------------------------------------------------------------------------------------------------ */
	
	function employee_details($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var empID = $.parseJSON(msg);
    		var empName = $.parseJSON(msg);
    		var empPName = $.parseJSON(msg);
    		
    		var empPosition = $.parseJSON(msg);
    		var empLeaveType = $.parseJSON(msg);
    		var empNumberOfDays = $.parseJSON(msg);
    		
    		var expectedDepartureFromDate = $.parseJSON(msg);
    		var expectedDepartureToDate = $.parseJSON(msg);
    		var whoWillPayVisa = $.parseJSON(msg);
    		
    		var replacementRequirements = $.parseJSON(msg);
    		var vacationRequestFilePath = $.parseJSON(msg);
    		var vacationRequestFile = $.parseJSON(msg);
    		var employeeIqamaNumber = $.parseJSON(msg);
    		
    		var employeeContractDateEmployedG = $.parseJSON(msg);
    		var employeeContractYears = $.parseJSON(msg);
    		
    		var last_vacation_date = $.parseJSON(msg);
    		var date_joined_last_vacation = $.parseJSON(msg);
    		var days_of_last_vacation = $.parseJSON(msg);
    		
    		var reason_for_vacation = $.parseJSON(msg);
    		
    		var total_salary_fd_tab = $.parseJSON(msg);
    		$('#VacationFdTotalSalary').val(total_salary_fd_tab['total_salary_fd_tab']);
    		
    		// Display length of service 
    		// 9 year(s) 11 month(s) 4 day(s)
    		// From the Contract Date Gregorian to the current system date
    		var emp_info_contract_g_date_employed = $.parseJSON(msg);
    		var sDate = employeeContractDateEmployedG['employee_info_contract_g_date_employed'].split('/');
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
			
			//console.log(d);
			//console.log(y);
			//console.log(m);
			//console.log(d);
			
			//var systemDate = new Date();
			//var systemDate = new Date("GMT+0300 (Arab Standard Time)");
			//var twoDigitMonth = systemDate.getMonth();
			//var twoDigitDate = systemDate.getDate();
			//var currentDate = systemDate.getFullYear() + "/" + twoDigitMonth + "/" + twoDigitDate;
			//var currentDate = systemDate.getFullYear() + "/" + systemDate.getMonth() + "/" + systemDate.getDate();
    		
    		//If the TAB is HR First -> display the inout fields for last vacation and date joined after vacation
			//If the TAB are FD, HR Final, Visa, Ticket, Clearance, Muqeem display the value
    		if($query == 'hrfirst'){  			
    			$('#employee_details_'+$query+' > tbody').empty();
				$('#employee_details_'+$query+' > tbody').append('<tr>'+
						'<td><strong>Emp.ID</strong><br> '+empID['employee_id']+' </td>'+
						'<td><strong>Name</strong><br> '+empName['employee_name']+' </td>'+
						'<td><strong>Project name</strong><br> '+empPName['employee_pname']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Job title</strong><br> '+empPosition['employee_position']+' </td>'+
					 	'<td><strong>Leave type</strong><br> '+empLeaveType['employee_leave_type']+' </td>'+
						'<td><strong>Number of days</strong><br> '+empNumberOfDays['employee_number_of_days']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Departure date (From)</strong><br> '+expectedDepartureFromDate['expected_departure_from_date']+' </td>'+
					 	'<td><strong>Departure date (To)</strong><br> '+expectedDepartureToDate['expected_departure_to_date']+' </td>'+
					 	'<td><strong>Visa payment</strong><br> '+whoWillPayVisa['who_will_pay_visa']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Replacement</strong><br> '+replacementRequirements['replacement_requirements']+' </td>'+
					 	'<td><strong>Attachment</strong><br> <a href="'+vacationRequestFilePath['vacation_request_file_path']+'" target="_blank"> '+vacationRequestFile['vacation_request_file']+' </a> </td>'+
					 	'<td><strong>Iqama number</strong><br> '+employeeIqamaNumber['employee_iqama_number']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Contract date</strong><br> '+employeeContractDateEmployedG['employee_info_contract_g_date_employed']+' </td>'+
					 	'<td><strong>Years of contract</strong><br> '+employeeContractYears['employee_info_contract_years']+' </td>'+
					 	'<td><strong>Length of service</strong><br> '+difference(Date.parse(currentDate), Date.parse(sDate_New))+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><input type="text" class="input-block-level" id="vacationHrFirstLastVacation" placeholder="Last vacation"></td>'+
					 	'<td><input type="text" class="input-block-level" id="vacationHrFirstDateJoined" placeholder="Date joined after vacation"></td>'+
					 	'<td><strong>Days of last vacation</strong><br> <span id="vacationHrFirstDaysOfLastVacation"> 0 year(s) 0 month(s) 0 day(s)</span></td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td colspan="3"><strong>Notes</strong><br> '+reason_for_vacation['reason_for_vacation']+' </td>'+
					 '</tr>');
    		}else {
    			$('#employee_details_'+$query+' > tbody').empty();
				$('#employee_details_'+$query+' > tbody').append('<tr>'+
						'<td><strong>Emp.ID</strong><br> '+empID['employee_id']+' </td>'+
						'<td><strong>Name</strong><br> '+empName['employee_name']+' </td>'+
						'<td><strong>Project name</strong><br> '+empPName['employee_pname']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Job title</strong><br> '+empPosition['employee_position']+' </td>'+
					 	'<td><strong>Leave type</strong><br> '+empLeaveType['employee_leave_type']+' </td>'+
						'<td><strong>Number of days</strong><br> '+empNumberOfDays['employee_number_of_days']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Departure date (From)</strong><br> '+expectedDepartureFromDate['expected_departure_from_date']+' </td>'+
					 	'<td><strong>Departure date (To)</strong><br> '+expectedDepartureToDate['expected_departure_to_date']+' </td>'+
					 	'<td><strong>Visa payment</strong><br> '+whoWillPayVisa['who_will_pay_visa']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Replacement</strong><br> '+replacementRequirements['replacement_requirements']+' </td>'+
					 	'<td><strong>Attachment</strong><br> <a href="'+vacationRequestFilePath['vacation_request_file_path']+'" target="_blank"> '+vacationRequestFile['vacation_request_file']+' </a> </td>'+
					 	'<td><strong>Iqama number</strong><br> '+employeeIqamaNumber['employee_iqama_number']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Contract date</strong><br> '+employeeContractDateEmployedG['employee_info_contract_g_date_employed']+' </td>'+
					 	'<td><strong>Years of contract</strong><br> '+employeeContractYears['employee_info_contract_years']+' </td>'+
					 	'<td><strong>Length of service</strong><br> '+difference(Date.parse(currentDate), Date.parse(sDate_New))+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td><strong>Last vacation</strong><br> '+last_vacation_date['last_vacation_date']+' </td>'+
					 	'<td><strong>Date joined after vacation</strong><br> '+date_joined_last_vacation['date_joined_last_vacation']+' </td>'+
					 	'<td><strong>Days of last vacation</strong><br> '+days_of_last_vacation['days_of_last_vacation']+' </td>'+
					 '</tr>'+
					 '<tr>'+
					 	'<td colspan="3"><strong>Notes</strong><br> '+reason_for_vacation['reason_for_vacation']+' </td>'+
					 '</tr>');
    		}// end if else
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$("#vacationHrFirstLastVacation").attr("disabled", true);
				$("#vacationHrFirstDateJoined").attr("disabled", true);
			}
			//disable button and update end      	
    		
    		// Date Picker for Last vacation and Date joined after vacation
			//datepicker end
			var gregorianCalendarDetails = $.calendars.instance('gregorian');
			var islamicCalendarDetails = $.calendars.instance('islamic');
			
			$('#vacationHrFirstLastVacation').calendarsPicker({
				calendar: gregorianCalendarDetails,
				dateFormat: 'd/m/yyyy'
			});	
			//datepicker end			
			
			$('#vacationHrFirstDateJoined').calendarsPicker({
				calendar: gregorianCalendarDetails,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var sDate = $('#vacationHrFirstLastVacation').val().split('/');
					var sDate_Day = parseInt(sDate[0],10);
					var sDate_Month = parseInt(sDate[1],10);
					var sDate_Year = parseInt(sDate[2],10);
					var sDate_New = sDate_Year+'/'+sDate_Month+'/'+sDate_Day;
					
					var eDate = $('#vacationHrFirstDateJoined').val().split('/');
					var eDate_Day = parseInt(eDate[0],10);
					var eDate_Month = parseInt(eDate[1],10);
					var eDate_Year = parseInt(eDate[2],10);
					var eDate_New = eDate_Year+'/'+eDate_Month+'/'+eDate_Day;
					
					//difference(Date.parse("2014/01/20"), Date.parse("2012/08/17"))
					//difference(Date.parse(eDate_New), Date.parse(sDate_New), 'vacationHrFirstDaysOfLastVacation'); 
					$('#vacationHrFirstDaysOfLastVacation').text(difference(Date.parse(eDate_New), Date.parse(sDate_New))); // This is the function from MOMENT.JS to compute the xx year(s) xx months(s) xx day(s)
				}// end
			}); // end
			// Date Picker for Last vacation and Date joined after vacation
    		
    	});// end done
		
	}// end
	
	/* ------------------------------------------------------------------------------------------------------------------------ */
	
	function vacation_hr_first($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_update_by = $.parseJSON(msg);
			var hr_first_name = $.parseJSON(msg);
			var hr_update_created = $.parseJSON(msg);
			var hr_update_days = $.parseJSON(msg);
			var hr_first_file_path = $.parseJSON(msg);
			var hr_first_filename = $.parseJSON(msg);
			var hr_first_notes = $.parseJSON(msg);
			var hr_first_notes_edit = $.parseJSON(msg);
			
			if($display == 'True'){
				$('#hrFirstEditInFDTable > thead').empty();	
				$('#hrFirstEditInFDTable > thead').append('<tr>'+
																			'<th colspan="3">HR First <span class="pull-right hrFirstEditInFD"><i class="icon-large icon-pencil"></i></span></th>'+
																		    '</tr>');	
			}else {
				$('#hrFirstEditInFDTable > thead').empty();	
				$('#hrFirstEditInFDTable > thead').append('<tr>'+
																			'<th colspan="3">HR First </th>'+
																		    '</tr>');	
			}
			
			$('#hrFirstEditInFDTable > tbody').empty();
			$('#hrFirstEditInFDTable > tbody').append('<tr>'+
																			'<td><strong>File Number</strong><br> '+hr_update_by['hr_update_by']+' </td>'+
																			'<td><strong>Updated by</strong><br> '+hr_first_name['hr_first_name']+' </td>'+
																			'<td><strong>Date</strong><br> '+hr_update_created['hr_update_created']+' </td>'+
																		'</tr>'+
																		'<tr>'+
																			'<td><strong>Elapsed</strong><br> '+hr_update_days['hr_update_days']+' </td>'+
																			'<td colspan="2"><strong>Attachment</strong><br>  <a href="'+hr_first_file_path['hr_first_file_path']+'" target="_blank"> '+hr_first_filename['hr_first_filename']+' </a> </td>'+
																		'</tr>'+
																		'<tr>'+
																			'<td colspan="3"><strong>Notes</strong><br> '+hr_first_notes['hr_first_notes']+' </td>'+
																		'</tr>');
			
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.hrFirstEditInFD').addClass('hideContentAi');
			}
			//disable button and update end
			
			$( '.hrFirstEditInFD').click(function() {
				
				$('#vacation_hr_first_editing_on_fd_tab').empty();
				$('#vacation_hr_first_editing_on_fd_tab').append(
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="vacationHRFirstNotesInFD">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="vacationHRFirstNotesInFD"> </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+		
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="vacationHRFirstAttachmentInFd">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="vacationHRFirstAttachmentInFd" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+hr_first_file_path['hr_first_file_path']+'" target="_blank"> '+hr_first_filename['hr_first_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
						);
				
				$('#vacationHRFirstNotesInFD').wysihtml5();    
	    		$('#vacationHRFirstNotesInFD').data("wysihtml5").editor.setValue();
	    		$('#vacationHRFirstNotesInFD').val(hr_first_notes['hr_first_notes']);
				
		    	$('#hrFirstEditInFDTable').addClass('hideContentAi');
		    	$("#hrFirstUpdateInFDTable").removeClass('hideContentAi');
		    });
    		
    	})// end done
		
	}
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function vacation_fd($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var fd_update_by = $.parseJSON(msg);
    		var fd_name = $.parseJSON(msg);
    		var fd_update_created = $.parseJSON(msg);
    		var fd_update_days = $.parseJSON(msg);
    		var fd_update_file_path = $.parseJSON(msg);
    		var fd_filename = $.parseJSON(msg);
    		var fd_notes = $.parseJSON(msg);
    		
    		var fd_total_salary = $.parseJSON(msg);
    		var fd_total_deductions = $.parseJSON(msg);
    		var fd_credit = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#fdEditInHrFinalTable > thead').empty();
	    		$('#fdEditInHrFinalTable > thead').append('<tr>'+
	    																	'<th colspan="3">FD Details <span class="pull-right fdEditInHrFinal"><i class="icon-large icon-pencil"></i></span></th>'+
	    																	'</tr>');
    		}else {
    			$('#fdEditInHrFinalTable > thead').empty();
	    		$('#fdEditInHrFinalTable > thead').append('<tr>'+
	    																	'<th colspan="3">FD Details </th>'+
	    																	'</tr>');
    		}
    		
    		$('#fdEditInHrFinalTable > tbody').empty();
    		$('#fdEditInHrFinalTable > tbody').append('<tr>'+
    																		'<td><strong>Employee ID</strong><br> '+fd_update_by['fd_update_by']+'  </td>'+
    																		'<td><strong>Updated by</strong><br> '+fd_name['fd_name']+'  </td>'+
    																		'<td><strong>Date</strong><br> '+fd_update_created['fd_update_created']+'  </td>'+
    																	'</tr>'+
    																	'<tr>'+
																			'<td><strong>Elapsed</strong><br> '+fd_update_days['fd_update_days']+'  </td>'+
																			'<td><strong>Total Salary</strong><br> '+fd_total_salary['fd_total_salary']+' </td>'+
																			'<td><strong>Total Deductions</strong><br> '+fd_total_deductions['fd_total_deductions']+' </td>'+
																		'</tr>'+
																		'<tr>'+
																			'<td><strong>Credit</strong><br> '+fd_credit['fd_credit']+' </td>'+
																			'<td colspan="2"><strong>Attachment</strong><br><a href="'+fd_update_file_path['fd_update_file_path']+'" target="_blank"> '+fd_filename['fd_filename']+' </a></td>'+
																		'</tr>'+
																		'<tr>'+
																			'<td colspan="3"><strong>Notes</strong><br> '+fd_notes['fd_notes']+' </td>'+
																		'</tr>');
    		
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.fdEditInHrFinal').addClass('hideContentAi');
			}
			//disable button and update end
			
    		// This is for the FD Editing
    	    $( '.fdEditInHrFinal').click(function() {
    	    	
    	    	$('#vacation_fd_editing_on_hr_final_tab').empty();
    	    	$('#vacation_fd_editing_on_hr_final_tab').append(
    	    			'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationInHrFinalTotalSalary">Total salary</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationInHrFinalTotalSalary" value="'+fd_total_salary['fd_total_salary']+'" readonly>'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationInHrFinalTotaldeduction">Total deduction</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationInHrFinalTotaldeduction" value="'+fd_total_deductions['fd_total_deductions']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationInHrFinalCredit">Credit</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationInHrFinalCredit" value="'+fd_credit['fd_credit']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+
						
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="vacationInHrFinalNotesOfFd">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="vacationInHrFinalNotesOfFd"></textarea>'+
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
										'<a href="'+fd_update_file_path['fd_update_file_path']+'" target="_blank"> '+fd_filename['fd_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
    	    			);
    	    	
    	    	$('#vacationInHrFinalNotesOfFd').wysihtml5();    
        		$('#vacationInHrFinalNotesOfFd').data("wysihtml5").editor.setValue();
        		$('#vacationInHrFinalNotesOfFd').val(fd_notes['fd_notes']);
    	    	
    	    	$('#fdEditInHrFinalTable').addClass('hideContentAi');
    	    	$("#fdUpdateInHrFinalTable").removeClass('hideContentAi');
    	    });// end
    		
    	});//end done
		
	}
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function vacation_visa($tcode,$query,$display){
	
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var hr_final_update_by = $.parseJSON(msg);
    		var hr_final_name = $.parseJSON(msg);
    		var hr_final_update_created = $.parseJSON(msg);
    		var hr_final_days = $.parseJSON(msg);
    		var hr_final_notes = $.parseJSON(msg);
    		var hr_final_update_file_path = $.parseJSON(msg);
    		var hr_final_filename = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#hrFinalEditInVisaTable > thead').empty();
	    		$('#hrFinalEditInVisaTable > thead').append('<tr>'+
	    																		'<th colspan="3">HR Final <span class="pull-right hrFinalEditInVisa"><i class="icon-large icon-pencil"></i></span></th>'+
	    																	   '</tr>');
    		}else {
    			$('#hrFinalEditInVisaTable > thead').empty();
	    		$('#hrFinalEditInVisaTable > thead').append('<tr>'+
	    																		'<th colspan="3">HR Final </th>'+
	    																	   '</tr>');
    		}
    		
    		
    		$('#hrFinalEditInVisaTable > tbody').empty();
    		$('#hrFinalEditInVisaTable > tbody').append('<tr>'+
    																		'<td><strong>File Number</strong><br> '+hr_final_update_by['hr_final_update_by']+' </td>'+
    																		'<td><strong>Updated by</strong><br> '+hr_final_name['hr_final_name']+' </td>'+
    																		'<td><strong>Date</strong><br> '+hr_final_update_created['hr_final_update_created']+' </td>'+
    																	  '</tr>'+
    																	  '<tr>'+
    																	  	'<td><strong>Elapsed</strong><br> '+hr_final_days['hr_final_days']+' </td>'+
    																	  	'<td colspan="2"><strong>Attachment</strong><br><a href="'+hr_final_update_file_path['hr_final_update_file_path']+'" target="_blank"> '+hr_final_filename['hr_final_filename']+' </a> </td>'+
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
				$('.hrFinalEditInVisa').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		
    		$( '.hrFinalEditInVisa').click(function() {
    			
    			$('#vacation_hr_final_editing_on_visa_tab').empty();
    			$('#vacation_hr_final_editing_on_visa_tab').append(
    					'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="vacationHrFinalNotesInVisa">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="vacationHrFinalNotesInVisa"></textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+	
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="vacationHrFinalAttachmentInVisa">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="vacationHrFinalAttachmentInVisa" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+hr_final_update_file_path['hr_final_update_file_path']+'" target="_blank"> '+hr_final_filename['hr_final_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
    					);
    			
    			$('#vacationHrFinalNotesInVisa').wysihtml5();
        		$('#vacationHrFinalNotesInVisa').data("wysihtml5").editor.setValue();
        		$('#vacationHrFinalNotesInVisa').val(hr_final_notes['hr_final_notes']);
    			
    	    	$('#hrFinalEditInVisaTable').addClass('hideContentAi');
    	    	$("#hrFinalUpdateInVisaTable").removeClass('hideContentAi');
    	    });	
    		
    	}); // end done
		
	}
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function vacation_ticket($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var visa_created_by = $.parseJSON(msg);
    		var visa_fullname = $.parseJSON(msg);
    		var visa_date_created = $.parseJSON(msg);
    		var visa_number = $.parseJSON(msg);
    		var visa_number_of_days = $.parseJSON(msg);
    		var visa_exit_before_gregorian = $.parseJSON(msg);
    		var visa_exit_before_date_hijiri = $.parseJSON(msg);
    		var visa_return_before_gregorian = $.parseJSON(msg);
    		var visa_return_before_hijiri = $.parseJSON(msg);
    		var visa_elapsed_days = $.parseJSON(msg);
    		var visa_file_path = $.parseJSON(msg);
    		var visa_filename = $.parseJSON(msg);
    		var visa_note = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#visaEditInTicketTable > thead').empty();
				$('#visaEditInTicketTable > thead').append('<tr>'+
																				'<th colspan="3">Visa <span class="pull-right visaEditInTicket"><i class="icon-large icon-pencil"></i></span></th>'+
																			 '</tr>');
    		}else {
    			$('#visaEditInTicketTable > thead').empty();
				$('#visaEditInTicketTable > thead').append('<tr>'+
																				'<th colspan="3">Visa </th>'+
																			 '</tr>');
    		}
			
			$('#visaEditInTicketTable > tbody').empty();
			$('#visaEditInTicketTable > tbody').append('<tr>'+
																			'<td><strong>File number</strong><br> '+visa_created_by['visa_created_by']+' </td>'+
																			'<td><strong>Updated by</strong><br> '+visa_fullname['visa_fullname']+' </td>'+
																			'<td><strong>Date</strong><br> '+visa_date_created['visa_date_created']+' </td>'+
																		 '</tr>'+
																		 '<tr>'+
																		 	'<td><strong>Visa number</strong><br> '+visa_number['visa_number']+' </td>'+
																		 	'<td><strong>Number of day(s)</strong><br> '+visa_number_of_days['visa_number_of_days']+' </td>'+
																		 	'<td><strong>Exit before this date (G)</strong><br> '+visa_exit_before_gregorian['visa_exit_before_gregorian']+' </td>'+
																		 '</tr>'+
																		 '<tr>'+
																		 	'<td><strong>Exit before this date (H)</strong><br> '+visa_exit_before_date_hijiri['visa_exit_before_date_hijiri']+' </td>'+
																		 	'<td><strong>Return date (G)</strong><br> '+visa_return_before_gregorian['visa_return_before_gregorian']+' </td>'+
																		 	'<td><strong>Return date (H)</strong><br> '+visa_return_before_hijiri['visa_return_before_hijiri']+' </td>'+
																		 '</tr>'+
																		 '<tr>'+
																		 	'<td><strong>Elapsed</strong><br> '+visa_elapsed_days['visa_elapsed_days']+' </td>'+
																		 	'<td colspan="2"><strong>Attachment</strong><br><a href="'+visa_file_path['visa_file_path']+'" target="_blank"> '+visa_filename['visa_filename']+' </a></td>'+
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
				$('.visaEditInTicket').addClass('hideContentAi');
			}
			//disable button and update end			
			
			
			$( '.visaEditInTicket').click(function() {
				
				$('#vacation_visa_editing_on_ticket_tab').empty();
				$('#vacation_visa_editing_on_ticket_tab').append(
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationVisaNumberInTicket">Visa number</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationVisaNumberInTicket" value="'+visa_number['visa_number']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationNumberOfDayInTicket">Number of day(s)</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationNumberOfDayInTicket" value="'+visa_number_of_days['visa_number_of_days']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationExitBeforeThisDateGInTicket">Exit before this date (G)</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationExitBeforeThisDateGInTicket" value="'+visa_exit_before_gregorian['visa_exit_before_gregorian']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+	
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationExitBeforeThisDateHInTicket">Exit before this date (H)</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationExitBeforeThisDateHInTicket" value="'+visa_exit_before_date_hijiri['visa_exit_before_date_hijiri']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationReturnDateGInTicket">Return date (G)</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationReturnDateGInTicket" value="'+visa_return_before_gregorian['visa_return_before_gregorian']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationReturnDateHInTicket">Return date (H)</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationReturnDateHInTicket" value="'+visa_return_before_hijiri['visa_return_before_hijiri']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+		
						
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="vacationVisaNotesInTicket">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="vacationVisaNotesInTicket"></textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+	
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="vacationVisaAttachmentInTicket">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="vacationVisaAttachmentInTicket" accept=".pdf, .doc, .docx">'+
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
				
				var gregorianCalendarVisaOnTicket = $.calendars.instance('gregorian');
				var islamicCalendarVisaOnTicket = $.calendars.instance('islamic');
				
				//Vacation visa (only datepicker)start
				//Exit before this date satart
				//Gregorian datepicker start
				$('#VacationExitBeforeThisDateGInTicket').calendarsPicker({
					calendar: gregorianCalendarVisaOnTicket,
					dateFormat: 'd/m/yyyy',
					//gregorian to hijri converter start
					onSelect:function(){
						var gregorianDateFromtextBox = $('#VacationExitBeforeThisDateGInTicket').val().split('/');
						//<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
						convertGregorianToHijiri(gregorianDateFromtextBox);
						$('#VacationExitBeforeThisDateHInTicket').val(outputHijriDate);					
					}		
					//gregorian to hijri converter end
				});	
				//Gregorian datepicker end
				
				//Hijri datepicker start
				$('#VacationExitBeforeThisDateHInTicket').calendarsPicker({
					calendar: islamicCalendarVisaOnTicket,
					dateFormat: 'd/m/yyyy',
					//hijri to gregorian converter start
					onSelect:function(){
						var islamicDateFromtextBox = $('#VacationExitBeforeThisDateHInTicket').val().split('/');
						//<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
						convertHijiriToGregorian(islamicDateFromtextBox);
						$('#VacationExitBeforeThisDateGInTicket').val(outputGregorianDate);
					}		
					//hijri to gregorian converter end
				});	
				//Hijri datepicker end
				//Exit before this date end  
				
				// ===================================================== \\
				
				//Return date satart
				//Gregorian datepicker start
				$('#VacationReturnDateGInTicket').calendarsPicker({
					calendar: gregorianCalendarVisaOnTicket,
					dateFormat: 'd/m/yyyy',
					//gregorian to hijri converter start
					onSelect:function(){
						var gregorianDateFromtextBox = $('#VacationReturnDateGInTicket').val().split('/');
						//<?php include("../inc/gregorian-to-hijri-date-converter.php") ?>
						convertGregorianToHijiri(gregorianDateFromtextBox);
						$('#VacationReturnDateHInTicket').val(outputHijriDate);					
					}		
					//gregorian to hijri converter end
				});	
				//Gregorian datepicker end
				
				//Hijri datepicker start
				$('#VacationReturnDateHInTicket').calendarsPicker({
					calendar: islamicCalendarVisaOnTicket,
					dateFormat: 'd/m/yyyy',
					//hijri to gregorian converter start
					onSelect:function(){
						var islamicDateFromtextBox = $('#VacationReturnDateHInTicket').val().split('/');
						//<?php include("../inc/hijri-to-gregorian-date-converter.php") ?>
						convertHijiriToGregorian(islamicDateFromtextBox);
						$('#VacationReturnDateGInTicket').val(outputGregorianDate);
					}		
					//hijri to gregorian converter end
				});	
				//Hijri datepicker end
				//Return date end	
				
				$('#vacationVisaNotesInTicket').wysihtml5();    
	    		$('#vacationVisaNotesInTicket').data("wysihtml5").editor.setValue();
	    		$('#vacationVisaNotesInTicket').val(visa_note['visa_note']);
				
		    	$('#visaEditInTicketTable').addClass('hideContentAi');
		    	$("#visaUpdateInTicketTable").removeClass('hideContentAi');
		    });	
    		
    	}); // end done
		
	}
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function vacation_clearance($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var ticket_created_by = $.parseJSON(msg);
    		var ticket_fullname = $.parseJSON(msg);
    		var ticket_date_created = $.parseJSON(msg);
    		var ticket_from = $.parseJSON(msg);
    		var ticket_to = $.parseJSON(msg);
    		var departure_date = $.parseJSON(msg);
    		var return_date = $.parseJSON(msg);
    		var ticket_class = $.parseJSON(msg);
    		var ticket_price = $.parseJSON(msg);
    		var ticket_number = $.parseJSON(msg);
    		var name_airlines = $.parseJSON(msg);
    		var ticket_return_date = $.parseJSON(msg);
    		var elapsed_days = $.parseJSON(msg);
    		
    		var ticket_file_path = $.parseJSON(msg);
    		var ticket_filename = $.parseJSON(msg);
    		
    		var note_ticket = $.parseJSON(msg);
    		
    		var ticket_from_code = $.parseJSON(msg);
    		var ticket_to_code = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#ticketEditInClearanceTable > thead').empty();
	    		$('#ticketEditInClearanceTable > thead').append('<tr>'+
	    																				'<th colspan="3">Ticket <span class="pull-right ticketEditInClearance"><i class="icon-large icon-pencil"></i></span></th>'+
	    																			'</tr>');
    		}else {
    			$('#ticketEditInClearanceTable > thead').empty();
	    		$('#ticketEditInClearanceTable > thead').append('<tr>'+
	    																				'<th colspan="3">Ticket </th>'+
	    																			'</tr>');
    		}
    		
    		$('#ticketEditInClearanceTable > tbody').empty();
    		$('#ticketEditInClearanceTable > tbody').append('<tr>'+
    																				'<td><strong>File Number</strong><br> '+ticket_created_by['ticket_created_by']+' </td>'+
    																				'<td><strong>Updated by</strong><br> '+ticket_fullname['ticket_fullname']+' </td>'+
    																				'<td><strong>Date</strong><br> '+ticket_date_created['ticket_date_created']+' </td>'+
    																			'</tr>'+
    																			'<tr>'+
    																				'<td><strong>From</strong><br> '+ticket_from['ticket_from']+' </td>'+
    																				'<td><strong>To</strong><br> '+ticket_to['ticket_to']+' </td>'+
    																				'<td><strong>Departure date</strong><br> '+departure_date['departure_date']+' </td>'+
    																			'</tr>'+
    																			'<tr>'+
    																				'<td><strong>Return date</strong><br> '+return_date['return_date']+' </td>'+
    																				'<td><strong>Class</strong><br> '+ticket_class['ticket_class']+' </td>'+
    																				'<td><strong>Ticket price</strong><br> '+ticket_price['ticket_price']+' </td>'+
    																			'<tr>'+
    																			'<tr>'+
    																				'<td><strong>Ticket number</strong><br> '+ticket_number['ticket_number']+' </td>'+
    																				'<td><strong>Airline</strong><br> '+name_airlines['name_airlines']+' </td>'+
    																				'<td><strong>Return date on ticket</strong><br> '+ticket_return_date['ticket_return_date']+' </td>'+
    																			'</tr>'+
    																			'<tr>'+
    																				'<td><strong>Elapsed</strong><br> '+elapsed_days['elapsed_days']+' </td>'+
    																				'<td colspan="2"><strong>Attachment</strong><br><a href="'+ticket_file_path['ticket_file_path']+'" target="_blank"> '+ticket_filename['ticket_filename']+' </a></td>'+
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
				$('.ticketEditInClearance').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		
    		// This is to enable editing form
    		$( '.ticketEditInClearance').click(function() {
    			
    			$('#vacation_ticket_editing_on_clearance_tab').empty();
    			$('#vacation_ticket_editing_on_clearance_tab').append(
    					'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationFromTicketInClearance">From</label>'+
									'<div class="controls">'+
										'<select class="input-block-level" id="VacationFromTicketInClearance" value="'+ticket_from['ticket_from']+'">'+
											
										'</select>'+																					
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationToTicketInClearance">To</label>'+
									'<div class="controls">'+
										'<select class="input-block-level" id="VacationToTicketInClearance" value="'+ticket_to['ticket_to']+'">'+
											
										'</select>'+																					
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationDepartureDateTicketInClearance">Departure date</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level gregorianDatepicker" id="VacationDepartureDateTicketInClearance" value="'+departure_date['departure_date']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+	
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationReturnDateTicketInClearance">Return date</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level gregorianDatepicker" id="VacationReturnDateTicketInClearance" value="'+return_date['return_date']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationClassTicketInClearance">Class</label>'+
									'<div class="controls">'+
										'<select class="input-block-level" id="VacationClassTicketInClearance" value="'+ticket_class['ticket_class']+'">'+
											
										'</select>'+																					
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationPriceTicketInClearance">Ticket price</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationPriceTicketInClearance" value="'+ticket_price['ticket_price']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+	
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationNumberTicketInClearance">Ticket number</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationNumberTicketInClearance" value="'+ticket_number['ticket_number']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationAirlineTicketInClearance">Airline</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationAirlineTicketInClearance" value="'+name_airlines['name_airlines']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationReturnDateOnTicketTicketInClearance">Return date on ticket</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level gregorianDatepicker" id="VacationReturnDateOnTicketTicketInClearance" value="'+ticket_return_date['ticket_return_date']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+	
						'</div>'+															        
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="vacationTicketNotesInClearance">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="vacationTicketNotesInClearance">  </textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="vacationVisaAttachmentInTicket">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="vacationVisaAttachmentInTicket" accept=".pdf, .doc, .docx">'+
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
    			
    			$('#vacationTicketNotesInClearance').wysihtml5();
        		$('#vacationTicketNotesInClearance').data("wysihtml5").editor.setValue();
         		$('#vacationTicketNotesInClearance').val(note_ticket['note_ticket']);
    			
    	    	$('#ticketEditInClearanceTable').addClass('hideContentAi');
    	    	$("#ticketUpdateInClearanceTable").removeClass('hideContentAi');
    	    });
    		// This is to enable editing form
    		
    	}); // end done
		
	}
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function vacation_muqeem($tcode,$query,$display){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var clearance_created_by = $.parseJSON(msg);
    		var clearance_fullname = $.parseJSON(msg);
    		var clearance_date_created = $.parseJSON(msg);
    		var clearance_benefit = $.parseJSON(msg);
    		var clearance_ticket = $.parseJSON(msg);
    		var clearance_elapsed_days = $.parseJSON(msg);
    		var clearance_files_path_clearance = $.parseJSON(msg);
    		var clearance_filename = $.parseJSON(msg);
    		var clearance_process_notes = $.parseJSON(msg);
    		
    		if($display == 'True'){
    			$('#clearanceEditInMuqeemTable > thead').empty();
	    		$('#clearanceEditInMuqeemTable > thead').append('<tr>'+
	    																					'<th colspan="3">Clearance <span class="pull-right clearanceEditInMuqeem"><i class="icon-large icon-pencil"></i></span></th>'+
	    																			   '</tr>');
    		}else {
    			$('#clearanceEditInMuqeemTable > thead').empty();
	    		$('#clearanceEditInMuqeemTable > thead').append('<tr>'+
	    																					'<th colspan="3">Clearance </th>'+
	    																			   '</tr>');
    		}
    		
    		$('#clearanceEditInMuqeemTable > tbody').empty();
    		$('#clearanceEditInMuqeemTable > tbody').append('<tr>'+
    																					'<td><strong>File Number</strong><br> '+clearance_created_by['clearance_created_by']+' </td>'+
    																					'<td><strong>Updated by</strong><br> '+clearance_fullname['clearance_fullname']+' </td>'+
    																					'<td><strong>Date</strong><br> '+clearance_date_created['clearance_date_created']+' </td>'+
    																			   '</tr>'+
    																			   '<tr>'+
    																			   		'<td><strong>Benefit</strong><br> '+clearance_benefit['clearance_benefit']+' </td>'+
    																			   		'<td><strong>Ticket</strong><br> '+clearance_ticket['clearance_ticket']+' </td>'+
    																			   		'<td><strong>Elapsed</strong><br> '+clearance_elapsed_days['clearance_elapsed_days']+' </td>'+
    																			   '</tr>'+
    																			   '<tr>'+
    																			   		'<td><strong>Attachment</strong><br><a href="'+clearance_files_path_clearance['clearance_elapsed_days']+'" target="_blank"> '+clearance_filename['clearance_filename']+' </a></td>'+
    																			   		'<td colspan="2"><strong>Notes</strong><br> '+clearance_process_notes['clearance_process_notes']+' </td>'+
																		   		   '</tr>');
    		
			/*disable button and update start
			1 -> HR
			2 -> FD
			3 -> Project Site
			*/
			if(typeDepartment == 3){
				$('.clearanceEditInMuqeem').addClass('hideContentAi');
			}
			//disable button and update end    		
    		
    		
    		// This is to enable editing form
    		$( '.clearanceEditInMuqeem').click(function() {
    			
    			$('#vacation_clearance_editing_on_muqeem_tab').empty();
    			$('#vacation_clearance_editing_on_muqeem_tab').append(
    					'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationClearanceBenefitInMuqeem">Benefit</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationBenefitInMuqeem" value="'+clearance_benefit['clearance_benefit']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+
							'<div class="span4">'+
								'<div class="control-group">'+											
									'<label class="control-label" for="VacationClearanceTicketInMuqeem">Ticket</label>'+
									'<div class="controls">'+
										'<input type="text" class="input-block-level" id="VacationClearanceTicketInMuqeem" value="'+clearance_ticket['clearance_ticket']+'">'+
									'</div> <!-- /controls -->'+				
								'</div> <!-- /control-group -->'+	
							'</div>'+		
						'</div>'+															        
						'<div class="row-fluid">'+
						  '<div class="span12">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="VacationClearanceNotesInMuqeem">Notes</label>'+
								'<div class="controls">'+
									'<textarea rows="5" class="input-block-level" id="VacationClearanceNotesInMuqeem"></textarea>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+							          
						  '</div>'+
						'</div>'+			
						
						'<div class="row-fluid">'+
							'<div class="span4">'+
								'<div class="control-group">'+
									'<label class="control-label" for="VacationClearanceAttachmentInMuqeem">Attachment</label>'+
									'<div class="controls">'+
										'<input type="file" id="VacationClearanceAttachmentInMuqeem" accept=".pdf, .doc, .docx">'+
									'</div>'+
								'</div>'+
							'</div>'+
							
							'<div class="span8">'+
								'<div class="control-group">'+
									'<label class="control-label"> &nbsp; </label>'+
									'<div class="controls">'+
										'<a href="'+clearance_files_path_clearance['clearance_files_path_clearance']+'" target="_blank"> '+clearance_filename['clearance_filename']+' </a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
    					);
    			
    			$('#VacationClearanceNotesInMuqeem').wysihtml5();
        		$('#VacationClearanceNotesInMuqeem').data("wysihtml5").editor.setValue();
        		$('#VacationClearanceNotesInMuqeem').val(clearance_process_notes['clearance_process_notes']);
    			
    	    	$('#clearanceEditInMuqeemTable').addClass('hideContentAi');
    	    	$("#clearanceUpdateInMuqeemTable").removeClass('hideContentAi');
    	    });
    		// This is to enable editing form
    		
    		
    	}); // end done
		
	}
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	function vacation_closed_decline($tcode,$query){
		
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
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
    		
    		$('#muqeemEditInClosedTable > thead').empty();
			$('#muqeemEditInClosedTable > thead').append('<tr>'+
						'<th colspan="3">Muqeem</th>'+
					'</tr>');
			
			$('#muqeemEditInClosedTable > tbody').empty();
			$('#muqeemEditInClosedTable > tbody').append('<tr>'+
					'<td><strong>File Number</strong><br> '+muqeem_created_by['muqeem_created_by']+' </td>'+
					'<td><strong>Updated by</strong><br> '+muqeem_fullname['muqeem_fullname']+' </td>'+
					'<td><strong>Date</strong><br> '+muqeem_date_created['muqeem_date_created']+' </td>'+
				'</tr>'+
				'<tr>'+
					'<td><strong>KSA Leaving date (G)</strong><br> '+muqeem_out_ksa_g['muqeem_out_ksa_g']+' </td>'+
					'<td><strong>KSA Leaving date (H)</strong><br> '+muqeem_out_ksa_h['muqeem_out_ksa_h']+' </td>'+
					'<td><strong>Elapsed</strong><br> '+muqeem_elapsed_days['muqeem_elapsed_days']+' </td>'+
				'</tr>'+
				'<tr>'+
					'<td><strong>Attachment (Outside KSA)</strong><br><a href="#" target="_blank">hrfinal.pdf</a></td>'+
					'<td><strong>Attachment (Iqama received)</strong><br><a href="#" target="_blank">hrfinal.pdf</a></td>'+
					'<td colspan="3"><strong>Notes</strong><br> '+muqeem_close_notes['muqeem_close_notes']+' </td>'+
				'</tr>');
    		
    	}); //end done
		
	}
	
	// ======================================================== \\
	
	// This is for the Replacement Details and Assigned
	function replacementDetails($tcode,$query){
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: $tcode, query: $query}
    	})// end ajax
    	
    	.done(function( msg ){
    		var replacement_requirements_id = $.parseJSON(msg);
			var replacement_id_number = $.parseJSON(msg);
			var replacement_name = $.parseJSON(msg);
			var replacement_pname = $.parseJSON(msg);
			var replacement_posname = $.parseJSON(msg);
			
			// This is for the Replacement Details
			// On HR First, display the details if the value is HR First
			//if(replacement_requirements_id['replacement_requirements_id'] == 'ar'){
			if(replacement_requirements_id['replacement_requirements_id'] == 'nr' || replacement_requirements_id['replacement_requirements_id'] == 'ar'){
				$('#replacement_details_display_'+$query).show();
			}else {
				$('#replacement_details_display_'+$query).hide();
			}
				$('#replacement_details_display_'+$query+' > tbody').empty();
			$('#replacement_details_display_'+$query+' > tbody').append('<tr>'+
																						'<td><strong>Emp.ID</strong><br> '+replacement_id_number['replacement_id_number']+' </td>'+
																						'<td><strong>Name</strong><br> '+replacement_name['replacement_name']+' </td>'+
																						'<td><strong>Project</strong><br> '+replacement_pname['replacement_pname']+' </td>'+
																						'<td><strong>Position</strong><br> '+replacement_posname['replacement_posname']+' </td>'+
																					'</tr>');
    	});// end done
    	
	}// end function
	// This is for the Replacement Details and Assigned
	
	// ======================================================== \\
	
	//================ VACATION REQUEST - HR FIRST ============================= \\
	
	
	// =============== THIS IS FOR THE DISPLAY VALUES OF VACATION REQUEST HR - FIRST================= \\
	
	//Vacation HR First start
	// Display the values
	$('#VacationHrFirstTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestHrFirst tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#vacationHrFirstLastVacation').val('');
    	$('#vacationHrFirstDateJoined').val('');
    	$('#vacationHRFirstAttachment').val('');
		$('#vacationHRFirstNotes').data("wysihtml5").editor.setValue();
		$('#vacationHRFirstNotes').val('');
		
		var table = $('#listOfvacationRequestHrFirst').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
		//fixedDetails(tcodeid,'hrfirst'); // This function will display Encoder details, Employee details, Replacement details and also other details of the request
		
		encoder_details(tcodeid,'hrfirst');
		employee_details(tcodeid,'hrfirst');
		
		replacementDetails(tcodeid,'hrfirst'); // This function display Replacement details
		
		$('#VacationHrFirstTable').addClass('hideContentAi');
    	$("#VacationHrFirstDetails").removeClass('hideContentAi');
    	
    } ); // end on click
	// Display the values
	
	// =============== THIS IS FOR THE DISPLAY VALUES OF VACATION REQUEST - HR FIRST ================= \\
	
	// =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - HR FIRST ======================= \\
	
	// Add the values
	$('#updateHRFirst').on('click', function(){
		
		 // This will UPLOAD and UPDATE the images -> upload_photo_request.php
		var tcode = $('#hidden_tcode_hrfirst').val();
		
		var passImage = $('#vacationHRFirstAttachment').val();
		
		var passImageLength = passImage.length;
		if(passImageLength > 0){
			var passportFile = document.getElementById('vacationHRFirstAttachment');
			
			if(passportFile.length === 0){
				 return;
			 }
			
			var data = new FormData();
			
			data.append('SelectedFile', passportFile.files[0]);
			
			var request = new XMLHttpRequest();
			 request.onreadystatechange = function(){
	            if(request.readyState == 4){
	                try {
	                    var resp = JSON.parse(request.response);
	                } catch (e){
	                    var resp = {
	                        status: 'error',
	                        data: 'Unknown error occurred: [' + request.responseText + ']'
	                    };
	                }
	                console.log(resp.status + ': ' + resp.data);
	            }
	         };
	         
	        request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_hr_first');
	        request.send(data);
		}// end if
		
		var formData = {
				'tcode':$('#hidden_tcode_hrfirst').val(),
				'last_vacation_date':$('#vacationHrFirstLastVacation').val(),
				'date_joined_after_vacation':$('#vacationHrFirstDateJoined').val(),
				'days_of_last_vacation':$('#vacationHrFirstDaysOfLastVacation').text(),
				'hr_first_notes':$('#vacationHRFirstNotes').val()
		};//end
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/vacation_request_update_hr_first.php',
			data: formData,
			beforeSend: function(){
				$("#GoBackVToVacationHrFirstTable").attr("disabled", true);
				$("#deleteInRequest").attr("disabled", true);
				$("#messageInRequest").attr("disabled", true);
				$("#updateHRFirst").attr("disabled", true);
			},
			complete: function(){
				showVRTables('#listOfvacationRequestFd', 'vr_fd'); // Reload the list on FD Tables
				$("#GoBackVToVacationHrFirstTable").attr("disabled", false);
				$("#deleteInRequest").attr("disabled", false);
				$("#messageInRequest").attr("disabled", false);
				$("#updateHRFirst").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// ajax
		
		.done(function(data){
			
			if(!data.success){
				//console.log('Failed');
			}else {
				//console.log('Success');
				
				showVRTables('#listOfvacationRequestHrFirst', 'vr_hr_first'); // Reload the list on HRFirst Tables
				
				$('#VacationHrFirstDetails').addClass('hideContentAi');
				$("#VacationHrFirstTable").removeClass('hideContentAi');
				
				counterVacationRequest(); // This is for the counter for vacation request
				
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
				
			}//end if else
			
		}); // end done
		
	}); // end on click
	// Add the values
	
	// =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - HR FIRST ================= \\
	
    $( '#GoBackVToVacationHrFirstTable, a[href="#vacationHrFirst"]').click(function() {
    	$('#VacationHrFirstDetails').addClass('hideContentAi');
    	$("#VacationHrFirstTable").removeClass('hideContentAi');
    });	
	
    // This will display the list of HR First Pending
    showVRTables('#listOfvacationRequestHrFirst', 'vr_hr_first'); // Reload the list on HRFirst Tables
	// This will display the list of HR First Pending
    
	$('#vacationHRFirstNotes').wysihtml5();
	//Vacation HR First end
	
	
	//======================================= END ==============================================\\
	
	
	//=========================== VACATION REQUEST - FD ============================ \\
	
	// =============== THIS IS FOR THE DISPLAY VALUES OF VACATION REQUEST FD================= \\
	
	//Vacation FD start
	$('#VacationFdTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestFd tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#VacationFdTotaldeduction').val('');
    	$('#VacationFdCredit').val('');
    	$('#vacationFdAttachment').val('');
		$('#vacationFdNotes').data("wysihtml5").editor.setValue();
		$('#vacationFdNotes').val('');
		
		var table = $('#listOfvacationRequestFd').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
    	encoder_details(tcodeid,'fd');
		employee_details(tcodeid,'fd');
		
		replacementDetails(tcodeid,'fd'); // This function display Replacement details
		vacation_hr_first(tcodeid,'fd','True');
		
		$('#VacationFdTable').addClass('hideContentAi');
    	$("#VacationFdDetails").removeClass('hideContentAi');
    	
    }); // end on click tr
	
	// ========================================================================================== \\
	
	// This is to update the HR FD
	$('#updateHRFD').on("click", function(){
		
		// This will upload the images
		var tcode = $('#hidden_tcode_fd').val();
		
		var vr_fdImage = $('#vacationFdAttachment').val();
		
		var vr_fdImageLength = vr_fdImage.length;
		
		if(vr_fdImageLength > 0){
			var vr_fdFile = document.getElementById('vacationFdAttachment');
			
			if(vr_fdFile.length === 0){
				 return;
			}// end if
			
			var data = new FormData();
			
			data.append('SelectedFile', vr_fdFile.files[0]);
			
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
			request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_fd');
	        request.send(data);
		}// end if
		// This will upload the images
		
		var formData = {
				'tcode':$('#hidden_tcode_fd').val(),
				'vacation_request_fd_total_salary':$('#VacationFdTotalSalary').val(),
				'vacation_request_fd_total_deduction':$('#VacationFdTotaldeduction').val(),
				'vacation_request_fd_total_credit':$('#VacationFdCredit').val(),
				'vacation_request_fd_notes':$('#vacationFdNotes').val()
		}; // end form
		
		$.ajax({
			type: 'POST',
			url: '../ajax/controller/employee_request/vacation_request_update_fd.php',
			data: formData,
			beforeSend: function(){
				$("#GoBackToVacationFdTable").attr("disabled", true);
				$("#deleteInRequest").attr("disabled", true);
				$("#messageInRequest").attr("disabled", true);
				$("#updateHRFD").attr("disabled", true);
			},
			complete: function(){
				showVRTables('#listOfvacationRequestHrFinal', 'vr_hr_final'); // Reload the list on HRFinal Tables
				$("#GoBackToVacationFdTable").attr("disabled", false);
				$("#deleteInRequest").attr("disabled", false);
				$("#messageInRequest").attr("disabled", false);
				$("#updateHRFD").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		}) // end ajax
		
		.done(function(data){
			
			showVRTables('#listOfvacationRequestFd', 'vr_fd'); // Reload the list on FD Tables
			
			$('#VacationFdDetails').addClass('hideContentAi');
	    	$("#VacationFdTable").removeClass('hideContentAi');
	    	
	    	counterVacationRequest(); // This is for the counter for vacation request
			
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
			
		}); // end done
		
	});
	// This is to update the HR FD
	
	// =============================================================================== \\

    $( '#GoBackToVacationFdTable, a[href="#vacationFD"]').click(function() {
    	$('#VacationFdDetails').addClass('hideContentAi');
    	$("#VacationFdTable").removeClass('hideContentAi');
    });	
	
 // ================================================================================= \\
    
    showVRTables('#listOfvacationRequestFd', 'vr_fd'); // Reload the list on FD Tables
    
    $('#vacationFdNotes').wysihtml5(); // This is for the FD

    
	$('#hrFirstEditInFDTable').removeClass('hideContentAi');
	
    $( '.hrFirstUpdateInFD').click(function() {
    	$('#hrFirstUpdateInFDTable').addClass('hideContentAi');
    	$("#hrFirstEditInFDTable").removeClass('hideContentAi');
    }); 
    
    // This will save the edited HR First Notes
    $('#saveHRFirstUpdate').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_tcode_fd').val();
    	
    	var vacattion_attach_file = $('#vacationHRFirstAttachmentInFd').val();
    	
    	var vacattion_attach_fileLength = vacattion_attach_file.length;
    	
    	if(vacattion_attach_fileLength > 0){
    		
    		var vacattion_attach_file = document.getElementById('vacationHRFirstAttachmentInFd');
    		
    		if(vacattion_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', vacattion_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_hr_first');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_tcode_fd').val(),	
			'edit_hr_first_notes':$('#vacationHRFirstNotesInFD').val()
    	}; // end formData
    	
    	$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_hr_first_update.php?task=update_hr_first",
    		data: formData,
    		beforeSend: function(){
    			$("#saveHRFirstUpdate").attr("disabled", true);
    		},
    		complete: function(){
    			$("#saveHRFirstUpdate").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		var tcodeid = $('#hidden_tcode_fd').val();
    		
    		vacation_hr_first(tcodeid, 'fd','True'); // This is for the HR First Editing
    		
    		$('#hrFirstUpdateInFDTable').addClass('hideContentAi');
        	$("#hrFirstEditInFDTable").removeClass('hideContentAi');
    		
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
    	
    });
    // This will save the edited HR First Notes
   
	//Vacation FD First end
    
 // =============== THIS IS FOR THE DISPLAY VALUES OF VACATION REQUEST FD===================================== \\
    
 // =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - HR FINAL ===================================== \\    
    
	
	//Vacation HR Final start
	$('#VacationHrFinalTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestHrFinal tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
    	$('#vacationHrFinalAttachment').val('');
		$('#vacationHrFinalNotes').data("wysihtml5").editor.setValue();
		$('#vacationHrFinalNotes').val('');
		
		var table = $('#listOfvacationRequestHrFinal').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
		// This display the value of FD on HR Final TAB - Editing
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: tcodeid, query: 'hrfinal'}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var fd_total_salary = $.parseJSON(msg);
    		var fd_total_deductions = $.parseJSON(msg);
    		var fd_credit = $.parseJSON(msg);
    		var fd_notes = $.parseJSON(msg);
    		
    		// Length of service
    		var employeeContractDateEmployedG = $.parseJSON(msg);
    		var emp_info_contract_g_date_employed = $.parseJSON(msg);
    		var sDate = employeeContractDateEmployedG['employee_info_contract_g_date_employed'].split('/');
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
    		
    		// This is for the Generate PDF HR Final 
    		var hrFinalGeneratePdfUrl = "../../tcpdf/hris/pdf_vacation_request.php?tcode=" + tcodeid +"& Al Sayegh Group of Companies &los="+difference(Date.parse(currentDate), Date.parse(sDate_New));
    		$("#hrfinal_GeneratePDF").attr("href", hrFinalGeneratePdfUrl);    		
    		// This is for the Generate PDF HR Final
    		
    		// If Replacement is NR, enable the button
    		// Else disable
    		var replacement_requirements_id = $.parseJSON(msg);
    		console.log(replacement_requirements_id['replacement_requirements_id']);
    		var replacementRequirements = replacement_requirements_id['replacement_requirements_id'];
    		if(replacementRequirements == 'nr'){
    			$('#assignedReplacement_HR_Final').attr("disabled", false);
    		}else {
    			$('#assignedReplacement_HR_Final').attr("disabled", true);
    		}
    		
    	})//end done
		// This display the value of FD on HR Final TAB - Editing
		
    	encoder_details(tcodeid,'hrfinal');
		employee_details(tcodeid,'hrfinal');    	
    	
		vacation_hr_first(tcodeid,'hrfinal','False'); // This function display HR First details
		replacementDetails(tcodeid,'hrfinal'); // This function display Replacement details
		vacation_fd(tcodeid, 'hrfinal','True'); // This function is or Editing the FD Total deduction, Credit and Notes
		
		$('#VacationHrFinalTable').addClass('hideContentAi');
    	$("#VacationHrFinalDetails").removeClass('hideContentAi');
    	
    } );// end
	
    $( '#GoBackToVacationHrFinalTable, a[href="#vacationHrFinal"]').click(function() {
    	$('#VacationHrFinalDetails').addClass('hideContentAi');
    	$("#VacationHrFinalTable").removeClass('hideContentAi');
    });	
    
    showVRTables('#listOfvacationRequestHrFinal', 'vr_hr_final'); // This is a function to display the list of Vacation Request HR Final
    
	$('#vacationHrFinalNotes').wysihtml5();

	$('#fdEditInHrFinalTable').removeClass('hideContentAi');
	
    //Save the details
    $('#saveFDEdit').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_tcode_hrfinal').val();
    	
    	var vacation_attach_file = $('#vacationFDAttachmentInHRFinal').val();
    	
    	var vacation_attach_fileLength = vacation_attach_file.length;
    	
    	if(vacation_attach_fileLength > 0){
    		
    		var vacation_attach_file = document.getElementById('vacationFDAttachmentInHRFinal');
    		
    		if(vacation_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();

    		data.append('SelectedFile', vacation_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_fd');
	        request.send(data);
	        
    	}// end if
    	
    	var formData = {
    			'tcode':$('#hidden_tcode_hrfinal').val(),
    			'edit_fd_total_deduction':$('#VacationInHrFinalTotaldeduction').val(),
    			'edit_fd_credit':$('#VacationInHrFinalCredit').val(),
    			'edit_fd_notes':$('#vacationInHrFinalNotesOfFd').val()
    	}; // end formData
    	
    	$.ajax({
    		type: 'POST',
    		url: '../ajax/controller/employee_reques	t/vacation_request_update_fd_edit_hr_final.php',
    		data: formData,
    		beforeSend: function(){
    			$("#saveFDEdit").attr("disabled", true);
    		},
    		complete: function(){
    			$("#saveFDEdit").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	}) // end ajax
    	
    	.done(function(data){
    		
    		var tcodeid = $('#hidden_tcode_hrfinal').val();
    		
    		vacation_fd(tcodeid, 'hrfinal','True'); // This function is for Editing the FD Total deduction, Credit and Notes
    		
    		$('#fdEditInHrFinalTable').removeClass('hideContentAi');
        	$("#fdUpdateInHrFinalTable").addClass('hideContentAi');
        	
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
    	
    	//console.log($('#tcode_HR_FINAL').text());
    	
    });// end 
    //Save the details
    // This is for the FD Editing
    
    // This is for the Assigned Replacement
    $('#assignedReplacement_HR_Final').on('click', function(){
    	
    	var tcode_replacement = $('#hidden_tcode_hrfinal').val();
    	
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
						url: '../ajax/controller/employee_request/request_replacement.php?request=vacation_request',
						data: formData,
						beforeSend: function(){
		    				$("#GoBackToVacationHrFinalTable").attr("disabled", true);
		    				$("#assignedReplacement_HR_Final").attr("disabled", true);
		    				$("#declineRequest_HR_FINAL").attr("disabled", true);
		    				$("#updateVR_HR_FINAL").attr("disabled", true);
		    			},
		    			complete: function(){
		    				$("#GoBackToVacationHrFinalTable").attr("disabled", false);
		    				$("#assignedReplacement_HR_Final").attr("disabled", false);
		    				$("#declineRequest_HR_FINAL").attr("disabled", false);
		    				$("#updateVR_HR_FINAL").attr("disabled", false);
		    			},
		    			dataType: 'json',
		    			encode: true
					}) // end ajax
					
					.done(function(data){
						//console.log(data.message);
						
						replacementDetails(tcode_replacement,'hrfinal'); // This function display Replacement details
						
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
    	
    	console.log('Assigned replacement : '+tcode_replacement);
    }); // end
    // This is for the Assigned Replacement
    
    //This is to save the hr final notes and attachment
    $('#updateVR_HR_FINAL').on('click', function(){
    	
    	//This will upload the file attachment in HR Final
    	var tcode = $('#hidden_tcode_hrfinal').val();
    	
    	var vr_hrfinal_Image = $('#vacationHrFinalAttachment').val();
    	
    	var vr_hrfinal_ImageLength = vr_hrfinal_Image.length;
    	
    	if(vr_hrfinal_ImageLength > 0){
    		var vr_hrfinalFile = document.getElementById('vacationHrFinalAttachment');
    		
    		if(vr_hrfinalFile.length === 0){
    			return;
    		}// end if
    		
    		var data = new FormData();
    		
    		data.append('SelectedFile', vr_hrfinalFile.files[0]);
    		
    		var request = new XMLHttpRequest();
    		request.onreadystatechange = function(){
    			if(request.readyState == 4){
    				try {
    					var resp = JSON.parse(request.response);
    				}catch(e){
    					var resp = {
							status: 'error',
							data: 'Unknown error occurred: [' + request.responseText + ']'
    					}// end
    				}// end catch
    			}// end if
    		};// end request
    		request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_hrfinal');
	        request.send(data);
    	}// end if
    	//This will upload the file attachment in HR Final
    	
    	var formData = {
			'tcode':$('#hidden_tcode_hrfinal').val(),
			'hr_final_notes':$('#vacationHrFinalNotes').val()
    	}; // end formData
    	
    	$.ajax({
    		type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_hr_final.php',
    		data: formData,
    		beforeSend: function(){
    			$("#GoBackToVacationHrFinalTable").attr("disabled", true);
    			$("#assignedReplacement_HR_Final").attr("disabled", true);
    			$("#declineRequest_HR_FINAL").attr("disabled", true);
    			$("#updateVR_HR_FINAL").attr("disabled", true);
    		},
    		complete: function(){
    			
    			showVRTables('#listOfvacationRequestVisa', 'vr_visa'); // Reload the list on Visa Tables
    			
    			$("#GoBackToVacationHrFinalTable").attr("disabled", false);
    			$("#assignedReplacement_HR_Final").attr("disabled", false);
    			$("#declineRequest_HR_FINAL").attr("disabled", false);
    			$("#updateVR_HR_FINAL").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	}) // end ajax
    	
    	.done(function(data){
    		
    		//Return to the list of pending vacation
			$('#VacationHrFinalDetails').addClass('hideContentAi');
	    	$("#VacationHrFinalTable").removeClass('hideContentAi');
	    	//Return to the list of pending vacation
	    	
	    	counterVacationRequest(); // This is for the counter for vacation request
	    	showVRTables('#listOfvacationRequestHrFinal', 'vr_hr_final'); // This is a function to display the list of Vacation Request HR Final
    		
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
			
    	});// end done
    	
    	//console.log($('#hidden_tcode_hrfinal').val());
    	
    });// end
    //This is to save the hr final notes and attachment

    $( '.fdUpdateInHrFinal').click(function() {
    	$('#hrFirstEditInFDTable').addClass('hideContentAi');
    	$("#hrFirstUpdateInFDTable").removeClass('hideContentAi');
    }); 

    $( '.fdUpdateInHrFinal').click(function() {
    	$('#fdUpdateInHrFinalTable').addClass('hideContentAi');
    	$("#fdEditInHrFinalTable").removeClass('hideContentAi');
    });       
    
	//Vacation HR Final end
    
// =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - HR FINAL ================= \\    
    
// =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - VISA ================= \\    
	
	//Vacation Visa start
	$('#VacationVisaTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestVisa tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#VacationVisaNumber').val('');
		$('#VacationNumberOfDay').val('');
		$('#VacationExitBeforeThisDateG').val('');
		$('#VacationExitBeforeThisDateH').val('');
		$('#VacationReturnDateG').val('');
		$('#VacationReturnDateH').val('');
		$('#vacationVisaAttachment').val('');
		$('#vacationVisaNotes').data("wysihtml5").editor.setValue();
		$('#vacationVisaNotes').val('');
		
		var table = $('#listOfvacationRequestVisa').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
		// This display the value of HR Final on Visa TAB - Editing
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: tcodeid, query: 'visa'}
    	})// end ajax
    	
    	.done(function( msg ){
    		var hr_final_notes = $.parseJSON(msg);
    		
    		
    	}); // end 
		
		encoder_details(tcodeid,'visa');
		employee_details(tcodeid,'visa');
		
		replacementDetails(tcodeid,'visa'); // This function display Replacement details
		vacation_hr_first(tcodeid,'visa','False'); // This function display HR First details
		vacation_fd(tcodeid,'visa','False'); // This function display FD Details
		vacation_visa(tcodeid,'visa','True'); // This function display HR Final Details
		
		//Display the details and hide the list
		$('#VacationVisaTable').addClass('hideContentAi');
    	$("#VacationVisaDetails").removeClass('hideContentAi');
    	//Display the details and hide the list
    	
    	// ============================================= \\
    	
    	//This will focus on Visa Number
    	$("#VacationVisaNumber").focus();
    	
    	//Will check the input for the visa number
    	$('#VacationVisaNumber').on('input', function(){
    		
    		var visaNumber = $(this).val();
    		
    		var regx = /[A-Za-z0-9]/;
    		
    		if (!regx.test(visaNumber) || visaNumber.length == '') {
    			$('#GoBackToVacationVisaTable').attr('disabled', true);
    			$('#updateVisa_VR').attr('disabled', true);
    			
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
    			$('#GoBackToVacationVisaTable').attr('disabled', false);
    			$('#updateVisa_VR').attr('disabled', false);
    		}// end if else
    		
    	}); // end 
    	
    	// ============================================= \\
    	
    	// Will check the input for the number of days
    	$('#VacationNumberOfDay').on('input', function(){
    		
    		var numberOfDays = $(this).val();
    		
    		var regx = /[0-9]/;
    		
    		if (!regx.test(numberOfDays) || numberOfDays.length == '') {
    			
    			$('#GoBackToVacationVisaTable').attr('disabled', true);
    			$('#updateVisa_VR').attr('disabled', true);
    			
    			function reset () {
    				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
    				alertify.set({			
    					delay : 2000,
    				});
    			}// end function
    			
    			reset();
				alertify.error('Error! Number of days should be Numeric.');
				return false;
    			
    		}else {
    			
    			$('#GoBackToVacationVisaTable').attr('disabled', false);
    			$('#updateVisa_VR').attr('disabled', false);
    			
    		} //  if else
    		
    	});// end

    	
    });// end list vacation visa
	
	//Return to previous list
    $( '#GoBackToVacationVisaTable, a[href="#vacationVisa"]').click(function() {
    	$('#VacationVisaDetails').addClass('hideContentAi');
    	$("#VacationVisaTable").removeClass('hideContentAi');
    });
    //Return to previous list
	
    // List the request on visa
    showVRTables('#listOfvacationRequestVisa', 'vr_visa'); // This is a function to display the list of Vacation Request Visa
    // List the request on visa
    
	$('#vacationVisaNotes').wysihtml5();
	

	$('#hrFinalEditInVisaTable').removeClass('hideContentAi');
	
    $( '.hrFinalEditInVisa').click(function() {
    	$('#hrFinalEditInVisaTable').addClass('hideContentAi');
    	$("#hrFinalUpdateInVisaTable").removeClass('hideContentAi');
    });	

    $( '.hrFinalUpdateInVisa').click(function() {
    	$('#hrFinalUpdateInVisaTable').addClass('hideContentAi');
    	$("#hrFinalEditInVisaTable").removeClass('hideContentAi');
    });       
    
    //This will update the HR Final in Visa
    $('#save_HRFinal_Visa').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_tcode_visa').val();
    	
    	var vacation_attach_file = $('#vacationHrFinalAttachmentInVisa').val();
    	
    	var vacation_attach_fileLength = vacation_attach_file.length;
    	
    	if(vacation_attach_fileLength > 0){
    		
    		var vacation_attach_file = document.getElementById('vacationHrFinalAttachmentInVisa');
    		
    		if(vacation_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();

    		data.append('SelectedFile', vacation_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_hrfinal');
	        request.send(data);
    		
    	}// end if
    	
    	var formData = {
			'tcode':$('#hidden_tcode_visa').val(),
			'hr_final_in_visa_notes':$('#vacationHrFinalNotesInVisa').val()
    	}; // end
    	
    	$.ajax({
    		type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_hr_final_edit_visa.php',
    		data: formData,
    		beforeSend: function(){
    			$("#save_HRFinal_Visa").attr("disabled", true);
    		},
    		complete: function(){
    			$("#save_HRFinal_Visa").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		var tcodeid = $('#hidden_tcode_visa').val();
    		
    		vacation_visa(tcodeid,'visa','True'); // This function display HR Final Details
    		
    		$('#hrFinalUpdateInVisaTable').addClass('hideContentAi');
        	$("#hrFinalEditInVisaTable").removeClass('hideContentAi');
        	
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
    		
    	});// end
    	
    	//console.log($('#hidden_tcode_visa').val());
    }); // end
    //This will update the HR Final in Visa
    
    // This will update the Visa
    $('#updateVisa_VR').on('click', function(){
    	
    	var formData = {
			'tcode':$('#hidden_tcode_visa').val(),
			'visa_number':$('#VacationVisaNumber').val(),
			'visa_number_of_day':$('#VacationNumberOfDay').val(),
			'visa_exit_before_g':$('#VacationExitBeforeThisDateG').val(),
			'visa_exit_before_h':$('#VacationExitBeforeThisDateH').val(),
			'visa_return_g':$('#VacationReturnDateG').val(),
			'visa_return_h':$('#VacationReturnDateH').val(),
			'visa_notes':$('#vacationVisaNotes').val()
    	}; // end
    	
    	$.ajax({
    		type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_visa.php',
    		data: formData,
    		beforeSend: function(){
    			$("#GoBackToVacationVisaTable").attr("disabled", true);
    			$("#updateVisa_VR").attr("disabled", true);
    		},
    		complete: function(){
    			
    			showVRTables('#listOfvacationRequestTicket', 'vr_ticket'); // Reload the list on Visa Tables
    			
    			$("#GoBackToVacationVisaTable").attr("disabled", false);
    			$("#updateVisa_VR").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	})// end ajax
    	
    	.done(function(data){
    		
    		$('#VacationVisaDetails').addClass('hideContentAi');
        	$("#VacationVisaTable").removeClass('hideContentAi');
        	
        	counterVacationRequest(); // This is for the counter for vacation request
        	
        	showVRTables('#listOfvacationRequestVisa', 'vr_visa'); // This is a function to display the list of Vacation Request Visa
        	
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
    		
    		//This will upload the file attachment in Visa
        	var tcode = $('#hidden_tcode_visa').val();
        	
        	var visa_Image = $('#vacationVisaAttachment').val();
        	
        	var visa_ImageLength = visa_Image.length;
        	
        	if(visa_ImageLength > 0){
        		var visaFile = document.getElementById('vacationVisaAttachment');
        		
        		if(visaFile.length === 0){
        			return;
        		}// end if
        		
        		var data = new FormData();
        		
        		data.append('SelectedFile', visaFile.files[0]);
        		
        		var request = new XMLHttpRequest();
        		request.onreadystatechange = function(){
        			if(request.readyState == 4){
        				try {
        					var resp = JSON.parse(request.response);
        				}catch(e){
        					var resp = {
    							status: 'error',
    							data: 'Unknown error occurred: [' + request.responseText + ']'
        					}// end
        				}// end catch
        			}// end if
        		};// end request
        		request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_visa');
    	        request.send(data);
        	}// end if
        	
        	//console.log($('#hidden_tcode_visa').val());
    		
    	}, 5000);
    	// Delay the posting
    	
    	//console.log($('#VacationVisaNumber').val());
    	
    });// end 
 // This will update the Visa
    
	//Vacation Visa end
    
// =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - VISA ================= \\
    
// =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - TICKET ================= \\    
	
	//Vacation Ticket start
	$('#VacationTicketTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestTicket tbody').on( 'click', 'tr', function () {
		
		// Clear all fields
		$('#VacationFromTicket').val('');
		$('#VacationToTicket').val('');
		$('#VacationDepartureDateTicket').val('');
		$('#VacationReturnDateTicket').val('');
		$('#VacationClassTicket').val('');
		$('#VacationPriceTicket').val('');
		$('#VacationNumberTicket').val('');
		$('#VacationAirlineTicket').val('');
		$('#VacationReturnDateOnTicketTicket').val('');
		$('#vacationTicketNotes').val('');
		$('#vacationTicketAttachment').val('');
		
		var table = $('#listOfvacationRequestTicket').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'ticket');
		employee_details(tcodeid,'ticket');
		
		replacementDetails(tcodeid,'ticket'); // This function display Replacement details
		vacation_hr_first(tcodeid,'ticket','False'); // This function display HR First details
		vacation_fd(tcodeid,'ticket','False'); // This function display FD Details
		vacation_visa(tcodeid,'ticket','False'); // This function display HR Final Details
		vacation_ticket(tcodeid,'ticket','True'); // This function display Visa Details
		
		//This will focus on Visa Number
    	$("#VacationVisaNumber").focus();
    	
    	//Will check the input for the visa number
    	$('#VacationVisaNumberInTicket').on('input', function(){
    		
    		var visaNumber = $(this).val();
    		
    		var regx = /[A-Za-z0-9]/;
    		
    		if (!regx.test(visaNumber) || visaNumber.length == '') {
    			$('#GoBackToVacationTicketTable').attr('disabled', true);
    			$('#updateTicket_VR').attr('disabled', true);
    			
    			$('#save_VisaEdit').attr('disabled', true);
    			
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
    			$('#GoBackToVacationTicketTable').attr('disabled', false);
    			$('#updateTicket_VR').attr('disabled', false);
    			
    			$('#save_VisaEdit').attr('disabled', false);
    			
    		}// end if else
    		
    	}); // end 
    	
    	// ============================================= \\
    	
    	// Will check the input for the number of days
    	$('#VacationNumberOfDayInTicket').on('input', function(){
    		
    		var numberOfDays = $(this).val();
    		
    		var regx = /[0-9]/;
    		
    		if (!regx.test(numberOfDays) || numberOfDays.length == '') {
    			
    			$('#GoBackToVacationTicketTable').attr('disabled', true);
    			$('#updateTicket_VR').attr('disabled', true);
    			
    			function reset () {
    				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
    				alertify.set({			
    					delay : 2000,
    				});
    			}// end function
    			
    			reset();
				alertify.error('Error! Number of days should be Numeric.');
				return false;
    			
    		}else {
    			
    			$('#GoBackToVacationTicketTable').attr('disabled', false);
    			$('#updateTicket_VR').attr('disabled', false);
    			
    		} //  if else
    		
    	});// end
		
		//console.log(tcodeid);
		
		$('#VacationTicketTable').addClass('hideContentAi');
    	$("#VacationTicketDetails").removeClass('hideContentAi');
    	
    } );// end

    $( '#GoBackToVacationTicketTable, a[href="#vacationTcket"]').click(function() {
    	$('#VacationTicketDetails').addClass('hideContentAi');
    	$("#VacationTicketTable").removeClass('hideContentAi');
    });	
	
    // List the Ticket request
    showVRTables('#listOfvacationRequestTicket', 'vr_ticket'); // This is a function to display the list of Vacation Request Ticket
    // List the Ticket request
    
	$('#vacationTicketNotes').wysihtml5();

	$('#visaEditInTicketTable').removeClass('hideContentAi');
	
    $( '.visaEditInTicket').click(function() {
    	$('#hrFirstEditInFDTable').addClass('hideContentAi');
    	$("#hrFirstUpdateInFDTable").removeClass('hideContentAi');
    }); 

    $( '.visaUpdateInTicket').click(function() {
    	$('#visaUpdateInTicketTable').addClass('hideContentAi');
    	$("#visaEditInTicketTable").removeClass('hideContentAi');
    });       
    
    // This is to save the Visa Edit
    $('#save_VisaEdit').on('click', function(){
    	
    	// This is for the attach file
    	var tcode = $('#hidden_tcode_ticket').val();
    	
    	var vacation_attach_file = $('#vacationVisaAttachmentInTicket').val();
    	
    	var vacation_attach_fileLength = vacation_attach_file.length;
    	
    	if(vacation_attach_fileLength > 0){
    		
    		var vacation_attach_file = document.getElementById('vacationVisaAttachmentInTicket');
    		
    		if(vacation_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();

    		data.append('SelectedFile', vacation_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_visa');
	        request.send(data);
    		
    	}// end if
    	    	   	
    	var formData = {
    			'tcode':$('#hidden_tcode_ticket').val(),
    			'visa_number':$('#VacationVisaNumberInTicket').val(),
    			'visa_number_of_day':$('#VacationNumberOfDayInTicket').val(),
    			'visa_exit_before_g':$('#VacationExitBeforeThisDateGInTicket').val(),
    			'visa_exit_before_h':$('#VacationExitBeforeThisDateHInTicket').val(),
    			'visa_return_g':$('#VacationReturnDateGInTicket').val(),
    			'visa_return_h':$('#VacationReturnDateHInTicket').val(),
    			'visa_notes':$('#vacationVisaNotesInTicket').val()
    	}; // end formData
    	
    	$.ajax({
    		type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_visa_on_ticket_tab.php',
    		data: formData,
    		beforeSend: function(){
    			$("#GoBackToVacationTicketTable").attr("disabled", true);
    			$("#updateTicket_VR").attr("disabled", true);
    			$("#save_VisaEdit").attr("disabled", true);
    		},
    		complete: function(){
    			$("#GoBackToVacationTicketTable").attr("disabled", false);
    			$("#updateTicket_VR").attr("disabled", false);
    			$("#save_VisaEdit").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
    	}) // end ajax
    	
    	.done(function(data){
    		
    		var tcodeid = $('#hidden_tcode_ticket').val();
    		
    		vacation_ticket(tcodeid,'ticket','True'); // This function display Visa Details
    		
        	$('#visaUpdateInTicketTable').addClass('hideContentAi');
        	$("#visaEditInTicketTable").removeClass('hideContentAi');
        	
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
    // This is to save the Visa Edit
    
    // This is for the dropdown select list for FROM TICKET
    $('#VacationFromTicket').empty();
    $('#VacationFromTicket').append("<option>Loading...</option>");
    $.ajax({
    	type: "POST",
		  url: "../ajax/controller/airport_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#VacationFromTicket').empty();
			  $.each(data, function(i, airport_code, airport_name){
				  $('#VacationFromTicket').append('<option value="'+data[i].airport_code+'"> '+data[i].airport_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // This is for the dropdown select list for FROM TICKET
    
    // This is for the dropdown select list TO TICKET
    $('#VacationToTicket').empty();
    $('#VacationToTicket').append("<option>Loading...</option>");
    $.ajax({
    	type: "POST",
		  url: "../ajax/controller/airport_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#VacationToTicket').empty();
			  $.each(data, function(i, airport_code, airport_name){
				  $('#VacationToTicket').append('<option value="'+data[i].airport_code+'"> '+data[i].airport_name+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // This is for the dropdown select list TO TICKET
    
    // This is for the dropdown select TICKET CLASS 
    $('#VacationClassTicket').empty();
    $('#VacationClassTicket').append("<option>Loading...</option>");
    $.ajax({
    	type: "POST",
		  url: "../ajax/controller/ticket_class_list.php",
		  contentType:"application/json: charset=utf-8",
		  dataType:"json",
		  success: function(data){
			  $('#VacationClassTicket').empty();
			  $.each(data, function(i, id, ticket_class){
				  $('#VacationClassTicket').append('<option value="'+data[i].id+'"> '+data[i].ticket_class+' </option>');
			  });// end each
		  },
		  complete: function(){
		  }// end success
    }); // end ajax
    // This is for the dropdown select TICKET CLASS
    
    // This will save the ticket details
	$('#updateTicket_VR').on('click', function(){
		
		var formData = {
			'tcode':$('#hidden_tcode_ticket').val(),
			'ticket_from':$('#VacationFromTicket').val(),
			'ticket_to':$('#VacationToTicket').val(),
			'departure_date':$('#VacationDepartureDateTicket').val(),
			'return_date':$('#VacationReturnDateTicket').val(),
			'class_ticket':$('#VacationClassTicket').val(),
			'price_ticket':$('#VacationPriceTicket').val(),
			'number_ticket':$('#VacationNumberTicket').val(),
			'airline_name':$('#VacationAirlineTicket').val(),
			'return_date_ticket':$('#VacationReturnDateOnTicket').val(),
			'ticket_notes':$('#vacationTicketNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_ticket.php',
    		data: formData,
    		beforeSend: function(){
    			$("#GoBackToVacationVisaTable").attr("disabled", true);
    			$("#updateVisa_VR").attr("disabled", true);
    		},
    		complete: function(){
    			
    			// This will display the list of pending clearance
    		    showVRTables('#listOfvacationRequestClearance', 'vr_clearance'); // Reload the list on Ticket Tables
    		    // This will display the list of pending clearance
    			
    			$("#GoBackToVacationVisaTable").attr("disabled", false);
    			$("#updateVisa_VR").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			$('#VacationTicketDetails').addClass('hideContentAi');
	    	$("#VacationTicketTable").removeClass('hideContentAi');
			
			counterVacationRequest(); // This is for the counter for vacation request
			showVRTables('#listOfvacationRequestTicket', 'vr_ticket'); // Reload the list on Ticket Tables
			
			function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
			
		}); // end done
		
		// Delay the posting
    	setTimeout(function(){
			//This will upload the file attachment in Ticket
			var tcode = $('#hidden_tcode_ticket').val();
	    	
	    	var ticket_Image = $('#vacationTicketAttachment').val();
	    	
	    	var ticket_ImageLength = ticket_Image.length;
	    	
	    	if(ticket_ImageLength > 0){
	    		var ticketFile = document.getElementById('vacationTicketAttachment');
	    		
	    		if(ticketFile.length === 0){
	    			return;
	    		}// end if
	    		
	    		var data = new FormData();
	    		
	    		data.append('SelectedFile', ticketFile.files[0]);
	    		
	    		var request = new XMLHttpRequest();
	    		request.onreadystatechange = function(){
	    			if(request.readyState == 4){
	    				try {
	    					var resp = JSON.parse(request.response);
	    				}catch(e){
	    					var resp = {
								status: 'error',
								data: 'Unknown error occurred: [' + request.responseText + ']'
	    					}// end
	    				}// end catch
	    			}// end if
	    		}; // end request
	    		request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_ticket');
		        request.send(data);
	    	}// end if
			//This will upload the file attachment in Ticket
    	}, 5000);
    	// Delay the posting
	}); // end
    // This will save the ticket details
    
	//Vacation Ticket end		
    
 // =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - TICKET ================= \\  
	
// ================================================================================================= \\
    
 // =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - CLEARANCE ================= \\  
	
	//Vacation Clearance start
	$('#VacationClearanceTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestClearance tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#VacationBenefit').val('');
		$('#VacationClearanceTicket').val('');
		$('#VacationClearanceNotes').val('');
		// Clear the fields
		
		var table = $('#listOfvacationRequestClearance').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
		// This is for the value on Ticket - Editing
		$.ajax({
    		type: "POST",
    		url: "../ajax/controller/employee_request/vacation_request_details.php",
    		data: { tcode_id: tcodeid, query: 'clearance'}
    	})// end ajax
    	
    	.done(function( msg ){
    		
    		var ticket_from_code = $.parseJSON(msg);
    		var ticket_to_code = $.parseJSON(msg);
    		var ticket_class_id = $.parseJSON(msg);
    		
    		var departure_date = $.parseJSON(msg);
    		var ticket_return_date = $.parseJSON(msg);
    		var ticket_price = $.parseJSON(msg);
    		var ticket_number = $.parseJSON(msg);
    		var name_airlines = $.parseJSON(msg);
    		var ticket_return_date = $.parseJSON(msg);
    		var note_ticket = $.parseJSON(msg);
    		
    		// This is for the dropdown select list for FROM TICKET
		    $('#VacationFromTicketInClearance').empty();
		    $('#VacationFromTicketInClearance').append("<option>Loading...</option>");
		    $.ajax({
		    	type: "POST",
				  url: "../ajax/controller/airport_list.php",
				  contentType:"application/json: charset=utf-8",
				  dataType:"json",
				  success: function(data){
					  $('#VacationFromTicketInClearance').empty();
					  $.each(data, function(i, airport_code, airport_name){
						  
						  if(data[i].airport_code == ticket_from_code['ticket_from_code']){
							  var S_Ticket_From = 'selected';
						  }else {
							  var S_Ticket_From = '';
						  }
						  
						  $('#VacationFromTicketInClearance').append('<option value="'+data[i].airport_code+'" '+S_Ticket_From+'> '+data[i].airport_name+' </option>');
					  });// end each
				  },
				  complete: function(){
				  }// end success
		    }); // end ajax
		    // This is for the dropdown select list for FROM TICKET
		    
		    // This is for the dropdown select list TO TICKET
		    $('#VacationToTicketInClearance').empty();
		    $('#VacationToTicketInClearance').append("<option>Loading...</option>");
		    $.ajax({
		    	type: "POST",
				  url: "../ajax/controller/airport_list.php",
				  contentType:"application/json: charset=utf-8",
				  dataType:"json",
				  success: function(data){
					  $('#VacationToTicketInClearance').empty();
					  $.each(data, function(i, airport_code, airport_name){
						  
						  if(data[i].airport_code == ticket_to_code['ticket_to_code']){
							  var S_Ticket_To = 'selected';
						  }else {
							  var S_Ticket_To = '';
						  }
						  
						  $('#VacationToTicketInClearance').append('<option value="'+data[i].airport_code+'" '+S_Ticket_To+'> '+data[i].airport_name+' </option>');
					  });// end each
				  },
				  complete: function(){
				  }// end success
		    }); // end ajax
		    // This is for the dropdown select list TO TICKET
			
		    // This is for the dropdown select TICKET CLASS 
		    $('#VacationClassTicketInClearance').empty();
		    $('#VacationClassTicketInClearance').append("<option>Loading...</option>");
		    $.ajax({
		    	type: "POST",
				  url: "../ajax/controller/ticket_class_list.php",
				  contentType:"application/json: charset=utf-8",
				  dataType:"json",
				  success: function(data){
					  $('#VacationClassTicketInClearance').empty();
					  $.each(data, function(i, id, ticket_class){
						  
						  if(data[i].id == ticket_class_id['ticket_class_id']){
							  var S_Ticket_Class = 'selected';
						  }else {
							  var S_Ticket_Class = '';
						  }
						  
						  $('#VacationClassTicketInClearance').append('<option value="'+data[i].id+'" '+S_Ticket_Class+'> '+data[i].ticket_class+' </option>');
					  });// end each
				  },
				  complete: function(){
				  }// end success
		    }); // end ajax
		    // This is for the dropdown select TICKET CLASS
    		
    	}); // end done
		// This is for the value on Ticket - Editing
		
		// This are functions for FIXED DETAILS
		encoder_details(tcodeid,'clearance');
		employee_details(tcodeid,'clearance');
		
		replacementDetails(tcodeid,'clearance'); // This function display Replacement details
		vacation_hr_first(tcodeid, 'clearance','False'); // This function is for the Editing the HR First Notes and File Attachment
		vacation_fd(tcodeid,'clearance','False'); // This function display FD Details
		vacation_visa(tcodeid,'clearance','False'); // This function display HR Final Details
		vacation_ticket(tcodeid,'clearance','False'); // This function display Visa Details
		vacation_clearance(tcodeid,'clearance','True'); // This function display Ticket Details
		
		$('#VacationClearanceTable').addClass('hideContentAi');
    	$("#VacationClearanceDetails").removeClass('hideContentAi');
    } );
	
	// This will update the ticket details on Clearance Tab
	$('#save_ticket_clearance_tab').on('click', function(){
		
		// This is for the attach file
    	var tcode = $('#hidden_tcode_clearance').val();
    	
    	var vacation_attach_file = $('#vacationVisaAttachmentInTicket').val();
    	
    	var vacation_attach_fileLength = vacation_attach_file.length;
    	
    	if(vacation_attach_fileLength > 0){
    		
    		var vacation_attach_file = document.getElementById('vacationVisaAttachmentInTicket');
    		
    		if(vacation_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();

    		data.append('SelectedFile', vacation_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_ticket');
	        request.send(data);
    		
    	}// end if
		
		
		var formData = {
			'tcode':$('#hidden_tcode_clearance').val(),
			'ticket_from':$('#VacationFromTicketInClearance').val(),
			'ticket_to':$('#VacationToTicketInClearance').val(),
			'departure_date':$('#VacationDepartureDateTicketInClearance').val(),
			'return_date':$('#VacationReturnDateTicketInClearance').val(),
			'ticket_class':$('#VacationClassTicketInClearance').val(),
			'ticket_price':$('#VacationPriceTicketInClearance').val(),
			'ticket_number':$('#VacationNumberTicketInClearance').val(),
			'ticket_airline':$('#VacationAirlineTicketInClearance').val(),
			'ticket_return_date':$('#VacationReturnDateOnTicketTicketInClearance').val(),
			'ticket_notes':$('#vacationTicketNotesInClearance').val()
		}; // end
		
		$.ajax({
			type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_ticket_on_clearance_tab.php',
    		data: formData,
    		beforeSend: function(){
    			$("#save_ticket_clearance_tab").attr("disabled", true);
    			$("#GoBackToVacationClearanceTable").attr("disabled", true);
    			$("#updateClearance").attr("disabled", true);
    		},
    		complete: function(){
    			$("#save_ticket_clearance_tab").attr("disabled", false);
    			$("#GoBackToVacationClearanceTable").attr("disabled", false);
    			$("#updateClearance").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
		}) // end ajax
		
		.done(function(data){
			
			// Reload the Ticket Details - Not Editing
			vacation_clearance($('#hidden_tcode_clearance').val(),'clearance', 'True'); // This function display Ticket Details
			// Reload the Ticket Details - Not Editing
			
			// Return to Ticket Not Editing
	    	$('#ticketEditInClearanceTable').removeClass('hideContentAi');
	    	$("#ticketUpdateInClearanceTable").addClass('hideContentAi');
	    	// Return to Ticket Not Editing
	    	
	    	function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
			
		}); //end done
	});
	// This will update the ticket details on Clearance Tab
	
	// This will save the Clearance update
	$('#updateClearance').on('click', function(){
		
		var formData = {
			'tcode':$('#hidden_tcode_clearance').val(),
			'clearance_benefit':$('#VacationBenefit').val(),
			'clearance_ticket':$('#VacationClearanceTicket').val(),
			'clearance_notes':$('#VacationClearanceNotes').val(),
		}; // end
		
		$.ajax({
			type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_clearance.php',
    		data: formData,
    		beforeSend: function(){
    			$("#save_ticket_clearance_tab").attr("disabled", true);
    			$("#GoBackToVacationClearanceTable").attr("disabled", true);
    			$("#updateClearance").attr("disabled", true);
    		},
    		complete: function(){
    			// This will display the list of pending muqeem
    		    showVRTables('#listOfvacationRequestMuqeem', 'vr_muqeem'); // Reload the list on Muqeem Tables
    		    // This will display the list of pending muqeem
    		    
    			$("#save_ticket_clearance_tab").attr("disabled", false);
    			$("#GoBackToVacationClearanceTable").attr("disabled", false);
    			$("#updateClearance").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
		}) // end ajax
		
		.done(function(data){
			
			counterVacationRequest(); // This is for the counter for vacation request
			
			// This will display the list of pending clearance
		    showVRTables('#listOfvacationRequestClearance', 'vr_clearance'); // Reload the list on Ticket Tables
		    // This will display the list of pending clearance
		    
		    $('#VacationClearanceDetails').addClass('hideContentAi');
	    	$("#VacationClearanceTable").removeClass('hideContentAi');
	    	
	    	function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
			
		}); // end done
		
		// This will upload the file attachment - delayed for 5 seconds
		setTimeout(function(){
			var tcode = $('#hidden_tcode_clearance').val();
			
			var clearance_Image = $('#VacationClearanceAttachment').val();
			
			var clearance_ImageLength = clearance_Image.length;
			
			if(clearance_ImageLength > 0){
				var clearanceFile = document.getElementById('VacationClearanceAttachment');
				
				if(clearanceFile.length === 0){
	    			return;
	    		}// end if
				
				var data = new FormData();
				
				data.append('SelectedFile', clearanceFile.files[0]);
				
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
	    				}// end catch
	    				//console.log(resp.status + ': ' + resp.data);
	    			}// end if
	    		}; // end request
	    		request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_clearance');
		        request.send(data);
			}// end if
			
		}, 5000); // end
		
		// Iqama received
		setTimeout(function(){
			var tcode = $('#hidden_tcode_clearance').val();
			
			var iqamaReceived_Image = $('#VacationClearanceAttachmentIqamaReceived').val();
			
			var iqamaReceived_ImageLength = iqamaReceived_Image.length;
			
			if(iqamaReceived_ImageLength > 0){
				var iqamaReceivedFile = document.getElementById('VacationClearanceAttachmentIqamaReceived');
				
				if(iqamaReceivedFile.length === 0){
					return;
				}// end if
				
				var data = new FormData();
				
				data.append('SelectedFile', iqamaReceivedFile.files[0]);
				
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
	    				}// end catch
	    				console.log(resp.status + ': ' + resp.data);
					}// end if
				};// end request
				request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_clearance_iqama_received');
		        request.send(data);
			}// end if
			
		}, 5000); // end
		// Iqama received
		// This will upload the file attachment - delayed for 5 seconds
		
	}); // end
	// This will save the Clearance update
	
    $( '#GoBackToVacationClearanceTable, a[href="#vacationClearance"]').click(function() {
    	$('#VacationClearanceDetails').addClass('hideContentAi');
    	$("#VacationClearanceTable").removeClass('hideContentAi');
    });	
	
    // This will display the list of pending clearance
    showVRTables('#listOfvacationRequestClearance', 'vr_clearance'); // Reload the list on Ticket Tables
    // This will display the list of pending clearance
    
	$('#VacationClearanceNotes').wysihtml5();

	$('#ticketEditInClearanceTable').removeClass('hideContentAi');
	
    $( '.visaEditInTicket').click(function() {
    	$('#hrFirstEditInFDTable').addClass('hideContentAi');
    	$("#hrFirstUpdateInFDTable").removeClass('hideContentAi');
    }); 

    $( '.ticketUpdateInClearance').click(function() {
    	$('#ticketUpdateInClearanceTable').addClass('hideContentAi');
    	$("#ticketEditInClearanceTable").removeClass('hideContentAi');
    });       
    
	//Vacation Clearance end
    
 // =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - CLEARANCE ================= \\
    
 // ================================================================================================= \\    
    
 // =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - MUQEEM ================= \\   
	
	//Vacation Muqeem start
	$('#VacationMuqeemTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestMuqeem tbody').on( 'click', 'tr', function () {
		
		// Clear the fields
		$('#VacationKsaLeavingDateG').val('');
		$('#VacationKsaLeavingDateH').val('');
		$('#VacationMuqeemNotes').val('');
		$('#VacationMuqeemAttachmentOutsideKSA').val('');
		$('#VacationMuqeemAttachmentIqamaReceived').val('');
		// Clear the fields
		
		var table = $('#listOfvacationRequestMuqeem').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
    	// This is for the value on Clearance - Editing
		
		// This are functions for FIXED DETAILS
		encoder_details(tcodeid,'muqeem');
		employee_details(tcodeid,'muqeem');
		
		replacementDetails(tcodeid,'muqeem'); // This function display Replacement details
		vacation_hr_first(tcodeid, 'muqeem','False'); // This function is for the Not Editing the HR First Notes and File Attachment
		vacation_fd(tcodeid,'muqeem','False'); // This function display FD Details
		vacation_visa(tcodeid,'muqeem','False'); // This function display HR Final Details
		vacation_ticket(tcodeid,'muqeem','False'); // This function display Visa Details
		vacation_clearance(tcodeid,'muqeem','False'); // This function display Ticket Details
		vacation_muqeem(tcodeid,'muqeem','True'); // This function display the Clearance Details
		// This are functions for FIXED DETAILS
		
		// This is to switch from list to details
		$('#VacationMuqeemTable').addClass('hideContentAi');
    	$("#VacationMuqeemDetails").removeClass('hideContentAi');
    	// This is to switch from list to details
    } ); // end
	
	// This will update the clearance details on Muqeem Tab
	$('#save_clearance_muqeem_tab').on('click', function(){
		
		// This is for the attach file
    	var tcode = $('#hidden_tcode_muqeem').val();
    	
    	var vacation_attach_file = $('#VacationClearanceAttachmentInMuqeem').val();
    	
    	var vacation_attach_fileLength = vacation_attach_file.length;
    	
    	if(vacation_attach_fileLength > 0){
    		
    		var vacation_attach_file = document.getElementById('VacationClearanceAttachmentInMuqeem');
    		
    		if(vacation_attach_file.length === 0){
				 return;
			}// end if
    		
    		var data = new FormData();

    		data.append('SelectedFile', vacation_attach_file.files[0]);
    		
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
			
			request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_clearance');
	        request.send(data);
    		
    	}// end if
		
		var formData = {
			'tcode':$('#hidden_tcode_muqeem').val(),
			'muqeem_benefit':$('#VacationBenefitInMuqeem').val(),
			'muqeem_ticket':$('#VacationClearanceTicketInMuqeem').val(),
			'muqeem_notes':$('#VacationClearanceNotesInMuqeem').val(),
		}; // end
		
		$.ajax({
			type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_clearance_on_muqeem_tab.php',
    		data: formData,
    		beforeSend: function(){
    			$("#save_clearance_muqeem_tab").attr("disabled", true);
    			$("#GoBackToVacationMuqeemTable").attr("disabled", true);
    			$("#updateMuqeem").attr("disabled", true);
    		},
    		complete: function(){
    			$("#save_clearance_muqeem_tab").attr("disabled", false);
    			$("#GoBackToVacationMuqeemTable").attr("disabled", false);
    			$("#updateMuqeem").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			var tcodeid = $('#hidden_tcode_muqeem').val();
			
			vacation_muqeem(tcodeid,'muqeem','True'); // This function display the Clearance Details
			
			$('#clearanceUpdateInMuqeemTable').addClass('hideContentAi');
	    	$("#clearanceEditInMuqeemTable").removeClass('hideContentAi');
	    	
	    	function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}// end
			
			reset();
			alertify.success(data.message);
			return false;
			
//			console.log(data.message);
		});// end done
		
	});//end function
	// This will update the clearance details on Muqeem Tab
	
	// This will update the muqeem details
	$('#updateMuqeem').on('click', function(){
		
		var formData = {
			'tcode':$('#hidden_tcode_muqeem').val(),
			'muqeem_leaving_date_g':$('#VacationKsaLeavingDateG').val(),
			'muqeem_leaving_date_h':$('#VacationKsaLeavingDateH').val(),
			'muqeem_notes':$('#VacationMuqeemNotes').val()
		}; // end
		
		$.ajax({
			type: 'POST',
    		url: '../ajax/controller/employee_request/vacation_request_update_muqeem.php',
    		data: formData,
    		beforeSend: function(){
    			$("#GoBackToVacationMuqeemTable").attr("disabled", true);
    			$("#updateMuqeem").attr("disabled", true);
    		},
    		complete: function(){
    			
    			// This will display the list of pending closed
    		    showVRTables('#listOfvacationRequestClosed', 'vr_closed'); // Reload the list on Closed Tables
    		    // This will display the list of pending closed
    		    
    			$("#GoBackToVacationMuqeemTable").attr("disabled", false);
    			$("#updateMuqeem").attr("disabled", false);
    		},
    		dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			counterVacationRequest(); // This is for the counter for vacation request
			
			// This will display the list of pending muqeem
		    showVRTables('#listOfvacationRequestMuqeem', 'vr_muqeem'); // Reload the list on Muqeem Tables
		    // This will display the list of pending muqeem
		    
		    $('#VacationMuqeemDetails').addClass('hideContentAi');
	    	$("#VacationMuqeemTable").removeClass('hideContentAi');
	    	
	    	function reset () {
				$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
			}
			
			reset();
			alertify.success(data.message);
			return false;
			
		}); // end done
		
		// This is to upload the attached files - delayed for 5 seconds
		// Outside KSA
		setTimeout(function(){
			var tcode = $('#hidden_tcode_muqeem').val();
			
			var outsideKSA_Image = $('#VacationMuqeemAttachmentOutsideKSA').val();
			
			var outsideKSA_ImageLength = outsideKSA_Image.length;
			
			if(outsideKSA_ImageLength > 0){
				var outsideKSAFile = document.getElementById('VacationMuqeemAttachmentOutsideKSA');
				
				if(outsideKSAFile.length === 0){
					return;
				}// end if
				
				var data = new FormData();
				
				data.append('SelectedFile', outsideKSAFile.files[0]);
				
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
	    				}// end catch
	    				//console.log(resp.status + ': ' + resp.data);
					}// end if
				}; // end request
				request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_muqeem_outside_ksa');
		        request.send(data);
			}// end if
			
		}, 5000); // end
		// Outside KSA
		
		// Iqama received
//		setTimeout(function(){
//			var tcode = $('#hidden_tcode_muqeem').val();
//			
//			var iqamaReceived_Image = $('#VacationMuqeemAttachmentIqamaReceived').val();
//			
//			var iqamaReceived_ImageLength = iqamaReceived_Image.length;
//			
//			if(iqamaReceived_ImageLength > 0){
//				var iqamaReceivedFile = document.getElementById('VacationMuqeemAttachmentIqamaReceived');
//				
//				if(iqamaReceivedFile.length === 0){
//					return;
//				}// end if
//				
//				var data = new FormData();
//				
//				data.append('SelectedFile', iqamaReceivedFile.files[0]);
//				
//				var request = new XMLHttpRequest();
//				request.onreadystatechange = function(){
//					if(request.readyState == 4){
//						try {
//	    					var resp = JSON.parse(request.response);
//	    				}catch(e){
//	    					var resp = {
//								status: 'error',
//								data: 'Unknown error occurred: [' + request.responseText + ']'
//	    					};// end
//	    				}// end catch
//	    				console.log(resp.status + ': ' + resp.data);
//					}// end if
//				};// end request
//				request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+tcode+'&path=vr_muqeem_iqama_received');
//		        request.send(data);
//			}// end if
//			
//		}, 5000); // end
		// Iqama received
		// This is to upload the attached files - delayed for 5 seconds
		
	});// end
	// This will update the muqeem details

    $( '#GoBackToVacationMuqeemTable, a[href="#vacationMuqeem"]').click(function() {
    	$('#VacationMuqeemDetails').addClass('hideContentAi');
    	$("#VacationMuqeemTable").removeClass('hideContentAi');
    });	
    
    // This will display the list of pending Muqeem
    showVRTables('#listOfvacationRequestMuqeem', 'vr_muqeem'); // Reload the list on Closed/Muqeem Tables
    // This will display the list of pending Muqeem
	
	$('#VacationMuqeemNotes').wysihtml5();

	$('#clearanceEditInMuqeemTable').removeClass('hideContentAi');
	
    $( '.visaEditInTicket').click(function() {
    	$('#hrFirstEditInFDTable').addClass('hideContentAi');
    	$("#hrFirstUpdateInFDTable").removeClass('hideContentAi');
    }); 

    $( '.clearanceUpdateInMuqeem').click(function() {
    	$('#clearanceUpdateInMuqeemTable').addClass('hideContentAi');
    	$("#clearanceEditInMuqeemTable").removeClass('hideContentAi');
    });       
    
	//Vacation Muqeem end	
    
 // =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - MUQEEM ================= \\      
    
 // ================================================================================================= \\    
    
 // =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - CLOSED ================= \\  
	
	//Vacation Closed start
	$('#VacationClosedTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestClosed tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfvacationRequestClosed').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'closed');
		employee_details(tcodeid,'closed');
		
		replacementDetails(tcodeid,'closed'); // This function display Replacement details
		vacation_hr_first(tcodeid, 'closed','False'); // This function is for the Not Editing the HR First Notes and File Attachment
		vacation_fd(tcodeid,'closed','False'); // This function display FD Details
		vacation_visa(tcodeid,'closed','False'); // This function display HR Final Details
		vacation_ticket(tcodeid,'closed','False'); // This function display Visa Details
		vacation_clearance(tcodeid,'closed','False'); // This function display Ticket Details
		vacation_muqeem(tcodeid,'closed','False'); // This function display the Clearance Details
		vacation_closed_decline(tcodeid,'closed'); // This function display the Closed Details
		
		$('#VacationClosedTable').addClass('hideContentAi');
    	$("#VacationClosedDetails").removeClass('hideContentAi');
    } );

    $( '#GoBackToVacationClosedTable, a[href="#vacationClosed"]').click(function() {
    	$('#VacationClosedDetails').addClass('hideContentAi');
    	$("#VacationClosedTable").removeClass('hideContentAi');
    });	
	
    // This will display the list of pending closed
    showVRTables('#listOfvacationRequestClosed', 'vr_closed'); // Reload the list on Closed Tables
    // This will display the list of pending closed
    
	//Vacation Closed end		
    
    
// =============== THIS IS FOR THE UPDATE OF VACATION REQUEST - DECLINED ================= \\     
	
	//Vacation Declined start
	$('#VacationDeclinedTable').removeClass('hideContentAi');
	
	$('#listOfvacationRequestDeclined tbody').on( 'click', 'tr', function () {
		
		var table = $('#listOfvacationRequestDeclined').DataTable();
		var rowData = table.row( this ).data();
		var tcodeid = rowData[10];
		var empid = rowData[2];
		
		// This will the prevent the user from clicking the row if 
		// 0 - Not Clickable
		// 1 - Clickable
		if(rowData[12] == 0){ // to make not clickable row
			return false;
		}
		
		encoder_details(tcodeid,'declined');
		employee_details(tcodeid,'declined');
		
		replacementDetails(tcodeid,'declined'); // This function display Replacement details
		vacation_hr_first(tcodeid, 'declined','False'); // This function is for the Not Editing the HR First Notes and File Attachment
		vacation_fd(tcodeid,'declined','False'); // This function display FD Details
		vacation_visa(tcodeid,'declined','False'); // This function display HR Final Details
		vacation_ticket(tcodeid,'declined','False'); // This function display Visa Details
		vacation_clearance(tcodeid,'declined','False'); // This function display Ticket Details
		vacation_muqeem(tcodeid,'declined','False'); // This function display the Clearance Details
		vacation_closed_decline(tcodeid,'declined'); // This function display the Closed Details
		
		$('#VacationDeclinedTable').addClass('hideContentAi');
    	$("#VacationDeclinedDetails").removeClass('hideContentAi');
    } );

    $( '#GoBackToVacationDeclinedTable, a[href="#vacationDeclined"]').click(function() {
    	$('#VacationDeclinedDetails').addClass('hideContentAi');
    	$("#VacationDeclinedTable").removeClass('hideContentAi');
    });	
	
    // This will display the list of pending declined
    showVRTables('#listOfvacationRequestDeclined', 'vr_declined'); // Reload the list on Closed Tables
    // This will display the list of pending declined
    
	//Vacation Declined end		
	
	$('#requestNewMessage').wysihtml5();	
	
	// ==================================================================== \\
	
	// This is for the declined a vacation request - hr first
	$('#declined_VR_HR_First_Request').on("click", function(){
		
		var hr_first_tcode = $('#tcode').text();
		var encoderCreated = $('#encoderCreated').text();
		var hr_first_decline_notes = $('#vacationHRFirstNotes').val();
		
		//This will show the ALERT
		function reset () {
			$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
			alertify.set({			
			   delay : 2000,
			});
		}
		
		reset();
		
		alertify.confirm("Decline the selected entry?",function(e){
	        if(e) {
	        	
	        	// This will upload the attached file
	        	var vr_hr_declineFile = $('#vacationHRFirstAttachment').val();
	        	
	        	var vr_hr_declineFileLength = vr_hr_declineFile.length;
	        	
	        	if(vr_hr_declineFileLength > 0){
	        		var vr_hr_declineFile = document.getElementById('vacationHRFirstAttachment');
	        		
	        		if(vr_hr_declineFile.length === 0){
	        			return;
	        		}// end if
	        		
	        		var data = new FormData();
	        		
	        		data.append('SelectedFile', vr_hr_declineFile.files[0]);
	        		
	        		var request = new XMLHttpRequest();
	        		
	        		request.onreadystatechange = function(){
	        			if(request.readyState == 4){
	        				try {
	        					var resp = JSON.parse(request.response);
	        				}catch(e){
	        					var resp = {
        							status: 'error',
        							data: 'Unknown error occurred: [' + request.responseText + ']'
	        					}// end var
	        				}// end catch
	        			}// end if
	        			//console.log(resp.status + ': ' + resp.data);
	        		};// end request
	        		request.open('POST', '../ajax/controller/employee_request/upload_photo_request.php?tcode='+hr_first_tcode+'&path=vr_hr_first_decline');
	    	        request.send(data);
	        	}// end if
	        	
	        	var formData = {
	        			'tcode':hr_first_tcode,
	        			'date_created':encoderCreated,
	        			'hr_first_decline_notes':hr_first_decline_notes
	        	};// end formData
	        	
	        	$.ajax({
	        		type: 'POST',
	        		url: '../ajax/controller/employee_request/vacation_request_decline.php?request=vacation_request',
	        		data: formData,
	        		beforeSend: function(){
	    				$("#GoBackVToVacationHrFirstTable").attr("disabled", true);
	    				$("#declined_VR_HR_First_Request").attr("disabled", true);
	    				$("#messageInRequest").attr("disabled", true);
	    				$("#updateHRFirst").attr("disabled", true);
	    			},
	    			complete: function(){
	    				$("#GoBackVToVacationHrFirstTable").attr("disabled", false);
	    				$("#declined_VR_HR_First_Request").attr("disabled", false);
	    				$("#messageInRequest").attr("disabled", false);
	    				$("#updateHRFirst").attr("disabled", false);
	    			},
	    			dataType: 'json',
	    			encode: true
	        	})// end ajax
	        	
	        	.done(function(data){
	        		
	        		// Returned to the list of vacation request
	        		$('#VacationHrFirstDetails').addClass('hideContentAi');
	            	$("#VacationHrFirstTable").removeClass('hideContentAi');
	        		
	        		//Display the table list
	            	var dataTable = $('#listOfvacationRequestHrFirst').DataTable({
	            		"fnRowCallback": function( row, data, index ){
	            			if(jQuery.isEmptyObject(data[7]) || data[7] == ''){
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
	            		"ajax": "../ajax/controller/employee_request/vacation_request_list.php?request_type=vr_hr_first",
	            		"iDisplayLength": 10,
	            		//"order": [[ 0, "asc" ]],
	            		"columnDefs": [
	            			{ className: "dt-center", "targets": [0,1,2,3,4,5,6,7] }
	            		]
	            	}); // end data table
	            	
	            	counterVacationRequest(); // This is for the counter for vacation request
	        		
	        		alertify.success('Request declined!');
	        	});// end done
	        	//console.log('Ok');
	        } else {
	        	alertify.error("Cancel decline!");
	        	//console.log('Cancel');
	        }

	    });
		return false;
	});
	// This is for the declined a vacation request - hr first
	
	// This is for the declined a vacation request - hr final
	$('#declineRequest_HR_FINAL').on('click',function(){
//		var hr_final_tcode = $('#tcode_HR_FINAL').text();
//		var hr_final_decline_notes = $('#vacationHrFinalNotes').val();
//		
//		//This will show the ALERT
//		function reset () {
//			$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
//			alertify.set({			
//			   delay : 2000,
//			});
//		}// end
//		
//		reset();
//		
//		alertify.confirm("Decline the selected entry?",function(e){
//			if(e) {
//				var formData = {
//					'tcode':hr_final_tcode,
//					'hr_first_decline_notes':hr_final_decline_notes
//				}; // end formData
//				
//				$.ajax({
//					type: 'POST',
//					url: '../ajax/controller/employee_request/vacation_request_decline.php?request=vacation_request',
//					data: formData,
//					beforeSend: function(){
//						$("#GoBackToVacationHrFinalTable").attr("disabled", true);
//						$("#assignedReplacement_HR_Final").attr("disabled", true);
//						$("#generatePDF").attr("disabled", true);
//						$("#declineRequest_HR_FINAL").attr("disabled", true);
//						$("#updateVR_HR_FINAL").attr("disabled", true);
//					},
//					complete: function(){
//						$("#GoBackToVacationHrFinalTable").attr("disabled", false);
//						$("#assignedReplacement_HR_Final").attr("disabled", false);
//						$("#generatePDF").attr("disabled", false);
//						$("#declineRequest_HR_FINAL").attr("disabled", false);
//						$("#updateVR_HR_FINAL").attr("disabled", false);
//					},
//					dataType: 'json',
//	    			encode: true
//				})// end ajax
//				
//				.done(function(data){
//					
//					// Returned to the list of vacation request
//					$('#VacationHrFinalDetails').addClass('hideContentAi');
//			    	$("#VacationHrFinalTable").removeClass('hideContentAi');
//	        		
//	        		//Display the table list
//	            	var dataTable = $('#listOfvacationRequestHrFinal').DataTable({
//	            		"fnRowCallback": function(nRow) {
//	            			  nRow.className = "clickableCursor";
//	            			  return nRow;
//	            		},
//	            		"processing": true,
//	            		"serverSide": true,	
//	            		"destroy": true,
//	            		"ajax": "../ajax/controller/employee_request/vacation_request_list.php?request_type=vr_hr_final",
//	            		"iDisplayLength": 10,
//	            		//"order": [[ 0, "asc" ]],
//	            		"columnDefs": [
//	            			{ className: "dt-center", "targets": [0,1,2,3,4,5,6,7] }
//	            		]
//	            	}); // end data table
//	            	
//	            	counterVacationRequest(); // This is for the counter for vacation request
//	            	
//					//alertify.success('Request declined!');
//	            	alertify.success(data.message);
//				});
//			}else {
//				alertify.error("Cancel decline!");
//			}//end if
//			
//		});// end
//		return false;
		
//		console.log('HR Final Decline');
	});// end
	// This is for the declined a vacation request - hr final
	
	
	/*--------------------------------------------------------------------------------------------------------------*/
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#vacationHRFirstTableH').addClass('hideContentAi');
		$('#updateHRFirst').addClass('hideContentAi');
	
		$('#vacationFdTableH').addClass('hideContentAi');
		$('#updateHRFD').addClass('hideContentAi');
		
		$('#vacationHrFinalTableH').addClass('hideContentAi');
		$('#hrfinal_GeneratePDF').addClass('hideContentAi');
		$('#assignedReplacement_HR_Final').addClass('hideContentAi');
		$('#updateVR_HR_FINAL').addClass('hideContentAi');
		
		$('#vacationVisaTableH').addClass('hideContentAi');
		$('#updateVisa_VR').addClass('hideContentAi');
		
		$('#vacationTicketTableH').addClass('hideContentAi');
		$('#updateTicket_VR').addClass('hideContentAi');
		
		$('#vacationClearanceTableH').addClass('hideContentAi');
		$('#updateClearance').addClass('hideContentAi');		
		
		$('#vacationMuqeemTableH').addClass('hideContentAi');
		$('#updateMuqeem').addClass('hideContentAi');		
	}
	//disable button and update end	
	
} );// end
