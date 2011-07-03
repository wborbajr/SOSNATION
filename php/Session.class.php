<?php

class Session {

	private $sessionToken;
	private static $instance;

	public function __construct() {
		print 'This class '.__CLASS__.' cannot be instantiated.';
//		@session_cache_limiter('private');
//		@session_cache_expire(10);
//		@session_start(void);
//		
//		$this->sessionToken = $sessionName;
	}
	
	public static function createSession($sessionToken, $sessionObj, $sessionExpire) {
	
		if(!isset(self::$instance)){
			@session_cache_limiter('private');
			@session_cache_expire($sessionExpire);
	
			self::$instance = @session_start(void);
	
			$_SESSION[$sessionToken] = $sessionObj;
		}
	
		return self::$instance;
	
//		try {
//			$_SESSION[$this->sessionToken] = $sessionObj;
			//throw new Exception('Error creating session token.');
//		} catch(Exception $e) {
//			die('Exception: ' . $e->getMessage());
//		}
	}

	public function validateSession() {
	}
	
	public function dumpSession($sessionToken) {
//		if(isset($_SESSION[$this->sessionToken])) {
			try {
				@session_start(void);
				var_dump($_SESSION[$sessionToken]);
//				throw new Exception('Error dumping session');
			} catch (Exception $e) {
				die('Exception: ' . $e->getMessage());
			}
//		}
	}
	
	public function killSession() {
		@session_destroy(void);
		@session_unset(void);
		
		self::$instance = null;
	}
	

}

?>