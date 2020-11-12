// Chiedi all’utente la sua email
var utente = (prompt("inserisci la tua e-mail"));
console.log(utente);
var mail = ["diego@gmail.com", "nicole@gmail.com","ludovica@gmail.com"]
console.log(mail);
var esito = false;
// controlla che sia nella lista di chi può accedere
for (var i = 0; i < mail.length; i++) {
console.log(mail[i])
  if (utente == mail[i]) {
    esito = true;
    console.log(esito);
  }
}
// stampa un messaggio appropriato sull’esito del controllo.
if (esito == true) {
    document.getElementById("messaggio").innerHTML = "la tua mail è stata trovata";
}
  else {
    document.getElementById("messaggio").innerHTML = "la tua mail non è stata trovata";
}
