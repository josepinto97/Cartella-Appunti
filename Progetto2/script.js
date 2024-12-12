/*----- VARIABIOLI GLOBALI -----*/

let aperto = false;

let login_aperto = false;

let menu = document.getElementById('menu');

let form_login = document.getElementById('form_login');

let pulsante_login = document.getElementById('pulsante_login');


/*----- HEADER -----*/


/* evidenzio pulsante della pagina corrente */
let pagina_corrente = window.location.pathname;

let pulsante_home = document.getElementById('home');
let pulsante_prodotti = document.getElementById('prodotti');
let pulsante_utente = document.getElementById('utente');

let style_pulsante_corrente = {
    color: 'white',
    pointerEvents: 'none'
};

switch (pagina_corrente) {
    case '/Progetto2/index.php':
        Object.assign(pulsante_home.style, style_pulsante_corrente);
        break;

    case '/Progetto2/prodotti.php':
        Object.assign(pulsante_prodotti.style, style_pulsante_corrente);
        break;

    case '/Progetto2/utente.php':
        Object.assign(pulsante_utente.style, style_pulsante_corrente);
        break;
}

/* gestione menu hamburger */

function gestione_menu_hamburger() {

    let icona_hamburger = document.getElementById('menu_hamburger');

    if (aperto) {
        menu.style.display = 'none';
        aperto = false;
        login_aperto = false;
        form_login.style.display = 'none';
    } else {
        menu.style.display = 'block';
        aperto = true;
    }

}



/* gestico comparsa login */

function apri_login() {

    if (login_aperto) {
        form_login.style.display = 'none';
        login_aperto = false;
        pulsante_login.style.textDecoration = 'unset';
    } else {
        form_login.style.display = 'flex';
        login_aperto = true;
        pulsante_login.style.textDecoration = 'underline white';
    }

}



/* resizing menu hamburger e login */

window.addEventListener('resize', function () {

    let schermata_larghezza = window.innerWidth;

    if (schermata_larghezza > 715) {
        aperto = false;
        menu.style.display = 'flex';
        login_aperto = false;
        form_login.style.display = 'none';
        pulsante_login.style.textDecoration = 'unset';
    } else {
        aperto = false;
        menu.style.display = 'none';
        login_aperto = false;
        form_login.style.display = 'none';
        pulsante_login.style.textDecoration = 'unset';
    }

});

/*----- MAIN -----*/

/* cambio classe schede prodotti su grandezza schermo */

function cambio_classe() {
    let elementi = document.querySelectorAll('.prodotti')
    let grandezza_media = 993;
    let grandezza_minima = 768;

    elementi.forEach((elemento) => {
        if (window.innerWidth > grandezza_media) {
            if (!elemento.classList.remove('col-6')) elemento.classList.add('col-4');
        } else if (window.innerWidth < grandezza_media && window.innerWidth > grandezza_minima) {
            if (elemento.classList.remove('col-4')) {
                elemento.classList.add('col-6')
            }else{
                elemento.classList.remove('col-12');
                elemento.classList.add('col-6');
            }
        } else if (window.innerWidth < grandezza_minima) {
            elemento.classList.remove('col-6');
            elemento.classList.add('col-12');
        }
    });
}

window.addEventListener('resize', cambio_classe)

cambio_classe();