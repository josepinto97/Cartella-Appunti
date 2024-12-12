<?php

session_start();

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'dati_utenti';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die('CONNESSIONE FALLITA:' . $conn->connect_error);
}

try{

    $prodotto = $_POST['prodotto_modello'];
    $pagina_corrente = $_POST['pagina_corrente'];
    $utente = $_SESSION['username'];

    $sql = $conn->prepare('SELECT * FROM `carrello` WHERE username = ?');
    $sql->bind_param('s',$utente);
    $sql->execute();
    $result = $sql->get_result();

    if($result->num_rows > 0){
        $carrello_utente = $result->fetch_assoc();
        foreach ($carrello_utente as $colonna => $valore) {
            if(strpos($colonna, 'prodotto') === 0 && empty($valore) && $valore != $prodotto){
                    $query = "UPDATE `carrello` SET `$colonna` = ? WHERE `username` = ?";
                    $sql_carrello = $conn->prepare($query);
                    $sql_carrello->bind_param('ss',$prodotto,$utente);
                    if($sql_carrello->execute()){
                        header("Location: $pagina_corrente");
                        exit;
                    }else{
                        echo 'Errore nel carrello' . $conn->error;
                        exit;
                    }
            }
        }
    }else{
        echo 'UTENTE NON TROVATO';
        exit;
    }


}finally{

    $sql->close();
    $conn->close();

}

?>