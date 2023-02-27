<?php

$cookieName = "loggedIn";
$cookieValue = "loginCookie";
setcookie($cookieName, "", time() - 3600, "/");
setcookie("userRole", "", time() - 3600, "/");
header('Location: /');