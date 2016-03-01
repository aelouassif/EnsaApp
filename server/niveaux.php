<?php
    require_once("connect.php");
    if(isset($_GET['id']) && is_numeric($_GET['id']) && $_GET['id'] > 0)
        $req = $bdd->query("SELECT * FROM niveau WHERE filiereId=".$_GET['id']);
    else
        $req = $bdd->query("SELECT * FROM niveau");

    $myArray = array();
    while($row = $req->fetch_array(MYSQL_ASSOC)) 
    {
        $myArray[] = $row;
    }
    //print_r($myArray);
    echo json_encode($myArray);
?>
