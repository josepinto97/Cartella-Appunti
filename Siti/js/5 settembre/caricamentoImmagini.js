function init() {

    let numeroItemMenu = 3;

    creaItemsMenu(numeroItemMenu, 'id-main-menu');

}

function creaItemsMenu(numeroItemMenu, idMenu) {

    let menuItems = '';

    for (let i = 0; i < numeroItemMenu; i++) {
        menuItems += '<a onclick="' + 'caricaImmagine(' + i.toString() + ')' + '">Immagine ' + i.toString() + '</a>';
    }

    document.getElementById(idMenu).innerHTML = menuItems;

}

function caricaImmagine(indice) {

    let immagine_attuale = ["isola", "sedie", "spiaggia"];
    let immagine = '<img class="immagine" src="img/' + immagine_attuale[indice] + '.jpg" alt="Immagine">';

    document.getElementById('id-immagine').innerHTML = immagine;

}