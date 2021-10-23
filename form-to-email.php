<?php

if(isset($_POST['submit']))
{
 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];


 $email_from = '';
 $email_subject = "New Form submission";

 $to = 'messages@manuioan.com';
 mail($to,$email_subject,$message);


}
?>