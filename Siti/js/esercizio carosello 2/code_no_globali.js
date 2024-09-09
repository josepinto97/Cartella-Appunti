function genera_immagine(indice, sto_generando, aggiorno_ciclo, ciclo) {


    let array_immagini = ['collina', 'isola', 'lago', 'luna', 'mango', 'sassi'];
    let contenuto_html = '';

    if (indice < 6 && sto_generando == true) {
        contenuto_html += '<img src="immagini/' + array_immagini[indice] + '.jpg" alt="">';
        document.getElementById("contenitore_immagini").innerHTML += contenuto_html;
        document.getElementById("pulsante_rotazione_sinistra").innerHTML = '<button onclick="inverti_immagini_sinistra(' + (indice + 1) + ', 0)">Inverti Immagini a Sinistra</button>';
        document.getElementById("pulsante_immagini").innerHTML = '<button onclick="genera_immagine(' + (indice + 1) + ', true)">Carica Immagine</button>';
    }

    if (aggiorno_ciclo == true) {
        document.getElementById("pulsante_rotazione_sinistra").innerHTML = '<button onclick="inverti_immagini_sinistra(' + indice + ',' + (ciclo + 1) + ')">Inverti Immagini a Sinistra</button>';
    }


}



function inverti_immagini_sinistra(indice, ciclo) {


    //mi salvo su nu array le immagini attuali
    let array_immagini = ['collina', 'isola', 'lago', 'luna', 'mango', 'sassi'];
    let array_immagini_attuali = [];
    let contenuto_html = '';

    for (let i = 0; i < indice; i++) {
        array_immagini_attuali[i] = array_immagini[i];
    }

    //se il ciclo e superiore alla prima ripetizione scorro le immagini dell array attuale fino alla posizione della precedente rotazione
    for (let i = 0; i < ciclo; i++) {
        let prima_immagine = array_immagini_attuali.shift();
        array_immagini_attuali.push(prima_immagine);
    }

    //inserisco il primo elemento all ultimo posto
    let prima_immagine = array_immagini_attuali.shift();
    array_immagini_attuali.push(prima_immagine);

    for (let i = 0; i < indice; i++) {
        console.log(array_immagini_attuali[i]);
        contenuto_html += '<img src="immagini/' + array_immagini_attuali[i] + '.jpg" alt="">';
    }

    document.getElementById("contenitore_immagini").innerHTML = contenuto_html;

    //aggiorno l html del pulsante con il ciclo + 1
    genera_immagine(indice, false, true, ciclo);


}