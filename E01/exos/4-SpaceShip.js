/*
  ============================================================
    EXERCICE 3 : Préparation du voyage spatial 🚀
  ============================================================

  🎯 OBJECTIF
  Tu es aux commandes d'un vaisseau spatial. Avant le décollage,
  ton programme doit calculer ce dont l'équipage a besoin,
  en fonction des réponses de l'utilisateur.

  👀 COMMENT SAVOIR SI C'EST BON ?
  Ouvre cet exercice dans ton navigateur via http://localhost/…
  Réponds aux questions, puis regarde le résultat de chaque étape.
  Le correcteur teste aussi ton code avec d'autres réponses que
  les tiennes, pour vérifier que tes conditions marchent dans tous les cas.
  Après chaque modification : Ctrl + S, puis F5 dans le navigateur.

  📖 PETIT RAPPEL
  - Number() transforme un texte en nombre :
        const age = Number(prompt("Quel âge as-tu ?"));

  - if / else exécute un code ou un autre selon une condition :
        if (age > 18) {
          message = "Tu es majeur";
        } else {
          message = "Tu es mineur";
        }

  - Une variable dont la valeur change après sa création
    se déclare avec let (et pas const) :
        let message = "";
*/


// ------------------------------------------------------------
// ÉTAPE 1 : La distance du voyage 🌌
// Demande avec prompt la distance du voyage (en années-lumière),
// convertis la réponse en nombre avec Number(),
// et range le résultat dans une constante distance.
// ------------------------------------------------------------

// Écris ton code ici 👇
const distance=Number(prompt("Combien y-a-t-il de distance pour ce voyage en année-lumière?"));


// ------------------------------------------------------------
// ÉTAPE 2 : Le type de voyage
// Crée une variable voyageType (avec let). Grâce à une condition :
//   - si distance est plus grande que 50, elle vaut :
//       "🌌 Voyage long (mission intergalactique)"
//   - sinon, elle vaut :
//       "🪐 Voyage court (proche système solaire)"
// ------------------------------------------------------------

// Écris ton code ici 👇
let voyageType = "";
if(distance>50){
  alert("🌌 Voyage long (mission intergalactique)");
} else {
  alert("🪐 Voyage court (proche système solaire)");
};


// ------------------------------------------------------------
// ÉTAPE 3 : Le carburant nécessaire ⛽
// Crée une constante fuelNeeded qui vaut la distance multipliée par 3.
// ------------------------------------------------------------

// Écris ton code ici 👇
const fuelNeeded = distance * 3;
console.log(fuelNeeded);


// ------------------------------------------------------------
// ÉTAPE 4 : Le message carburant
// Crée une variable fuelMessage (avec let). Grâce à une condition :
//   - si fuelNeeded est plus grand que 300, elle vaut :
//       "⚠️ Trop de carburant, surcharge possible !"
//   - sinon, elle vaut :
//       "✅ Quantité de carburant acceptable"
// ------------------------------------------------------------

// Écris ton code ici 👇
let fuelMessage;
if( fuelNeeded>300){
    fuelMessage="⚠️ Trop de carburant, surcharge possible !";
  }else{
    fuelMessage="✅ Quantité de carburant acceptable"
  };
  


// ------------------------------------------------------------
// ÉTAPE 5 : Les voyageurs 👨‍🚀
// Demande avec prompt le nombre de voyageurs (5 maximum),
// convertis la réponse en nombre, et range-la dans une variable travellers
// (avec let : sa valeur pourra changer).
// Si travellers est plus grand que 5 :
//   - préviens l'utilisateur avec alert qu'il y a trop de voyageurs,
//   - puis redemande le nombre avec un nouveau prompt,
//     et range la nouvelle réponse (en nombre) dans travellers.
// ------------------------------------------------------------

// Écris ton code ici 👇

let travellers = Number(prompt("Combien y-a-t-il de voyageurs ?"));
if(travellers>5){
  alert("Il y a trop de voyageur !!");
  travellers = Number(prompt("Combien y-a-t-il de voyageurs ?"))};





  


// ------------------------------------------------------------
// ÉTAPE 6 : L'oxygène nécessaire
// Crée une constante oxygenNeeded qui vaut :
//   le nombre de voyageurs × la distance × 0.5
// ------------------------------------------------------------

// Écris ton code ici 👇
const oxygenNeeded = travellers * distance * 0.5;
console.log(oxygenNeeded);


// 🏁 Quand toutes les étapes sont vertes : décollage autorisé !


if(travellers>5){
alert("Décollage non autorisé");
} else if(distance>100){
  alert("Décollage non autorisé");
} else if(fuelNeeded>300){
  alert("Décollage non autorisé");
} else {alert("Décollage autorisé")};