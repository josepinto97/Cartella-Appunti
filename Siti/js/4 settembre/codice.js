//FUNZIONE PER AGGIUNGE I PULSANTI

function aggiungiPulsanti() {


    let numeroMenu = document.getElementById("numero_pulsanti").value;
    let header_content = '';

    header_content += '<nav><ul>';

    for (let i = 0; i < numeroMenu; i++) {
        let posizioneAttule = (i + 1).toString();
        header_content += '<li><button onclick=mostraImmagine(' + posizioneAttule + ') class="pulsanti" id="pulsanti">immagine ' + posizioneAttule + '</button></li>';
    }

    header_content += '</nav></ul>';

    document.getElementById("header_content").innerHTML = header_content;


}


//  FUNZIONE PER MOSTARERE L' IMMAGINE

function mostraImmagine(immagine) {


    let creazioneTagImmagine = '<img class="immagine_' + immagine + '" src="https://picsum.photos/seed/' + immagine + '/300/200" alt="">';
    document.getElementById("immagine_dinamica").innerHTML = creazioneTagImmagine;


}