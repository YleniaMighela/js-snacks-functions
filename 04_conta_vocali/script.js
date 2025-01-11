/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui
 
 function stringaVocali (vocali) {

const vocaliArray = ["a", "e", "i", "o", "u"];

 let conteggio = 0;

    for ( let i = 0; i <= vocali.length; i++) {

        if(vocaliArray.includes(vocali[i])) {

            conteggio++;
        }

    }

return conteggio;


 }

 
// Invoca la funzione qui stampa il risultato in console

 
console.log(stringaVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

