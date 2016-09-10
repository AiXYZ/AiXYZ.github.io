//employee Image change start
function updateEmpPhotoMButton() {
	$('#profilePictureChangeModal').modal('hide');

	var employeeIdForPhoto = $('#employeeID').val();
	$.ajax({
		type: "POST",
		url: "../ajax/controller/employee_details.php",
		data: { employee_id: employeeIdForPhoto }
	}) // end ajax
	
	.done(function( msg ){
		var employee_photo_path = $.parseJSON(msg);
		var imageLocationPrint = employee_photo_path['employee_photo_path'];
		$('#profilePictureChange').attr('src', imageLocationPrint);
	});	
	
	//console.log("Photo uploaded");
}
//employee Image change end

$(document).ready(function() {		
	/* -------------------------------------------------------------------------------------------------------------- */
	
	/* --------------------------------------- This is for the functions ----------------------------------------- */
	
	// This will compute the employee age
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
	  var age = years;
	  
	  //return year_month_day;
	  return age, year_month_day;
	  
	}// end
	// This will compute the employee age
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
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
	  //var age = years;
	  
	  return year_month_day;
	  //return age;
	  
	}// end
	// This will compute the xx year(s) xx month(s) xx day(s)
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
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
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
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
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	function left_panel_information(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			/*---------------------------------------------------------------------*/
			
			var employee_name = $.parseJSON(msg);
			
			/*---------------------------------------------------------------------*/
			
			var employee_photo_path = $.parseJSON(msg);
			var employee_position_name = $.parseJSON(msg);
			
			/*---------------------------------------------------------------------*/
			
			var employee_gbirthdate = $.parseJSON(msg);
			var employee_gender_name = $.parseJSON(msg);
			var employee_nationality_name = $.parseJSON(msg);
			
			var employee_religion_name = $.parseJSON(msg);
			var employee_marital_status_name = $.parseJSON(msg);
			var employee_phone_number = $.parseJSON(msg);
			
			/*---------------------------------------------------------------------*/
			
			var employee_passport_photo = $.parseJSON(msg);
			var employee_iqama_photo = $.parseJSON(msg);
			var employee_license_photo = $.parseJSON(msg);
			
			var employee_passport_visa_photo = $.parseJSON(msg);
			var employee_passport_stamp_visa_photo = $.parseJSON(msg);
			var employee_company_id_photo = $.parseJSON(msg);
			
			/*---------------------------------------------------------------------*/
			
			// Length of service computation
			var employee_current_contract_g_date = $.parseJSON(msg);
			
			var sDate = employee_current_contract_g_date['employee_current_contract_g_date'].split('/');
			var sDate_Day = parseInt(sDate[0],10);
			var sDate_Month = parseInt(sDate[1],10);
			var sDate_Year = parseInt(sDate[2],10);
			var sDate_New = sDate_Year+'/'+sDate_Month+'/'+sDate_Day;
			
			var gc = $.calendars.instance(); 
			var d = gc.today();
			var y = d.year();
			var m = d.month();
			var d = d.day();
			
			var currentDate = y + "/" + m + "/" + d;
			
			var length_of_service = difference(Date.parse(currentDate), Date.parse(sDate_New));
			
			if(length_of_service == 'NaN year(s) NaN month(s) NaN day(s)'){
				lengthOfService = '0 year(s) 0 month(s) 0 day(s)';
			}else {
				lengthOfService = length_of_service;
			}
			
			/*---------------------------------------------------------------------*/
			
			$('#left_panel_information').empty();
			$('#left_panel_information').append(
					'<div class="thumbnail" style="padding-right: 0px;padding-left: 0px;">'+
						
						// Photo
						'<img src="'+employee_photo_path['employee_photo_path']+'" id="profilePictureChange" width="220px" height="220px" style="border-radius: 50%;">'+
						'<span id="profilePictureChangeSign" class="hideContentAi"><a href="#profilePictureChangeModal" role="button" class="btn" data-toggle="modal"><i class="icon-camera" style="font-size: 40px;"></i></a></span>'+
						'<h3 class="tdTextInCenterAi profilePictureChangeClick">'+employee_name['employee_name']+'</h3>'+

						// Position
						'<p class="tdTextInCenterAi"><strong class="emp_position"> '+employee_position_name['employee_position_name']+' </strong></p>'+
						
						// Length of service
						'<p class="tdTextInCenterAi"><strong>'+lengthOfService+'</strong></p>'+
						
						// Barcode
						'<img src="../../barcodegen/employee_barcode.php?eid='+eid+'"  />'+
						'<br/>'+
						
						'<!-- employee attachment and quick info start -->'+
						'<table class="table table-bordered profileIconTable" style="border-radius: 0px;border-right: 0px;">'+
						    '<tbody>'+
						    	// Icons
						        '<tr>'+
						            '<td class="tdTextInCenterAi" style="border-radius: 0px;border-left: 0px;"><i class="icon-calendar" style="font-size: 30px;"></i><br><span> '+employee_gbirthdate['employee_gbirthdate']+' </span></td>'+
						            '<td class="tdTextInCenterAi"><i class="icon-user" style="font-size: 30px;"></i><br><span> '+employee_gender_name['employee_gender_name']+' </span></td>'+
						            '<td class="tdTextInCenterAi"><i class="icon-globe" style="font-size: 30px;"></i><br><span> '+employee_nationality_name['employee_nationality_name']+' </span></td>'+
						        '</tr>'+
						        '<tr>'+
						            '<td style="border-left: 0px;" class="tdTextInCenterAi"><i class="icon-group" style="font-size: 30px;"></i><br><span> '+employee_religion_name['employee_religion_name']+' </span></td>'+
						            '<td class="tdTextInCenterAi"><i class="icon-heart" style="font-size: 30px;"></i><br><span> '+employee_marital_status_name['employee_marital_status_name']+' </span></td>'+
						            '<td class="tdTextInCenterAi"><i class="icon-phone-sign" style="font-size: 30px;"></i><br><span> '+employee_phone_number['employee_phone_number']+' </span></td>'+
						        '</tr>'+
						        '<tr>'+
						            '<td style="border-left: 0px;" class="tdTextInCenterAi" colspan="3">&nbsp;</td>'+
						        '</tr>'+											        
						        
						        // Photo
						        '<tr id="passportIqamaDL">'+
						        '<!-- Display the Passport, Iqama and Driver License Images -->'+
						        	'<td style="border-left: 0px;" class="tdTextInCenterAi"><img src="'+employee_passport_photo['employee_passport_photo']+'" style="width: 65px;height: 65px;"/><br>Passport</td>'+
						            '<td class="tdTextInCenterAi"><img src="'+employee_iqama_photo['employee_iqama_photo']+'" style="width: 65px;height: 65px;"/><br>Iqama</td>'+
						            '<td class="tdTextInCenterAi"><img src="'+employee_license_photo['employee_license_photo']+'" style="width: 65px;height: 65px;"/><br>DL</td>'+
						        '</tr>'+
						        '<tr id="visaStampVisaID">'+
						        '<!-- Display the Visa, Stamp Visa and ID Images -->'+
						        	'<td style="border-left: 0px;" class="tdTextInCenterAi"><img src="'+employee_passport_visa_photo['employee_passport_visa_photo']+'" style="width: 65px;height: 65px;"/><br>Visa</span></td>'+
						            '<td class="tdTextInCenterAi"><img src="'+employee_passport_stamp_visa_photo['employee_passport_stamp_visa_photo']+'" style="width: 65px;height: 65px;"/><br>S.Visa</td>'+
						            '<td class="tdTextInCenterAi"><img src="'+employee_company_id_photo['employee_company_id_photo']+'" style="width: 65px;height: 65px;"/><br>ID</td>'+
						        '</tr>'+
						        '<tr style="border-left: 0px;">'+
						            '<td style="border-left: 0px; padding: 0px;" colspan="3" cellpadding="0" cellspacing="0">'+
						            	'<table border="0" width="100%" id="employee_history_remarks">'+
						            	'</table>'+
						            '</td>'+
						        '</tr>'+
						        '<tr>'+ 
						            '<td style="border-left: 0px;" class="tdTextInCenterAi" colspan="3"><button class="btn btn-mini" type="button">Add history</button></td>'+
						        '</tr>'+									        									        									        									        									        									        										        											        											        
						    '</tbody>'+
						'</table>'+
						'<!-- employee attachedment and quick info end -->'+
						'<div style="padding: 0px 10px 0px 10px;">'+
						'<select id="requestHistory" class="input-block-level">'+
							'<option value="vacationRequest">Vacation</option>'+
							'<option value="transferRequest">Transfer</option>'+
							'<option value="cashAdvanceRequest">Cash Advance</option>'+
							'<option value="generalRequestRequest">General request</option>'+
							'<option value="joiningFromVacationRequest">Joining From Vacation</option>'+
							'<option value="transferredEmployeeRequest">Transferred Employee</option>'+
							'<option value="reNewIqamaRequest">Re-new Iqama</option>'+
							'<option value="familyVisitRequest">Family Visit</option>'+
							'<option style="display:none;" selected>Request History</option>'+
						'</select>'+
						'</div>'+
					'</div>'+
						
					//modal for profile image change start
					'<div id="profilePictureChangeModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false"  style="width: 330px; margin-left: -165px;">'+
					  '<div class="modal-header">'+
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
						'<h3 id="myModalLabel">Image</h3>'+
					  '</div>'+
					  '<div id="profilePictureChangeBody" class="modal-body" style="max-height: 430px;">'+
					  	'<iframe src="../upload-profile-picture-v2/employee-profile-photo-ui-bootstrap.php?empIdForImgUpdate='+eid+'" width="300px" height="410px" align="middle" frameborder="0"></iframe>'+		
					  '</div>'+
					'</div>'					
					//modal for profile image change end
			);

			//profile image change icon start
			$("#profilePictureChangeSign").mouseover(function() {
				$('#profilePictureChangeSign').removeClass('hideContentAi');
			});
				
			$("#profilePictureChange").hover(function() {
				$('#profilePictureChangeSign').removeClass('hideContentAi');
			},function() {
				$('#profilePictureChangeSign').addClass('hideContentAi');
			});

			$("#profilePictureChangeModal").mouseover(function() {
				$('#profilePictureChangeSign').addClass('hideContentAi');
			});	
			//profile image change icon end			
			
		});
		
	}// end
	
	/* ------------------------------------ */
	
	function personal_information(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var employee_id = $.parseJSON(msg);
			var employee_name = $.parseJSON(msg);
			var employee_gbirthdate = $.parseJSON(msg);
			var employee_hbirthdate = $.parseJSON(msg);
			var employee_age = $.parseJSON(msg);
			var employee_gender_id = $.parseJSON(msg);
			var employee_gender_name = $.parseJSON(msg);
			var employee_nationality_id = $.parseJSON(msg);
			var employee_nationality_name = $.parseJSON(msg);
			var employee_religion_id = $.parseJSON(msg);
			var employee_religion_name = $.parseJSON(msg);
			var employee_marital_status_id = $.parseJSON(msg);
			var employee_marital_status_name = $.parseJSON(msg);
			var employee_phone_number = $.parseJSON(msg);
			var employee_drivers_license_number = $.parseJSON(msg);
			var employee_type_of_license = $.parseJSON(msg);
			var employee_license_g_issued_date = $.parseJSON(msg);
			var employee_license_h_issued_date = $.parseJSON(msg);
			var employee_license_g_exp_date = $.parseJSON(msg);
			var employee_license_h_exp_date = $.parseJSON(msg);
			var employee_visa_number = $.parseJSON(msg);
			var employee_agency_id = $.parseJSON(msg);
			
			var nextEmpIdFroJ = $.parseJSON(msg);
			var previousEmpIdFroJ = $.parseJSON(msg);
			
			$('#personal_information').empty();
			$('#personal_information').append(
			        '<div class="row-fluid">'+
						'<p><strong>Personal information</strong></p>'+
			        '</div>'+						      				
			        '<div class="row-fluid">'+
			          '<div class="span4">'+
						'<div class="control-group">'+											
							'<label class="control-label" for="employeeID">Employee ID</label>'+
							'<div class="controls">'+
								'<input type="text" class="input-block-level" id="employeeID" value="'+employee_id['employee_id']+'" readonly>'+
								'<input type="hidden" id="employeeid" value="'+employee_id['employee_id']+'" readonly>'+
								'<input type="hidden" id="previousEmployeeId" value="'+previousEmpIdFroJ['previousEmpIdFroJ']+'" readonly>'+
								'<input type="hidden" id="nextEmployeeId" value="'+nextEmpIdFroJ['nextEmpIdFroJ']+'" readonly>'+
							'</div> <!-- /controls -->'+				
						'</div> <!-- /control-group -->'+							          
			          '</div>'+
			          '<div class="span4">'+
						'<div class="control-group">'+											
							'<label class="control-label" for="empName">Name</label>'+
							'<div class="controls">'+
								'<input type="text" class="input-block-level" id="empName" value="'+employee_name['employee_name']+'">'+
							'</div> <!-- /controls -->'+				
						'</div> <!-- /control-group -->'+								          
			          '</div>'+
			          '<div class="span4">'+
						'<div class="control-group">'+											
							'<label class="control-label" for="birthDateG">Birth date (G)</label>'+
							'<div class="controls">'+
								'<input type="text" class="input-block-level" id="birthDateG" value="'+employee_gbirthdate['employee_gbirthdate']+'" onkeydown="return false">'+
							'</div> <!-- /controls -->'+				
						'</div> <!-- /control-group -->'+								          
			          '</div>'+
			        '</div>'+
			        
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="birthDateH">Birth date (H) </label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="birthDateH" value="'+employee_hbirthdate['employee_hbirthdate']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="empAge">Age</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="empAge" value="'+employee_age['employee_age']+'" readonly>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="empGender">Gender</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="empGender">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+							        
			        
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="empNationality">Nationality</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="empNationality">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="empReligion">Religion</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="empReligion">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="maritalStatus">Marital status</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="maritalStatus">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+											
			        '</div>'+								        
			        
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="phoneNumber">Phone number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="phoneNumber" value="'+employee_phone_number['employee_phone_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="driversLicense">Driver\'s license</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="driversLicense" value="'+employee_drivers_license_number['employee_drivers_license_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+								        
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="typeOfLicense">Type of license</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="typeOfLicense">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="licenseIssueDateG">License issue date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="licenseIssueDateG" value="'+employee_license_g_issued_date['employee_license_g_issued_date']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="licenseExpiryDateG">License expiry date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="licenseExpiryDateG" value="'+employee_license_g_exp_date['employee_license_g_exp_date']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="visaNumber">Visa number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="visaNumber" value="'+employee_visa_number['employee_visa_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+	
						
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="licenseIssueDateH">License issue date (H)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="licenseIssueDateH" value="'+employee_license_h_issued_date['employee_license_h_issued_date']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+		
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="licenseExpiryDateH">License expiry date (H)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="licenseExpiryDateH" value="'+employee_license_h_exp_date['employee_license_h_exp_date']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="nameOfAgency">Name of agency</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="nameOfAgency">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'						
			);
			
			//previous and next start
			if($('#previousEmployeeId').val() == ''){
				$('#previousEmployeeButton').attr('disabled', true);
			}else{
				$('#previousEmployeeButton').attr('disabled', false);
			}
			if($('#nextEmployeeId').val() == ''){
				$('#nextEmployeeButton').attr('disabled', true);
			}else{
				$('#nextEmployeeButton').attr('disabled', false);
			}			
			//previous and next end
			
			/* ------------------------------------ */
			
			var gregorianCalendar_Personal_Information = $.calendars.instance('gregorian');
			var islamicCalendar_Personal_Information = $.calendars.instance('islamic');
			
			// Birth date - Gregorian to Hijiri
			$('#birthDateG').calendarsPicker({
				calendar: gregorianCalendar_Personal_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#birthDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#birthDateH').val(outputHijriDate);
					
					// Compute the age of the employee based on the given brith date gregorian
					var gregorianBirthDate = $('#birthDateG').val();
					var sDate = gregorianBirthDate.split('/');
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
					
					var employee_age = difference(Date.parse(currentDate), Date.parse(sDate_New));

					$('#empAge').val(truncate(employee_age, 2));
					
					//console.log(length_of_service);
					
				}// end onSelect
			});
			
			/* ------------------------------------ */
			
			// Birth date - Hijiri to Gregorian
			$('#birthDateH').calendarsPicker({
				calendar: islamicCalendar_Personal_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#birthDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#birthDateG').val(outputGregorianDate);
					
					// Compute the age of the employee based on the given brith date gregorian
					var gregorianBirthDate = $('#birthDateG').val();
					var sDate = gregorianBirthDate.split('/');
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
					
					var employee_age = difference(Date.parse(currentDate), Date.parse(sDate_New));

					$('#empAge').val(employee_age);
					
				}// end onSelect		
			});	
			
			/* ------------------------------------ */
			
			// License issue date (G)
			$('#licenseIssueDateG').calendarsPicker({
				calendar: gregorianCalendar_Personal_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#licenseIssueDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#licenseIssueDateH').val(outputHijriDate);
				}// end onSelect
			});
			
			/* ------------------------------------ */
			
			// License issue date (H)
			$('#licenseIssueDateH').calendarsPicker({
				calendar: islamicCalendar_Personal_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#licenseIssueDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#licenseIssueDateG').val(outputGregorianDate);
				}// end onSelect		
			});
			
			/* ------------------------------------ */
			
			// License expiry date (G)
			$('#licenseExpiryDateG').calendarsPicker({
				calendar: gregorianCalendar_Personal_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#licenseExpiryDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#licenseExpiryDateH').val(outputHijriDate);
				}// end onSelect
			});
			
			/* ------------------------------------ */
			
			// License expiry date (H)
			$('#licenseExpiryDateH').calendarsPicker({
				calendar: islamicCalendar_Personal_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#licenseExpiryDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#licenseExpiryDateG').val(outputGregorianDate);
				}// end onSelect		
			});
			
			/* ------------------------------------ */
			
			//This is for the Gender Dropdown List
			$('#empGender').empty();
			$('#empGender').append("<option>Loading...</option>");
			$.ajax({
				type: "POST",
				url: "../ajax/controller/gender_list.php",
				contentType:"application/json: charset=utf-8",
				dataType:"json",
				success: function(data){
					$('#empGender').empty();

					$.each(data, function(i, gname){
						if(data[i].id == employee_gender_id['employee_gender_id']){
							var S_Gender = 'selected';
						}else {
							var S_Gender = '';
						}
						  
						$('#empGender').append('<option value="'+data[i].id+'" '+S_Gender+'> '+data[i].gname+' </option>');
					});// end each
				},
				complete: function(){
				}// end success
				  
			}); // end ajax
			
			/* ------------------------------------ */
			
			//This is for the Nationality Dropdown List
      		$('#empNationality').empty();
      		$('#empNationality').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/nationality_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#empNationality').empty();
      				$.each(data, function(i, natlname){
  					  
      					if(data[i].id == employee_nationality_id['employee_nationality_id']){
      						var S_Nationality = 'selected';
      					}else {
      						var S_Nationality = '';
      					}
  					  
      					$('#empNationality').append('<option value="'+data[i].id+'" '+S_Nationality+'> '+data[i].natlname+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
      		
      		/* ------------------------------------ */
      		
      		//This is for the Religion
      		$('#empReligion').empty();
      		$('#empReligion').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/religion_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#empReligion').empty();
      				$.each(data, function(i, religion_name){
  						  
      					if(data[i].id == employee_religion_id['employee_religion_id']){
      						var S_Religion = 'selected';
      					}else {
      						var S_Religion = '';
      					}
  						  
      					$('#empReligion').append('<option value="'+data[i].id+'" '+S_Religion+'> '+data[i].religion_name+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
      		
      		/* ------------------------------------ */
      		
      		//This is for the Marital Status
      		$('#maritalStatus').empty();
      		$('#maritalStatus').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/marital_status_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#maritalStatus').empty();
      				$.each(data, function(i, marriage_status){
  						  
      					if(data[i].id == employee_marital_status_id['employee_marital_status_id']){
      						var S_Marital_Status = 'selected';
      					}else {
      						var S_Marital_Status = '';
      					}
  						  
      					$('#maritalStatus').append('<option value="'+data[i].id+'" '+S_Marital_Status+'> '+data[i].marriage_status+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
      		
      		
      		/* ------------------------------------ */
      		
      		//This is for the Type of license
      		$('#typeOfLicense').empty();
      		$('#typeOfLicense').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/type_of_license_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#typeOfLicense').empty();
      				$.each(data, function(i, typename){
  					  
      					if(data[i].id == employee_type_of_license['employee_type_of_license']){
      						var S_License_Type = 'selected';
      					}else {
      						var S_License_Type = '';
      					}
  					  
      					$('#typeOfLicense').append('<option value="'+data[i].id+'"  '+S_License_Type+'> '+data[i].typename+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
      		
      		
      		/* ------------------------------------ */
      		
      		//This is for the Agency List
      		$('#nameOfAgency').empty();
      		$('#nameOfAgency').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/agency_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#nameOfAgency').empty();
      				$.each(data, function(i, created_by, agency_name){
  					 
      					if(data[i].id == employee_agency_id['employee_agency_id']){
      						var S_Agency = 'selected';
      					}else {
      						var S_Agency = '';
      					}
  					 
      					$('#nameOfAgency').append('<option value="'+data[i].id+'" '+S_Agency+'> '+data[i].agency_name+' </option>');
  					 
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
      		
      		/* ------------------------------------ */
      		
		}); // end done
		
	}// end personal_information
	
	/* ------------------------------------ */
	
	function contract_information(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var employee_sponsor_id = $.parseJSON(msg);
			var employee_project_id = $.parseJSON(msg);
			var employee_pid = $.parseJSON(msg);
			
			var employee_basic_salary = $.parseJSON(msg);
			var employee_other_allowance = $.parseJSON(msg);
			var employee_total_salary = $.parseJSON(msg);
			
			var employee_type_of_visa_id = $.parseJSON(msg);
			var employee_status = $.parseJSON(msg);
			var employee_position_id = $.parseJSON(msg);
			
			var employee_current_contract_g_date = $.parseJSON(msg);
			var employee_contract_g_date_expiration = $.parseJSON(msg);
			var employee_contract_g_date_entry = $.parseJSON(msg);
			
			var employee_current_contract_h_date = $.parseJSON(msg);
			var employee_contract_h_date_expiration = $.parseJSON(msg);
			var employee_contract_h_date_entry = $.parseJSON(msg);
			
			var employee_contract_years = $.parseJSON(msg);
			
			$('#contract_information').empty();
			$('#contract_information').append(
			        '<div class="row-fluid">'+
						'<p><strong>Contract information</strong></p>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="sponsor">Sponsor</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="sponsor">'+
									'</select>'+															
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="projectName">Project name</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="projectName">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="pidAccountName">PID - account name</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="pidAccountName" value="'+employee_pid['employee_pid']+'" readonly>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+							          
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="typeOfVisa">Type of visa</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="typeOfVisa">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="employementStatus">Employment status</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="employementStatus">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="position">Position</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="position">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+					
			        
			        '<div id="en_salary_details"></div>'+	
		
			        '<div class="row-fluid">'+
			        	'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="basicSalary">Basic salary</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="basicSalary" value="'+employee_basic_salary['employee_basic_salary']+'" readonly>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="otherAllowance">Other allowance</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="otherAllowance" value="'+employee_other_allowance['employee_other_allowance']+'" readonly>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+		
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="totalSalary">Total salary</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="totalSalary" value="'+employee_total_salary['employee_total_salary']+'" readonly>'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+		
			        '</div>'+							
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="currentContractDateG">Current contract date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="currentContractDateG" value="'+employee_current_contract_g_date['employee_current_contract_g_date']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="contractExpiryDateG">Contract expiry date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="contractExpiryDateG" value="'+employee_contract_g_date_expiration['employee_contract_g_date_expiration']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="entryDateG">Entry date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="entryDateG" value="'+employee_contract_g_date_entry['employee_contract_g_date_entry']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
			        	'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="currentContractDateH">Current contract date (H)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="currentContractDateH" value="'+employee_current_contract_h_date['employee_current_contract_h_date']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="contractExpiryDateH">Contract expiry date (H)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="contractExpiryDateH" value="'+employee_contract_h_date_expiration['employee_contract_h_date_expiration']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->	'+
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="entryDateH">Entry date (H)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="entryDateH" value="'+employee_contract_h_date_entry['employee_contract_h_date_entry']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
			        	'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="contractYears">Contract years</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="contractYears" value="'+employee_contract_years['employee_contract_years']+'">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'						
			);
			
			/* ------------------------------------ */
			
			// Sponsor list
			$('#sponsor').empty();
			$('#sponsor').append("<option>Loading...</option>");
			$.ajax({
				type: "POST",
				url: "../ajax/controller/visa_sponsor_list.php",
				contentType:"application/json: charset=utf-8",
				dataType:"json",
				success: function(data){
					$('#sponsor').empty();
					$.each(data, function(i, sponsorname){
  					  
						if(data[i].id == employee_sponsor_id['employee_sponsor']){
      						var S_Sponsor_Name = 'selected';
      					}else {
      						var S_Sponsor_Name = '';
      					}
  					  
      					$('#sponsor').append('<option value="'+data[i].id+'" '+S_Sponsor_Name+'> '+data[i].sponsorname+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
			
			/* ------------------------------------ */
			
			// Project name list
			$('#projectName').empty();
      		$('#projectName').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/project_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#projectName').empty();
      				$.each(data, function(i, project_name){
  					  
      					if(data[i].id == employee_project_id['employee_project_id']){
      						var S_Project_Name = 'selected';
      					}else {
      						var S_Project_Name = '';
      					}
  					  
      					$('#projectName').append('<option value="'+data[i].id+'" '+S_Project_Name+'> '+data[i].project_name+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
			
			/* ------------------------------------ */
      		
      		$('#projectName').on('change', function(){
      			var pid = $(this).val();
   			 
      			$.ajax({
      				type: "POST",
      				url: "../ajax/controller/pid_account_name.php",
      				data: { project_id: pid }
      			}) // end ajax
   			 
      			.done(function( msg ){
      				var companyName = $.parseJSON(msg);
   				 
      				var cName = companyName['company_name'];
   				 
      				var pid_acct_name = pid + ' -  ' + cName;
   				 
      				$('#pidAccountName').val(pid_acct_name);
   				 
      			}); // end done
   			 
   			 
      		}); // end on change
      		
      		/* ------------------------------------ */
      		
			// Type of visa
      		$('#typeOfVisa').empty();
      		$('#typeOfVisa').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/type_of_visa_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#typeOfVisa').empty();
      				$.each(data, function(i, visa_type_name){
  					  
      					if(data[i].id == employee_type_of_visa_id['employee_type_of_visa_id']){
      						var S_Type_Of_Visa = 'selected';
      					}else {
      						var S_Type_Of_Visa = '';
      					}
  					  
      					$('#typeOfVisa').append('<option value="'+data[i].id+'" '+S_Type_Of_Visa+'> '+data[i].visa_type_name+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
			
			/* ------------------------------------ */
			
			// Employment status list
      		$('#employementStatus').empty();
      		$('#employementStatus').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/employee_status_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#employementStatus').empty();
      				$.each(data, function(i, status_arabic, status_english){
  					  
      					if(data[i].id == employee_status['employee_status']){
      						var S_Emp_Status = 'selected';
      					}else {
      						var S_Emp_Status = '';
      					}
  					  
      					$('#employementStatus').append('<option value="'+data[i].id+'" '+S_Emp_Status+'> '+data[i].status_english+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
			
			/* ------------------------------------ */
			
			// Position list
      		$('#position').empty();
      		$('#position').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/position_list.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#position').empty();
      				$.each(data, function(i, position_name){
  					  
      					if(data[i].id == employee_position_id['employee_position_id']){
      						var S_Position_ID = 'selected';
      					}else {
      						var S_Position_ID = '';
      					}
  					  
      					$('#position').append('<option value="'+data[i].id+'" '+S_Position_ID+'> '+data[i].position_name+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
			
			/* ------------------------------------ */
			
			// Contract years
      		$('#contractYears').empty();
      		$('#contractYears').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/contract_years.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#contractYears').empty();
      				$.each(data, function(i, number_of_years){
  					  
      					if(data[i].number_of_years == employee_contract_years['employee_contract_years']){
      						var S_Contract_Years = 'selected';
      					}else {
      						var S_Contract_Years = '';
      					}
  					  
      					$('#contractYears').append('<option value="'+data[i].number_of_years+'" '+S_Contract_Years+'> '+data[i].number_of_years+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
			
			/* ------------------------------------ */
      		
      		var gregorianCalendar_Contract_Information = $.calendars.instance('gregorian');
			var islamicCalendar_Contract_Information = $.calendars.instance('islamic');
			
			// Current contract date (G) - Gregorian to Hijiri
			$('#currentContractDateG').calendarsPicker({
				calendar: gregorianCalendar_Contract_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#currentContractDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#currentContractDateH').val(outputHijriDate);
				}// end onSelect
			});
      		
      		/* ------------------------------------ */
      		
      		// Contract expiry date (G) - Gregorian to Hijiri
			$('#contractExpiryDateG').calendarsPicker({
				calendar: gregorianCalendar_Contract_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#contractExpiryDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#contractExpiryDateH').val(outputHijriDate);
				}// end onSelect
			});
      		
      		/* ------------------------------------ */
      		
      		// Entry date (G) - Gregorian to Hijiri
			$('#entryDateG').calendarsPicker({
				calendar: gregorianCalendar_Contract_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#entryDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#entryDateH').val(outputHijriDate);
				}// end onSelect
			});
      		
      		/* ------------------------------------ */
      		
      		// Current contract date (H) - Hijiri to Gregorian
			$('#currentContractDateH').calendarsPicker({
				calendar: islamicCalendar_Contract_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#currentContractDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#currentContractDateG').val(outputGregorianDate);
				}// end onSelect		
			});
      		
      		/* ------------------------------------ */
      		
      		// Contract expiry date (H) - Hijiri to Gregorian
			$('#contractExpiryDateH').calendarsPicker({
				calendar: islamicCalendar_Contract_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#contractExpiryDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#contractExpiryDateG').val(outputGregorianDate);
				}// end onSelect		
			});
      		
      		/* ------------------------------------ */
      		
      		// Entry date (H) - Hijiri to Gregorian
			$('#entryDateH').calendarsPicker({
				calendar: islamicCalendar_Contract_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#entryDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#entryDateG').val(outputGregorianDate);
				}// end onSelect		
			});
      		
      		/* ------------------------------------ */
			
		}); // end done
		
	}// end contract_information
	
	/* ------------------------------------ */
	
	function salary_history(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var salary_current_total_salary = $.parseJSON(msg);
			var basic_salary = salary_current_total_salary['salary_current_total_salary'];
			
			$('#salary_history').empty();
			$('#salary_history').append(
			        '<div class="row-fluid">'+
						'<p><strong>Salary history</strong></p>'+
			        '</div>'+							
		
			        '<div class="row-fluid">'+
					  '<div class="span12">'+
						'<table id="salary_history_list" class="table table-bordered noHoverInTable">'+
							'<thead>'+
								'<tr>'+
								 	'<td class="tdTextInCenterAi"><strong>Basic salary</strong></td>'+
									'<td class="tdTextInCenterAi"><strong>Other allowance</strong></td>'+
									'<td class="tdTextInCenterAi"><strong>Total salary</strong></td>'+
									'<td class="tdTextInCenterAi"><strong>Effectivity date</strong></td>'+
									'<td class="tdTextInCenterAi">&nbsp;</td>'+
								'</tr>'+
							'</thead>'+
							'<tbody>'+
							'</tbody>'+
						'</table>'+	
					  '</div>'+						          
			        '</div>'			
			);
			
			$('#salary_history_list > tbody').empty();
			 
			$.ajax({
				type: "POST",
				url: "../ajax/controller/salary_history_list.php?eid="+eid,
				contentType:"application/json: charset=utf-8",
				dataType:"json",
				encode: true
			})// end ajax
			
			.done(function(data){
				
				$.each(data, function(i, basic_salary){
					
					$('#salary_history_list > tbody tr.salary_input').before(
							 '<tr>'+
							  	'<td class="tdTextInCenterAi"> '+data[i].basic_salary+' </td>'+
							  	'<td class="tdTextInCenterAi"> '+data[i].other_allowance+' </td>'+
							  	'<td class="tdTextInCenterAi"> '+data[i].total_salary+' </td>'+
							  	'<td class="tdTextInCenterAi"> '+data[i].effectivity_date+' </td>'+
							  	'<td class="tdTextInCenterAi clickableCursor salaryHistoryDelete" data-salaryid="'+data[i].id+'"> <i class="icon-remove"></i> </td>'+
							  '</tr>'
							
					); // end list
					
				});// end each
				
			}); // end done
			
			if(basic_salary == false){
				$('#salary_history_list > tbody').append(
						'<tr class="salary_input">'+
							'<td class="tdTextInCenterAi"><input type="text" id="salary_basic" placeholder="Basic salary" class="input-block-level"></td>'+
							'<td class="tdTextInCenterAi"><input type="text" id="salary_other_allowance" class="input-block-level" placeholder="Other allowance"></td>'+
							'<td class="tdTextInCenterAi"><input type="text" id="salary_total" class="input-block-level" placeholder="Total salary" readonly></td>'+
							'<td class="tdTextInCenterAi"><input type="text" id="salary_effectivity_date" class="input-block-level salaryHistoryEffectivityDateG" placeholder="Effectivity date" onkeydown="return false"></td>'+
							'<td id="saveHistory" class="tdTextInCenterAi clickableCursor salaryHistorySave" data-empid="'+eid+'"><i class="icon-ok"></i></td>'+
						'</tr>'
				); // end input
			}else {
				 $('#salary_history_list > tbody').append(
						'<tr class="salary_input">'+
							'<td class="tdTextInCenterAi"><input type="text" id="salary_basic" value="'+basic_salary+'" class="input-block-level" readonly></td>'+
							'<td class="tdTextInCenterAi"><input type="text" id="salary_other_allowance" class="input-block-level" placeholder="Other allowance"></td>'+
							'<td class="tdTextInCenterAi"><input type="text" id="salary_total" class="input-block-level" placeholder="Total salary" readonly></td>'+
							'<td class="tdTextInCenterAi"><input type="text" id="salary_effectivity_date" class="input-block-level salaryHistoryEffectivityDateG" placeholder="Effectivity date" onkeydown="return false"></td>'+
							'<td id="saveHistory" class="tdTextInCenterAi clickableCursor salaryHistorySave" data-empid="'+eid+'"><i class="icon-ok"></i></td>'+
						'</tr>'
				); // end input
			}
			
			// This will automatically compute the total salary on change at other allowance
			$('#salary_other_allowance').on('input', function(){
				
				var salary_other_allowance = $(this).val();
				var regx = /[-0-9]/;
				
				if (!regx.test(salary_other_allowance) || salary_other_allowance.length == '') {
					
					 $("#saveHistory").removeClass('clickableCursor salaryHistorySave');
					 $("#saveHistory").addClass('muted');
					
					 function reset () {
						 $("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
						 alertify.set({
							 delay : 2000,
						 });
					 }// end function
					 reset();
					 alertify.error('Error! Other allowance should be numeric and not empty.');
					 return false;
					 
				}else {
					
					$("#saveHistory").removeClass('muted');
					$("#saveHistory").addClass('clickableCursor salaryHistorySave');
					  
					var current_basic_salary = $('#salary_basic').val();
					var current_total_salary = parseInt(salary_other_allowance) + parseInt(current_basic_salary);
					$('#salary_total').val(current_total_salary);
					
				} // end if else
				
			}); // end
			
			var gregorianCalendarSI = $.calendars.instance('gregorian');
			$('.salaryHistoryEffectivityDateG').calendarsPicker({
				calendar: gregorianCalendarSI,
				dateFormat: 'd/m/yyyy',
			});
			
			
		}); // end done
		
	}// end salary_history
	
	/* ------------------------------------ */
	
	function passport_information(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var employee_passport_exp_date_g = $.parseJSON(msg);
			var employee_passport_iss_date_g = $.parseJSON(msg);
			var employee_passport_number = $.parseJSON(msg);
			
			var employee_passport_exp_date_h = $.parseJSON(msg);
			var employee_passport_iss_date_h = $.parseJSON(msg);
			var employee_passport_entry_number = $.parseJSON(msg);
			
			var employee_passport_in_file = $.parseJSON(msg);
		
			$('#passport_information').empty();
			$('#passport_information').append(
			        '<div class="row-fluid">'+
						'<p><strong>Passport information</strong></p>'+
			        '</div>'+							
		
			        '<div class="row-fluid">'+
				        '<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="passportIssuedDateG">Issue date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="passportIssuedDateG" value="'+employee_passport_iss_date_g['employee_passport_iss_date_g']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        
			        	'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="passportExpiryDateG">Expiry date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="passportExpiryDateG" value="'+employee_passport_exp_date_g['employee_passport_exp_date_g']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="passportNumber">Passport number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="passportNumber" value="'+employee_passport_number['employee_passport_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="passportIssuedDateH">Issue date (H)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="passportIssuedDateH" value="'+employee_passport_iss_date_h['employee_passport_iss_date_h']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+			
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="passportExpiryDateH">Expiry date (H)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="passportExpiryDateH" value="'+employee_passport_exp_date_h['employee_passport_exp_date_h']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="entryNumber">Entry number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="entryNumber" value="'+employee_passport_entry_number['employee_passport_entry_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="isPassportInFile">Is passport in file?</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="isPassportInFile">'+
									'</select>'+															
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'						
			);
			
			/* ------------------------------------ */
			
			var gregorianCalendar_Passport_Information = $.calendars.instance('gregorian');
			var islamicCalendar_Passport_Information = $.calendars.instance('islamic');
			
			// Expiry date (G) - Gregorian to Hijiri
			$('#passportExpiryDateG').calendarsPicker({
				calendar: gregorianCalendar_Passport_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#passportExpiryDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#passportExpiryDateH').val(outputHijriDate);
				}// end onSelect
			});
			
			/* ------------------------------------ */
			
			// Issue date (G) - Gregorian to Hijiri
			$('#passportIssuedDateG').calendarsPicker({
				calendar: gregorianCalendar_Passport_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#passportIssuedDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#passportIssuedDateH').val(outputHijriDate);
				}// end onSelect
			});
			
			/* ------------------------------------ */
			
			// Expiry date (H) - Hijiri to Gregorian
			$('#passportExpiryDateH').calendarsPicker({
				calendar: islamicCalendar_Passport_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#passportExpiryDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#passportExpiryDateG').val(outputGregorianDate);
				}// end onSelect		
			});
			
			/* ------------------------------------ */
			
			// Issue date (H) - Hijiri to Gregorian
			$('#passportIssuedDateH').calendarsPicker({
				calendar: islamicCalendar_Passport_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#passportIssuedDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#passportIssuedDateG').val(outputGregorianDate);
				}// end onSelect		
			});
			
			/* ------------------------------------ */
			
			// Is passport in file?
			$('#isPassportInFile').empty();
			$('#isPassportInFile').append("<option>Loading...</option>");
			$.ajax({
				type: "POST",
				url: "../ajax/controller/passport_in_file.php",
				contentType:"application/json: charset=utf-8",
				dataType:"json",
				success: function(data){
					$('#isPassportInFile').empty();
					$.each(data, function(i, in_file){
						  
						if(data[i].id == employee_passport_in_file['employee_passport_in_file']){
							var S_Passport_File = 'selected';
						}else {
							var S_Passport_File = '';
						}
						  
						$('#isPassportInFile').append('<option value="'+data[i].id+'" '+S_Passport_File+'> '+data[i].in_file+' </option>');
					});// end each
				},
				complete: function(){
				}
			}); // end ajax
			
			/* ------------------------------------ */
			
		}); // end done
		
	}// end passport_information
	
	/* ------------------------------------ */
	
	function iqama_information(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var employee_iqama_number = $.parseJSON(msg);
			var employee_iqama_g_date = $.parseJSON(msg);
			var employee_iqama_h_date = $.parseJSON(msg);
		
			$('#iqama_information').empty();
			$('#iqama_information').append(
			        '<div class="row-fluid">'+
						'<p><strong>Iqama information</strong> <span id="renewIqamaStatus" class="muted"> - Please update the renew iqama request. </span> </p>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="iqamaNumber">Iqama number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="iqamaNumber" value="'+employee_iqama_number['employee_iqama_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="iqamaExpiryDateG">Expiry date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="iqamaExpiryDateG" value="'+employee_iqama_g_date['employee_iqama_g_date']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="iqamaExpiryDateH">Expiry date (H)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="iqamaExpiryDateH" value="'+employee_iqama_h_date['employee_iqama_h_date']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'
			);
			
			/* ------------------------------------ */
			
			var gregorianCalendar_Iqama_Information = $.calendars.instance('gregorian');
			var islamicCalendar_Iqama_Information = $.calendars.instance('islamic');
			
			// Expiry date (G) - Gregorian to Hijiri
			$('#iqamaExpiryDateG').calendarsPicker({
				calendar: gregorianCalendar_Iqama_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var gregorianDateFromtextBox = $('#iqamaExpiryDateG').val().split('/');
					convertGregorianToHijiri(gregorianDateFromtextBox);
					$('#iqamaExpiryDateH').val(outputHijriDate);
				}// end onSelect
			});
			
			/* ------------------------------------ */
			
			// Expiry date (G) - Hijiri to Gregorian
			$('#iqamaExpiryDateH').calendarsPicker({
				calendar: islamicCalendar_Iqama_Information,
				dateFormat: 'd/m/yyyy',
				onSelect:function(){
					var islamicDateFromtextBox = $('#iqamaExpiryDateH').val().split('/');
					convertHijiriToGregorian(islamicDateFromtextBox)
					$('#iqamaExpiryDateG').val(outputGregorianDate);
				}// end onSelect		
			});
			
			/* ------------------------------------ */
			
		}); // end done
		
	}// end passport_information
	
	/* ------------------------------------ */
	
	function mol_gosi_information(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var employee_mol_emp_number = $.parseJSON(msg);
			var employee_mol_company_number = $.parseJSON(msg);
			var employee_gosi_emp_number = $.parseJSON(msg);
		
			$('#mol_gosi_information').empty();
			$('#mol_gosi_information').append(
			        '<div class="row-fluid">'+
						'<p><strong>Ministry of labor and GOSI information</strong></p>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="molIdNumber">MOL ID number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="molIdNumber" value="'+employee_mol_emp_number['employee_mol_emp_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="molCompanyIdNumber">MOL company ID number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="molCompanyIdNumber" value="'+employee_mol_company_number['employee_mol_company_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+	
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="gosiEmployeeNumber">GOSI employee number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="gosiEmployeeNumber" value="'+employee_gosi_emp_number['employee_gosi_emp_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+	
			        '</div>'
			);
			
		}); // end done
		
	}// end passport_information
	
	/* ------------------------------------ */
	
	function bank_information(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var employee_atm_number = $.parseJSON(msg);
			var employee_atm_status = $.parseJSON(msg);
			var employee_atm_issuance = $.parseJSON(msg);
			
			var employee_atm_date_issued = $.parseJSON(msg);
			var employee_atm_date_expiration = $.parseJSON(msg);
		
			$('#bank_information').empty();
			$('#bank_information').append(
			        '<div class="row-fluid">'+
						'<p><strong>Bank information</strong></p>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="atmNumber">ATM number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="atmNumber" value="'+employee_atm_number['employee_atm_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="atmStatus">ATM status</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="atmStatus">'+
									'</select>'+															
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+																
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="bankStatus">Bank status</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="bankStatus">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+								        
			        
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="atmIssuedDateG">Issued date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="atmIssuedDateG" value="'+employee_atm_date_issued['employee_atm_date_issued']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="atmExpirydateG">Expiry date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="atmExpirydateG" value="'+employee_atm_date_expiration['employee_atm_date_expiration']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'							        
			);
			
			/* ------------------------------------ */
			
			// ATM status
			$('#atmStatus').empty();
			$('#atmStatus').append("<option>Loading...</option>");
			$.ajax({
				type: "POST",
				url: "../ajax/controller/atm_status.php",
				contentType:"application/json: charset=utf-8",
				dataType:"json",
				success: function(data){
					$('#atmStatus').empty();
					$.each(data, function(i, atm_status_english, atm_status_arabic){
						  
						if(data[i].id == employee_atm_status['employee_atm_status']){
							var S_ATM_Status = 'selected';
						}else {
							var S_ATM_Status = '';
						}
						  
						$('#atmStatus').append('<option value="'+data[i].id+'" '+S_ATM_Status+'> '+data[i].atm_status_english+' </option>');
					});// end each
				},
				complete: function(){
				}
			}); // end ajax
			
			/* ------------------------------------ */
			
			// Bank status
			$('#bankStatus').empty();
			$('#bankStatus').append("<option>Loading...</option>");
			$.ajax({
				type: "POST",
				url: "../ajax/controller/bank_status.php",
				contentType:"application/json: charset=utf-8",
				dataType:"json",
				success: function(data){
					$('#bankStatus').empty();
					$.each(data, function(i, bank_status_english, bank_status_arabic){
						  
						if(data[i].id == employee_atm_issuance['employee_atm_issuance']){
							var S_ATM_Issuance = 'selected';
						}else {
							var S_ATM_Issuance = '';
						}
						  
						$('#bankStatus').append('<option value="'+data[i].id+'" '+S_ATM_Issuance+'> '+data[i].bank_status_english+' </option>');
					});// end each
				},
				complete: function(){
				}
			}); // end ajax
			
			/* ------------------------------------ */
			
			var gregorianCalendar_Bank_Information = $.calendars.instance('gregorian');
			
			// Issued date (G)
			$('#atmIssuedDateG').calendarsPicker({
				calendar: gregorianCalendar_Bank_Information,
				dateFormat: 'd/m/yyyy'
			});
			
			/* ------------------------------------ */
			
			// Expiry date (G)
			$('#atmExpirydateG').calendarsPicker({
				calendar: gregorianCalendar_Bank_Information,
				dateFormat: 'd/m/yyyy'
			});
			
			/* ------------------------------------ */
			
		}); // end done
		
	}// end passport_information
	
	/* ------------------------------------ */
	
	function medical_information(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
			
			var employee_medical_number = $.parseJSON(msg);
			var employee_medical_class = $.parseJSON(msg);
			var employee_medical_date_iss = $.parseJSON(msg);
			
			var employee_medical_date_exp = $.parseJSON(msg);
		
			$('#medical_information').empty();
			$('#medical_information').append(
			        '<div class="row-fluid">'+
						'<p><strong>Medical information</strong></p>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="healthInsuranceNumber">Health insurance number</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="healthInsuranceNumber" value="'+employee_medical_number['employee_medical_number']+'">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="healthInsuranceClass">Health insurance class</label>'+
								'<div class="controls">'+
									'<select class="input-block-level" id="healthInsuranceClass">'+
									'</select>'+														
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+																
						
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="healthIssuedDateG">Issued date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="healthIssuedDateG" value="'+employee_medical_date_iss['employee_medical_date_iss']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+								        
			        
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="healthExpiryDateG">Expiry date (G)</label>'+
								'<div class="controls">'+
									'<input type="text" class="input-block-level" id="healthExpiryDateG" value="'+employee_medical_date_exp['employee_medical_date_exp']+'" onkeydown="return false">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'
			);
			
			/* ------------------------------------ */
			
			// Health insurance class
			$('#healthInsuranceClass').empty();
      		$('#healthInsuranceClass').append("<option>Loading...</option>");
      		$.ajax({
      			type: "POST",
      			url: "../ajax/controller/health_insurance_class.php",
      			contentType:"application/json: charset=utf-8",
      			dataType:"json",
      			success: function(data){
      				$('#healthInsuranceClass').empty();
      				$.each(data, function(i, class_english){
  					  
      					if(data[i].id == employee_medical_class['employee_medical_class']){
      						var S_Health_Class = 'selected';
      					}else {
      						var S_Health_Class = '';
      					}
  					  
      					$('#healthInsuranceClass').append('<option value="'+data[i].id+'" '+S_Health_Class+'> '+data[i].class_english+' </option>');
      				});// end each
      			},
      			complete: function(){
      			}
      		}); // end ajax
      		
			/* ------------------------------------ */
			
      		var gregorianCalendar_Medical_Information = $.calendars.instance('gregorian');
      		
			// Issued date (G)
      		$('#healthIssuedDateG').calendarsPicker({
				calendar: gregorianCalendar_Medical_Information,
				dateFormat: 'd/m/yyyy'
			});
      		
			/* ------------------------------------ */
			
			//  Expiry date (G)
      		$('#healthExpiryDateG').calendarsPicker({
				calendar: gregorianCalendar_Medical_Information,
				dateFormat: 'd/m/yyyy'
			});
			
			/* ------------------------------------ */
			
		
		}); // end done
		
	}// end passport_information
	
	/* ------------------------------------ */
	
	function file_attachments_upload(eid){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		
		.done(function( msg ){
		
			$('#file_attachments_upload').empty();
			$('#file_attachments_upload').append(
			        '<div class="row-fluid">'+
						'<p><strong>Upload</strong> <i> [Images are only accepted!] </i> </p>'+
			        '</div>'+						
		
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="passportImage">Passport</label>'+
								'<div class="controls">'+
									'<input type="file" id="passportImage" accept="image/*">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="iqamaImage">Iqama</label>'+
								'<div class="controls">'+
									'<input type="file" id="iqamaImage" accept="image/*">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+											
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="dlImage">DL</label>'+
								'<div class="controls">'+
									'<input type="file" id="dlImage" accept="image/*">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'+
			        
			        '<div class="row-fluid">'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="visatImage">Visa</label>'+
								'<div class="controls">'+
									'<input type="file" id="visatImage" accept="image/*">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="stampVisaImage">Stamp Visa (S.Visa)</label>'+
								'<div class="controls">'+
									'<input type="file" id="stampVisaImage" accept="image/*">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+											
						'<div class="span4">'+
							'<div class="control-group">'+											
								'<label class="control-label" for="idImage">ID</label>'+
								'<div class="controls">'+
									'<input type="file" id="idImage" accept="image/*">'+
								'</div> <!-- /controls -->'+				
							'</div> <!-- /control-group -->'+	
						'</div>'+
			        '</div>'
			);
			
		}); // end done
		
	}// end passport_information
	
	/* ------------------------------------ */
	
	/* --------------------------------------- This is for the functions ----------------------------------------- */
	
	
	/* -------------------------------------------- This is for the list -------------------------------------------- */
	
	//employee list and profile
	$('#employeeListTable').removeClass('hideContentAi');
	
	$('#listOfEmployee tbody').on( 'click', 'tr', function () {
		$("#employeeProfileForm").removeClass('hideContentAi');
		$('#employeeListTable').addClass('hideContentAi');		
		
		var table = $('#listOfEmployee').DataTable();
		var rowData = table.row( this ).data();
		var eid = rowData[0];
	  
		left_panel_information(eid); // Display left panel information
		personal_information(eid); // Display personal information
		contract_information(eid); // Display contract information
		salary_history(eid); // Display salary history
		passport_information(eid); // Display passport information
		iqama_information(eid); // Display iqama information
		mol_gosi_information(eid); // Display MOL and GOSI information
		bank_information(eid); // Display bank information
		medical_information(eid); // Display medical information
		file_attachments_upload(eid); // Display upload file attachment
		
		// Check request for Renew Iqama
		var iqama_employee_id = $('#employeeid').val();
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		  
		.done(function( msg ){
			  
			var renew_iqama = $.parseJSON(msg);
			  
			if(renew_iqama['renew_iqama'] > 0){
				$('#iqamaNumber').attr('disabled', true);
				$('#iqamaExpiryDateG').attr('disabled', true);
				$('#iqamaExpiryDateH').attr('disabled', true);
				$('#renewIqamaStatus').show();
			}else {
				$('#iqamaNumber').attr('disabled', false);
				$('#iqamaExpiryDateG').attr('disabled', false);
				$('#iqamaExpiryDateH').attr('disabled', false);
				$('#renewIqamaStatus').hide();
			}
			  
		}); // end done
		
		
		//console.log(eid);
	  
	}); // end on click tr
	/* -------------------------------------------- This is for the list -------------------------------------------- */
	
	/* -------------------------------------------- Search employee -------------------------------------------- */
	//Search employee id in profile start
	$('#searchEmployeeIdInProfile').keypress(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
			var empIdSearchInProfile = $(this).val();

			$("#employeeProfileForm").removeClass('hideContentAi');
			$('#employeeListTable').addClass('hideContentAi');		

			var eid = empIdSearchInProfile;
			
			left_panel_information(eid); // Display left panel information
			personal_information(eid); // Display personal information
			contract_information(eid); // Display contract information
			salary_history(eid); // Display salary history
			passport_information(eid); // Display passport information
			iqama_information(eid); // Display iqama information
			mol_gosi_information(eid); // Display MOL and GOSI information
			bank_information(eid); // Display bank information
			medical_information(eid); // Display medical information
			file_attachments_upload(eid); // Display upload file attachment
			
			// Check request for Renew Iqama
			var iqama_employee_id = $('#employeeid').val();
			$.ajax({
				type: "POST",
				url: "../ajax/controller/employee_details.php",
				data: { employee_id: eid }
			}) // end ajax
			  
			.done(function( msg ){
				  
				var renew_iqama = $.parseJSON(msg);
				  
				if(renew_iqama['renew_iqama'] > 0){
					$('#iqamaNumber').attr('disabled', true);
					$('#iqamaExpiryDateG').attr('disabled', true);
					$('#iqamaExpiryDateH').attr('disabled', true);
					$('#renewIqamaStatus').show();
				}else {
					$('#iqamaNumber').attr('disabled', false);
					$('#iqamaExpiryDateG').attr('disabled', false);
					$('#iqamaExpiryDateH').attr('disabled', false);
					$('#renewIqamaStatus').hide();
				}
				  
			}); // end done
			
			//console.log(eid);
			
	    }
	});	
	//Search employee id in profile end
	
	// next and previous start
	$('#previousEmployeeButton').click(function() {
		var employeeIdForPrevious = $('#previousEmployeeId').val();
		
		$("#employeeProfileForm").removeClass('hideContentAi');
		$('#employeeListTable').addClass('hideContentAi');		

		var eid = employeeIdForPrevious;
		
		left_panel_information(eid); // Display left panel information
		personal_information(eid); // Display personal information
		contract_information(eid); // Display contract information
		salary_history(eid); // Display salary history
		passport_information(eid); // Display passport information
		iqama_information(eid); // Display iqama information
		mol_gosi_information(eid); // Display MOL and GOSI information
		bank_information(eid); // Display bank information
		medical_information(eid); // Display medical information
		file_attachments_upload(eid); // Display upload file attachment
		
		// Check request for Renew Iqama
		var iqama_employee_id = $('#employeeid').val();
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		  
		.done(function( msg ){
			  
			var renew_iqama = $.parseJSON(msg);
			  
			if(renew_iqama['renew_iqama'] > 0){
				$('#iqamaNumber').attr('disabled', true);
				$('#iqamaExpiryDateG').attr('disabled', true);
				$('#iqamaExpiryDateH').attr('disabled', true);
				$('#renewIqamaStatus').show();
			}else {
				$('#iqamaNumber').attr('disabled', false);
				$('#iqamaExpiryDateG').attr('disabled', false);
				$('#iqamaExpiryDateH').attr('disabled', false);
				$('#renewIqamaStatus').hide();
			}
			  
		}); // end done
		
		//console.log(eid);		
		
    });
	
	$('#nextEmployeeButton').click(function() {
		var employeeIdForNext = $('#nextEmployeeId').val();
		
		$("#employeeProfileForm").removeClass('hideContentAi');
		$('#employeeListTable').addClass('hideContentAi');		

		var eid = employeeIdForNext;
		
		left_panel_information(eid); // Display left panel information
		personal_information(eid); // Display personal information
		contract_information(eid); // Display contract information
		salary_history(eid); // Display salary history
		passport_information(eid); // Display passport information
		iqama_information(eid); // Display iqama information
		mol_gosi_information(eid); // Display MOL and GOSI information
		bank_information(eid); // Display bank information
		medical_information(eid); // Display medical information
		file_attachments_upload(eid); // Display upload file attachment
		
		// Check request for Renew Iqama
		var iqama_employee_id = $('#employeeid').val();
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_details.php",
			data: { employee_id: eid }
		}) // end ajax
		  
		.done(function( msg ){
			  
			var renew_iqama = $.parseJSON(msg);
			  
			if(renew_iqama['renew_iqama'] > 0){
				$('#iqamaNumber').attr('disabled', true);
				$('#iqamaExpiryDateG').attr('disabled', true);
				$('#iqamaExpiryDateH').attr('disabled', true);
				$('#renewIqamaStatus').show();
			}else {
				$('#iqamaNumber').attr('disabled', false);
				$('#iqamaExpiryDateG').attr('disabled', false);
				$('#iqamaExpiryDateH').attr('disabled', false);
				$('#renewIqamaStatus').hide();
			}
			  
		}); // end done
		
		//console.log(eid);		
		
    });	
	// next and previous end
	
	/* ------------------------------------------- This is for the update ---------------------------------------- */
	$('#UpdateEmployee, #UpdateEmployeeTop').on('click', function(){
		
		function reset () {
			$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
			alertify.set({			
			   delay : 2000,
			});
		}// end function
		
		reset();
		
		 alertify.confirm("Are you sure you want to update?", function (e, str){
			 if (e) {
				 
				 var eid = $('#employeeID').val();
				 
				 /* -------------------------------------------------------------------------------------------------------------- */
				 
				 // For uploading of attach files
				 
				 // Passport attach file
				 var passImage = $('#passportImage').val();
				 
				 var passImageLength = passImage.length;
				 if(passImageLength > 0){
					 
					 var passportFile = document.getElementById('passportImage');
					 
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
			                //console.log(resp.status + ': ' + resp.data);
						 }
					 };
					 
					 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=passport');
					 request.send(data);
					 
				 }// end if
				 
				 /* -------------------------------------------------------------------------------------------------------------- */
				 
				 // Iqama attach file
				 var iqamaImage = $('#iqamaImage').val();
				 
				 var iqamaImageLength = iqamaImage.length;
				 
				 if(iqamaImageLength > 0){
					 
					 var iqamaFile = document.getElementById('iqamaImage');
					 
					 if(iqamaFile.length === 0){
						 return;
					 }
					 
					 var data = new FormData();
					 data.append('SelectedFile', iqamaFile.files[0]);
					 
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
							 //console.log(resp.status + ': ' + resp.data);
						 }
					 };
					 
					 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=iqama');
					 request.send(data);
					 
				 }// end if
				 
				 /* -------------------------------------------------------------------------------------------------------------- */
				 
				 // DL - Driver's license attach file
				 var dlImage = $('#dlImage').val();
				 
				 var dlImageLength = dlImage.length;
				 if(dlImageLength > 0){
					 
					 var dlFile = document.getElementById('dlImage');
					 
					 if(dlFile.length === 0){
						 return;
					 }
					 
					 var data = new FormData();
					 data.append('SelectedFile', dlFile.files[0]);
					 
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
				                //console.log(resp.status + ': ' + resp.data);
						 }
					 };
					 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=dl');
			         request.send(data);
					 
				 }// end if
				 
				 /* -------------------------------------------------------------------------------------------------------------- */
				 
				 // Visa attach file
				 var visaImage = $('#visatImage').val();
				 
				 var visaImageLength = visaImage.length;
				 if(visaImageLength > 0){
					 
					 var visaFile = document.getElementById('visatImage');
					 
					 if(visaFile.length === 0){
						 return;
					 }
					 
					 var data = new FormData();
					 data.append('SelectedFile', visaFile.files[0]);
					 
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
					 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=visa');
					 request.send(data);
					 
				 }// end if
				 
				 /* -------------------------------------------------------------------------------------------------------------- */
				 
				 // Stamp visa attach file
				 var stampVisaImage = $('#stampVisaImage').val();
				 
				 var stampVisaImageLength = stampVisaImage.length;
				 if(stampVisaImageLength > 0){
					 
					 var stampVisaFile = document.getElementById('stampVisaImage');
					 
					 if(stampVisaFile.length === 0){
						 return;
					 }
					 
					 var data = new FormData();
					 data.append('SelectedFile', stampVisaFile.files[0]);
					 
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
							 //console.log(resp.status + ': ' + resp.data);
						 }
					 };
					 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=stampvisa');
			         request.send(data);
					 
				 }// end if
				 
				 /* -------------------------------------------------------------------------------------------------------------- */
				 
				 // ID - Company ID attach file
				 var idImage = $('#idImage').val();
				 
				 var idImageLength = idImage.length;
				 if(idImageLength > 0){
					 
					 var idFile = document.getElementById('idImage');
					 
					 if(idFile.length === 0){
						 return;
					 }
					 
					 var data = new FormData();
					 data.append('SelectedFile', idFile.files[0]);
					 
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
					 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=id');
					 request.send(data);
					 
				 }// end if
				 
				 /* -------------------------------------------------------------------------------------------------------------- */
					
				 var formData = {
						
						// Personal information
						'empid':$('#employeeID').val(),
						'empname':$('#empName').val(),
						'empbdateg':$('#birthDateG').val(),
						
						'empbdateh':$('#birthDateH').val(),
						'empage':$('#empAge').val(),
						'empgender':$('#empGender option:selected').val(),
						
						'empnationalityid':$('#empNationality option:selected').val(),
						'empreligion':$('#empReligion option:selected').val(),
						'empmaritalstatus':$('#maritalStatus option:selected').val(),
						
						'empphonenumber':$('#phoneNumber').val(),
						'empdriverlicense':$('#driversLicense').val(),
						'emptypeoflicense':$('#typeOfLicense option:selected').val(),
						
						'empissdatelicenseg':$('#licenseIssueDateG').val(),
						'empissdatelicenseh':$('#licenseIssueDateH').val(),
						'empexpdatelicenseg':$('#licenseExpiryDateG').val(),
						
						'empexpdatelicenseh':$('#licenseExpiryDateH').val(),
						'empvisanumber':$('#visaNumber').val(),
						'empagencyid':$('#nameOfAgency option:selected').val(),
						
						// Contract information
						'empsponsor':$('#sponsor option:selected').val(),
						'empprojectid':$('#projectName option:selected').val(),
						'emppidaccount':$('#pidAccountName').val(),
						
						'emptypeofvisaid':$('#typeOfVisa option:selected').val(),
						'empstatus':$('#employementStatus option:selected').val(),
						'emppositionid':$('#position option:selected').val(),
						
						// Update of basic salary, other allowance and total salary
						// is done on salary history
						
						'empcurrentcontractdateg':$('#currentContractDateG').val(),
						'empcontractexpirydateg':$('#contractExpiryDateG').val(),
						'empcontractentrydateg':$('#entryDateG').val(),
						
						'empcurrentcontractdateh':$('#currentContractDateH').val(),
						'empcontractexpirydateh':$('#contractExpiryDateH').val(),
						'empcontractentrydateh':$('#entryDateH').val(),
						
						'empcontractyears':$('#contractYears option:selected').val(),
						
						// Passport information
						'emppassportexpirydateg':$('#passportExpiryDateG').val(),
						'emppassportissueddateg':$('#passportIssuedDateG').val(),
						'emppassportnumber':$('#passportNumber').val(),
						
						'emppassportexpirydateh':$('#passportExpiryDateH').val(),
						'emppassportissueddateh':$('#passportIssuedDateH').val(),
						'empentrynumber':$('#entryNumber').val(),
						
						'empispassportinfile':$('#isPassportInFile option:selected').val(),
						
						// Iqama information
						'empiqamanumber':$('#iqamaNumber').val(),
						'empiqamaexpirydateg':$('#iqamaExpiryDateG').val(),
						'empiqamaexpirydateh':$('#iqamaExpiryDateH').val(),
						
						// Ministry of labor and GOSI information
						'empmolidnumber':$('#molIdNumber').val(),
						'empmolcompanyidnumber':$('#molCompanyIdNumber').val(),
						'empgosiemployeenumber':$('#gosiEmployeeNumber').val(),
						
						// Bank information
						'empatmnumber':$('#atmNumber').val(),
						'empatmstatus':$('#atmStatus option:selected').val(),
						'empbankstatus':$('#bankStatus option:selected').val(),
						
						'empatmissueddateg':$('#atmIssuedDateG').val(),
						'empatmexpirydateg':$('#atmExpirydateG').val(),
						
						// Medical information
						'emphealthinsurancenumber':$('#healthInsuranceNumber').val(),
						'emphealthinsuranceclass':$('#healthInsuranceClass option:selected').val(),
						'emphealthinsuranceissueddateg':$('#healthIssuedDateG').val(),
						
						'emphealthinsuranceexpirydateg':$('#healthExpiryDateG').val()
				 };
				
				 $.ajax({
					 type: 'POST',
					 url: '../ajax/controller/employee_details_update.php',
					 data: formData,
					 beforeSend: function(){
						 $("#UpdateEmployee, #UpdateEmployeeTop").attr("disabled", true);
						 $("#GoBackToEmployeeListTable, #GoBackToEmployeeListTableTop").attr("disabled", true);
					 },
					 complete: function(){
						 $("#UpdateEmployee, #UpdateEmployeeTop").attr("disabled", false);
						 $("#GoBackToEmployeeListTable, #GoBackToEmployeeListTableTop").attr("disabled", false);
					 },
					 dataType: 'json',
					 encode: true
				 }) // end ajax
				
				 .done(function(data){
					
					 var eid = data.message;
					
					 left_panel_information(eid); // Display left panel information
					 personal_information(eid); // Display personal information
					 contract_information(eid); // Display contract information
					 salary_history(eid); // Display salary history
					 passport_information(eid); // Display passport information
					 iqama_information(eid); // Display iqama information
					 mol_gosi_information(eid); // Display MOL and GOSI information
					 bank_information(eid); // Display bank information
					 medical_information(eid); // Display medical information
					 file_attachments_upload(eid); // Display upload file attachment
					
					 $( "html, body" ).animate({scrollTop:0}, '500');
		          	
					 alertify.success("Success! Update employee details.");
					
				 });
				 
			 }else {
    			alertify.error('Cancel! Update employee details.');
			 }// end if else
		 }); // end
		 
	}); // end on click
	/* ------------------------------------------- This is for the update ---------------------------------------- */
	 
	/* -------------------------------------------------------------------------------------------------------------- */
	 
	/* ---------------------------------------------- This is for the add ----------------------------------------- */
	 
	$('#addEmployee').on('click', function(){
		 
		function reset () {
			$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
			alertify.set({			
			   delay : 2000,
			});
		}// end function
		
		reset();
		
		alertify.confirm("Are you sure you want to add?", function (e, str){
			 
			 if (e) {
				 
				 var eid = $('#employeeID').val();
				 
				 var formData = {
						 
						 // Personal information
						 'emp_id':$('input[id=employeeID]').val(),
						 'emp_name':$('input[id=empName]').val(),
						 'emp_bdateg':$('input[id=birthDateG]').val(),
						 
						 'emp_bdateh':$('input[id=birthDateH]').val(),
						 'emp_age':$('input[id=empAge]').val(),
						 'emp_gender':$('#empGender option:selected').val(),
						 
						 'emp_nationality':$('#empNationality option:selected').val(),
						 'emp_religion':$('#empReligion option:selected').val(),
						 'emp_marital_status':$('#maritalStatus option:selected').val(),
						 
						 'emp_phone_number':$('input[id=phoneNumber]').val(),
						 'emp_drivers_license':$('input[id=driversLicense]').val(),
						 'emp_type_of_license':$('#typeOfLicense option:selected').val(),
						 
						 'emp_lic_iss_date_g':$('input[id=licenseIssueDateG]').val(),
						 'emp_lic_exp_date_g':$('input[id=licenseExpiryDateG]').val(),
						 'emp_visa_number':$('input[id=visaNumber]').val(),
						 
						 'emp_lic_iss_date_h':$('input[id=licenseIssueDateH]').val(),
						 'emp_lic_exp_date_h':$('input[id=licenseExpiryDateH]').val(),
						 'emp_name_agency':$('#nameOfAgency option:selected').val(),
						 
						 // Contract information
						 'emp_sponsor':$('#sponsor option:selected').val(),
						 'emp_project_id':$('#projectName option:selected').val(),
						 'emp_pid_name':$('input[id=pidAccountName]').val(),
						 
						 'emp_type_of_visa_id':$('#typeOfVisa option:selected').val(),
						 'emp_status':$('#employmentStatus option:selected').val(),
						 'emp_position_id':$('#position option:selected').val(),
						 
						 'emp_basic_salary':$('input[id=basicSalary]').val(),
						 'emp_other_allowance':$('input[id=otherAllowance]').val(),
						 'emp_total_salary':$('input[id=totalSalary]').val(),
						 
						 'emp_current_contract_date_g':$('input[id=currentContractDateG]').val(),
						 'emp_current_expiry_date_g':$('input[id=contractExpiryDateG]').val(),
						 'emp_current_entry_date_g':$('input[id=entryDateG]').val(),
						 
						 'emp_current_contract_date_h':$('input[id=currentContractDateH]').val(),
						 'emp_current_expiry_date_h':$('input[id=contractExpiryDateH]').val(),
						 'emp_current_entry_date_h':$('input[id=entryDateH]').val(),
						 
						 'emp_contract_years':$('#contractYears option:selected').val(),
						 
						 // Passport information
						 'emp_passport_issued_date_g':$('input[id=passportIssuedDateG]').val(),
						 'emp_passport_expiry_date_g':$('input[id=passportExpiryDateG]').val(),
						 'emp_passport_number':$('input[id=passportNumber]').val(),
						 
						 'emp_passport_issued_date_h':$('input[id=passportIssuedDateH]').val(),
						 'emp_passport_expiry_date_h':$('input[id=passportExpiryDateH]').val(),
						 'emp_entry_number':$('input[id=entryNumber]').val(),
						 
						 'emp_passport_in_file':$('#isPassportInFile option:selected').val(),
						 
						 // Iqama information
						 'emp_iqama_number':$('input[id=iqamaNumber]').val(),
						 'emp_iqama_expiry_date_g':$('input[id=iqamaExpiryDateG]').val(),
						 'emp_iqama_expiry_date_h':$('input[id=iqamaExpiryDateH]').val(),
						 
						 // Ministry of labor and GOSI information
						 'emp_mol_number':$('input[id=molIdNumber]').val(),
						 'emp_mol_company_number':$('input[id=molCompanyIdNumber]').val(),
						 'emp_gosi_number':$('input[id=gosiEmployeeNumber]').val(),
						 
						 // Bank information
						 'emp_atm_number':$('input[id=atmNumber]').val(),
						 'emp_atm_status':$('#atmStatus option:selected').val(),
						 'emp_bank_status':$('#bankStatus option:selected').val(),
						 
						 'emp_atm_issued_date_g':$('input[id=atmIssuedDateG]').val(),
						 'emp_atm_expiry_date_g':$('input[id=atmExpirydateG]').val(),
						 
						 // Medical information
						 'emp_health_insurance_number':$('input[id=healthInsuranceNumber]').val(),
						 'emp_health_insurance_class':$('#healthInsuranceClass option:selected').val(),
						 'emp_health_issued_date_g':$('input[id=healthIssuedDateG]').val(),
						 
						 'emp_health_expiry_date_g':$('input[id=healthExpiryDateG]').val()
				 };
				 
				 $.ajax({
					 type: "POST",
					 url: "../ajax/controller/employee_details_add.php",
					 data: formData,
					 dataType: "json",
					 beforeSend: function(){
						 $("#addEmployee").attr("disabled", true);
					 },
					 complete: function(){
						 $("#addEmployee").attr("disabled", false);
					 },
					 encode: true
				 }) // ajax
				 
				 .done(function(data){
					 
					 /* -------------------------------------------------------------------------------------------------------------- */
					 
					 // Passport photo
					 var passImage = $('#passportImage').val();
					 
					 var passImageLength = passImage.length;
					 if(passImageLength > 0){
						 
						 var passportFile = document.getElementById('passportImage');
						 
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
				                //console.log(resp.status + ': ' + resp.data);
				            }
				         };
					        
				        request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=passport');
				        request.send(data);
						 
					 }else {
						 
						 $.ajax({
							 type: "POST",
							 url: "../ajax/controller/employee_passport_photo_update.php?path=passport",
							 data: { employee_id: eid }
						 })// end ajax
						 
					 }// end if else
					 
					 // Iqama photo
					 var iqamaImage = $('#iqamaImage').val();
					 
					 var iqamaImageLength = iqamaImage.length;
					 
					 if(iqamaImageLength > 0){
						 
						 var iqamaFile = document.getElementById('iqamaImage');
						 
						 if(iqamaFile.length === 0){
							 return;
						 }
						 
						 var data = new FormData();
						 
						 data.append('SelectedFile', iqamaFile.files[0]);
						 
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
								 //console.log(resp.status + ': ' + resp.data);
							 }
						 };
						 
						 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=iqama');
						 request.send(data);
						 
					 }else {
						 $.ajax({
							 type: "POST",
							 url: "../ajax/controller/employee_passport_photo_update.php?path=iqama",
							 data: { employee_id: eid }
						 })// end ajax
					 }// end if else
					 
					 // DL photo
					 var dlImage = $('#dlImage').val();
					 
					 var dlImageLength = dlImage.length;
					 
					 if(dlImageLength > 0){
						 
						 var dlFile = document.getElementById('dlImage');
						 
						 if(dlFile.length === 0){
							 return;
						 }
						 
						 var data = new FormData();
						 data.append('SelectedFile', dlFile.files[0]);
						 
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
								 //console.log(resp.status + ': ' + resp.data);
							 }
						 };
						 
						 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=dl');
						 request.send(data);
					         
					 }else {
						 
						 $.ajax({
							 type: "POST",
							 url: "../ajax/controller/employee_passport_photo_update.php?path=dl",
							 data: { employee_id: eid }
						 })// end ajax
						 
					 }
					 
					 // Visa photo
					 var visaImage = $('#visatImage').val();
					 
					 var visaImageLength = visaImage.length;
					 if(visaImageLength > 0){
						 
						 var visaFile = document.getElementById('visatImage');
						 
						 if(visaFile.length === 0){
							 return;
						 }
						 
						 var data = new FormData();
						 data.append('SelectedFile', visaFile.files[0]);
						 
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
								 //console.log(resp.status + ': ' + resp.data);
							 }
						 };
						 
						 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=visa');
						 request.send(data);
						 
					 }else {
						 
						 $.ajax({
							 type: "POST",
							 url: "../ajax/controller/employee_passport_photo_update.php?path=visa",
							 data: { employee_id: eid }
						 })// end ajax
						 
					 }// end if else
					 
					 // Stamp visa photo
					 var stampVisaImage = $('#stampVisaImage').val();
					 
					 var stampVisaImageLength = stampVisaImage.length;
					 if(stampVisaImageLength > 0){
						 
						 var stampVisaFile = document.getElementById('stampVisaImage');
						 
						 if(stampVisaFile.length === 0){
							 return;
						 }
						 
						 var data = new FormData();
						 data.append('SelectedFile', stampVisaFile.files[0]);
						 
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
								 //console.log(resp.status + ': ' + resp.data);
							 }
						 };
							
						 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=stampvisa');
						 request.send(data);
						 
					 }else {
						 
						 $.ajax({
							 type: "POST",
							 url: "../ajax/controller/employee_passport_photo_update.php?path=stamp_visa",
							 data: { employee_id: eid }
						 })// end ajax
						 
					 }//end if else
					 
					 // Company ID photo
					 var companyImage = $('#idImage').val();
					 
					 var companyImageLength = companyImage.length;
					 
					 if(companyImageLength > 0){
						 
						 var companyFile = document.getElementById('idImage');
						 
						 if(companyFile.length === 0){
							 return;
						 }
						 
						 var data = new FormData();
						 data.append('SelectedFile', companyFile.files[0]);
						 
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
								 //console.log(resp.status + ': ' + resp.data);
							 }
						 };
							
						 request.open('POST', '../ajax/controller/upload_photo_employee.php?eid='+eid+'&path=id');
						 request.send(data);
					        
					 }else {
						 
						 $.ajax({
							 type: "POST",
							 url: "../ajax/controller/employee_passport_photo_update.php?path=id",
							 data: { employee_id: eid }
						 })// end ajax
						 
					 }// end if else
		 					 
					 /* -------------------------------------------------------------------------------------------------------------- */
					 
					 location.reload(true);
					 
					 //console.log(data.message);
					 
				 }); // end .done
				 
				 $( "html, body" ).animate({scrollTop:0}, '500');
				 
				 alertify.success('Success! Add employee details.');
			 }else {
				 
				 //alertify.error('Cancel! Add employee details.');
				 
				 location.reload(true);
				 
			 }// end if else
			 
		 }); // end
		 
		 
		 
	}); // end
	 
	/* ---------------------------------------------- This is for the add ----------------------------------------- */
	 
	/* -------------------------------------------------------------------------------------------------------------- */
	 
	/* ----------------------------------------- This is for the others ------------------------------------------- */
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Salary history delete
	$(document).on('click', '.salaryHistoryDelete', function(){
		var salary_employee_id = $('#employeeid').val();
		
		var formData = {
				'salary_id':$(this).data('salaryid')
		}; // end formData

		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/salary_increase_delete.php",
			data: formData,
			dataType: 'json',
			encode: true
		})// end ajax
		  
		.done(function(data){
			salary_history(salary_employee_id); // Display Salary history
			contract_information(salary_employee_id); // Display contract information
			
			// This will show the ALERT
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
		  
		console.log($(this).data('salaryid'));
	}); // end
	  
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Salary history insert
	$(document).on('click', '.salaryHistorySave', function(){
		var salary_employee_id = $('#employeeid').val();
		
		var formData = {
				'empid':$(this).data('empid'),
				'salary_basic':$('#salary_basic').val(),
				'salary_other_allowance':$('#salary_other_allowance').val(),
				'salary_total':$('#salary_total').val(),
				'salary_effectivity_date':$('#salary_effectivity_date').val()
		}; // end formData
		  
		$.ajax({
			type: "POST",
			url: "../ajax/controller/employee_request/salary_increase_add.php",
			data: formData,
			dataType: 'json',
			encode: true
		})// end ajax
		  
		.done(function(data){
			salary_history(salary_employee_id); // Display Salary history
			contract_information(salary_employee_id); // Display contract information
			// This will show the ALERT
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
		  
		//console.log($(this).data('empid'));
	}); // end	
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Check if the Entered Employee Number is already existing
	$('#employeeID').on('focusout',function(){
		var employeeid = $(this).val();
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/check_existing_employee.php",
			data: { employee_id: employeeid }
		}) // end ajax
		 
		.done(function( msg ){
			
			var empID = $.parseJSON(msg);
			var empid = empID['existing_employee'];
			
			if(employeeid.length == 0){
				//console.log('Empty file number');
				
				$("#addEmployee").attr("disabled", true);
				
				$('#employeeID').focus();
				
				function reset() {
					 $("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
					 alertify.set({
						 delay : 2000,
					 });
				 }
				 
				 reset();
				 alertify.error("Employee Number should not be empty!");
				 return false;
				
			}else if(empid == 'TRUE'){
				//console.log('Existing file number');
				
				$("#addEmployee").attr("disabled", true);
				
				function reset() {
					 $("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
					 alertify.set({
						 delay : 2000,
					 });
				 }
				 
				 reset();
				 alertify.error("Employee Number already existing!");
				 return false;
				
			}else {
				//console.log('Success');
				
				 $("#addEmployee").attr("disabled", false);
				 $("#empName").focus();
			}
			
		}); // end done
		
	 }); // end on focus out / employee id
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for gender
	$('#empGender').empty();
	$('#empGender').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/gender_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#empGender').empty();
			$('#empGender').append('<option value="0"> Select one </option>');
			$.each(data, function(i, gname){
				$('#empGender').append('<option value="'+data[i].id+'"> '+data[i].gname+' </option>');
			});// end each
		},
		complete: function(){
		}// end success
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for nationality
	$('#empNationality').empty();
	$('#empNationality').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/nationality_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#empNationality').empty();
			$('#empNationality').append('<option value="0"> Select one </option>');
			$.each(data, function(i, natlname){
				$('#empNationality').append('<option value="'+data[i].id+'"> '+data[i].natlname+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for religion
	$('#empReligion').empty();
	$('#empReligion').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/religion_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#empReligion').empty();
			$('#empReligion').append('<option value="0"> Select one </option>');
			$.each(data, function(i, religion_name){
				$('#empReligion').append('<option value="'+data[i].id+'"> '+data[i].religion_name+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for marital status
	$('#maritalStatus').empty();
	$('#maritalStatus').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/marital_status_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#maritalStatus').empty();
			$('#maritalStatus').append('<option value="0"> Select one </option>');
			$.each(data, function(i, marriage_status){
				$('#maritalStatus').append('<option value="'+data[i].id+'"> '+data[i].marriage_status+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for type of license
	$('#typeOfLicense').empty();
	$('#typeOfLicense').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/type_of_license_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#typeOfLicense').empty();
			$('#typeOfLicense').append('<option value="0"> Select one </option>');
			$.each(data, function(i, typename){
				$('#typeOfLicense').append('<option value="'+data[i].id+'"> '+data[i].typename+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for name of agency
	$('#nameOfAgency').empty();
	$('#nameOfAgency').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/agency_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#nameOfAgency').empty();
			$('#nameOfAgency').append('<option value="0"> Select one </option>');
			$.each(data, function(i, created_by, agency_name){
				$('#nameOfAgency').append('<option value="'+data[i].id+'"> '+data[i].agency_name+' </option>');
				 
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for sponsor
	$('#sponsor').empty();
	$('#sponsor').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/visa_sponsor_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#sponsor').empty();
			$('#sponsor').append('<option value="0"> Select one </option>');
			$.each(data, function(i, sponsorname){
				$('#sponsor').append('<option value="'+data[i].id+'"> '+data[i].sponsorname+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for project name
	$('#projectName').empty();
	$('#projectName').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/project_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#projectName').empty();
			$('#projectName').append('<option value="0"> Select one </option>');
			$.each(data, function(i, project_name){
				$('#projectName').append('<option value="'+data[i].id+'"> '+data[i].project_name+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// PID sponsor - project name
	$('#projectName').on('change', function(){
		var pid = $(this).val();
		 
		$.ajax({
			type: "POST",
			url: "../ajax/controller/pid_account_name.php",
			data: { project_id: pid }
		}) // end ajax
		 
		.done(function( msg ){
			var companyName = $.parseJSON(msg);
			 
			var cName = companyName['company_name'];
			 
			var pid_acct_name = pid + ' -  ' + cName;
			 
			$('#pidAccountName').val(pid_acct_name);
			 
		}); // end done
		 
		 
	}); // end on change
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for type of visa
	$('#typeOfVisa').empty();
	$('#typeOfVisa').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/type_of_visa_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#typeOfVisa').empty();
			$('#typeOfVisa').append('<option value="0"> Select one </option>');
			$.each(data, function(i, visa_type_name){
				$('#typeOfVisa').append('<option value="'+data[i].id+'"> '+data[i].visa_type_name+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for employment status
	$('#employmentStatus').empty();
	$('#employmentStatus').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/employee_status_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#employmentStatus').empty();
			$('#employmentStatus').append('<option value="0"> Select one </option>');
			$.each(data, function(i, status_arabic, status_english){
				$('#employmentStatus').append('<option value="'+data[i].id+'"> '+data[i].status_english+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for position
	$('#position').empty();
	$('#position').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/position_list.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#position').empty();
			$('#position').append('<option value="0"> Select one </option>');
			$.each(data, function(i, position_name){
				$('#position').append('<option value="'+data[i].id+'"> '+data[i].position_name+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for contract years
	$('#contractYears').empty();
	$('#contractYears').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/contract_years.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#contractYears').empty();
			$('#contractYears').append('<option value="0"> Select one </option>');
			$.each(data, function(i, number_of_years){
				$('#contractYears').append('<option value="'+data[i].number_of_years+'"> '+data[i].number_of_years+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Dropdown list for passport in file
	$('#isPassportInFile').empty();
	$('#isPassportInFile').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/passport_in_file.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#isPassportInFile').empty();
			$('#isPassportInFile').append('<option value="1"> Select one </option>');
			$.each(data, function(i, in_file){
				$('#isPassportInFile').append('<option value="'+data[i].id+'"> '+data[i].in_file+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// ATM Status
	$('#atmStatus').empty();
	$('#atmStatus').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/atm_status.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#atmStatus').empty();
			$('#atmStatus').append('<option value="2"> Select one </option>');
			$.each(data, function(i, atm_status_english, atm_status_arabic){
				$('#atmStatus').append('<option value="'+data[i].id+'"> '+data[i].atm_status_english+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Bank status
	$('#bankStatus').empty();
	$('#bankStatus').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/bank_status.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#bankStatus').empty();
			$('#bankStatus').append('<option value="2"> Select one </option>');
			$.each(data, function(i, bank_status_english, bank_status_arabic){
				$('#bankStatus').append('<option value="'+data[i].id+'"> '+data[i].bank_status_english+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Health insurance class
	$('#healthInsuranceClass').empty();
	$('#healthInsuranceClass').append("<option>Loading...</option>");
	$.ajax({
		type: "POST",
		url: "../ajax/controller/health_insurance_class.php",
		contentType:"application/json: charset=utf-8",
		dataType:"json",
		success: function(data){
			$('#healthInsuranceClass').empty();
			$('#healthInsuranceClass').append('<option value="4"> Select one </option>');
			$.each(data, function(i, class_english){
				$('#healthInsuranceClass').append('<option value="'+data[i].id+'"> '+data[i].class_english+' </option>');
			});// end each
		},
		complete: function(){
		}
	}); // end ajax
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// Other allowance - compute total salary
	$('#otherAllowance').on('keyup', function(){
		var basic_salary = $('#basicSalary').val();
		var other_allowance = $(this).val();
		
		var totalSalary = parseFloat(parseFloat(other_allowance) + parseFloat(basic_salary));
		
		 $('#totalSalary').val(totalSalary);
		 
		//console.log(totalSalary);
	});
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	//Basic salary - compute total salary
	$('#basicSalary').on('keyup', function(){
		var other_allowance = $('#otherAllowance').val();
		var basic_salary = $(this).val();
		
		var totalSalary = parseFloat(parseFloat(other_allowance) + parseFloat(basic_salary));
		
		 $('#totalSalary').val(totalSalary);
		 
		//console.log(totalSalary);
	});
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	// This will check if total salary is not a numeric (NaN)
	$('#basicSalary, #otherAllowance').on('keyup', function(){
		var other_allowance = $('#otherAllowance').val();
		var basic_salary = $('#basicSalary').val();
		
		function reset () {
			$("#toggleCSS").attr("href", "../en/css/alertify/alertify.default.css");
			alertify.set({			
			   delay : 2000,
			});
		}
		
		reset();
		
		if(isNaN(basic_salary)){
			$('#basicSalary').focus();
			alertify.error('Basic salary is not numeric');
			return false;
			//console.log('Basic is not numeric');
		}
		
		if(isNaN(other_allowance)){
			$('#otherAllowance').focus();
			alertify.error('Other allowance is not numeric');
			return false;
			//console.log('Other is not numeric');
		}
		
		//console.log('Change');
	});
	
	/* -------------------------------------------------------------------------------------------------------------- */
	  
	/* ----------------------------------------- This is for the others ------------------------------------------- */
	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	var dataTable = $('#listOfEmployee').DataTable( {
		"fnRowCallback": function(nRow) {
			  nRow.className = "clickableCursor";
			  return nRow;
		},
		"processing": true,
		"serverSide": true,	
		"ajax": "../ajax/controller/employee_list.php",
		"order": [[ 0, "asc" ]],
		"columnDefs": [
			{ className: "dt-center", "targets": [0,1,2,3,4,5,6] }
		]
	});
	 
	//popover
	$('[data-toggle="popover"]').popover(); 

	$( '#GoBackToEmployeeListTable, #GoBackToEmployeeListTableTop').click(function() {
    	$("#employeeListTable").removeClass('hideContentAi');
    	$('#employeeProfileForm').addClass('hideContentAi');	
    });     


	
	/* -------------------------------------------------------------------------------------------------------------- */
	
	/*disable button and update start
	1 -> HR
	2 -> FD
	3 -> Project Site
	*/
	if(typeDepartment == 3){
		$('#UpdateEmployee, #UpdateEmployeeTop').addClass('hideContentAi');
	}
	//disable button and update end	
	
}); // end 