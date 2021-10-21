/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */


//chiedere all'utente a quale livello di intensita' intende giocare
let playerLv = prompt("Scegli il lv di difficolta' tra 1 e 3")

// 1) da 1 a 100 quadrati - 2) da 1 a 81 quadrati - 3) da 1 a 49 quadrati
//Crea i Div_classe_quadrato in base al lv scelto

//appendi al container i div
let contenitore_quadrati = document.querySelector(".container")



//Attacca un eventListen a ciascun elemento creato nel ciclo


/* myDiv.addEventListener('click', function () {
    this.style.backgroundColor = 'blue'
}) */


/* Finito */


if (playerLv == 1) {
    for (let i = 1; i <= 100; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'quadrato'
        myDiv.append(i)
        contenitore_quadrati.append(myDiv)
        contenitore_quadrati.style.width = '1000px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })
        
        
        console.log("quadrato");
    }
}else if (playerLv == 2 ){
    for (let i = 1; i <= 81; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'quadrato'
        myDiv.append(i)
        contenitore_quadrati.append(myDiv)
        contenitore_quadrati.style.width = '900px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })
        
        console.log("quadrato");
    }

}else if (playerLv == 3 ){
    for (let i = 1; i <= 49; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'quadrato'
        myDiv.append(i)
        contenitore_quadrati.append(myDiv)
        contenitore_quadrati.style.width = '700px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })
        
        console.log("quadrato");
    }
}


