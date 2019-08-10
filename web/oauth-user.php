<?php
session_start(); 
include 'dbConfig.php';
$userInfo = json_decode($_POST['userinfo']);
if(!empty($userInfo)) {

  $host          = "localhost";
  $username      = "root";
  $password      = "";
  $database_name = "database-name";
  $table         = 'oauth_users';


  //Connect to the MySQL database
  $db = new mysqli($host, $username, $password, $database_name);
  if($db->connect_error){
    die("Failed to connect with MySQL database: " . $db->connect_error);
  }
  
  
  $qry_body = "	`oauth_provider` = 'facebook',
  `oauth_id`		 = '".$userInfo->id."',
  `name`           = '".$userInfo->name."',
  `first_name`     = '".$userInfo->first_name."', 
  `last_name`      = '".$userInfo->last_name."', 
  `email`          = '".$userInfo->email."', 
  `gender`         = '".$userInfo->gender."', 
  `locale`         = '".$userInfo->locale."', 
  `picture`        = '".$userInfo->picture->data->url."', 
  `link`           = '".$userInfo->link."', 
  `modified`       = '".date("Y-m-d H:i:s")."' ";

  
  $select_qry = "select * from `oauth_users` where `oauth_provider`='facebook' and `oauth_id`= '".$userInfo->id."'";
  $res = $db->query($select_qry);
  if($res->num_rows > 0) {
    //Update user details if it is already exists in the table

   $_SESSION['facebook_id'] = $userData->id; 
   $stmt = $db_con->prepare("SELECT * FROM oauth_users WHERE oauth_id=:uid");
   $stmt->execute(array(":uid"=>$_SESSION['facebook_id']));
   $row=$stmt->fetch(PDO::FETCH_ASSOC);

   $_SESSION['id'] =$row["id"];
   $_SESSION['first_name'] =$row["first_name"];

 } else {
    //Insert into table if user not exists in the table
  $qry = "insert into ".$table." set ".$qry_body.", `created`='".date("Y-m-d H:i:s")."'";		
  $_SESSION['facebook_id'] = $userData->id; 
  $stmt = $db_con->prepare("SELECT * FROM oauth_users WHERE oauth_id=:uid");
  $stmt->execute(array(":uid"=>$_SESSION['facebook_id']));
  $row=$stmt->fetch(PDO::FETCH_ASSOC);

  $_SESSION['id'] =$row["id"];
  $_SESSION['first_name'] =$row["first_name"];
}
$_SESSION['facebook_id'] = $userData->id; 
$stmt = $db_con->prepare("SELECT * FROM oauth_users WHERE oauth_id=:uid");
$stmt->execute(array(":uid"=>$_SESSION['facebook_id']));
$row=$stmt->fetch(PDO::FETCH_ASSOC);

$_SESSION['id'] =$row["id"];
$_SESSION['first_name'] =$row["first_name"];
$db->query($qry);
if($db->affected_rows == 1) {
    //If user's data is inserted or updated, then you can save user's information in session
    //and manipulate these data throught the whole website.
    //Your custom code
  echo "ok";
} else {
  echo "fail";
}
}
?>