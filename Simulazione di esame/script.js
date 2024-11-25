let pagina_home = document.getElementById('home');
let pagina_categoria_prodotti = document.getElementById('cat_prodotti');

if (window.location.pathname === '/Simulazione%20di%20esame/index.html') {
    pagina_home.style.textDecoration = 'underline black';
    pagina_home.style.color = 'gray';
    pagina_home.style.pointerEvents = 'none';
} else if (window.location.pathname === '/Simulazione%20di%20esame/categorie_prodotti.html'){
    pagina_categoria_prodotti.style.textDecoration = 'underline black';
    pagina_categoria_prodotti.style.color = 'gray';
    pagina_categoria_prodotti.style.pointerEvents = 'none';
}