<?php
if (isset($_GET["error"])) {
  if ($_GET["error"] == "wrong-login") {
    echo "try again";
  }
} // taking care of wrong login

?>

<form action="action_page.php" method="post">   <!-- fill in the form - send to action page-->
    <div style="margin:auto; text-align: center;">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required> <br> 
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
      <button type="submit">Login</button>
    </div>
  </form> 

  <!-- taken from w3schools for practice run-->