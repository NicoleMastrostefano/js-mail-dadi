// Chiedi all’utente la sua email
var utente = (prompt("inserisci la tua e-mail"));
console.log(utente);
// controlla che sia nella lista di chi può accedere

var mail = ["diego@gmail.com", "nicole@gmail.com","ludovica@gmail.com"]
console.log(mail);



    for (var i = 0; i < mail.length; i++) {
    console.log(mail[i]);

    if (mail[i] === utente) {
      document.getElementById("messaggio").innerHTML = "la tua mail è stata trovata";
      }
    }
