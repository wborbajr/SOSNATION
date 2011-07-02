<?php
@session_start();

$retcode = "000";

if(!isset($_SESSION["SESSION_TOKEN"])) {
	$retcode = "999";

}

echo json_encode(array("status" => $retcode));

?>