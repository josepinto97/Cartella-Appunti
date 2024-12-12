<?php

include('header.php')

?>

<form method="POST" action="registrazione_script.php">
    <label for="nome">Nome</label>
    <input name="nome" type="text" required>
    <label for="cognome">Cognome</label>
    <input name="cognome" type="text" required>
    <label for="username">Username</label>
    <input name="username" type="text" required>
    <label for="email">Email</label>
    <input name="email" type="text" required>
    <label for="password">Password</label>
    <input name="password" type="password" required>
    <button type="submit">Registrazione</button>
</form>


<?php

include('footer.php')

?>