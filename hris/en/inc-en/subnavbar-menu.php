<?php 
//current url start
$actualUrl = "$_SERVER[REQUEST_URI]";
$urlInArray = explode("/",$actualUrl);

@$currentPage = explode(".",$urlInArray[4]); // 4 is for localhost
$currentPageMenu = $currentPage[0];

if($currentPageMenu == "index"){
	$dashboardMenuActive = "active";
}elseif($currentPageMenu == "new-request" or $currentPageMenu == "create-request"){
	$requestMenuActive = "active";
}elseif($currentPageMenu == "employee" or $currentPageMenu == "new-employee" or $currentPageMenu == "arrival-employee"){
	$hrMenuActive = "active";
}
//current url end
?>
<div class="container">
  <ul class="mainnav">
	<!-- <li class="<?php echo @$dashboardMenuActive ?>"><a href="index.php"><i class="icon-dashboard"></i><span>Dashboard</span> </a> </li> -->
	<li id="dashboardDemo" class="<?php echo @$dashboardMenuActive ?>"><a href="javascript:;"><i class="icon-dashboard"></i><span>Dashboard</span> </a> </li>
	<!-- 
	<li class="dropdown <?php echo @$requestMenuActive ?>"><a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-align-justify"></i><span>Request</span> <b class="caret"></b></a>
	  <ul class="dropdown-menu dropdownMenuOnHover">
		<li><a href="new-request.php">New Request</a></li>
		<li><a href="create-request.php">Create Request</a></li>
	  </ul>
	</li>
	 -->	
	<li class="<?php echo @$requestMenuActive ?>"><a href="create-request.php"><i class="icon-align-justify"></i><span>Request</span> </a> </li>	
	<!-- 
	<li class="dropdown <?php echo @$hrMenuActive ?>"><a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i><span>HR</span> <b class="caret"></b></a>
	  <ul class="dropdown-menu dropdownMenuOnHover">
		<li><a href="employee.php">Employee</a></li>
		<li><a href="new-employee.php">New Employee</a></li>
		<li><a href="arrival-employee.php">Arrival Employee</a></li>
	  </ul>
	</li>
	 -->			
  </ul>
  <!-- 
  <input type="text" class="search-query navbar-search pull-right" id="en_search_employee" placeholder="Search">
   -->
</div>