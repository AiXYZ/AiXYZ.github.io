<?php 
include_once("../../inc/config.php");
include_once("../../inc/functions.php");


require_once('../../barcodegen/class/BCGFontFile.php');
require_once('../../barcodegen/class/BCGColor.php');
require_once('../../barcodegen/class/BCGDrawing.php');
require_once('../../barcodegen/class/BCGLabel.php');

require_once('../../barcodegen/class/BCGcode128.barcode.php');

db_connect();

$font = new BCGFontFile('../../barcodegen/font/Arial.ttf', 1);
$colorFront = new BCGColor(0, 0, 0);
$colorBack = new BCGColor(255, 255, 255);
// $label = new BCGLabel('GEn');


// Barcode Part
$code = new BCGcode128();
$code->setScale(2);
// $code->addLabel($label);
//$code->setThickness(30);
$code->setThickness(20);
$code->setForegroundColor($colorFront);
$code->setBackgroundColor($colorBack);
$code->setFont($font);
$code->setStart(NULL);
$code->setTilde(true);
$code->parse('888888888');
//$code->parse($_GET['id']);

// Drawing Part
$drawing = new BCGDrawing('', $colorBack);
$drawing->setBarcode($code);
$drawing->draw();

header('Content-Type: image/png');

$drawing->finish(BCGDrawing::IMG_FORMAT_PNG);



?>
