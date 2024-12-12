<?php

include('header.php')

?>

<?php

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'dati_utenti';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die('CONNESSIONE FALLITA:' . $conn->connect_error);
}

$query = "
    SELECT frigoriferi.*
    FROM carrello
    INNER JOIN frigoriferi
    ON frigoriferi.modello IN (carrello.prodotto_1, carrello.prodotto_2, carrello.prodotto_3, carrello.prodotto_4, carrello.prodotto_5, carrello.prodotto_6, carrello.prodotto_7)
    WHERE carrello.username = ?
";

$sql = $conn->prepare($query);
$sql->bind_param('s', $_SESSION['username']);
$sql->execute();
$result = $sql->get_result();

if ($result->num_rows > 0) {
    while ($carrello = $result->fetch_assoc()) {
?>

        <section>
            <div>
                <p><?php echo $_SESSION['username']; ?>, prodotti nel carrello:</p>
                <div><?php echo $carrello['nome']; ?></div>
            </div>
        </section>

<?php
    }
}
?>

<?php

include('footer.php')

?>