<?php
$time = date("Y/m/d H:i:s");
$query = $_GET['query'];

$timeAndQuery = $time.", ".$query;

$myfile = file_put_contents('queryLog/queryLogFile.txt', $timeAndQuery.PHP_EOL , FILE_APPEND | LOCK_EX);
?>