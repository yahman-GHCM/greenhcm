<?php
    ini_set( 'display_errors', 1 );   
    error_reporting( E_ALL );    
    $from = "testing@greenhcm.com";    
    $to = "raihan@greenhcm.com";    
    $subject = "Checking PHP mail";    
    $message = "PHP mail berjalan dengan baik";   
    $headers = "From:" . $from;    
    mail($to,$subject,$message, $headers);    
    echo "Pesan email sudah terkirim.";
?>