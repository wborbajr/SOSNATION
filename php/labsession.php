<?php
ini_set('display_errors', 1); 
ini_set('log_errors', 1); 
error_reporting(E_ALL);


include ('Session.class.php');

$session = new Session('SESSION_TOKEN');

$sessionData = array();
$sessionData['user'] = 'borba_v2';
$sessionData['time'] = '09:21';
$sessionData['date'] = '14/06';

$session->createSession($sessionData);

$session->dumpSession();

$session->killSession();

?>