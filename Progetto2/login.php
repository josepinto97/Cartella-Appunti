<?php

session_start();

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'dati_utenti';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die('CONNESSIONE FALLITA: ' . $conn->connect_error);
}
try {
    $username = $_POST['nome'];
    $password = $_POST['password'];

    $sql = $conn->prepare('SELECT * FROM `utenti` WHERE username = ? AND password = ?');
    $sql->bind_param('ss', $username, $password);

    $sql->execute();
    $result = $sql->get_result();

    if ($result->num_rows > 0) {
        $_SESSION['loggato'] = true;
        $_SESSION['username'] = $username;
        header("Location: index.php");
        exit;
    } else {
        header("Location: errore_dati.php");
        exit;
    }
} finally {
    $sql->close();
    $conn->close();
}
