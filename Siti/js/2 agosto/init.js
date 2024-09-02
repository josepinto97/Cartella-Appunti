function init(params) {


    //CREO LA STRUTTURA DEL BODY

    let numeroColonne = 11;
    let body = '';
    let header = '';
    let mainContent = '';
    let footer = '';

    header += '<header>';
    header += '<nav></nav>';
    header += '</header>';
    mainContent += '<main>';
    mainContent += '<div id="main-content">';
    //mainContent += creaColonna(numeroColonne);
    mainContent += '</div>';
    mainContent += '</main>';
    footer += '<footer></footer>';
    body = header + mainContent + footer;
    document.getElementById("id-body").innerHTML = body;

    //CARICO IN UN SECONDO MOMENTO DOPO IL CARICAMENTO DEL BODY

    document.getElementById("main-content").innerHTML = creaColonna(numeroColonne);        


}



// CREO N NUMERO DI COLONNE

function creaColonna(numero_colonne) {

    let colonne = '';

    for (let i = 0; i < numero_colonne; i++) {
        if ((i + 1) < 10) {
            colonne += '<div class="card-0' + (i + 1).toString() + '"></div>'
        } else {
            colonne += '<div class="card-' + (i + 1).toString() + '"></div>'
        }
    }

    return colonne;
}