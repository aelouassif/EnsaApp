<?php
    $bdd = new mysqli("localhost", "root", "", "ensaApp");

    $req = $bdd->query("SELECT * FROM filiere");

    $myArray = array();
    while($row = $req->fetch_array(MYSQL_ASSOC)) 
    {
        $myArray[] = $row;
    }
    //print_r($myArray);
    echo json_encode($myArray);
?>
