function caricamentoTAG() {


    
    console.log("Passato dallo srtipt js");
    //inserisco del testo dentro al mio id
    let testoDaInserire = 'Benvenuto nella pagina HTML dinamica';
    let nodo = document.getElementById("ParagrafoDaCompletare");
    //textcontent viene usato solo per il testo innerhtml sia testo che tag
    //nodo.innerHTML = testoDaInserire;
    nodo.textContent = testoDaInserire;
    //inserisco contenuto nell' html dell id htmlDentroDiv
    let htmlDentroDiv = '';
    htmlDentroDiv += '<p id="id-paragrafo01">Primo paragrafo dell\' articolo</p>';
    htmlDentroDiv += '<p id="id-paragrafo02">Secondo paragrafo dell\' articolo</p>';
    htmlDentroDiv += '<p id="id-paragrafo03">Terzo paragrafo dell\' articolo</p>';
    //assegno al mio id sull' html del contenuto
    document.getElementById("sezioneLaterale").innerHTML = htmlDentroDiv;
    console.log(htmlDentroDiv);


}