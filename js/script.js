/* Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */


// /* Oggetto studente con proprietà: nome, cognome e età. */
// var studente = {
//   nome: "matia",
//   cognome: "casu",
//   eta: 26
// };
// /* /Oggetto studente con proprietà: nome, cognome e età. */
//
// /* Stampa a schermo le proprietà dell'oggetto con un ciclo for-in */
// var proprieta = "";
// for(var key in studente){
//   proprieta += "<br>" + studente[key];
// }
//
// $("p").append(proprieta);
// /* /Stampa a schermo le proprietà dell'oggetto con un ciclo for-in*/

/* Creare un array di oggetti di studenti */
var studenti = [
  {
    nome: "matia",
    cognome: "casu",
    eta: 26
  },
  {
    nome: "franco",
    cognome: "pippo",
    eta: 32
  },
  {
    nome: "pluto",
    cognome: "brambilla",
    eta: 20
  },
];
/* /Creare un array di oggetti di studenti */

/* Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. */
var proprieta = "<br>";

for(var i = 0; i < studenti.length; i++){

  proprieta += studenti[i]["nome"]+ " " + studenti[i]["cognome"] + "<br>";
}

$("p").append(proprieta);
/* /Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. */
