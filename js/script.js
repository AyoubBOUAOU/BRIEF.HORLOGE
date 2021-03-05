// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");


//Extraire l'heure actuel à l'aide de l'objet Date()
//  new Date().toLocaleTimeString('fr');
//  console.log(new Date().toLocaleTimeString('fr'));
function demarrerLaMontre() {
let date = new Date();
let secondes = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();


//Stocker l'heure , minute , seconde  dans des variables
AIGUILLESEC.style.transform=
`rotate(${secondes * 360 / 60 }deg)`

AIGUILLEMIN.style.transform=
    `rotate(${ minutes * 360 / 60 + secondes * 6 / 60 }deg)`
    
    AIGUILLEHR.style.transform=
    `rotate(${ hours * 360 / 12 + minutes * 30 / 60 }deg)`


}

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 





// Exercuter la fonction chaque second

//var interval = 
setInterval(demarrerLaMontre, 1000);