function init() {



    //CREO LA STRUTTURA DEL BODY

    let body = '';
    let header = '';
    let mainContent = '';
    let footer = '';

    header += '<header>';
    header += '<nav></nav>';
    header += '</header>';
    mainContent += '<main>';
    mainContent += '<div id="main-content">';
    mainContent += '</div>';
    mainContent += '<form id="form01" action=""><label for="numeroColonne">Inserisci numero colonne</label><input type="number" placeholder="colonne main" id="numeroColonneMain"><input type="number" placeholder="colonne footer" id="numeroColonneFooter"><button type="button" onclick="getFormData()">INVIA</button></form>';
    mainContent += '</main>';
    footer += '<footer>'
    footer += '<div id="footer-content">';
    footer += '</div>';
    footer += '</footer>';
    body = header + mainContent + footer;
    document.getElementById("id-body").innerHTML = body;

    //CARICO IN UN SECONDO MOMENTO DOPO IL CARICAMENTO DEL BODY

    //document.getElementById("main-content").innerHTML = creaColonna(numeroColonne);

    //STYLE FORM01

    let form01 = document.getElementById("form01");
    form01.style.display = "flex";
    form01.style.gap = "30px";
    form01.style.justifyContent = "space-evenly";
    form01.style.margin = "60px";
    form01.style.flexWrap = "wrap";

    //STYLE FOOTER-CONTENT

    let footer_content = document.getElementById("footer-content");
    footer_content.style.display = "flex";
    footer_content.style.gap = "30px";
    footer_content.style.justifyContent = "space-evenly";
    footer_content.style.margin = "60px";
    footer_content.style.flexWrap = "wrap";

    //STYLE MAIN-CONTENT

    let main_content = document.getElementById("main-content");
    main_content.style.display = "flex";
    main_content.style.gap = "30px";
    main_content.style.justifyContent = "space-evenly";
    main_content.style.margin = "60px";
    main_content.style.flexWrap = "wrap";



}



// CREO N NUMERO DI COLONNE

function creaColonna(numero_colonne, posizione) {

    let colonne = '';

    if (posizione === "main") {
        for (let i = 0; i < numero_colonne; i++) {
            if ((i + 1) < 10) {
                colonne += '<div id="MainCard-0' + (i + 1).toString() + '">colonna-0' + (i + 1).toString() + '</div>';
            } else {
                colonne += '<div id="MainCard-' + (i + 1).toString() + '">colonna-' + (i + 1).toString() + '</div>';
            }
        }
    } else {
        for (let i = 0; i < numero_colonne; i++) {
            if ((i + 1) < 10) {
                colonne += '<div id="FooterCard-0' + (i + 1).toString() + '">colonna-0' + (i + 1).toString() + '</div>';
            } else {
                colonne += '<div id="FooterCard-' + (i + 1).toString() + '">colonna-' + (i + 1).toString() + '</div>';
            }
        }
    }


    return colonne;
}



//PRENDO IL NUMERO DI COLONNE DA FORM

function getFormData() {
    let numeroColonneMain = document.getElementById("numeroColonneMain").value;
    let numeroColonneFooter = document.getElementById("numeroColonneFooter").value;

    //CARICO IN UN SECONDO MOMENTO DOPO IL CARICAMENTO DEL BODY LE COLONNE

    document.getElementById("main-content").innerHTML = creaColonna(numeroColonneMain, "main");
    document.getElementById("footer-content").innerHTML = creaColonna(numeroColonneFooter, "footer");

    //STYLE CARD MAIN-CONTENT

    for (let i = 0; i < numeroColonneMain; i++) {
        let idAttualeMain;
        if (i < 9) {
            idAttualeMain = "MainCard-0" + (i + 1).toString();
        } else {
            console.log("ciao");
            idAttualeMain = "MainCard-" + (i + 1).toString();
        }
        let cardMain = document.getElementById(idAttualeMain);
        cardMain.style.backgroundColor = "aqua";
    }


    //STYLE CARD FOOTER-CONTENT

    for (let i = 0; i < numeroColonneFooter; i++) {
        let idAttualeFooter;
        if (i < 9) {
            idAttualeFooter = "FooterCard-0" + (i + 1).toString();
        } else {
            idAttualeFooter = "FooterCard-" + (i + 1).toString();
        }
        let cardFooter = document.getElementById(idAttualeFooter);
        cardFooter.style.backgroundColor = "orange";
    }

}