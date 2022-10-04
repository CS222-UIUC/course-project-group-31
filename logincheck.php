<?php 
if (isset($_SESSION['login_status']) && $_SESSION['login_status'] == false) {
    session_unset();
    echo "<div class=\"col-md-12\"> <div class=\"update-nag\"><div class=\"update-text\">The username or password you entered is incorrect.</div> </div></div>\n";
}
?>
            </div>
         </div>
      </div>
	  
      <?php 
if (isset($_POST['user']) && isset($_POST['pass'])) {
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $login = login($user, $pass);
    if (loginCheck($login) == true && isAdmin($login) == true) {
        $_SESSION["login_user"] = $user;
        $_SESSION["login_status"] = true;
        header('Location: index');
        exit;
    } else {
        $_SESSION["login_status"] = false;
        header('Location: ?');
        exit;
    }
}
?>
		 
      <script src="js/jquery-1.11.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script>