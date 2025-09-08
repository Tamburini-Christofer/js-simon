//Prendiamo gli input dell'utente
let primoInput = document.getElementById("input1");
let secondoInput = document.getElementById("input2");
let terzoInput = document.getElementById("input3");
let quartoInput = document.getElementById("input4");
let quintoInput = document.getElementById("input5");
const inputGruppo = document.getElementById ("input-group")

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
    for (i = 0; i < numeroMoltiplicazioni; i++) {
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
let conto = 30;
//Creiamo un timer
function decrementa() {
//Decrementiamo e scriviamo il numero 
        contoRovesciaOutput.innerText = conto--;
//Se il numero è uguale a 0 
        if (conto === 0) {
        contoRovesciaOutput.style.display = "none";
        istruzioni.style.display = "none";
        inputGruppo.style.display = "block"
        }
}

//Lanciamo la funzione intervallo
 setInterval(decrementa, 1000);

//Generiamo i numeri nel file DOM
for (let i = 0; i < numeriRandom.length; i++) {
    let numeroRandomLi = numeriRandom[i];
    numeroRandomLi.innerText = arrayNumeri (1, 50, 1)
}
