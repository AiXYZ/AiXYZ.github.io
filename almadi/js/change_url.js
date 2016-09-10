$(document).ready(function() {

	$('#arabicLanguageDemo').on('click', function(){
		alert("Not available in demo");		
	});

	$('#arabicLanguage').on('click', function(){
		//console.log('Arabic');
		var pathname = window.location.pathname; // Returns path only
		var newURL = pathname.replace('en', 'ar');
		window.location.href = newURL;
		//console.log(newURL);
		
	});
	
	/*---------------------------------------------------------------------------*/

	$('#englishLanguage').on('click', function(){
		//console.log('English');
		var pathname = window.location.pathname; // Returns path only
		var newURL = pathname.replace('ar', 'en');
		window.location.href = newURL;
		//console.log(newURL);
	});
	
	/*---------------------------------------------------------------------------*/
	
	$('#AppHRIS').on('click', function(){
		
		var apps = typeApplications;
		
		if (jQuery.inArray("1", apps)!='-1') {
			
			//console.log('allowed');
			//console.log(typeApplications);
			
			window.location.href = '/sgc/hris/en/';
			
		}else {
			
			//console.log('not allowed');
			
			function reset () {
    			$("#toggleCSS").attr("href", "../../hris/en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
    		}// end function
    		reset();
    		alertify.error('You are not allowed to access HRIS.');
    		return false;
    		
		}
		
		//window.location.href = '/sgc/hris/en/';
	    //console.log(typeApplications);
	});
	
	/*---------------------------------------------------------------------------*/
	
	$('#AppOMS').on('click', function(){
		
		var apps = typeApplications;
		
		if (jQuery.inArray("2", apps)!='-1') {
			
			//console.log('allowed');
			//console.log(typeApplications);
			
			window.location.href = '/sgc/oms/en/';
			
		}else {
			
			//console.log('not allowed');
			function reset () {
    			$("#toggleCSS").attr("href", "../../oms/en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
    		}// end function
    		reset();
    		alertify.error('You are not allowed to access OMS.');
    		return false;
    		
		}
		
		//window.location.href = '/sgc/oms/en/';
		//console.log(typeApplications);
	});
	
	/*---------------------------------------------------------------------------*/
	
	$('#AppVMS').on('click', function(){
		
		var apps = typeApplications;
		
		if (jQuery.inArray("3", apps)!='-1') {
			
			//console.log('allowed');
			//console.log(typeApplications);
			
			window.location.href = '/sgc/vms/en/';
			
			
		}else {
			
			//console.log('not allowed');
			function reset () {
    			$("#toggleCSS").attr("href", "../../vms/en/css/alertify/alertify.default.css");
				alertify.set({			
				   delay : 2000,
				});
    		}// end function
    		reset();
    		alertify.error('You are not allowed to access VMS.');
    		return false;
    		
		}
		
		//window.location.href = '/sgc/vms/en/'; 
		//console.log(typeApplications);
	});
	
})// end