//VARIABILI GLOBALI

let array_immagini = [
    { nome: 'attrezzi', descrizione: 'attrezzi d\' epoca su un banco da lavoro' },
    { nome: 'bici', descrizione: 'bici appoggiata su una casa di legno' },
    { nome: 'cavi', descrizione: 'cavi elettrici pronti per essere stesi' }
];
let numero_righe = 6;
let numero_colonne = 4;



//FUNZIONE PER GENERARE LE IMMAGINI

function genera_immagini() {


    stampa_immagini(array_immagini, true);


}



function stampa_immagini(array_immagini, mostra) {


    let contenuto_img_html = '';
    let contenuto_pulsanti_html = '';

    //genero per n volte l html delle immagini con i nomi e le descrizioni se mostra e true
    if (mostra) {
        for (let i = 0; i < array_immagini.length; i++) {
            contenuto_img_html += '<div class="immagine"><img src="img/' + array_immagini[i].nome + '.jpg" alt="' + array_immagini[i].descrizione + '"><p class="descrizione-img">' + array_immagini[i].descrizione + '</p></div>';
        }
    }

    document.getElementById("contenuto_dinamico").innerHTML = contenuto_img_html;

    //genero i due pulsanti per gestire la visualizzazione delle immagini
    contenuto_pulsanti_html += '<button id="pulsante_mostra" onclick="mostra_immagini()">Show Images</button> <button id="pulsante_nascondi" onclick="nascondi_immagini()">Hide Images</button>'
    document.getElementById("visualizzazione_impostazioni").innerHTML = contenuto_pulsanti_html;

    //gestico visibilita pulsanti
    document.getElementById("pulsante_mostra").disabled = true;
    document.getElementById("pulsante_immagini").disabled = true;
    document.getElementById("pulsante_tabella").disabled = false;


}



function mostra_immagini() {


    stampa_immagini(array_immagini, true);


}



function nascondi_immagini() {


    stampa_immagini(array_immagini, false);

    //gestico visibilita pulsanti
    document.getElementById("pulsante_mostra").disabled = false;
    document.getElementById("pulsante_nascondi").disabled = true;


}



//FUNZIONE PER GENERARE LA TABELLA

function genera_tabella() {


    stampa_tabella(numero_colonne, numero_righe);


}



function stampa_tabella(numero_colonne, numero_righe) {


    contenuto_tabella_html = '';
    let contenuto_pulsanti_html = '';

    //genero l html della tabella
    contenuto_tabella_html += '<table border="1"><tr>';

    //genero nome delle colonne
    for (let i = 0; i < numero_colonne; i++) {
        contenuto_tabella_html += '<th>H ' + (i + 1).toString() + '</th>'
    }

    contenuto_tabella_html += '</tr>';

    //genero righe della tabella e assegno a ogni casella un id specifico

    for (let i = 0; i < numero_righe; i++) {
        contenuto_tabella_html += '<tr>'
        for (let j = 0; j < numero_colonne; j++) {
            contenuto_tabella_html += '<td id="colonna-' + (j + 1).toString() + '_riga-' + (i + 1).toString() + '"></td>';
        }
        contenuto_tabella_html += '</tr>'
    }

    contenuto_tabella_html += '</table>'


    document.getElementById("contenuto_dinamico").innerHTML = contenuto_tabella_html;

    //genero pulasnti per gestire il riempimento della tabella
    contenuto_pulsanti_html += '<button id="pulsante_riempi" onclick="rimepi_tabella()">Riempi Tabella</button> <button id="pulsante_svuota" onclick="svuota_tabella()">Svuota Tabella</button>'
    document.getElementById("visualizzazione_impostazioni").innerHTML = contenuto_pulsanti_html;


    //gestico visibilita pulsanti
    document.getElementById("pulsante_immagini").disabled = false;
    document.getElementById("pulsante_tabella").disabled = true;
    document.getElementById("pulsante_svuota").disabled = true;

}



function rimepi_tabella() {


    let contenuto_caselle_tabella_html = 'PIENA';

    for (let i = 0; i < numero_colonne; i++) {
        for (let j = 0; j < numero_righe; j++) {
            document.getElementById('colonna-' + (i + 1).toString() + '_riga-' + (j + 1).toString() + '').innerHTML = contenuto_caselle_tabella_html;
        }
    }

    //gestico visibilita pulsanti
    document.getElementById("pulsante_svuota").disabled = false;
    document.getElementById("pulsante_riempi").disabled = true;


}



function svuota_tabella() {


    let contenuto_caselle_tabella_html = '';

    for (let i = 0; i < numero_colonne; i++) {
        for (let j = 0; j < numero_righe; j++) {
            document.getElementById('colonna-' + (i + 1).toString() + '_riga-' + (j + 1).toString() + '').innerHTML = contenuto_caselle_tabella_html;
        }
    }

    //gestico visibilita pulsanti
    document.getElementById("pulsante_riempi").disabled = false;
    document.getElementById("pulsante_svuota").disabled = true;


}