/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Facciamo prima la parte grafica a mano e solo dopo passiamo allo script
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli in un secondo momento. */


let row = 10
let col = 10
let numberSquare = row * col
let minNumber = 1;
const containerGrid = document.getElementById('griglia')


// Selezione elementi Dom
let selectLevel = document.getElementById("difficolta")
let buttonPlay = document.getElementById('button')

//funzione che al click seleziona il lv e in base al lv seleziona il tipo di griglia
buttonPlay.addEventListener('click', function () {
    containerGrid.innerHTML = ""
    const level = selectLevel.value
        if (level == "easy") {
        numberSquare = 100;
        row = 10;
        col = 10;
    } else if(level == "medium") {
        numberSquare = 81;
        row = 9;
        col = 9;
    
    } else if(level == "hard") {
        numberSquare = 49;
        row = 7;
        col = 7; 
    }

    for (let i = 1; i <= numberSquare; i++) {
        const square = document.createElement('div')
        //cambio colore al click
        square.addEventListener('click',function () {
            this.classList.add('blu')
        })
        //do al div la classe square
        square.classList.add('square')
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i)
        containerGrid.append(square)   
    }
})

/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*/

// creare 2 array di numeri e confrontare il primo con il secondo. Se nel secondo non è presente il numero pusharlo nel primo (ciclo while)

    







