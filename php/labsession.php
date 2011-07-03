<?php
ini_set('display_errors', 1); 
ini_set('log_errors', 1); 
error_reporting(E_ALL);


include ('Session.class.php');

//$session = new Session('SESSION_TOKEN');


$sessionData = array();
$sessionData['user'] = 'borba_v2';
$sessionData['time'] = '09:21';
$sessionData['date'] = '14/06';
$session = Session::createSession('SESSION_TOKEN',$sessionData);

echo " xoxox:" . $session;

//
//$session->createSession($sessionData);
//
Session::dumpSession('SESSION_TOKEN');


$sessionData = array();
$sessionData['user'] = 'borba_v3';
$sessionData['time'] = '09:21';
$sessionData['date'] = '14/06';
$session = Session::createSession('SESSION_TOKEN',$sessionData);


//
Session::killSession();

$sessionData = array();
$sessionData['user'] = 'borba_v3';
$sessionData['time'] = '09:21';
$sessionData['date'] = '14/06';
$session = Session::createSession('SESSION_TOKEN',$sessionData);



?>