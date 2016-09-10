<?php 
ob_start();
session_start();

include_once '../../inc/config.php';
include_once '../../inc/functions.php';

// echo $_SESSION['login_user'];
$department = getDeptAccess($_SESSION["login_user"]);
$_SESSION['type_department'] = $department['department'];
$_SESSION['type_applications'] = $department['applications'];

if(!isset($_SESSION['login_user'])){
	header("Location: /sgc/index.php");
}

// Store select language
if(isset($_GET['hl'])){
	$_SESSION['lang'] = $_GET['hl']; 
}

// echo $_SESSION['lang'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<?php include_once("../inc/meta-data-and-favicon.php") ?>
    
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet">
	<?php include_once("../inc/font.php") ?>
	<link href="css/style.css" rel="stylesheet">
	<link href="css/pages/dashboard.css" rel="stylesheet">
	
	<link href="css/alertify/alertify.core.css" rel="stylesheet">
    <link href="css/alertify/alertify.default.css" rel="stylesheet" id = "toggleCSS"> 
	
    <script>
    <?php include_once("../inc/google-analytics.php") ?>
    </script>	
    
    <script type="text/javascript">
		var typeDepartment="<?php echo $_SESSION['type_department']; ?>";
		var typeApplications="<?php echo $_SESSION['type_applications']; ?>";
		//console.log(typeApplications);
	</script>
	
</head>
<body>
<div class="navbar navbar-fixed-top">
  <div class="navbar-inner">
	<?php include_once("inc-en/top-navbar.php") ?>
    <!-- /container --> 
  </div>
  <!-- /navbar-inner --> 
</div>
<!-- /navbar -->
<div class="subnavbar">
  <div class="subnavbar-inner">
  	<?php include_once("inc-en/subnavbar-menu.php") ?>
  </div>
</div>
<!-- /subnavbar -->
<div class="main">
  <div class="main-inner">
    <div class="container">
      <div class="row">
		<!-- dashboard will come here start -->
		<div class="span6">
		
			<div>	
				 <p></p>
		    </div>
			
		</div>
		<!-- dashboard will come here end -->
		<!-- Modal start -->
		<!-- search employee request start -->
		<?php include_once("inc-en/search-employee-request-tab.php") ?>										
		<!-- search employee request end -->
		
		<!-- Modal end -->		
      </div>
      <!-- /row --> 
    </div>
    <!-- /container --> 
  </div>
  <!-- /main-inner --> 
</div>
<!-- /main -->
<div class="footer">
  <div class="footer-inner">
	<?php include_once("inc-en/footer.php") ?>
    <!-- /container --> 
  </div>
  <!-- /footer-inner --> 
</div>
<!-- /footer --> 

<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/excanvas.min.js"></script>
<script src="js/chart.min.js" type="text/javascript"></script>
<script src="js/bootstrap.js"></script>
<script src="js/base.js"></script>
<script src="../ajax/search-employee-request.js"></script>

<script src="../../js/change_url.js" type="text/javascript"></script>
<script src="js/alertify/alertify.min.js"></script>
 
</body>
</html>
