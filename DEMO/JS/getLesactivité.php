<?php
include 'cnx.php';

$sql = $cnx->prepare("select code, intitule from formation where numero activite = ");
$sql->execute();
<select id='lstFormation'>
echo "<'>";
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne['numero']."'>".$ligne['libelle']."</option>"
}
echo "</select>";
?>