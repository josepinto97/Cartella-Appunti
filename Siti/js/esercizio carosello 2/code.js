//VARIABILI GLOBALI

let array_immagini = ['collina', 'isola', 'lago', 'luna', 'mango', 'sassi'];
let array_immagini_attuali = [];
let contatore_immagini = 0;




function genera_immagine() {


    let contenuto_html = '';

    if (contatore_immagini < 6) {
        contenuto_html += '<img src="immagini/' + array_immagini[contatore_immagini] + '.jpg" alt="">';
        document.getElementById("contenitore_immagini").innerHTML += contenuto_html;
        array_immagini_attuali[contatore_immagini] = array_immagini[contatore_immagini];
        contatore_immagini++;
    }


}



function inverti_immagini_sinistra() {


    //estraggo primo campo dell array
    let prima_immagine = array_immagini_attuali.shift();
    let contenuto_html = '';

    //inserisco all ultimo posto dell array
    array_immagini_attuali.push(prima_immagine);

    for (let i = 0; i < contatore_immagini; i++) {
        contenuto_html += '<img src="immagini/' + array_immagini_attuali[i] + '.jpg" alt="">';
    }

    document.getElementById("contenitore_immagini").innerHTML = contenuto_html;


}
/* setInterval(inverti_immagini_sinistra, 5000); */



function inverti_immagini_destra() {


    let ultima_immagine = array_immagini_attuali.pop();
    let contenuto_html = '';

    array_immagini_attuali.unshift(ultima_immagine);

    for (let i = 0; i < contatore_immagini; i++) {
        contenuto_html += '<img src="immagini/' + array_immagini_attuali[i] + '.jpg" alt="">';
    }

    document.getElementById("contenitore_immagini").innerHTML = contenuto_html;



}