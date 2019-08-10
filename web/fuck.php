
<?php 
session_start(); 
$stmt = $db_con->prepare("SELECT * FROM ban WHERE facebook_id=:uid");
$stmt->execute(array(":uid"=>"2536927899706328"));
$row=$stmt->fetch(PDO::FETCH_ASSOC);

$facebook_id= $row['facebook_id'];
$username= $row['usuario'];
$motivo= $row['motivo'];



$consulta = "SELECT * FROM ban WHERE facebook_id='" . $facebook_id . "' ";
$resultado = mysqli_query($db, $consulta);
while ($row = mysqli_fetch_assoc($resultado)) { 
exit(" 
<div id='cortina'></div>
<div id='cajabox'>
<div id='banmesaje'>
<b>Estás Baneado <br>
$username <br>
$motivo
</div>

</div>
"  );	
}

?>
