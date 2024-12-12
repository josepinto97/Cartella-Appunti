<?php

session_start();

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'dati_utenti';
$database_carrello = 'carrello';

$conn = new mysqli($host, $username, $password, $database);
$conn_carrello = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die('CONNESSIONE FALLITA: ' . $conn->connect_error);
}

if ($conn_carrello->connect_error) {
    die('CONNESSIONE FALLITA: ' . $conn->connect_error);
}

try {
    $nome = $_POST['nome'];
    $cognome = $_POST['cognome'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $controllo_sql = $conn->prepare('SELECT * FROM `utenti` WHERE username = ? and email = ?');
    $controllo_sql->bind_param('ss', $username, $email);

    $controllo_sql->execute();
    $controllo_risultati = $controllo_sql->get_result();

    if ($controllo_risultati->num_rows > 0) {
        header("Location: errore_dati_esistenti.php");
        exit;
    }

    $sql = $conn->prepare('INSERT INTO `utenti`(`username`, `password`, `email`, `nome`, `cognome`) VALUES (?,?,?,?,?)');
    $sql->bind_param('sssss', $username, $password, $email, $nome, $cognome);

    if ($sql->execute()) {
        $_SESSION['loggato'] = true;
        $_SESSION['username'] = $username;
        $sql_carrello = $conn_carrello->prepare("INSERT INTO `carrello` (`username`) values (?)");
        $sql_carrello->bind_param('s', $username);
        $sql_carrello->execute();
        header("Location: registrazione_avvenuta.php");
        exit;
    } else {
        echo ('Errore durante la registrazione: ' . $conn->error);
        exit;
    }
} finally {
    if (isset($controllo_sql)) $controllo_sql->close();
    if (isset($sql)) $sql->close();
    $conn->close();
}
