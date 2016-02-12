<?php

    require_once("config.php");

    $bdd = new mysqli($bdd_server, $bdd_user, $bdd_password, $bdd_name);

    if(!$bdd)
    {
        echo('Erreur lors de la connexion à la base de donnee');
        exit;
    }
?>
