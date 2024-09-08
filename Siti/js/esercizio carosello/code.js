//VARIABILI GLOBALI
let contatore = 0;
let immagini = ['collina', 'isola', 'lago', 'luna', 'mango', 'sassi'];
let immagini_attuali = [];
let contenitore_immagini_invertito = '';



function genera_immagine() {


    //controllo l utente che puo stampare massimo 6 immagini
    if (contatore < 6) {
        stampa_html_immagine();
        immagini_attuali[contatore] = immagini[contatore];
        contatore++;
    }


}



function stampa_html_immagine() {

    let contenitore_immagini = '';

    contenitore_immagini += '<img src="immagini/' + immagini[contatore] + '.jpg" alt="">';

    document.getElementById('contenitore_immagini').insertAdjacentHTML('beforeend', contenitore_immagini);


}



function scorri_immagini() {


    //trasferisco il primo elemento di immagini _attuali a salvo_prima_immagine
    let salvo_prima_immagine = immagini_attuali.shift();

    //inserirsco all ultimo posto l elemento salvo_prima_immagine
    immagini_attuali.push(salvo_prima_immagine);

    //pulisco l html
    document.getElementById('contenitore_immagini').innerHTML = contenitore_immagini_invertito;

    //genero l html delle immagini inverite
    for (let i = 0; i < immagini_attuali.length; i++) {
        contenitore_immagini_invertito += '<img src="immagini/' + immagini_attuali[i] + '.jpg" alt="">';
    }

    document.getElementById('contenitore_immagini').innerHTML = contenitore_immagini_invertito;

    //evito ripetizioni di immagini se il pulsante viene premuto piu volte
    contenitore_immagini_invertito = '';    


}
setInterval(scorri_immagini, 5000);