// JavaScript è un linguaggio di scripting

// inserire riga singola di COMMENTI
/* inserire riga multipla di COMMENTI */

// STAMPARE righe di ISTRUZIONE
// inserire MESSAGGIO all'interno della CONSOLE
// crea un messaggio che compare come "nota" solo all'interno della console, presente nella sezione "esamina / analizza" + "console" - non va in esecuzione
console.log("Messaggio presente nella console del sito");

// funzione WRITE
// deve essere usata con l'istanza "document"
// document = DOM; writeIn = metodo che prevede dei "parametri", porzione di testo che verrà visualizzato nel documento HTML
// se all'interno dei ("parametri") vengono inseriti tag HTML come ("<p>Ciao Priscilla</p>") il browser lo riconosce come <p> di paragrafo
// il contenuto presente all'interno delle () racchiude la funzione o metodo dell'oggetto
document.write("Testo");
document.write("<p style='color:red;'>Testo</p>");

// funzione WRITE+IN
document.writeln("Testo");

// istruzione VAR
// dichiarare variabili
// le variabili vengono identificate con il nome var o let
// la possibilità di usare la variabile avviene nel momento in cui viene dichiarata in giù
var nomeVariabile;

// per definirla viene assegnato un VALORE
// variabile + (nome variabile) = (any=qualunque)
var nomeVariabile=valore;
var nomeVariabile=5

var nomeVariabile=5;
console.log(nomeVariabile);  // stampa il valore 5

// ELENCARE più variabili con proprietà simili all'interno della stessa riga
var var01, var var02, var var03, ... ; 

// OPERATORI ARITMETICI
+ // addizione
- // sottrazione
* // moltiplicazione
/ // divisione

% // modulo o resto
- // negazione
++ // incremento
-- // decremento

// OPERATORI RELAZIONALI
< // minore
> // maggiore
<= // minore o ugale
>= // maggiore o uguale
== // uguale
!= // diverso
=== // strettamente uguale
!== // strettamente diverso

&& // and (e)
|| // or (o)
! // not (non)

// istruzione IF + ELSE
// viene eseguito il comando nel caso la condizione sia soddisfatta
// la condizione va inserita fra le parentesi () mentre i comandi fra le parentesi {}
var numeroInserito=-100;
if (numeroInserito>=0) {
    console.log("La variabile inserita è positiva");  
} else {
    console.log("La variabile inserita è negativa"); 
}

//CICLI

    //CICLI IN POST CONDIZIONE

    :inizio
    {
        //CORPO DEL CICLO
    } if(condizione di permanenza) goto : inizio;

    if (condizione di permanenza) goto :fine {
        
    } goto :inizio
    :fine
     
    //PRE CONDIZIONE

        while (condition) {
            
        }

    //POST CONDIZIONE
    
    do {
        
    } while (condition);