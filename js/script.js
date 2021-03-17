$(function(){

  /* Oggetto studente con proprietà: nome, cognome e età. */
  var studente = {
    nome: "matia",
    cognome: "casu",
    eta: 26
  };
  /* /Oggetto studente con proprietà: nome, cognome e età. */

  /* Stampa a schermo le proprietà dell'oggetto con un ciclo for-in */
  var proprieta = "";
  for(var key in studente){
    proprieta += "<br>" + studente[key];
  }

  $("p.n1").append(proprieta);
  /* /Stampa a schermo le proprietà dell'oggetto con un ciclo for-in*/

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
  var nomeCognome = "<br>";

  for(var i = 0; i < studenti.length; i++){

    nomeCognome += studenti[i]["nome"]+ " " + studenti[i]["cognome"] + "<br>";
  }
  $("p.n2").append(nomeCognome);
  /* /Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. */

  /* L’utente aggiunge un nuovo oggetto studente con: nome, cognome e età con 3 prompt*/
  function aggiungiStudente(array){
    var nomeU = prompt("Aggiungi nome");
    var cognomeU = prompt("Aggiungi cognome");
    var etaU = parseInt(prompt("Aggiungi età"));
    var nuovoStudente = {
      nome : nomeU,
      cognome : cognomeU,
      eta: etaU
    }
    array.push(nuovoStudente);
  }

  $("button.add").click(
    function(){
      aggiungiStudente(studenti);
      console.log(studenti);
    }
  )
  
  /* L’utente aggiunge un nuovo oggetto studente con: nome, cognome e età con 3 prompt*/

});
