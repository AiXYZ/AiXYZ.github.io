<?php
	//Local
	define('DB_NAME', 'sgc');
	define('DB_HOST', 'localhost');
	define('DB_USER', 'root');
	define('DB_PASS', '');
	define('DB_DEBUG', true);
	define('DB_DIE_ON_FAIL', true);
	
	/* Constant value */
	
	/* Default timezone */
	date_default_timezone_set('Asia/Riyadh');
	$ponumber = date("Ymdhms", strtotime("now"));
	$currentDate = date("d/m/Y H:i:s");
?>
