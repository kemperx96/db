<?php
session_start(); 
require_once("dbConfig.php");
require_once 'bd.php';
$C =  new BD();
$L = $C->conn();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="css/globaleccb.css" />
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <script src='//cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.4/socket.io.min.js'></script>
  <script type="text/javascript" src="js/game.js"></script>
  <script type="text/javascript">
   window.fbAsyncInit = function() {

    FB.init({
      appId      : '339090993437280', 
      cookie     : true,  
      xfbml      : true,  
      version    : 'v3.0' 
    });
    
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  function statusChangeCallback(response) {

   
    if (response.status === 'connected') {
      
      fbLogin()
    } else if (response.status === 'not_authorized') {
      
     alert("not_authorized")
   } else {

     
   }
 }

 function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function logout(){
  FB.logout(function(response){
    FB.Auth.setAuthResponse(null, 'unknown');
    location.href ="logout.php";
  });
}

function fbLogin() {
  FB.login(function(response) {
    if (response.authResponse) {
      getFbUserData();
    } else {
     console.log('User cancelled login or did not fully authorize.');
   }
 });

}

function getFbUserData(){
  FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
    function (response) {
      
      //document.getElementById('AlertBoxContent').innerHTML = 'Cargando su cuenta...';
     //$("#mainxxxx").hide();
     setTimeout('document.location.reload()');
     saveUserData(response);
   });
  function saveUserData(userData){
    $.post('userData.php', {userData: JSON.stringify(userData)}, function(data){ return true; });

  }
}
</script>
</head>
<body>

  <div style="visibility: hidden;" id="rankxxx"><?php echo $row['rank']; ?> </div>
  <div id="main">
    <!--<input id="volumeslider" type="range" min="0" max="100" value="<?php echo $row['vol']; ?>" step="1">-->

    <div id="game" class="game_layer">

      <div id="game_servers_box" class="main_layer" >
        <!-- server -->
        <div id="prev"></div>
        <div id="load" class="waitx"></div>
        <!--<div id="reup"> presionar </div>-->
        <div id="friend">

          <div id="s1">
            <div class="server main_layer" >
              <div class="server_title sb">1 High Ranks</div>
              <div class="server_desc sb">Avatar Stats Off</div>
            </div>
          </div>

          <div id="s2">
            <div class="server main_layer" >
              <div class="server_title sb">2 Beginners</div>
              <div class="server_desc sb">Avatar Stats Off</div>
            </div>
          </div>

          <div id="s3">
            <div class="server main_layer" >
              <div class="server_title sb">3 All</div>
              <div class="server_desc sb">Avatar ON / OFF</div>
            </div>  
          </div>

          <div id="s4">
            <div class="serveroff main_layer" >
              <div class="server_title sb">4 Only GM</div>
              <div class="server_desc sb">Administrators</div>
            </div>  
          </div>

        </div>
        <!-- server -->
        <div id="buttomx">
          
          <div id="viewall" class="button_viewallx main_layer bt"></div>
          <div id="friends" class="button_friends main_layer bt"> </div>

        </div>

        <div id="game_main_buttons1" class="button_exit main_layer"></div>
        <div id="game_main_buttons2" class="button_buddy main_layer"></div>
        <div id="game_main_buttons3" class="button_serversoff main_layer"></div>
      </div>

    </div>

  </div>
  <?php 
  if (empty($_SESSION["facebook_id"])){ ?>




  <div id="mainxxxx">
    <div id="cortina"></div>

    <div id="LoginWindowBG" class="main_layer">
      <div id="AlertBoxTitle" class="sb">Login/New Account</div>
      <div id="fblogin" >
       <div class="fb-login-button"  data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true" onlogin="checkLoginState();"></div>
     </div>
     <div id="AlertBoxContent" class="sb"></div>

   </div>




 </div>




 <?php }else{
  $stmt = $db_con->prepare("SELECT * FROM users WHERE facebook_id=:uid");
  $stmt->execute(array(":uid"=>$_SESSION['facebook_id']));
  $row=$stmt->fetch(PDO::FETCH_ASSOC);
  ?>

  <?php include("fuck.php");?>


  <?php
}
?>
</body>
</html>




