$(document).ready(function() {
	
	/* ---------------------------------------------------------------------------------- */

	// Defaults
	$('#provide_details').text('Please provide your details');
	$('#sgcLogInButton').text('Log In');
	$('#changeLanguage').text('Change Language');
	$('#username').attr('placeholder', 'Username');
	$('#password').attr('placeholder', 'Password');
	$('#selectedLanguage').val('english');
	
	$('#maintenanceInfo').append(
			'<h1>503</h1>'+
			'<h2>SGC is currently down for maintenance.</h2>'+
			'<div class="error-details">'+
				'We expect to be back shortly. For more information, send email to <a href="mailto:ali.hr@sayeghwater.com">ali.hr@sayeghwater.com</a>.'+
				'<br>'+
				'Thanks for your patience!'+
			'</div>'
	);	
	
	// This is to change the language
	$('#arabic').on('click', function(){
		alert("Not available in demo");
		/*
		$('#selectedLanguage').val('arabic');
		
		$('#changeLanguage').text('تغير اللغـة');
		$('#changeLanguage').attr('lang', 'ar');
		$('#changeLanguage').attr('dir', 'rtl');
		
		$('#provide_details').text('يرجى تقديم التفاصيل الخاصة بك');
		$('#provide_details').attr('lang', 'ar');
		$('#provide_details').attr('dir', 'rtl');
		
		$('#sgcLogInButton').text('تسجيل الدخول');
		$('#sgcLogInButton').attr('lang', 'ar');
		$('#sgcLogInButton').attr('dir', 'rtl');
		
		$('#username').attr('placeholder', 'اسم المستخدم');
		$('#username').attr('lang', 'ar');
		$('#username').attr('dir', 'rtl');
		
		$('#password').attr('placeholder', 'كلمه السر');
		$('#password').attr('lang', 'ar');
		$('#password').attr('dir', 'rtl');
		
		$('#maintenanceInfo').empty();
		$('#maintenanceInfo').append(
				'<h1>503</h1>'+
				'<h2>SGC حاليا أسفل للصيانة</h2>'+
				'<div class="error-details">'+
					' ونحن نتوقع أن تكون العودة في وقت قريب. لمزيد من المعلومات، وإرسال بريد إلكتروني إلى <a href="mailto:ali.hr@sayeghwater.com"> ali.hr@sayeghwater.com </a> '+
					'<br>'+
					'شكرا لصبرك!'+
				'</div>'
		);
		*/
	}); // end
	
	$('#english').on('click', function(){
		
		$('#selectedLanguage').val('english');
		
		$('#changeLanguage').text('Change Language');
		$('#provide_details').attr('lang', 'en-us');
		$('#provide_details').attr('dir', 'ltr');
		
		$('#provide_details').text('Please provide your details');
		$('#provide_details').attr('lang', 'en-us');
		$('#provide_details').attr('dir', 'ltr');
		
		$('#sgcLogInButton').text('Log in');
		$('#sgcLogInButton').attr('lang', 'en-us');
		$('#sgcLogInButton').attr('dir', 'ltr');
		
		$('#username').attr('placeholder', 'Username');
		$('#username').attr('lang', 'en-us');
		$('#username').attr('dir', 'ltr');
		
		$('#password').attr('placeholder', 'Username');
		$('#password').attr('lang', 'en-us');
		$('#password').attr('dir', 'ltr');
		
		$('#maintenanceInfo').empty();
		$('#maintenanceInfo').append(
				'<h1>503</h1>'+
				'<h2>SGC is currently down for maintenance.</h2>'+
				'<div class="error-details">'+
					'We expect to be back shortly. For more information, send email to <a href="mailto:ali.hr@sayeghwater.com">ali.hr@sayeghwater.com</a>.'+
					'<br>'+
					'Thanks for your patience!'+
				'</div>'
		);		
	}); // end
	
	/* ---------------------------------------------------------------------------------- */
	
	$('#sgcLogInView').removeClass('hideContentAi');
	
	$('#sgcLogInButton').on('click',function(){
		
		var selectedLanguage = $('#selectedLanguage').val();
		
		console.log(selectedLanguage);
		
//		console.log('Login');
//		var userName = $('#username').val();
//		var passWord = $('#password').val();
		
		var formData = {
			'username':	$('#username').val(),
			'password':$('#password').val()
		};
		
		$.ajax({
			type: 'POST',
			url: 'hris/ajax/controller/login.php',
			data: formData,
			beforeSend: function(){
				$("#sgcLogInButton").attr("disabled", true);
			},
			complete: function(){
				$("#sgcLogInButton").attr("disabled", false);
			},
			dataType: 'json',
			encode: true
		})// end ajax
		
		.done(function(data){
			
			console.log(data);
			
			if(!data.success){
				//console.log(data.errors);
				
				//This will show the ALERT
				function reset () {
					$("#toggleCSS").attr("href", "hris/en/css/alertify/alertify.default.css");
					alertify.set({			
					   delay : 2000,
					});
				}
				
				reset();
				alertify.error(data.message);
				return false;
				
			}else{
				console.log(data.message);
				
				window.location='hris/en/create-request.php';
				/*
				// ======================================================= \\
				
				var apps = data.message;
				
				console.log(data.message);
				
				if (jQuery.inArray("1", apps)!='-1') {
					//$("#hrisLink").attr("href", "hris/en/index.php");
		            //console.log('HRIS is in the array');
					
					// This will check what language is selected
					if(selectedLanguage == 'arabic'){
						$("#hrisLink").attr("href", "hris/ar/index.php?hl=arabic");
					}else {
						$("#hrisLink").attr("href", "hris/en/index.php?hl=english");
					}
					
		        }else {
		        	$("#hrisLink").attr("href", "#");
		        	
		        	$('#hrisLink').on('click', function(){
		        		function reset () {
		        			$("#toggleCSS").attr("href", "hris/en/css/alertify/alertify.default.css");
							alertify.set({			
							   delay : 2000,
							});
		        		}// end function
		        		reset();
		        		alertify.error('You are not allowed to access HRIS.');
		        		return false;
		        	});// end on click
		        	
		        	//console.log('HRIS is not in the array');
		        }// end if else HRIS
				
				// ======================================================= \\
				
				if (jQuery.inArray("2", apps)!='-1') {
					$("#omsLink").attr("href", "#");
		            //console.log('OMS is in the array');
		        }else {
		        	$("#omsLink").attr("href", "#");
		        	
		        	$('#omsLink').on('click', function(){
		        		function reset () {
		        			$("#toggleCSS").attr("href", "hris/en/css/alertify/alertify.default.css");
							alertify.set({			
							   delay : 2000,
							});
		        		}// end function
		        		reset();
		        		alertify.error('You are not allowed to access OMS.');
		        		return false;
		        	});// end on click
		        	
		        	//console.log('OMS is not in the array');
		        }// end if else OMS
				
				// ======================================================= \\
				
				if (jQuery.inArray("3", apps)!='-1') {
					$("#vmsLink").attr("href", "vms/en/index.php");
		            //console.log('VMS is in the array');
		        }else {
		        	$("#vmsLink").attr("href", "#");
		        	
		        	$('#vmsLink').on('click', function(){
		        		function reset () {
		        			$("#toggleCSS").attr("href", "hris/en/css/alertify/alertify.default.css");
							alertify.set({			
							   delay : 2000,
							});
		        		}// end function
		        		reset();
		        		alertify.error('You are not allowed to access VMS.');
		        		return false;
		        	});// end on click
		        	
		        	 //console.log('VMS is not in the array');
		        }// end if else VMS
				
				$("#sgcAppView").removeClass('hideContentAi');
		     	$('#sgcLogInView').addClass('hideContentAi');
		     	*/
			}// end if else
			
			//console.log(data);
			
		});// end done
		
		//console.log('Login');
	});
});