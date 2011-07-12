<?php
@include        ("include/nocache.inc.php");
@require_once   ("include/debug.inc.php");

$action = $_REQUEST['action'];

switch($action) {
	case 'getall':
		getAll();
		break;
	case 'save':
		doSave();
		break;
	case 'search':
		doSearch();
		break;
	default:
}


function doSave(){

	@require_once ("include/functions.inc.php");
	@require_once ("include/config.inc.php");

	$functions = new Functions();

	// recover parameter
	$nome 			= $_REQUEST['nome'];

	$ip		=	$_SERVER['REMOTE_ADDR'];
	$data	= 	date('Y-m-d');
	$hora	= 	date('H:i:s');

	// $isUsuario 	= $functions->isNullOrEmpty($usuario);
	// $isSenha 	= $functions->isNullOrEmpty($senha);

	// if(($isUsuario) || ($isSenha)) {
	// 	echo json_encode(array('status'=>100,utf8_encode('msg')=>'Usuário ou Senha sem conteúdo.'));
	// 	exit;
	// }

	// validate Login
	$sql  = "INSERT INTO `assistencia` (nome) ";
	$sql .= " VALUES ";
	$sql .= " ('$nome') ";
	
	
	echo $sql;
	
	// open connection to MySQL-server
	$DBconn = mysql_connect($DBhost,$DBuser,$DBpass);
	// select active database
	mysql_select_db($DBname, $DBconn);
	// use SQL query
	$result = mysql_query($sql, $DBconn);
	
	if(mysql_affected_rows() == 1) {
		echo json_encode(
			array('status' => 0)
		); 
	} else {
		echo json_encode(array(
			'status' => 200,
			utf8_encode('msg')	=> 'Erro ao gravar no banco e dados.'
		));
		exit;
		
	}

}


function getAll(){
	@require_once ("include/functions.inc.php");
	@require_once ("include/config.inc.php");
	
	$functions = new Functions();
	
	$ipaddress	=	$_SERVER['REMOTE_ADDR'];
	$date		= 	date('d/m/Y');
	$time		= 	date('H:i:s');
	
	// validate Login
	$sql  = "SELECT * FROM `assistencia` ";
	
	// open connection to MySQL-server
	$DBconn = mysql_connect($DBhost,$DBuser,$DBpass);
	
	// select active database
	mysql_select_db($DBname, $DBconn);
	
	// use SQL query
	$result = mysql_query($sql, $DBconn);
	
	$return = array();
	while ($dados = mysql_fetch_assoc($result)) {
		array_push($return, $dados);
	}
	
	echo json_encode($return);

}

function doSearch(){
	@require_once ("include/functions.inc.php");
	@require_once ("include/config.inc.php");
	
	$functions = new Functions();
	
	$ipaddress	=	$_SERVER['REMOTE_ADDR'];
	$date		= 	date('d/m/Y');
	$time		= 	date('H:i:s');
	
	// recover parameter
	$nome = $_REQUEST['nome'];
	
	if(isset($nome)){
		$sql  = "SELECT * FROM `assistencia` WHERE LOWER(nome) LIKE LOWER('%$nome%')";
	} else {
		$sql  = "SELECT * FROM `assistencia`";
	}

	// open connection to MySQL-server
	$DBconn = mysql_connect($DBhost,$DBuser,$DBpass);
	
	// select active database
	mysql_select_db($DBname, $DBconn);
	
	// use SQL query
	$result = mysql_query($sql, $DBconn);
	
	/*
	while ($dados = mysql_fetch_array($result)) {
		//$return[] = array('assistencias' => $dados);
		//$return[] = array($dados);
		$return[] = $dados;
	}
	*/
	
	$return = array();
	while ($dados = mysql_fetch_assoc($result)) {
		array_push($return, $dados);
	}

	echo json_encode($return);

}

?>