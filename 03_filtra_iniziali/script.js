/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nomeLetteraA (nomeArray, lettera) {

   
    // creo un array vuoto
    const letteraSpecifica = [];

       // creo un ciclo for

       for ( let i = 0; i < nomeArray.length; i++) {

        if ( nomeArray[i].charAt(0) === lettera) {

            letteraSpecifica.push(nomeArray[i]);
        }


       }


return letteraSpecifica

}
const nomiPresenti = nomeLetteraA(names,"A");
 console.log(nomiPresenti);
 


   



// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]