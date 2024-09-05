//  FUNZIONE PER AGGIUNGE I PULSANTI

function aggiungiPulsanti() {

    //  PRENDO IL VALORE DALL INPUT DEL FORM

    let numeroMenu = document.getElementById("numero_pulsanti").value;
    let header_content = '';

    header_content += '<nav><ul>';

    //  CONTROLLO NUMERO INSERITO

    if (numeroMenu > 7) {
        header_content += "<p>Inserire un numero tra 1 e 7</p>";
    } else { // SPAMPO I PULSANTI SULL HTML
        for (let i = 0; i < numeroMenu; i++) {
            let posizioneAttule = (i + 1).toString();
            header_content += '<li><button onclick=mostraImmagine(' + posizioneAttule + ') class="pulsanti" id="pulsanti">immagine ' + posizioneAttule + '</button></li>';
        }
    }

    header_content += '</ul></nav>';

    document.getElementById("header_content").innerHTML = header_content;

}


//  FUNZIONE PER MOSTARERE L' IMMAGINE

function mostraImmagine(immagine) {

    let creazioneTagImmagine = '<img class="immagine_' + immagine + '" src="https://picsum.photos/seed/' + immagine + '/300/200" alt="">';
    document.getElementById("immagine_dinamica").innerHTML = creazioneTagImmagine;

}