Thanks, <?php
@extract($_POST);
$sub="Form feedback";
$name = stripslashes($name);
$email = stripslashes($email);
mail('callum@redevolution.com',$sub,"$name $email","From: $name <callum@redevolution.com");
echo stripslashes($name);
?> , we will drop you a line shortly.