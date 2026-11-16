// 🚗 EXERCICE : PERMIS DE CONDUIRE

// 1. Demande son âge à l'utilisateur, transforme la réponse en nombre
// Utiliser  Number(prompt("ma question"))
// permet de transformer la réponse qui est de type string en un nombre
// et range-la dans une constante age
let age = prompt("Quel est ton âge ?");
age = Number(age);

const age2 = Number(prompt("Quel est ton âge ?"));

// 2. Si age est supérieur ou égal à 18 :
//    affiche "Tu peux passer le permis ! 🚗" avec alert()

if (age >= 18) {
  alert("Tu peux passer ton permis !");
} else {
  // 3. Sinon : calcule le nombre d'années restantes (18 - age)
  //    et affiche "Encore X an(s) à attendre ⏳" avec alert()
  const yearsBeforeDrivingLicense = 18 - age;
  alert(`Encore ${yearsBeforeDrivingLicense} an(s) à attendre ⏳`);
}

console.log(yearsBeforeDrivingLicense); // Faux car non défini en dehors de notre condition !