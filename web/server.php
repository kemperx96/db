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
	<link rel="stylesheet" href="css/style.css" />
<!--   <link rel="stylesheet" href="css/icons.css" /> -->
  	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script type="text/javascript" src="js/game.js"></script>
	<script type="text/javascript" src="js/chat.js"></script>
</head>
<body>
  <?php include("fuck.php");?>
<?php if (empty($_SESSION["facebook_id"])){ 
header('Location: index');
}else{
$stmt = $db_con->prepare("SELECT * FROM users WHERE facebook_id=:uid");
$stmt->execute(array(":uid"=>$_SESSION['facebook_id']));
$row=$stmt->fetch(PDO::FETCH_ASSOC);
?>


<div id="cashfree" class="main_layer"></div>
<div id='janelas' class="janelas"></div>
<div id="gamex" class="game_layer">
<div id="game_servers_boxl" class="main_layer" >

<div id="rankxxx"><?php echo $row['rank']; ?></div>
<div class="rank rank<?php echo $row['rank']; ?> main_layer"></div>
<div id="genderxxx"><?php echo $row['gender']; ?></div>
<div id="guildxx" class="guild sb"><?php echo $row['guild']; ?></div>
<div id="namexxx" class="name sb"><?php echo $row['username']; ?></div>
	<div id="chat" class="history"></div>
	<form id="message-form" autocomplete="off"><input type="text" name="sendie" id="message" class="blackShadow2" maxlength = '78'></form>


<div id="chatbuddy" class="main_layer">
<div id="listadox">
<div id="amigosx" class="viewport">
<?php 
$consulta = "SELECT * FROM users  ";
$resultado = mysqli_query($db, $consulta);
while ($row = mysqli_fetch_assoc($resultado)) { 
?>
<div id="amigosls">
<div  class="useritem">
<a class="comecar"  id="<?=$row['id']; ?>" >
<div id="tt2x" class="rankx rank<?=$row['rank']; ?>  main_layer "></div>
<div id="tt3x" class="sb"><?=$row['guild']; ?></div>
<div id="tt4x" class="sb"><?=$row['username']; ?></div>
</a>
</div>
</div>
<?php  
}
?>
</div>
</div>	
</div> 

<div id="listadox">
  <div id="amigosx" class="viewport">
    <div id="amigosls">
        <div id="userse"></div>
    </div>
  </div>
</div>  

       <div id="support-chat">
            <div id="logs" class="viewport">
            	<div id="amigosls">
                	<div id="users"></div>
            	</div>
            </div>
 
        </div>
   

<div id="reloud"><div id="game_main_buttonsl" class="button_exitl main_layer"></div></div>
<div id="game_main_buttonsl" class="button_buddyl main_layer"></div>
<div id="game_main_buttonsl" class="rankingoff main_layer"></div>

<div id="game_main_buttonsl" class="avatar main_layer"></div>
<div id="game_main_buttonsl" class="create main_layer"></div>
<div id="game_main_buttonsl" class="joinoff main_layer"></div>


<?php
}
?>

</body>
</html>