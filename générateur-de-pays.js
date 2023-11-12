// Tableau contenant les noms de toutes les pages
const pageList = ["Autriche.html", "Bouthan.html", "Islande.html", "Kirghizistan.html", "Norvège.html", "Madagascar.html", "Nouvelle-Zélande.html", "Pérou.html", "Sénégal.html", "Tanzanie.html"];


// Fonction pour rediriger l'utilisateur vers une page aléatoire
function redirectToRandomPage() {
  // Générer un nombre aléatoire entre 0 et 9 (index des pages dans le tableau)
  const randomIndex = Math.floor(Math.random() * pageList.length);

  // Récupérer le nom de la page à partir du tableau
  const randomPage = pageList[randomIndex];

  // Rediriger l'utilisateur vers la page sélectionnée
  console.log(randomPage)
  window.location.href = randomPage;
}
