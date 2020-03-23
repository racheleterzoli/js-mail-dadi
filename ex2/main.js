alert ("Giochiamo ai dadi, il numero più alto vince. Premi ok per continuare")



var utente = Math.round(Math.random()*5)+1;
var computer = Math.round(Math.random()*5)+1;

if (utente > computer){
  document.getElementById("stampa").innerHTML = "L'utente ha fatto " + utente + " mentre il pc ha fatto " + computer + ", quindi ha vinto l'utente.";
}
else if (computer > utente){
  document.getElementById("stampa").innerHTML = "Il pc ha fatto " + utente + " mentre l'utente ha fatto " + computer + ", quindi ha vinto il pc.";
}
else if (computer = utente){
  document.getElementById("stampa").innerHTML = "Il pc e l'utente hanno tirato al dado lo stesso numero: " + utente + " parità!";
}
