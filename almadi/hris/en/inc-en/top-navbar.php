<div class="container">
  <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
  	<span class="icon-bar"></span>
  	<span class="icon-bar"></span>
  	<span class="icon-bar"></span> 
  </a>
  <a class="brand" href="index.php" style="padding: 0px 0px 0px 20px;"><img src="img/almadi-logo.png"/> </a>
  <div class="nav-collapse">
	<ul class="nav pull-right">
	  <!-- 
	  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" style="text-shadow: none; font-weight: bold;"><i class="icon-group"></i> HRIS <b class="caret" style="border-top-color: #15317E;"></b></a>
		<ul class="dropdown-menu">
		  <li><a id="AppOMS"> <i class="icon-shopping-cart"></i> OMS</a></li>
		  <li><a id="AppVMS"> <i class="icon-truck"></i> VMS</a></li>
		</ul>
	  </li>
	   -->
	  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" style="text-shadow: none; font-weight: bold;"><i class="icon-cog"></i> Change Language <b class="caret" style="border-top-color: #15317E;"></b></a>
		<ul class="dropdown-menu">
		  <li><a id="arabicLanguageDemo"> العربية </a></li>
		  <li><a id="englishLanguage">English</a></li>
		</ul>
	  </li>	  
	  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" style="text-shadow: none; font-weight: bold;"><i class="icon-user"></i> <?php echo @employeeID($_SESSION['login_user']); ?> <b class="caret" style="border-top-color: #15317E;"></b></a>
		<ul class="dropdown-menu">
		  <li><a href="#">Profile</a></li>
		  <li><a href="../../index.php?logout">Logout</a></li>
		</ul>
	  </li>
	</ul>
  </div>
  <!--/.nav-collapse --> 
</div>