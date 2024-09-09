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

    let immagini = [
        {nome_file: 'isola', descrizione_immagine: 'descrizione 1'},
        {nome_file: 'sedie', descrizione_immagine: 'descrizione 2'},
        {nome_file: 'spiaggia', descrizione_immagine: 'descrizione 3'}
    ];

    let immagine = '<img class="immagine" src="img/' + immagini[indice].nome_file + '.jpg" alt="Immagine ' + immagini[indice].descrizione_immagine + '">';

    document.getElementById('id-immagine').innerHTML = immagine;

}