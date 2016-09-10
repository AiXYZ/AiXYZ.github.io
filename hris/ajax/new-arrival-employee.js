$(document).ready(function() {
	
	// This is the counter for new arrival
	// Labors, Drivers, Engineers and Others
	counterNewArrival();
	
	function counterNewArrival(){
		
		$.ajax({
			type: "POST",
			url: "../ajax/controller/new_arrival_employee_counter.php"
		}) // end ajax
		
		.done(function( msg ){
			
			// Labors
			var others_total = $.parseJSON(msg);
			$("#others_total").text(others_total['others_total']);
			
			
		}); // end done
		
	}
	
	/*-----------------------------------------------------------------------------------------------------------------------------------------*/
	
	function employee_list(table_name, employee_type){
		
		var dataTable = $(table_name).DataTable({
			
			"processing": true,
			"serverSide": true,	
			"destroy": true,
			"ajax": "../ajax/controller/new_arrival_employee_list.php?employee_type="+employee_type,
	    	"iDisplayLength": 10,
	        "bLengthChange": false,
	        "order": [[ 0, "desc" ]],
	        "columnDefs": [{ 
	        	className: "dt-center",
	        	"targets": [0,1,2,3]
	        }],
	        "fnRowCallback": function( row, data, index, oSettings ){
	        	
	        	// 0 -> not yet updated
	        	// 1 -> updated
	        	//console.log(data[4]);
	        	var money_transfer = data[4];
	        	var contract = data[5];
	        	var visa = data[6];
	        	var passport = data[7];
	        	var photo = data[8];
	        	var medical_check_up = data[9];
	        	var medical_insurance = data[10];
	        	var reporting_date = data[11];
	        	var work_permit = data[12];
	        	var iqama = data[13];
	        	var bank_account = data[14];
	        	var gosi = data[15];
	        	var certificate = data[16];
	        	var dl_country = data[17];
	        	var drivers_license = data[18];
	        	var translated_dl = data[19];
	        	
	        	// Money transfer
	        	if(money_transfer == 0){
	        		var money_transfer_info = 'Money transfer <br>';
	        	}else {
	        		var money_transfer_info = '';
	        	}
	        	
	        	//Contract
	        	if(jQuery.isEmptyObject(contract) || contract == ''){
	        		var contract_info = 'Contract <br>';
	        	}else {
	        		var contract_info = '';
	        	}
	        	
	        	// Visa
	        	if(jQuery.isEmptyObject(visa) || visa == ''){
	        		var visa_info = 'Visa <br>';
	        	}else {
	        		var visa_info = '';
	        	}
	        	
	        	// Passport
	        	if(jQuery.isEmptyObject(passport) || passport == ''){
	        		var passport_info = 'Passport <br>';
	        	}else {
	        		var passport_info = ''; 
	        	}
	        	
	        	//Photo
	        	if(jQuery.isEmptyObject(photo) || photo == '../upload/emoloyee-picture/profile-picture-placeholder.jpg'){
	        		var photo_info = 'Photo <br>';
	        	}else {
	        		var photo_info = '';
	        	}
	        	
	        	// Medical check-up
	        	if(medical_check_up == 0){
	        		var medical_check_up_info = 'Medical check-up <br>';
	        	}else {
	        		var medical_check_up_info = '';
	        	}
	        	
	        	// Medical insurance
	        	if(jQuery.isEmptyObject(medical_insurance) || medical_insurance == ''){
	        		var medical_insurance_info = 'Medical insurance <br>';
	        	}else {
	        		var medical_insurance_info = '';
	        	}
	        	
	        	// Reporting date
	        	if(reporting_date == 0){
	        		var reporting_date_info = 'Reporting date <br>';
	        	}else {
	        		var reporting_date_info = '';
	        	}
	        	
	        	// Work permit
	        	if(work_permit == 0){
	        		var work_permit_info = 'Work permit <br>';
	        	}else {
	        		var work_permit_info = '';
	        	}
	        	
	        	// Iqama
	        	if(jQuery.isEmptyObject(iqama) || iqama == ''){
	        		var iqama_info = 'Iqama <br>';
	        	}else {
	        		var iqama_info = '';
	        	}
	        	
	        	// Bank account
	        	if(jQuery.isEmptyObject(bank_account) || bank_account == ''){
	        		var bank_account_info = 'Bank account <br>';
	        	}else {
	        		var bank_account_info = '';
	        	}
	        	
	        	// GOSI
	        	if(jQuery.isEmptyObject(gosi) || gosi == ''){
	        		var gosi_info = 'GOSI <br>';
	        	}else {
	        		var gosi_info = '';
	        	}
	        	
	        	// Certificate - only for engineer
	        	if(certificate == 0){
	        		var certificate_info = 'Certificate <br>';
	        	}else {
	        		var certificate_info = '';
	        	}
	        	
	        	// Drivers license country - only for driver
	        	if(dl_country == 0){
	        		var dl_country_info = 'DL from country <br>';
	        	}else {
	        		var dl_country_info = '';
	        	}
	        	
	        	// Drivers license - only for driver
	        	if(jQuery.isEmptyObject(drivers_license) || drivers_license == ''){
	        		var drivers_license_info = 'Driver\'s license <br>';
	        	}else {
	        		var drivers_license_info = '';
	        	}
	        	
	        	// Translated drivers license
	        	if(translated_dl == 0){
	        		var translated_dl_info = 'Translated licensed <br>';
	        	}else {
	        		var translated_dl_info = '';
	        	}
	        
	        	
	        	var mstring = data[0]+' having following incorrect data: <br>';
	        	var message = mstring.concat(money_transfer_info, contract_info, visa_info, passport_info, photo_info, medical_check_up_info, medical_insurance_info, reporting_date_info, work_permit_info, iqama_info, bank_account_info, gosi_info, certificate_info, dl_country_info, drivers_license_info, translated_dl_info);
	        	
	        	if(money_transfer_info != '' || contract_info != '' || visa_info != '' || passport_info != '' || photo_info != '' || medical_check_up_info != '' || medical_insurance_info != '' || reporting_date_info != '' || work_permit_info != '' || iqama_info != '' || bank_account_info != '' || gosi_info != '' || certificate_info != '' || dl_country_info != '' || drivers_license_info != '' || translated_dl_info != '' ){
	        		var tooltipsTitle;
	        		tooltipsTitle = message;
	        		
	        		row.setAttribute( 'data-original-title', tooltipsTitle );
	        		
	        		dataTable.$('tr').tooltip( {
						"delay": 0,
						"track": true,
						"fade": 250
					} );
	        	}
	        	
	        	//console.log(data[4]);
            }
			
		}); // end data table
		
	}// end function
	
	/*-----------------------------------------------------------------------------------------------------------------------------------------*/
	
	$('[data-toggle="tooltip"]').tooltip();

	//labor start
	//Bar Chart start
	var $gridColor = "#ddd";
	var $silver = "rgba(220,220,220,0.5)";
	
	var cnt_money = 10;
	
	$(function() {
		var data = [ ["Money", cnt_money], ["Contract", 8], ["Visa", 6], ["Passport", 13], ["Photo", 17], ["Reporting Date", 14], ["Check-up", 10], ["Insurance", 8], ["Work Permit", 7], ["Iqama", 9], ["Bank A/c", 8], ["GOSI", 17]];
	
		$.plot("#laborsBarChart", [ data ], {
			series: {
				bars: {
					show: true,
					barWidth: 0.8,
					align: "center"
				}
			},
			xaxis: {
				mode: "categories",
				tickLength: 0
			},
			grid:{
				hoverable: true,
				clickable: false,
				borderWidth: 1,
				borderColor: $gridColor,
			},
			colors: [$silver],
	
		});
	
	});
	//Bar Chart end	
	
	//table start
	employee_list('#listOfLabors', 'labor'); // This will display the labor list
	//table end
	
	//update and view start
	$('#laborsView').removeClass('hideContentAi');

//	$('#listOfLabors tbody').on( 'click', 'tr', function () {
//    	$("#laborsUpdate").removeClass('hideContentAi');
//    	$('#laborsView').addClass('hideContentAi');
//    	return false
//    });
//
//    $( '#GoBackToLaborsListTable').click(function() {
//    	$("#laborsView").removeClass('hideContentAi');
//    	$('#laborsUpdate').addClass('hideContentAi');	
//    });
	//update and view end    
	//labor end
    
    /*-----------------------------------------------------------------------------------------------------------------------------------------*/

	//driver start
	//Bar Chart start	
	$('.driversBarChartActive').click (function() {
      	setTimeout(function() {
			var data = [ ["Money", 10], ["Contract", 8], ["Visa", 6], ["Passport", 13], ["Photo", 17], ["R. Date", 14], ["Check-up", 10], ["Insurance", 8], ["Work Permit", 7], ["DL Country", 13], ["DL", 9], ["Translated DL", 14], ["Iqama", 9], ["Bank A/c", 8], ["GOSI", 17]];
			
			$.plot("#DriversBarChart", [ data ], {
				series: {
					bars: {
						show: true,
						barWidth: 0.8,
						align: "center"
					}
				},
				xaxis: {
					mode: "categories",
					tickLength: 0
				},
				grid:{
					hoverable: true,
					clickable: false,
					borderWidth: 1,
					borderColor: $gridColor,
				},
				colors: [$silver],
			});       
       }, 1);
        
	});
	//Bar Chart end	
	
	//table start
	employee_list('#listOfDrivers', 'drivers'); // This will display the drivers list
	//table end
    
	//update and view start
	$('#driversView').removeClass('hideContentAi');

//	$('#listOfDrivers tbody').on( 'click', 'tr', function () {
//    	$("#driversUpdate").removeClass('hideContentAi');
//    	$('#driversView').addClass('hideContentAi');
//    	return false
//    });
//
//    $( '#GoBackToDriversListTable').click(function() {
//    	$("#driversView").removeClass('hideContentAi');
//    	$('#driversUpdate').addClass('hideContentAi');	
//    });
	//update and view end    
	//driver end
    
    /*-----------------------------------------------------------------------------------------------------------------------------------------*/

	//engineer start
	//Bar Chart start	
	$('.engineersBarChartActive').click (function() {
      	setTimeout(function() {
			var data = [ ["Money", 10], ["Contract", 8], ["Visa", 6], ["Passport", 13], ["Photo", 17], ["Reporting Date", 14], ["Check-up", 10], ["Insurance", 8], ["Work Permit", 7], ["Certificate", 13], ["Iqama", 9], ["Bank A/c", 8], ["GOSI", 17]];
			
			$.plot("#EngineersBarChart", [ data ], {
				series: {
					bars: {
						show: true,
						barWidth: 0.8,
						align: "center"
					}
				},
				xaxis: {
					mode: "categories",
					tickLength: 0
				},
				grid:{
					hoverable: true,
					clickable: false,
					borderWidth: 1,
					borderColor: $gridColor,
				},
				colors: [$silver],
			});       
       }, 1);
        
	});
	//Bar Chart end	
	
	//table start
	employee_list('#listOfEngineers', 'engineers'); // This will display the engineers list
	//table end
    
	//update and view start
	$('#engineersView').removeClass('hideContentAi');

//	$('#listOfEngineers tbody').on( 'click', 'tr', function () {
//    	$("#engineersUpdate").removeClass('hideContentAi');
//    	$('#engineersView').addClass('hideContentAi');
//    	return false
//    });
//
//    $( '#GoBackToEngineersListTable').click(function() {
//    	$("#engineersView").removeClass('hideContentAi');
//    	$('#engineersUpdate').addClass('hideContentAi');	
//    });
	//update and view end    
	//engineer end	

    /*-----------------------------------------------------------------------------------------------------------------------------------------*/
    
	//others start
	//Bar Chart start	
	$('.othersBarChartActive').click (function() {
      	setTimeout(function() {
			var data = [ ["Money", 10], ["Contract", 8], ["Visa", 6], ["Passport", 13], ["Photo", 17], ["Reporting Date", 14], ["Check-up", 10], ["Insurance", 8], ["Work Permit", 7], ["Iqama", 9], ["Bank A/c", 8], ["GOSI", 17]];
			
			$.plot("#othersBarChart", [ data ], {
				series: {
					bars: {
						show: true,
						barWidth: 0.8,
						align: "center"
					}
				},
				xaxis: {
					mode: "categories",
					tickLength: 0
				},
				grid:{
					hoverable: true,
					clickable: false,
					borderWidth: 1,
					borderColor: $gridColor,
				},
				colors: [$silver],
			});       
       }, 1);
        
	});
	//Bar Chart end	
	
	//table start
	employee_list('#listOfOthers', 'others'); // This will display the others list
	//table end

	//update and view start
	$('#othersView').removeClass('hideContentAi');

//	$('#listOfOthers tbody').on( 'click', 'tr', function () {
//    	$("#othersUpdate").removeClass('hideContentAi');
//    	$('#othersView').addClass('hideContentAi');
//    	return false
//    });
//
//    $( '#GoBackToOthersListTable').click(function() {
//    	$("#othersView").removeClass('hideContentAi');
//    	$('#othersUpdate').addClass('hideContentAi');	
//    });
	//update and view end    
	//others end	
	
} );