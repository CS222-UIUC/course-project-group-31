<?php

if ($_POST["uname"] != "rohan" || $_POST["psw"] != "test123") {
    header("Location: home.html?error=wrong-login");
} else {
    echo "successful login";
}




?>