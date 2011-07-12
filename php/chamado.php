<?php
@include        ("include/nocache.inc.php");
@require_once   ("include/debug.inc.php");

$action = $_REQUEST['action'];

switch($action) {
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
	$cliente 		= $_REQUEST['cliente'];
	$fone   			= $_REQUEST['fone'];
	$veiculo 		= $_REQUEST['veiculo'];
	$cor   			= $_REQUEST['cor'];
	$placa 			= $_REQUEST['placa'];
	$local   		= $_REQUEST['local'];
	$destino 		= $_REQUEST['destino'];
	$valor   		= $_REQUEST['valor'];
	$kminicial 		= $_REQUEST['kminicial'];
	$kmfinal  		= $_REQUEST['kmfinal'];
	$pedagio 		= $_REQUEST['pedagio'];
	$chklist   		= $_REQUEST['chklist'];
	$assistencia 	= $_REQUEST['assistencia'];
	$nrpedido 		= $_REQUEST['nrpedido'];
	$hacionamento  = $_REQUEST['hacionamento'];
	$hconclusao   	= $_REQUEST['hconclusao'];
	$folha 			= $_REQUEST['folha'];
	$servico   		= $_REQUEST['servico'];
	$motorista 		= $_REQUEST['motorista'];
	$frota   		= $_REQUEST['frota'];
	$observacao 	= $_REQUEST['observacao'];
	$atendente		= $_REQUEST['atendente'];

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
	$sql  = "INSERT INTO `serviceorder` (cliente, fone, veiculo, cor, placa, local, ";
	$sql .= "destino, valor, kminicial, kmfinal, pedagio, chklist, nrpedido, ";
	$sql .= "hacionamento, hconclusao, folha, atendente, motorista, frota, observacao, ip, data, hora, assistencia) ";
	$sql .= " VALUES ";
	$sql .= " ('$cliente','$fone', '$veiculo', '$cor', '$placa', '$local', '$destino', ";
	$sql .= "'$valor', '$kminicial', '$kmfinal', '$pedagio', '$chklist', '$nrpedido', ";
	$sql .= "'$hacionamento', '$hconclusao', '$folha', '$atendente', '$motorista', '$frota', '$observacao', '$ip', '$data', '$hora', '$assistencia') ";
	
	
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
		$sql  = "SELECT * FROM `serviceorder` WHERE nrpedido LIKE LOWER('%$nrpedido%')";
	} else {
		$sql  = "SELECT * FROM `serviceorder` ORDER BY assistencia, nrpedido";
	}

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


?>