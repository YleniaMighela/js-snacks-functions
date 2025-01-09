/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function  arrNomiIniziali(nomiArray){
    
    // creo un array vuoto
    const inizialiNomi = [];
    
    
    // creo un ciclo for sull'array 
    for(let i = 0; i < names.length; i++) {

        inizialiNomi.push(nomiArray[i].charAt(0));
   
    }

        
        return inizialiNomi;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(arrNomiIniziali(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
