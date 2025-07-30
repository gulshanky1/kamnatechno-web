<?php
session_start();
if(isset($_REQUEST['action'])=='contact')
{

$name=$_REQUEST['username'];


$message=$_REQUEST['message'];

$mobile_no=$_REQUEST['mobile_no'];

$message="<table width='800'>
  
  <tr>
    <td>Name :</td>
    <td>".$name."</td>
  </tr>
 
  <tr>
    <td>Mobile No :</td>
    <td>".$mobile_no."</td>
  </tr>
  

   <tr>
    <td>Message :</td>
    <td>".$message."</td>
  </tr>
 </table>
";
   //$to = $email;
   $to = "info@kamnatechno.com";
   $subject = "contact info";
   $header = "From:info@kamnatechno.com\r\n";
   $header .= "MIME-Version: 1.0\r\n";
   $header .= "Content-type: text/html\r\n";

   $retval = mail ($to,$subject,$message,$header);
   if($retval)  
   {
	   echo '1'; exit; 
   }
   else
   {
      echo '2'; exit; 
   }


}





?>