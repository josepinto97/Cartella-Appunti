<?php session_start(); ?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ElettroUsato</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>

    <header>

        <div class="container contenitore-header">
            <div>
                <a href="index.php">Logo</a>
            </div>
            <nav>
                <div class="menu-hamburger" id="menu_hamburger" onclick="gestione_menu_hamburger()"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg></div>
                <ul class="gap-5 menu" id="menu">
                    <li><a id="home" href="index.php">Home</a></li>
                    <li class="sotto-menu"><a id="prodotti" href="prodotti.php">Prodotti</a>
                        <ul class="lista-prodotti">
                            <li><a href="lavatrici.php">Lavatrici</a></li>
                            <li><a href="frigoriferi.php">Frigoriferi</a></li>
                            <li><a href="lavastoviglie.php">Lavastoviglie</a></li>
                        </ul>
                    </li><?php if (!isset($_SESSION['loggato']) || $_SESSION['loggato'] !== true) {
                            ?> <li class="pulsante-login" id="pulsante_login" onclick="apri_login()">Login</li> <?php
                                                                                                            } else {
                                                                                                                ?>
                        <li class="sotto-menu"><a href="utente.php" id="utente"><?php echo $_SESSION['username']; ?></a>
                            <ul class="lista-prodotti">
                                <li><a href="">Profilo</a></li>
                                <li><a href="carrello.php">Carrello</a></li>
                                <li><a href="logout.php">Logout</a></li>
                            </ul>
                        </li>
                    <?php
                                                                                                            }
                    ?>

                </ul>
            </nav>
        </div>
        <form id="form_login" class="form-login" method="POST" action="login.php">
            <label for="nome">Nome</label>
            <input name="nome" type="text" placeholder="Inserisci il tuo nome" required>
            <label for="password">Password</label>
            <input name="password" type="password" placeholder="Inserisci la tua password" required>
            <button type="submit">Invia</button>
            <a href="registrazione.php" class="pulsante-registrazione">Registrati</a>
        </form>
    </header>

    <main>