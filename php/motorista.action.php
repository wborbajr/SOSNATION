<?php
@include        ("include/nocache.inc.php");
@require_once   ("include/debug.inc.php");

getAll();

function getAll(){

@require_once ("include/functions.inc.php");
@require_once ("include/config.inc.php");

$functions = new Functions();

$ipaddress	=	$_SERVER['REMOTE_ADDR'];
$date		= 	date('d/m/Y');
$time		= 	date('H:i:s');

// validate Login
$sql  = "SELECT * FROM `motorista` ";

// open connection to MySQL-server
$DBconn = mysql_connect($DBhost,$DBuser,$DBpass);

// select active database
mysql_select_db($DBname, $DBconn);

// use SQL query
$result = mysql_query($sql, $DBconn);

$return = array();
while ($dados = mysql_fetch_array($result)) {
	$return[] = $dados;
}

echo json_encode($return);

}

?>