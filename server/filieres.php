<?php
    require_once("connect.php");
    
    $req = $bdd->query("SELECT * FROM filiere");

    $myArray = array();
    while($row = $req->fetch_array(MYSQL_ASSOC)) 
    {
        $myArray[] = $row;
    }
    //print_r($myArray);
    echo json_encode($myArray);
?>
