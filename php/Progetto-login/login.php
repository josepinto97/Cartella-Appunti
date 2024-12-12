<?php

    $server_name = 'localhost';
    $server_database_name = 'root';
    $server_database_username = 'dati_utenti';
    $server_database_password = '';

    $conn = new mysqli($server_name, $server_database_name, $server_database_password, $server_database_username);    
    
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = $conn->prepare('SELECT * FROM `utenti` WHERE username = ? and password = ?');
    $sql->bind_param('ss', $username, $password);
    
    $sql->execute();
    $result = $sql->get_result();

    if ($result->num_rows > 0) {
        header("Location: avvio.html");
        exit;
    }else{
        header("Location: errore.html");
        exit;
    }

    $sql->close();
    $conn->close();

?>