function init() {



    //CREO LA STRUTTURA DEL BODY

    let numeroColonne;
    let body = '';
    let header = '';
    let mainContent = '';
    let footer = '';

    header += '<header>';
    header += '<nav></nav>';
    header += '</header>';
    mainContent += '<main>';
    /*     mainContent += '<form id="form01" action=""><label for="numeroColonne">Inserisci numero colonne</label><input type="number" id="numeroColonne"><button type="button" onclick="getFormData()">INVIA</button></form>'; */
    mainContent += '<div id="main-content">';
    //CARICO L INSERIMENTO DELLE COLONNE INSIEME AL CARICAMENTO DEL BODY
    //mainContent += creaColonna(numeroColonne);
    mainContent += '</div>';
    mainContent += '</main>';
    footer += '<footer></footer>';
    body = header + mainContent + footer;
    //document.getElementById("id-body").innerHTML = body;

    //CARICO IN UN SECONDO MOMENTO DOPO IL CARICAMENTO DEL BODY

    //document.getElementById("main-content").innerHTML = creaColonna(numeroColonne);



}



// CREO N NUMERO DI COLONNE

function creaColonna(numero_colonne) {

    let colonne = '';

    for (let i = 0; i < numero_colonne; i++) {
        if ((i + 1) < 10) {
            colonne += '<div class="card-0' + (i + 1).toString() + '">colonna-0' + (i + 1).toString() + '</div>';
        } else {
            colonne += '<div class="card-' + (i + 1).toString() + '">colonna-' + (i + 1).toString() + '</div>';
        }
    }

    return colonne;
}



//PRENDO IL NUMERO DI COLONNE DA FORM

function getFormData() {
    numeroColonne = document.getElementById("numeroColonne").value;

    //CARICO IN UN SECONDO MOMENTO DOPO IL CARICAMENTO DEL BODY

    document.getElementById("main-content").innerHTML = creaColonna(numeroColonne);
}