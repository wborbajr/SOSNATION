<?php

class Session {

	private $sessionToken;
	public static $instance;

	public function __construct($sessionName) {
		@session_cache_limiter('private');
		@session_cache_expire(10);
		@session_start(void);
		
		$this->sessionToken = $sessionName;
	}
	
	public function createSession($sessionObj) {
		try {
			$_SESSION[$this->sessionToken] = $sessionObj;
			//throw new Exception('Error creating session token.');
		} catch(Exception $e) {
			die('Exception: ' . $e->getMessage());
		}
	}

	public function validateSession() {
	}
	
	public function dumpSession() {
//		if(isset($_SESSION[$this->sessionToken])) {
			try {
				var_dump($_SESSION[$this->sessionToken]);
				throw new Exception('Error dumping session');
			} catch (Exception $e) {
				die('Exception: ' . $e->getMessage());
			}
//		}
	}
	
	public function killSession() {
		@session_destroy(void);
		@session_unset(void);		
	}
	

}

?>