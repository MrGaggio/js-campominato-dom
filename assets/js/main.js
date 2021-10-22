/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


Consegna Es.2
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49


Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su ogni cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando
il giocatore clicca su una bomba
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

*/


//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.


// DOM elements selection

const playBtnEl = document.querySelector('.controls > button');
const selectLevelEl = document.getElementById('level');
const selectGridContainerEl = document.querySelector('main > .container')


// Event Listener


playBtnEl.addEventListener('click', function () {
    console.log('cliccato su play, avviare il gioco...');

    // Select the game level
    const [grid_cells, cells_per_line] = selectLevel(selectLevelEl)
    console.log(grid_cells, cells_per_line );

    //Genera la griglia
    //GenGrid(Grid Cells)
    //selezionare contenitore della griglia
    //Creare le celle della griglia


    //pulire il contenuto del contenitore
    selectGridContainerEl.innerHTML = ''
    //Ciclare per inserire le celle a seconda del range
    for (let i = 1; i <= grid_cells; i++) {
        // Creare un nodo della dom per ciascuna cella
        const divEl = document.createElement('div')
        // appendere alla cella il rispettivo numero
        divEl.append(i)
        console.log(divEl);
        // definire misura della cella
        divEl.style.cssText = "width:calc(100% / ${per_line}); height:calc(100% / ${per_line});"
        divEl.classList.add('cell')
        
        // inserire le celle nel contenitore

        selectGridContainerEl.append(divEl)
        
    }
    
})



 //FUNZIONI


function selectLevel(domElement) {

    // Select the game level
    const level = domElement.value
    let cellsNumber;

    // Check the level and define grid dimention
    if (level == '1') {
        console.log('easy level');
        cellsNumber = 100;
        cells_per_line = 10;
    } else if (level == '2') {
        console.log('medium level');
        cellsNumber = 81;
        cells_per_line = 9;
    } else if (level == '3') {
        console.log('hard level');
        cellsNumber = 49;
        cells_per_line = 7;
    }
    return [cellsNumber, cells_per_line];
} 


/* let playerLv = prompt("Scegli il lv di difficolta' tra 1 e 3") */

/*  let contenitore_quadrati = document.querySelector(".container")



if ( level == 1) {
    for (let i = 1; i <= 100; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'quadrato'
        myDiv.append(i)
        contenitore_quadrati.append(myDiv)
        contenitore_quadrati.style.width = '1000px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })
    
    }
}else if (level == 2 ){
    for (let i = 1; i <= 81; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'quadrato'
        myDiv.append(i)
        contenitore_quadrati.append(myDiv)
        contenitore_quadrati.style.width = '900px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })
       
    }
}else if (level == 3 ){
    for (let i = 1; i <= 49; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'quadrato'
        myDiv.append(i)
        contenitore_quadrati.append(myDiv)
        contenitore_quadrati.style.width = '700px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })
        
    }
} 
*/