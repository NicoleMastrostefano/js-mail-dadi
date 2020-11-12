// Generare un numero random da 1  a 6 per il computer
function casuale() {
var n1=Math.round(Math.random()*5+1);
console.log(n1);
document.getElementById("numero1").innerHTML = "Hai ottenuto " + n1;

// Generare un numero random da 1  a 6 per il computer
var n2=Math.round(Math.random()*5+1);
console.log(n2);
document.getElementById("numero2").innerHTML = "L'avversario ha ottenuto " + n2;

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (n1 > n2)
    document.getElementById("messaggio").innerHTML = "HAI VINTO!";

else if (n1 < n2)
    document.getElementById("messaggio").innerHTML = "HAI PERSO!";

else
document.getElementById("messaggio").innerHTML = "HAI PAREGGIATO!";
}
