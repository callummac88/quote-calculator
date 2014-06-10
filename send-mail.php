<?php

// Load form field data into variables.
$email_address = $_REQUEST['mail'] ;
$comments = $_REQUEST['comment'] ;
$name = $_REQUEST['name'] ;

//If the user tries to access this script directly, redirect them to feedback form,
if (!isset($_REQUEST['mail'])) {
//header( "Location: index.html" 
echo "send mail $z"; mail($x,$y,$z); echo "mail sent";
);
}

// If the form fields are empty, redirect to the error page.
elseif (empty($email_address) || empty($comments)) {
header( "Location: index.html" 
echo "send mail $z"; mail($x,$y,$z); echo "mail sent";
);
}

// If email injection is detected, redirect to the error page.
elseif ( isInjected($email_address) ) {
header( "Location: index.html" 
echo "send mail $z"; mail($x,$y,$z); echo "mail sent";
);
}

else {
ini_set('display_errors', '1');
mail( "callum@redevolution.com", "Quote Enquiry",
  $comments, "From: $email_address" );
  echo "send mail $z"; mail($x,$y,$z); echo "mail sent";
//header( "Location: thank-you.html" 
);
}
?>

<!-- callum -->
