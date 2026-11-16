// ==========================================================
//  JAVASCRIPT : LES BASES
//  Commentaires, console, variables, types, opérateurs,
//  interactions avec le navigateur, conditions
// ==========================================================

// --- LES COMMENTAIRES ---

// Commentaire simple, sur une seule ligne.
// Tout ce qui suit les // est ignoré par le navigateur.

/*
Commentaire sur plusieurs lignes.
Idéal pour décrire plusieurs choses d'un coup.
Même du code placé ici n'est PAS exécuté :
console.log("Coucou depuis commentaires")
*/

// Raccourci VS Code : Ctrl + / (Cmd + / sur Mac) commente ou décommente la ligne.
// Un bon commentaire explique le POURQUOI, pas le COMMENT :
// le code dit déjà ce qu'il fait, le commentaire dit pourquoi on le fait.

// Benjamin GOICHON 10:06
// comme dans un vieux couple, la comm c'est la clé

// --- LA CONSOLE ---

// console.log() affiche un message dans la console du navigateur.
// Pour l'ouvrir : clic droit > Inspecter > onglet Console (ou F12).
// C'est notre meilleur outil pour vérifier ce que contient une variable.
console.log("Coucou le navigateur depuis mon fichier script.js");

// --- LES VARIABLES ---

// Une variable, c'est un carton avec une étiquette :
// l'étiquette = le nom, le contenu = la valeur.
// Le contenu d'une variable peut changer au cours du programme.

// On déclare (on crée) une variable avec le mot-clé "let".
let age = 38;
console.log(age); // 38

// On change le contenu du carton : on "réassigne" la variable.
// Pas de "let" cette fois, le carton existe déjà !
age = 112;
console.log(age); // 112

// On ne peut pas déclarer deux fois la même variable avec let.
// === Erreur ! ===
// let age = 20;

// Note : vous croiserez parfois "var" dans de vieux codes.
// C'est l'ancienne façon de déclarer une variable, on utilise let et const.

// --- LES CONSTANTES ---

// Une constante est un carton scellé : sa valeur ne change JAMAIS.
// Ex : ma date de naissance.
const birthDate = "1989-01-03";
console.log(birthDate);

// On ne peut pas réassigner une valeur à une constante.
// === Erreur ! TypeError: Assignment to constant variable. ===
// birthDate = "1992-01-03";
// console.log(birthDate);

// Règle d'or : on utilise const par défaut,
// et let seulement quand on SAIT que la valeur va changer.

// --- NOMMER SES VARIABLES : LE camelCase ---

// camelCase = chaqueMotSaufLePremierAvecUneMajusculeALaPremiereLettre
// (les majuscules font des bosses, comme un chameau)
const numberOfBooksInMyLibrary = 42;

// Bonnes pratiques :
// - des noms en anglais, clairs et explicites (userName plutôt que x)
// - pas d'espace, pas d'accent, pas de tiret
// - ne commence jamais par un chiffre
// - JavaScript est sensible à la casse : age et Age sont deux variables différentes

// --- LES TYPES ---

// Number : un nombre entier ou à "virgule"
const score = 120;
const height = 1.94; // On utilise un point, pas une virgule !!!

// Boolean : une valeur qui ne peut être que vraie (true) ou fausse (false).
// Astuce de nommage : on préfixe souvent par is, has, can...
const isDeveloper = true;
const isNight = false;

// String : une chaîne de caractères (lettres, chiffres, symboles...).
// Pour définir une string, on n'oublie pas les "" ou '' ou `` (backticks).
const firstName = "Ludovic";
const city = "Sérignan-du-Comtat";

// Attention : "42" (entre guillemets) est une string, 42 est un number.
// typeof permet de vérifier le type d'une valeur :
console.log(typeof "42"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"

// --- LOGIQUE ---

// --- Opérateurs arithmétiques ---

// firstNumber est un let car on va le modifier plus bas.
// secondNumber est un const car il ne bougera pas.
let firstNumber = 5;
const secondNumber = 8;

// Addition
console.log(firstNumber + secondNumber); // 13

// Soustraction
console.log(firstNumber - secondNumber); // -3

// Multiplication
console.log(firstNumber * secondNumber); // 40

// Division
console.log(secondNumber / firstNumber); // 1.6

// Modulo (le reste de la division entière)
// 8 % 5 : dans 8 il y a 1 fois 5, et il reste 3.
// Wenting LI 11:41
// c'est les parts de gateau qui ne peut pas être partager également
console.log(secondNumber % firstNumber); // 3
// Usage courant : un nombre est pair si nombre % 2 vaut 0.

// Puissance
// 2 puissance 4 correspond à faire 2 x 2 x 2 x 2
console.log(2 ** 4); // 16

// Comme en maths : * et / passent avant + et -,
// et les parenthèses passent avant tout.
// 2 + 3 * 4 => 14    (2 + 3) * 4 => 20

// --- Incrémentation / décrémentation ---

// Ajouter une unité à une valeur
firstNumber = firstNumber + 1; // 6
// Raccourci : incrémentation
firstNumber++; // 7

console.log(firstNumber); // 7

// Retirer 1 à une valeur
firstNumber = firstNumber - 1; // 6
// Raccourci : décrémentation
firstNumber--; // 5

// Optionnel : pour ajouter ou retirer plus que 1
// firstNumber -= 5; revient à écrire firstNumber = firstNumber - 5;
// Ça marche aussi avec +=, *= et /=
console.log(firstNumber); // 5

// --- Opérateurs de comparaison ---

// Une comparaison pose une question à JavaScript.
// La réponse est TOUJOURS un boolean : true ou false.

// Égal à (valeur uniquement) ==
// JavaScript convertit "5" en 5 avant de comparer, d'où le true.
console.log("5" == 5); // true

// Strictement égal à (vérifie la valeur ET le TYPE) ===
// "5" est une string, 5 est un number : types différents, donc false.
console.log("5" === 5); // false

// Différent de (valeur uniquement) !=
console.log("5" != 5); // false (même valeur une fois convertie)
console.log(true != false); // true
console.log("bonjour" != "bonsoir"); // true
// La puissance est calculée AVANT la comparaison : 1 ** 2 vaut 1, et 2 != 1
console.log("EX: Puissance", 2 != 1 ** 2); // true

// Strictement différent de (valeur ET TYPE) !==
console.log("5" !== 5); // true

// Récap :
// ==  : les valeurs sont égales
// === : les valeurs + les types sont égaux
// !=  : les valeurs sont différentes
// !== : les valeurs OU les types sont différents
// (types : chaîne de caractères, nombre, booléen, etc.)

// Règle d'or : on utilise TOUJOURS === et !==
// Le == réserve des surprises : 0 == "" vaut true !

// Et ne pas confondre :
// =   => j'affecte une valeur (je remplis le carton)
// === => je compare deux valeurs (je pose une question)

// Supérieur à
console.log(5 > 4); // true
console.log(4 > 5); // false

// Inférieur à
console.log(5 < 4); // false
console.log(4 < 5); // true

// Supérieur ou égal à
console.log(8 >= 9); // false
console.log(8 >= 8); // true (égal, donc ça passe)
console.log(8 >= 7); // true

// Inférieur ou égal à
console.log(4 <= 5); // true
console.log(4 <= 4); // true (égal, donc ça passe)
console.log(4 <= 3); // false

// --- INTERACTIONS AVEC LE NAVIGATEUR ---

// Ces fonctions bloquent la page tant que l'utilisateur n'a pas répondu.
// Elles sont commentées pour ne pas surgir à chaque rechargement :
// décommentez-les pour tester (et gardez userName et total ensemble,
// les exemples suivants s'en servent).

// prompt()
// prompt() affiche une question et un champ de saisie.
// Ce que l'utilisateur tape est rangé dans la constante userName.
const userName = prompt("Quel est ton prénom ?");
// On a désormais l'information dans une variable !
// Pierre-André Robert 13:30
// ça permet à l'utilisateur de mettre des choses dans notre carton étiquetter
// console.log(userName);

// Si l'utilisateur clique sur "Annuler", prompt() renvoie null.

// alert()
// alert() affiche un message dans une fenêtre, avec un bouton OK.
alert("Attention, derrière toi !");

const total = prompt("Combien fait 2 + 2 ?");
alert("Résultat : " + total);

// Attention : la réponse d'un utilisateur à un prompt est TOUJOURS une STRING !
// Si l'utilisateur tape 4, total vaut "4" et pas 4.
// Pour faire des calculs, on convertit avec Number() :
// const totalAsNumber = Number(total);
// Sans conversion : "4" + 1 donne "41" (on colle) au lieu de 5 (on additionne).

// --- Concaténation ---
// Combiner plusieurs éléments pour créer une string dynamique, avec +
const string1 = "Bonjour !";
const string2 = "Comment ça va ?";
const concatenation = string1 + string2 + " ça va et toi, " + userName + " ?";
// Attention aux espaces : + colle tout tel quel,
// ici on obtiendrait "Bonjour !Comment ça va ?" (sans espace au milieu).

// --- Les littéraux de gabarits (template literals) ---
// On écrit la phrase entre backticks `` et on glisse les variables avec ${...}
// Plus lisible que la concaténation, et les espaces sont ceux qu'on tape.
const string3 = `Bonjour ! Comment ça va ? ça va et toi, ${userName} ?`;
// Backtick : AltGr + 7 sur un clavier PC, touche à gauche du Entrée sur Mac.

// Exemple complet : on injecte les réponses de l'utilisateur dans une alert()

const willYouPlayAt = prompt(
  "Est-ce que tu vas jouer à GTA VI dans trois jours ?"
);

alert(
  `Bien sûr que ${willYouPlayAt} et en plus je m'appelle ${userName} et je sais compter jusqu'à ${total}`
);

// --- LES CONDITIONS ---

// Une condition permet d'exécuter du code SEULEMENT dans certains cas.
// C'est là que les comparaisons (qui renvoient true ou false) servent vraiment.

// --- if ---

const temperature = 36;

// Si la comparaison entre parenthèses est vraie (true), le code entre { } s'exécute.
// Sinon, il est simplement ignoré et le programme continue.
if (temperature > 30) {
  // Ici si ma condition est vraie (true)
  console.log("il fait chaud! go à la piscine !");
}

// --- if / else ---

// else = "sinon" : le bloc qui s'exécute quand la condition est fausse.
// Un des deux blocs s'exécute forcément, jamais les deux.
if (temperature > 30) {
  // Ici si ma condition est vraie (true)
  console.log("il fait chaud! go à la piscine !");
} else {
  // Ici si ma condition est fausse (false)
  console.log("il fait trop froid !! go jouer à la console !");
}

// --- if / else if / else ---

// Pour tester plusieurs cas à la suite.
// JavaScript lit de haut en bas et s'arrête au PREMIER cas vrai :
// avec 36°, "> 35" est vrai, donc "> 25" n'est même pas testé.
// D'où l'importance de l'ordre : on part du cas le plus extrême.
if (temperature >= 40) {
  console.log("Tu vas cramer rentre chez toi !");
} else if (temperature > 35) {
  console.log("Un Mojito sans alcool ?");
} else if (temperature > 25) {
  console.log("ça va ça passe ...");
} else {
  // Le else final attrape tout ce qui n'est passé dans aucun cas au-dessus
  // (ici : 25° ou moins).
  console.log("ma sortie de secours obligatoire!");
}

// Exercice : changez la valeur de temperature (10, 28, 38, 45)
// et devinez le message AVANT de regarder la console.
