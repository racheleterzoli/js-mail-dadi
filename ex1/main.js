
var mail = ["giorgiorossi@tim.it", "marcobolla@google.it", "paolobelli@gente.it", "ultimoultimo@libero.it", "lasciastare@libero.it"];

console.log(mail[0]);
console.log(mail[1]);
console.log(mail[2]);
console.log(mail[3]);
console.log(mail[4]);
var emailutente = prompt ("inserisci la tua email e verificherò che tu sia in elenco tra gli invitati al party");
for ( var i = 0; i < mail.length; i++){
  if (mail [i] == emailutente){
    document.getElementById('stampa').innerHTML = "Ammesso al party" ;
break;
  }
  else {
    document.getElementById('stampa').innerHTML = "Non sei invitato, mi spiace, l'indirizzo email non corrisponde";
  }
}
