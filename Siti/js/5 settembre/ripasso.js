//  FUNZIONE PER GENERARE I PULSANTI

function generaBottoni() {

    let numero_colonne = document.getElementById("numero_colonne").value;
    let contenuto = '';

    // CONTROLLO IL NUMERO INSERITO

    if (numero_colonne > 7) {
        contenuto += '<p>Inserisci un valore tra 1 e 7.</p>'
    } else {//  STAMPO I PULSANTI SULL HTML
        for (let i = 0; i < numero_colonne; i++) {
            let numero_pulsante = (i + 1).toString();
            contenuto += '<li><button onclick="genera_immagine(' + numero_pulsante + ')">pulsante ' + numero_pulsante + '</button></li>';
        }
    }

    document.getElementById("menu_dinamico").innerHTML = contenuto;

}

//  FUNZIONE PER STAMPARE LE IMMAGINI

function genera_immagine(numero_immagine) {

    let creazione_immagine = '<img class="immagine_' + numero_immagine + '" src="https://picsum.photos/seed/' + numero_immagine + '/300/200" alt="">';
    document.getElementById("immagine_dinamica").innerHTML = creazione_immagine;

}