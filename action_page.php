<?php
require_once "includes/dbh.php";

$SQL="SELECT * FROM boyarone_users WHERE usrname = '".$_POST["uname"]."'";
$result = mysqli_query($conn, $SQL);
if (!$result) {
    header("location: home.php?error=wrong-username";
    exit();
}

if ($_POST["psw"] != mysqli_fetch_all($result, MYSQLI_ASSOC)[0]["password"]) {
    header("Location: home.php?error=wrong-login");
} else {
    $_SESSION["username"] = $_POST["uname"];
}
?>