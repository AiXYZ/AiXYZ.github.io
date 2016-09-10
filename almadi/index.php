<?php 
ob_start();
session_start();

if(isset($_GET['logout'])){
	unset($_SESSION['login_user']);
	unset($_SESSION['lang']);
	unset($_SESSION['type_department']);
	unset($_SESSION['type_applications']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<?php include_once("inc/meta-data-and-favicon.php") ?>
    
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
	<?php include_once("inc/font.php") ?>
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/pages/signin.css" rel="stylesheet" type="text/css">
	<link href="css/pages/dashboard.css" rel="stylesheet" type="text/css">
	
		<!-- alertifyjs notifier -->
 	<link href="hris/en/css/alertify/alertify.core.css" rel="stylesheet">
    <link href="hris/en/css/alertify/alertify.default.css" rel="stylesheet" id = "toggleCSS"> 
    
	<script>
    <?php include_once("inc/google-analytics.php") ?>
    </script>
</head>

<body>	
<div class="navbar navbar-fixed-top">
	<div class="navbar-inner">	
		<div class="container"> <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span> </a><a class="brand" href="index.php" style="padding: 0px 0px 0px 20px;"><img src="img/sgc-logo-for-navbar.png"/> </a>			
			<div class="nav-collapse">
				<ul class="nav pull-right">					
				  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" style="text-shadow: none; font-weight: bold;"><i class="icon-cog"></i> <span id="changeLanguage"></span> <b class="caret" style="border-top-color: #15317E;"></b></a>
					<ul class="dropdown-menu">
					  <li><a id="arabic"> العربية </a></li>
					  <li><a id="english">English</a></li>
					</ul>
				  </li>						
				</ul>
			</div><!--/.nav-collapse -->	
		</div> <!-- /container -->		
	</div> <!-- /navbar-inner -->
</div> <!-- /navbar -->

<div class="account-container">
	<!-- login start -->	
	<div id="sgcLogInView" class="hideContentAi">
		<div class="content clearfix">		
		
			<form id="logInForm">		
				
				<div class="login-fields">				
					<p id="provide_details"></p>				
					<div class="field">
						<label for="username">Username</label>
						<input type="text" id="username" name="username" value="" class="login username-field" required/>
					</div> <!-- /field -->
					<div class="field">
						<label for="password">Password:</label>
						<input type="password" id="password" name="password" value="" class="login password-field" required/>
					</div> <!-- /password -->
				</div> <!-- /login-fields -->
				<div class="login-actions">
					<!-- <span class="login-checkbox">
						<input id="Field" name="Field" type="checkbox" class="field login-checkbox" value="First Choice" tabindex="4" />
						<label class="choice" for="Field"><a href="#">Reset Password</a></label>
					</span> -->
					<button class="button btn btn-success btn-large" id="sgcLogInButton"></button>
					<input type="hidden" id="selectedLanguage">
				</div> <!-- .actions -->
				
			</form>
			
		</div> <!-- /content -->
	</div>
	<!-- login end -->
	
	<!-- sgc app start -->
	<div id="sgcAppView" class="hideContentAi">
		<div class="content clearfix">		
	    	<div class="shortcuts">
	    		<!-- pointer-events: none; -->
	        	<a id="hrisLink" class="shortcut" style="width: 30%;"><i class="shortcut-icon icon-group"></i><span class="shortcut-label">HRIS</span> </a>
	            <a id="omsLink" class="shortcut" style="width: 30%;"><i class="shortcut-icon icon-shopping-cart"></i><span class="shortcut-label">OMS</span> </a>
	            <a id="vmsLink" class="shortcut" style="width: 30%;"> <i class="shortcut-icon icon-truck"></i><span class="shortcut-label">VMS</span> </a>
	    	</div>
		</div> <!-- /content -->
	</div>	
	<!-- sgc app end -->
</div> <!-- /account-container -->

<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/validator.min.js"></script>

<script src="hris/ajax/login.js"></script>
<script src="hris/en/js/alertify/alertify.min.js"></script>

</body>
</html>
