<?php
session_start(); 
//Load the database configuration file
include 'dbConfig.php';

//Convert JSON data into PHP variable
$userData = json_decode($_POST['userData']);
if(!empty($userData)){

    //Check whether user data already exists in database
    $prevQuery = "SELECT * FROM users WHERE facebook_id = '".$userData->id."' ";

    $prevResult = $db->query($prevQuery);

    if($prevResult->num_rows > 0){ 

        //Update user data if already exists
        $_SESSION['facebook_id'] = $userData->id; 
        $stmt = $db_con->prepare("SELECT * FROM users WHERE facebook_id=:uid");
        $stmt->execute(array(":uid"=>$_SESSION['facebook_id']));
        $row=$stmt->fetch(PDO::FETCH_ASSOC);

        $_SESSION['id'] =$row["id"];
        $_SESSION['username'] =$row["username"];
        $_SESSION['rank'] =$row["rank"];    



    }else{

        //Insert user data
        $fbid = $userData->id;
        $query = "INSERT INTO users SET  
        facebook_id = '".$fbid."',
        name = '".$userData->first_name." ".$userData->last_name."', 
        username = '".$userData->first_name." ".$userData->last_name."',
        email = '".$userData->email."', 
        gender = '".$userData->gender."',
        rank = '0' ";
        $insert = $db->query($query);

    }

    session_start(); 
    $_SESSION['facebook_id'] = $userData->id; 
    $stmt = $db_con->prepare("SELECT * FROM users WHERE facebook_id=:uid");
    $stmt->execute(array(":uid"=>$_SESSION['facebook_id']));
    $row=$stmt->fetch(PDO::FETCH_ASSOC);

    $_SESSION['id'] =$row["id"];
    $_SESSION['username'] =$row["username"];
    $_SESSION['rank'] =$row["rank"];   
}
?>