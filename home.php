<?php
if (isset($_GET["error"])) {
  if ($_GET["error"] == "wrong-login") {
    echo "try again";
  }
}

?>

<form action="action_page.php" method="post">  
    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
      <button type="submit">Login</button>
    </div>
  </form> 

  <!-- taken from w3schools for practice run-->