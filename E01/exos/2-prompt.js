/*
  ============================================================
    EXERCICE 2 : Pose-moi des questions !
  ============================================================

  🎯 OBJECTIF
  Remplir la fiche d'identité de l'exercice 1, mais cette fois
  c'est l'utilisateur de la page qui donne les informations,
  en répondant à des questions.

  👀 COMMENT SAVOIR SI C'EST BON ?
  Ouvre cet exercice dans ton navigateur via http://localhost/…
  Tes questions s'affichent une par une : réponds-y, puis regarde
  le résultat de chaque étape (✅ ou ❌ avec un indice).
  Après chaque modification : Ctrl + S, puis F5 dans le navigateur.

  📖 PETIT RAPPEL
  prompt affiche une question et renvoie ce que l'utilisateur a tapé.
  On range cette réponse dans une variable :

      const city = prompt("Dans quelle ville habites-tu ?");

  ⚠️ prompt renvoie toujours un texte (string), même si on tape un nombre.
*/

// ------------------------------------------------------------
// ÉTAPE 1 : Le prénom
// Demande son prénom à l'utilisateur avec prompt,
// et range sa réponse dans une variable firstName.
// ------------------------------------------------------------

// Écris ton code ici 👇
const firstName = prompt("Quel est ton prénom ?");
console.log(firstName);

// ------------------------------------------------------------
// ÉTAPE 2 : L'âge
// Demande son âge, et range la réponse dans une variable age.
// ------------------------------------------------------------

// Écris ton code ici 👇
const age = prompt("Quel est ton age ?");
console.log(age);

// ------------------------------------------------------------
// ÉTAPE 3 : Le loisir préféré
// Demande son loisir préféré, et range la réponse dans favoriteHobby.
// ------------------------------------------------------------

// Écris ton code ici 👇
const favoriteHobby = prompt("Quel est ton hobbit fav ?");
console.log(favoriteHobby);

// ------------------------------------------------------------
// ÉTAPE 4 : Le métier de rêve
// Demande le métier de ses rêves, et range la réponse dans dreamJob.
// ------------------------------------------------------------

// Écris ton code ici 👇
const dreamJob = prompt("Quel est ton job de rêve ?");
console.log(dreamJob);

// ------------------------------------------------------------
// ÉTAPE 5 : La couleur préférée
// Demande sa couleur préférée, et range la réponse dans favoriteColor.
// ------------------------------------------------------------

// Écris ton code ici 👇
const favoriteColor = prompt("Quel est ta couleur préférée ?");
console.log(favoriteColor);

// ------------------------------------------------------------
// ⭐ BONUS : La présentation
// Affiche avec alert une phrase qui présente l'utilisateur
// en utilisant tes 5 variables, grâce à un littéral de gabarit.
//
// 💡 Rappel : un littéral de gabarit s'écrit entre accents graves
//    (AltGr + 7), et ${...} permet d'y glisser une variable :
//
//      alert(`J'habite à ${city} !`);
// ------------------------------------------------------------

// Écris ton code ici 👇
alert(
  firstName +
    "," +
    age +
    "," +
    favoriteHobby +
    "," +
    dreamJob +
    "," +
    favoriteColor
);
alert(
  `${firstName} , ${age} , ${favoriteHobby} , ${dreamJob} , ${favoriteColor}`
);

// 🏁 Quand toutes les étapes sont vertes, bravo !
