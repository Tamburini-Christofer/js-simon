//Prendiamo gli input dell'utente
let inputUtente = document.querySelectorAll("input")
let inputForm = document.getElementById ("answers-form")
let buttonSubmit = document.getElementById ("btn")
let paragrafo = document.getElementById ("message")

//Prendiamo il collegamento per inserire i numero random
let numeriRandom = document.querySelectorAll("li")

//Prendiamo il timer dall'Id countdown
let contoRovesciaOutput = document.getElementById("countdown")
const istruzioni = document.getElementById ("instructions")

//Creiamo una funzione che possa calcolare un numero tra due valori
function generatoreNumeriRandom (minimo, massimo) {
//Ritorniamo alla funzione stessa la randomizzazione
    return Math.floor (Math.random() * (massimo - minimo + 1)) + minimo;
}

//Creiamo una funzione che genere un ARRAY di un range
function arrayNumeri (numeroMinimo, numeroMassimo, numeroMoltiplicazioni) {
//Creiamo una variabile che contenga tale Array
    let array = [];
//Creiamo un ciclo che possa moltiplicare dei numeri a seconda del numeroMoltiplicazioni
    for (let i = 0; i < numeroMoltiplicazioni; i++) {
//Creiamo una nuova variabile contenente il nuovo Array randomizzato dalla funzione
        let nuovoNumeroArray = generatoreNumeriRandom (numeroMinimo, numeroMassimo);
//Creiamo un ciclo If per inserire SOLTANTO i numeri non contenuti nella variabile Array
        if (array.includes(nuovoNumeroArray)) {
            continue
        } else {
            array.push(nuovoNumeroArray);
        }
    }
    return array;
}

//Creiamo una variabile timer
let conto = 5;
//Creiamo un timer
function decrementa() {
//Decrementiamo e scriviamo il numero 
        contoRovesciaOutput.innerText = conto;
        conto--;
//Se il numero è uguale a 0 
        if (conto < 0) {
//A 0 il conto alla rovescia scompare
        contoRovesciaOutput.style.display = "none";
//Anche le istruzioni 
        istruzioni.style.display = "none";
//E anche tutti i tag list
        numeriRandom.forEach(li => li.style.display = "none")
//Prima rimuoviamo la classe di Bootstrap, poi facciamo apparire il form compelto
        inputForm.classList.remove("d-none");
        inputForm.style.display = "block";
}}

//Lanciamo la funzione intervallo
 setInterval(decrementa, 1000);
  let numeriGenerati = []

//Generiamo i numeri nel file DOM
for (let i = 0; i < numeriRandom.length; i++) {
    let numero = generatoreNumeriRandom(1, 50);
    numeriGenerati.push(numero);  
    numeriRandom[i].innerText = numero;
}

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let numeriIndovinati = 0;

    // Cicliamo sugli input e controlliamo se il numero è tra quelli generati
    inputUtente.forEach(input => {
        let valore = parseInt(input.value);
        if (numeriGenerati.includes(valore)) {
            numeriIndovinati++;
        }
    });
    paragrafo.innerText = `Hai indovinato ${numeriIndovinati} numeri su ${numeriGenerati.length}`;
});