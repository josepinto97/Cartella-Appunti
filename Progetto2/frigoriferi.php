<?php

include('header.php')

?>


<section class="container contenitore_prodotti">
    <?php

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'dati_utenti';

    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        die('CONNESSIONE FALLITA: ' . $conn->connect_error);
    }

    $sql = $conn->prepare('SELECT * FROM frigoriferi');
    $sql->execute();
    $result = $sql->get_result();

    if ($result->num_rows > 0) {
        while ($prodotto = $result->fetch_assoc()) {
    ?>
            <div class="prodotti col-4">
                <div><?php echo $prodotto['nome']; ?></div>
                <div>
                    <img src="img/frigoriferi.webp" alt="">
                </div>
                <p><?php echo $prodotto['descrizione'] ?></p>
                <?php
                if (isset($_SESSION['loggato'])) {
                ?>
                    <form action="aggungi_carrello.php" method="POST">
                        <input type="hidden" name="prodotto_modello" value="<?php echo $prodotto['modello']; ?>">
                        <input type="hidden" name='pagina_corrente' value="<?php echo $_SERVER['REQUEST_URI']; ?>">
                        <button class="testo_prodotti pulsate-agguingi-carrello" type="submit">Aggiungi al carrello</button>
                    </form>
                <?php
                }
                ?>
            </div>
    <?php
        }
    } else {
        echo 'Nessun dato trovato';
    }

    $sql->close();
    $conn->close();

    ?>
</section>


<?php

include('footer.php')

?>