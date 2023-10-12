<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;
    
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
    
    
    
    $errors         = array();      // array to hold validation errors
    $data           = array();      // array to pass back data

// validate the variables ======================================================
// if any of these variables don't exist, add an error to our $errors array
if (empty($_POST['category']))
    $errors['category'] = 'Category is required.';
    
if (empty($_POST['contact_name']))
    $errors['contact_name'] = 'Name is required.';

if (empty($_POST['phone_number']))
    $errors['phone_number'] = 'Phone is required.';

if (empty($_POST['email']))
    $errors['email'] = 'Email is required.';

if (empty($_POST['company']))
    $errors['company'] = 'Company is required.';

if (empty($_POST['industry']))
    $errors['industry'] = 'Industry is required.';

// if (empty($_POST['msg']))
//     $errors['msg'] = 'Message is required.';
    
    
// return a response ===========================================================

// if there are any errors in our errors array, return a success boolean of false
if ( ! empty($errors)) {

    // if there are items in our errors array, return those errors
    $data['success'] = false;
    $data['errors']  = $errors;
} else {
    
    
    //Database connection
    $dbhost = 'localhost';
    $dbuser = 'n1068265_greenhcm';
    $dbpass = 'oeCPDm+fQEg?';
    $db = 'n1068265_enquiry';
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass , $db) or die($conn); 
    
    // if there are no errors process our form, then return a message

    // DO ALL YOUR FORM PROCESSING HERE
     $category = $_POST['category'];
     $name = $_POST['contact_name'];
     $phone = $_POST['phone_number'];
     $email = $_POST['email']; 
     $company = $_POST['company']; 
     $industry = $_POST['industry']; 
     $message = $_POST['msg'];
     $from_url = $_POST['url'];
     $from_utm = $_POST['utm'];
     $status = 'open';
     
     $dir = "temp/";
    
    $allowed = array('gif', 'png', 'jpg', 'pdf', 'xlsx', 'docx', 'doc', 'xls');
    $filename = $_FILES['file']['name'];
    $ext = pathinfo($filename, PATHINFO_EXTENSION);
    if (!in_array($ext, $allowed)) {
        //echo 'error';
        $file_url = '';
    }else{
        /* create new name file */
        if(file_exists($_FILES['file']['tmp_name']) || is_uploaded_file($_FILES['file']['tmp_name'])) {
            $string = preg_replace(array('/\s/', '/\.[\.]+/', '/[^\w_\.\-]/'), array('_', '.', ''), $_FILES["file"]["name"]);
            $source       = $_FILES["file"]["tmp_name"];
            $destination  = "temp/{$string}";
            $save_file = move_uploaded_file( $source, $destination );
            $file_url = 'https://greenhcm.com/temp/'.$string;
    
        }else{
            $file_url = '';
        }
    }

     $save = mysqli_query($conn, "insert into enquiry_contact (created_at, name, phone, email, company, industry, message, status) values (now(), '$name', '$phone', '$email', '$company', '$industry', '$message', '$status')"); 
     $content = "<b>New Inquiry Contact</b><br><p>Name : $name</p><br><p>Phone : $phone</p><br><p>Email : $email</p><br><p>Company : $company</p><br><p>Industry : $industry</p><br><p>Message : $message</p><br><p>Attachment : $file_url</p><br><span>utm: $from_utm | url: $from_url</span>";
    
    
    switch ($category) {
      case "IT":
        $email_target = 'it@greenhcm.com';
        $label = $category;
        break;
      case "Billing":
        $email_target = 'billing@greenhcm.com';
        $label = $category;
        break;
      case "General":
        $email_target = 'inquiry@greenhcm.com';
        $label = $category;
        break;
      case "Support":
        $email_target = 'support@greenhcm.com';
        $label = $category;
        break;    
      case "Bussiness":
        $email_target = 'marketing@greenhcm.com';
        $label = $category;
        break;  
      default:
        $email_target = 'support@greenhcm.com';
        $label = 'Support';
    }
    
     // SEND EMAIL NOTIFICATION
    $mail = new PHPMailer;
    $mail->isSMTP(); 
    $mail->SMTPDebug = false; 
    $mail->Host = "smtp.gmail.com"; 
    $mail->Port = "587"; // typically 587 
    $mail->SMTPSecure = 'tls'; // ssl is depracated
    $mail->SMTPAuth = true;
    $mail->Username = "info@greenhcm.com";
    $mail->Password = "Cghcm2688";
    $mail->SetFrom("info@greenhcm.com", "Notification");
    $mail->addAddress($email_target, $label);
    $mail->Subject = 'New Inquiry Contact To Follow Up';
    $mail->msgHTML($content); // remove if you do not want to send HTML email
    $mail->AltBody = 'HTML not supported';
    //$mail->addAttachment('docs/brochure.pdf'); //Attachment, can be skipped

    if(!$mail->Send()) {
      $data['message_email'] = "Error while sending Email.";
      var_dump($mail);
    } else {
      $data['message_email'] = "Email sent successfully";
    }
     
    if($save){
        // show a message of success and provide a true success variable
        $data['success'] = true;
        $data['message'] = 'Success!';

    }

}

// return all our data to an AJAX call
echo json_encode($data);